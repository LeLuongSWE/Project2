using Backend.Data;
using Backend.Dto;
using Backend.Exceptions;
using Backend.Helpers;
using Backend.Services;
using Backend.Settings;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Backend.Models;

public class AuthService : IAuthService
{
    private readonly AppDbContext _db;
    private readonly JwtSettings _jwt;
    public AuthService(AppDbContext db, IOptions<JwtSettings> jwtOpt, IEmailService emailService)
    {
        _db = db;
        _jwt = jwtOpt.Value;
    }

    public async Task<string> LoginAsync(CustomerLoginDto dto)
    {
        var customer = await _db.Customers.SingleOrDefaultAsync(cus => cus.Email == dto.Email)
            ?? throw new BusinessException("Email không tồn tại", 1001);

        if (!PasswordHelper.VerifyPassword(dto.Password, customer.PasswordSalt, customer.PasswordHash))
            throw new BusinessException("Mật khẩu không đúng", 1002);

        return JwtHelper.GenerateToken(customer, _jwt);
    }

    public async Task RegisterAsync(CustomerRegisterDto dto)
    {
        var customer = await _db.Customers.SingleOrDefaultAsync();

        if (customer != null && customer.Email == dto.Email)
        {
            throw new BusinessException("Email đã tồn tại", 1003);
        }
        if (customer != null && customer.PhoneNumber == dto.PhoneNumber)
        {
            throw new BusinessException("Số điện thoại đã tồn tại", 1004);
        }

        PasswordHelper.CreatePasswordHash(dto.Password, out var salt, out var hash);
        var Customer = new Customer
        {
            Email = dto.Email,
            PasswordHash = hash,
            PasswordSalt = salt,
            PhoneNumber = dto.PhoneNumber,
            FullName = dto.FullName
        };
        try
        {
            await _db.Database.ExecuteSqlRawAsync(
                "EXEC dbo.InsertNewRegisterCustomer @p0, @p1, @p2, @p3, @p4",
                Customer.Email,
                Customer.PasswordHash,
                Customer.PasswordSalt,
                Customer.PhoneNumber,
                Customer.FullName
            );
        }
        catch (SqlException ex)
        {
            Console.WriteLine($"SQL Error {ex.Number}: {ex.Message}");
            if (ex.InnerException != null)
                Console.WriteLine("Inner Exception: " + ex.InnerException.Message);
            throw ;
        }
    }

    
    
}

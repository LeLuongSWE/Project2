using Backend.Data;
using Backend.Dto;
using Backend.Helpers;
using Backend.Services;
using Backend.Settings;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Backend.Models;

public class AuthService : IAuthService
{
    private readonly AppDbContext _db;
    private readonly JwtSettings _jwt;
    
    public AuthService(AppDbContext db, IOptions<JwtSettings> jwtOpt)
    {
        _db = db;
        _jwt = jwtOpt.Value;
    }
    
    public async Task<string> LoginAsync(CustomerLoginDto dto)
    {
        var customer = await _db.Customers.SingleOrDefaultAsync(cus => cus.Email == dto.Email)
            ?? throw new Exception("User not found");

        if (!PasswordHelper.VerifyPassword(dto.Password, customer.PasswordSalt, customer.PasswordHash))
            throw new Exception("Invalid credentials");
        
        return JwtHelper.GenerateToken(customer, _jwt);
    }

    public async Task RegisterAsync(CustomerRegisterDto dto)
    {
        var customer = await _db.Customers.SingleOrDefaultAsync();
        
        if (customer != null && customer.Email != dto.Email)
        {
            throw new Exception("Email existed");
        }
        if (customer != null && customer.PhoneNumber != dto.PhoneNumber)
        {
            throw new Exception("Phone number existed");
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
        _db.Customers.FromSql($"EXEC dbo.InsertNewRegisterCustomer({Customer.Email}, {Customer.PasswordHash}, {Customer.PasswordSalt}, {Customer.PhoneNumber}, {Customer.FullName})");
        await _db.SaveChangesAsync();
    }
}
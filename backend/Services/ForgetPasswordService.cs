using System.Data.Common;
using Backend.Data;
using Backend.Dto;
using Backend.Exceptions;
using Backend.Services;
using Backend.Helpers;
using Microsoft.EntityFrameworkCore;

public class ForgetPasswordService(IEmailService emailService, AppDbContext db, ICacheService cache) : IForgetPasswordService
{
    private readonly IEmailService _emailService = emailService;
    private readonly AppDbContext _db = db;
    private readonly ICacheService _cache = cache;

    public async Task<bool> CheckEmailAsync(CustomerEmailDto dto)
    {
        var customer = await _db.Customers.SingleOrDefaultAsync() ?? 
            throw new BusinessException("Email không tồn tại. Vui lòng nhập đúng địa chỉ email của bạn", 2001);

        return customer.Email == dto.Email;
    }

    public async Task<bool> CheckOtpAsync(CustomerOtpDto dto)
    {
        var otp = await _cache.GetAsync<string>(dto.Email);
        if (dto.Otp == otp)
        {
            return true;
        }
        else 
        {
            throw new BusinessException("OTP không đúng, vui lòng thử lại", 2002);
        }
    }

    public async Task SendOtpEmailAsync(CustomerEmailDto dto)
    {
        try
        {
            var otp = OtpHelper.GenerateOtp();
            var subject = "Mã OTP lấy lại mật khẩu";
            var body = $"<p>Mã OTP của bạn là {otp}.<p>";

            await _emailService.SendEmailAsync(dto.Email, subject, body);
            await _cache.SetAsync(dto.Email, otp, TimeSpan.FromMinutes(5));
        }
        catch (Exception ex)
        {
            throw new BusinessException($"Không thể gửi email OTP. Lỗi {ex.Data}", 2003);
        }
       
    }
}    
    
    
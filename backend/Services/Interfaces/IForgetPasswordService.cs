using Backend.Dto;

namespace Backend.Services;

public interface IForgetPasswordService
{
    Task<bool> CheckEmailAsync(CustomerEmailDto dto);
    Task<bool> CheckOtpAsync(CustomerOtpDto dto);
    Task SendOtpEmailAsync(CustomerEmailDto dto);
}
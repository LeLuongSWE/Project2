using Backend.Dto;

namespace Backend.Services;

public interface IAuthService
{
    Task<string> LoginAsync(CustomerLoginDto dto);
    Task RegisterAsync(CustomerRegisterDto dto);
}
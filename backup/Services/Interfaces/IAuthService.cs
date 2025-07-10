using Backend.Dto;

namespace Backend.Services;

public interface IAuthService
{
    Task<CustomerLoginDto?> AuthenticateAsync(string email, string password);
    Task RegisterAsync(string email, string fullName, string password, string phoneNumber);
}
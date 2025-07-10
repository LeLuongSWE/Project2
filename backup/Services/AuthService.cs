using Backend.Dto;
using Backend.Services;

namespace Backend.Models;

public class AuthService : IAuthService
{
    public Task<CustomerLoginDto> AuthenticateAsync(string email, string password)
    {
        
    }

    public Task RegisterAsync(string email, string fullName, string password, string phoneNumber)
    {
        throw new NotImplementedException();
    }
}
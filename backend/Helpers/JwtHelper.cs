using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Models;
using Backend.Settings;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Helpers;

public static class JwtHelper
{
    public static string GenerateToken(Customer customer, JwtSettings jwtSettings)
    {
        // 1. tạo list claim
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, customer.CustomerId.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, customer.Email),
            new Claim("fullname", customer.FullName),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        // 2. Khóa bí mật
        var keyBytes = Encoding.UTF8.GetBytes(jwtSettings.SecretKey);
        var securityKey = new SymmetricSecurityKey(keyBytes);

        // 3. Credentials

        var creds = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        // 4. Tạo token descriptor
        var tokenDesciptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Issuer = jwtSettings.Issuer,
            Audience = jwtSettings.Audience,
            Expires = DateTime.UtcNow.AddMinutes(jwtSettings.ExpirationMinutes),
            SigningCredentials = creds
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDesciptor);

        return tokenHandler.WriteToken(token);
    }
}
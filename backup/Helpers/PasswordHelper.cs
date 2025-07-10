using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace Backend.Helpers;

public static class PasswordHelper 
{
    public static void CreatePasswordHash(
        string password,
        out byte[] salt,
        out byte[] hash)
    {
        salt = RandomNumberGenerator.GetBytes(128 / 8);

        hash = KeyDerivation.Pbkdf2(
            password: password,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100_000,
            numBytesRequested: 236 / 8
        );
    }
    
    public static bool VerifyPassword( 
        string password,
        byte[] salt,
        byte[] storedHash)
    {
        var hash = KeyDerivation.Pbkdf2(
            password: password,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100_000,
            numBytesRequested: 236 / 8
        );
        
        return CryptographicOperations.FixedTimeEquals(hash, storedHash);
    }
}
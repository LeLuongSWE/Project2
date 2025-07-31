using System.Security.Cryptography;

namespace Backend.Helpers;

public class OtpHelper 
{
    public static string GenerateOtp()
    {
        int value = RandomNumberGenerator.GetInt32(0, 1_000_000);
        return value.ToString("D6");
    }
}
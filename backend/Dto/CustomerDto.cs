using System.ComponentModel.DataAnnotations;

namespace Backend.Dto;

public class CustomerLoginDto 
{
    [Required, EmailAddress]
    public required string Email { get; set; }

    [Required]
    public required string Password { get; set; }
}

public class CustomerRegisterDto
{
    [Required, EmailAddress]
    public required string Email { get; set; }

    [Required]
    public required string Password { get; set; }
    
    [Required]
    public required string PhoneNumber { get; set; }
    public required string FullName { get; set; }
}

public class CustomerEmailDto
{
    [Required, EmailAddress]
    public required string Email { get; set; }
}

public class CustomerOtpDto 
{
    [Required]
    public required string Otp { get; set; }
    [Required, EmailAddress]
    public required string Email { get; set; }
}
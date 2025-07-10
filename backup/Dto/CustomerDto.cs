using System.ComponentModel.DataAnnotations;

namespace Backend.Dto;

public class CustomerLoginDto 
{
    [Required, EmailAddress]
    public string? Email;

    [Required]
    public string? Password;
}

public class CustomerRegisterDto
{
    [Required, EmailAddress]
    public string? Email { get; set; }

    [Required]
    public string? Password { get; set; }

    [Required, Compare("Password")]
    public string? ConfirmPassword { get; set; }

    public string? FullName;
}
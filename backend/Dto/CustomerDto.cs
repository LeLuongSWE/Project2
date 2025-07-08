using System.ComponentModel.DataAnnotations;

namespace Backend.Dto;

class UserLoginDto 
{
    [Required, EmailAddress]
    public string? Email;

    [Required]
    public string? Password;
}

class UserRegisterDto
{
    [Required, EmailAddress]
    public string? Email { get; set; }

    [Required]
    public string? Password { get; set; }

    [Required, Compare("Password")]
    public string? ConfirmPassword { get; set; }

    public string? FullName;
}
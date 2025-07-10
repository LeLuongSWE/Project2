using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

class Customer 
{
    [Key]
    [Column("customer_id")]
    public int CustomerId { get; set; }
    
    [Column("email")]
    public string? Email { get; set; }
    
    [Column("password_hash")]
    public byte[]? PasswordHash { get; set; }
    
    [Column("password_salt")]
    public byte[]? PasswordSalt { get; set; }
    
    [Column("full_name")]
    public string? FullName { get; set; }
    
    [Column("phone_number")]
    public string? PhoneNumber { get; set; }
    
    [Column("is_active")]
    public bool IsActive { get; set; }
    
    [Column("created_at")]
    public DateTime CreatedAt { get; set; }
    
    [Column("last_login_at")]
    public DateTime LastLoginAt { get; set; }
    
}
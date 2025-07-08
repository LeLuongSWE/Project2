using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

public class MenuItem
{
    [Key]
    [Column("food_id")]
    public int FoodId { get; set; }

    [Column("price")]
    public decimal Price { get; set; }

    [Column("name")]
    public string? Name { get; set; }

    [Column("available")]
    public bool Available { get; set; }

    [Column("manager_id")]
    public int ManagerId { get; set; }

    [Column("food_image")]
    public byte[]? FoodImage { get; set; }
}

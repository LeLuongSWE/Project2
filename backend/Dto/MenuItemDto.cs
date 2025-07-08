namespace Backend.Dto;

public class MenuItemDto
{
    public int FoodId { get; set; }
    public decimal Price { get; set; }
    public string? Name { get; set; }
    public bool Available { get; set; }
    public byte[]? FoodImage { get; set; }
}

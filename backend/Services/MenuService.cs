using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.Dto;

namespace Backend.Services;

public class MenuService : IMenuService
{
    private readonly AppDbContext _context;
    
    public MenuService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<RestaurantMenuDto>> GetRestaurantMenuForHomePageAsync()
    {
    
    var RestaurantMenus = await _context.RestaurantMenus
        .FromSql($"EXEC dbo.GetRestaurantMenuForHomePage")
        .ToListAsync();
    return RestaurantMenus.Select(RestaurantMenu => new RestaurantMenuDto
    {
        FoodId = RestaurantMenu.FoodId,
        Name = RestaurantMenu.Name,
        Price = RestaurantMenu.Price,
        Available = RestaurantMenu.Available,
        FoodImage = RestaurantMenu.FoodImage
    });
    }
}
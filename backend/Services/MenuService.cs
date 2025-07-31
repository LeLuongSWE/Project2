using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.Dto;
using Microsoft.Data.SqlClient;

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
        List<RestaurantMenu> RestaurantMenus = new List<RestaurantMenu>();
        try
        {
            RestaurantMenus = await _context.RestaurantMenus
                .FromSql($"EXEC dbo.GetRestaurantMenuForHomePage")
                .ToListAsync();
        }
        catch (SqlException ex)
        {
            Console.WriteLine($"SQL Error {ex.Number}: {ex.Message}");
            if (ex.InnerException != null)
                Console.WriteLine("Inner Exception: " + ex.InnerException.Message);
            throw;
        }

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
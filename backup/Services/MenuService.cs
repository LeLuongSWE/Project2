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
    
    public async Task<IEnumerable<MenuItemDto>> GetMenuItemsForHomePageAsync()
    {
    
    var menuItems = await _context.MenuItems
        .FromSql($"EXEC dbo.GetMenuItemsForHomePage")
        .ToListAsync();
    return menuItems.Select(menuItem => new MenuItemDto
    {
        FoodId = menuItem.FoodId,
        Name = menuItem.Name,
        Price = menuItem.Price,
        Available = menuItem.Available,
        FoodImage = menuItem.FoodImage
    });
    }
}
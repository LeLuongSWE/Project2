using Backend.Models;
using Backend.Dto;
namespace Backend.Services;

public interface IMenuService
{
    Task<IEnumerable<MenuItemDto>> GetMenuItemsForHomePageAsync();
}
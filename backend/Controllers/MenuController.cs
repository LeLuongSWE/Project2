using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Services;

[ApiController]
[Route("api/[controller]")]
public class MenuController : ControllerBase
{
    private readonly IMenuService _service;
    
    public MenuController(IMenuService service)
    {
        _service = service; 
    }
    
    [HttpGet("home-page")]
    public async Task<IActionResult> GetMenuItemsForHomePage()
    {
        return Ok(await _service.GetMenuItemsForHomePageAsync());
    }

}   

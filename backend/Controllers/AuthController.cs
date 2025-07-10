using Backend.Dto;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService) => _authService = authService;
    
    [HttpPost("register")]
    public async Task<IActionResult> Register(CustomerRegisterDto dto)
    {
        await _authService.RegisterAsync(dto);
        return Created("", null);
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(CustomerLoginDto dto)
    {
        var token = await _authService.LoginAsync(dto);
        return Ok(new {token});
    }
}
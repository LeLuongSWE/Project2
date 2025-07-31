using Backend.Dto;
using Backend.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth/forget-password")]
public class ForgetpasswordController : ControllerBase 
{
    private readonly IForgetPasswordService _service;
    public ForgetpasswordController(IForgetPasswordService forgetPasswordService)
    {
        _service = forgetPasswordService;
    }
    
    [HttpPost("check-email")]
    public async Task<IActionResult> CheckEmail(CustomerEmailDto dto)
    {
        var isRightEmail = await _service.CheckEmailAsync(dto);
        return isRightEmail ? Ok() : NotFound();
    }
    
    [HttpPost("send-otp")]
    public async Task<IActionResult> SendOtpEmail(CustomerEmailDto dto)
    {

        await _service.SendOtpEmailAsync(dto);
        return Ok();
    }
    [HttpPost("check-otp")]
    public async Task<IActionResult> CheckOtp(CustomerOtpDto dto)
    {
        var isRightOtp = await _service.CheckOtpAsync(dto);
        return isRightOtp ? Ok() : NotFound();
    }
}
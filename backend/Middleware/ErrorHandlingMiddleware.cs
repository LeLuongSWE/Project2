using System.ComponentModel.DataAnnotations;
using Azure.Core;
using Backend.Exceptions;
using Microsoft.Data.SqlClient;

namespace Backend.Middleware;

public class ErrorHandlingMidddleware(RequestDelegate next, ILogger<ErrorHandlingMidddleware> logger)
{
    private readonly RequestDelegate _next = next;
    private readonly ILogger<ErrorHandlingMidddleware> _logger = logger;
    
    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ValidationException validationException)
        {
            _logger.LogWarning(validationException, "Validation Error");
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            await context.Response.WriteAsJsonAsync(new
            {
                error = "Validation Error",
                details = validationException.Message
            });
        }
        catch (BusinessException businessException)
        {
            _logger.LogWarning(businessException, "Business Error");
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await context.Response.WriteAsJsonAsync(new
            {
                error = "Business Error",
                details = businessException.Message,
                errorCode = businessException.ErrorCode
            });
        }
        catch (SqlException sqlException)
        {
            _logger.LogWarning(sqlException, "Sql Error");
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await context.Response.WriteAsJsonAsync(new
            {
                error = "Sql Error",
                message = "Lỗi cơ sở dữ liệu"
            });
        }
        catch (Exception exception)
        {
            _logger.LogError(exception, "Unhandled exception");
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await context.Response.WriteAsJsonAsync(new {
                error = "InternalServerError",
                message = "Đã có lỗi, vui lòng thử lại sau."
            });
        }
        
    }
}
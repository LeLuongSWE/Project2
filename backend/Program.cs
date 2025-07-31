using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Services;
using Backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Backend.Settings;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Backend.Middleware;
using StackExchange.Redis;
using Azure.Identity;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
	options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddStackExchangeRedisCache(options =>
{
	options.Configuration = "localhost:6379, password=Project23";
	options.InstanceName = "Project23";
});

builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("Jwt"));
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddSingleton<IEmailService, EmailService>();

var jwtSettings = builder.Configuration.GetSection("Jwt").Get<JwtSettings>() ?? throw new InvalidOperationException("JWT settings are not configured properly.");

builder.Services.AddAuthentication(options =>
{
	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
  .AddJwtBearer(options =>
  {
	  options.TokenValidationParameters = new TokenValidationParameters
	  {
		  ValidateIssuer = true,
		  ValidIssuer = jwtSettings.Issuer,
		  ValidateAudience = true,
		  ValidAudience = jwtSettings.Audience,
		  ValidateLifetime = true,
		  IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey)),
		  ValidateIssuerSigningKey = true,
	  };
  });

builder.Services.AddScoped<IMenuService, MenuService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IForgetPasswordService, ForgetPasswordService>();
builder.Services.AddScoped<ICacheService, RedisCacheService>();

builder.WebHost.UseUrls("http://localhost:5000");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseMiddleware<ErrorHandlingMidddleware>();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.UseCors(builder =>
	builder.WithOrigins("http://localhost:3001")
	.WithOrigins("http://localhost:3002")
	.WithOrigins("http://localhost:3003")
	.WithOrigins("http://127.0.0.1:3001")
	.WithOrigins("http://127.0.0.1:3002")
	.WithOrigins("http://127.0.0.1:3003")
	.AllowAnyHeader()
	.AllowAnyMethod()
);

app.Run();

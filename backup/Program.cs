using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Services;
using Backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("Jwt"));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options => {
    var jwt = builder.Configuration.GetSection("Jwt").Get<JwtSettings>();
    options.TokenValidationParameters = new TokenValidationParameters { /* … */ };
  });

builder.Services.AddScoped<IMenuService, MenuService>();
builder.Services.AddScoped<IAuthService, AuthService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(builder =>
    builder.WithOrigins("http://localhost:3001")
    .WithOrigins("http://localhost:3002")
    .WithOrigins("http://localhost:3003")
    .AllowAnyHeader()
    .AllowAnyMethod()
);

app.Run();

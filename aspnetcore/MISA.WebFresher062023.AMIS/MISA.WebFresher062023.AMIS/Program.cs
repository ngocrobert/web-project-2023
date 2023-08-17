using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using MISA.WebFresher062023.AMIS;
using MISA.WebFresher062023.AMIS.Application;
using MISA.WebFresher062023.AMIS.Domain;
using MISA.WebFresher062023.AMIS.Infrastructure;
using MySqlConnector;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.AddControllers().AddJsonOptions(options =>
//{
//    options.JsonSerializerOptions.PropertyNamingPolicy = null;
//});

builder.Services.AddControllers()
    .ConfigureApiBehaviorOptions(options =>
    {
        options.InvalidModelStateResponseFactory = context =>
        {
            var errors = context.ModelState.Values.SelectMany(x => x.Errors);
            return new BadRequestObjectResult(new BaseException()
            {
                ErrorCode = 400,
                UserMessage = "Lỗi nhập từ người dùng",
                DevMessage = "Lỗi nhập từ người dùng",
                TraceId = "",
                MoreInfo = "",
                Errors = errors
            }.ToString() ?? "");
        };
    })
    .AddJsonOptions(options =>
    {
        //options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration["ConnectionString"];

builder.Services.AddScoped<IEmployeeRepository>(provider => new EmployeeRepository(connectionString));

builder.Services.AddScoped<IEmployeeService, EmployeeService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseMiddleware<ExceptionMiddleware>();

app.MapControllers();

app.Run();

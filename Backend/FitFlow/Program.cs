using FitFlow.DBContext;
using FitFlow.Service;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register DbContext
builder.Services.AddDbContext<FitFlowDbContext>(options =>
    options.UseSqlServer("Server=localhost;Database=FitFlow;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"));

// Register all services
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<TrainingPlanService>();
builder.Services.AddScoped<WorkoutService>();
builder.Services.AddHttpClient<ExerciseService>(); // Register ExerciseService with HttpClient support

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage(); // Provides detailed error pages in development
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

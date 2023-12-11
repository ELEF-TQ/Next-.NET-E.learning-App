using E_learningAppBack.Models.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllersWithViews();

var connectionString = builder.Configuration.GetConnectionString("ElearnigDbContext");
builder.Services.AddDbContext<e_learningContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));


});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "E-learningApp",

        Version = "v1",
        Description = "An API to perform operations of E-learning App",
        Contact = new OpenApiContact
        {
            Name = "Abdessamad Tanafaat",
            Email = "tanafaat.wac.49@gmail.com",
            Url = new Uri("https://www.linkedin.com/in/abdessamad-tanafaat-924534222"),
        }
    });


});
builder.Services.AddCors(option =>
{
    option.AddPolicy("MyPolicy", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();

    });

});
var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "E-learningApp APIs v1");
        c.RoutePrefix = string.Empty;
    });

    // Redirect to Swagger UI when accessing the root URL
    app.Use(async (context, next) =>
    {
        if (context.Request.Path == "/")
        {
            context.Response.Redirect("/swagger/index.html");
            return;
        }

        await next();
    });



}
else
{
    // Other error handling middleware for non-development environments
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}


app.UseHttpsRedirection();
app.UseStaticFiles();


app.UseRouting();
app.UseCors("MyPolicy");

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();

});

app.Run();

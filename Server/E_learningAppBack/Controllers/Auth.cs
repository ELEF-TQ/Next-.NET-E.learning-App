using E_learningAppBack.Models;
using E_learningAppBack.Models.Context;
using E_learningAppBack.Models.Generated;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Route("api/auth")]
[ApiController]


public class Auth : ControllerBase
{
    private readonly e_learningContext _context;

    public Auth(e_learningContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register(UserRegistrationModel model)
    {
        try
        {
            var existingUser = _context.Users.FirstOrDefault(u => u.Email == model.Email);

            if (existingUser != null)
            {
                return Conflict("Email already exists");
            }


            if (await _context.Users.AnyAsync(u => u.Username == model.Username))
            {
                return BadRequest("Username is already taken");
            }


            var newUser = new User
            {
                Username = model.Username,
                Password = model.Password,
                Email = model.Email,
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(newUser);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }


    [HttpPost("login")]
    public async Task<ActionResult<string>> Login(UserCredentials userCredentials)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userCredentials.Email && u.Password == userCredentials.Password);

            if (user == null)
            {
                return BadRequest("Invalid username or password");
            }

            var token = GenerateRandomToken();

            return Ok(new
            {
                Token = token,
                User = new
                {
                    Id = user.UserId,
                    Username = user.Username,
                    Email = user.Email,
                    //TotalScore = user.TotalScore
                }
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred while processing the request : {ex.Message}");
        }
    }


    private string GenerateRandomToken()
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var random = new Random();
        var token = new string(Enumerable.Repeat(chars, 32)
          .Select(s => s[random.Next(s.Length)]).ToArray());

        return token;
    }



}

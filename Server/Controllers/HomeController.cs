using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic; 

namespace E_learningApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {

            private static List<string> testData = new List<string>
        {
            "Data 1",
            "Data 2",
            "Data 3"
        };

            // GET: /api/Test
            [HttpGet]
            public IActionResult Get()
            {
                return Ok(testData); // Returns the test data as JSON
            }


        }
    }

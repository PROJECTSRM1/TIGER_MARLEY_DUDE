using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customers = new List<Customer>
            {
                new() { Id = 1, Name = "Lokesh", Email = "lokesh@example.com", JoinedOn = DateTime.Now.AddMonths(-2) },
                new() { Id = 2, Name = "Ravi", Email = "ravi@example.com", JoinedOn = DateTime.Now.AddMonths(-5) },
            };
            return Ok(customers);
        }
    }
}

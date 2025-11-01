using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetOrders()
        {
            var orders = new List<Order>
            {
                new() { Id = 1, CustomerName = "Lokesh", TotalAmount = 2500, Date = DateTime.Now.AddDays(-1) },
                new() { Id = 2, CustomerName = "Ravi", TotalAmount = 1800, Date = DateTime.Now.AddDays(-3) },
            };

            return Ok(orders);
        }
    }
}

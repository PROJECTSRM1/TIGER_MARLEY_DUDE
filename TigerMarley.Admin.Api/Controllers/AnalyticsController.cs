using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalyticsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAnalytics()
        {
            var data = new AnalyticsData
            {
                TotalOrders = 120,
                TotalCustomers = 75,
                Revenue = 45000
            };
            return Ok(data);
        }
    }
}

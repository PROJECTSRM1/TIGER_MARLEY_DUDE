using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TigerMarley.Admin.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OverviewController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetOverview()
        {
            return Ok(new { message = "TigerMarley Admin Overview API Working" });
        }
    }
}

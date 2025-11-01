using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class OurEssentialsController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public OurEssentialsController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetEssentials()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("OurEssentials", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

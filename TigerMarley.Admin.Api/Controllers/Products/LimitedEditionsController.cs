using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class LimitedEditionsController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public LimitedEditionsController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetLimitedEditionProducts()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("LimitedEditions", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

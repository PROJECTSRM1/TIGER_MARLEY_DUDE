using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class FandomFusionController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public FandomFusionController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetFandomFusionProducts()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("FandomFusion", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

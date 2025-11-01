using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomizeController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public CustomizeController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetCustomizedProducts()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("Customize", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

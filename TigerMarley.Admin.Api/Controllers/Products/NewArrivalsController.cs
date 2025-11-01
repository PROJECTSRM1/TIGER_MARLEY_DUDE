using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewArrivalsController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public NewArrivalsController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetNewArrivals()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("NewArrivals", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShopByThemesController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public ShopByThemesController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetShopByThemesProducts()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("ShopByThemes", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

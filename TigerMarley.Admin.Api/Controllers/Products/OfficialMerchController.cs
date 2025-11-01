using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [ApiController]
    [Route("api/[controller]")]
    public class OfficialMerchController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public OfficialMerchController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetOfficialMerch()
        {
            var products = _repo.GetAll()
                .Where(p => p.Category?.Equals("OfficialMerch", StringComparison.OrdinalIgnoreCase) == true);
            return Ok(products);
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TigerMarley.Admin.Api.Repositories;

namespace TigerMarley.Admin.Api.Controllers.Products
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsHomeController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public ProductsHomeController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _repo.GetAll();
            return Ok(products);
        }
    }
}

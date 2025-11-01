using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public IEnumerable<Product> GetAll()
        {
            return new List<Product>
            {
                new Product { Id = 1, Title = "Akatsuki Oversized Tee", Image = "/images/akatsuki.png", Price = 1299, Category = "FandomFusion" },
                new Product { Id = 2, Title = "Naruto White Tee", Image = "/images/naruto.png", Price = 999, Category = "NewArrivals" },
            };
        }
    }
}

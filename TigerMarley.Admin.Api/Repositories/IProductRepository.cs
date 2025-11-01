using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAll();
    }
}

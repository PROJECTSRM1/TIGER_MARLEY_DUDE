using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Repositories
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAll();
        Order? GetOrderById(int id);
        void AddOrder(Order order);
    }
}

using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly List<Order> _orders = new()
        {
            new Order { Id = 1, CustomerName = "Lokesh", TotalAmount = 2500, Date = DateTime.Now.AddDays(-1) },
            new Order { Id = 2, CustomerName = "Ravi", TotalAmount = 1800, Date = DateTime.Now.AddDays(-3) },
            new Order { Id = 3, CustomerName = "Kiran", TotalAmount = 3500, Date = DateTime.Now.AddDays(-5) }
        };

       
       
        public Order? GetOrderById(int id) =>
            _orders.FirstOrDefault(o => o.Id == id);

        public void AddOrder(Order order)
        {
            order.Id = _orders.Max(o => o.Id) + 1;
            _orders.Add(order);
        }

        public IEnumerable<Order> GetAll()
        {
            return _orders;
        }
    }
}

using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly List<Customer> _customers = new()
        {
            new Customer { Id = 1, Name = "Lokesh", Email = "lokesh@example.com", JoinedOn = DateTime.Now.AddMonths(-2) },
            new Customer { Id = 2, Name = "Ravi", Email = "ravi@example.com", JoinedOn = DateTime.Now.AddMonths(-5) },
            new Customer { Id = 3, Name = "Kiran", Email = "kiran@example.com", JoinedOn = DateTime.Now.AddMonths(-1) }
        };

        public IEnumerable<Customer> GetAllCustomers() => _customers;

        public Customer? GetCustomerById(int id) =>
            _customers.FirstOrDefault(c => c.Id == id);

        public void AddCustomer(Customer customer)
        {
            customer.Id = _customers.Max(c => c.Id) + 1;
            _customers.Add(customer);
        }
    }
}

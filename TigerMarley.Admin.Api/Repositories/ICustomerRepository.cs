using TigerMarley.Admin.Api.Models;

namespace TigerMarley.Admin.Api.Repositories
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAllCustomers();
        Customer? GetCustomerById(int id);
        void AddCustomer(Customer customer);
    }
}

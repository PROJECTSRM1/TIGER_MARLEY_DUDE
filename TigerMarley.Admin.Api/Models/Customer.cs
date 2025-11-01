namespace TigerMarley.Admin.Api.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public DateTime JoinedOn { get; set; }
    }
}

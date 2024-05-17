using demo_contracts_app.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml;

namespace demo_contracts_app.Server.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        // Define your entity DbSet properties here
        //public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        public DbSet<Contract> Contracts { get; set; }
    }
}

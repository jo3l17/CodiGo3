namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<EFCodeFirstWithDatabase.BikeStoresModel>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EFCodeFirstWithDatabase.BikeStoresModel context)
        {
            context.customers.Add(new customer
            {
                first_name = "asdf"
            });
            context.customers.AddOrUpdate(x => x.first_name,
                new customer
                {
                    first_name = "Christian",
                    last_name = "Juarez"
                });
        }
    }
}

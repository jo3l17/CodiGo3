namespace EFCodeFirstWithDatabase
{
   using System;
   using System.Data.Entity;
   using System.ComponentModel.DataAnnotations.Schema;
   using System.Linq;

   public partial class BikeStoresModel : DbContext
   {
      public BikeStoresModel()
          : base("name=BikeStoresContext")
      {
      }

      public virtual DbSet<brand> brands { get; set; }
      public virtual DbSet<category> categories { get; set; }
      public virtual DbSet<product> products { get; set; }
      public virtual DbSet<stock> stocks { get; set; }
      public virtual DbSet<customer> customers { get; set; }
      public virtual DbSet<order_items> order_items { get; set; }
      public virtual DbSet<order> orders { get; set; }
      public virtual DbSet<staff> staffs { get; set; }
      public virtual DbSet<store> stores { get; set; }
      public virtual DbSet<product_history> product_history { get; set; }
      

      protected override void OnModelCreating(DbModelBuilder modelBuilder)
      {
         modelBuilder.Entity<brand>()
             .Property(e => e.brand_name)
             .IsUnicode(false);

         modelBuilder.Entity<category>()
             .Property(e => e.category_name)
             .IsUnicode(false);

         modelBuilder.Entity<product>()
             .Property(e => e.product_name)
             .IsUnicode(false);

         modelBuilder.Entity<product>()
             .Property(e => e.list_price)
             .HasPrecision(10, 2);

         modelBuilder.Entity<customer>()
             .Property(e => e.first_name)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.last_name)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.phone)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.email)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.street)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.city)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.state)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .Property(e => e.zip_code)
             .IsUnicode(false);

         modelBuilder.Entity<customer>()
             .HasMany(e => e.orders)
             .WithOptional(e => e.customer)
             .WillCascadeOnDelete();

         modelBuilder.Entity<order_items>()
             .Property(e => e.list_price)
             .HasPrecision(10, 2);

         modelBuilder.Entity<order_items>()
             .Property(e => e.discount)
             .HasPrecision(4, 2);

         modelBuilder.Entity<staff>()
             .Property(e => e.first_name)
             .IsUnicode(false);

         modelBuilder.Entity<staff>()
             .Property(e => e.last_name)
             .IsUnicode(false);

         modelBuilder.Entity<staff>()
             .Property(e => e.email)
             .IsUnicode(false);

         modelBuilder.Entity<staff>()
             .Property(e => e.phone)
             .IsUnicode(false);

         modelBuilder.Entity<staff>()
             .HasMany(e => e.orders)
             .WithRequired(e => e.staff)
             .WillCascadeOnDelete(false);

         modelBuilder.Entity<staff>()
             .HasMany(e => e.staffs1)
             .WithOptional(e => e.staff1)
             .HasForeignKey(e => e.manager_id);

         modelBuilder.Entity<store>()
             .Property(e => e.store_name)
             .IsUnicode(false);

         modelBuilder.Entity<store>()
             .Property(e => e.phone)
             .IsUnicode(false);

         modelBuilder.Entity<store>()
             .Property(e => e.email)
             .IsUnicode(false);

         modelBuilder.Entity<store>()
             .Property(e => e.street)
             .IsUnicode(false);

         modelBuilder.Entity<store>()
             .Property(e => e.city)
             .IsUnicode(false);

         modelBuilder.Entity<store>()
             .Property(e => e.state)
             .IsUnicode(false);

         modelBuilder.Entity<store>()
             .Property(e => e.zip_code)
             .IsUnicode(false);

         modelBuilder.Entity<product_history>()
             .Property(e => e.product_name)
             .IsUnicode(false);

         modelBuilder.Entity<product_history>()
             .Property(e => e.list_price)
             .HasPrecision(10, 2);
      }
   }
}

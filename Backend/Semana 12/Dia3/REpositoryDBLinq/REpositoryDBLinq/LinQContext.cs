namespace REpositoryDBLinq
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class LinQContext : DbContext
    {
        public LinQContext()
            : base("name=LinQContext")
        {
        }

        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<InvoiceDetails> InvoiceDetails { get; set; }
        public virtual DbSet<Invoices> Invoices { get; set; }
        public virtual DbSet<Items> Items { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customers>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Customers>()
                .HasMany(e => e.Invoices)
                .WithRequired(e => e.Customers)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Invoices>()
                .HasMany(e => e.InvoiceDetails)
                .WithRequired(e => e.Invoices)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Items>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<Items>()
                .HasMany(e => e.InvoiceDetails)
                .WithRequired(e => e.Items)
                .WillCascadeOnDelete(false);
        }
    }
}

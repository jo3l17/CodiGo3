using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    class ProgramContext : DbContext
    {
        public ProgramContext() : base("name = conexion")
        {
            Database.SetInitializer<ProgramContext>
                (new DropCreateDatabaseIfModelChanges<ProgramContext>());
        }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Address> Addresses { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("school");

            modelBuilder.Entity<Student>().ToTable("Estudiantes");
            modelBuilder.Entity<Course>().ToTable("Cursos");

            modelBuilder.Entity<Student>().Map(m =>
            {
                // Pendiente no se puede mapear atributos NON-KEY
                // m.Properties(p => new { p.idStudent,p.studentName });

                m.Properties(p => new { p.idStudent});

                m.ToTable("StudentInfo");
            });

            modelBuilder.Entity<Student>().HasKey<int>(s => s.idStudent);
            modelBuilder.Entity<Course>().HasKey<int>(c => c.idCurso);
            modelBuilder.Entity<Address>().HasKey<int>(a => a.idAddress);

            modelBuilder.Entity<Student>()
                .Property(p => p.birth)
                .HasColumnName("Fecha de Nacimiento")
                .HasColumnType("DateTime2")
                .HasColumnOrder(3);
            //columna nula
            modelBuilder.Entity<Student>()
                .Property(p => p.height)
                .HasPrecision(4, 2)
                .IsOptional();
            //columna no nula
            modelBuilder.Entity<Student>()
                .Property(p => p.weight)
                .HasPrecision(4,2)
                .IsRequired();

            modelBuilder.Entity<Student>()
                .Property(p => p.studentName)
                .IsRequired()
                .HasMaxLength(50);

            //crear 2 primary key
            //modelBuilder.Entity<Course>().HasKey(c => new { c.idCurso, c.courseName });
            //base.OnModelCreating(modelBuilder);

            //RELACIONES
            modelBuilder.Entity<Student>()
                .HasOptional(a => a.Address)
                .WithRequired(ad => ad.Student);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_Relaciones
{
    class RelacionesContext : DbContext
    {
        public RelacionesContext() : base("Relaciones")
        {
            Database.SetInitializer<RelacionesContext>
                (new DropCreateDatabaseAlways<RelacionesContext>());
        }
        public virtual DbSet<Profesor> Profesores { get; set; }
        public virtual DbSet<Curso> Cursos { get; set; }
        public virtual DbSet<Estudiante> Estudiantes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profesor>()
                .HasMany(x => x.Cursos)
                .WithRequired(x => x.Profesor)
                .HasForeignKey(x => x.id__profesor);

            modelBuilder.Entity<Estudiante>()
                .HasMany<Curso>(x => x.Cursos)
                .WithMany(x => x.Estudiantes)
                .Map(x =>
                    {
                        x.MapLeftKey("id__Estudiante");
                        x.MapRightKey("id__Curso");
                        x.ToTable("EstudianteConCursos");
                    });
            modelBuilder.Entity<Estudiante>()
                .HasOptional(x => x.Direccion)
                .WithRequired(x => x.Estudiante);
            modelBuilder.Entity<Telefono>()
                .HasRequired(x => x.Estudiante)
                .WithRequiredDependent(x => x.Telefono);
            base.OnModelCreating(modelBuilder);
        }
        
    }
}

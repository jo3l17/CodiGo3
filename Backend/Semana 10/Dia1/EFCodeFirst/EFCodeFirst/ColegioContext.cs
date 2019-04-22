using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCodeFirst
{
    public class ColegioContext : DbContext
    {
        public ColegioContext() : base ("name=conexion")
        {
            // Database.SetInitializer<ColegioContext>(new CreateDatabaseIfNotExists<ColegioContext>());
             Database.SetInitializer<ColegioContext>(new DropCreateDatabaseAlways<ColegioContext>());
        }

        public DbSet<Curso> Cursos { get; set; }
        public DbSet<Alumno> Alumnos { get; set; }

    }
}

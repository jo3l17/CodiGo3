using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCodeFirst
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new ColegioContext();
            var alumno = new Alumno { nombreAlumno = "Johan" };
            var alumno1 = new Alumno { nombreAlumno = "Christian" };
            context.Alumnos.Add(alumno);
            context.Alumnos.Add(alumno1);
            context.SaveChanges();
        }
    }
}

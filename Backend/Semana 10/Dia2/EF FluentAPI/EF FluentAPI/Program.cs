using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new ProgramContext();
            using (var context1 = new ProgramContext())
            {
                var estudiante = new Student(){
                    studentName = "Joel",
                    height =75.22m,
                    weight =75.22m,
                    birth= DateTime.Parse("1970/12/31")};
                var estudiante1 = new Student() {
                    studentName = "Marco",
                    height =95.23m,
                    weight =76.32m,
                    birth= DateTime.Parse("1997/12/21")};
                context1.Students.Add(estudiante);
                var direccion = new Address
                {
                    number = 1234,
                    street = "Elm Street"
                };
                estudiante.Address = direccion;
                context1.Students.Add(estudiante1);
                context1.SaveChanges();
            }
        }
    }
}

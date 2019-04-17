using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFramework
{
    class Program
    {
        static void Main(string[] args)
        {
            ejemploEntities context = new ejemploEntities();
            /*customer usuario = new customer
            {
                idCliente = 5,
                Name = "Claudia"

            };
            context.customers.Add(usuario);
            context.SaveChanges();*/
            foreach (var item in context.customers)
            {
                Console.WriteLine($"Cliente {item.Name}");
            }
            Console.WriteLine($"Cliente {context.customers.Find(1).Name}");

            try
            {
                customer usuario1 = context.customers.FirstOrDefault(item => item.Name == "Eduardo");
                Console.WriteLine($"Cliente {usuario1.Name}");
            }
            catch (Exception)
            {
                Console.WriteLine("no se encotro el usuario");
            }

            customer unUsuario = context.customers.Find(5);
            unUsuario.Name = "Nose";
            context.SaveChanges();

            context.customers.Remove(unUsuario);
            context.SaveChanges();
        }
    }
}

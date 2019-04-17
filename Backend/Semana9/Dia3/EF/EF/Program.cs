using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF
{
    class Program
    {
        static void Main(string[] args)
        {
            parqueoEntities context = new parqueoEntities();
            tabla usuario = new tabla
            {
                nombre="aasd"
            };
            context.tablas.Add(usuario);
            context.SaveChanges();
        }
    }
}

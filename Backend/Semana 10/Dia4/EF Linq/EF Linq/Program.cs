using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_Linq
{
    class Program
    {
        static void Main(string[] args)
        {
            using ( var context = new DBLINQEntities())
            {
                Console.WriteLine("Clientes: ");
                foreach (var c in context.Customers)
                {
                    //Console.WriteLine("{0} - {1}", c.CustomerId, c.Name);
                }
                var clientesConJ = from p in context.Customers
                                   where p.Name.Contains("J")
                                   select p;
                 Console.WriteLine("Clientes con J: ");
                foreach (var cliente in clientesConJ)
                {
                    //Console.WriteLine("{0} - {1}", cliente.CustomerId,
                    //cliente.Name);
                }
                var clientesconJXX = context.Customers.Where(c => c.Name.Contains("J"));
                foreach (var cliente in clientesconJXX)
                {
                    //Console.WriteLine("{0} - {1}", cliente.CustomerId,cliente.Name);
                }

                var verFacturas = context.Customers
                    .Where(i => i.CustomerId >= 5 && i.Name.Contains("C"))
                    //.Select(x=> x.Name);      Mostrar un solo Campo
                    .Select(x => new
                    {
                        x.Name,
                        x.CustomerId
                    });                 // Mostrar Varios Campos
                foreach (var cliente in verFacturas)
                {
                    Console.WriteLine("Cliente {0}", cliente);
                }
                var ordenarClientes1 = from c in context.Customers
                                      orderby c.Name descending, c.CustomerId
                                      select c.Name;
               
                var soloclientesConJ = from p in context.Customers
                                   where p.Name.Contains("J")
                                   select p.Name;
                Console.WriteLine("Solo Clientes con J: ");
                foreach (var cliente in soloclientesConJ)
                {
                    //Console.WriteLine("Cliente {0}",cliente);
                }
                var soloclientesConJ1 = from p in context.Customers
                                       where p.Name.Contains("J")
                                       select new { Nombre = p.Name };
                Console.WriteLine("Solo Clientes con J1: ");
                foreach (var cliente in soloclientesConJ1)
                {
                    //Console.WriteLine("Cliente {0}", cliente);
                }
                var ordenarClientes = from c in context.Customers
                                      orderby c.Name descending
                                      select c.Name;
                Console.WriteLine("lista descendiente de clientes: ");
                foreach (var cliente in ordenarClientes)
                {
                    //Console.WriteLine("Cliente {0}", cliente);
                }
                var agruparFacturas = from f in context.Invoices
                                      group f by f.CustomerId into grupoFacturas
                                      select grupoFacturas;
                var agruparFacturasXX = context.Invoices.GroupBy(x => x.CustomerId);

                foreach (var grupoFacturas in agruparFacturas)
                {
                    //Console.WriteLine("Grupo {0}", grupoFacturas.Key);
                    foreach (var factura in grupoFacturas)
                    {
                        //Console.WriteLine("Cliente: {0} Factura: {1}",factura.Customers.Name,factura.Notes);
                    }
                }
                var itemsPorFactura = from f in context.Invoices
                                      join i in context.Items
                                      on f.InvoiceNumber equals i.ProductId
                                      select new { Factura = f.InvoiceNumber, Producto = i.Description };

                var itemsPorFacturaXX = context.Invoices.Join(context.Items,
                    x => x.InvoiceNumber, x => x.ProductId,(factura,item)=>new
                    {
                        factura.InvoiceNumber,
                        item.Description
                    });

                
                foreach (var factura in itemsPorFactura)
                {
                    //Console.WriteLine("Factura con item: {0}",factura);
                }
            }
        }
    }
}

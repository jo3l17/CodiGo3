using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCodeFirstWithDatabase
{
   class Program
   {
      static void Main(string[] args)
      {
         using (var context = new BikeStoresModel())
         {
                // var cliente = new customer
                //{
                //    
                //    first_name = "joel",
                //    last_name = "Valdez"
                //};
                //context.customers.Add(cliente);

                //var primero = context.customers.Find(1);
                //context.customers.Remove(primero);

                //var entries = context.ChangeTracker.Entries();
                //foreach (var entry in entries)
                //{
                //Console.WriteLine(entry);
                //}
                var productos = from p in context.products
                                where p.model_year == 2016
                                select p;
                Console.WriteLine("ejercicios");
                var a = Int32.Parse(Console.ReadLine());
                switch (a)
                {
                    case 1:
                        Console.WriteLine("1 MOSTRAR LOS PRODUCTOS CON MODELO DEL AÑO 2016");
                        foreach (var producto in productos)
                        {
                            Console.WriteLine("{0}", producto.product_name);
                        }
                        break;
                    case 2:
                        Console.WriteLine("2 MOSTRAR PRODUCTOS EN UNA SOLA COLUMNA CON SU RESPECTIVO PRECIO Y AÑO **");
                        foreach (var producto in productos)
                        {
                            Console.WriteLine("{0} - {1}", producto.product_name, producto.list_price);
                        }
                        break;
                    case 3:
                        var productos1 = from p in context.products
                                         where p.list_price == 5499.99m || p.list_price == 1549.99m || p.list_price == 999.99m
                                         select p;
                        Console.WriteLine("3 MOSTRAR LOS PRODUCTOS CON MODELO PRECIOS 5499.99, 1549.99, 999.99 ");
                        foreach (var producto in productos1)
                        {
                            Console.WriteLine("{0}");
                        }
                        break;
                    case 4:
                        var clientes = from c in context.customers
                                       group c by c.zip_code into g
                                       select g;
                Console.WriteLine("4 MOSTRAR CUÁNTOS CLIENTES TIENEN UN MISMO CÓDIGO POSTAL");
                        foreach (var cliente in clientes)
                        {
                            Console.WriteLine(cliente.Key+" "+cliente.Count());
                        }
                        break;
                    case 5:
                        var ejercicio5 = from p in context.products
                                         where p.product_name.Contains("ELECTRA") && p.list_price > 200m && p.list_price < 350m
                                         select p;

                        Console.WriteLine("5 MOSTRAR LOS PRODUCTOS QUE CONTENGAN EN SU NOMBRE ELECTRA Y TENGAN UN PRECIO MAYOR A 200 Y MENOR A 350");
                        foreach (var producto in ejercicio5)
                        {
                            Console.WriteLine(producto.product_name);
                        }
                        break;
                    case 6:
                        var ejercicio6 = from p in context.products
                                         group p by p.category.category_name into g
                                         select g;
                        Console.WriteLine("");
                        foreach (var producto in ejercicio6)
                        {
                            Console.WriteLine(producto.Key);
                        }
                        break;
                    case 7:
                        var ejercicio7 = from p in context.customers
                                         where p.city== "HOUSTON" || p.city=="ENCINO" || p.city=="EL PASO"
                                         select p;
                        Console.WriteLine("");
                        foreach (var cliente in ejercicio7)
                        {
                            Console.WriteLine(cliente.first_name+" "+cliente.last_name+" "+cliente.city);
                        }
                        break;
                    case 8:
                        var ejercicio8 = from p in context.orders
                                         where p.order_date.Year==2017
                                         select p;
                        Console.WriteLine("");
                        foreach (var cliente in ejercicio8)
                        {
                            Console.WriteLine(cliente.order_id);
                        }
                        break;
                    case 9:
                        var ejercicio9 = from p in context.customers
                                         where p.email.Contains("@aol.com")
                                         select p;
                        Console.WriteLine("");
                        foreach (var cliente in ejercicio9)
                        {
                            Console.WriteLine(cliente.first_name+" "+cliente.email);
                        }
                        break;
                    case 10:
                        Console.WriteLine("id de tienda");
                        Console.WriteLine("1 - Santa Cruz Bikes");
                        Console.WriteLine("2 - Baldwin Bikes");
                        Console.WriteLine("3 - Rowlett Bikes");
                        
                        var i = int.Parse(Console.ReadLine());
                        if (i>0&&i<4)
                        {
                            var ejercicio10 = from p in context.stocks
                                              where p.store_id == i
                                              select p;
                            Console.WriteLine("");
                            foreach (var cliente in ejercicio10)
                            {
                                Console.WriteLine(cliente.product.product_name + " " + cliente.store.store_name);
                            }
                        }
                        else
                        {
                            Console.WriteLine("invalido");
                        }
                        break;
                    case 11:

                        break;
                        
                    default:
                        break;
                }
                


                


                

                
            }  
      }
   }
}

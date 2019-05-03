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
                Console.WriteLine("poner numero de ejercicio");
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
                        Console.WriteLine("6 AGRUPAR PRODUCTOS POR CATEGORÍA");
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
                        Console.WriteLine("7 MOSTRAR LOS CLIENTES DE LAS CIUDADES HOUSTON, ENCINO Y EL PASO");
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
                        Console.WriteLine("8 LISTAR LAS ÓRDENES ENVIADAS EN EL AÑO 2017");
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
                        Console.WriteLine("9 AGRUPAR A LOS CLIENTES CON EL DOMINIO DE CORREO @AOL.COM");
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
                        Console.WriteLine("10 MOSTRAR TODOS LOS PRODUCTOS DE UNA DE LAS TIENDAS");
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
                        Console.WriteLine("11 AGRUPAR A LOS CLIENTES QUE TIENEN MÁS DE DOS COMPRAS");
                        var ejercicio11 = from c in context.orders
                                          group c by c.customer_id into g
                                          join b in context.customers
                                          on g.Key equals b.customer_id
                                          select new { cantidad= g , nombre = b  };
                        foreach(var cliente in ejercicio11)
                        {
                            if (cliente.cantidad.Count()>2)
                            {
                                Console.WriteLine(cliente.nombre.first_name+" "+cliente.nombre.last_name+" "+cliente.cantidad.Count());
                            }
                        }
                        break;
                    case 12:
                        Console.WriteLine("12 MOSTRAR CLIENTES SIN TELÉFONOS");
                        var ejercicio12 = from c in context.customers
                                          where c.phone == null
                                          select c;
                        foreach (var cliente in ejercicio12)
                        {
                            Console.WriteLine(cliente.first_name + " " + cliente.last_name);
                        }
                        break;
                    case 13:
                        Console.WriteLine("13 MOSTRAR LAS VENTAS DEL VENDEDOR 1");
                        var ejercicio13 = from c in context.orders
                                          where c.staff_id == 2
                                          select c;
                        foreach (var item in ejercicio13)
                        {
                            Console.WriteLine(item.order_id);
                        }
                        break;
                    case 14:
                        Console.WriteLine("14 MOSTRAR LAS COMPRAS DE LOS CLIENTES QUE VIVEN EN LONGVIEW");
                        var ejercicio14 = from c in context.customers
                                          where c.city == "LongView"
                                          join com in context.orders
                                          on c.customer_id equals com.customer_id
                                          select new { comprador = c, venta = com };
                        foreach (var item in ejercicio14)
                        {
                            Console.WriteLine(item.comprador.first_name+" "+item.venta.order_id);
                        }
                        break;
                    case 15:
                        Console.WriteLine("15 MOSTRAR EL CLIENTE CON MENOS COMPRAS");
                        var Ejercicio15 = from c in context.customers
                                          join ventas in context.orders
                                          on c.customer_id equals ventas.customer_id
                                          group c by c.customer_id into g
                                          orderby g.Count()
                                          select g;
                        foreach (var item in Ejercicio15)
                        {
                            foreach (var item2 in item)
                            {
                                Console.WriteLine(item2.first_name + " " + item2.last_name + " =>  " + item2.orders.Count());
                            }
                        }
                        break;
                    case 16:
                        Console.WriteLine("16 ¿HAY ALGÚN VENDEDOR SIN VENTAS?");
                        var ejercicio16 = from v in context.staffs
                                          join s in context.orders
                                          on v.staff_id equals s.staff_id into g
                                          from s in g.DefaultIfEmpty()
                                          where s.staff_id == null
                                          select v;
                        foreach (var item in ejercicio16)
                        {
                            Console.WriteLine(item.first_name+" "+item.last_name);
                        }
                        break;
                    case 17:
                        Console.WriteLine("17 AGRUPAR A LOS CLIENTES SIN COMPRAS");
                        var ejercicio17 = from c in context.customers
                                          join s in context.orders
                                          on c.customer_id equals s.customer_id into g
                                          from s in g.DefaultIfEmpty()
                                          where s.customer_id == null
                                          select c;
                        foreach (var item in ejercicio17)
                        {
                            Console.WriteLine(item.first_name+" "+item.last_name);
                        }
                        break;
                    case 18:
                        Console.WriteLine("18 MOSTRAR EL NOMBRE DE PRODUCTO, LA CATEGORÍA Y EL PRECIO DE UN PRODUCTOS");
                        var ejercicio18 = from p in context.products
                                          join c in context.categories
                                          on p.category_id equals c.category_id
                                          select p;
                        foreach (var item in ejercicio18)
                        {
                            Console.WriteLine("Nombre: "+item.product_name + " precio: " + item.category.category_name + " categoria: "+item.list_price);
                        }
                        break;
                    case 19:
                        var ejercicio19 = from A in context.staffs
                                          join B in context.staffs on A.manager_id equals B.staff_id
                                          select new
                                          {
                                              Empleado = A,
                                              Supervisor = B
                                          };
                        foreach (var item in ejercicio19)
                        {
                            Console.WriteLine("supervisor: "+item.Supervisor.first_name+" "+item.Supervisor.last_name+" "+"empleado: "+item.Empleado.first_name+" "+item.Empleado.last_name);
                        };
                        Console.WriteLine("19 MOSTRAR EL SUPERVISOR DE LOS EMPLEADOS");
                        break;
                    case 20:
                        Console.WriteLine("20 MOSTRAR TODOS LOS PRODUCTOS CON SUS MARCAS");
                        
                        var ejercicio20 = from producto in context.products
                                          join b in context.brands on producto.brand_id equals b.brand_id
                                          select producto;
                        foreach (var item in ejercicio20)
                        {
                            Console.WriteLine("nombre: " + item.product_name + " categoria: " + item.category.category_name);
                        }
                        break;
                    default:
                        Console.WriteLine("incorrecto");
                        break;
                }
                


                


                

                
            }  
      }
   }
}

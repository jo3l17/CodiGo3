using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace ejercicio
{
    class Program
    {
        static SqlConnection con;
        static SqlCommand cmd;
        static void Main(string[] args)
        {
            con = new SqlConnection("Data Source=DESKTOP-GGAU3TL\\SQLEXPRESS;" + "Initial Catalog = banco; Integrated Security = True");
            try
            {
                con.Open();
                Console.WriteLine("se conecto correctamente");
            }
            catch (Exception)
            {
                Console.WriteLine("no se pudo conectar");
            }
            string DNI, clave;
            Console.WriteLine("ingrese su DNI");
            DNI = Console.ReadLine();
            solicitarClave();
            //Console.WriteLine("ingrese su contraseña");
            //clave = Console.ReadLine();

            cmd = new SqlCommand($"select count (*) from cajero.cliente where DNI = '{DNI}' and clave = '{clave}'", con);
            int resultado = Convert.ToInt32(cmd.ExecuteScalar());
            if (resultado == 1)
            {
                cmd = new SqlCommand($"select Nombre from cajero.cliente where DNI = '{DNI}' and clave = '{clave}'", con);
                string nombre = cmd.ExecuteScalar().ToString();
                
                Menu(nombre);
            }
            
        }
        static void solicitarClave()
        {
            cliente.ingresarClave();
        }
        static void Menu(string nombre)
        {
            Console.WriteLine($"Bienvenido {nombre}");
            Console.WriteLine("---ELIJA OPCION----");
            Console.WriteLine("---1. Consultar saldo----");
            Console.WriteLine("---2. depositar----");
            Console.WriteLine("---3. retirar----");
            Console.WriteLine("---4. transferir----");
        }
    }
}

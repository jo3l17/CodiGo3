using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using BaseDeDatos.entidad;
using BaseDeDatos.Controladores;


namespace BaseDeDatos
{
    class Program
    {
        static SqlConnection con;
        static SqlCommand cmd;
        static void Main(string[] args)
        {

            usuario usu = new usuario { Nombre = "Pablo1", Clave = "Virtual" };
            ControladorUsuario cUsuario = new ControladorUsuario();
            /*otra manera de crear objeto usuario
            usuario usu1 = new usuario();
            usu1.Nombre = "Martin";
            usu1.Clave = "Virtu@l";*/

            ///MENU
            ///1 CREAR USUARIO
            cUsuario.InsertarUsuario(usu);
            ///2 CAMBIAR CONTRASEÑA
            cUsuario.CambiarContraseña(new usuario { Nombre = "Pablo", Clave = "Virt" });













            /*
            int opcion = 1;
            do
            {
                con = new SqlConnection("Data Source=DESKTOP-GGAU3TL\\SQLEXPRESS;" + "Initial Catalog = BikeStores; Integrated Security = True");
                try
                {
                    con.Open();
                    Console.WriteLine("se conecto correctamente");
                }
                catch (Exception)
                {
                    Console.WriteLine("no se pudo conectar");
                }
                
                string usuario, clave;
                Console.WriteLine("ingrese usuario");
                usuario = Console.ReadLine();
                Console.WriteLine("ingrese contraseña");
                clave = Console.ReadLine();

                cmd = new SqlCommand($"select count (*) from usuarios where nombre = '{usuario}' and clave = '{clave}'", con);
                int name = Convert.ToInt32(cmd.ExecuteScalar());
                if (name == 1)
                {
                    cmd = new SqlCommand($"select * from usuarios where nombre = '{usuario}' and clave = '{clave}'", con);
                    string resultado = cmd.ExecuteScalar().ToString();
                    Console.WriteLine($"el usuario {resultado} se ha conectado");
                    Console.WriteLine("ingrese una opcion");
                    Console.WriteLine("1 agregar usuario");
                    Console.WriteLine("2 modificar nombre de usuario");
                    Console.WriteLine("3 modificar contraseña");
                    Console.WriteLine("4 consultar datos");
                    Console.WriteLine("0 Salir");

                    opcion = int.Parse(Console.ReadLine());
                    switch (opcion)
                    {
                        case 1:
                            //agregar un usuario
                            string nuevoUsuario, nuevaClave;
                            Console.WriteLine("ingrese nuevo usuario");
                            nuevoUsuario = Console.ReadLine();
                            Console.WriteLine("ingrese nueva contraseña");
                            nuevaClave = Console.ReadLine();
                            cmd = new SqlCommand($"insert into usuarios values('{nuevoUsuario}', '{nuevaClave}')", con);
                            if (cmd.ExecuteNonQuery() > 0)
                                Console.WriteLine("se inserto correctamente");
                            break;

                        case 2:
                            //modificar nombre de usuario
                            string modUsuario;
                            Console.WriteLine("ingrese nuevo nombre usuario");
                            modUsuario = Console.ReadLine();
                            cmd = new SqlCommand($"update usuarios set nombre ='{modUsuario}' where nombre = '{usuario}'", con);
                            if (cmd.ExecuteNonQuery() > 0)
                                Console.WriteLine($"se cambio el nombre correctamente de {usuario} a {modUsuario}");
                            break;
                        case 3:
                            //modificar clave
                            string modClave;
                            Console.WriteLine("ingrese nueva contraseña");
                            modClave = Console.ReadLine();
                            cmd = new SqlCommand($"update usuarios set clave ='{modClave}' where clave = '{clave}'", con);
                            if (cmd.ExecuteNonQuery() > 0)
                                Console.WriteLine($"se cambio la contraseña correctamente a {modClave}");
                            break;
                        case 4:
                            //consulta de datos
                            cmd = new SqlCommand($"select nombre,clave from usuarios", con);
                            SqlDataReader reader = cmd.ExecuteReader();
                            while (reader.Read())
                            {
                                Console.WriteLine($"usuario: {reader[0]} \t Clave: {reader[1]}");
                                //Console.WriteLine(reader[0]);
                            }
                            break;
                        default:
                            break;
                    }
                }
                else
                {
                    opcion = 0;
                    Console.WriteLine("usuario y/o contraseña incorrectos");
                }

                con.Close();
            } while (opcion != 0);
            
            */
        }
    }
}

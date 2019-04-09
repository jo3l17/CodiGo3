using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace BaseDeDatos
{
    class conexionDB
    {
        SqlConnection con;

        public conexionDB()
        {
            con = new SqlConnection();
            string cadenaDeConexion = ("Data Source = DESKTOP-GGAU3TL\\SQLEXPRESS;" + "Initial Catalog = Bikestores; Integrated Security = True");
            con.ConnectionString = cadenaDeConexion;

            //con = new SqlConnection("Data Source = DESKTOP-GGAU3TL\\SQLEXPRESS; Initial Catalog = Bikestores; Integrated Security = True");            
        }
        public SqlConnection GetConexion()
        {
            return con;
        }
        public void AbrirConexion()
        {
            try
            {
                con.Open();
                Console.WriteLine("Se abrio la conexion");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"no se pudo conectar a la base, motivo {0}", ex.StackTrace);
            }
        }
        public void CerrarConexion()
        {
            try
            {
                con.Close();
                Console.WriteLine("Se cerro la conexion");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"no se pudo conectar a la base, motivo {0}", ex.StackTrace);
            }
        }
    }
}

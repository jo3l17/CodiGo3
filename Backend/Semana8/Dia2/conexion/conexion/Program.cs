using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace conexion
{
    class Program
    {
        static void Main(string[] args)
        {
            conexionDB con = new conexionDB();
            con.AbrirConexion();
        }
    }
}

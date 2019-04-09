using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BaseDeDatos.entidad;


namespace BaseDeDatos.Controladores
{
    class ControladorUsuario
    {
        conexionDB con = new conexionDB();
        SqlCommand cmd;
        public void InsertarUsuario(usuario u)
        {
            cmd = new SqlCommand("insert into usuarios values ('@nombre','@clave')",
                con.GetConexion());
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("nombre", u.Nombre);
            cmd.Parameters.AddWithValue("nombre", u.Clave);
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }
        public void UpdateUsuario(usuario u)
        {

        }
        public void CambiarContraseña(usuario u)
        {

        }
    }
}

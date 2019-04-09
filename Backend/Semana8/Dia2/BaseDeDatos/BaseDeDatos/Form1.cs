using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace BaseDeDatos
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {
             SqlConnection con;
             SqlCommand cmd;
            void Main(string[] args)
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
                }
                else
                {
                    Console.WriteLine("usuario y/o contraseña incorrectos");
                }
                con.Close();
            }
        }
    }
}

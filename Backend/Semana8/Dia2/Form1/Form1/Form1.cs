using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Form1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void radioButton2_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            
            if (textBoxNombre.Text=="")
            {
                label1.Text = "no hay texto";
                this.Hide();
                Form2 frm = new Form2();
                frm.Show();
            }
            else
            {
                MessageBox.Show($"el nombre es {textBoxNombre.Text}");
            }
            
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            MessageBox.Show("bienvenido");
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}

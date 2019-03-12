using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UsoDeClases
{
    class Program
    {
        static void Main(string[] args)
        {
            Gato gatito = new Gato("Tizon");
            gatito.PesarGato();
            gatito.Comer();
            gatito.PesarGato();
            Gato.variableEstatica++;
            Gato.mostrarVariables();
            /*int[] arr = new int[10];
            Gato tom = new Gato("Tom");
            tom.PesarGato();
            tom.Comer();
            tom.Comer();
            tom.PesarGato();
            //tom.nombre = "Tom";
            tom.Maullar();
            Gato elias = new Gato();
            //elias.nombre = "Elias";
            elias.Araniar();
            */
        }
    }
    class Gato
    {
        public static int variableEstatica;
        //atributos
        string nombre;
        float peso;
        float altura;
        string color;
        public static void mostrarVariables()
        {

        }

        //metodos
        public void NombrarGato(string nombre)
        {
            this.nombre = nombre;
            Console.WriteLine($"Se nombro correctamente a {nombre}");
        }
        // constructor sin parametros
        public Gato()
        {
            Console.WriteLine("Se creo un gato");
        }
        // constructor con parametros
        public Gato(string nombre)
        {
            this.peso = 5;
            NombrarGato(nombre);
            //this.nombre = nombre;
            Console.WriteLine($"se creo un gato con nombre: {nombre}");
        }
        public void Comer()
        {
            Console.WriteLine("el gato esta comiendo");
            this.peso++;
        }
        public void PesarGato()
        {
            Console.WriteLine($"el gato pesa {this.peso} kilos");
        }
        public void Araniar()
        {

        }
        public void Ronronear()
        {

        }
        public void Maullar()
        {
            Console.WriteLine($"el gato {nombre} dice miau");
        }
    }
}

using System;

namespace ConsoleApp1
{
    interface Ianimal
    {
        string nombre { get; set; }
        string Describir();
    }
    class Perro : Ianimal
    {
        private string nombre;

        string Ianimal.nombre { get; set ; }
        

        public Perro(string nombre)
        {
            this.nombre = nombre;
        }
        public void Ladrar()
        {
            Console.WriteLine("Guau!! dijo "+ nombre);
        }

        string Ianimal.Describir()
        {
            return "El perro se llama: "+nombre;
        }
        
    }
    class Gato: Ianimal
    {
        public string nombre { get; set; }
        public Gato(string nombre)
        {
            this.nombre = nombre;
        }
        public void Maullar()
        {
            Console.WriteLine("Miau! dijo: "+ nombre);
        }
        string Ianimal.Describir()
        {
            return "El gato se llama: " + nombre;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Perro p1 = new Perro("Firulais");
            Perro p2 = new Perro("Orejas");
            Gato g = new Gato("nose");

            p1.Ladrar();
            p2.Ladrar();
            g.Maullar();
            Entrenar(p1);
            Entrenar(g);
            Ianimal perrito = new Perro("Bulldog");
        }
        static void Entrenar (Ianimal animal)
        {
            Console.WriteLine($"{animal.Describir()} esta entrenando");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutorLibro
{
    class Program
    {
        static void Main(string[] args)
        {
            Autor elAutor = new Autor("Mark Douglas", "mdouglas@aol.com", 'm');
            Libro miLibro = new Libro("Trading en la zona", 43.3, elAutor);
            Console.WriteLine(elAutor.GetNombre());
            Console.WriteLine(elAutor.Genero);
            elAutor.Genero = 'f';
            Console.WriteLine(elAutor.Genero);
            Console.WriteLine(miLibro.GetAutor().GetNombre());
            Console.WriteLine(elAutor.ToString());
            Console.WriteLine();
            Console.WriteLine(miLibro.ToString());
        }
    }
    class Autor
    {
        string _nombre;
        string _email;
        char _genero;

        public char Genero { get => _genero; set => _genero = value; }

        public Autor(string nombre, string email, char genero)
        {
            this._nombre = nombre;
            this._email = email;
            _genero = genero;
        }
        public string GetNombre()
        {
            return _nombre;
        }
        public string GetEmail()
        {
            return _email;
        }
        public override string ToString()
        {
            return $"[nombre={_nombre}, email={_email},genero={_genero}]";
        }
    }
    class Libro
    {
        string _titulo;
        double _precio;
        //usando un objeto dentro de una clase
        //se declara un objeto de tipo autor
        Autor _autor;
        public Libro(string titulo, double precio, Autor autor)
        {
            _titulo = titulo;
            _precio = precio;
            _autor = autor;
        }

        public double Precio { get => _precio; set => _precio = value; }

        public string GetTitulo()
        {
            return _titulo;
        }
        public Autor GetAutor()
        {
            return _autor;
        }
        public override string ToString()
        {
            return $"Libro [titulo={_titulo}, precio={_precio},autor={_autor}]";
        }
    }
}

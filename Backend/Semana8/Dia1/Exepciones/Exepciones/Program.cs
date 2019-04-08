using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Exepciones
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Division de dos numeros");
            int a, b;
            a = int.Parse(Console.ReadLine());
            b = int.Parse(Console.ReadLine());
            int[] arr = { 3, 4, 5, 6 };
            try
            {
                Console.WriteLine($"la division es {a / b}");
                Console.WriteLine($"Elemento en la posicion 7 es {arr[6]}");
            }
            catch(DivideByZeroException dbz)
            {
                Console.WriteLine("No se puede dividir por cero");
            }
            catch
            {
                Console.WriteLine("el elemanto esta fuera del rango");
            }
            //string nombreArchivo = "un archivo.txt";
            //ReadFile(nombreArchivo);
        }
        static void ReadFile(string nombre)
        {
            if (File.Exists(nombre))
            {
                TextReader reader = new StreamReader(nombre);
                string line = reader.ReadLine();
                reader.Close();

            }
            else
            {
                Console.WriteLine("el archvio no existe");
            }
            int[] arr = { 3, 4, 5, 6 };
            try
            {
                Console.WriteLine(arr[6]);
                TextReader reader = new StreamReader(nombre);
            }
            catch (FileNotFoundException fe)
            {
                Console.WriteLine(fe.StackTrace);
            }
            catch(IOException ie)
            {
                Console.WriteLine(ie.StackTrace);
            }
            catch(IndexOutOfRangeException io)
            {
                Console.WriteLine(arr[3]);
            }
            
        }
    }
}

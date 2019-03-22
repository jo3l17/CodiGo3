using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> milista = new List<int>();
            Console.WriteLine("cuantos numeros");
            int numero = int.Parse(Console.ReadLine());
            for (int i = 0; i < numero; i++)
            {
                Console.WriteLine("ingrese numero {0}", i + 1);
                milista.Add(int.Parse(Console.ReadLine()));
            }
            Console.WriteLine();
            foreach (var number in milista)
            {
                Console.Write(" " + number);
            }
            Console.WriteLine();
            do
            {
                Console.WriteLine("desea quitar un numero? S/N");
                char opc = char.Parse(Console.ReadLine());
                //forma 1
                /*if (opc == 's')
                {
                    Console.WriteLine("ingrese el numero a eliminar");
                    int neliminar = int.Parse(Console.ReadLine());
                    int contar = 0;
                    foreach (var item in milista)
                    {
                        if (neliminar == item)
                        {
                            contar = 1;
                        }
                    }
                    if (contar == 0)
                    {
                        Console.WriteLine("el numero {0} no se ha encontrado", neliminar);
                    }
                    else
                    {
                        Console.WriteLine("se elimimno el numero {0}", neliminar);
                        milista.Remove(neliminar);
                    }
                }*/
                //forma 2
                if (opc == 's')
                {
                    Console.WriteLine("ingrese el numero a eliminar");
                    int neliminar = int.Parse(Console.ReadLine());
                    if(milista.Contains(neliminar)==true)
                    {
                        milista.Remove(neliminar);
                        Console.WriteLine("el numero {0} se elminino",neliminar);
                    }
                    else
                    {
                        Console.WriteLine("el numero {0} no se encontro", neliminar);
                    }
                }
                else
                {
                    foreach (var item in milista)
                    {
                        Console.Write(" " + item + " ");
                    }
                    break;
                }
            } while (true);
        }
    }
}

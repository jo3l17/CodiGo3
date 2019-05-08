using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronRepository.Repositorios.Interfaz
{
    interface IRepositorio<T> where T:class
    {
        // get, insert, delete
        T Get(int i);
        IEnumerable<T> GetAll();

        void Agregar(T entidad);
        void AgregarVarios(IEnumerable<T> entidades);

        void Borrar(T entidad);
        void BorrarVarios(IEnumerable<T> entidades);
    }
}

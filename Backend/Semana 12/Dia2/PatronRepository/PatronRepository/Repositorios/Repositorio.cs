
using PatronRepository.Repositorios.Interfaz;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatronRepository.Repositorios
{
    class Repositorio<T> : IRepositorio<T> where T : class
    {
        protected readonly DbContext context;
        protected readonly DbSet<T> entities;

        public Repositorio(DbContext context)
        {
            this.context = context;
            entities = context.Set<T>();
        }
        public void Agregar(T entidad)
        {
            entities.Add(entidad);
        }

        public void AgregarVarios(IEnumerable<T> entidades)
        {
            throw new NotImplementedException();
        }

        public void Borrar(T entidad)
        {
            throw new NotImplementedException();
        }

        public void BorrarVarios(IEnumerable<T> entidades)
        {
            throw new NotImplementedException();
        }

        public T Get(int i)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}

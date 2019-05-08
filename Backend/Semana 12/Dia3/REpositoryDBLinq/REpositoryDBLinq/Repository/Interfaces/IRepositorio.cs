using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace REpositoryDBLinq.Repository.Interfaces
{
    public interface IRepositorio <TEntity> where TEntity : class
    {
        // CRUD(CREATE,READ,UPDATE,DELETE) crear, quitar, leer 
        // LEER
        TEntity Get(int i);
        IEnumerable<TEntity> GetTodos();

        // Busqueda
        IEnumerable<TEntity> Buscar(Expression<Func<TEntity,bool>> condicion);
        TEntity GetSingleOrDefault(Expression<Func<TEntity, bool>> condicion);

        // AGREGAR
        void Agregar(TEntity entity);
        void AgregarVarios(IEnumerable<TEntity> entities);

        // BORRAR
        void Borrar(TEntity entity);
        void BorrarVarios(IEnumerable<TEntity> entities);
    }
}

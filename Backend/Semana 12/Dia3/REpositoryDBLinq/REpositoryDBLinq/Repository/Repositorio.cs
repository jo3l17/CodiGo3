using REpositoryDBLinq.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace REpositoryDBLinq.Repository
{
    class Repositorio<TEntity> : IRepositorio<TEntity> where TEntity : class
    {
        protected readonly DbContext context;

        public Repositorio(DbContext context)
        {
            this.context = context;
        }
        public void Agregar(TEntity entity)
        {
            context.Set<TEntity>().Add
        }

        public void AgregarVarios(IEnumerable<TEntity> entities)
        {
            context.Set<TEntity>().AddRange(entities);
        }

        public void Borrar(TEntity entity)
        {
            context.Set<TEntity>().Remove(entity);
        }

        public void BorrarVarios(IEnumerable<TEntity> entities)
        {
            context.Set<TEntity>().RemoveRange(entities);
        }

        public IEnumerable<TEntity> Buscar(Expression<Func<TEntity, bool>> condicion)
        {
            return context.Set<TEntity>().Where(condicion).ToList();
        }

        public TEntity Get(int i)
        {
            return context.Set<TEntity>().Find(i);
        }

        public TEntity GetSingleOrDefault(System.Linq.Expressions.Expression<Func<TEntity, bool>> condicion)
        {
            return context.Set<TEntity>().SingleOrDefault(condicion);
        }

        public IEnumerable<TEntity> GetTodos()
        {
            return context.Set<TEntity>().ToList();
        }
    }
}

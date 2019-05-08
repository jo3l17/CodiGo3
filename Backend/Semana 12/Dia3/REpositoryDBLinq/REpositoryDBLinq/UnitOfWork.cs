using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using REpositoryDBLinq.Repository;
using REpositoryDBLinq.Repository.Interfaces;

namespace REpositoryDBLinq
{
    class UnitOfWork : IUnityOfWork
    {
        private readonly LinQContext context;
        public UnitOfWork(LinQContext context)
        {
            this.context = context;
            customers = new CustomersRepositorio(this.context);
        }

        public void Dispose()
        {
            context.Dispose();
        }

        public void ejecutar()
        {
            context.SaveChanges();
        }


        public ICustomersRepositorio customers { get; set; }
    }
}

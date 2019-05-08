using REpositoryDBLinq.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REpositoryDBLinq.Repository
{
    class CustomersRepositorio : Repositorio<Customers>, ICustomersRepositorio
    {
        LinQContext LINQContext;
        public CustomersRepositorio(LinQContext context):base(context)
        {
            this.LINQContext = context;
        }
        
        public IEnumerable<Customers> GetClientesConInvoicesPaginacion(int pagina, int ItemsPorPagina)
        {
            return LINQContext.Customers.Include(x => x.Invoices)
                .OrderBy(x => x.Name)
                .Skip((pagina - 1) * ItemsPorPagina)
                .Take(ItemsPorPagina)
                .ToList();
        }

        public IEnumerable<Customers> GetClientesConLetraJ()
        {
            throw new NotImplementedException();
        }
    }
}

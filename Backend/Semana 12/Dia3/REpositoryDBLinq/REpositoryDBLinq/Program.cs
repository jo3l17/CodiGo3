using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REpositoryDBLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            UnitOfWork unit = new UnitOfWork(new LinQContext());

            unit.customers.GetClientesConInvoicesPaginacion(3, 10);

            LinQContext context = new LinQContext();

            context.Customers.Include(x => x.Invoices)
                .OrderBy(x => x.Name)
                .Skip((3 - 1) * 10)
                .Take(10)
                .ToList();
        }
    }
}

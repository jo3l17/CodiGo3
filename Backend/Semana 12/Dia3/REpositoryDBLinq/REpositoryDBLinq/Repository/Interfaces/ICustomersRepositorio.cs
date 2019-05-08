using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REpositoryDBLinq.Repository.Interfaces
{
    interface ICustomersRepositorio : IRepositorio <Customers>
    {
        IEnumerable<Customers> GetClientesConLetraJ();
        IEnumerable<Customers> GetClientesConInvoicesPaginacion(int pagina, int itemPorPagina);
    }
}

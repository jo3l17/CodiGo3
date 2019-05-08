using REpositoryDBLinq.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REpositoryDBLinq
{
    interface IUnityOfWork:IDisposable
    {
        ICustomersRepositorio customers { get; }
        void ejecutar();
    }
}

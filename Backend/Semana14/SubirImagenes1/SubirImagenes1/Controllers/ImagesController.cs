using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SubirImagenes1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly Context context;

        public ImagesController(Context context)
        {
            this.context = context;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public async Task<ActionResult> Post(IFormFile archivo)
        {
            Usuario usuario = new Usuario();
            usuario.nombre = "Joel";
            //usuario.imagen

            using (var memoryStream = new MemoryStream())
            {
                archivo.CopyTo(memoryStream);
                usuario.imagen = memoryStream.ToArray();
            }
            await context.Usuarios.AddAsync(usuario);
            await context.SaveChangesAsync();
            return Ok(usuario);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

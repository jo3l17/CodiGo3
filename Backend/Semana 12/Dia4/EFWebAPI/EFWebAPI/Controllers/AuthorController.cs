using EFWebAPI.EFContext;
using EFWebAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly EFWebAPIContext context;
        public AuthorController(EFWebAPIContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public ActionResult Get([FromBody] Author author)
        {
            context.Add(author);
            context.SaveChanges();
            return new CreatedAtRouteResult("GetAuthor", new { id = author.ID, name = author.name });
        }

        [HttpGet]
        public ActionResult<IEnumerable<Author>> Get()
        {

            return context.Authors;
        }
        [HttpGet("{id}",Name="GetAuthor")]
        public ActionResult<IEnumerable<Author>> Get(int id)
        {
            var author = context.Authors.Find(id);
            if (author == null)
                return BadRequest();
            return Ok(author);
            {

            }
        }
        [HttpPut]
        public ActionResult Put([FromBody] Author author)
        {
            context.Entry(author).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

    }
}

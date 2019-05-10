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
        [HttpGet("relacionar/{idAuthor}/{idBook}")]
        public ActionResult<Book> Relacionar (int idAuthor, int idBook)
        {
            var author = context.Authors.Find(idAuthor);
            var book = context.Books.Find(idBook);
            book.Author = author;
            context.Entry(book).State = EntityState.Modified;
            context.SaveChanges();
            return Ok(book);
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
            return context.Authors.Include("Books").ToList();
        }
        [HttpGet("{id}",Name="GetAuthor")]
        public ActionResult<IEnumerable<Author>> Get(int id)
        {
            var author = context.Authors.Find(id);
            if (author == null)
                return BadRequest(id);
            return Ok(author);
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

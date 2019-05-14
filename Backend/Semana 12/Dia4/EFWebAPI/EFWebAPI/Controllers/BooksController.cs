using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFWebAPI.EFContext;
using EFWebAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFWebAPI.Controllers
{
    [Route("api/[controller]")]
    
    public class BooksController : Controller
    {
        private readonly EFWebAPIContext context;
        public BooksController(EFWebAPIContext context)
        {
            this.context = context;
        }
        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<Book>> Get()
        {
            return context.Books.Include(x=>x.Author).ToList();
        }


        // GET api/<controller>/5
        /*[HttpGet("{id}", Name = "GetBook")]
        public ActionResult<IEnumerable<Book>> Get(int id)
        {
            var book = context.Books.Find(id);
            if (book == null)
                return BadRequest();
            return Ok(book);
            {

            }
        }*/
        [HttpGet("{id}")]
        [ResponseCache(Duration = 10)]
        public string Get(int id)
        {
            return DateTime.Now.Second.ToString();
        }
        // POST api/<controller>
        [HttpPost]
        public ActionResult<IEnumerable<Book>> Post([FromBody]Book book)
        {
            book.Author = context.Authors.Find(book.Author.ID);
            context.Books.Add(book);
            context.SaveChanges();
            return Ok(book);
        }
        [HttpGet("GetAuthor/{name}")]
        public ActionResult<Author> GetAuthor(string name)
        {
            var book = context.Books.Include(x => x.Author).Where(x => x.Title.Contains(name)).FirstOrDefault();
            if (book == null || book.Author == null)
                return BadRequest();
            
            return Ok(book.Author.ID);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public ActionResult<IEnumerable<Book>> Put(int id, [FromBody]Book book)
        {
            
            context.Entry(book).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var book = context.Books.Find(id);
            context.Books.Remove(book);
            context.SaveChanges();
            return Ok(book);
        }
    }
}

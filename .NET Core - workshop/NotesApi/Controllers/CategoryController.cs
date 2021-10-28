using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Controllers
{
    public class CategoryController: ControllerBase
    {
        static List<Category> categories = new List<Category>
        {
            new Category()
            {
                id = "1",
                name = "To Do"
            },
            new Category()
            {
                id = "2",
                name = "Done"
            },
            new Category()
            {
                id = "3",
                name = "Doing"
            }
        };

        /// <summary>
        ///     Returns a list of categories
        /// </summary>
        /// <returns></returns>
        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(categories);
        }

        /// <summary>
        ///     Return one category with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetWithParameters(string id)
        {
            var category = categories.FirstOrDefault(category => category.id == id);
            if(category == null)
            {
                return NotFound();
            }
            return Ok(category);

        }

        /// <summary>
        ///     Add a new category in list
        /// </summary>
        /// <param name="cat"></param>
        [HttpPost]
        public IActionResult Post([FromBody] Category cat)
        {
            if(cat == null)
            {
                BadRequest();
            }
            categories.Add(cat);
            return Ok();
        }

        /// <summary>
        ///     Delete the category with the specified id
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var category = categories.FirstOrDefault(category => category.id == id);
            if (category == null)
            {
                BadRequest();
            }
            categories.Remove(category);
            return Ok();
        }
    }
}

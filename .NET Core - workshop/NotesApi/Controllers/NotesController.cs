using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        public NotesController()
        {

        }

        /// <summary>
        ///     Returns a list of notes
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetWithParameters(string id)
        {
            return Ok(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok("FROM GET");
        }
    }
}

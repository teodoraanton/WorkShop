using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesApi.Models;
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
        static List<Notes> _notes = new List<Notes> 
        { 
            new Notes 
            { 
                Id = new System.Guid(), 
                CategoryId = "1", 
                OwnerId = new System.Guid("833400e7-30cb-494b-887d-139d7a193451"), 
                Title = "First Note", 
                Description = "First Note Description" 
            },
            new Notes 
            { 
                Id = new System.Guid(), 
                CategoryId = "1", 
                OwnerId = new System.Guid("833400e7-30cb-494b-887d-139d7a193451"), 
                Title = "Second Note", 
                Description = "Second Note Description" 
            },
            new Notes 
            { 
                Id = new System.Guid(), 
                CategoryId = "1", 
                OwnerId = new System.Guid(), 
                Title = "Third Note", 
                Description = "Third Note Description" 
            },
            new Notes 
            { 
                Id = new System.Guid(), 
                CategoryId = "1", 
                OwnerId = new System.Guid(), 
                Title = "Fourth Note", 
                Description = "Fourth Note Description" 
            },
            new Notes 
            { 
                Id = new System.Guid(), 
                CategoryId = "1", 
                OwnerId = new System.Guid(), 
                Title = "Fifth Note", 
                Description = "Fifth Note Description" 
            }
        };

        public NotesController()
        {

        }

        [HttpGet]
        public IActionResult GetNotes()
        {
            return Ok(_notes);
        }

        [HttpPost]
        public IActionResult CreateNote([FromBody] Notes note)
        {
            if(note == null)
            {
                return BadRequest("Note cannot be null");
            }
            _notes.Add(note);
            return Ok();
        }

        [HttpGet("OwnerId/{id}")]
        public IActionResult GetByOwnerId(Guid id)
        {
            List<Notes> note = _notes.FindAll(note => note.OwnerId == id);
            return Ok(note);
        }

        ///// <summary>
        /////     Returns a list of notes
        ///// </summary>
        ///// <returns></returns>
        //[HttpGet("{id}")]
        //public IActionResult GetWithParameters(string id)
        //{
        //    return Ok(id);
        //}

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <returns></returns>
        //[HttpGet("")]
        //public IActionResult Get()
        //{
        //    return Ok("FROM GET");
        //}


    }
}

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
        private static List<Notes> _notes = new List<Notes> 
        { 
            new Notes 
            { 
                Id = Guid.NewGuid(), 
                CategoryId = "1", 
                OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), 
                Title = "First Note", 
                Description = "First Note Description" 
            },
            new Notes 
            { 
                Id = Guid.NewGuid(), 
                CategoryId = "1", 
                OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), 
                Title = "Second Note", 
                Description = "Second Note Description" 
            },
            new Notes 
            { 
                Id = Guid.NewGuid(), 
                CategoryId = "1", 
                OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), 
                Title = "Third Note", 
                Description = "Third Note Description" 
            },
            new Notes 
            { 
                Id = Guid.NewGuid(), 
                CategoryId = "1", 
                OwnerId = new Guid("00000000-0000-0000-0000-000000000002"), 
                Title = "Fourth Note", 
                Description = "Fourth Note Description" 
            },
            new Notes 
            {
                Id = Guid.NewGuid(), 
                CategoryId = "1", 
                OwnerId = new Guid("00000000-0000-0000-0000-000000000002"), 
                Title = "Fifth Note", 
                Description = "Fifth Note Description" 
            }
        };


        public NotesController()
        {

        }

        /// <summary>
        ///     Return the list of notes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetNotes()
        {
            return Ok(_notes);
        }

        /// <summary>
        ///     Add a new note in list
        /// </summary>
        /// <param name="note"></param>
        /// <returns></returns>
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

        /// <summary>
        ///     Return on another route a note with a specified owner id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("OwnerId/{id}")]
        public IActionResult GetByOwnerId(Guid id)
        {
            List<Notes> note = _notes.FindAll(note => note.OwnerId == id);
            return Ok(note);
        }

        /// <summary>
        ///     Return the note with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}", Name = "GetNoteById")]
        public IActionResult GetByNoteId(Guid id)
        {
            List<Notes> note = _notes.FindAll(note => note.Id == id);
            return Ok(note);
        }

        [HttpPost("CreateNote")]
        public IActionResult Create(Notes note)
        {
            _notes.Add(note);
            return CreatedAtRoute("GetNoteById", new { id = note.Id.ToString() }, note);
        }

        /// <summary>
        ///     Return the list of notes with a note updated
        /// </summary>
        /// <param name="id"></param>
        /// <param name="noteToUpdate"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult UpdateNote(Guid id, [FromBody] Notes noteToUpdate)
        {
            if(noteToUpdate == null)
            {
                return BadRequest("Note cannot be null");
            }
            int indexNote = _notes.FindIndex(note => note.Id == id);
            if(indexNote == -1)
            {
                return NotFound();
            }
            noteToUpdate.Id = _notes[indexNote].Id;
            _notes[indexNote] = noteToUpdate;
            return Ok(_notes[indexNote]);
        }

        /// <summary>
        ///     Delete a note with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("id/{id}")]
        public IActionResult DeleteNote(Guid id)
        {
            var index = _notes.FindIndex(note => note.Id == id);
            if (index == -1)
            {
                return NotFound();
            }
            _notes.RemoveAt(index);
            return NoContent();
        }

        /// <summary>
        ///     Updated title for a note with specified id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="title"></param>
        /// <returns></returns>
        [HttpPatch("{id}/title")]
        public IActionResult UpdateTitleNote (Guid id, [FromBody] string title)
        {
            if(string.IsNullOrEmpty(title))
            {
                return BadRequest("The string cannot be null");
            }
            var index = _notes.FindIndex(note => note.Id == id);
            if (index == -1)
            {
                return NotFound();
            }
            _notes[index].Title = title;
            return Ok(_notes[index]);
        }

        /// <summary>
        ///     Update a note with a owner id and note id specified
        /// </summary>
        /// <param name="OwnerId"></param>
        /// <param name="NoteId"></param>
        /// <param name="note"></param>
        /// <returns></returns>
        [HttpPut("{OwnerId},{NoteId}")]
        public IActionResult UpdateNoteByOwnerAndNoteId(Guid OwnerId, Guid NoteId, [FromBody] Notes note)
        {
            if (note == null)
            {
                return BadRequest("Note cannot be null");
            }
            int indexNote = _notes.FindIndex(note => note.Id == NoteId && note.OwnerId == OwnerId);
            if (indexNote == -1)
            {
                return NotFound();
            }
            note.Id = _notes[indexNote].Id;
            _notes[indexNote] = note;
            return Ok(_notes[indexNote]);
        }

        /// <summary>
        ///     Delete a note with owner and note id specified
        /// </summary>
        /// <param name="OwnerId"></param>
        /// <param name="NoteId"></param>
        /// <returns></returns>
        [HttpDelete("{NoteId}/{OwnerId}")]
        public IActionResult DeleteNoteByOwnerAndNoteId(Guid OwnerId, Guid NoteId)
        {
            var index = _notes.FindIndex(note => note.Id == NoteId && note.OwnerId == OwnerId);
            if (index == -1)
            {
                return NotFound();
            }
            _notes.RemoveAt(index);
            return NoContent();
        }

        /// <summary>
        ///     Delete All notes with owner id specified
        /// </summary>
        /// <param name="ownerId"></param>
        /// <returns></returns>
        [HttpDelete("{ownerId}")]
        public IActionResult DeleteAllNotesByOwnerId(Guid ownerId)
        {
            if(_notes.Any(note => note.OwnerId != ownerId))
            {
                return NotFound();
            }
            _notes.RemoveAll(note => note.OwnerId == ownerId);
            return Ok();
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

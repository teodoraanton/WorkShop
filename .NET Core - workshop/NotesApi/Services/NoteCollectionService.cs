using NotesApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Services
{
    public class NoteCollectionService : INoteCollectionService
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

        public NoteCollectionService()
        {

        }

        public bool create(Notes model)
        {
            _notes.Add(model);
            bool isAdded = _notes.Contains(model);
            return isAdded;
        }

        public bool Delete(Guid id)
        {
            Notes note = _notes.FirstOrDefault(note => note.Id == id);
            bool isRemoved = _notes.Remove(note);
            return isRemoved;
        }

        public Notes Get(Guid id)
        {
            return _notes.FirstOrDefault(note => note.Id == id);
        }

        public List<Notes> GetAll()
        {
            return _notes;
        }

        public List<Notes> GetNotesByOwnerId(Guid ownerId)
        {
            return _notes.FindAll(note => note.OwnerId == ownerId);
        }

        public bool Update(Guid id, Notes model)
        {
            int index = _notes.FindIndex(note => note.Id == id);
            if(index == -1)
            {
                return false;
            }
            model.Id = _notes[index].Id;
            _notes[index] = model;
            bool isUpdated = _notes.Contains(model);
            return isUpdated;
        }
    }
}

using NotesApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Services
{
    public class OwnerService: IOwnerService
    {
        private static List<Owner> _owners = new List<Owner>
        {
            new Owner
            {
                Id = new System.Guid("00000000-0000-0000-0000-000000000001"),
                Name = "Andreea"
            },
            new Owner
            {
                Id = new System.Guid(),
                Name = "George"
            },
            new Owner
            {
                Id = new System.Guid(),
                Name = "Maria"
            },
            new Owner
            {
                Id = new System.Guid(),
                Name = "Marian"
            },
            new Owner
            {
                Id = new System.Guid(),
                Name = "Ionut"
            }
        };

        public bool create(Owner model)
        {
            _owners.Add(model);
            bool isAdded = _owners.Contains(model);
            return isAdded;
        }

        public bool Delete(Guid id)
        {
            Owner owner = _owners.FirstOrDefault(owner => owner.Id == id);
            bool isRemoved = _owners.Remove(owner);
            return isRemoved;
        }

        public Owner Get(Guid id)
        {
            return _owners.FirstOrDefault(owner => owner.Id == id);
        }

        public List<Owner> GetAll()
        {
            return _owners;
        }

        public bool Update(Guid id, Owner model)
        {
            int index = _owners.FindIndex(owner => owner.Id == id);
            if(index == -1)
            {
                return false;
            }
            model.Id = _owners[index].Id;
            _owners[index] = model;
            bool isUpdated = _owners.Contains(model);
            return isUpdated;
        }
    }
}

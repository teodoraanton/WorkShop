using Microsoft.AspNetCore.Mvc;
using NotesApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Controllers
{
    public class OwnerController: ControllerBase
    {
        static List<Owner> _owners = new List<Owner>
        {
            new Owner
            {
                Id = new System.Guid("00000000-0000-0000-0000-000000000001"),
                Name = "Andreea"
            },
            new Owner
            {
                Id = new System.Guid(),
                Name = "Ion"
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

        public OwnerController()
        {

        }

        /// <summary>
        ///     Return the list of owners
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetOwners()
        {
            return Ok(_owners);
        }

        /// <summary>
        ///     Add a new owner in list
        /// </summary>
        /// <param name="owner"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult CreateOwner([FromBody] Owner owner)
        {
            if(owner == null)
            {
                return BadRequest("Owner cannot be null");
            }
            _owners.Add(owner);
            return Ok();
        }

        /// <summary>
        ///     Delete a owner with a specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("id/{id}")]
        public IActionResult DeleteOwner(Guid id)
        {
            var index = _owners.FindIndex(owner => owner.Id == id);
            if (index == -1)
            {
                return NotFound();
            }
            _owners.RemoveAt(index);
            return NoContent();
        }

        /// <summary>
        ///     Update a owner with specified id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="owner"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult UpdateOwner(Guid id, [FromBody] Owner owner)
        {
            if (owner == null)
            {
                return BadRequest("Owner cannot be null");
            }
            int index = _owners.FindIndex(owner => owner.Id == id);
            if (index == -1)
            {
                return NotFound();
            }
            owner.Id = _owners[index].Id;
            _owners[index] = owner;
            return Ok(_owners[index]);
        }
    }
}

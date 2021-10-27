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
                Id = new System.Guid(),
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

        [HttpGet]
        public IActionResult GetOwners()
        {
            return Ok(_owners);
        }

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
    }
}

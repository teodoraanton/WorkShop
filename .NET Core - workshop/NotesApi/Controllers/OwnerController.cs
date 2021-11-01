using Microsoft.AspNetCore.Mvc;
using NotesApi.Models;
using NotesApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OwnerController : ControllerBase
    {
        IOwnerService _ownerService;
        public OwnerController(IOwnerService ownerService)
        {
            _ownerService = ownerService;
        }

        /// <summary>
        ///     Return the list of owners
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetOwners()
        {
            List<Owner> notes = await _ownerService.GetAll();
            return Ok(notes);
        }

        /// <summary>
        ///     Return the owner with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("OwnerId/{id}", Name = "GetOwnerById")]
        public async Task<IActionResult> GetOwnerById(Guid id)
        {
            Task<Owner> owner = _ownerService.Get(id);
            if(owner == null)
            {
                return NotFound();
            }
            return Ok(owner);
        }

        /// <summary>
        ///     Add a new owner in list
        /// </summary>
        /// <param name="owner"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] Owner owner)
        {
            if (owner == null)
            {
                return BadRequest("Owner cannot be null");
            }
            if (await _ownerService.create(owner))
            {
                return CreatedAtRoute("GetOwnerById", new { id = owner.Id.ToString() }, owner);
            }
            return NoContent();
        }

        /// <summary>
        ///     Delete a owner with a specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("id/{id}")]
        public async Task<IActionResult> DeleteOwner(Guid id)
        {
            if (await _ownerService.Delete(id))
            {
                return Ok();
            }
            return NotFound();
        }

        /// <summary>
        ///     Update a owner with specified id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="owner"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOwner(Guid id, [FromBody] Owner owner)
        {
            if (owner == null)
            {
                return BadRequest("Owner cannot be null");
            }
            if (await _ownerService.Update(id, owner))
            {
                return Ok();
            }
            return NoContent();
        }
    }
}

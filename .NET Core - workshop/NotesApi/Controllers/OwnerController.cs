//using Microsoft.AspNetCore.Mvc;
//using NotesApi.Models;
//using NotesApi.Services;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace NotesApi.Controllers
//{
//    [ApiController]
//    [Route("[controller]")]
//    public class OwnerController: ControllerBase
//    {
//        IOwnerService _ownerService;
//        public OwnerController(IOwnerService ownerService)
//        {
//            _ownerService = ownerService;
//        }

//        /// <summary>
//        ///     Return the list of owners
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        public IActionResult GetOwners()
//        {
//            return Ok(_ownerService.GetAll());
//        }

//        /// <summary>
//        ///     Return the owner with the specified id
//        /// </summary>
//        /// <param name="id"></param>
//        /// <returns></returns>
//        [HttpGet("OwnerId/{id}", Name = "GetOwnerById")]
//        public IActionResult GetOwnerById(Guid id)
//        {
//            return Ok(_ownerService.Get(id));
//        }

//        /// <summary>
//        ///     Add a new owner in list
//        /// </summary>
//        /// <param name="owner"></param>
//        /// <returns></returns>
//        [HttpPost]
//        public IActionResult CreateOwner([FromBody] Owner owner)
//        {
//            if(owner == null)
//            {
//                return BadRequest("Owner cannot be null");
//            }
//            if (_ownerService.create(owner))
//            {
//                return CreatedAtRoute("GetOwnerById", new { id = owner.Id.ToString() }, owner);
//            }
//            return NoContent();
//        }

//        /// <summary>
//        ///     Delete a owner with a specified id
//        /// </summary>
//        /// <param name="id"></param>
//        /// <returns></returns>
//        [HttpDelete("id/{id}")]
//        public IActionResult DeleteOwner(Guid id)
//        {
//            if(_ownerService.Delete(id))
//            {
//                return Ok();
//            }
//            return NotFound();
//        }

//        /// <summary>
//        ///     Update a owner with specified id
//        /// </summary>
//        /// <param name="id"></param>
//        /// <param name="owner"></param>
//        /// <returns></returns>
//        [HttpPut("{id}")]
//        public IActionResult UpdateOwner(Guid id, [FromBody] Owner owner)
//        {
//            if (owner == null)
//            {
//                return BadRequest("Owner cannot be null");
//            }
//            if(_ownerService.Update(id, owner))
//            {
//                return Ok();
//            }
//            return NoContent();
//        }
//    }
//}

using Microsoft.AspNetCore.Mvc;
using Model;
using Service;
using System.Collections.Generic;

namespace api.Controllers
{
    [Route("[controller]")]
    public class ContentsController : ControllerBase
    {
        private readonly IBlogContentService _blogContentService;

        public ContentsController(IBlogContentService blogContentService)
        {
            _blogContentService = blogContentService;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                _blogContentService.GetAll()
                );
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(
                _blogContentService.Get(id)
                );
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] content model)
        {
            return Ok(
                _blogContentService.Add(model)
                );
        }

        // Put api/values
        [HttpPut]
        public IActionResult Put([FromBody] content model)
        {
            return Ok(
                _blogContentService.Add(model)
                );
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(
               _blogContentService.Delete(id)
               );
        }
    }
}

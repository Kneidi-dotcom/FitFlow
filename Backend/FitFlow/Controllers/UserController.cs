using FitFlow.Models;
using FitFlow.Service;
using Microsoft.AspNetCore.Mvc;

namespace FitFlow.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService userService;

        public UserController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public ActionResult<List<UserDTO>> GetUsers()
        {
            return Ok(userService.GetAllUsers());
        }
    }
}

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

        [HttpPost]
        public ActionResult<UserDTO> CreateUser([FromBody] UserDTO userDto)
        {
            var createdUser = userService.CreateUser(userDto);
            return CreatedAtAction(nameof(GetUsers), new { id = createdUser.user_id }, createdUser);
        }

        [HttpGet("{userId}/TrainingPlans")]
        public ActionResult<List<UserTrainingPlanDTO>> GetTrainingPlansForUser(int userId)
        {
            return Ok(userService.GetTrainingPlansForUser(userId));
        }
    }
}

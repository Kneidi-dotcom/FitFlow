using FitFlow.Models;
using FitFlow.Service;
using Microsoft.AspNetCore.Mvc;

namespace FitFlow.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkoutController : ControllerBase
    {
        private readonly WorkoutService workoutService;

        public WorkoutController(WorkoutService workoutService)
        {
            this.workoutService = workoutService;
        }

        [HttpGet("{workoutId}/Exercises")]
        public ActionResult<List<WorkoutExerciseMappingDTO>> GetExercisesForWorkout(int workoutId)
        {
            return Ok(workoutService.GetExercisesForWorkout(workoutId));
        }

        [HttpPost]
        public ActionResult<UserWorkoutDTO> CreateWorkout([FromBody] UserWorkoutDTO workoutDto)
        {
            var createdWorkout = workoutService.CreateWorkout(workoutDto);
            return CreatedAtAction(nameof(GetExercisesForWorkout), new { id = createdWorkout.WorkoutId }, createdWorkout);
        }
    }
}

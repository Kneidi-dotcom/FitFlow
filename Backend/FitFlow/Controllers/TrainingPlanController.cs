using FitFlow.Models;
using FitFlow.Service;
using Microsoft.AspNetCore.Mvc;

namespace FitFlow.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrainingPlanController : ControllerBase
    {
        private readonly TrainingPlanService trainingPlanService;

        public TrainingPlanController(TrainingPlanService trainingPlanService)
        {
            this.trainingPlanService = trainingPlanService;
        }

        [HttpGet("{trainingPlanId}/Workouts")]
        public ActionResult<List<UserWorkoutDTO>> GetWorkoutsForTrainingPlan(int trainingPlanId)
        {
            return Ok(trainingPlanService.GetWorkoutsForTrainingPlan(trainingPlanId));
        }

        [HttpPost]
        public ActionResult<UserTrainingPlanDTO> CreateTrainingPlan([FromBody] UserTrainingPlanDTO trainingPlanDto)
        {
            var createdPlan = trainingPlanService.CreateTrainingPlan(trainingPlanDto);
            return CreatedAtAction(nameof(GetWorkoutsForTrainingPlan), new { id = createdPlan.TrainingPlanId }, createdPlan);
        }
    }
}

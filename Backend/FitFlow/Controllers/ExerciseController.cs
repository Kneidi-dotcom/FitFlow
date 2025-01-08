using FitFlow.Models;
using FitFlow.Service;
using Microsoft.AspNetCore.Mvc;

namespace FitFlow.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExerciseController : ControllerBase
    {
        private readonly ExerciseService exerciseService;

        public ExerciseController(ExerciseService exerciseService)
        {
            this.exerciseService = exerciseService;
        }

        [HttpGet]
        public ActionResult<List<ExerciseCatalogDTO>> GetAllExercises()
        {
            return Ok(exerciseService.GetAllExercises());
        }

        [HttpPost("FetchFromExternalAPI")]
        public async Task<ActionResult> FetchExercisesFromAPI()
        {
            await exerciseService.FetchAndStoreExercisesAsync();
            return Ok("Exercises fetched and stored successfully.");
        }
    }
}

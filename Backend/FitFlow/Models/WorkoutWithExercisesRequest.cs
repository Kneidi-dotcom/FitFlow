namespace FitFlow.Models
{
    public class WorkoutWithExercisesRequest
    {
        public UserWorkoutDTO Workout { get; set; }
        public List<WorkoutExerciseMappingDTO> Exercises { get; set; }
    }
}

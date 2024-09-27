namespace FitFlow.Models
{
    public class TrainingPlanWorkoutMapping
    {
        public int TpWorkoutId { get; set; }
        public int TrainingPlanId { get; set; }
        public int WorkoutId { get; set; }

        // Navigation properties
        public UserTrainingPlan TrainingPlan { get; set; }
        public UserWorkouts UserWorkout { get; set; }
    }

}

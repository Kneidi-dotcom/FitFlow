namespace FitFlow.Models
{
    public class WorkoutExerciseMapping
    {
        public int WorkoutExerciseId { get; set; }
        public int WorkoutId { get; set; }
        public int ExerciseId { get; set; }
        public int Repetitions { get; set; }
        public int Sets { get; set; }

        // Navigation properties
        public UserWorkouts UserWorkout { get; set; }
        public ExerciseCatalog ExerciseCatalog { get; set; }
    }

}

namespace FitFlow.Models
{
    public class ExerciseCatalog
    {
        public int ExerciseId { get; set; }
        public string ExerciseName { get; set; }

        // Navigation property
        public ICollection<WorkoutExerciseMapping> WorkoutExercises { get; set; }
    }

}

namespace FitFlow.Models
{
    public class UserWorkouts
    {
        public int WorkoutId { get; set; }
        public int UserId { get; set; }
        public string WorkoutName { get; set; }
        public string Description { get; set; }
        public int DurationMinutes { get; set; }

        // Navigation properties
        public User User { get; set; }
        public ICollection<WorkoutExerciseMapping> WorkoutExercises { get; set; }
    }
}

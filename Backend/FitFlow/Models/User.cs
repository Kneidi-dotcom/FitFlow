namespace FitFlow.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public DateTime Birthdate { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Experience { get; set; }
        public int Size { get; set; }
        public int Bodyweight { get; set; }

        // Navigation property
        public ICollection<UserWorkouts> Workouts { get; set; }
        public ICollection<UserTrainingPlan> TrainingPlans { get; set; }
    }
}

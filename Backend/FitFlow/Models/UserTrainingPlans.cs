namespace FitFlow.Models
{
    public class UserTrainingPlan
    {
        public int TrainingPlanId { get; set; }
        public int UserId { get; set; }
        public string PlanName { get; set; }
        public string Description { get; set; }

        // Navigation properties
        public User User { get; set; }
        public ICollection<TrainingPlanWorkoutMapping> TrainingPlanWorkouts { get; set; }
    }

}

using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class UserTrainingPlanDTO
    {
        [Key]
        public int TrainingPlanId { get; set; }
        public int UserId { get; set; }
        public string PlanName { get; set; }
        public string Description { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class ExerciseCatalogDTO
    {
        [Key]
        public int ExerciseId { get; set; }
        public string ExerciseName { get; set; }
    }
}

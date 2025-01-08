using FitFlow.DBContext;
using FitFlow.Models;

namespace FitFlow.Service
{
    public class TrainingPlanService
    {
        private readonly FitFlowDbContext _context;

        public TrainingPlanService(FitFlowDbContext context)
        {
            _context = context;
        }

        public List<UserWorkoutDTO> GetWorkoutsForTrainingPlan(int trainingPlanId)
        {
            return _context.UserWorkouts
                .Where(w => _context.TrainingPlanWorkoutMappings
                    .Any(tpw => tpw.TrainingPlanId == trainingPlanId && tpw.WorkoutId == w.WorkoutId))
                .ToList();
        }

        public UserTrainingPlanDTO CreateTrainingPlan(UserTrainingPlanDTO trainingPlanDto)
        {
            _context.UserTrainingPlans.Add(trainingPlanDto);
            _context.SaveChanges();
            return trainingPlanDto;
        }
    }
}

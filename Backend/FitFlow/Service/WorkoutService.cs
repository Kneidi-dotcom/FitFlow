using FitFlow.DBContext;
using FitFlow.Models;

namespace FitFlow.Service
{
    public class WorkoutService
    {
        private readonly FitFlowDbContext _context;

        public WorkoutService(FitFlowDbContext context)
        {
            _context = context;
        }

        public List<WorkoutExerciseMappingDTO> GetExercisesForWorkout(int workoutId)
        {
            return _context.WorkoutExerciseMappings
                .Where(e => e.WorkoutId == workoutId)
                .ToList();
        }

        public UserWorkoutDTO CreateWorkout(UserWorkoutDTO workoutDto)
        {
            _context.UserWorkouts.Add(workoutDto);
            _context.SaveChanges();
            return workoutDto;
        }
    }
}

using FitFlow.DBContext;
using FitFlow.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;

namespace FitFlow.Service
{
    public class ExerciseService
    {
        private readonly FitFlowDbContext _context;
        private readonly HttpClient _httpClient;

        public ExerciseService(FitFlowDbContext context, HttpClient httpClient)
        {
            _context = context;
            _httpClient = httpClient;
        }

        public async Task FetchAndStoreExercisesAsync()
        {
            // API-Header setzen
            _httpClient.DefaultRequestHeaders.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            _httpClient.DefaultRequestHeaders.Add("X-RapidAPI-Key", "91ca716d11msh6a177f14a82772p1d1fc5jsnab9ccf6794e3");
            _httpClient.DefaultRequestHeaders.Add("X-RapidAPI-Host", "exercisedb.p.rapidapi.com");

            try
            {
                // API-Request
                var response = await _httpClient.GetAsync("https://exercisedb.p.rapidapi.com/exercises");
                response.EnsureSuccessStatusCode();

                var jsonResponse = await response.Content.ReadAsStringAsync();
                var exercises = JsonConvert.DeserializeObject<List<ExerciseCatalogDTO>>(jsonResponse);

                // Speichern der Übungen in der Datenbank
                foreach (var exercise in exercises)
                {
                    if (!_context.ExerciseCatalog.Any(e => e.ExerciseId == exercise.ExerciseId))
                    {
                        _context.ExerciseCatalog.Add(exercise);
                    }
                }

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Error fetching exercises from API", ex);
            }
        }

        public List<ExerciseCatalogDTO> GetAllExercises()
        {
            return _context.ExerciseCatalog.ToList();
        }
    }
}

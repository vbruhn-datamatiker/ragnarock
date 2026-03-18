using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ragnarock.Pages
{
    public class IndexModel : PageModel
    {
        //List til quiz questions
        public List<QuizQuestion> Questions = new List<QuizQuestion>
        {
            new QuizQuestion
            {
                Question = "Hvornår blev Gasolin dannet?",
                CorrectAnswer = "1969",
                Options = new List<string> { "1967", "1969", "1972" }
            },

            new QuizQuestion
            {
                Question = "Hvem var forsanger?",
                CorrectAnswer = "Kim Larsen",
                Options = new List<string> { "Franz Beckerlee", "Kim Larsen", "Søren Berlev" }
            },
                        new QuizQuestion
            {
                Question = "Hvornår blev bandet opløst=",
                CorrectAnswer = "1978",
                Options = new List<string> { "1978", "1981", "1979" }
            },

            new QuizQuestion
            {
                Question = "Hvor mange medlemmer var der i Gasolin'?",
                CorrectAnswer = "4",
                Options = new List<string> { "5", "4", "3" }
            },

                        new QuizQuestion
            {
                Question = "Hvem var den originale trommeslager?",
                CorrectAnswer = "Bjørn Uglebjerg",
                Options = new List<string> { "Søren Berlev", "Wili Jønsson", "Bjørn Uglebjerg" }
            }

        };
        public void OnGet()
        {

        }

        [BindProperty]
        public string SelectedAnswer { get; set; }

        [BindProperty]
        public int QuestionIndex { get; set; }

        public string Result { get; set; }

        public void OnPost(string selectedAnswer, int questionIndex)
        {
            if (selectedAnswer == Questions[questionIndex].CorrectAnswer)
            {
                Result = "? Korrekt!";
            }
            else
            {
                Result = $"? Forkert. Rigtigt svar er: {Questions[questionIndex].CorrectAnswer}";
            }
        }

    }



    // Public class til quiz questions
    public class QuizQuestion
    {
        public string Question { get; set; }
        public string CorrectAnswer { get; set; }
        public List<string> Options { get; set; }
    };




}

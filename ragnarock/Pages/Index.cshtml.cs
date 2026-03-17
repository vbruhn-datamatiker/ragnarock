using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ragnarock.Pages
{
    public class IndexModel : PageModel
    {
        //List til quiz questions
        public List<QuizQuestion> Questions = new List<QuizQuestion>
    {
        new QuizQuestion { Question = "Hvornår blev Gasolin' dannet?", CorrectAnswer = "1969" },
        new QuizQuestion { Question = "Hvornår blev bandet opløst?", CorrectAnswer = "1978"},
        new QuizQuestion { Question = "Hvem var forsanger i Gasolin'?", CorrectAnswer = "Kim Larsen"},
        new QuizQuestion { Question = "Hvor mange medlemmer var der i Gasolin'?", CorrectAnswer = "4"},
        new QuizQuestion { Question = "Hvem var den originale trommeslager?", CorrectAnswer = "Bjørn Uglebjerg"}

    };
        public void OnGet()
        {

        }

        public string Result { get; set; }

        [BindProperty]
        public List<string> Answers { get; set; }

        public void OnPost()
        {
            int score = 0;

            for (int i = 0; i < Questions.Count; i++)
            {
                if (Answers[i] == Questions[i].CorrectAnswer)
                {
                    score++;
                }
            }

            Result = $"Du fik {score} rigtige";
        }
    }

    // Public class til quiz questions
    public class QuizQuestion
    {
        public string Question { get; set; }
        public string CorrectAnswer { get; set; }
    };




}

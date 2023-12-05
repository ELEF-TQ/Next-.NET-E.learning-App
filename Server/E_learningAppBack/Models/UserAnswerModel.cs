namespace E_learningAppBack.Models
{
    public class UserAnswerModel
    {
        public int UserID { get; set; }
        public int QuizID { get; set; }
        public List<UserAnswer> Answers { get; set; }
        public int ChapterID { get; set;  }
    }

    public class UserAnswer
    {
        public int QuestionID { get; set; }
        public string SelectedOption { get; set; }
    }

}

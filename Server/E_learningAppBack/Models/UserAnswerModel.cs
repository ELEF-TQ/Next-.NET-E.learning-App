namespace E_learningAppBack.Models
{
    public class AnswerModel
    {
        public int UserId { get; set; }
        public int QuizId { get; set; }
        public List<QuestionAnswer> Questions { get; set; }
    }

    public class QuestionAnswer
    {
        public int QuestionId { get; set; }
        public string Answer { get; set; }
    }



}

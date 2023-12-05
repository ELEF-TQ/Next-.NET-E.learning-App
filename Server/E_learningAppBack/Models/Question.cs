using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models
{
    public partial class Question
    {
        public int QuestionId { get; set; }
        public string QuestionText { get; set; } = null!;
        public string Option1 { get; set; } = null!;
        public string Option2 { get; set; } = null!;
        public string Option3 { get; set; } = null!;
        public string Option4 { get; set; } = null!;
        public string CorrectOption { get; set; } = null!;
        public int? QuizId { get; set; }

        public virtual Quiz? Quiz { get; set; }
    }
}

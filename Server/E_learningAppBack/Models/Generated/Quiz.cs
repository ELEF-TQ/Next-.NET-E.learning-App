using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models.Generated
{
    public partial class Quiz
    {
        public Quiz()
        {
            Questions = new HashSet<Question>();
            Userquizzes = new HashSet<Userquiz>();
        }

        public int QuizId { get; set; }
        public string QuizTitle { get; set; } = null!;
        public int? ChapterId { get; set; }

        public virtual Chapter? Chapter { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
        public virtual ICollection<Userquiz> Userquizzes { get; set; }
    }
}

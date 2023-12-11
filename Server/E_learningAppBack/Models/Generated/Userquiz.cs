using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models.Generated
{
    public partial class Userquiz
    {
        public int UserQuizId { get; set; }
        public int? UserId { get; set; }
        public int? QuizId { get; set; }
        public double? Score { get; set; }

        public virtual Quiz? Quiz { get; set; }
        public virtual User? User { get; set; }
    }
}

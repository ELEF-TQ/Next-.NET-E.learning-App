using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models
{
    public partial class Chapter
    {
        public Chapter()
        {
            Courses = new HashSet<Course>();
            Quizzes = new HashSet<Quiz>();
        }

        public int ChapterId { get; set; }
        public string ChapterName { get; set; } 
        public double ScoreChapter { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<Quiz> Quizzes { get; set; }
    }
}

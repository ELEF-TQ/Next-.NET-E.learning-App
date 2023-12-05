using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models
{
    public partial class Course
    {
        public Course()
        {
            Videos = new HashSet<Video>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; } = null!;
        public int? ChapterId { get; set; }

        public virtual Chapter? Chapter { get; set; }
        public virtual ICollection<Video> Videos { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models
{
    public partial class Video
    {
        public int VideoId { get; set; }
        public string VideoTitle { get; set; } = null!;
        public string VideoUrl { get; set; } = null!;
        public int? CourseId { get; set; }

        public virtual Course? Course { get; set; }
    }
}

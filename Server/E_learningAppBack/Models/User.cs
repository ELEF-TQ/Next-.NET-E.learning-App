using System;
using System.Collections.Generic;

namespace E_learningAppBack.Models
{
    public partial class User
    {
        public User()
        {
            Userquizzes = new HashSet<Userquiz>();
        }

        public int UserId { get; set; }
        public string Email { get; set; } = null!;
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public double? TotalScore { get; set; }

        public virtual ICollection<Userquiz> Userquizzes { get; set; }
    }
}

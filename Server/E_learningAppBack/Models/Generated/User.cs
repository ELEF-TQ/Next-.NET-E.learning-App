using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace E_learningAppBack.Models.Generated
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
        [JsonIgnore]
        public double? TotalScore { get; set; }
        [JsonIgnore]
        public virtual ICollection<Userquiz> Userquizzes { get; set; }
    }
}

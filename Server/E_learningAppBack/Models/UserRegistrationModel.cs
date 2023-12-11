using System.ComponentModel.DataAnnotations;

namespace E_learningAppBack.Models
{
    public class UserRegistrationModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Required(ErrorMessage ="Password is required")]
        [MinLength(8, ErrorMessage ="Password must be at least 8 characters")]
        public string Password { get; set; }

        [Required(ErrorMessage ="Email is required")]
        [EmailAddress(ErrorMessage ="Invalid email format")]
        public string Email { get; set; }
    }

}

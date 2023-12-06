using System.Text.Json.Serialization;

namespace E_learningAppBack.Models
{
    public class ChapterData
    {
        public ChapterInfo Chapter { get; set; }
        public CourseInfo Course { get; set; }
        public List<VideoInfo> Videos { get; set; }
        public QuizInfo Quiz { get; set; }
        public List<QuestionInfo> Questions { get; set; }
    }

    public class ChapterInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class CourseInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class VideoInfo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string url { get; set; }
    }

    public class QuizInfo
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }

    public class QuestionInfo
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public List<OptionInfo> Options { get; set; }
    }

    public class OptionInfo
    {
        public string Answer { get; set; }

        [JsonIgnore]
        public bool IsCorrect { get; set; }
    }

}

using E_learningAppBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/chapters")]
[ApiController]
public class MainController : ControllerBase
{
    private readonly e_learningContext _context;

    public MainController(e_learningContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register(UserRegistrationModel model)
    {

        if (await _context.Users.AnyAsync(u => u.Username == model.Username))
        {
            return BadRequest("Username is already taken");
        }

        var newUser = new User
        {
            Username = model.Username,
            Password = model.Password,
            Email = model.Email,
        };

        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();

        return Ok(newUser); 
    }

    [HttpPost("login")]
    public async Task<ActionResult<string>> Login(UserCredentials userCredentials)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userCredentials.Email && u.Password == userCredentials.Password);

        if (user == null)
        {
            return BadRequest("Invalid username or password");
        }

        var token = GenerateRandomToken(); 


        return Ok(new { Token = token,
            User = new
            {
                Username = user.Username,
                Email = user.Email,
                TotalScore = user.TotalScore
            }
        });
    }

    private string GenerateRandomToken()
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var random = new Random();
        var token = new string(Enumerable.Repeat(chars, 32)
          .Select(s => s[random.Next(s.Length)]).ToArray());

        return token;
    }

    [HttpGet("chapters")]
    public async Task<ActionResult<IEnumerable<Chapter>>> GetChapters()
    {
        var chapters = await _context.Chapters.ToListAsync();

        if (chapters == null || chapters.Count == 0)
        {
            return NotFound();
        }

        return Ok(chapters);
    }

    [HttpPost("courses")]
    public async Task<ActionResult<IEnumerable<Course>>> GetCoursesByChapter([FromBody] int chapterId)
    {
        var courses = await _context.Courses
            .Where(c => c.ChapterId == chapterId)
            .ToListAsync();

        if (courses == null || courses.Count == 0)
        {
            return NotFound();
        }

        return Ok(courses); 
    }

    [HttpPost("video")]
    public async Task<ActionResult<Video>> GetVideoForCourse([FromBody] int courseId)
    {
        var video = await _context.Videos
            .FirstOrDefaultAsync(v => v.CourseId == courseId);

        if (video == null)
        {
            return NotFound();
        }

        return Ok(video); 
    }

    [HttpPost("quizzes")]
    public async Task<ActionResult<IEnumerable<Quiz>>> GetQuizByChapter([FromBody] int chapterId)
    {
        var quizzes = await _context.Quizzes
            .Where(q => q.ChapterId == chapterId)
            .ToListAsync();

        if (quizzes == null || quizzes.Count == 0)
        {
            return NotFound(); 
        }

        return Ok(quizzes); 
    }

    [HttpPost("questions")]
    public async Task<ActionResult<IEnumerable<Question>>> GetQuestionsByQuiz([FromBody] int quizId)
    {
        var questions = await _context.Questions
            .Where(q => q.QuizId == quizId)
            .ToListAsync();

        if (questions == null || questions.Count == 0)
        {
            return NotFound(); 
        }

        return Ok(questions); 
    }
    [HttpPost("answer")]
    public async Task<ActionResult<double>> SubmitQuizAnswers([FromBody] UserAnswerModel userAnswers)
    {
        var quizQuestions = await _context.Questions
                  .Where(q => q.QuizId == userAnswers.QuizID)
                  .ToListAsync();

        if (quizQuestions == null || quizQuestions.Count == 0)
        {
            return NotFound("No questions found for the given QuizID");
        }

        double totalQuestions = quizQuestions.Count;
        double correctAnswers = 0;

        foreach (var answer in userAnswers.Answers)
        {
            var question = quizQuestions.FirstOrDefault(q => q.QuestionId == answer.QuestionID);

            if (question != null && question.CorrectOption == answer.SelectedOption)
            {
                correctAnswers++;
            }
        }

        int score = (int)((correctAnswers / totalQuestions) * 100);

        // Update chapter's ScoreChapter
        var chapter = await _context.Chapters.FirstOrDefaultAsync(c => c.ChapterId == userAnswers.ChapterID);
        if (chapter != null)
        {
            // Update the ScoreChapter with the calculated score
            chapter.ScoreChapter = score; // Assuming ScoreChapter is of type INT
            await _context.SaveChangesAsync();
        }

        var userQuiz = new Userquiz
        {
            UserId = userAnswers.UserID,
            QuizId = userAnswers.QuizID,
            Score = (int?)score
        };

        _context.Userquizzes.Add(userQuiz);
        await _context.SaveChangesAsync();

        // Update user's TotalScore
        var user = await _context.Users.FindAsync(userAnswers.UserID);
        if (user != null)
        {
            user.TotalScore = await _context.Userquizzes
                .Where(uq => uq.UserId == userAnswers.UserID)
                .SumAsync(uq => uq.Score);

            await _context.SaveChangesAsync();
        }

        return Ok(new { Score = score, totalQuestions, correctAnswers });
    }

    [HttpGet("chapterdata")]
    public IActionResult GetQuizDataByChapter([FromQuery] int chapterId)
    {
        var chapterData = _context.Chapters
            .Where(chapter => chapter.ChapterId == chapterId)
            .Select(chapter => new ChapterData
            {
                Chapter = new ChapterInfo
                {
                    Id = chapter.ChapterId,
                    Name = chapter.ChapterName
                },
                Course = _context.Courses
                    .Where(course => course.ChapterId == chapter.ChapterId)
                    .Select(course => new CourseInfo
                    {
                        Id = course.CourseId,
                        Name = course.CourseName
                    })
                    .FirstOrDefault(),
                Videos = _context.Videos
                    .Where(video => video.CourseId == _context.Courses
                        .Where(course => course.ChapterId == chapter.ChapterId)
                        .Select(course => course.CourseId)
                        .FirstOrDefault())
                    .Select(video => new VideoInfo
                    {
                        Id = video.VideoId,
                        Title = video.VideoTitle,
                        VideoUrl = video.VideoUrl
                    })
                    .ToList(),
                Quiz = _context.Quizzes
                    .Where(quiz => quiz.ChapterId == chapter.ChapterId)
                    .Select(quiz => new QuizInfo
                    {
                        Id = quiz.QuizId,
                        Title = quiz.QuizTitle
                    })
                    .FirstOrDefault(),
                Questions = _context.Questions
                    .Where(question => question.QuizId == _context.Quizzes
                        .Where(quiz => quiz.ChapterId == chapter.ChapterId)
                        .Select(quiz => quiz.QuizId)
                        .FirstOrDefault())
                    .Select(question => new QuestionInfo
                    {
                        Id = question.QuestionId,
                        Text = question.QuestionText,
                        Options = new List<OptionInfo>
                        {
                        new OptionInfo { Answer = question.Option1, IsCorrect = (question.CorrectOption == "") },
                        new OptionInfo { Answer = question.Option2, IsCorrect = (question.CorrectOption == "") },
                        new OptionInfo { Answer = question.Option3, IsCorrect = (question.CorrectOption == "") },
                        new OptionInfo { Answer = question.Option4, IsCorrect = (question.CorrectOption == "") }
                        }
                    })
                    .ToList()
            })
            .FirstOrDefault();

        if (chapterData == null)
        {
            return NotFound("Chapter data not found");
        }

        return Ok(chapterData);
    }

}




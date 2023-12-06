using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace E_learningAppBack.Models
{
    public partial class e_learningContext : DbContext
    {
        public e_learningContext()
        {
        }

        public e_learningContext(DbContextOptions<e_learningContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Chapter> Chapters { get; set; } = null!;
        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<Question> Questions { get; set; } = null!;
        public virtual DbSet<Quiz> Quizzes { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Userquiz> Userquizzes { get; set; } = null!;
        public virtual DbSet<Video> Videos { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=127.0.0.1;port=3306;database=e_learning;user=MyUser;password=1234", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.35-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Chapter>(entity =>
            {
                entity.ToTable("chapter");

                entity.UseCollation("utf8mb4_general_ci");

                entity.Property(e => e.ChapterId).HasColumnName("ChapterID");

                entity.Property(e => e.ChapterName).HasMaxLength(255);

                entity.Property(e => e.ScoreChapter).HasColumnName("ScoreChapter"); 


            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("course");

                entity.UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.ChapterId, "ChapterID");

                entity.Property(e => e.CourseId).HasColumnName("CourseID");

                entity.Property(e => e.ChapterId).HasColumnName("ChapterID");

                entity.Property(e => e.CourseName).HasMaxLength(255);

                entity.HasOne(d => d.Chapter)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.ChapterId)
                    .HasConstraintName("course_ibfk_1");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.ToTable("question");

                entity.UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.QuizId, "QuizID");

                entity.Property(e => e.QuestionId).HasColumnName("QuestionID");

                entity.Property(e => e.CorrectOption).HasMaxLength(255);

                entity.Property(e => e.Option1).HasMaxLength(255);

                entity.Property(e => e.Option2).HasMaxLength(255);

                entity.Property(e => e.Option3).HasMaxLength(255);

                entity.Property(e => e.Option4).HasMaxLength(255);

                entity.Property(e => e.QuestionText).HasMaxLength(255);

                entity.Property(e => e.QuizId).HasColumnName("QuizID");

                entity.HasOne(d => d.Quiz)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.QuizId)
                    .HasConstraintName("question_ibfk_1");
            });

            modelBuilder.Entity<Quiz>(entity =>
            {
                entity.ToTable("quiz");

                entity.UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.ChapterId, "ChapterID");

                entity.Property(e => e.QuizId).HasColumnName("QuizID");

                entity.Property(e => e.ChapterId).HasColumnName("ChapterID");

                entity.Property(e => e.QuizTitle).HasMaxLength(255);

                entity.HasOne(d => d.Chapter)
                    .WithMany(p => p.Quizzes)
                    .HasForeignKey(d => d.ChapterId)
                    .HasConstraintName("quiz_ibfk_1");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.UseCollation("utf8mb4_general_ci");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Password).HasMaxLength(255);

                entity.Property(e => e.TotalScore).HasDefaultValueSql("'0'");

                entity.Property(e => e.Username).HasMaxLength(255);

                entity.Property(e => e.Email).HasMaxLength(255);

            });

            modelBuilder.Entity<Userquiz>(entity =>
            {
                entity.ToTable("userquiz");

                entity.UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.QuizId, "QuizID");

                entity.HasIndex(e => e.UserId, "UserID");

                entity.Property(e => e.UserQuizId).HasColumnName("UserQuizID");

                entity.Property(e => e.QuizId).HasColumnName("QuizID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Quiz)
                    .WithMany(p => p.Userquizzes)
                    .HasForeignKey(d => d.QuizId)
                    .HasConstraintName("userquiz_ibfk_2");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Userquizzes)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("userquiz_ibfk_1");
            });

            modelBuilder.Entity<Video>(entity =>
            {
                entity.ToTable("video");

                entity.UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.CourseId, "CourseID");

                entity.Property(e => e.VideoId).HasColumnName("VideoID");

                entity.Property(e => e.CourseId).HasColumnName("CourseID");

                entity.Property(e => e.VideoTitle).HasMaxLength(255);

                entity.Property(e => e.VideoUrl)
                    .HasMaxLength(255)
                    .HasColumnName("VideoURL");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Videos)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("video_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

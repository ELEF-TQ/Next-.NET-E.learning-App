const QuizData = [
  {
    "chapter": {
      "id": 1,
      "name": "Introduction"
    },
    "course": {
      "id": 1,
      "name": "Web Development Basics"
    },
    "videos": [
      {
        "id": 1,
        "title": "HTML Basics",
        "url": "https://example.com/html-basics"
      },
      {
        "id": 2,
        "title": "CSS Fundamentals",
        "url": "https://example.com/css-fundamentals"
      }
    ],
    "quiz": {
      "id": 1,
      "title": "HTML and CSS Quiz"
    },
    "questions": [
      {
        "id": 1,
        "text": "What does HTML stand for?",
        "options": [
          {"answer": "Hyper Text Markup Language"},
          {"answer": "Highly Typed Machine Learning"},
          {"answer": "Home Tool Markup Language"},
          {"answer": "Hyper Transfer Markup Language"}
        ]
      },
      {
        "id": 2,
        "text": "Which CSS property is used to change the background color of an element?",
        "options": [
          {"answer": "color"},
          {"answer": "background-color"},
          {"answer": "bgcolor"},
          {"answer": "background-style"}
        ]
      },
      {
        "id": 3,
        "text": "What is the correct way to include external CSS in an HTML document?",
        "options": [
          {"answer": "<style src='styles.css'>"},
          {"answer": "<link rel='stylesheet' type='text/css' href='styles.css'>"},
          {"answer": "<css>styles.css</css>"},
          {"answer": "<script type='text/css' src='styles.css'>"}
        ]
      },
      {
        "id": 4,
        "text": "In HTML, which tag is used to create an ordered list?",
        "options": [
          {"answer": "<ul>"},
          {"answer": "<ol>"},
          {"answer": "<li>"},
          {"answer": "<list>"}
        ]
      }
    ]
  }
  
];

export default QuizData;

function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer;
}

let questions = [
    new Question("1 - Which of the following is a JavaScript package manager?",
        { a: "Node.js", b: "TypeScript", c: "Npm", d: "NuGet" },
        "c"
    ),
    new Question("2 - Which of the following is NOT considered part of frontend development?",
        { a: "CSS", b: "HTML", c: "JavaScript", d: "SQL" },
        "d"
    ),
    new Question("3 - Which of the following is considered part of backend development?",
        { a: "Node.js", b: "TypeScript", c: "Angular", d: "React" },
        "a"
    ),
    new Question("4 - Which of the following does NOT use the JavaScript programming language?",
        { a: "React", b: "Angular", c: "Vue.js", d: "ASP.NET" },
        "d"
    )
];

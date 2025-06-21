function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = -1;
    this.correctAnswerCount = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

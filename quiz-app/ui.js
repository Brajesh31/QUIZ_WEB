// User Interface

function UI() {
    this.btn_start = document.querySelector(".btn_start");
    this.btn_next = document.querySelector(".next_btn");
    this.btn_replay = document.querySelector(".btn_replay");
    this.btn_quit = document.querySelector(".btn_quit");
    this.quiz_box = document.querySelector(".quiz_box");
    this.score_box = document.querySelector(".score_box");
    this.option_list = document.querySelector(".option_list");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.time_text = document.querySelector(".time_text");
    this.time_second = document.querySelector(".time_second");
    this.time_line = document.querySelector(".time_line");
}

UI.prototype.displayQuestion = function (questionObj) {
    let question = `<span>${questionObj.questionText}</span>`;
    let options = "";

    for (let key in questionObj.answerOptions) {
        options += `
            <div class="option">
                <span><b>${key}</b>: ${questionObj.answerOptions[key]}</span>
            </div>
        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const optionElements = this.option_list.querySelectorAll(".option");
    for (let opt of optionElements) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
};

UI.prototype.displayQuestionCount = function (currentIndex, totalQuestions) {
    let tag = `<span class="badge bg-warning">${currentIndex} / ${totalQuestions}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.displayScore = function (totalQuestions, correctAnswers) {
    let tag = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
};

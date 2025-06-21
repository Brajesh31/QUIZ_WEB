// OOP - Object-Oriented Programming

const quiz = new Quiz(questions);
const ui = new UI();
quiz.questionIndex += 1;

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.displayQuestion(quiz.getQuestion());
    ui.displayQuestionCount(quiz.questionIndex + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
    if (quiz.questions.length !== quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.displayQuestion(quiz.getQuestion());
        ui.displayQuestionCount(quiz.questionIndex + 1, quiz.questions.length);
        ui.btn_next.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.displayScore(quiz.questions.length, quiz.correctAnswerCount);
    }
});

ui.btn_quit.addEventListener("click", function () {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.correctAnswerCount = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option) {
    clearInterval(counterLine);
    clearInterval(counter);
    let selectedAnswer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.checkAnswer(selectedAnswer)) {
        quiz.correctAnswerCount += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Time's Up";
            let correctAnswer = quiz.getQuestion().correctAnswer;
            for (let option of ui.option_list.children) {
                if (option.querySelector("span b").textContent == correctAnswer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let lineWidth = 0;
    counterLine = setInterval(timer, 20);

    function timer() {
        lineWidth += 1;
        ui.time_line.style.width = lineWidth + "px";
        if (lineWidth > 549) {
            clearInterval(counterLine);
        }
    }
}

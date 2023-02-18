const quizData = [
    {
        question: "When was the first vape invented?",
        a: "1963",
        b: "1983",
        c: "2003",
        d: "2013",
        correct: "a",
    },
    {
        question: "Who invented the first vape?",
        a: "Herbert A. Gilbert",
        b: "Hon Lik",
        c: "Phil Ray",
        d: "Steve Jobs",
        correct: "a",
    },
    {
        question: "Which of the following is NOT a common type of vape device?",
        a: "Pod",
        b: "Box Mod",
        c: "Pen",
        d: "Syringe",
        correct: "d",
    },
    {
        question: "Which of the following is a common ingredient in vape juice?",
        a: "Water",
        b: "Sugar",
        c: "Nicotine",
        d: "Salt",
        correct: "b",
    },
    {
        question: "Which of the following is a potential health risk associated with vaping?",
        a: "Lung cancer",
        b: "Heart disease",
        c: "Asthma",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What is the term used to describe the action of inhaling and exhaling vapor from a vape device?",
        a: "Vaping",
        b: "Smoking",
        c: "Juuling",
        d: "Chewing",
        correct: "a",
    },
    {
        question: "What is the purpose of the heating element in a vape device?",
        a: "To produce vapor",
        b: "To add flavor to the vapor",
        c: "To make the device look cool",
        d: "To keep the battery from overheating",
        correct: "a",
    },
    {
        question: "What is the term used to describe the amount of nicotine in vape juice?",
        a: "Potency",
        b: "Flavor strength",
        c: "Nicotine level",
        d: "Dosage",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

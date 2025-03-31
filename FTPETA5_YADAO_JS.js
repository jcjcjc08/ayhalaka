const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"], answer: 0 },
    { question: "What property is used to change the text color in CSS?", options: ["font-color", "text-color", "color", "background-color"], answer: 2 },
    { question: "Which tag is used for inserting a JavaScript file?", options: ["<script>", "<js>", "<javascript>", "<code>"], answer: 0 },
    { question: "What is the default flex direction in CSS Flexbox?", options: ["row", "column", "row-reverse", "column-reverse"], answer: 0 },
    { question: "Which of the following is used to make text bold in HTML?", options: ["<strong>", "<bold>", "<b>", "<text-bold>"], answer: 2 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Syntax", "Custom Style System"], answer: 0 },
    { question: "Which CSS property controls the spacing between elements?", options: ["margin", "padding", "spacing", "border"], answer: 0 },
    { question: "Which JavaScript function is used to print content to the console?", options: ["console.log()", "print()", "log()", "display()"], answer: 0 },
    { question: "Which HTML tag is used to define an internal CSS style?", options: ["<css>", "<style>", "<script>", "<head>"], answer: 1 },
    { question: "Which CSS unit is relative to the font-size of the root element?", options: ["em", "rem", "px", "%"], answer: 1 }
];

function loadQuiz() {
    const quizDiv = document.getElementById("quiz");
    questions.forEach((q, index) => {
        let questionBlock = document.createElement("div");
        questionBlock.classList.add("question-block");
        questionBlock.innerHTML = `<p class='question'>${index + 1}. ${q.question}</p>`;
        let optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");
        q.options.forEach((option, i) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = function () {
        let feedback = document.createElement("p");
        feedback.classList.add("feedback");
        if (i === q.answer) {
        feedback.innerText = "Correct";
        } else {
        feedback.innerText = "Wrong";
        }
        if (!questionBlock.querySelector(".feedback")) {
        questionBlock.appendChild(feedback);
        }
        };
        optionsDiv.appendChild(btn);
        });
        questionBlock.appendChild(optionsDiv);
        quizDiv.appendChild(questionBlock);
    });
}

window.onload = loadQuiz;

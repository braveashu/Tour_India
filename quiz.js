// Sample quiz questions and answers
const quizData = [
    {
        question: "Which city is known as the 'Pink City'?",
        options: ["Jaipur", "Delhi", "Mumbai", "Chennai"],
        answer: "Jaipur"
    },
    {
        question: "Which city is famous for its Marina Beach?",
        options: ["Kolkata", "Chennai", "Bengaluru", "Hyderabad"],
        answer: "Chennai"
    },
    {
        question: "Which city is the capital of India?",
        options: ["Mumbai", "Chennai", "Delhi", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which city is known as the 'City of Dreams'?",
        options: ["Mumbai", "Jaipur", "Goa", "Chennai"],
        answer: "Mumbai"
    },
    {
        question: "Which city hosts the annual Kumbh Mela?",
        options: ["Varanasi", "Allahabad", "Haridwar", "Ujjain"],
        answer: "Allahabad"
    },
    {
        question: "Which city is known for its backwaters and houseboats?",
        options: ["Goa", "Kochi", "Chennai", "Pune"],
        answer: "Kochi"
    },
    {
        question: "Which city is famous for its IT industry and gardens?",
        options: ["Bengaluru", "Hyderabad", "Pune", "Mumbai"],
        answer: "Bengaluru"
    },
    {
        question: "Which city is known as the 'City of Lakes'?",
        options: ["Udaipur", "Jaipur", "Agra", "Chennai"],
        answer: "Udaipur"
    },
    {
        question: "Which city is home to the iconic Gateway of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Mumbai"
    },
    {
        question: "Which city is famous for its Durga Puja celebrations?",
        options: ["Kolkata", "Varanasi", "Jaipur", "Pune"],
        answer: "Kolkata"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.createElement('button');
submitButton.classList.add('btn', 'btn-primary');
submitButton.textContent = 'Submit Quiz';
resultsContainer.appendChild(submitButton);

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const options = [];

        for (let option of currentQuestion.options) {
            options.push(
                `<label class="d-block"><input type="radio" name="question${questionNumber}" value="${option}"> ${option}</label>`
            );
        }

        output.push(
            `<div class="question mb-4">
                <h5>${currentQuestion.question}</h5>
                <div class="options">${options.join('')}</div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let correctAnswers = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.answer) {
            correctAnswers++;
        }
    });

    resultsContainer.innerHTML = `<h3 class="text-center">Quiz Results</h3>
                                  <p class="text-center">You got ${correctAnswers} out of ${quizData.length} questions correct!</p>`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);

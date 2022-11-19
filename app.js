// TODO Refatorar código
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.final-score');
const correctAnswers = ['B','C','A','B','D','A','D','C'];

let score = 0;
const percent = 100 / correctAnswers.length;

const getUserAnswers = () =>correctAnswers.map((_, index) => {
    return form[`inputQuestion${index + 1}`].value
})

const calculateScore = (userAnswers) =>{
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += percent;
        }
    })
};

const showFinalScore = () =>{
    scroll({
        top: 0,
        behavior: 'smooth'
    })
    result.classList.remove('d-none')
};

const animateFinalScore = () =>{
    let counter = 0;
    const timer = setInterval(() =>{
        if(counter === score){
            clearInterval(timer);
        }
        result.querySelector('span').textContent = `${counter}%`;
        counter += .5
    }, 10)
};

form.addEventListener('submit', event => {
    score = 0;
    event.preventDefault();

    const userAnswers = getUserAnswers();
    calculateScore(userAnswers);

    showFinalScore();
    animateFinalScore();
})





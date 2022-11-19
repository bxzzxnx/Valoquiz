const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

const correctAnswers = ['B','C','A','B','D','A','D','C'];
const playQuiz = event => {
    event.preventDefault();

    // consts
    // TODO refatorar esse array
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
    ];
    const percent = 100 / userAnswers.length;
    let score = 0;
    let counter = 0;

    // functions
    const checkUserAnswers = (answer, index) => {
        if(answer === correctAnswers[index]){
            score += percent;
        }
    };
    const toTop = () => {
        scroll({
            top: 0,
            behavior: 'smooth'
        })
    };
    const showResult = () =>{
        if(counter === score){
            clearInterval(timer);
        }
        result.querySelector('span').textContent = `${counter}%`;
        counter += .5
    };

    const timer = setInterval(showResult, 15);
    userAnswers.forEach(checkUserAnswers);
    setTimeout(toTop, 100);
    result.classList.remove('d-none')
};
// event listener
form.addEventListener('submit', playQuiz)





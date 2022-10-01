var quizForm=document.querySelector('.quiz-form');
var submitBtn=document.querySelector('#submit-btn');
var outputDiv=document.querySelector('#output-div');

const correctAnswers=["90°","right angled","one right angle","14, 15, 26","Equilateral triangle","Right","30°","a + b + c","two","45°"];

function calculateScore(){
    let score=0;
    let index=0;
  const formResults= new FormData(quizForm);
  for(let value of formResults.values()){
    if(correctAnswers.includes(value)){
        score=score+1;
    }
    index=index+1;
  }
  outputDiv.innerText="Your Score is " +score;
}

submitBtn.addEventListener('click',calculateScore);
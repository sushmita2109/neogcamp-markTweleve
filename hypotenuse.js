var input=document.querySelectorAll('.side-input');
var calculateHypotenuseBtn=document.querySelector('#calculate-hypotenuse-btn');
var outputDiv=document.querySelector('#output-div');

function calculatesqrt(side1,side2){
     let result=Math.sqrt(side1*side1+side2*side2);
     return result;
}

function calculateHypotenus(){
    let sqrtvalue=calculatesqrt(Number(input[0].value),Number(input[1].value));
    outputDiv.innerText=Math.trunc(sqrtvalue);
}

calculateHypotenuseBtn.addEventListener('click',calculateHypotenus);
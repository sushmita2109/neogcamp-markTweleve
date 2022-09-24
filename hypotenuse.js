var input=document.querySelectorAll('.side-input');
var calculateHypotenuseBtn=document.querySelector('#calculate-hypotenuse-btn');
var outputDiv=document.querySelector('#output-div');

function calculatesqrt(side1,side2){
    if(side1<0 ||side2<0){
        return 0;
    }
    else
    {
        let result=Math.sqrt(side1*side1+side2*side2);
        return result;
    }
    
}

function calculateHypotenus(){
    let sqrtvalue=calculatesqrt(Number(input[0].value),Number(input[1].value));
    if(sqrtvalue>0){
        outputDiv.innerText=Math.trunc(sqrtvalue);
    }
    else
   {
    outputDiv.innerText="Enter non-negative value for computation";
   }
    
}

calculateHypotenuseBtn.addEventListener('click',calculateHypotenus);
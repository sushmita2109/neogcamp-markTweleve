var input=document.querySelectorAll('.angle-input');
var checkBtn=document.querySelector('#check-btn');
var outputDiv=document.querySelector('#output-div');

function computeSumOfAngles(angle1,angle2,angle3){
    var sum=angle1+angle2+angle3;
    return sum;
}

function isTriangle(){
  var sumofangles=computeSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
//   console.log(sumofangles);
    if(sumofangles===180)
    {
        outputDiv.innerHTML="Yay it's a triangle";
    }
    else
    {
        outputDiv.innerHTML="It's not a triangle";
    }
}

checkBtn.addEventListener('click',isTriangle);
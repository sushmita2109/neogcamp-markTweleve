var input=document.querySelectorAll('.side-input');
var areaCalculationBtn=document.querySelector('#area-calculation-btn');
var outputDiv=document.querySelector('#output-div');

function multiplybaseheight(base,height){
   let mul=base*height;
   return mul;
}

function areaCalculation(){
    var mul=multiplybaseheight(Number(input[0].value),Number(input[1].value));
    var area=mul/2;
    outputDiv.innerText="Area of Triangle is " +area;
}

areaCalculationBtn.addEventListener('click',areaCalculation);
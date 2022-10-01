var input=document.querySelectorAll('.side-input');
var areaCalculationBtn=document.querySelector('#area-calculation-btn');
var outputDiv=document.querySelector('#output-div');

function multiplybaseheight(base,height){
   if(base<0&&height<0)
   {
    return 0;
   } 
   else
   {
   let mul=base*height;
   return mul;
   }
}

function areaCalculation(){
    var mul=multiplybaseheight(Number(input[0].value),Number(input[1].value));
    if(mul>0){
        var area=mul/2;
    outputDiv.innerText="Area of Triangle is " +area +" cm²";
    }
    else
    {
        outputDiv.innerText="Enter valid value for computation";
    }
    
}

areaCalculationBtn.addEventListener('click',areaCalculation);
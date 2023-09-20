const btn=document.getElementById("cal-bmi")
const bmiInputEl=document.getElementById("bmi-result")
const weightCond=document.getElementById("suggestion")

function calc(){
    const heightVal=document.getElementById("height").value;
    const weightVal=document.getElementById("weight").value;
    const bmiValue= weightVal/(heightVal*heightVal);
    bmiInputEl.value = bmiValue;  
    if(bmiValue < 16){
        weightCond.innerText="sever thinnes";
    }
    else if(bmiValue >=16 && bmiValue < 17){
        weightCond.innerText="Moderate Thinness";
    }
    else if(bmiValue >=17 && bmiValue < 18.5){
        weightCond.innerText="Mild Thinness";
    }
    else if(bmiValue >=18.5 && bmiValue < 25){
        weightCond.innerText="Normal";
    }
    else if(bmiValue >=25 && bmiValue < 30){
        weightCond.innerText="Over Weight";
    }
    else if(bmiValue >=30 && bmiValue < 35){
        weightCond.innerText="Obesity Class I";
    }
    else if(bmiValue >=35 && bmiValue < 40){
        weightCond.innerText="Obesity Class II";
    }
    else if( bmiValue>=40){
        weightCond.innerText="Obesity Class III";
    }
    else {
        weightCond.innerText="Enter the Weight Please";
    }
}

btn.addEventListener("click",calc)
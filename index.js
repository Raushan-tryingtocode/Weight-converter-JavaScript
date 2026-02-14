let unit = document.getElementById("unit");
let weight = document.getElementById("weight");
let results = document.getElementById("result");

function convert(){
    let finalunit = unit.value;
    let finalweight= Number(weight.value);
    let result;

    if(finalunit == "Kg" ){
        result = finalweight*2.204;
        document.getElementById("result").textContent = result.toFixed(2) + "Lbs" ;
    }
    else{
        result = finalweight/2.204;
        document.getElementById("result").textContent = result.toFixed(2) + "Kg";
    }
    
}

weight.oninput = convert;
unit.onchange = convert;

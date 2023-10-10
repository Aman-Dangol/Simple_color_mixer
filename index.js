let result = document.getElementById('result');
let red = document.getElementById('redOut');
let blue = document.getElementById('blueOut');
let green = document.getElementById('greenOut');
let redString,blueString,greenString;


function redChange(value){
        red.value = value;
        // r g b 
        result.style.backgroundColor=`rgb(${value},${blue.value},${green.value})`;
        result.innerText=`(${red.value},${green.value},${blue.value})`;
}

function blueChange(value){
    blue.value = value;
    // r g b 
    result.style.backgroundColor=`rgb(${red.value},${green.value},${value})`;
    result.innerText=`(${red.value},${green.value},${blue.value})`;

}

function greenChange(value){
    green.value = value;
    // r g b
    result.style.backgroundColor=`rgb(${red.value},${value},${blue.value})`;
    result.innerText=`(${red.value},${green.value},${blue.value})`;

}
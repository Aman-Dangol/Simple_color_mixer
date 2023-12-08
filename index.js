let result = document.getElementById('result');
let red = document.getElementById('redOut');
let blue = document.getElementById('blueOut');
let green = document.getElementById('greenOut');
let redString,blueString,greenString;


function redChange(value){
        red.value = value;
}

function blueChange(value){
    blue.value = value;

}

function greenChange(value){
    green.value = value;

}

function update(){
    result.style.backgroundColor=`rgb(${red.value},${green.value},${blue.value})`;
    result.innerText=`(${red.value},${green.value},${blue.value})`;
    requestAnimationFrame(update)

}

update();


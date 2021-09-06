let check = 0;
const result = [];
let display = document.getElementById("display");
let displayResult = document.getElementById("result");

function number(num) { 

    if (result.length === 0 && num === 0) {
        return false;
    }
    console.log(typeof result[result.length - 1]); 
    if (typeof result[result.length - 1] === 'string' && num === 0) {
        return false;
    }

    if (check <= 2) {
        check++;
        display.value = display.value + num;
        result.push(num);                 
    }
    console.log(result);
}
function sign(sn) { 
        if (-1 < result[result.length - 1] && result[result.length - 1] < 10) { 
            display.value = display.value + sn;
            result.push(sn);
        } else { 
            result[result.length - 1] = sn;          
            display.value = result.join("");               
        }
        check = 0;               
    }

function calculate() {
    let result = eval(display.value);
    let displayResult = document.getElementById("result");
    displayResult.value = (Math.floor(result));
}

function reset() {
    display.value = "";
    displayResult.value = "";

    check = 0;
    result.length = 0;
}
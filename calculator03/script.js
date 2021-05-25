let click = true;

function number(num) {
    let display = document.getElementById("display");
    display.value = display.value + num;
}

function sign(sn) {
    if (click) {
        let display = document.getElementById("display");
        display.value = display.value + sn;
        click = false;
    } else {
        console.log("부호 입력 끝");
    }
}

function calculate() {
    let display = document.getElementById("display");
    let result = eval(display.value);
    let displayResult = document.getElementById("result");
    displayResult.value = (Math.floor(result));
}

function reset() {
    let display = document.getElementById("display");
    display.value = "";
    let displayResult = document.getElementById("result");
    displayResult.value = "";
}
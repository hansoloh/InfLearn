function addOutput(num) {
    let display = document.getElementById("display");
    display.value = display.value + num;
}

function calculate() {
    let result = eval(display.value);
    let displayResult = document.getElementById("result");
    displayResult.value = result;
}

function reset() {
    display.value = "";
    displayResult.value = "";
}

function del() {
    display.value = display.value.substring(0, display.value.length - 1);
}
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
const reset = document.getElementById('display').value="";

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = reset();
                break;
            case '=':
                display.innerText = Math.floor(eval(display.innerText));
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

// 부호 중복 입력 가능 오류
// C 입력 오류
// 최대 입력 가능 숫자 3자리
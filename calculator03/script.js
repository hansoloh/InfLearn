let click = true;
let check = 0;

function number(num) {
    if (check <= 2) {
        check++;
        let display = document.getElementById("display");
        display.value = display.value + num;
    }
    console.log(check);
}

//숫자 입력이 2보다 작거나 같을 때
//check를 +1해줌 ; 
//display에 입력값 띄워주고
//누르는 값 이어서 다 띄워줌
//현재 check값은 3!

function sign(sn) {
    if (click) {
        let display = document.getElementById("display");
        display.value = display.value + sn;
        click = false;
        check=0;    
           
    } else {
        console.log(click);
        console.log("부호 입력 끝");        
    }
}
//숫자 부호 입력 후 숫자 다시 입력되게...
//check값 현재 3 이라서 부호 1번 입력 후 숫자 입력이 안됨 -> check=0; 리셋? 어디서?

//숫자 3자리, 부호 1개, 숫자 3자리까지 누르면 그대로 끝 반복 진행 안됨. -> 또 리셋해주기? 어디서?

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

    check=0; 
    click=true; 
    //숫자 부호 숫자 결과 c누르면 리셋까지 됨. check랑click=0이라서 다시 계산 시작 가능.
    //두번째 계산 : 처음 숫자 세자리 입력 가능. 부호 입력 안됨. 부호 입력 끝남. click=false라서
    //sign=0; 리셋해줘야되는데 어디에서?  click을 true로 리셋.
    
    //c로 눌러서 계산 재진행 다 가능 그런데
    //c 누르지 않고 결과값에서 바로 부호 입력이 불가능
}
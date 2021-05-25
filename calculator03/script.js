let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let count = 0;
let number = [];


buttons.map(button => {
    button.addEventListener('click', (e) => {        

        switch (e.target.innerText) {
            case 'C':
                display.value="";
                break;
            case '=':
                display.innerText = Math.floor(eval(display.innerText));
                break;
            default:
                display.innerText += e.target.innerText;
                console.log(display.innerText);

                if(count < 3){
                    number.push(display.innerText);
                    count++;
                }else{
                    console.log("4자리 누르면 ...버튼 눌러도 입력이 안되게");  
                }       
                console.log(number);                
                console.log(count);         
        }

    });
});


// 부호 중복 입력 가능 오류
// 최대 입력 가능 숫자 3자리
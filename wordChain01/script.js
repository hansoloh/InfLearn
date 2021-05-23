const form = document.querySelector('form')
const answer = document.querySelector('.answer')
const input = document.querySelector('input')
const result = document.querySelector('.result')
    //querySelector로 html 태그 불러오기
let count = 0;
let test = []; //입력값 저장할 배열 생성

form.addEventListener('submit', function(e) {
    e.preventDefault()
        //form 태그에 이벤트 추가
        //e.preventDefault() : submit 새로고침 방지

    if (count >= 4) { // 횟수 제한
        alert('끝');
        location.reload();
    }

    if (answer.innerText[answer.innerText.length - 1] === input.value[0]) {
        count++; //count=count+1 count+ //정답이면 count +1       

        let chk = true; //중복 체크 위한 변수
        for (let i = 0; i < test.length, i++;) { //배열을 한바퀴 돌면서 중복값 있는지 검색
            //chk = true; //중복 유무 초기화
            if (input.value == test[i]) { //중복값 있으면
                chk = false;
                alert("중복");
                --i;
            }
            if (chk)
                result.textContent = '정답입니다 계속 입력하세요.'
            answer.innerText = "제시어 : " + input.value
            test.push(input.value); //중복값 없으면 입력받은 값을 배열로 저장
        }
        console.log(test);

        input.value = ''
        input.focus()

    } else {
        result.textContent = '오답입니다 다시 입력하세요.'
        input.select()
    }

})
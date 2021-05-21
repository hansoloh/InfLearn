const form = document.querySelector('form')
const answer = document.querySelector('.answer')
const input = document.querySelector('input')
const result = document.querySelector('.result')
    //querySelector로 html 태그 불러오기
let count = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault()
        //form 태그에 이벤트 추가
        //e.preventDefault() : submit 새로고침 방지

    if(count>=5){ //10회 횟수 제한
            alert('끝');//10회 끝나면 알람
            location.reload();//10회 끝나면 reload
        }    
    
        
    

    if (answer.innerText[answer.innerText.length - 1] === input.value[0]) {      

        count ++; //count=count+1 count+ //정답이면 count +1        
        
        result.textContent = '정답입니다 계속 입력하세요.'
        answer.innerText = "제시어 : " + input.value

        input.value = ''    
        input.focus()
  
        
    } else {
        
        result.textContent = '오답입니다 다시 입력하세요.'
        input.select()
    }
        
})
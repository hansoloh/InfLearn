const form = document.querySelector('form')
const answer = document.querySelector('.answer')
const input = document.querySelector('input')
const result = document.querySelector('div')
//querySelector로 html 태그 불러오기

form.addEventListener('submit', function (e){
    e.preventDefault()
//form 태그에 이벤트 추가
//e.preventDefault() : submit 새로고침 방지

    if(answer.innerText[answer.innerText.length -1] === input.value[0]){
        result.textContent = '정답입니다 계속 입력하세요.'
        answer.innerText = input.value
        input.value = ''
        input.focus()
    }else{
        result.textContent = '오답입니다 다시 입력하세요.'
        input.select()
    }
})

// - 최대 10개까지 끝말잇기가 가능합니다.



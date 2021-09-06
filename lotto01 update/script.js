const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

const number = []
while (number.length < 7) {
    let ran = Math.floor(Math.random() * 45) + 1
    if (number.indexOf(ran) === -1) {
        /*indexOf(ran)method : array 내에 ran이 있으면 인덱스 값 return
        array 내에 찾고자 하는 ran이 없으면 -1을 return : 중복값 제거  */
        number.push(ran)
    }
}
console.log(number);
})

/*로또번호는 1개에서 5개까지 갯수를 입력해 발급할 수 있어야 합니다*/
const randone = document.querySelector("#one")
const randtwo = document.querySelector("#two")
const randthree = document.querySelector("#three")
const randfour = document.querySelector("#four")
const randfive = document.querySelector("#five")
const randsix = document.querySelector("#six")
const randseven = document.querySelector("#seven")
const submit = document.getElementById("submit")
submit.addEventListener("click", function() {
    numberone();
    numbertwo();
    numberthree();
    numberfour();
    numberfive();
    numbersix();
    numberseven();

})

function numberone() {
    randone.value = Math.floor(Math.random() * 45) + 1
}

function numbertwo() {
    randtwo.value = Math.floor(Math.random() * 45) + 1
}

function numberthree() {
    randthree.value = Math.floor(Math.random() * 45) + 1
}

function numberfour() {
    randfour.value = Math.floor(Math.random() * 45) + 1
}

function numberfive() {
    randfive.value = Math.floor(Math.random() * 45) + 1
}

function numbersix() {
    randsix.value = Math.floor(Math.random() * 45) + 1
}

function numberseven() {
    randseven.value = Math.floor(Math.random() * 45) + 1
}

// 로또번호는 1개에서 5개까지 갯수를 입력해 발급할 수 있어야 합니다
// 중복값 제거
// if(number.indexOf(ran) === -1){
//   number.push(ran)
// }
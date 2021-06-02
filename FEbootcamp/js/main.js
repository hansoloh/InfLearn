
//scrollup 버튼 만들기
const backToTop = document.getElementById('backtotop');

const checkScroll = () => {
    let pageYOffset = window.pageYOffset; //scroll값=위치 담아주는 변수

    if(pageYOffset !== 0){ //scroll이 0이 아닐때=맨 위가 아닐때 backToTop 보여주기
        backToTop.classList.add('show');
    }else{ //0일때 scroll이 제일 위일때 버튼 안보여주기
        backToTop.classList.remove('show');
    }
}
function moveBackToTop(){ //scroll이 중간에 있을때 클릭하면 scroll up되게
    if(window.pageYOffset > 0){ //scroll이 제일 위에 있지 않을 때
         window.scrollTo({top:0, behavior:"smooth"}) 
    }
}
window.addEventListener('scroll',checkScroll);
backToTop.addEventListener('click',moveBackToTop);

/*------------------------------------------------------- */

//카드 슬라이드 전환 //반응형 모던 웹페이지 만들기 3,4,5
const slidePrevList = document.getElementsByClassName('slide-prev');

for(let i=0; i < slidePrevList.length; i++){

}

/*------------------------------------------------------- */
//grabbing 추가 기능 2
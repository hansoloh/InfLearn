
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
//next 버튼
function transformNext(event){
    const slideNext = event.target; 
    const slidePrev = slideNext.previousElementSibling;

    const classList = slideNext.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');

    if(Number(activeLi) < 0){ //하나의 카드라도 왼쪽으로 이동했다면, 오른쪽으로 갈 수 있음
        activeLi = Number(activeLi) + 260;
        //왼쪽에 있던 카드가 오른쪽으로 갔다면, 다시 왼쪽으로 갈수 있으므로 prev버튼 활성화
        slidePrev.style.color = '#2f3059'; 
        slidePrev.classList.add('slide-prev-hover');
        slidePrev.addEventListener('click',transformPrev);
        //현재 제일 앞에 보이는 카드가 첫번째 카드라면, 오른쪽 next로 갈수 없으므로 next 버튼 비활성화
        if(Number(activeLi) === 0){
            slideNext.style.color = '#cfd8dc'; 
            slideNext.classList.add('slide-next-hover');
            slideNext.removeEventListener('click',transformNext);
        }
    }
    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi)+ 'px)';
    classList.setAttribute('data-position', activeLi); 
}

//prev 버튼
function transformPrev(event){
    const slidePrev = event.target; //해당 event가 발생한 요소를 가져올수있음. 해당 prev 버튼 가져옴.
    const slideNext = slidePrev.nextElementSibling;

    const classList = slidePrev.parentElement.parentElement.nextElementSibling; //ul 가져오기
    let activeLi = classList.getAttribute('data-position'); //data-position값(현재 위치) 가져올수 있는 변수 
    const liList = classList.getElementsByTagName('li');
    //liList.length*260+Number(activeLi)는 현재 위치부터 오른쪽으로 나열되야 하는 나머지 카드들의 너비
    //classList.clientWidth < (liList.length*260+Number(activeLi))는 오른쪽으로 나열될 카드가 넘친 상태이므로, 왼쪽으로 이동 가능
    if(classList.clientWidth < (liList.length * 260 + Number(activeLi))){ 
        //activeLli값은 String일수 있으므로 Number로 변환. 전체 길이에 activeLi값 더해줌. 왼쪽으로 갈수 있는 상태인지 확인.
        activeLi = Number(activeLi)-260; //왼쪽으로 갈수 있는 상태면 왼쪽으로 한칸 이동. 변경된 activeLi값이 적용된 상황.

        if (classList.clientWidth > (liList.length * 260 + Number(activeLi))) {
        slidePrev.style.color = '#cfd8dc';
        slidePrev.classList.remove('slide-prev-hover');
        slidePrev.removeEventListener('click',transformPrev);
      } 
        slideNext.style.color = '#2f3059'; 
        slideNext.classList.add('slide-next-hover');
        slideNext.addEventListener('click',transformNext);
    }
    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi)+ 'px)';
    classList.setAttribute('data-position', activeLi); //바뀐 position값 넣어주기
}

//해당 class list 안 요소 li의 개수를 구하고 그 너비가 class list가 실제 표현할수 있는 너비보다 넘치면 prev 버튼 표시하기
const slidePrevList = document.getElementsByClassName('slide-prev');

for(let i=0; i < slidePrevList.length; i++){
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling; //콘솔 찍어서 slidePrevList의 부모 부모의 다음 형제 가져오기 = ul
    let liList = classList.getElementsByTagName('li'); //가져온 ul 태그 안의 li태그 4개 리스트 배열로 받아오기

    //card가 ul태그 너비보다 크면, prev 버튼 활성화, next는 현재 data-position=0 맨 처음 카드 위치이므로 비활성화
    if(classList.clientWidth < (liList.length*260)){ 
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click',transformPrev);
    }else{//ul태그 내에 li가 다 표시될 수 있을 경우 / prev next 버튼 안보이게
          //태그 삭제 : 부모 요소 찾아서 removeChild
          const arrowContainer = slidePrevList[i].parentElement;
          arrowContainer.removeChild(slidePrevList[i].nextElementSibling); //next 버튼
          arrowContainer.removeChild(slidePrevList[i]); //prev 버튼
    }
}
/*------------------------------------------------------- */

let touchstartX;
let currentClassList;
let currentImg;
let currentActiveLi;
let nowActiveLi;
let mouseStart;

function processTouchMove(event){ //마우스 움직이며 드래그 될때마다 호출되는 함수
    event.preventDefault();
    //currentActiveLi: class-list에서 data-position으로 현재 카드 위치 알아냄
    //touchstartX: 최초 요소의 x 좌표값
    //(Number(currentX) - Number(touchstartX))는 마우스가 얼만큼 이동중인지 나타냄......
    let currentX = event.clientX || event.touches[0].screenX; //드래그 중인 현재의 마우스 좌표값
    nowActiveLi = Number(currentActiveLi) + (Number(currentX) - Number(touchstartX));
    //마우스 위치에 따라 카드 이동
    currentClassList.style.transition = 'transform 0s linear';
    currentClassList.style.transform = 'translateX(' + String(nowActiveLi) + 'px)';
}

function processTouchStart(event){
    mouseStart = true;
    event.preventDefault(); //default 동작 중단. img태그는 드래그하면 끌려오는게 default.
    touchstartX = event.clientX || event.touches[0].screenX;
    currentImg = event.target;

    //드래그 처리를 위해 드래그 중일때mousemove, 드래그가 끝났을때mouseup에 이벤트 걸어줌
    currentImg.addEventListener('mousemove',processTouchMove);
    currentImg.addEventListener('mouseup',processTouchEnd);

    currentImg.addEventListener('touchmove',processTouchMove);
    currentImg.addEventListener('touchend',processTouchEnd);

    currentClassList = currentImg.parentElement.parentElement;
    currentActiveLi = currentClassList.getAttribute('data-position');

}
function processTouchEnd(event){
    event.preventDefault();

    if(mouseStart === true){
        currentImg.removeEventListener('mousemove',processTouchMove);
        currentImg.removeEventListener('mouseup',processTouchEnd);

        currentImg.addEventListener('touchmove',processTouchMove);
        currentImg.addEventListener('touchend',processTouchEnd);

        //맨 처음 카드가 맨 앞에 기본으로 위치하도록 초기 상태로 이동
        currentClassList.style.transition = 'transform 1s ease';
        currentClassList.style.transform = 'translateX(0px)';
        currentClassList.setAttribute('data-position',0);
        //초기 상태로 돌아갔을때 prev next 버튼 초기화
        let eachSlidePrev = currentClassList.previousElementSibling.children[1].children[0]; //앞뒤 버튼 소환
        let eachSlideNext = currentClassList.previousElementSibling.children[1].children[1];
        let eachLiList = currentClassList.getElementsByTagName('li'); //li태그 다 가져오기
        if(currentClassList.clientWidth < (eachLiList.length*260)){ //li너비가 ul너비보다 크다면
            eachSlidePrev.style.color = '#2f3059'; 
            eachSlidePrev.classList.add('slide-prev-hover');
            eachSlidePrev.addEventListener('click',transformPrev);

            eachSlideNext.style.color = '#cfd8dc'; 
            eachSlideNext.classList.add('slide-next-hover');
            eachSlideNext.removeEventListener('click',transformNext);
        }
        mouseStart = false;
    }    
}
//특정 요소를 드래그하다가 요소 밖에서 드래그를 끝낼 수 있으므로 window에 태그 걸어줌
window.addEventListener('dragend',processTouchEnd);
window.addEventListener('mouseup',processTouchEnd);
//오동작 막기 위해 카드 내의 이미지에만 드래그 인터페이스 제공
const classImgLists = document.querySelectorAll('ul li img');
for(let i=0; i < classImgLists.length; i++){
    classImgLists[i].addEventListener('mousedown', processTouchStart);
    classImgLists[i].addEventListener('touchstart', processTouchStart);
}
//반응형으로 볼때 touch가 안먹힘
//touchstartX, touchmove, touchend 추가
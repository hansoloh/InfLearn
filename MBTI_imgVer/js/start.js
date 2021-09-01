const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 3;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function imageNext(qIdx, idx){
  let leftImage = document.querySelector('.leftImage');
  let rightImage = document.querySelector('.rightImage');

     leftImage.disabled = true;
     leftImage.classList.remove('fadeIn');
			leftImage.classList.add('fadeOut');

      rightImage.disabled = true;
      leftImage.classList.remove('fadeIn');
			rightImage.classList.add('fadeOut');	

		setTimeout(() => {
      if(qIdx+1 === endPoint){
        goResult();
        return;
      }
      else{
        setTimeout(() =>{
          var target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i <target.length; i++){
        select[target[i]] += 1;
      }	
        leftImage.style.display = 'none';
        rightImage.style.display = 'none';

      goNext(++qIdx);
        },450)        
      }		
	},450)
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';

  let qnaURL = './img/question/';
  let leftURL = qnaURL + qIdx + '-A.png';
  let rightURL = qnaURL + qIdx + '-B.png';

  let leftImage = document.querySelector('.leftImage');
  let rightImage = document.querySelector('.rightImage');

  leftImage.src = leftURL;
  rightImage.src = rightURL;

  leftImage.style.display = 'block';
  rightImage.style.display = 'block';

  leftImage.classList.remove('fadeOut');
  rightImage.classList.remove('fadeOut');

  leftImage.classList.add('fadeIn');
  rightImage.classList.add('fadeIn');

  leftImage.addEventListener("click", function(){
    imageNext(qIdx, 0);
	},false);

  rightImage.addEventListener("click", function(){
		imageNext(qIdx, 1);
	},false);
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

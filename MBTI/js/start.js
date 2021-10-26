const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 12;
const select = [0,0,0,0,0,0,0,0,0,0,0,0];

function calResult(){
	var result = select.indexOf(Math.max(...select));
	return result;
	console.log(select);

	for (let i = 0; i< endPoint; i++){
		var target = qnaList[i].a[select[i]];
		//console.log(target);
		for(let j = 0; j <target.type.length; j++){
			for(let k = 0; k < pointArray.length; k++){
				if(target.type[j] === pointArray[k].name){
					pointArray[k].value += 1;
				}
			}
		}
	}
	var resultArray = pointArray.sort(function (a,b){
		if(a.value > b.value){
			return -1;
		}
		if(a.value < b.value){
			return 1;
		}
		return 0;
	});
	console.log(resultArray);
	let resultword = resultArray[0].key;
	return resultword;
}

function setResult(){
	let point = calResult();  
	const resultName = document.querySelector('.resultname');  
	resultName.innerHTML = infoList[point].name;  

	var resultImg = document.createElement('img');  
	const imgDiv = document.querySelector('#resultImg');  
	var imgURL = 'img/image-' + point + '.jpg';  
	resultImg.src = imgURL;  
	resultImg.alt = point;  
	resultImg.classList.add('img-fluid');  
	imgDiv.appendChild(resultImg);  
	
	const resultDesc = document.querySelector('.resultDesc');  
	resultDesc.innerHTML = infoList[point].desc;  
  }

function goResult(){
	main.style.display.WebkitAnimation = "fadeOut 1s";
	main.style.animation = "fadeOut 1s";
	setTimeout(() => {
		qna.style.WebkitAnimation = "fadeIn 1s";
		qna.style.animation = "fadeIn 1s";
		setTimeout(() => {
			qna.style.display = "none";
			result.style.display = "block"; 
		}, 450)})
		console.log(select);
		setResult();
		//calResult();
}

function addAnswer(answerText, qIdx, idx){
	var a = document.querySelector('.answerBox');
	var answer = document.createElement('button');
	answer.classList.add('answerList');
	answer.classList.add('my-3');
	answer.classList.add('py-3');
	answer.classList.add('mx-auto');
	answer.classList.add('fadeIn');

	a.appendChild(answer);
	answer.innerHTML = answerText;
	
	answer.addEventListener("click", function(){
		var children = document.querySelectorAll('.answerList');
		for(let i = 0; i<children.length; i++){
			children[i].disabled = true;
			children[i].style.display.WebkitAnimation = "fadeOut 0.5s";
			children[i].style.animation = "fadeOut 0.5s";			
		}
		setTimeout(() => {
			var target = qnaList[qIdx].a[idx].type;
			for(let i = 0; i <target.length; i++){
			select[target[i]] += 1;
		}
			for(let i = 0; i<children.length; i++){
				children[i].style.display = 'none';
		}
		goNext(++qIdx);
	},450)
	},false);
}

function goNext(qIdx){
	if(qIdx === endPoint){
		goResult();
		return;
	}
	var q = document.querySelector('.qBox');
	q.innerHTML = qnaList[qIdx].q;

	for(let i in qnaList[qIdx].a){
		addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
	}

	var status = document.querySelector('.statusBar');
	status.style.width = (100/endPoint) * (qIdx+1) + '%';

	var statusNumber = document.querySelector('.statusNumber');
	statusNumber.innerHTML = (qIdx+1) + '/12';
}

function begin(){
	main.style.display.WebkitAnimation = "fadeOut 1s";
	main.style.animation = "fadeOut 1s";
	setTimeout(() => {
		qna.style.WebkitAnimation = "fadeIn 1s";
		qna.style.animation = "fadeIn 1s";
		setTimeout(() => {
			main.style.display = "none";
			qna.style.display = "block"; 
		}, 450)
		let qIdx = 0;
		goNext(qIdx);
	}, 450);
}
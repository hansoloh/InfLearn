const url = 'https://sleepy-kare-cf7597.netlify.app';

function setShare(){
	var resultImg = document.querySelector('#resultImg');
	var resultAlt = resultImg.firstElementChild.alt;

	const shareTitle = 'MBTI 심리테스트 결과';
	const shareDes = infoList[resultAlt].name;
	const shareImage = url + 'img/image-' + resultAlt + '.png';
	const shareURL = url + 'page/result-' + resultAlt + '.html';

	Kakao.Link.sendDefault({
			objectType: 'feed',
			content: {
			title: shareTitle,
			description: shareDes,
			imageUrl: shareImage,
			link: {
				mobileWebUrl: shareURL,
				webUrl: shareURL
			},
			},
			// social: {
			// likeCount: 10,
			// commentCount: 20,
			// sharedCount: 30,
			//  },
			buttons: [
			{
				title: '결과 확인하기',
				link: {
				mobileWebUrl: shareURL,
				webUrl: shareURL
				},
			},
			]
		});
	}
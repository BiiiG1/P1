var picWidth = 980,
currentSlide = 0,
divScrl, liBtns, picsLen, go2slide, nextSlide, prvSlide;

window.onload = function(){	
	divScrl = document.getElementsByClassName('oslide').item(0).getElementsByClassName('scroll').item(0);
	liBtns = document.getElementsByClassName('oslide').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	picsLen = liBtns.length;
	go2slide = function (n){
		if(n>=picsLen) n=0;
		if(n<0) n = picsLen-1;	
		divScrl.style.left = -n*picWidth + 'px';
		currentSlide = n;
	};
	for(var i=0;i<picsLen;i++){
		(function(j){
			liBtns.item(j).onclick = function(){
				go2slide(j);
			}
		})(i);	
	}
	setInterval(nextSlide,1000);	
}
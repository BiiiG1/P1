$("div.thumbsi1").click(nextslide1=function(){
	$("div.slide").css('display','none').css('background','url(images/1.jpg)').show(1000);
	$("div.thumbsi1").css('border','5px solid darkblue');
		$("div.thumbsi2,div.thumbsi3,div.thumbsi4").css('border','2px solid cyan');
});
$("div.thumbsi2").click(nextslide2=function(){
	$("div.slide").css('display','none').css('background','url(images/2.jpg)').show(1000);
	$("div.thumbsi2").css('border','5px solid darkblue');
		$("div.thumbsi1,div.thumbsi3,div.thumbsi4").css('border','2px solid cyan');
});
$("div.thumbsi3").click(nextslide3=function(){
	$("div.slide").css('display','none').css('background','url(images/3.jpg)').show(1000);
	$("div.thumbsi3").css('border','5px solid darkblue');
		$("div.thumbsi1,div.thumbsi2,div.thumbsi4").css('border','2px solid cyan');
});
$("div.thumbsi4").click(nextslide2=function(){
	$("div.slide").css('display','none').css('background','url(images/4.jpg)').show(1000);
	$("div.thumbsi4").css('border','5px solid darkblue');
	$("div.thumbsi1,div.thumbsi2,div.thumbsi3").css('border','2px solid cyan');

});

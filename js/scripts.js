$(window).scroll(function() {
	if ($(document).scrollTop() > $('#firstDiv').offset().top - 70){
		$('nav').removeClass('navMargin');
		$('nav').addClass('bg-dark');
	} else {
		$('nav').addClass('navMargin');
		$('nav').removeClass('bg-dark');
	}
});

$('#navItem1').hover(function() {
	$(this).addClass('shadow');
}, function() {
	$(this).removeClass('shadow');
});

$('#navItem2').hover(function() {
	$(this).addClass('shadow');
}, function() {
	$(this).removeClass('shadow');
});

$('#navItem3').hover(function() {
	$(this).addClass('shadow');
}, function() {
	$(this).removeClass('shadow');
});


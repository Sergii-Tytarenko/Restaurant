$(document).ready(function() {
	$('.burger').click(function(event){
		$('.burger,.main-nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.main-nav__link').click(function(event) {
        $('.burger,.main-nav').removeClass('active');
        $('body').removeClass('lock')
     });
});
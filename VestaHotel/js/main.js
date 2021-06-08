jQuery(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#navigation').addClass('fixed');
		}
		else if ($(this).scrollTop() < 140) {
			$('#navigation').removeClass('fixed');
		}
	});
	if(window.innerWidth >= 960) {
		new WOW().init();
	}
});
$(document).ready(function () {
	$('.slick__item-slider').slick();

	$('.header__drop').on('click', function () {
		$('.header__menu > ul').slideToggle();
		$('.header__drop').toggleClass('active');
	});
});






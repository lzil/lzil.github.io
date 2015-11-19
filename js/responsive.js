navbar = 0

$(document).ready(function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	if (w >= 650) {
		navbar = 0;
	} {
		navbar = 1;
		$('.navbar-settings').show();
		$('#navbar-links-a').hide();
	}

	if ($(document).scrollTop() >= $(window).innerHeight() * 0.5) {
		$('nav').show();
		$('.downarrow').hide();
	}
	if ($(window).innerWidth() < 1000) {
		projMode = 2;
		$('.projectIcons').css('width', '24vw');
		$('.projectText').css('height', '45vh');
		$('.projectText').css('min-height', '360px');
	} else {
		projMode = 3;
		$('.projectIcons').css('width', '36vw');
		$('.projectText').css('height', '30vh');
		$('.projectText').css('min-height', '240px');
	}
})

$(window).resize(function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	if (navbar === 0 && w < 650) {
		$('.navbar-settings').show();
		$('#navbar-links-a').hide();
		navbar = 1;
	} else if (navbar === 1 && w >= 650) {
		$('.navbar-settings').hide();
		$('#navbar-links-a').show();
		navbar = 0;
	}

	if (projMode === 3 && $(window).innerWidth() < 1000) {
		projMode = 2;
		$('.projectIcons').css('width', '24vw');
		$('.projectText').css('height', '45vh');
		$('.projectText').css('min-height', '360px');
	} else if (projMode === 2 && $(window).innerWidth() >= 1000) {
		projMode = 3;
		$('.projectIcons').css('width', '36vw');
		$('.projectText').css('height', '30vh');
		$('.projectText').css('min-height', '240px');
	}
})

$(document).scroll(function() {
	if ($(document).scrollTop() >= $(window).innerHeight() * 0.5) {
		$('nav').fadeIn(600);
		$('.downarrow').fadeOut(600);
	} else if ($(document).scrollTop() <= $(window).innerHeight() * 0.5) {
		$('nav').fadeOut(600);
		$('.downarrow').fadeIn(600);
	}
})

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			console.log(this.hash)
			off = 54
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - off
				}, 1000);
				return false;
			}
		}
	});
});


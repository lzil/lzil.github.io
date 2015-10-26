var projMode = 3;
$(document).ready(function() {
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

	var hoverLabel = $('#projectPlace');
	var curClick = null;
	$('.project').hover(function() {
		hoverLabel.hide();
		if (this != curClick) $(this).css({'-webkit-filter': 'brightness(80%)', 'filter': 'brightness(80%)'})
		proj = $(this).attr('name');
		$('#'+proj).css('display', 'inline-block');
	}, function() {
		if (this != curClick) {
			$(this).css({'-webkit-filter': 'brightness(100%)', 'filter': 'brightness(100%)'})
		} else {
			$(this).css({'-webkit-filter': 'brightness(60%)', 'filter': 'brightness(60%)'})
		}
		$('#'+proj).css('display', 'none');
		hoverLabel.css('display', 'inline-block');
	})

	$('.project').click(function() {
		if (this === curClick) {
			$(this).css({'-webkit-filter': 'brightness(80%)', 'filter': 'brightness(80%)'})
			curClick = null;
			hoverLabel = $('#projectPlace');
		} else {
			hoverLabel.hide();
			$(curClick).css({'-webkit-filter': 'brightness(100%)', 'filter': 'brightness(100%)'})
			curClick = this;
			$(this).css({'-webkit-filter': 'brightness(60%)', 'filter': 'brightness(60%)'})
			proj = $(this).attr('name');
			$('#'+proj).css('display', 'inline-block');
			hoverLabel = $('#'+proj);
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

	var pastels = ['#FF6961', '#CB99C9', '#77DD77', '#FDFD96', '#FFB347', '#F49AC2', '#87CEFA', '#C1F0F6', '#C5F1C5'];
	for (var i = 0; i < $('.project').length; i++) {
		ind = Math.floor(Math.random()*pastels.length);
		$($('.project')[i]).css('background-color', pastels[ind]);
		pastels.splice(ind, 1)
	}

})


$(window).resize(function() {
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
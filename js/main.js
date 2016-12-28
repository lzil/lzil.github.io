$(document).ready(function() {
	resizeWin();

	/*
	project icon hovering effects
	*/
	var hoverLabel = $('#projectPlace');
	var curClick = null;
	$('.project').hover(function() {
		hoverLabel.hide();
		proj = $(this).attr('name');
		$('#'+proj).css('display', 'inline-block');
	}, function() {
		$('#'+proj).css('display', 'none');
		hoverLabel.css('display', 'inline-block');
	})

	$('.project').click(function() {
		if (this === curClick) {
			$(this).css({'background-color': '#060606', 'color': 'white'})
			curClick = null;
			hoverLabel = $('#projectPlace');
		} else {
			hoverLabel.hide();
			$(curClick).css({'background-color': '#060606', 'color': 'white'})
			curClick = this;
			$(this).css({'background-color': 'white', 'color': 'black'})
			proj = $(this).attr('name');
			$('#'+proj).css('display', 'inline-block');
			hoverLabel = $('#'+proj);
		}
	})

	/*
	clicking navbar effects
	*/
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});

	/*
	name underline animation
	*/
	$('#name').hover(function() {
		if (window.innerWidth > 524) {
			$('.underName').css({'width': '300px', 'stroke-width': '3px'});
		} else {
			$('.underName').css({'width': '200px', 'stroke-width': '3px'});
		}
	}, function() {
		$('.underName').css({'width': '0px', 'stroke-width': '0px'});
	});
	
	/*
	browsers and name outline lol
	*/
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if (isChrome) {
		$('.name').css({'-webkit-text-stroke': '0.1px white'})
	}
	if (isFirefox) {
		$('.name').css({'text-shadow': '-1px 0 0 #fff'})
	}
})

/*
Right-hand side navbar effects
*/

tab = 0;

$(document).scroll(function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	var me = document.getElementById('me');
	var projects = document.getElementById('projects');
	var random = document.getElementById('random');

	if ($(document).scrollTop() >= random.offsetTop - h/2) {
		if (tab != 3) {
			resetNav();
			tab = 3;
			$('.navtext:eq(2)').css({'color': 'white'})
			$('.navtab:eq(2)').css({"background-color":'#060606'})
		}
	} else if ($(document).scrollTop() >= projects.offsetTop - h/2) {
		if (tab != 2) {
			resetNav();
			tab = 2;
			$('.navtext:eq(1)').css({'color': 'white'})
			$('.navtab:eq(1)').css({"background-color":'#060606'})
		}
	} else if ($(document).scrollTop() >= me.offsetTop - h/2) {
		if (tab != 1) {
			$('.navtab').css({'background-color': 'white'})
			resetNav();
			tab = 1;
			$('.navtext:eq(0)').css({'color': 'white'})
			$('.navtab:eq(0)').css({"background-color":'#060606'})
		}
	} else if ($(document).scrollTop() < h/2) {
		if (tab != 0) {
			resetNav();
			$('.navtab').css({'background-color': '#060606'})
			tab = 0;
		}
	}
})

$(window).resize(function() {
	resizeWin();
})

var resetNav = function() {
	$('.navtext').css({'color': '#060606'})
	$('.navtab').css({'background-color': 'white', 'outline-color': 'black'})
}

var resizeWin = function() {
	var w = window.innerWidth;
	if (w < 500) {
		$('.nav').css({'display':'none'})
	} else {
		$('.nav').css({'display':'block'})
	}
}



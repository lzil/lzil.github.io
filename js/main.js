$(document).ready(function() {
	var hoverLabel = $('#projectPlace');
	var curClick = $('.project[name=harmony]')[0];
	$(curClick).css({'background-color': 'white', 'color': 'black'})
	var proj = $(curClick).attr('name');
	$('#'+proj).css('display', 'inline-block');
	hoverLabel = $('#'+proj);
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
})


$(document).ready(function() {
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

	$('#name').hover(function() {
		$('.underName').css({'width': '300px', 'stroke-width': '3px'});
	}, function() {
		$('.underName').css({'width': '0px', 'stroke-width': '0px'});
	});
		
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	if (isChrome) {
		$('.name').css({'-webkit-text-stroke': '0.1px white'})
	}
	if (isFirefox) {
		$('.name').css({'text-shadow': '-1px 0 0 #fff'})
	}
});


tab = 0;

$(document).scroll(function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	var me = document.getElementById('me');
	var projects = document.getElementById('projects');
	var other = document.getElementById('other');

	if ($(document).scrollTop() >= other.offsetTop - h/2) {
		if (tab != 3) {
			resetNav();
			tab = 3;
			$('.navtext:eq(2)').css({'color': 'white'})
			$('.navtab:eq(2)').css({"background-color":'black'})
		}
	} else if ($(document).scrollTop() >= projects.offsetTop - h/2) {
		if (tab != 2) {
			resetNav();
			tab = 2;
			$('.navtext:eq(1)').css({'color': 'white'})
			$('.navtab:eq(1)').css({"background-color":'black'})
		}
	} else if ($(document).scrollTop() >= me.offsetTop - h/2) {
		if (tab != 1) {
			resetNav();
			tab = 1;
			$('.navtext:eq(0)').css({'color': 'white'})
			$('.navtab:eq(0)').css({"background-color":'black'})
		}
	} else if ($(document).scrollTop() < h/2) {
		if (tab != 0) {
			resetNav();
			tab = 0;
		}
	}

})

var resetNav = function() {
	$('.navtext').css({'color': '#060606'})
	$('.navtab').css({'background-color': 'white', 'outline-color': 'black'})
}


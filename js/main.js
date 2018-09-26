var COLOR_BACK = '#fefefe'
var COLOR_TEXT = '#444'
var COLOR_LABEL = '#aaa'

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
			$(this).css({'background-color': COLOR_BACK, 'color': COLOR_TEXT})
			curClick = null;
			hoverLabel = $('#projectPlace');
		} else {
			hoverLabel.hide();
			$(curClick).css({'background-color': COLOR_BACK, 'color': COLOR_TEXT})
			curClick = this;
			$(this).css({'background-color': COLOR_TEXT, 'color': COLOR_BACK})
			proj = $(this).attr('name');
			$('#'+proj).css('display', 'inline-block');
			hoverLabel = $('#'+proj);
		}
	})


	cur_target = document.getElementById('about');
	cur_target.style.display = 'block'
	$('.title-label').first().css('color', COLOR_TEXT)
	/*
	clicking navbar effectcur_targets
	*/
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target[0] : $('[name=' + this.hash.slice(1) +']');
			if (target && target.id != cur_target.id) {
				$(cur_target).fadeOut(200, function() {
					$(target).fadeIn(200)
				})
				$('.title-label').css('color', COLOR_LABEL)
				$(this).css('color', COLOR_TEXT)
				cur_target = target
			}
		}
	});

	/*
	name underline animation
	*/
	$('#liang').hover(function() {
		$('.underName').css({'width': '160px', 'stroke-width': '4px'});
	}, function() {
		$('.underName').css({'width': '0px', 'stroke-width': '0px'});
	});



	// var title_label_lock = 
	// $('.title-label').hover(function() {
	// 	if (this.id != cur_target.id) {
	// 		title_label_lock = true
	// 		$(this).children().fadeIn(300)
	// 	}
		
	// }, function() {
	// 	title_label_lock = false
	// 	$(this).children().fadeOut(300)
	// })
	
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

// tab = 0;

// $(document).scroll(function() {
// 	var w = window.innerWidth;
// 	var h = window.innerHeight;

// 	var me = document.getElementById('me');
// 	var projects = document.getElementById('projects');
// 	var random = document.getElementById('random');

// 	if ($(document).scrollTop() >= random.offsetTop - h/2) {
// 		if (tab != 3) {
// 			resetNav();
// 			tab = 3;
// 			$('.navtext:eq(2)').css({'color': 'white'})
// 			$('.navtab:eq(2)').css({"background-color":'#060606'})
// 		}
// 	} else if ($(document).scrollTop() >= projects.offsetTop - h/2) {
// 		if (tab != 2) {
// 			resetNav();
// 			tab = 2;
// 			$('.navtext:eq(1)').css({'color': 'white'})
// 			$('.navtab:eq(1)').css({"background-color":'#060606'})
// 		}
// 	} else if ($(document).scrollTop() >= me.offsetTop - h/2) {
// 		if (tab != 1) {
// 			$('.navtab').css({'background-color': 'white'})
// 			resetNav();
// 			tab = 1;
// 			$('.navtext:eq(0)').css({'color': 'white'})
// 			$('.navtab:eq(0)').css({"background-color":'#060606'})
// 		}
// 	} else if ($(document).scrollTop() < h/2) {
// 		if (tab != 0) {
// 			resetNav();
// 			$('.navtab').css({'background-color': '#060606'})
// 			tab = 0;
// 		}
// 	}
// })

$(window).resize(function() {
	resizeWin();
})


var resizeWin = function() {
	var bw = $('body').innerWidth();
	if (bw < 880) {
		$('#menu').css({'text-align': 'center', 'width': '100%'})
		$('#content').css({'width': '100%', 'padding': 0})
	} else {
		$('#menu').css({'text-align': 'right', 'width': '30%'})
		$('#content').css({'width': '60%', 'padding-left': '5%'})
	}
}



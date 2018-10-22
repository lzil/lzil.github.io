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
			// deselect whatever the currrent selection is
			$(this).css({'background-color': COLOR_BACK, 'color': COLOR_TEXT})
			curClick = null;
			hoverLabel = $('#projectPlace');
		} else {
			// change selection to what you just clicked (this) and change curClick to match
			hoverLabel.hide();
			$(curClick).css({'background-color': COLOR_BACK, 'color': COLOR_TEXT})
			curClick = this;
			$(this).css({'background-color': COLOR_TEXT, 'color': COLOR_BACK})
			proj = $(this).attr('name');
			$('#'+proj).css('display', 'inline-block');
			hoverLabel = $('#'+proj);
		}
	})


	/*
	pressing navbar button effects
	*/

	// setting initial 'about'. cur_target is the current page that is on
	cur_target = document.getElementById('about');
	cur_target.style.display = 'block'
	$('.title-label').first().css('color', COLOR_TEXT)
	// not 100% sure what this does; probably copied it from somewhere
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target[0] : $('[name=' + this.hash.slice(1) +']');
			if (target && target.id != cur_target.id) {
				// fade the text
				$(cur_target).fadeOut(200, function() {
					$(target).fadeIn(200)
				})
				$('.title-label').css('color', COLOR_LABEL)
				$(this).css('color', COLOR_TEXT)
				cur_target = target;
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

})


$(window).resize(function() {
	resizeWin();
})


var resizeWin = function() {
	var bw = $('body').innerWidth();
	if (bw < 880) {
		$('#menu').css({'text-align': 'center', 'width': '100%'})
		$('#content').css({'width': '100%', 'padding': 0})
		$('.underName').css({'margin': 'auto'})
	} else {
		$('#menu').css({'text-align': 'right', 'width': '30%'})
		$('#content').css({'width': '60%', 'padding-left': '5%'})
		$('.underName').css({'margin': '0 2px 0 auto'})
	}
}

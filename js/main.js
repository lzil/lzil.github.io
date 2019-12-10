var COLOR_BACK = '#fdfdfd'
var COLOR_TEXT = '#444'
var COLOR_LABEL = '#999'

$(document).ready(function() {

	/*
	pressing navbar button effects
	*/

	// setting initial 'about'. cur_target is the current page that is on
	cur_target = document.getElementById('about');
	cur_target.style.display = 'block'
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

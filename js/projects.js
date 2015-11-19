var projMode = 3;
$(document).ready(function() {
	

	var hoverLabel = $('#projectPlace');
	var curClick = $('.project[name=harmony]')[0];
	$(curClick).css({'-webkit-filter': 'brightness(60%)', 'filter': 'brightness(60%)'})
	proj = $(curClick).attr('name');
	$('#'+proj).css('display', 'inline-block');
	hoverLabel = $('#'+proj);
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

	

	var pastels = ['#FF6961', '#CB99C9', '#77DD77', '#FDFD96', '#FFB347', '#F49AC2', '#87CEFA', '#C1F0F6', '#C5F1C5'];
	for (var i = 0; i < $('.project').length; i++) {
		ind = Math.floor(Math.random()*pastels.length);
		$($('.project')[i]).css('background-color', pastels[ind]);
		pastels.splice(ind, 1)
	}

})



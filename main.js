var COLOR_LIGHT = '#fdfdfd'
var COLOR_DARK = '#444'
var COLOR_NAV = '#999'

$(document).ready(function() {

	/*
	name underline animation
	*/

	$('#nav-about').hover(function() {
		$('.underName').css({'width': '160px', 'stroke-width': '4px'});
	}, function() {
		$('.underName').css({'width': '0px', 'stroke-width': '0px'});
	});

	/*
	pressing navbar button effects
	*/

	// setting initial 'about'. cur_target is the current display
	var cur_target = $('#about');
	cur_target.css('display', 'block');
	
	$('.nav-link').click(function() {
		var target = $('#'+this.id.slice(4))
		if (target[0].id == cur_target[0].id) {
			return
		}
		$(cur_target).fadeOut(160, function() {
			target.fadeIn(160)
			cur_target = target;
		})
		$('.nav-link').css('color', '')
		$(this).css('color', COLOR_DARK)
	})

	/*
	photo organization
	*/ 

	var load_photos = function(type) {
		var photos = {}
		photos[type] = shuffle(PHOTOS[type])
		var photo_tab = $('.photo-tab.' + type)[0]

		for (var i = 0; i < photos[type].length; i++) {

			var photo = document.createElement("img");
			var src = 'images/photos/' + photos[type][i];
			$(photo).addClass('photo')
			photo.src = src;

			// add the photo and add the link
			photo_tab.appendChild(photo)
			photo.onclick = function() {
				window.location.href = this.src
			}
		}
	}

	// actually adding the photos
	load_photos("landscape")
	load_photos("cities")
	load_photos("misc")

})


// adapted from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
	var b = a.slice()
    var j, x, i;
    for (i = b.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = b[i];
        b[i] = b[j];
        b[j] = x;
    }
    return b;
}
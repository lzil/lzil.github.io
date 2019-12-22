var COLOR_LIGHT = '#fdfdfd'
var COLOR_DARK = '#444'
var COLOR_NAV = '#999'

$(document).ready(function() {

	/*
	photo organization
	*/

	var photos = {}

	// initial photos loading
	var load_photos = function(type) {

		photos[type] = shuffle(PHOTOS[type])
		var photo_tab = $('.photo-tab.' + type)[0]

		for (var i = 0; i < photos[type].length; i++) {

			// load the photo
			var container = document.createElement("div")
			$(container).addClass('photo-container')

			var photo = document.createElement("img");
			var src = 'images/photos/' + photos[type][i];
			$(photo).addClass('photo')
			photo.src = src;

			container.appendChild(photo)

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

	
	/*
	pressing navbar button effects
	*/

	// setting initial 'about'. cur_target is the current display
	var cur_target = $('#about');
	cur_target.css('display', 'block');
	
	$('.nav-link').click(function() {
		$('.nav-link').css('color', '')
		$(this).css('color', COLOR_DARK)
		var target = $('#'+this.id.slice(4))
		$(cur_target).fadeOut(160, function() {
			target.fadeIn(160)
			cur_target = target;
		})		
	})


	/*
	name underline animation
	*/

	$('#nav-about').hover(function() {
		$('.underName').css({'width': '160px', 'stroke-width': '4px'});
	}, function() {
		$('.underName').css({'width': '0px', 'stroke-width': '0px'});
	});

})



var PHOTOS = {
	"landscape": [
		"china-1.jpg",
		"china-6.jpg",
		"china-7.jpg",
		"ireland-1.jpg",
		"netherlands-2.jpg",
		"slovakia-2.jpg",
		"sweden-2.jpg",
		"sweden-3.jpg",
		"sweden-4.jpg",
		"sweden-5.jpg",
		"uk-10.jpg"
	],

	"cities": [
		"belgium-1.jpg",
		"china-3.jpg",
		"china-5.jpg",
		"denmark-1.jpg",
		"germany-1.jpg",
		"germany-3.jpg",
		"germany-4.jpg",
		"lithuania-1.jpg",
		"lithuania-2.jpg",
		"slovakia-1.jpg",
		"slovakia-3.jpg",
		"spain-1.jpg",
		"spain-2.jpg",
		"spain-4.jpg",
		"spain-5.jpg",
		"spain-6.jpg",
		"uk-2.jpg",
		"uk-3.jpg",
		"uk-5.jpg",
		"uk-6.jpg",
		"uk-7.jpg",
		"uk-8.jpg",
		"uk-12.jpg",
		"uk-11.jpg"

	],

	"misc": [
		"china-2.jpg",
		"china-4.jpg",
		"china-8.jpg",
		"germany-2.jpg",
		"ireland-2.jpg",
		"netherlands-1.jpg",
		"uk-1.jpg",
		"uk-4.jpg",
	]
}


// adapted from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
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
var COLOR_BACK = '#fdfdfd'
var COLOR_TEXT = '#444'
var COLOR_LABEL = '#999'

$(document).ready(function() {

	var containers = {};
	var photos = {};
	var overlays = {};

	var DEFAULT_HEIGHT = 140;
	var SIDE_PADDING = 20;

	var load_photos = function(type) {
		containers[type] = []
		photos[type] = []
		overlays[type] = []

		for (var i = 0; i < PHOTOS[type].length; i++) {

			// initialize all the elements and attach them in the right places
			var container = document.createElement("div");
			var photo = document.createElement("img");
			var overlay = document.createElement("div");
			$(container).addClass('photo-container')
			$(overlay).addClass('photo-overlay')
			$(photo).addClass('photo')

			photo.src = 'images/photos/' + PHOTOS[type][i];
			container.appendChild(photo)
			containers[type].push(container)
			photos[type].push(photo)
			overlays[type].push(overlay)
		}

		put_photos(type)
	}


	var put_photos = function(type) {

		// reset all the containers and get rid of linebreaks
		containers[type].forEach(function(ctr) {
			ctr.classList = ['photo-container']
		})
		brs = document.getElementsByClassName('photo-br');
		while (brs[0]) {
			brs[0].parentNode.removeChild(brs[0])
		}

		// total width we can play with
		var v_width = $('#content')[0].clientWidth;
		// variable to store current line width
		var l_width = 0;
		// line number that we're on
		var l_num = 1

		// class name for the line and type
		var line_type = 'line-' + type + '-'

		for (var i = 0; i < PHOTOS[type].length; i++) {

			// initialize all the elements and attach them in the right places
			var container = containers[type][i];
			var photo = photos[type][i];
			var overlay = overlays[type][i];
			$(container).addClass(line_type + l_num)

			var photo_tab = $('.photo-tab.' + type)[0]
			photo_tab.appendChild(container)
			/// container.appendChild(photo)
			
			var aspect_ratio = photo.width / photo.height
			// testing next width to see if it's too big
			var i_width = DEFAULT_HEIGHT * aspect_ratio
			var n_width = l_width + i_width + SIDE_PADDING
			if (n_width > v_width) {
				// it's too big so get rid of it
				$(container).removeClass(line_type + l_num)
				photo_tab.removeChild(container)

				var line_imgs = $('.' + line_type + l_num)
				resize_line(line_imgs, v_width, l_width)

				// start a new line and reset
				l_num++;
				var new_br = document.createElement('br')
				$(new_br).addClass('photo-br')
				photo_tab.appendChild(new_br)

				// add the thing that's too big
				photo_tab.appendChild(container)
				$(container).addClass(line_type + l_num)
				l_width = i_width + SIDE_PADDING;
				
			} else {
				// increment line width and move on
				l_width = n_width;
			}

			if (i == PHOTOS[type].length - 1) {
				// last photo, show everything
				var line_imgs = $('.' + line_type + l_num)
				resize_line(line_imgs, v_width, l_width)
			} 
			
		}
	}

	var resize_line = function(imgs, v_width, l_width) {
		l_idx = imgs.length

		// the magic ratio to multiply by
		var ratio = (v_width - l_idx * SIDE_PADDING) / (l_width - l_idx * SIDE_PADDING) - 0.01

		// now make everything that's already in the line fit the line
		console.log("resizing", imgs)
		imgs.each(function(img) {
			var img_photo = imgs[img].children[0]

			$(img_photo).css({
				'height': DEFAULT_HEIGHT * ratio,
			})
		})
	}

	// adding all the pictures
	load_photos("landscape")
	load_photos("city")
	load_photos("misc")

	
	/*
	pressing navbar button effects
	*/

	// setting initial 'about'. cur_target is the current page that is on
	cur_target = document.getElementById('photos');
	cur_target.style.display = 'block';
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



	$(window).on('resize', function() {
		put_photos('landscape')
		put_photos('city')	
		put_photos('misc')		
	})

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
		"uk-9.jpg",
		"uk-10.jpg"
	],

	"city": [
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
		"spain-3.jpg",
		"spain-4.jpg",
		"spain-5.jpg",
		"spain-6.jpg",
		"uk-2.jpg",
		"uk-3.jpg",
		"uk-5.jpg",
		"uk-6.jpg",
		"uk-7.jpg",
		"uk-8.jpg",

	],

	"misc": [
		"austria-1.jpg",
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
var COLOR_LIGHT = '#fdfdfd'
var COLOR_DARK = '#444'
var COLOR_NAV = '#999'

document.addEventListener('DOMContentLoaded', function(){ 

	/*
	pressing navbar button effects
	*/

	// setting initial 'about'. cur_target is the current display
	var cur_target = document.querySelector('#about')
	cur_target.style.display = 'block'
    cur_target.style.opacity = 1

    var transitioning = false
	
	document.querySelectorAll('.nav-link').forEach(function(l) {
        l.addEventListener('click', function() {
    		var target = document.querySelector('#'+this.id.slice(4))
    		if (target.id == cur_target.id || transitioning) {
    			return
    		}
            // cur_target = target

            // fading the sections in and out
            // opacity decreases in increments of int_int, then increases
            var op1 = 1
            var op2 = 0
            var int_time = 5
            var int_int = 0.05

            transitioning = true
            // timer1,op1 for leaving element, timer2,op2 for incoming element
            var timer1 = setInterval(function() {
                if (op1 <= int_int){
                    clearInterval(timer1);
                    cur_target.style.display = 'none'
                    target.style.display = 'block'
                    var timer2 = setInterval(function() {
                        if (op2 >= 1 - int_int) {
                            clearInterval(timer2)
                            transitioning = false
                            target.style.opacity = 1
                            cur_target.style.opacity = 0
                            cur_target = target
                        } else {
                            op2 += int_int
                            target.style.opacity = op2
                        }
                    }, int_time);
                } else {
                    op1 -= int_int
                    cur_target.style.opacity = op1
                }
            }, int_time);

            
            document.querySelectorAll('.nav-link').forEach(function(m) {
                m.style.color = ''
            })

    		this.style.color = COLOR_DARK
	   })
    })

    /*
    showing/hiding project descriptions
    */

    document.querySelectorAll('.research-down-arrow').forEach(function(l) {
        l.addEventListener('click', function() {
            var desc = this.nextElementSibling;;
            if (desc.style.height.slice(0,-2) > 0) {
                desc.style.height = `0px`
                desc.style.opacity = 0
            } else {
                setTimeout(function() {
                    desc.style.opacity = 1
                }, 300)
                desc.style.height = `${desc.scrollHeight}px`
            }
        })
    })

	/*
	photo organization
	*/ 

	var load_photos = function(type) {
		var photos = {}
        photos[type] = PHOTOS[type]
		var photo_tab = document.querySelector('.photo-tab.' + type)

		for (var i = 0; i < photos[type].length; i++) {

			var photo = document.createElement("img");
			var src = 'images/photos/thumbnails/tn-' + photos[type][i];
            var src2 = 'images/photos/' + photos[type][i]
			photo.classList.add('photo')
			photo.src = src;
            photo.src2 = src2;

			// add the photo and add the link
			photo_tab.appendChild(photo)
            //photo.target = '_blank'
			photo.onclick = function() {
				window.open(this.src2, '_blank')
			}
		}
	}

	// actually adding the photos
	load_photos("all-photos")

}, false)

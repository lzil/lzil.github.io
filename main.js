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
	
	document.querySelectorAll('.nav-link').forEach(function(l) {
        l.addEventListener('click', function() {
    		var target = document.querySelector('#'+this.id.slice(4))
    		if (target.id == cur_target.id) {
    			return
    		}

            // fading the sections in and out
            // opacity decreases in increments of int_int, then increases
            var op1 = 1
            var op2 = 0
            var int_time = 5
            var int_int = 0.05
            // timer1,op1 for leaving element, timer2,op2 for incoming element
            var timer1 = setInterval(function() {
                if (op1 <= int_int){
                    clearInterval(timer1);
                    cur_target.style.display = 'none'
                    target.style.display = 'block'
                    var timer2 = setInterval(function() {
                        if (op2 >= 1 - int_int) {
                            clearInterval(timer2)
                            target.style.opacity = 1
                            cur_target.style.opacity = 0
                            cur_target = target
                        }
                        op2 += int_int
                        target.style.opacity = op2
                    }, int_time);
                }
                op1 -= int_int
                cur_target.style.opacity = op1
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
		photos[type] = shuffle(PHOTOS[type])
		var photo_tab = document.querySelector('.photo-tab.' + type)

		for (var i = 0; i < photos[type].length; i++) {

			var photo = document.createElement("img");
			var src = 'images/photos/' + photos[type][i];
			photo.classList.add('photo')
			photo.src = src;

			// add the photo and add the link
			photo_tab.appendChild(photo)
            //photo.target = '_blank'
			photo.onclick = function() {
				window.open(this.src, '_blank')
			}
		}
	}

	// actually adding the photos
	load_photos("landscapes")
	load_photos("cities")
	load_photos("etc")

}, false)



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


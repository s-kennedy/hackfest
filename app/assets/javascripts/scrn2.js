$(document).ready(function() {

	// Animsition
	$(".animsition").animsition({
	
	inClass               :   'fade-in',
	outClass              :   'fade-out',
	inDuration            :    1500,
	outDuration           :    800,
	linkElement           :   '.animsition-link',
	// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	loading               :    true,
	loadingParentElement  :   'body', //animsition wrapper element
	loadingClass          :   'animsition-loading',
	unSupportCss          : [ 'animation-duration',
	                          '-webkit-animation-duration',
	                          '-o-animation-duration'
	                        ],
	//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	overlay               :   false,
	overlayClass          :   'animsition-overlay-slide',
	overlayParentElement  :   'body'
	});
	
	
	
	// Smooth scroll
	smoothScroll.init({
    	speed: 650, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 0
	});
	
	
		
	// MixItUp:
	$('#work-container').mixItUp({
		controls: {
			activeClass: 'on'
		}
	});
	

	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.2);
	$('#separator-1').parallax("50%", 0.2);
	$('#separator-2').parallax("50%", 0.2);
	$('#project-intro').parallax("50%", 0.2);
	
});



//Fade out on scroll

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	$('#intro, #project-intro').css({'opacity':(( 1000-scroll )/1000)});
});

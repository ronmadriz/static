var j = jQuery.noConflict();

j(document).ready(function(){
	j('a').not('[href*="mailto:"]').each(function () {
		var isInternalLink = new RegExp('/' + window.location.host + '/');
		if ( ! isInternalLink.test(this.href) ) {
		  j(this).attr('target', '_blank');
		};
	});

	j('#myModal').on('shown.bs.modal', function () {
		j('#myInput').trigger('focus')
	})

	!function(t){t.fn.bcSwipe=function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}(jQuery);
	 
	// Swipe functions for Bootstrap Carousel
	j('.carousel').bcSwipe({ threshold: 50 });

	j(window).scroll(function(){
	    if (j(this).scrollTop() > 50) {
	       j('section').addClass('focus');
	    } else {
	       j('section').removeClass('focus');
	    }
	});

	j('.carousel_multiple').carousel({
	  interval: 10000
	})

	j('.carousel .carousel-item').each(function(){
	    var next = j(this).next();
	    if (!next.length) {
	    next = j(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo(j(this));
	    
	    for (var i=0;i<2;i++) {
	        next=next.next();
	        if (!next.length) {
	        	next = j(this).siblings(':first');
	      	}
	        
	        next.children(':first-child').clone().appendTo(j(this));
	      }
	});


});
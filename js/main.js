(function($) {
var App = { init: function() { App.Reviews();                  // reviews carousel
							   App.Nivo_Lightbox();            // lightbox
							   App.Elements_animation();       // animations
							   },

    // Elements Animation
    Elements_animation: function() {
		$('#more_info').waypoint(function() {
            setTimeout(function(){$('.content_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim3').addClass('animated fadeInUp')},400);
        }, { offset: '50%' });

    	$('#about_us').waypoint(function() {
            setTimeout(function(){$('.content_anim4').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim5').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim6').addClass('animated fadeInUp')},400);
        }, { offset: '50%' });

        $('#hd_info').waypoint(function() {
            setTimeout(function(){$('.content_anim7').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim8').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim9').addClass('animated fadeInUp')},400);
        }, { offset: '50%' });

        $('#hd_social').waypoint(function() {
            setTimeout(function(){$('.content_anim10').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim11').addClass('animated fadeInUp')},200);

        }, { offset: '50%' });

        $('#hd_reviews').waypoint(function() {
            setTimeout(function(){$('.content_anim12').addClass('animated fadeInUp')},0);
        }, { offset: '50%' });

        $('#faq').waypoint(function() {
            setTimeout(function(){$('.content_anim27').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim28').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim29').addClass('animated fadeInUp')},400);
        }, { offset: '50%' });

    },


    // Nivo Lightbox
    Nivo_Lightbox: function() {
	    $('.screenshots_gallery a').nivoLightbox({
		    effect: 'slideDown'
	    });
    },


    // Reviews Carousel
    Reviews: function() {
	    $(".owl-carousel").owlCarousel({
		    loop:true,
		    singleItem : true,
	    });
    },

}

$(function() {
  App.init();
  $(window).resize();

});

})(jQuery);

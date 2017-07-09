/* Theme Name: Hublind - Landing page Template
   Author: Coderthemes
   Author e-mail: coderthemes@gmail.com
   Version: 1.0.0
   Created: May 2017
   File Description:Main JS file of the template
*/


(function ($) {

    'use strict';

    function initLoader() {
        $(window).load(function() {
            $('.status').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });
    }
    function initSmoothNav() {
        $('.nav-link').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }
    function initWowAnimation() {
        AOS.init({
            easing: 'ease-in-out-sine',
            duration: 1000
        });
    }
    function initMagnificPopoupVideo() {
        $('.popup-video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }
    function initMagnificPopoupImage() {
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    }
    function initStickyNav() {
        $(window).load(function() {
            $(".sticky").sticky({topSpacing: 0});
        });  
    }
    function initContactForm() {
        $('#cform').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .before('<img src="images/form-loader.gif" class="contact-loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;

        });
    }
    function init() {
        initLoader();
        initSmoothNav();
        initWowAnimation();
        initMagnificPopoupVideo();
        initMagnificPopoupImage();
        initStickyNav();
        initContactForm();
    }

    init();

})(jQuery);





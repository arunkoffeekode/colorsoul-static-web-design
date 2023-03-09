
(function ($) {
  "use strict";

    // jquery ready start fixed top nav sticky
    $(document).ready(function() {
      // jQuery code
      ///////////////// fixed menu on scroll for desctop
      if ($(window).width() > 992) {
        var navbar_height = $('.navbar').outerHeight();
        $(window).scroll(function() {
          if ($(this).scrollTop() > 150) {
            $('.navbar-wrap').css('height', navbar_height + 'px');
            $('#navbar_top').addClass("fixed-top");
            $('#navbar_top').removeClass("d-none");
    
          } else {
            $('#navbar_top').addClass("d-none");
            $('#navbar_top').removeClass("fixed-top");
            $('.navbar-wrap').css('height', 'auto');
          }
        });
      } // end if
    }); // jquery end sticky

})
  (jQuery);

(($) => {
  "use strict"

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(() => {
    if (location.pathname.replace(/^\//, '') 
      == this.pathname.replace(/^\//, '') 
      && location.hostname == this.hostname) {
      const target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  })

  $('.js-scroll-trigger').click(() => {
    $('.navbar-collapse').collapse('hide')
  })

  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  })

  const navbarCollapse = () => {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled")
    } else {
      $("#mainNav").removeClass("navbar-scrolled")
    }
  }

  navbarCollapse()
  $(window).scroll(navbarCollapse)

})(jQuery)

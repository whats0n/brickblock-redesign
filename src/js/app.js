import sayHello from './lib/sayHello.js';

sayHello();


// header fixed
$(window).on('scroll', function() {

  if($(window).scrollTop() > 10 && !$('.header').hasClass('is-fixed')) {
    // $('.header').css({
    //     backgroundColor: 'rgba(255,255,255,1)'
    // });
    window.setTimeout(function() {
      $('.header').addClass('is-fixed');
    }, 50);
  }
  if($(window).scrollTop() < 10 && $('.header').hasClass('is-fixed')) {
    // $('.header').css({
    //     backgroundColor: 'transparent'
    // });
    window.setTimeout(function() {
      $('.header').removeClass('is-fixed');
    }, 50);
  }

});

$(document).ready(function() {
  //svgUseIt();

  $('.js-nav-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    var dropdown = $(this).parent().parent().find('.js-nav-dropdown');
    dropdown.toggleClass('is-active');

    //dropdown.hasClass('is-active') ? dropdown.slideDown(300) : dropdown.slideUp(300);

  });

  $('a').on('click', function() {
    var h = this.getAttribute('href');
    if(/^#/.test(h) === true) {
      $('html,body').animate({
        scrollTop: $(h).offset().top - 140
      }, 1500);
    }
  });

});


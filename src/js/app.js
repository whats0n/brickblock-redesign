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

  // $('a').on('click', function() {
  //   var h = this.getAttribute('href');
  //   if(/^#/.test(h) === true) {
  //     $('html,body').animate({
  //       scrollTop: $(h).offset().top - 140
  //     }, 1500);
  //   }
  // });

  ;(function() {
    let tabs = $('.js-tabs');
    let item = $('.js-tabs-item');

    tabs.each(function(i,el) {
      let tabs = $(el);
      let firstItem = tabs.find('.js-tabs-item').first();
      let firstContentBlock = tabs.find('.js-tabs-content').first();
      firstItem.addClass('is-open');
      firstContentBlock.show();
    });

    item.click(function(e) {
      e.preventDefault();
      let thisItem = $(this);
      let thisTabs = thisItem.parents('.js-tabs');
      let items = $(thisTabs.find('.js-tabs-item'));
      let index = thisItem.index();
      let contentBlocks = thisTabs.find('.js-tabs-content');
      let activeContentBlock = $(contentBlocks[index]);
      
      items.removeClass('is-open');
      thisItem.addClass('is-open');
      contentBlocks.hide();
      activeContentBlock.fadeIn(600);
    });


  })();

});


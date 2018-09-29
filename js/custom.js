$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() 
    {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

  $('.title').addClass('is-showing');

  $("#sidebar-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#landing").offset().top
    }, 1000);
  });

  $("#sidebar-to-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });

  $("#sidebar-to-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
  });

  $("#sidebar-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });

  

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop(); //check distance of scroll from the top

  //landing elements
  // if(wScroll > $('.title').offset().top - ($(window).height() / 1.3 )){
  //   $('.title').addClass('is-showing');
  // }

  if(wScroll > $('.about-section').offset().top - ($(window).height() / 1.3 )){
    $('.about-content').addClass('is-showing');
    $('.education-experience-content').addClass('is-showing');
  }

  if(wScroll > $('.portfolio-section').offset().top - ($(window).height() / 1.3 )){
    $('.portfolio-main-title').addClass('is-showing');
    $('.portfolio-main-hr').addClass('is-showing');
  }

  if(wScroll > $('.portfolio-list').offset().top - ($(window).height() / 1.3 )){
    $('.portfolio-item').each(function(i){
      setTimeout(function(){
        $('.portfolio-item').eq(i).addClass('is-showing');
      }, 150 * (i+1) );
    });
  }

  if(wScroll > $('.contact-section').offset().top - ($(window).height() / 1.3 )){
    $('.contact-title').addClass('is-showing');
    $('.contact-hr').addClass('is-showing');
    $('.contact-word').addClass('is-showing');
    $('.contact-mail').addClass('is-showing');
  }

  

});

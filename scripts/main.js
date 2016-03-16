$(document).ready(function() {
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop(),
      sectThree = $('.section-3'),
      mainHead = $('.main-head'),
      mainHeadItems = $('.flex-nav li a'),
      logoReveal = $('.logo-reveal'),
      logoHidden = $('.logo-hidden'),
      sectTwo = $('.section-2');
      flexNav = $('.flex-nav');
      flexNavImg = $('.flex-nav img');

    if (scroll > 1) {
      mainHead.css({
        fontSize: '1.5vh'
      });
    } else {
      mainHead.css({
        fontSize: '',
      });
    }
    if (scroll > 900) {
      mainHeadItems.css({
        color: 'black',
        fontSize: '2.5vh',
        transition: '.5s'
      });
      mainHead.css({
        fontSize: '1.5em',
        backgroundColor: 'rgb(221, 221, 221)'
      });
      // logoReveal.detach();
      logoHidden.css({
        visibility: 'visible',
        display: 'inherit',
        width: '10vh'
      });
      logoReveal.css({
        display: 'none'
      });
    } else {
      mainHeadItems.css({
        color: '',
        fontSize: ''

      });
      logoReveal.css({
        display: 'inherit',
        visibility: 'visible'
      });
      logoHidden.css({
        visibility: 'collapse',
        display: 'none'
      });
      mainHead.css({
        fontSize: '',
        backgroundColor: ''
      });
    }
    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 300);
  })
});

  $(window).scroll(function() {

    $('.hideme, .skillbar').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 800);
        $(this).find('.skillbar-bar').animate({
          width: $(this).attr('data-percent')
        }, 6000);
      };
    });

  });
});

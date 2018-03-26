
//SMOOTH SCROLL
$(".smooth-scroll").on('click', 'a', function (event) {
  event.preventDefault();
  var elAttr = $(this).attr('href');
  var offset = ($(this).attr('data-offset') ? $(this).attr('data-offset') : 0);
  var fixedTop = $('.navbar.fixed-top');
  if (fixedTop && fixedTop.length) {
    offset = fixedTop.outerHeight();
  }
  $('body,html').animate({
    scrollTop: $(elAttr).offset().top - offset
  }, 700);
});

wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();

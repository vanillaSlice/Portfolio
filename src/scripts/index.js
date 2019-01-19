$(document).ready(function () {

  'use strict';

  $('.scrollable').click(function (event) {
    event.preventDefault();

    // for smooth scrolling
    var top = $(event.target.hash).offset().top - 50;
    var duration = 800;
    $('html, body').animate({
      scrollTop: top
    }, duration);

    // will make menu disappear when a nav link is clicked
    var menuBtn = $('.navbar-toggle');
    if (menuBtn.is(':visible') && !menuBtn.hasClass('collapsed')) {
      menuBtn.trigger('click');
    }
  });

  // set the random quote
  var quotes = ['like a night club in the morning...',
    'like a recently disinfected shithouse...',
    'like a dose of scabies...',
    'like a death at a birthday party...',
    'like a sucked and spat-out smartie...',
    'like a black widow spider in the shadows of disgrace...'
  ];
  var quote = quotes[Math.round(Math.random() * (quotes.length - 1))];
  $('.quote').text(quote);

  // change logo image on hover
  $('.logo').hover(function (event) {
    var src = event.target.src;
    var altSrc = event.target.getAttribute('data-alt-src');
    event.target.setAttribute('src', altSrc);
    event.target.setAttribute('data-alt-src', src);
  });

});
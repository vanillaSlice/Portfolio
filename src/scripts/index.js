import logo from '../images/logo.png';
import altLogo from '../images/colour-logo.jpg';

$('.scrollable').click((event) => {
  event.preventDefault();

  // for smooth scrolling
  const top = $(event.target.hash).offset().top - 50;
  const duration = 800;
  $('html, body').animate({
    scrollTop: top,
  }, duration);

  // will make menu disappear when a nav link is clicked
  const menuBtn = $('.navbar-toggle');
  if (menuBtn.is(':visible') && !menuBtn.hasClass('collapsed')) {
    menuBtn.trigger('click');
  }
});

// set the random quote
const quotes = ['like a night club in the morning...',
  'like a recently disinfected shithouse...',
  'like a dose of scabies...',
  'like a death at a birthday party...',
  'like a sucked and spat-out smartie...',
  'like a black widow spider in the shadows of disgrace...',
];
const quote = quotes[Math.round(Math.random() * (quotes.length - 1))];
$('.quote').text(quote);

// change logo image on hover
$('.logo').hover(
  e => e.target.setAttribute('src', altLogo),
  e => e.target.setAttribute('src', logo),
);

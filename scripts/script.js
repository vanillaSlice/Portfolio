(function () {
  
  'use strict';
  
  var quotes = ["\"like a night club in the morning...\"",
              "\"like a recently disinfected shithouse...\"",
              "\"like a dose of scabies...\"",
              "\"like a death at a birthday party...\"",
              "\"like a sucked and spat-out smartie...\"",
              "\"like a black widow spider in the shadows of disgrace...\""];
  
  $(document).ready(function () {
    
    $('.navbar-collapse a').click(function (event) {
      // for smooth scrolling
      event.preventDefault();
      var top = $(event.target.hash).offset().top - 50, duration = 800;
      $('html, body').animate({scrollTop: top}, duration);
        
      // will make menu disappear when nav clicked
      if ($('button').is(':visible')) {
        $('button').trigger('click');
      }
    });
    
    // show random quote
    var quote = quotes[Math.round(Math.random() * (quotes.length - 1))];
    $("#quote").text(quote);
    
  });
  
}());
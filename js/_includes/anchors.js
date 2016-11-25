// Animate the anchor link scrolling
var $root = $('html, body');
$('a').on('click', function() {
  var $this = $(this),
      url = $this.attr('href'),
      hash = url.split('#')[1];

  if ( hash ) {
    $root.animate({
      scrollTop: $( url ).offset().top - 60
    }, 500);
    //return false;
  }

});

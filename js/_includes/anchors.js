// Animate the anchor link scrolling
var $root = $('html, body');

$('.main-container a').on('click', function(e) {
  var $this = $(this),
      url = $this.attr('href'),
      hash = url.split('#')[1]
      $target = $( '#' + hash );

  if ( $target.length ) {
    e.preventDefault();
    $root.stop().animate({
      scrollTop: $target.offset().top - 60
    }, 500);
  }

});

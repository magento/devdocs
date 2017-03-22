
$('.dropdown .dropdown-toggle').on('click', function (e) {

  var $this = $(this),
    $dropdown = $this.parent();

  $dropdown.toggleClass('open');
  $dropdown.find('.dropdown-menu').focus();

});

$('.dropdown').on('click', function(e) {
  e.stopPropagation();
});


$('body').on('click', function(e) {
  $('.dropdown').removeClass('open');
});

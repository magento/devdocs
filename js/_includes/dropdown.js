
$('.dropdown .dropdown-toggle').on('click', function () {
  var $this = $(this),
    $dropdown = $this.parent();

  $dropdown.toggleClass('open');

});

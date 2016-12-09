// Responsive menu trigger
$('.menu-trigger').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('offcanvas-active');
});

$('.nav-main-fader').on('click', function (e) {
  e.preventDefault();
  $('body').removeClass('offcanvas-active search-active');
});

// Duplicate main nav and version-switcher for responsive website
$('.nav-main').clone().addClass('nav-main-mobile').appendTo('body');
$('.version-switcher').clone().addClass('version-switcher-mobile').appendTo('.nav-main-mobile');

// Responsive item expand/collapse
$('.nav-main a').each(function () {
  var $this = $(this);
  var $children = $this.closest('li').find('ul');

  if ( $children.length ) {
    $this.closest('li').addClass('has-children').append('<span class="children-toggle"></span>');
    $this.on('click', function (e) {
      e.preventDefault();
      $(this).closest('li').toggleClass('expanded');
    });
  }
});


// Responsive table of contents
$('.toc-toggler').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('expanded');
});

$('.dropdown .dropdown-toggle').on('click', function () {
  var $this = $(this),
    $dropdown = $this.parent();
  $dropdown.toggleClass('open');
});

// Responsite site - for version switcher
/*
function responsiveSite() {
  var $w = $( window ).width();
  if ( $w < 767 ) {
    $('.version-switcher').appendTo($('#subnav-wrap'));
  } else {
    //$('.version-switcher').insertBefore($('.updated'));
  }
};
responsiveSite();
$( window ).on('resize', responsiveSite );
*/

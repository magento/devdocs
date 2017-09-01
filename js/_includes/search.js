// Clicking on search icon triggers the search form in header
var $quickSearchInput = $('.quick-search input');

// Pressign ESC key closes the quick-search
$(document).keyup(function(e) {

  if( e.which == 27 ){
    $('body').removeClass('search-active');
    $quickSearchInput.blur();
  }

});

$('.search-trigger').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('search-active');
  $quickSearchInput.trigger('focus');
});

$('.quick-search-close').on('click', function (e) {
  e.preventDefault();
  $('body').removeClass('search-active');
  $quickSearchInput.blur();
});

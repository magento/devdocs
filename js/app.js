//= include _vendor/jsCookie.js
//= include _vendor/affix.js
//= include _vendor/scrollspy.js
//= include _vendor/clipboard.min.js
//= include _vendor/autocomplete.jquery.js

// This is what happens on document.ready
$(function() {

  $('html').removeClass('no-js');

  //= include _includes/analytics.js
  //= include _includes/toc.js
  //= include _includes/copy.js
  //= include _includes/collapsible.js
  //= include _includes/responsive.js
  //= include _includes/dropdown.js
	//= include _includes/anchors.js
	//= include _includes/menu.js
  //= include _includes/search.js
  //= include _includes/tutorial.js
  //= include _includes/videos.js
  //= include _includes/left-navigation.js

});
// END document ready

$(window).on('load', function(){
  // Fix headers hiding behind nav when loading on anchor link
  if(window.location.hash) {
    $(document).scrollTop($(document).scrollTop() - 60);
  }
});


//Allows for sticky menu
$(document).on('scroll', function(){
	if( $(document).scrollTop() > 10 )
		$('#global-nav').addClass('sticky-nav-main');
	else
		$('#global-nav').removeClass('sticky-nav-main');
});

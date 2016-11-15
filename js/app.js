$(function() {

	// Responsive menu trigger
	$('.menu-trigger, .nav-main-fader').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('offcanvas-active');
	});

	// Responsive item expand/collapse
	$('.nav-main a').each(function () {
		var $this = $(this);
		var $children = $this.closest('li').find('ul');

		if ( $children.length ) {
			$this.closest('li').addClass('has-children').append('<a href="#" class="children-toggle"></a>');
			$this.closest('li').find('.children-toggle').on('click', function () {
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


	// TODO: Refactor this
	// This script copies markdown toc into the .page-info
	//$('#markdown-toc').clone().addClass('nav').appendTo( '.page-info' );
	$('#markdown-toc').hide();

	// Page toc on right side sticks to the browser window
	$('body').scrollspy({ target: '.page-info' });
	$('.page-info .page-toc').affix({
		offset: {
	    top: 40,
	    bottom: function () {
	      return (this.bottom = $('#footer').outerHeight(true))
	    }
  	}
	});

	// Animate the anchor link scrolling
	var $root = $('html, body');
	$('a').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 500);
    return false;
	});

});

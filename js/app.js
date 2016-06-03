$(function() {

	// Responsive menu trigger
	$('.site-header .menu-trigger, .nav-main .nav-close, .nav-main-fader').on('click', function () {
		$('body').toggleClass('offcanvas-active');
	});

	// Responsive item expand/collapse
	$('.nav-main a').each(function () {
		var $this = $(this);
		var $children = $this.closest('li').find('ul');

		if ( $children.length ) {
			$this.closest('li').append('<a href="#" class="children-toggle"></a>');
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

});

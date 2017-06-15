// ** Menu **

$.fn.mainNavigation = function(settings) {

	settings = jQuery.extend({
		menuActiveClass: 'active',
		menuDelay: 50,
		topLevelItemsSelector: '.nav-main-item',
		popupSelector: '.nav-popup',
	}, settings);

	var nav = $(this);
	var topLevelItems = $(this).find( settings.topLevelItemsSelector );


	var setupNavigation = function () {

		topLevelItems.on('mouseenter focusin', handleMenuMouseEnter)
			.on('mouseleave', handleMenuMouseLeave );

		topLevelItems.children('a').on('click' ,function (e) {
			e.preventDefault();
		});

		// focusing out on last link in popup should close it:
		//topLevelItems.find( settings.popupSelector + ' a').filter(':last').on('focusout', handleLastLinkFocusOut );

	};

	// mouseover, focusin:
	var handleMenuMouseEnter = function (e) {
		var currentItem = $(this);

		// Center the flyout menu
		var popup = currentItem.find( settings.popupSelector );
		if ( popup.find('.nav-section').length ) {
			var windowWidth = $(window).width(),
					subItemWidth = popup.width();
			popup.offset({ left: ( windowWidth - subItemWidth )/2 });
		}

		// Delay the appearance of the popup menu
		window.navTimer = window.setTimeout( function () {
			showPopup( currentItem );
		}, settings.menuDelay );

	}


	// mouseover, focusout
	var handleMenuMouseLeave = function (e) {
		var currentItem = $(this);
		hidePopup(currentItem);

		clearTimeout( window.navTimer );
	}

	var handleLastLinkFocusOut = function (e) {
		console.log( $(this) );
		hidePopup ( $(this).closest( settings.popupSelector ) );
	}

	// These functions handle the popup appearance
	var showPopup = function ( menuItem ) {
		hidePopup(topLevelItems);
		menuItem.addClass( settings.menuActiveClass );
		menuItem.find( settings.popupSelector ).attr('aria-hidden', 'false');
		menuItem.find( settings.popupSelector + ' a').attr('tabindex', 0);
	}
	var hidePopup = function ( menuItem ) {
		menuItem.removeClass( settings.menuActiveClass ).trigger('blur');
		menuItem.find( settings.popupSelector ).attr('aria-hidden', 'true');
		menuItem.find( settings.popupSelector + ' a').attr('tabindex', -1);
	}

	setupNavigation();

	return this;
};


var navMain = $('.nav-main');
navMain.mainNavigation();






var menustate = "";
if ( $('li.level3Child').is('li.active')) {
	menustate = $('LI.active').attr('data-menunode');
	$('#' + menustate).show(); //show parent
	$('#' + menustate).removeClass('caretRight').addClass('caretDown') //submenu open indication
	$('.' + menustate).show(); //show submenu
}

	var thirdTier = "";
	$('.level3Parent').on('click', function(){
	thirdTier = $(this).attr('id');
	if($('.' + thirdTier).is(":visible")) {
				$(this).removeClass('caretDown').addClass('caretRight')
				$('.' + thirdTier).slideUp(200);
			} else {
				$(this).removeClass('caretRight').addClass('caretDown')
				$('.' + thirdTier).slideDown(200);
			}
	return false;
	});

$(function() {

	if ($.cookie('searchResultsState') ==1) {
		//show search results page
		showSearchBox();
	} else {
		$.cookie('searchResultsState', '0');
		hideSearchBox();
	}

	$('#searchbox').submit(function(event) {
		showSearchBox();
	});

	$('#gsc-search-box').submit(function(){
		$('input').blur();
	});

	$('.search-trigger').click(function () {
		showSearchBox();
	});

	$('DIV.searchResultsBoxClose').click(function(){
		hideSearchBox();
	});

	function showSearchBox () {

		$('#searchResultsBox').fadeIn(300, function () {
			// Callback function that focuses on input
			$('input.gsc-input').focus();
		});
		$('.searchResultsBack').fadeIn(300);
		$.cookie('searchResultsState', '1');
		$('body').addClass('search-active');

	}

	function hideSearchBox () {

		$('#searchResultsBox').fadeOut(300, function () {
			// Callback function that focuses out of input
			$('input.gsc-input').blur();
		});
		$('.searchResultsBack').fadeOut(300);
		$.cookie('searchResultsState','0');

		$('body').removeClass('search-active');

	}


// ** Menu **
var menustate ="";
if ( $('LI.level3Child').is("LI.active")) {
	menustate = $('LI.active').attr('data-menunode');
	$('#' + menustate).show(); //show parent
	$('#' + menustate).removeClass('caretRight').addClass('caretDown') //submenu open indication
	$('.' + menustate).show(); //show submenu
}

var dog = "";
$('.level3Parent').click(function(){
dog = $(this).attr('id');
if($('.' + dog).is(":visible")) {
			$(this).removeClass('caretDown').addClass('caretRight')
			$('.' + dog).slideUp(200);
		} else {
			$(this).removeClass('caretRight').addClass('caretDown')
			$('.' + dog).slideDown(200);
		}
return false;
});});

}   //end devdocs

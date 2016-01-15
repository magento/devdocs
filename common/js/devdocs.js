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
			$('#searchResultsBox input.gsc-input').first().focus();
		});
		$('.searchResultsBack').fadeIn(300);
		$.cookie('searchResultsState', '1');
		$('body').addClass('search-active');

	}

	function hideSearchBox () {

		$('#searchResultsBox').fadeOut(300, function () {
			// Callback function that focuses out of input
			$('#searchResultsBox input.gsc-input').first().blur();
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



var thirdTier = "";
$('.level3Parent').click(function(){
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




}   //end devdocs

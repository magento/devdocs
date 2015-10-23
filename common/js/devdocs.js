$(function() {

	if ($.cookie('searchResultsState') ==1) {
		//show search results page
		showSearchBox();
	} else {
		$.cookie('searchResultsState', '0');
		hideSearchBox();
	}


	$('form').submit(function(event) {
		showSearchBox();
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

	}

	function hideSearchBox () {

		$('#searchResultsBox').fadeOut(300, function () {
			// Callback function that focuses out of input
			$('input.gsc-input').blur();
		});
		$('.searchResultsBack').fadeOut(300);
		$.cookie('searchResultsState','0');

	}

});

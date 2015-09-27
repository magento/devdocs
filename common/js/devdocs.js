function devdocs(){


if ($.cookie('searchResultsState') ==1) {
	//show search results page
	$('#searchResultsBox').fadeIn(300);
	$('.searchResultsBack').fadeIn(1200);
} else {
	$.cookie('searchResultsState', '0');
	$('#searchResultsBox').fadeOut(300);
	$('.searchResultsBack').fadeOut(1200);
}


$('form').submit(function(event) {

	$('#searchResultsBox').fadeIn(300);
	$('.searchResultsBack').fadeIn(1200);
	$.cookie('searchResultsState', '1');
	
});

$('DIV.searchResultsBoxClose').click(function(){
	$('#searchResultsBox').fadeOut(300);
	$('.searchResultsBack').fadeOut(1200);
	$.cookie('searchResultsState','0');
   
});

}   //end devdocs
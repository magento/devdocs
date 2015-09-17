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
	console.log("submit called");
	$('#searchResultsBox').fadeIn(300);
	$('.searchResultsBack').fadeIn(1200);
	$.cookie('searchResultsState', '1');
	
});

$('DIV.searchResultsBoxClose').click(function(){
	$('#searchResultsBox').fadeOut(300);
	$('.searchResultsBack').fadeOut(1200);
	$.cookie('searchResultsState','0');
    console.log($.cookie('searchResultsState'));
});

//first load the page, searchResultsState = 0 search results hidden.
// on submit searchResultState = 1, cookie set to 1 search results shown.
// close search window, searchResultState = 0 search results hidden.







console.log('devdocs is up!');

$(document.body).on('click', '#test' ,function(){

    console.log('These are in fact the droids that you are looking for.');
});




}   //end devdocs
function devdocs(){


if ($.cookie('searchResultsState') ==1) {
	//show search results page
	$('#searchResultsBox').show(300);
	$('.searchResultsBack').show(1200);
} else {
	$.cookie('searchResultsState', '0');
	$('#searchResultsBox').hide(300);
	$('.searchResultsBack').hide(1200);
}


$('form').submit(function(event) {
	console.log("submit called");
	$('#searchResultsBox').show(300);
	$('.searchResultsBack').show(1200);
	$.cookie('searchResultsState', '1');
	
});

$('DIV.searchResultsBoxClose').click(function(){
	$('#searchResultsBox').hide(300);
	$('.searchResultsBack').hide(1200);
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
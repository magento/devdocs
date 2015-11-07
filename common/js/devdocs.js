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
});




}   //end devdocs
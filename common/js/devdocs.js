$(document).ready(function(){
	if(getURLParameter("cx"))
		showSearchBox();

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

	//Make sub navigations wide when there is not enough space vertically
	$("#subnav>ul.menu>li").hover(
		function(){
			if(($(this).children("ul").outerHeight()+50) > $("#footer-wrap").offset().top - $("#subnav-wrap").offset().top)
				$(this).children("ul").addClass("wide");
			else
				$(this).children("ul").removeClass("wide");
		});

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

	//All divs with classname "collapsible" will have jquery-ui accordion functionality
	$(".collapsible").accordion({
		collapsible: true,
		active: false,
		icons: { "header": "collapsible-ready", "activeHeader": "collapsible-active" },
		header: ".collapsible-title",
		heightStyle: "content"
	});

});

//Allows for sticky menu
$(document).scroll(function(){
	if($(document).scrollTop()>66)
		$("#subnav-wrap").addClass("sticky-nav-main");
	else
		$("#subnav-wrap").removeClass("sticky-nav-main");
})

//Function to get URL parameter values
function getURLParameter(sParam) {
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam)
				{
						return sParameterName[1];
				}
		}
}

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

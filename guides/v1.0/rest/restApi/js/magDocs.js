function magDocs(){

// Persistent Menu logic

// Open parents of current page
$('LI.active').parents().show();	

// Open and close nested menu
$("DIV#menu").on("click", "a.bucket", function(){
		if($(this).siblings('ul').is(":visible")) {
			$(this).removeClass('caretDown').addClass('caretRight')
			$(this).siblings('ul').slideUp(200);
		} else {
			$(this).removeClass('caretRight').addClass('caretDown')
			$(this).siblings('ul').slideDown(200);
		}
	});



var i;
var notate = $("SPAN.notation").length;
 

$('SPAN.notation').prepend(function (index) {
    index = '' + (index + 1);
    return '<span class=index>' + index.substr(index.length - 3) + '</span>';
});

//Scroll to  current menu item




$('DIV#menu').animate({
    scrollTop: $("UL.menu LI.current").offset().top + (-140)
}, 100);

// $("DIV#menu").on("click", "LI.menuItem a", function(){
// 	$(this).addClass('active');
// 	console.log("clicked");
// } );

// console.log(notate + " notations");


// var menuName = yourString.split("/").pop();


// Is this thing on?
// console.log("magDocs.js is up");

} //end magDocs
// ** Menu **
var menustate ="";
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

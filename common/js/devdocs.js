$(document).ready(function(){
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

    //Do search when search icon is pressed
    $(".search .search-icon").click(function(){
        $("#searchbox").submit();
    });

    // Prepend link anchor to content headers
    $(".content-wrap :header").each(function(){
        var link = $("<a>",{
            href: "#"+$(this).attr("id"),
            class: "anchor"
        });
        var img = $("<img>",{
            src: baseUrl+"i/icons/ico-link-grey.png",
            width: 25
        });

        link.prepend(img);

        $(this).prepend(link);

        $(this).hover(function(){
            img.show();

        },
        function(){
            img.hide();
        });
    });

});

//Allows for sticky menu
$(document).scroll(function(){
	if($(document).scrollTop()>66)
		$("#subnav-wrap").addClass("sticky-nav-main");
	else
		$("#subnav-wrap").removeClass("sticky-nav-main");
});

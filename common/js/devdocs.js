$(document).ready(function(){
	//Make sub navigations wide when there is not enough space vertically
	$("#subnav>ul.menu>li").hover(
		function(){
			if(($(this).children("ul").outerHeight()+50) > $("#footer").offset().top - $("#subnav-wrap").offset().top)
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
		var $toc = $('<div>',{
			class: 'page-toc',
		});
		$toc.appendTo('.page-info');
		$toc.append('<ul class="nav"></ul>');

		$(".content-wrap :header:not(h1)").each(function(){
				var $this = $(this),
						id = $this.attr('id'),
						no_toc = $this.hasClass('no_toc'),
						anchor_text = '';

				// check if we need to process the link
				if ( !no_toc ) {

					// check if we have id on heading already
					if ( id ) {
						// use that id for the anchor
						anchor_text = id;
					} else {
						// generate id from the heading text
						var text = $this.text();
						anchor_text = text;
					}
					// clean up the anchor
					anchor_text = anchor_text.replace(/\s/g, '-').replace(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');

					// prepend anhor to title
					var $link = $("<a>",{
	          href: "#" + anchor_text,
	          class: "anchor"
	        });
					// Add link to the header
					$this.prepend( $link );
					// Add id to the header if needed
					if ( !id ) {
						$this.attr('id', anchor_text);
					}

					// Allow only h2 and h3 tags in page toc
					var tag_name = $this.prop("tagName").toLowerCase();

					if ( tag_name == 'h2' || tag_name == 'h3' ) {
						var $li = $('<li class="' + tag_name + '"><a href="#' + anchor_text + '">' + $this.text() + '</a></li>');
						$toc.find('ul').append($li);
					}
					console.log(anchor_text);

				}

    });
		// do not show toc for less than 2 headings
		if ( $toc.find('li').length <= 1 ) {
			$toc.hide();
		}


    // Fix anchor jumps hiding headers
    $(window).on("hashchange",function(){
        $(document).scrollTop($(document).scrollTop()-86);
    });

});

$(window).load(function(){
  // Fix headers hiding behind nav when loading on anchor link
  if(window.location.hash) {
    $(document).scrollTop($(document).scrollTop() - 60);
  }
});

//Allows for sticky menu
$(document).scroll(function(){
	if( $(document).scrollTop() > 10 )
		$("#global-nav").addClass("sticky-nav-main");
	else
		$("#global-nav").removeClass("sticky-nav-main");
});

// TODO: Refactor this
// This script copies markdown toc into the .page-info
//$('#markdown-toc').clone().addClass('nav').appendTo( '.page-info' );
$('#markdown-toc').hide();


// Prepend link anchor to content headers
var $toc = $('<div>',{
  class: 'page-toc',
});
$toc.appendTo('.page-info');
$toc.append('<ul class="nav"></ul>');

// Loop through each h2..h3 and build a TOC
$(".content-wrap :header:not(h1)").each(function(){
    var $this = $(this),
        id = $this.attr('id'),
        no_toc = $this.hasClass('no_toc'),
        anchor_text = '';

    // check if we need to process the link
    if ( !no_toc && !$this.parents('.collapsible').length ) {

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
      var $link = $('<a>',{
        href: '#' + anchor_text,
        class: 'anchor'
      });
      // Add link to the header
      $this.prepend( $link );
      // Add id to the header if needed
      if ( !id ) {
        $this.attr('id', anchor_text);
      }

      // Allow only h2 and h3 tags in page toc
      var tag_name = $this.prop('tagName').toLowerCase();

      if ( tag_name == 'h2' || tag_name == 'h3' ) {
        var $li = $('<li class="' + tag_name + '"><a href="#' + anchor_text + '">' + $this.text() + '</a></li>');
        $toc.find('ul').append($li);
      }
      //console.log(anchor_text);

    }

});
// do not show toc for less than 2 headings
if ( $toc.find('li').length <= 1 ) {
  $toc.hide();
}


// Page toc on right side sticks to the browser window
$('body').scrollspy({ target: '.page-info' });
$('.page-info .page-toc').affix({
  offset: {
    top: 40,
    bottom: function () {
      return (this.bottom = $('#footer').outerHeight(true))
    }
  }
});

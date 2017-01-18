// Copy to clipboard
// Requires clipboard.min.js

// Create buttons
var $highlightBtn = $('<div class="btn btn-copy">Copy</div>');
var $noCopyBtn = $('<div class="btn btn-no-copy">Not for copy</div>');
// Get all pre tags
var $preTags = $('pre');


// Iterate each pre tag
$preTags.each( function () {
  var $this = $(this),
      noCopy = $this.hasClass('no-copy');

  var $preWrap = $this.wrap('<div class="pre-wrap"></div>').parent();

  // Check if should be copied or not
  if ( noCopy ) {
    $noCopyBtn.clone().appendTo($preWrap);
  } else {

    $highlightBtn.clone().appendTo($preWrap);

    // Create clipboard object
    var clipboard = new Clipboard( $preWrap.find('.btn-copy')[ 0 ] , {
      target: function(trigger) {
        return trigger.previousElementSibling;
      }
    });

    // Attach clipboard events
    clipboard.on('success', function(e) {
      //console.log(e);
      e.trigger.innerText = 'Copied';
      var timerId = setTimeout( function () { e.trigger.innerText='Copy'; }, 3000);
    });
    clipboard.on('error', function(e) {
      //console.log(e);
    });
    $this.data('clipboard', clipboard);

  }

});

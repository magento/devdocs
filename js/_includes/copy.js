// Copy to clipboard
// Requires clipboard.min.js

var $highlightBtn = $('<div class="btn btn-copy">Copy</div>');
$('.highlight').append($highlightBtn);
var clipboard = new Clipboard('.highlight .btn-copy', {
  target: function(trigger) {
    return trigger.previousElementSibling;
  }
});

clipboard.on('success', function(e) {
  console.log(e);
  e.trigger.innerText = 'Copied';
  var timerId = setTimeout( function () { e.trigger.innerText='Copy'; }, 3000);
});
clipboard.on('error', function(e) {
  console.log(e);
});

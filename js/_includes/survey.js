// Create a survey banner that disappears forever once you dismiss it

$(function() {

  // Fist, check if browser supports storing the data
  if (typeof localStorage !== 'undefined') {

    // Only show if user didn't interact with the banner
    if ( !localStorage.getItem("Survey done") ) {

      // Build banner text
      var $banner = $('<div class="bs-callout" style="display:none; text-align:left; max-width: 1024px;"><h2>New to Magento?</h2><p>If you are just starting or have been developing in Magento for 6 months or less, we want to talk to you. If you are interested in sharing your experiences with us, please fill out the short survey and we will schedule a time to chat.</p> <button data-href="https://www.surveymonkey.com/r/new2magento" class="btn btn-primary btn-large">OK, I will help</button> <button class="btn btn-large">No, thanks</button> </div>');

      // Assign events
      $banner.find('a, button').on('click', function () {

        var $this = $(this);

        localStorage.setItem("Survey done" , true);
        $banner.delay(100).slideUp(400);

        if ( $this.data('href') ) {
          window.open( $this.data('href'), '_blank' );
        }

      });

      // Insert banner in place
      $banner.insertBefore('.home-features .feature:first');
      $banner.appendTo('.content-wrap');

      // Show banner
      $banner.delay(500).slideDown(400);
    }
  }
});

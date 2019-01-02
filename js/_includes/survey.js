// Create a survey banner that disappears forever once you dismiss it

$(function() {

  // Fist, check if browser supports storing the data
  if (typeof localStorage !== 'undefined') {

    // Only show if user didn't interact with the banner
    if ( !localStorage.getItem("Navigation survey done") ) {

      // Build banner text
      var $banner = $('<div class="bs-callout" style="display:none; text-align:left; max-width: 1024px;"><h2>Test and improve Magento navigation</h2><p>Help us evaluate the Magento admin navigation by taking a 10-15 min survey. Your input will help us learn how you navigate the Magento Admin Panel, and find ways to make it better.</p> <button data-href="https://2mtpk78k.optimalworkshop.com/treejack/m2nav-coreops?tag=devdocs" class="btn btn-primary btn-large">OK, I will help</button> <button class="btn btn-large">No, thanks</button> </div>');

      // Assign events
      $banner.find('a, button').on('click', function () {

        var $this = $(this);

        localStorage.setItem("Navigation survey done" , true);
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

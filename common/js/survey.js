
$(function() {

  // Fist, check if browser supports storing the data
  if (typeof localStorage !== 'undefined') {

    var surveyName = "Cloud survey 2 done";

    // Only show if user didn't interact with the banner
    if ( !localStorage.getItem(surveyName) ) {

      // Build banner text
      var $banner = $('<div class="bs-callout" style="display:none; text-align:left; max-width: 1024px; margin-top: 50px;"><h2>Hello Magento Community!</h2><p>Please share your feedback by taking this quick 5 minute survey.</p><p>Thank you in advance for participating. Your feedback is 100% confidential and will not be shared outside of Magento.</p> <button data-href="https://www.surveymonkey.com/r/CloudFeatures-C" class="btn btn-primary btn-large">OK, I will help</button> <button class="btn btn-large">No, thanks</button> </div>');
      
      // Assign events
      $banner.find('a, button').on('click', function () {

        var $this = $(this);
        localStorage.setItem(surveyName , true);
        $banner.delay(100).slideUp(400);

        if ( $this.data('href') ) {
          window.open( $this.data('href'), '_blank' );
        }
      });

      // Insert banner in place
      $banner.appendTo('.content-wrap');

      // Show banner
      $banner.delay(500).slideDown(400);
    }
  }
  
});


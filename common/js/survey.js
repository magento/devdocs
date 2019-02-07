
$(function() {

  // Fist, check if browser supports storing the data
  if (typeof localStorage !== 'undefined') {

    var surveyName = "Cloud survey done";

    // Only show if user didn't interact with the banner
    if ( !localStorage.getItem(surveyName) ) {

      // Build banner text
      var $banner = $('<div class="bs-callout" style="display:none; text-align:left; max-width: 1024px;"><h2>Cloud developers, we need your help!</h2><p>The Magento team wants to learn about your experience with Magento Commerce Cloud implementation.<br /> Please sign up for an interview session to share your feedback.</p> <button data-href="https://www.surveymonkey.com/r/Cloud_Devdocs_Recruitment" class="btn btn-primary btn-large">OK, I will help</button> <button class="btn btn-large">No, thanks</button> </div>');
      
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


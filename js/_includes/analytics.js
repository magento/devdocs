/**
* If Google Analytics has loaded successfully
* and has not been shimmed apply link click tracking.
* https://davidwalsh.name/detecting-google-analytics
*/

/**
  Track onbound links click (for GitHub links)
*/
$('.improve-page').on('click', function (e) {
  if (! window.ga || ! window.ga.create) { return true; }
  e.preventDefault();
  var $this = $(this),
      url = $this.attr('href');

  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: 'Edit this page on GitHub',
    //eventValue: 1,
    transport: 'beacon',
    hitCallback: function(){document.location = url;}
  });
})

/**
  Track "Give us Feedback" link click
*/
$('.new-issue a').on('click', function (e) {
  if (! window.ga || ! window.ga.create) { return true; }
  e.preventDefault();
  var $this = $(this),
      url = $this.attr('href');

  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: 'Give us feedback',
    //eventValue: 1,
    transport: 'beacon',
    hitCallback: function(){document.location = url;}
  });
});

/**
  Track "Become Contributor" home page button
*/
$('.home-contributors .btn-primary').on('click', function (e) {
  if (! window.ga || ! window.ga.create) { return true; }
  e.preventDefault();
  var $this = $(this),
      url = $this.attr('href');

  ga('send', 'event', {
    eventCategory: 'Internal Link',
    eventAction: 'click',
    eventLabel: 'Become Contributor on home page',
    //eventValue: 1,
    transport: 'beacon',
    hitCallback: function(){document.location = url;}
  });
});

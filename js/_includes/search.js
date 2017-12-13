// Clicking on search icon triggers the search form in header



$(function() {

  var $quickSearchInput = $('.quick-search input');

  // Pressign ESC key closes the quick-search
  $(document).keyup(function(e) {

    if( e.which == 27 ){
      $('body').removeClass('search-active');
      $quickSearchInput.blur();
    }

  });

  $('.search-trigger').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('search-active');
    $quickSearchInput.trigger('focus');
  });

  $('.quick-search-close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('search-active');
    $quickSearchInput.blur();
  });




  // Algola autocomplete:
  var client = algoliasearch("E642SEDTHL", "d2d0f33ab73e291ef8d88d8b565e754c");
  var index = client.initIndex('devdocs');
  var ver = $('.version-switcher').data('version');

  //initialize autocomplete on search input (ID selector must match)

  $('.quick-search input, .search-form .search-field').autocomplete(
    {
      hint: true,
      debug: false,
    }, [
    {
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 5, facetFilters: 'guide_version:' + ver }),
      //value to be displayed in input control after user's suggestion selection
      displayKey: 'title',
      //hash of templates used when rendering dataset
      templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<a href="' + suggestion.url + '">' + suggestion._highlightResult.title.value + '</a>';
        }
      }
    }
  ]).on('autocomplete:selected', function ( event, suggestion, dataset ) {
    if ( typeof suggestion.url != 'undefined' ) {
      window.location.href = suggestion.url;
    }
    console.log(suggestion);
  }).on('keypress', function (event) {
    if(event.which == 13) {
      var value = escapeHTML(event.target.value);
      if (value) {
        window.location = $('form.quick-search').attr('action') + '?q=' + value;
      }
    }
  });






});


var ESC_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

function escapeHTML(s, forAttribute) {
    return s.replace(forAttribute ? /[&<>'"]/g : /[&<>]/g, function(c) {
        return ESC_MAP[c];
    });
}

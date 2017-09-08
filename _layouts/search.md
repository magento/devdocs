{% include header.html %}

<div class="search-results-header">
  <div id="search-input"></div>
</div>

<div class="search-results container">

  <div id="stats"></div>
  <div id="hits"></div>
  <div id="pagination"></div>

</div><!-- container -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/instantsearch.js/1/instantsearch.min.css">
<script src="https://cdn.jsdelivr.net/instantsearch.js/1/instantsearch.min.js"></script>

<script>

  app({
    appId: "{{ site.algolia.application_id }}",
    apiKey: "{{ site.algolia.api_key }}",
    indexName: "{{ site.algolia.index_name }}",
    urlSync: true
  });

  var switcher = document.getElementsByClassName('version-switcher')[0];
  var ver = switcher.dataset.version;

  function app(opts) {
    const search = instantsearch({
      appId: opts.appId,
      apiKey: opts.apiKey,
      indexName: opts.indexName,
      urlSync: true,
      searchParameters: {
        facetsRefinements: {
          version: ver,
        },
      },
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Search',
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 10,
        templates: {
          item: function ( item ) {
            return '<div class="hit"><h2 class="hit-name"><a href="' + item.url + '">' + item._highlightResult.title.value + '</a></h2><div class="hit-content">'+ item._highlightResult.text.value + '</div></div>';
          },
          empty: function ( query ) {
            return '<div id="no-results-message"><p>No results for the search <em>"' + query.query +'"</em>.</p></div>';
          },
        },
      })
    );

    search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats',
      })
    );


    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
        scrollTo: '#search-input',
      })
    );

    search.start();
  }

</script>



{% include footer.html %}

#
# This plugin generates a canonical_url parameter for each page implicitly.
# The parameter is available using Liquid script as 'page.canonical_url'.
# For pages in 'guides' of a version different from the default version specified
# in the _config.yml, the plugin substitutes version to the default version.
# For example: if 'page.url' is 'guides/v2.0/ftf/introduction.html',
# then 'page.canonical_url' for the page is 'guides/v2.3/ftf/introduction.html'.
# In all other cases, 'page.canonical_url' is the same as 'page.url'.
#
Jekyll::Hooks.register :pages, :post_init do |page|
  default_version = page.site.config['version']
  page_url = page.url
  data = page.data
  page_canonical_url =
    if page_url.start_with?(/\/guides/) && !page_url.include?(default_version)
      page_url.sub(/v2\.\d/, 'v2.3')
    else
      page_url
    end
  data['canonical_url'] = page_canonical_url
end

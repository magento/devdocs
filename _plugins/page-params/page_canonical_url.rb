# frozen_string_literal: true

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

#
# This plugin generates a canonical_url parameter for each page implicitly, unless
# canonical_url is set in front matter manually.
# The parameter is an absolute link that is intended to be used in layouts as
# a canonical link using Liquid as 'page.canonical_url'.
# For pages in 'guides' of a version different from the default version specified
# in the _config.yml, the plugin substitutes version to the default version.
# For example: if 'page.url' is '/guides/v2.3/ftf/introduction.html',
# then 'page.canonical_url' for the page is site.url + site.baseurl + '/guides/v2.4/ftf/introduction.html'.
# In all other cases, 'page.canonical_url' is site.url + site.baseurl + page.url'.
# The plugin is disabled in serving mode.
#
Jekyll::Hooks.register :pages, :post_init do |page|
  # Do nothing in serving mode
  next if page.site.config['serving']

  # Do nothing for redirects
  next if page.name == 'redirect.html'

  # Glossary. Create variables to be used in the script.
  site_url = page.site.config['url']
  site_baseurl = page.site.baseurl
  default_version = page.site.config['version']
  page_url = page.url
  data = page.data
  pattern_to_replace = %r{/guides/v2\.3}
  page_canonical_url = data['canonical_url']

  # Create the 'canonical_url' parameter and assign a value to it.
  if page_canonical_url.nil?
    relative_page_canonical_url =
      if page_url.start_with? pattern_to_replace
        page_url.sub pattern_to_replace, "/guides/v#{default_version}"
      else
        page_url
      end
    page_canonical_url = File.join site_url, site_baseurl, relative_page_canonical_url
    data['canonical_url'] = page_canonical_url
  end
end

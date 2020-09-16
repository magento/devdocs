# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

#
# This custom plugin dynamically sets the 'versions' parameter
# for a page at any '/guides/v<...>/' directory.
# The parameter is available as a liquid expression {{ page.versions }}.
# It stores an array of hashes like [ { 'name' => '2.1', 'url' = guides/v2.1/index.html }, { 'name' => '2.2', 'url' = guides/v2.2/index.html }, etc ].
# The parameter contains all available versions of the topic.
#
#
Jekyll::Hooks.register :pages, :pre_render do |page, config|
  # Process only files with 'md' and 'html' extensions
  next page unless File.extname(page.path).match?(/md|html/)

  #  Do nothing for redirects
  next page if page.name == 'redirect.html'

  # Process only pages that have URL starting with '/guides/v'
  filtering_pattern = '/guides/v'

  # Get all page objects at the site
  pages = page.site.pages

  # Select pages that do not have name 'redirect.html' and their URL
  # starts with '/guides/v'. Get 'url' of each page and store them as an array.
  urls_filtered_by_pattern =
    pages.select do |site_page|
      next if site_page.name == 'redirect.html'

      site_page.url.start_with? filtering_pattern
    end.map(&:url)

  url = page.url

  # Get the nonversion path from URL removing prefix 'guides/v<...>/'.
  versioned_prefix_pattern = %r{\A#{filtering_pattern}[^/]+}
  non_version_path = url.sub(versioned_prefix_pattern, '')

  # Define a regular expression to match all versions of a topic
  full_path_pattern = /#{versioned_prefix_pattern}#{non_version_path}\Z/

  # Get URLs for all versions of the topic
  versioned_urls =
    urls_filtered_by_pattern.select { |path| path.match full_path_pattern }

  # Define a regular expression to get a version number from URL
  # to the 'version_from_path' variable
  version_pattern = %r{\A#{filtering_pattern}(?<version_from_path>[^/]+)}

  # Get all versioned URLs of the topic into array of key-value pairs
  # like { 'name' => '2.0', 'url' => '/guides/v2.3/index.html' }
  versions =
    versioned_urls.map do |v_url|
      version_pattern.match(v_url)
      version = Regexp.last_match(:version_from_path)
      {
        'name' => version,
        'url' => v_url
      }
    end

  # Set the page.versions parameter to sorted array of key-value pairs
  # from 'versions'
  config['page']['versions'] = versions.sort_by { |version| version['name'] }
end

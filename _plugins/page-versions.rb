# frozen_string_literal: true

#
# This custom plugin dynamically sets the 'versions' parameter
# for page at 'guides/v2.x' directories.
# A value of the pararmeter is an array and is available as {{ page.versions }}.
# The parameter contains relative URLs of the topic in all versions where it exists.
#
Jekyll::Hooks.register :pages, :pre_render do |page, config|

  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)

  #  Do nothing for redirects
  next if page.name == 'redirect.html'

  # Process only pages that have URL starting with '/guides/v'
  filtering_pattern = '/guides/v'
  next unless page.url.start_with? filtering_pattern

  pages = page.site.pages

  urls_filtered_by_pattern =
    pages.select do |site_page|
      next if site_page.name == 'redirect.html'
      site_page.url.start_with? filtering_pattern
    end.map(&:url)

  url = page.url

  non_version_path = url.sub(%r{#{filtering_pattern}[^/]+}, '')

  versions = []

  versions += urls_filtered_by_pattern.select { |path| path.end_with? non_version_path }

  config['page']['versions'] = versions.sort
end

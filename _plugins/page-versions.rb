# frozen_string_literal: true

#
# This custom plugin dynamically sets the 'versions' parameter
# for page at 'guides/v2.x' directories.
# The pararmeter is available as a liquid expression {{ page.versions }}.
# It stores an array of hashes like [ { 'name' => '2.1', 'url' = guides/v2.1/index.html }, { 'name' => '2.2', 'url' = guides/v2.2/index.html }, etc ].
# The parameter contains only exisiting pages.
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

  version_urls = []

  version_urls += urls_filtered_by_pattern.select { |path| path.end_with? non_version_path }

  version_pattern = %r{\A#{filtering_pattern}(?<version_from_path>[^/]+)}

  versions =
    version_urls.map do |v_url|
      version_pattern.match(v_url)
      version = Regexp.last_match(:version_from_path)

      {
        'name' => version,
        'url' => v_url
      }
    end

  config['page']['versions'] = versions.sort_by { |version| version['name'] }
end

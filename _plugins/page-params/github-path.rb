# frozen_string_literal: true

#
# This custom plugin dynamically sets the 'github_path' parameter
# for each page except 'redirect.html' pages.
# A value of the parameter is available as {{ page.github_path }}.
# The parameter contains a file path relative to its repository.
#
Jekyll::Hooks.register :pages, :post_init do |page|
  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)
  # Do nothing for redirects
  next if page.name == 'redirect.html'

  dir = File.dirname page.path
  filename = File.basename page.path

  # Change to the parent directory of the page and read full file path
  # from git index.
  page.data['github_path'] =
    `cd #{dir} && git ls-files --full-name #{filename}`.strip
end

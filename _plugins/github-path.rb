# frozen_string_literal: true

#
# This custom plugin dynamically sets the 'last_modified_at' parameter
# for each page except 'redirect.html' pages.
# A value of the pararmeter is available as {{ page.last_modified_at }}.
# The parameter contains date and time of the last commit that changed
# the original file.
# For available date formats, refer to https://git-scm.com/docs/git-log#git-log---dateltformatgt
#
Jekyll::Hooks.register :pages, :post_init do |page|
  # Do nothing in serving mode
  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)
  # Do nothing for redirects
  next if page.name == 'redirect.html'

  dir = File.dirname page.path
  filename = File.basename page.path

  # Read date of the last committ and assign it to last_modified_at parameter
  # of the page.
  page.data['github_path'] =
    `cd #{dir} && git ls-files --full-name #{filename}`.strip
end

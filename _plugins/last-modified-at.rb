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
  next if page.site.config['serving']
  # Do nothing if the date is already set
  next if page.data['last_modified_at']
  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)
  # Do nothing for redirects
  next if page.name == 'redirect.html'

  real_filepath = File.realpath page.path

  dir = File.dirname real_filepath
  filename = File.basename real_filepath

  # Read date of the last committ and assign it to last_modified_at parameter
  # of the page.
  page.data['last_modified_at'] =
    `cd #{dir} && git log -1 --format=%cd --date=iso -- #{filename}`.strip
end

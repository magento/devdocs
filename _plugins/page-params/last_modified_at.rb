# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

#
# This custom plugin dynamically sets the 'last_modified_at' parameter
# for each page except 'redirect.html' pages.
# A value of the parameter is available as {{ page.last_modified_at }}.
# The parameter contains date and time of the last commit that changed
# the original file.
# For available date formats, refer to https://git-scm.com/docs/git-log#git-log---dateltformatgt
#
Jekyll::Hooks.register :pages, :post_init do |page|
  # Do nothing in serving mode
  next if page.site.config['serving']

  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)

  # Skip redirects
  next if page.name == 'redirect.html'

  # Skip pages where the parameter is already set
  next if page.data['last_modified_at']

  # Skip pages created by custom generators like 'mrg_pages'
  next if page.is_a? Jekyll::PageWithoutAFile

  # Add site.source to the page path
  file_path = File.join(page.site.source, page.path)

  # Get real path of the page. If this is a symlink read it to get path of the real file with content.
  real_filepath = File.realpath(file_path)

  # Get a full path of the directory where the page is stored
  dir = File.dirname(real_filepath)

  # Change directory to the parent directory of the page to read from the corresponding git history.
  Dir.chdir(dir) do
    # Read date of the last commit and assign it to last_modified_at parameter
    # of the page.
    page.data['last_modified_at'] = `git log -1 --format=%cd --date=iso -- #{page.name}`.strip
  end
end

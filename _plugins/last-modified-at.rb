#
# This custom plugin dynamically sets the 'last_modified_at' parameter
# for each page except 'redirect.html' pages.
# The parameter contains date and time of the last commit that changed the corresponding file.
# For available date formats, refer to https://git-scm.com/docs/git-log#git-log---dateltformatgt
#
Jekyll::Hooks.register :pages, :post_init do |page|
  # Do nothing in serving mode
  next if page.site.config['serving']

  # Do nothing for redirects
  next if page.name == 'redirect.html'

  # Create a page parameter 'last_modified_at' and assign a value to it
  page.data['last_modified_at'] =
    `git log -1 --format=%cd --date=iso -- #{page.path}`.strip
end

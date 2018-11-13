# The hook runs html-proofer with options defined in the
#  _checks/html-check-config.yml file
#
# For more details about html-proofer, refer to: https://github.com/gjtorikian/html-proofer
# For more details about Jekyll hooks, refer to: https://jekyllrb.com/docs/plugins/hooks/
#
require 'html-proofer'
require 'yaml'

Jekyll::Hooks.register :site, :post_write do |site|

  # If 'jekyll serve' has been run, read options for html-proofer
  # in '_config.checks.yml' and merge the 'url_ignore' list with 'excludes'
  # from Jekyll configurtiuon
  #
  if site.config['serving'] == true
    begin
      checks_config = YAML.load_file('_config.checks.yml')
      jekyll_excludes = site.config['exclude']
      jekyll_excludes_as_regex = jekyll_excludes.map { |item| /#{item}/ }
      checks_config['html-proofer'][:url_ignore].push(jekyll_excludes_as_regex).flatten!.uniq!
      options = checks_config['html-proofer']
      # Run html-proofer to check the jekyll destination directory
      HTMLProofer.check_directory(site.dest, options).run
    rescue
      puts
      puts 'Fix the broken links before you commit the changes.'.blue
    end
  end
end

# The hook runs html-proofer with options defined in the
#  _checks/html-check-config.yml file
#
# For more details about html-proofer, refer to: https://github.com/gjtorikian/html-proofer
# For more details about Jekyll hooks, refer to: https://jekyllrb.com/docs/plugins/hooks/
#
require 'html-proofer'
require 'yaml'

Jekyll::Hooks.register :site, :post_write do |site|
  # If 'jekyll serve' is run, read options for html-proofer
  # in '_config.checks.yml' and add 'excludes' from Jekyll configurtiuon
  # to the 'url_ignore' list if it exists.
  #
  if site.config['serving'] && site.config['check_links']
    begin
      checks_config = YAML.load_file('_config.checks.yml')
      url_ignore = checks_config.dig('html-proofer', :url_ignore)
      unless url_ignore.nil?
        jekyll_excludes = site.config['exclude']
        jekyll_excludes_as_regex = jekyll_excludes.map { |item| Regexp.new Regexp.escape(item) }
        url_ignore.push(jekyll_excludes_as_regex).flatten!.uniq!
        checks_config['html-proofer'][:url_ignore] = url_ignore
      end
      options = checks_config['html-proofer']
      # Run html-proofer to check the jekyll destination directory
      HTMLProofer.check_directory(site.dest, options).run
    rescue StandardError
      puts 'Fix the broken links before you push the changes to remote branch.'.blue
    end
  end
end

# The hook runs html-proofer with options defined in the
#  _checks/html-check-config.yml file
#
# For more details about html-proofer, refer to: https://github.com/gjtorikian/html-proofer
# For more details about Jekyll hooks, refer to: https://jekyllrb.com/docs/plugins/hooks/
#
require 'html-proofer'
require 'yaml'

Jekyll::Hooks.register :site, :post_write do |site|
  # Read configuration options for html-proofer
  def options
    YAML.load_file('_checks/html-check-config.yml')
  end
  # Run html-proofer to check the jekyll destination directory
  HTMLProofer.check_directory(site.dest, options).run
end

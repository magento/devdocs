# frozen_string_literal: true

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# To enable this plugin, add to your '_config.local.yml' the following:
#
# debug: site_pre_render
#
# This plugin runs an IRB session (https://github.com/ruby/irb) of a Jekyll application in a serving mode when it's at a state just before rendering the whole site.
# See the ":site, :pre_render" hook: https://jekyllrb.com/docs/plugins/hooks/
# Available objects to explore are 'site' and 'payload'.
#
# Several helpful methods (to use a method, chain to an object such as 'site.methods', 'payload.keys'):
# - '.methods.sort'
# - '.instance_variables.sort'
# - '.keys.sort'
#
# Examples:
#
# To view available configuration data of the site
# > payload.site.keys
#
# To view the number of pages:
# > payload.site.pages.count
#
# To find a page by path and view its data:
# > page = payload.site.pages.select { |page| page.path == 'cloud/env/variables-build.md' }[0]
# > page.data
#
# To exit from the IRB session:
# > exit!
#
Jekyll::Hooks.register :site, :pre_render do |site, payload|
  next unless page.site.config['serving']

  # rubocop:disable Lint/Debugger
  binding.irb if site.config['debug'] == 'site_pre_render'
  # rubocop:enable Lint/Debugger
end

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

# This plugin allows to fix an indexing issue, when 'guide_version' parameter
# does not appear in Algolia.
# For all topics within '/guides/v<...>/', the 'guide_version' parameter
# is explicitly added to 'page.data' from 'defaults' in '_config.yml'.
#
Jekyll::Hooks.register :pages, :pre_render do |page|
  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)

  #  Do nothing for redirects
  next if page.name == 'redirect.html'

  # Process only pages that have URL starting with '/guides/v'
  filtering_pattern = '/guides/v'

  next unless page.url.start_with? filtering_pattern

  page.data['guide_version'] = page.instance_variable_get('@defaults')['guide_version']
end

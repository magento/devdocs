# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

#
# For all topics outside '/guides/v<...>/', the 'page.versionless' parameter is set to true.
#
Jekyll::Hooks.register :pages, :post_init do |page|
  # Process only files with 'md' and 'html' extensions
  next unless File.extname(page.path).match?(/md|html/)

  #  Do nothing for redirects
  next if page.name == 'redirect.html'

  # Process only pages that have URL starting with '/guides/v'
  filtering_pattern = '/guides/v'

  next if page.url.start_with? filtering_pattern

  page.data['versionless'] = true
end

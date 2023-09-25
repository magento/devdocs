# Copyright 2023 Adobe
# All Rights Reserved.
#
# NOTICE: All information contained herein is, and remains
# the property of Adobe and its suppliers, if any. The intellectual
# and technical concepts contained herein are proprietary to Adobe
# and its suppliers and are protected by all applicable intellectual
# property laws, including trade secret and copyright laws.
# Dissemination of this information or reproduction of this material
# is strictly forbidden

# This plugin redirects 2.3 pages to the DevSite.
# It uses redirect metadata from the 2.4 version of the page.
# If there is no 2.4 version of the page, then it redirects to https://developer.adobe.com/commerce/docs/

# frozen_string_literal: true

Jekyll::Hooks.register :site, :post_read do |site|
  pages = site.pages

  pages.each do |page|
    # Skip pages where the parameter is already set
    next unless page.path.start_with? 'guides/v2.3/'

    # Process only files with 'md' and 'html' extensions
    next unless File.extname(page.path).match?(/md|html/)

    # Skip redirects
    next if page.name == 'redirect.html'

    # Skip pages where the parameter is already set
    next if page.data['redirect_to']

    path_23 = page.path

    path_24 = path_23.sub('v2.3', 'v2.4')
    puts 'path_24: ' + path_24

    page_24 = pages.find { |page| page.path == path_24 }

    if page_24.nil?
      page.data['redirect_to'] = 'https://developer.adobe.com/commerce/docs/'
    else
      page.data['redirect_to'] = page_24.data['redirect_to']
    end
  end
end

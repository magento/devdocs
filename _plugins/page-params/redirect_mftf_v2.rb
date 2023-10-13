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
    next unless page.path.start_with? 'mftf/v2'

    # Process only files with 'md' and 'html' extensions
    next unless File.extname(page.path).match?(/md/)

    page.data['redirect_to'] = "https://github.com/magento/magento2-functional-testing-framework/blob/2.x-develop/#{page.path.delete_prefix('mftf/v2/')}"
  end
end

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

# This plugin generates module-specific topics in the 'guides/v2.3/mrg'.
# It takes data from files in '_data/codebase/mrg' and generates
# a virtual .md page for it with the same name.
# The content in data is generated internally from
# modules' READMEs of magento2ce, magento2ee, magento2b2b repositories.
#

module Jekyll
  # Custom generator for MRG pages
  class Mrg2_3PageGenerator < Generator
    safe true

    def generate(site)
      # Make the site object available in any scope in this class.
      @site = site

      # Data from '_data/codebase/mrg' as a Hash where
      # the filename is a key and its content is a value.
      mrg_data = @site.data['codebase']['v2_3']['mrg']
      # Loop through the hash where a key is assigned to a 'mod' (module is a
      # special token in Ruby and should not be used) and value is assigned to
      # 'metadata'.
      # For example, for '_data/codebase/v2_3/mrg/NewModule.yml' that contains
      #
      #         title: Magento_NewModule
      #         edition: ce
      #         content: Magento_NewModule is an awesome module
      #
      # this will create a new virtual page guides/v2.3/mrg/ce/NewModule.md
      # that would correspond to:
      #         ---
      #         title: Magento_NewModule
      #         ---
      #         Magento_NewModule is an awesome module.
      #
      mrg_data.each do |category, modules|
        modules.each do |mod, metadata|
          # PageWithoutAFile handles processing files without reading it.
          # mrg_topic is a virtual '.md' file
          # See details in https://www.rubydoc.info/gems/jekyll/Jekyll/PageWithoutAFile
          # See tests in https://github.com/jekyll/jekyll/blob/master/test/test_page_without_a_file.rb
          mrg_topic = PageWithoutAFile.new(
            @site,
            @site.source,
            "guides/v2.3/mrg/#{category}",
            "#{mod}.md"
          )
          mrg_topic.content = metadata['content']
          mrg_topic.data['title'] = metadata['title']
          mrg_topic.data['last_modified_at'] = metadata['last_modified_at']
          mrg_topic.process("#{mod}.md")

          # Add the newly constructed page object to the rest of pages
          # on the site.
          @site.pages << mrg_topic
        end
      end
    end
  end
end

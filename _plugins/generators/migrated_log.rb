# frozen_string_literal: true

# Copyright © Adobe, Inc. All rights reserved.
# See COPYING.txt for license details.

# This plugin generates the page that contains a list of migrated topics.
#

module Jekyll
  # Custom generator for MRG pages
  class MigratedLog < Generator
    safe true

    def generate(site)
      # Make the site object available in any scope in this class.
      @site = site
      migrated_pages = @site.pages.filter { |page| page.data['layout'] == 'migrated' }

      url_prefix = site.config['url'] + site.config['baseurl']

      migrated_pages_data = []
      migrated_pages.each do |page|
        migrated_page = {
          path: page.path,
          title: page.data['title'],
          guide: @site.data['toc'][page.data['group']]['label'],
          migrated_from: url_prefix + page.url,
          migrated_to: page.data['migrated_to']
        }
        migrated_pages_data << migrated_page
      end

      migrated_pages_by_group = migrated_pages_data.group_by { |page| page[:guide] }

      content = "The folowing is the list of topics that have been migrated and will be redirected soon.\n\n"
      migrated_pages_by_group.each do |guide, topics|
        content += "\n## #{guide}\n\n\n"
        topics.sort_by { |topic| topic[:title] }
              .each do |topic|
          content += "1. [#{topic[:title]}](#{topic[:migrated_from]}) has moved to <#{topic[:migrated_to]}>\n"
        end
      end

      # PageWithoutAFile handles processing files without reading it.
      # 'migrated.md' is a virtual file that's been created during Jekyll run.
      # See details in https://www.rubydoc.info/gems/jekyll/Jekyll/PageWithoutAFile
      # See tests in https://github.com/jekyll/jekyll/blob/master/test/test_page_without_a_file.rb
      topic = PageWithoutAFile.new(
        @site,
        @site.source,
        '.',
        'migrated.md'
      )
      topic.content = content
      topic.data['title'] = 'Migrated topics'
      topic.data['layout'] = 'full-width'
      topic.data['github_link'] = false
      topic.data['feedback_link'] = false
      topic.process('migrated.md')

      # Add the newly constructed page object to the rest of pages
      # on the site.
      @site.pages << topic
    end
  end
end

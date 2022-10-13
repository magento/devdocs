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
      pages = @site.pages
      migrated_pages = pages.filter { |page| page.data['layout'] and page.data['layout'].include? 'migrated' }
      number_of_staying_pages = pages.count { |page| page.data['guide_version'] == '2.3' || page.data['group'].nil? }
      migrated_pages_data = []

      migrated_pages.each do |page|
        migrated_page = {
          path: page.path,
          title: page.data['title'] || abort("Error in '#{page.path}'.\n Check 'title' in the file's frontmatter.".red),
          guide: page.data['layout'].include?('video') ? 'Video Tutorials' : @site.data.dig('toc', page.data['group'],
                                'label') || abort("Error in '#{page.path}'.\n Check 'group' in the file's frontmatter or 'label' in the corresponding TOC.".red),
          migrated_from: site.baseurl + page.url,
          migrated_to: page.data['migrated_to'] || abort("Error in '#{page.path}'.\n Check 'migrated_to' in the file's frontmatter.".red),
          migrated_to_source: if page.data['migrated_to'].start_with?('https://experienceleague.adobe.com')
                                'Adobe Experience League'
                              elsif page.data['migrated_to'].start_with?('https://developer.adobe.com')
                                'Adobe Developer'
                              else
                                abort "Error in '#{page.path}'.\nThe 'migrated_to' parameter in the front matter points to the wrong domain: #{page.data['migrated_to']}.\nShould be 'https://experienceleague.adobe.com' or 'https://developer.adobe.com'".red
                              end
        }
        migrated_pages_data << migrated_page
      end

      migrated_pages_by_group = migrated_pages_data.group_by { |page| page[:guide] }.sort.to_h
      content = "The folowing #{migrated_pages.size} topics out of #{pages.size - number_of_staying_pages} have been migrated and will be redirected soon.\n\n"
      migrated_pages_by_group.each do |guide, topics|
        content += "\n## #{guide}\n\n\n"
        topics.sort_by { |topic| topic[:title] }
              .each do |topic|
          content += "1. [#{topic[:title]}](#{topic[:migrated_from]}) has moved to [#{topic[:migrated_to_source]}](#{topic[:migrated_to]})\n"
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
      pages << topic
    end
  end
end

# frozen_string_literal: true

# Copyright © Adobe, Inc. All rights reserved.
# See COPYING.txt for license details.

# This plugin generates the page that contains a list of migrated topics: https://devdocs.magento.com/migrated.html
# Also, it adds global data:
#   - site.data.migration.migrated_pages
#   - site.data.migration.deprecated_pages
#   - site.data.migration.all_migrating_pages
#   - site.data.migration.remained_migrating_pages
#

module Jekyll
  # Custom generator for MRG pages
  class MigratedLog < Generator
    safe true

    def generate(site)
      @site = site
      pages = @site.pages
      migrated_pages = pages.select { |page| page.data['layout']&.include? 'migrated' }
      v2_3_pages = pages.select { |page| page.data['guide_version'] == '2.3' }
      remained_pages = pages - v2_3_pages
      deprecated_pages = remained_pages.select { |page| page.data['group'].nil? || page.data['redirect_to'] }
      all_migrating_pages = remained_pages - deprecated_pages
      remained_migrating_pages = all_migrating_pages - migrated_pages
      migrated_pages_data = []

      # Create an array of JSON objects that contain metadata for migrated pages
      migrated_pages.each do |page|
        migrated_page = {
          path: page.path,
          title: page.data['title'] || abort("Error in '#{page.path}'.\n Check 'title' in the file's frontmatter.".red),
          guide: if page.data['layout'].include?('video')
                   'Video Tutorials'
                 else
                   @site.data.dig('toc', page.data['group'],
                                  'label') || abort("Error in '#{page.path}'.\n Check 'group' in the file's frontmatter or 'label' in the corresponding TOC.".red)
                 end,
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

      # Group migrated pages by guide
      migrated_pages_by_group = migrated_pages_data.group_by { |page| page[:guide] }.sort.to_h
      # Introductory text in the Migrated topics page
      content = "The folowing #{migrated_pages.size} topics out of #{all_migrating_pages.size} have been migrated and will be redirected soon.\n\n"
      migrated_pages_by_group.each do |guide, topics|
        content += "\n## #{guide}\n\n\n"
        topics.sort_by { |topic| topic[:title] }
              .each do |topic|
          content += "1. [#{topic[:title]}](#{topic[:migrated_from]}) has moved to [#{topic[:migrated_to_source]}](#{topic[:migrated_to]})\n"
        end
      end

      content += "\n***\n\n\n"
      content += "\n## Pages to be migrated\n\n\n"

      if remained_migrating_pages.empty?
        content += 'All 2.4 and versionless pages were migrated'
      else
        remained_migrating_pages.sort_by(&:path)
                                .each do |page|
          content += "1. `#{page.path}`\n"
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

      site.data['migration'] =
        {
          'migrated_pages' => migrated_pages.map(&:path),
          'deprecated_pages' => deprecated_pages.map(&:path),
          'all_migrating_pages' => all_migrating_pages.map(&:path),
          'remained_migrating_pages' => remained_migrating_pages.map(&:path)
        }

      migrated_pages_data
    end
  end
end

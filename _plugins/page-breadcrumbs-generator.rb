# Author: jcalcaben@magento.com
#
# This custom plugin is a short-term solution for generating breadcrumbs
#
#

module PageBreadcrumbsGenerator
  class Generator < Jekyll::Generator
    def generate(site)
      pages = site.pages
      for page in pages

        if(page.data['group'])
          breadcrumbs = getBreadcrumbs(site,page)
          page.data['breadcrumbs'] = breadcrumbs
        end

      end
    end

    def getBreadcrumbs(site, page)
      breadcrumbs = Array.new

      # Add landing page link. All books should have a landing page
      landingPage = getGuideLandingPage(site, page)
      if(landingPage)
          breadcrumbs.push({"url"=>convertToHtmlLink(landingPage.data['github_link']),"title"=>landingPage.data['landing-page']})
      end

      # Add subgroup parent. Some may not have a designated page.
#      if(page.data['subgroup'] && page.data['menu_node'] == nil)
#          parent = getSecondLevelParent(site, page)
#          if(parent)
#              breadcrumbs.push(getBreadcrumb(parent))
#          else
#              breadcrumbs.push({"url"=>convertToHtmlLink(page.data['github_link']),"title"=>page.data['subgroup']})
#          end
#      end

      # Add third-level parent. A page exists but most likely does not have content
#      if(page.data['level3_subgroup'] && page.data['level3_menu_node'] == 'level3child')
#          parent = getThirdLevelParent(site, page)
#          if(parent)
#              breadcrumbs.push({"url"=>convertToHtmlLink(page.data['github_link']),"title"=>parent.data['title']})
#          else
#              breadcrumbs.push({"url"=>convertToHtmlLink(page.data['github_link']),"title"=>page.data['level3_subgroup']})
#          end 
#      end

      # Add self entry
      breadcrumbs.push({"url"=>page.url,"title"=>page.data['title']})

      return breadcrumbs 
    end

    def getThirdLevelParent(site,page)
        parent = site.pages.select do |p|
            p.data['level3_menu_node'] == 'level3parent' && p.data['level3_subgroup'] == page.data['level3_subgroup'] && p.data['group'] == page.data['group']
        end
    
        if(parent.length && parent[0])
            return parent[0]
        end

        return nil 
    end

    def getSecondLevelParent(site, page)
        parent = site.pages.select do |p|
            p.data['menu_node'] == 'parent' && p.data['subgroup'] == page.data['subgroup'] && p.data['group'] == page.data['group']
        end
    
        if(parent.length && parent[0])
            return parent[0]
        end

        return nil 
    end

    def getGuideLandingPage(site, page)
        parent = site.pages.select do |p|
            p.data['landing-page'] != nil && p.data['group'] == page.data['group'] && p.data['group'] == page.data['group']
        end

        if(parent.length && parent[0])
            return parent[0]
        end

        return nil
    end

    def getBreadcrumb(page)
        link = convertToHtmlLink(page.data['github_link'])
        return {"url"=>link,"title"=>page.data['title']}
    end

    def convertToHtmlLink(githubLink)
      return githubLink.sub(".md",".html")
    end

  end
end

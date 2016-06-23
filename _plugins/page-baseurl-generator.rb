# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
# 
#

module PageBaseUrlGenerator
  class Generator < Jekyll::Generator
    def generate(site)
      pages = site.pages
      siteBaseUrl = site.baseurl
      for page in pages
        version = "2.1"

        destination = page.path
        matcher = /guides\/v([\d\.]+)\/.*/.match(destination)

        if(matcher != nil)
          version = matcher[1]
        end

        page.data['baseurl'] = "#{siteBaseUrl}guides/v#{version}/"
        page.data['version'] = version
      end
    end
  end
end

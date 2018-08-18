# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
#
#
module Jekyll
  # Extending the Generator class of the Jekyll module
  class PageBaseUrlGenerator < Generator

    def generate(site)
      pattern = %r{guides\/v(\d\.\d)}
      pages = site.pages
      baseurl = site.baseurl
      pages.each do |page|
        matcher = pattern.match(page.path)
        version = if matcher
                    matcher[1]
                  else
                    ''
                  end
        page.data['baseurl'] = unless version.empty?
                                 "#{baseurl}/guides/v#{version}"
                               else
                                 baseurl
                               end
        page.data['guide_version'] = version
      end
    end
  end
end

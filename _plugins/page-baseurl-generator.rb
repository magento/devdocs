# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
#
#
module Jekyll
  # Extending the Generator class of the Jekyll module
  class PageBaseUrlGenerator < Generator
    VERSION = '2.2'.freeze
    PATTERN = %r{guides\/v(\d\.\d)}

    def generate(site)
      pages = site.pages
      baseurl = site.baseurl
      pages.each do |page|
        matcher = PATTERN.match(page.path)
        version = if matcher
                    matcher[1]
                  else
                    VERSION
                  end
        page.data['baseurl'] = "#{baseurl}/guides/v#{version}"
        page.data['guide_version'] = version
      end

      videos = site.collections['videos'].docs
      videos.each do |video|
        video.data['baseurl'] = "#{baseurl}/guides/v#{VERSION}"
        video.data['guide_version'] = VERSION
      end
    end
  end
end

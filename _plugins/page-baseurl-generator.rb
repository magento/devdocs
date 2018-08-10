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
      config_version = site.config['version']
      pages = site.pages
      baseurl = site.baseurl
      pages.each do |page|
        matcher = pattern.match(page.path)
        version = if matcher
                    matcher[1]
                  else
                    config_version
                  end
        page.data['baseurl'] = "#{baseurl}/guides/v#{version}"
        page.data['guide_version'] = version
      end

      videos = site.collections['videos'].docs
      videos.each do |video|
        video.data['baseurl'] = "#{baseurl}/guides/v#{config_version}"
        video.data['guide_version'] = config_version
      end
    end
  end
end

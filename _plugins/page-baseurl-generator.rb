# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
#
#
module Jekyll
  # The class generates page.baseurl as "{site.baseurl}/guides/v#{version}".
  # The {version} is taken from the 'guide_version' front matter parameter on the page;
  # if it is not set, then the generator takes it from the path of the page (for example, "2.2" in the "guides/v2.2");
  # if the path doesn't contain "guides/vx.x", then the version is unset (returns nil object, same as null)
  class PageBaseUrlGenerator < Generator
    def generate(site)
      pattern = %r{guides\/v(\d\.\d)}
      pages = site.pages
      baseurl = site.baseurl
      pages.each do |page|
        matcher = pattern.match(page.path)
        version =
          if page.data['guide_version']
            page.data['guide_version']
          elsif matcher
            matcher[1]
          end
        page.data['baseurl'] = if version
                                 "#{baseurl}/guides/v#{version}"
                               else
                                 baseurl
                               end
        page.data['guide_version'] = version
      end
    end
  end
end

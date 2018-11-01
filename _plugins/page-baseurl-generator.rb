# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
#
#
module Jekyll
  # The hook introduces the page.baseurl and page.guide_version data parameters for each page.
  # For pages at guides/v2.x the page.baseurl parameter is set as "{site.baseurl}/guides/v#{version}".
  # The {version} is taken from the 'guide_version' front matter parameter on the page;
  # if it is not set, then the 'guide_version' is set to version from the page path (for example, "2.2" in the "guides/v2.2/**/*.md");
  # if the path doesn't contain "guides/v2.x", then the version is unset and returns the nil object (same as null)
  Jekyll::Hooks.register :site, :pre_render do |site|
    pattern = %r{\Aguides/v(?<version_from_path>2\.\d)}
    baseurl = site.baseurl
    site.pages.each do |page|
      version = page.data['guide_version']
      unless version
        pattern.match(page.path)
        version = Regexp.last_match(:version_from_path)
        page.data['guide_version'] = version
      end
      page.data['baseurl'] =
        if version
          "#{baseurl}/guides/v#{version}"
        else
          baseurl
        end
    end
  end
end

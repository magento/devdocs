# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
#
# The hook introduces the page.baseurl and
# page.guide_version data parameters for each page.
# For pages at guides/v2.x the page.baseurl parameter is set
# as "{site.baseurl}/guides/v#{version}".
# The {version} is taken from the 'guide_version' front matter parameter on the page;
# if it is not set, then the 'guide_version' is set to version from the page path (for example, "2.2" in the "guides/v2.2/**/*.md");
# if the path doesn't contain "guides/v2.x", then the version is unset and returns the nil object (same as null)
Jekyll::Hooks.register :pages, :post_init do |page|
  # Glossary. Create and assign variables to be used in the script.
  pattern = %r{\Aguides/v(?<version_from_path>2\.\d)}
  baseurl = page.site.baseurl
  path = page.path
  data = page.data
  version = data['guide_version']

  # Process 'page.guide_version' pararmeter
  if version.nil? && path.start_with?('guides')
    pattern.match(path)
    version = Regexp.last_match(:version_from_path)
    data['guide_version'] = version
  end

  # Process 'page.baseurl' parameter
  data['baseurl'] =
    if version
      "#{baseurl}/guides/v#{version}"
    else
      baseurl
    end
end

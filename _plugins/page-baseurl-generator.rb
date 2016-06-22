module PageBaseUrlGenerator
  class Generator < Jekyll::Generator
    def generate(site)
      pages = site.pages
      siteBaseUrl = site.baseurl
      version = "2.1"
      for page in pages
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

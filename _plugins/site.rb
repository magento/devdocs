module Jekyll

  # Extensions to the Jekyll Site class.

  class Site

    # Regular expression by which blog posts are recognized
    GUIDE_PAGE_RE = /\/guides/

    # Find my blog posts among all the pages.
    def guides
        self.pages.select {|p| p.full_url =~ GUIDE_PAGE_RE}
    end
    
    
    # Add some custom options to the site payload, accessible via the
    # "site" variable within templates.
    #
    # articles - blog articles, in reverse chronological order
    # max_recent - maximum number of recent articles to display
    alias orig_site_payload site_payload
    def site_payload
        h = orig_site_payload
        payload = h["site"]
        payload["articles"] = guides 
        #payload["max_recent"] = payload.fetch("max_recent", 15)
        h["site"] = payload
        h
    end
    
  end
end
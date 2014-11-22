module Jekyll

  # Extensions to the Jekyll Page class.

  class Page

    # Full URL of the page.
    def full_url
        File.join(@dir, self.url)
    end

    
  end
end
module Jekyll
    ## Run Jekyll
    def jekyll(options)
        sh "bundle exec jekyll #{options}"
    end

    ## Jekyll preview
    def preview(options = '')
        jekyll('serve -I -o ' + options)
    end

    ## Include local config to preview
    def preview_local
        preview('--config _config.yml,_config.local.yml')
    end
end
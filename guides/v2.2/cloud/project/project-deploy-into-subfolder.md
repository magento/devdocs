---
group: cloud-guide
title: Deploy Magento into sub-folder
functional_areas:
  - Cloud
  - Configuration
  - Setup 
---

Use the following example of configuration if you deploy Magento in the not a root folder but in a subfolder - for example to `magento_src`:

```
docs
docker
config
magento_src
   app
   bin
```

```yaml
web:
    locations:
        "/":
            # The public directory of the app, relative to its root.
            root: "magento_src/pub"
            # The front-controller script to send non-static requests to.
            passthru: "/index.php"
            index:
                - index.php
            expires: -1
            scripts: true
            allow: false
            rules:
                \.(css|js|map|hbs|gif|jpe?g|png|tiff|wbmp|ico|jng|bmp|svgz|midi?|mp?ga|mp2|mp3|m4a|ra|weba|3gpp?|mp4|mpe?g|mpe|ogv|mov|webm|flv|mng|asx|asf|wmv|avi|ogx|swf|jar|ttf|eot|woff|otf|html?)$:
                    allow: true
                ^/sitemap(.*)\.xml$:
                    passthru: "/media/sitemap$1.xml"
        "/media":
            root: "magento_src/pub/media"
            allow: true
            scripts: false
            expires: 1y
            passthru: "/get.php"
        "/static":
            root: "magento_src/pub/static"
            allow: true
            scripts: false
            expires: 1y
            passthru: "/front-static.php"
            rules:
                ^/static/version\d+/(?<resource>.*)$:
                    passthru: "/static/$resource"

# The mounts that will be performed when the package is deployed.
mounts:
    "magento_src/var": "shared:files/var"
    "magento_src/app/etc": "shared:files/etc"
    "magento_src/pub/media": "shared:files/media"
    "magento_src/pub/static": "shared:files/static"
    
hooks:
    # We run build hooks before your application has been packaged.
    build: |
        set -e
        php ./magento_src/vendor/bin/ece-tools build:generate
        php ./magento_src/vendor/bin/ece-tools build:transfer
    # We run deploy hook after your application has been deployed and started.
    deploy: |
        php ./magento_src/vendor/bin/ece-tools deploy
    # We run post deploy hook to clean and warm the cache. Available with ECE-Tools 2002.0.10.
    post_deploy: |
        php ./magento_src/vendor/bin/ece-tools post-deploy

# Default Magento 2 cron jobs
crons:
    cronrun:
        spec: "* * * * *"
        cmd: "php magento_src/bin/magento cron:run"
```

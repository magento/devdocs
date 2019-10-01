---
group: configuration-guide
title: .gitignore reference
functional_areas:
  - Configuration
  - System
  - Setup
---

This reference shows suggested `.gitignore` files to use in a development system and in a build or production system.

## .gitignore for development
We recommend you use the `.gitignore` provided with Magento in a development system with the following changes&mdash;comment out the following so they are included in source control:

*	`pub/media/*`
*	`pub/media/wysiwyg/*.*`

{% collapsible Show `.gitignore` for development %}

<pre>/.buildpath
/.cache
/.metadata
/.project
/.settings
atlassian*
/nbproject
/sitemap
/sitemap.xml
/.idea
/.gitattributes
/app/config_sandbox
/app/etc/env.php
/app/code/Magento/TestModule*
/lib/internal/flex/uploader/.actionScriptProperties
/lib/internal/flex/uploader/.flexProperties
/lib/internal/flex/uploader/.project
/lib/internal/flex/uploader/.settings
/lib/internal/flex/varien/.actionScriptProperties
/lib/internal/flex/varien/.flexLibProperties
/lib/internal/flex/varien/.project
/lib/internal/flex/varien/.settings
/node_modules
/.grunt
/Gruntfile.js
/package.json
/.php_cs
/.php_cs.cache
/grunt-config.json
/dev/tools/grunt/configs/local-themes.js

# /pub/media/*.*
!/pub/media/.htaccess
/pub/media/attribute/*
!/pub/media/attribute/.htaccess
/pub/media/analytics/*
/pub/media/catalog/*
!/pub/media/catalog/.htaccess
/pub/media/customer/*
!/pub/media/customer/.htaccess
/pub/media/downloadable/*
!/pub/media/downloadable/.htaccess
/pub/media/import/*
!/pub/media/import/.htaccess
/pub/media/theme/*
/pub/media/theme_customization/*
!/pub/media/theme_customization/.htaccess
# /pub/media/wysiwyg/*
!/pub/media/wysiwyg/.htaccess
/pub/media/tmp/*
!/pub/media/tmp/.htaccess
/pub/media/captcha/*
/pub/static/*
!/pub/static/.htaccess

/var/*
!/var/.htaccess
/vendor/*
!/vendor/.htaccess
/generated/*
!/generated/.htaccess
</pre>

{% endcollapsible %}

For reference, here is a [link to the latest Magento `.gitignore`](https://raw.githubusercontent.com/magento/magento2/2.2/.gitignore)

## .gitignore for build and production
You should use the same `.gitignore` in both your build and production systems so they have the same files in source control.

Changes compared to the default `.gitignore`:

*	The `/pub/media/*.*` directory is included in source control
*	The `/pub/media/wysiwyg` directory is included in source control
*	The `/pub/static/*.*` directory is included in source control
*	The `/generated` directory and subdirectories are included in source control

{% collapsible Show .gitignore for build and production %}

<pre>/.buildpath
/.cache
/.metadata
/.project
/.settings
atlassian*
/nbproject
/sitemap
/sitemap.xml
/.idea
/.gitattributes
/app/config_sandbox
/app/etc/env.php
/app/code/Magento/TestModule*
/lib/internal/flex/uploader/.actionScriptProperties
/lib/internal/flex/uploader/.flexProperties
/lib/internal/flex/uploader/.project
/lib/internal/flex/uploader/.settings
/lib/internal/flex/varien/.actionScriptProperties
/lib/internal/flex/varien/.flexLibProperties
/lib/internal/flex/varien/.project
/lib/internal/flex/varien/.settings
/node_modules
/.grunt
/Gruntfile.js
/package.json
/.php_cs
/.php_cs.cache
/grunt-config.json
/dev/tools/grunt/configs/local-themes.js

# /pub/media/*.*
!/pub/media/.htaccess
/pub/media/attribute/*
!/pub/media/attribute/.htaccess
/pub/media/analytics/*
/pub/media/catalog/*
!/pub/media/catalog/.htaccess
/pub/media/customer/*
!/pub/media/customer/.htaccess
/pub/media/downloadable/*
!/pub/media/downloadable/.htaccess
/pub/media/import/*
!/pub/media/import/.htaccess
/pub/media/theme/*
/pub/media/theme_customization/*
!/pub/media/theme_customization/.htaccess
# /pub/media/wysiwyg/*
!/pub/media/wysiwyg/.htaccess
/pub/media/tmp/*
!/pub/media/tmp/.htaccess
/pub/media/captcha/*
# /pub/static/*
!/pub/static/.htaccess

/var/*
!/var/.htaccess
/vendor/*
!/vendor/.htaccess
# /generated/*
!/generated/.htaccess</pre>

{% endcollapsible %}

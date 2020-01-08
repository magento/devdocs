---
group: frontend-developer-guide
title: Theme development workflow
functional_areas:
  - Frontend
  - Theme
---

Continue From:
**Install Magento:**

### Enable development mode

In the Magento root directory, run:

```php
bin/magento deploy:mode:set developer
```

See:

*  [About Magento modes]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html)
*  [Get started with command-line configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands.html)

{:.bs-callout-tip}
To check the current mode of your Magento instance, in the root directory, run: `bin/magento deploy:mode:show`.

### Create basic theme files

In the `<magento_root>/app/design/frontend/<Your_Vendor>/<your_theme>` directory, create the following files:

*  `theme.xml`
*  `registration.php`
*  (optionally) `composer.json`

For details, see [Create a new storefront theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html)

### Apply the theme

1. In the Admin Panel, go to **CONTENT** > **Design** > **Configuration**
1. Find the record corresponding to your store view and click **Edit**.
1. In the **Applied Theme** drop-down, select your newly created theme.
1. Click **Save Configuration**.

For details, see [Apply and configure a storefront theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html)

### Choose .less compilation mode

#### Grunt (recommended)

*  [Setup Grunt]({{ page.baseurl }}/frontend-dev-guide/tools/using_grunt.html)
*  [Add the theme to Grunt configuration]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#add_theme)
*  [Track changes]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#grunt_commands)

#### Client-side compilation

See [CSS preprocessing#client-side compilation mode]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#client-side)

#### Server-side compilation (default)

See [CSS preprocessing#server-side compilation mode]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#server-side)

#### Custom preprocessor

See [Using custom CSS preprocessor]({{ page.baseurl }}/frontend-dev-guide/css-topics/custom-preprocess-parent.html)

### Create your styles

See:

*  [Quick start guide to working with styles]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_overview.html)
*  [All about styles in Magento themes]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-overview.html)

### Debug

See:

*  [Locate the CSS/Less file you need to change]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html)
*  [CSS source maps]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#source_maps)
*  [Track changes using Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#use_cases)

### Clean cache and/or static files if necessary

*  Certain changes in styles require cleaning previously pre-processed and published static view files. Run `grunt clean <theme>` or manually clear the `pub/static` and `var/view_preprocessed` directories. Do this after any changes in server-side compilation mode. For the client-side or Grunt compilation, see [Clean static files]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_exception) for details.

*  Changes in layout and templates requires cleaning cache. See [Clean cache]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_cache) for details.

### Make sure that the same styles are delivered to production (optional)

When you finish developing and your styles are ready to go to production, you can configure your Grunt/Gulp less compiler to minify compiled code, disable source maps generation and then copy the compiled files to `/app/design/frontend/<Vendor>/<theme>/web/css` directory next to source files. They will be used in static content deploy instead of running backend compilation (and static content deployment process will run faster).

### Switch to production mode

In the Magento root directory, run:

```php
bin/magento deploy:mode:set production
```

See [Magento modes]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode) for details.

### Deploy static content

To publish your static files to the `pub/static` directory when your Magento instance is set to production mode, [run the static content deployment tool]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html).

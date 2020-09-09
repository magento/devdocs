---
group: frontend-developer-guide
title: JavaScript Bundling
functional_areas:
  - Frontend
  - Theme
---
JavaScript bundling is an optimization technique you can use to reduce the number of server requests for JavaScript files.
Bundling accomplishes this by merging multiple JavaScript files together into one file to reduce the number of page requests.

## Enable JavaScript bundling

 {:.bs-callout-info}
JavaScript bundling does not work unless Magento is in [production mode][production-mode]. Once in production mode, JavaScript bundling can only be enabled using the CLI. Follow these steps to setup JavaScript bundling from the CLI.

1. From the Magento root directory, switch to production mode:

   ```bash
   bin/magento deploy:mode:set production
   ```

1. Enable JavaScript bundling:

   ```bash
   bin/magento config:set dev/js/enable_js_bundling 1
   ```

1. Optimize bundling by minifying JavaScript files:

   ```bash
   bin/magento config:set dev/js/minify_files 1
   ```

1. Enable cache busting on static file URLs. This ensures users get the latest version of the assets anytime they update:

   ```bash
   bin/magento config:set dev/static/sign 1
   ```

1. To configure JavaScript bundling, you must disable Javascript file merging. Bundling will not work as the merging of files excludes bundling:

   ```bash
   bin/magento config:set dev/js/merge_files 0
   ```

1. Modifying the settings above when Magento is in production mode will require [static view files deployment][static-content]:

   ```bash
   bin/magento setup:static-content:deploy
   ```

1. Finally, clear the cache:

   ```bash
   bin/magento cache:clean config
   ```

   For example, when `Sign Static Files` is disabled (which is the default: `config:set dev/static/sign 0`), the URL to a static file might look like this: `/static/frontend/Magento/luma/en_US/mage/dataPost.js`. But when you enable the setting (`config:set dev/static/sign 1`), the same URL might look something like this: `static/version40s2f9ef/frontend/Magento/luma/en_US/mage/dataPost.js`, with a version number added as shown. The next time this file is updated (with `bin/magento setup:static-content:deploy`), a new version will be generated, causing the browser to download a new file from the server, thus busting the browser's cache.

## How bundling works in Magento

When you enable bundling, Magento combines hundreds of JavaScript files into just a few JavaScript bundles and downloads those bundles for each page. Because the browser downloads the bundles synchronously, page rendering is blocked until all bundles finish downloading. But the time saved from reducing server requests from hundreds to just a few, usually offsets the cost of downloading the bundles synchronously.

### Excluding files

The `<exclude>` node in the `etc/view.xml` file for a theme specifies the files to exclude from the Magento JavaScript bundling process.
JavaScript files excluded from bundling are loaded asynchronously by RequireJS as needed.

As such, you should exclude the JavaScript files you use for testing or development so that they are not loaded on every page.

The following code snippet from [Magento's Luma theme][luma-view-xml] shows the types of files you should exclude from the bundling process.

{% collapsible Show example %}

```xml
<exclude>
    <item type="file">Lib::jquery/jquery.min.js</item>
    <item type="file">Lib::jquery/jquery-ui-1.9.2.js</item>
    <item type="file">Lib::jquery/jquery.ba-hashchange.min.js</item>
    <item type="file">Lib::jquery/jquery.details.js</item>
    <item type="file">Lib::jquery/jquery.details.min.js</item>
    <item type="file">Lib::jquery/jquery.hoverIntent.js</item>
    <item type="file">Lib::jquery/colorpicker/js/colorpicker.js</item>
    <item type="file">Lib::requirejs/require.js</item>
    <item type="file">Lib::requirejs/text.js</item>
    <item type="file">Lib::date-format-normalizer.js</item>
    <item type="file">Lib::legacy-build.min.js</item>
    <item type="file">Lib::mage/captcha.js</item>
    <item type="file">Lib::mage/dropdown_old.js</item>
    <item type="file">Lib::mage/list.js</item>
    <item type="file">Lib::mage/loader_old.js</item>
    <item type="file">Lib::mage/webapi.js</item>
    <item type="file">Lib::mage/zoom.js</item>
    <item type="file">Lib::mage/translate-inline-vde.js</item>
    <item type="file">Lib::mage/requirejs/mixins.js</item>
    <item type="file">Lib::mage/requirejs/static.js</item>
    <item type="file">Magento_Customer::js/zxcvbn.js</item>
    <item type="file">Magento_Catalog::js/zoom.js</item>
    <item type="file">Magento_Ui::js/lib/step-wizard.js</item>
    <item type="file">Magento_Ui::js/form/element/ui-select.js</item>
    <item type="file">Magento_Ui::js/form/element/file-uploader.js</item>
    <item type="file">Magento_Ui::js/form/components/insert.js</item>
    <item type="file">Magento_Ui::js/form/components/insert-listing.js</item>
    <item type="directory">Magento_Ui::js/timeline</item>
    <item type="directory">Magento_Ui::js/grid</item>
    <item type="directory">Magento_Ui::js/dynamic-rows</item>
    <item type="directory">Magento_Ui::templates/timeline</item>
    <item type="directory">Magento_Ui::templates/grid</item>
    <item type="directory">Magento_Ui::templates/dynamic-rows</item>
    <item type="directory">Magento_Swagger::swagger-ui</item>
    <item type="directory">Lib::modernizr</item>
    <item type="directory">Lib::tiny_mce</item>
    <item type="directory">Lib::varien</item>
    <item type="directory">Lib::jquery/editableMultiselect</item>
    <item type="directory">Lib::jquery/jstree</item>
    <item type="directory">Lib::jquery/fileUploader</item>
    <item type="directory">Lib::css</item>
    <item type="directory">Lib::lib</item>
    <item type="directory">Lib::extjs</item>
    <item type="directory">Lib::prototype</item>
    <item type="directory">Lib::scriptaculous</item>
    <item type="directory">Lib::less</item>
    <item type="directory">Lib::mage/adminhtml</item>
    <item type="directory">Lib::mage/backend</item>
</exclude>
```

{% endcollapsible %}

### Setting bundle file size

The `bundle_size` variable controls the file size of the generated bundles.
Specifying a large `bundle_size` reduces the number of bundles generated, but generates larger file sizes.
Specifying a smaller `bundle_size` generates more bundles with a smaller file sizes.

Example:

```xml
<vars module="Js_Bundle">
    <var name="bundle_size">1MB</var>
</vars>
```

The goal is to balance the number of bundles to download with the size of each bundle.
As a rule of thumb, each bundle should be at least 100 kB.

## Fine tuning your theme

There are many ways to tune your theme using the `etc/view.xml` file.

For example, the Magento Luma theme is configured to work well for all pages, but you can maximize browser performance for home, catalog, or product pages by adding items to or removing items from the `<exclude>` node.

Follow these steps to help you identify which JavaScript files to bundle for your theme:

1. Create a blank page with the layouts you would like to tune.
1. Compare the JavaScript files loaded in the pages with the JavaScript files in Magento.
1. Use the results of that comparison to build your exclude list.

[production-mode]:{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode
[static-content]:{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html
[Advanced-JavaScript-Bundling]:{{ page.baseurl }}/performance-best-practices/advanced-js-bundling.html
[luma-view-xml]:{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/luma/etc/view.xml#L270

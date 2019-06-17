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

Magento must be set to [production mode] in order for bundling to work.

To activate JavaScript bundling:

1. Log in to the Admin area 
2. Navigate to `Stores -> Configuration -> Advanced -> Developer -> JavaScript Settings` 
3. Set `Enable JavaScript Bundling` to `Yes`.

To optimize bundling, set the following settings to `Yes`:

* `JavaScript Settings -> Minify JavaScript Files`
* `Static Files Settings -> Sign Static Files`

## How bundling works in Magento

By default, Magento bundles all JavaScript files and loads them synchronously on every page load.
This means that each bundle is loaded one after the other and causes delays for JavaScript behaviors on a page.

### Excluding files

The `<exclude>` entry in a theme's `etc/view.xml` file tells Magento which files it should not bundle.
JavaScript files excluded from bundling are loaded asynchronously by RequireJS as needed.

Do not bundle JavaScript files used for testing or development because these will get loaded on every page.  

The following code snippet from [Magento's Luma theme][luma-view-xml] shows the types of files you should exclude in your theme.

{% collapsible Show example %}

```xml
<vars module="Js_Bundle">
    <var name="bundle_size">1MB</var>
</vars>
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

The `bundle_size` entry controls the file size of the generated bundles.
Setting this to a large number will reduce the number of bundles generated, but the file sizes will be big.
A small number will increase the number of bundles generated, but the file sizes will be smaller.

You want to balance the number of files to download on a page with the size of the data.
A single connection should be around 100kb.

## Fine tuning your theme

There are many ways to tune your theme's `etc/view.xml` file.  

For example, Magento's Luma theme is configured to work well for all pages, but 
by adding or removing items inside `exclude`, you can maximize browser performance for home, catalog, or product pages.

Follow these steps to help you identify which JavaScript files to bundle for your theme:

1. Create a blank page with the layouts you would like to tune.
2. Compare the JavaScript files loaded in the pages with the JavaScript files in Magento.
3. Use the results of that comparison to build your exclude list.

[production-mode]:{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode
[luma-view-xml]:{{ site.mage2bloburl }}/2.2.3/app/design/frontend/Magento/luma/etc/view.xml#L270

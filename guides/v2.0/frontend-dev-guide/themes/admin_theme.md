---
layout: default  
group: fedg 
subgroup: A_Themes
title: Apply a custom Admin theme
menu_title: Apply a custom Admin theme
menu_order: 9
github_link: frontend-dev-guide/themes/admin_theme_apply.md
---
<h2 id="favicon-intro">What's in this topic</h2>

This topic describes how to apply your custom theme for Magento Admin.

**Contents**

* TOC
{:toc}

## Prerequisites 

1. [Set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). The application mode influences the way static files are cached by Magento. 
2. [Create a custom theme for the Admin panel]({{site.gdeurl}}frontend-dev-guide/themes/admin_theme_create.html). 
3. [Add a new custom module]({{site.gdeurl}}extension-dev-guide/build/build.html) or decide to use existing custom module. The module must load after the Magento_Theme module. To ensure this, add the following code in `<your_custom_module_dir>/etc/module.xml`:
{%highlight xml%}
    <module name="%YourVendor_YourModule%" setup_version="2.0.1">
        <sequence>
            <module name="Magento_Theme"/>
        </sequence>
    </module>
{%endhighlight%}

<div class="bs-callout bs-callout-info" id="info">
 <p>If you choose to create a separate dedicated module, you can use the [sample minimal module from the Magento 2 sample modules repository](https://github.com/magento/magento2-samples/tree/master/sample-module-minimal) as example of a minimal module you need. If you will copy and use sample-module-minimal, do not forget to enter your vendor and module naming, instead the ones used in the sample, in the `<your_module_dir>/etc/module.xml`, `<your_module_dir>/registration.php`, and `<your_module_dir>/composer.json` files .</p>
<p>If you decide to use the existing module, keep in mind, that theme declaring might be affected when the module is changed.</p>
</div>

## Apply a custom theme in admin: Overview

To apply the Admin theme, take the following steps:

2. [Specify the new Admin theme in your module's `di.xml`](#specify_di)
3. Update the components by running the [`magento setup:upgrade`]({{site.gdeurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-keep) command.
4. Open the Admin in browser and view the new theme applied.

Each step is described further with more details.

## Specify the custom Admin theme in `di.xml` {#specify_di}

You need to specify the admin theme to be used in the `<your_module_dir>/etc/di.xml` file. Add it, if the file does not yet exist in your module. Check with 

In `<your_module_dir>/etc/di.xml` add the following (replace the placeholders with the vendor name and theme code of your Admin theme):

{%highlight xml%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">

    <!-- Admin theme. Start -->
    <type name="Magento\Theme\Model\View\Design">
        <arguments>
             <argument name="themes" xsi:type="array">
                 <item name="adminhtml" xsi:type="string">%your_vendor_dir%/%your_theme_dir%</item>
             </argument>
         </arguments> 
    </type>
    <!-- Admin theme. End -->
</config>
{%endhighlight%}

## Update components to actually apply the Admin theme

For your changes to take effect, you need to update Magento components. For this, 
run the `bin/magento setup:upgrade` command in your command line. If prompted, also run `bin/magento setup:di:compile`.


For details about performing command line tasks, view the following topics:
- [Command line configuration]({{site.gdeurl}}config-guide/cli/config-cli.html)
- [Uninstall or reinstall Magento: Optionally keeping generated files]({{site.gdeurl}}install-gde/install/cli/install-cli-subcommands-db-upgr.html)

## Open Admin in browser

The last step is to open the Admin in browser and view the new theme applied.


## See also

 * [Uninstall a theme]({{site.gdeurl}}install-gde/install/cli/install-cli-theme-uninstall.html)




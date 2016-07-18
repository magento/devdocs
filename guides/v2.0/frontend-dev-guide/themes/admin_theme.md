---
layout: default  
group: fedg 
subgroup: A_Themes
title: Apply a custom Admin theme
menu_title: Apply a custom Admin theme
menu_order: 9
github_link: frontend-dev-guide/themes/admin_theme.md
---
<h2 id="favicon-intro">What's in this topic</h2>

This topic describes how to apply your custom theme for Magento Admin.

**Contents**

* TOC
{:toc}

## Prerequisites 

1. [Set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). The application mode influences the way static files are cached by Magento. 
2. Create a custom theme for the Admin panel. 

## Apply a custom theme in admin: Overview


To apply the Admin theme, you need to take the following steps:

1. Add a new custom module. Or you can use a custom module added for other purposes.
2. Declare the new admin theme in your module's `di.xml`
3. Update the components by running the [`magento setup:upgrade`]({{site.gdeurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-keep) command.

## Add a new module

You can omit this step, if you has already created a custom module for other purposes. Though you need to keep in mind, that theme declaring might be affected when the module is changed.

If you choose to create a separate dedicated module, you can use the [sample minimal module from the Magento 2 sample modules repository](https://github.com/magento/magento2-samples/tree/master/sample-module-minimal). In this case you need to change the vendor and module naming, and specify it in the `<your_module_dir>/etc/module.xml` and `<your_module_dir>/registration.php` files instead the ones used in the sample.

Also, in your `<your_module_dir>/etc/module.xml` specify that the Magento_Theme module loads before your module by adding:

{%highlight xml%}
    <module name="%YourVendor_YourModule%" setup_version="2.0.1">
        <sequence>
            <module name="Magento_Theme"/>
        </sequence>
    </module>
{%endhighlight%}

## Declare the custom Admin theme

The admin theme to be used in declared in the `<your_module_dir>/etc/di.xml` file. Add it, if the file does not yet exist in your module. Check with 

In `<your_module_dir>/etc/di.xml` add the following:

{%highlight xml%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">

    <!-- Admin theme declaration. Start -->
    <type name="Magento\Theme\Model\View\Design">
        <arguments>
             <argument name="themes" xsi:type="array">
                 <item name="adminhtml" xsi:type="string">%your_vendor_dir%/%your_theme_dir%</item>
             </argument>
         </arguments> 
    </type>
    <!-- Admin theme declaration. End -->
</config>
{%endhighlight%}

## Update components to actually apply the Admin theme

For your changes to take effect, you need to update Magento components. For this, 
run the `magento setup:upgrade` command in your command prompt. 

For details about performing command line tasks, view the following topics:
- [Command line configuration]({{site.gdeurl}}config-guide/cli/config-cli.html)
- [Uninstall or reinstall Magento: Optionally keeping generated files]({{site.gdeurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-keep)

The last step is open the Admin and view the new theme applied.
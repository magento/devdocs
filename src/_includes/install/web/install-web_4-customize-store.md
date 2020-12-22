## Step 4: Customize Your Store   {#instgde-install-magento-web-step4}

1. From the **Store Default Time Zone** list, click the name of your store's time zone.

1. From the **Store Default Currency** list, click the default currency to use in your store.

1. From the **Store Default Language** list, click the default language to use in your store.

1. Expand **Advanced Modules Configuration** to optionally enable or disable modules before you install the Magento software.

   Before you enable or disable modules, review the information discussed in [Enabling and disabling modules]({{ page.baseurl }}/install-gde/install/web/install-web.html#instgde-install-web-enable-mod).

   See one of the following sections for more information about enabling and disabling modules:

   *  [General module configuration options](#instgde-install-magento-web-step4-depend1)
   *  [Module dependency errors](#instgde-install-magento-web-step4-depend2)

1. Click **Next**.

### General module configuration options   {#instgde-install-magento-web-step4-depend1}

Modules are listed in **Advanced Modules Configuration** in alphabetical order; the order has nothing to do with dependencies.

You have the following options for any module listed:

*  To enable a module that is currently disabled, select its checkbox.
*  To disable a module that is currently enabled, clear its checkbox.
*  Use the **Select All** checkbox to:
   *  Enable all modules if any module is currently disabled.
   *  Disable all available modules (that is, all modules that do not depend on other enabled modules).

If a module's checkbox is unavailable, some other module depends on it. In the case of a dependency, to change the state of that module, you must first perform the corresponding action on the module on which it depends.

For example, `Magento_GoogleAnalytics` can be disabled only if `Magento_GoogleOptimizer` is disabled first. Conversely, if both modules are disabled, you must enable `Magento_GoogleAnalytics` first.

The following figure shows an example of disabling the `Magento_GoogleAnalytics` and `Magento_GoogleOptimizer` modules.

![Disabling a module]({{ site.baseurl }}/common/images/install_wizard_disable-google.png)

### Module dependency errors   {#instgde-install-magento-web-step4-depend2}

A dependency error occurs when two inter-dependent modules are disabled at the same time.

If there is a dependency error, a message similar to the following displays.
![]({{ site.baseurl }}/common/images/install_skip-depend-check.png)

Click **Show details** to display details about the dependency error. You can then do any of the following:

*  Select the **Skip dependency check for individual modules** to ignore the issue and continue with your installation. (Additional dependency checks are performed after you click **Next**.)
*  Resolve the issue by taking the action indicated by the message.

{:.bs-callout-warning}
Use <strong>Skip dependency check for individual modules</strong> with caution. We recommend against it because a typical reason for this error is you manually edited the [deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html). Editing the deployment configuration is not recommended because future Magento software updates can undo your changes.

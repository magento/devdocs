---
group: compman
subgroup: 10_Install extensions from the command line
title: Install extensions from the command line
menu_title: Install extensions from the command line
menu_order: 1
menu_node: parent
version: 2.2
github_link: comp-mgr/install-extensions.md
---

Code that extends or customizes Magento behavior is called an extension. You can optionally package and distribute extensions on the [Magento Marketplace](https://marketplace.magento.com){:target="&#95;blank"} or another Magento extension distribution system. Extensions include:

-   Modules (extend Magento capabilities)
-   Themes (change the look and feel of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and Admin)
-   Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-tip" markdown="1">
This topic explains how to install extensions you purchase from the Magento Marketplace using the command line. You can use the same procedure to install _any_ extension; all you need is the extension's {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} name and version. To find it, open the extension's `composer.json` file and note the values for `"name"` and `"version"`.
</div>

To install an extension, you must:

1.  Get an extension from the Magento Marketplace or elsewhere.
2.  Get the extension's Composer name and version.
3.  Update the `composer.json` file in your Magento project with the name and version of the extension.
4.  Verify that the extension installed properly.
5.  Enable and configure the extension.

## Get the extension's Composer name and version
If you already know the extension's Composer name and version, skip this step and continue with [Update your `composer.json` file](#update-composer-json).

To get the extension's Composer name and version from the Magento Marketplace:

1.  Log in to [Magento Marketplace](https://marketplace.magento.com){:target="&#95;blank"} with the user name and password you used to purchase the extension.

2.  In the upper-right corner, click **Your name** > **My Profile**.

	![Access your Marketplace account]({{ site.baseurl }}/common/images/marketplace-my-profile.png){:width="200px"}
3.  Click **My Purchases**.

	![Marketplace purchase history]({{ site.baseurl }}/common/images/marketplace-my-purchases.png){:width="650px"}
4.  Find the extension you want to install and click **Technical Details**.

	![Technical details shows the extension's Composer name]({{ site.baseurl }}/common/images/marketplace-extension-technical-details.png){:width="200px"}
<div class="bs-callout bs-callout-tip" markdown="1">
Alternatively, you can find the Composer name and version of _any_ extension (whether you purchased it on Magento Marketplace or somewhere else) in the extension's `composer.json` file.
</div>

## Update your `composer.json` file {#update-composer-json}
Add the extension's name and version to your `composer.json` file:

1.  Navigate to your Magento project directory and update your `composer.json` file.

		composer require <component-name>:<version>

	For example,

		composer require j2t/module-payplug:2.0.2

2.  Enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html). Your public key is your username; your private key is your password.

3.  Wait for Composer to finish updating your project dependencies and make sure there aren't any errors:

		Updating dependencies (including require-dev)
		Package operations: 1 install, 0 updates, 0 removals
		  - Installing j2t/module-payplug (2.0.2): Downloading (100%)
		Writing lock file
		Generating autoload files

## Verify the extension
To verify that the extension installed properly, run the following command:

	bin/magento module:status

By default, the extension is probably disabled:

	List of disabled modules:
	J2t_Payplug

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The extension name is in the format `<VendorName>_<ComponentName>`; it's not the same format as the Composer name. Use this format to enable the extension.
</div>

## Enable the extension
Some extensions won't work properly unless you clear Magento-generated static view files first. Use the `--clear-static-content` option to clear static view files when you're enabling an extension.

1.  Enable the extension and clear static view files:

		bin/magento module:enable J2t_Payplug --clear-static-content

    You should see the following output:

		The following modules have been enabled:
		- J2t_Payplug

		To make sure that the enabled modules are properly registered, run 'setup:upgrade'.
		Cache cleared successfully.
		Generated classes cleared successfully. Please run the 'setup:di:compile' command to generate classes.
		Generated static view files cleared successfully.

2.  Register the extension:

		bin/magento setup:upgrade

3.  Recompile your Magento project:

		bin/magento setup:di:compile

4.  Verify that the extension is enabled:

		bin/magento module:status

    You should see output verifying that the extension is no longer disabled:

		List of enabled modules:
		J2t_Payplug

		List of disabled modules:
		None

5.  Configure the extension in Admin as needed.

<div class="bs-callout bs-callout-tip" markdown="1">
You may need to clear the cache if you encounter errors when loading the storefront in a browser.

	bin/magento cache:flush
</div>

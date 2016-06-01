---
layout: default
group: cloud
subgroup: 10_howto
title: Install components
menu_title: Install components
menu_order: 3
menu_node: 
github_link: cloud/howtos/update-components.md
---

## How install components {#cloud-howto-comp}
This topic discusses how to install *components*, which can be any of the following:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your storefront and Admin)
*	Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-info" id="info">
  <p>This topic discusses how to install components you purchased from Magento Marketplace. You can use the same procedure to install <em>any</em> component; all you need is the component's Composer name. If you got a component from somewhere other than Magento Marketplace, open the component's <code>composer.json</code> file and note the values for <code>"name"</code> and <code>"version"</code>.</p>
</div>


To install a component, you must:

1.	[Get the component's Composer name](#cloud-howto-comp-composer) and version from the Magento Marketplace invoice.
2.	In your local Magento Enterprise Cloud Edition project, [update the Magento `composer.json`](#cloud-howto-comp-json) file with the name and version of the extension.
3.	[Push](#cloud-howto-comp-push) the changes to your environment.
4.	[Verify](#cloud-howto-comp-verify) the extension installed properly.

### Get started
To get started:

{% include cloud/cli-get-started.md %}

### Step 1: Get the component's Composer name {#cloud-howto-comp-composer}
To get the component's Composer name:

1.	Log in to Magento Marketplace with the user name and password you used to purchase the extension.
2.	In the upper right corner, click **&lt;your user name>** > **My Account** as the following figure shows.

	![Access your Marketplace account]({{ site.baseurl }}common/images/cloud_marketplace-account.png){:width="650px"}
3.	On the My Account page, click **Purchase History** as the following figure shows.

	![Marketplace purchase history]({{ site.baseurl }}common/images/cloud_marketplace-purch-history.png){:width="650px"}
4.	On the Purchase History page, click **Download Invoice** for the extension you purchased as the following figure shows.

	![Download an invoice]({{ site.baseurl }}common/images/cloud_marketplace-download-invoice.png){:width="650px"}
5.	Copy the SKU to the clipboard and paste it in a text editor.

	A sample SKU follows:

		celebros/module-autocomplete1.0.0-ee_edition
6.	Remove `-ee_edition` from the value.
7.	Insert a colon between the name and the version before the version (in this example, `celebros/module-autocomplete:1.0.0`).
8.	Continue with the next section.

### Step 2: Update your Magento's `composer.json` {#cloud-howto-comp-json}
To update `composer.json`:

1.	Make a backup of `composer.json`:

		cp composer.json composer.json.orig
2.	Enter the following command to update it:

		composer require <component-name>:<version>

	For example,

		composer require celebros/module-autocomplete:1.0.0
3.	Continue with the next section.

### Step 3: Push the component to your environment {#cloud-howto-comp-push}
To push the component:

Enter the following commands in the order shown:

	git add -A
	git commit -m "<message>"
	git push origin <environment ID>

### Step 4: Verify the component {#cloud-howto-comp-verify}
To verify the extension installed properly, you can check its functionality in the Magento Admin or you can make sure it is enabled as follows:

1.	SSH to the environment on which the component is installed.
2.	Enter the following command:

		vi app/etc/config.php
3.	Verify the component is listed and is set to `1` (enabled).

	The component name is in the format `<VendorName>_<ComponentName>`; it is not the same format as the Composer name.

#### Related topic
[Tutorial&mdash;Merge and delete an environment]({ site.gdeurl })cloud/howtos/environment-tutorial-env-merge.html)
---
layout: default
group: cloud
subgroup: 15_howto
title: Install extensions
menu_title: Install extensions
menu_order: 41
level3_menu_node: level3child
level3_subgroup: update-extensions
menu_node: 
version: 2.0
github_link: cloud/howtos/install-components.md
---

This topic discusses how to install *extensions*, which can be any of the following:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your storefront and Admin)
*	Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-info" id="info">
  <p>This topic discusses how to install extensions you purchased from Magento Marketplace. You can use the same procedure to install <em>any</em> extension; all you need is the extension's Composer name. To find it, open the extension's <code>composer.json</code> file and note the values for <code>"name"</code> and <code>"version"</code>.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <p>You must check in <code>composer.lock</code> to your environment; otherwise, the extension won't load in Magento Enterprise Cloud Edition. That's because we run <code>composer install</code> (which uses <code>composer.lock</code>) and not <code>composer update</code> when we build and deploy the environment.</p>
</div>

To install a extension, you must:

1.	Obtain the extension from [Magento Marketplace](https://marketplace.magento.com){:target="_blank"} or elsewhere.
1.	[Get the extension's Composer name](#cloud-howto-comp-composer) and version from your purchase history.
2.	In your local Magento Enterprise Cloud Edition project, [update the Magento `composer.json`](#cloud-howto-comp-json) file with the name and version of the extension.
3.	[Push](#cloud-howto-comp-push) the changes to your environment.
4.	[Verify](#cloud-howto-comp-verify) the extension installed properly.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Step 1: Get the extension's Composer name and version {#cloud-howto-comp-composer}
If you already know the extension's Composer name and version, skip this step and continue with [Update Magento's `composer.json`](#cloud-howto-comp-json).

{% collapsible To get the Composer name: %}

{% include cloud/composer-name.md %}

Continue with the next section.

{% endcollapsible %}

### Step 2: Update Magento's `composer.json` {#cloud-howto-comp-json}

{% collapsible Click to expand/collapse content %}
To update `composer.json`:

1.	If you haven't done so already, change to your environment root directory.
2.	Enter the following commands to update it:

		composer require <component-name>:<version> --no-update
		composer update

	For example,

		composer require pixlee/magento2:1.0.1 --no-update
		composer update
3.	Enter the following 
4.	Wait for project dependencies to update.
3.	Continue with the next section.

{% endcollapsible %}

### Step 3: Push the extension to your environment {#cloud-howto-comp-push}

{% collapsible To push the extension: %}

Enter the following commands in the order shown to commit your changes, including `composer.lock`:

	git add -A
	git commit -m "<message>"
	git push origin <environment ID>

If there are errors, see [extension deployment failure]({{page.baseurl}}cloud/trouble/trouble_comp-deploy-fail.html).

{% endcollapsible %}

### Step 4: Verify the extension {#cloud-howto-comp-verify}

{% collapsible To verify the extension: %}

To verify the extension installed properly, you can check its functionality in the Magento Admin or you can make sure it is enabled as follows:

1.	[SSH to the environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-ssh) on which the extension is installed.
2.	Enter the following command to display a list of enabled modules:

		`php bin/magento module:status`

3.	Verify the extension is listed.

	The extension name is in the format `<VendorName>_<ComponentName>`; it is not the same format as the Composer name.

{% endcollapsible %}

#### Related topics
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

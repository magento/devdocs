---
layout: default
group: cloud
subgroup: 10_howto
title: Install components
menu_title: Install components
menu_order: 4
level3_menu_node: level3child
level3_subgroup: upgrade-update
menu_node: 
version: 2.0
github_link: cloud/howtos/install-components.md
---

## How install components {#cloud-howto-comp}
This topic discusses how to install *components*, which can be any of the following:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your storefront and Admin)
*	Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-info" id="info">
  <p>This topic discusses how to install components you purchased from Magento Marketplace. You can use the same procedure to install <em>any</em> component; all you need is the component's Composer name. To find it, open the component's <code>composer.json</code> file and note the values for <code>"name"</code> and <code>"version"</code>.</p>
</div>

To install a component, you must:

1.	Obtain the component from [Magento Marketplace](https://marketplace.magento.com){:target="_blank"} or elsewhere.
1.	[Get the component's Composer name](#cloud-howto-comp-composer) and version from the Magento Marketplace invoice.
2.	In your local Magento Enterprise Cloud Edition project, [update the Magento `composer.json`](#cloud-howto-comp-json) file with the name and version of the component.
3.	[Push](#cloud-howto-comp-push) the changes to your environment.
4.	[Verify](#cloud-howto-comp-verify) the component installed properly.

### Get started

{% collapsible Click to expand/collapse content %}

To get started:

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Step 1: Get the component's Composer name and version {#cloud-howto-comp-composer}
If you already know the component's Composer name and version, skip this step and continue with [Update Magento's `composer.json`](#cloud-howto-comp-json).

{% collapsible Click to expand/collapse content %}

{% include cloud/composer-name.md %}

Continue with the next section.

{% endcollapsible %}

### Step 2: Update Magento's `composer.json` {#cloud-howto-comp-json}

{% collapsible Click to expand/collapse content %}
To update `composer.json`:

1.	If you haven't done so already, change to your environment root directory.
1.	Make a backup of `composer.json`:

		cp composer.json composer.json.orig
2.	Enter the following command to update it:

		composer require <component-name>:<version>

	For example,

		composer require celebros/module-autocomplete:1.0.0
4.	Wait for project dependencies to update.
3.	Continue with the next section.

{% endcollapsible %}

### Step 3: Push the component to your environment {#cloud-howto-comp-push}

{% collapsible Click to expand/collapse content %}
To push the component:

Enter the following commands in the order shown:

	git add -A
	git commit -m "<message>"
	git push origin <environment ID>

If there are errors, see [Component deployment failure]({{page.baseurl}}cloud/trouble/trouble_comp-deploy-fail.html).

{% endcollapsible %}

### Step 4: Verify the component {#cloud-howto-comp-verify}

{% collapsible Click to expand/collapse content %}

To verify the component installed properly, you can check its functionality in the Magento Admin or you can make sure it is enabled as follows:

1.	[SSH to the environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-ssh) on which the component is installed.
2.	Enter the following command to display a list of enabled modules:

		`php bin/magento module:status`

3.	Verify the component is listed.

	The component name is in the format `<VendorName>_<ComponentName>`; it is not the same format as the Composer name.

{% endcollapsible %}

#### Related topics
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

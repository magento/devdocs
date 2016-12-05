---
layout: default
group: cloud
subgroup: 15_howto
title: Update extensions
menu_title: Update extensions
menu_order: 45
level3_menu_node: level3child
level3_subgroup: update-extensions
menu_node: 
version: 2.0
github_link: cloud/howtos/update-components.md
---

## How update extensions {#cloud-howto-upcomp}
This topic discusses how to update extensions you previously installed from Magento Marketplace or from another source.

Before you continue, you must:

*	Know the extension's [Composer name](#update-composer-name) and version
*	Know the extension is compatible with your project (in particular, check the required PHP version)

<div class="bs-callout bs-callout-warning">
    <p>You must check in <code>composer.lock</code> to your environment; otherwise, the extension won't load in Magento Enterprise Cloud Edition. That's because we run <code>composer install</code> (which uses <code>composer.lock</code>) and not <code>composer update</code> when we build and deploy the environment.</p>
</div>


### Find a extension's Composer name {#update-composer-name}

{% collapsible To find the extension's Composer name %}

{% include cloud/composer-name.md %}

{% endcollapsible %}

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Update extensions

{% collapsible To update extensions: %}

1.	If you haven't done so already, change to your environment root directory.
3.	Open `composer.json` in a text editor.
4.	Locate your extension.
5.	Update its version.
6.	Save your changes to `composer.json` and exit the text editor.
7.	Update project dependencies:

		composer update
8.	Enter the following commands in the order shown to commit the changes and deploy the project, including `composer.lock`:

		git add -A
		git commit -m "<message>"
		git push origin <environment ID>
9.	Wait for the project to deploy.

	If there are errors, see [Component deployment failure]({{page.baseurl}}cloud/trouble/trouble_comp-deploy-fail.html).

{% endcollapsible %}

#### Related topic
*	[Install extensions]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

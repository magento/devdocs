---
layout: default
group: cloud
subgroup: 10_project
title: Set up multiple stores
menu_title: Set up multiple stores
menu_order: 500
menu_node: 
version: 2.0
github_link: cloud/project/project-multi-sites.md
---

## Set up multiple stores
This topic discusses how to set up Magento Enterprise Cloud Edition to have multiple websites or stores; for example, you might have an English store, a French store, and a German store.

To set up multiple stores, you must:

1.	Configure your local installation and test it locally.
2.	Configure Magento Enterprise Cloud edition routes and variables.
3.	Push the changes to an [integration environment]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) and test it.
4.	To deploy multiple stores to a [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) environment, create a support ticket.

## Configure your local installation
To configure your local installation to use multiple stores, see [Multiple websites or stores]({{ page.baseurl }}config-guide/multi-site/ms_over.html).

## Configure your integration environment
After successfully creating and testing multiple stores locally, you must:

1.	[Configure routes](#cloud-multi-stores-routes), which specify how incoming URLs are handled by Magento Enterprise Cloud Edition.
2.	[Set up websites, stores, and store views](#cloud-multi-stores-admin) in your Magento Enterprise Cloud Edition server's Admin.
3.	[Modify `magento-vars.php`](#cloud-multi-stores-magento-vars) to specify the values of the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables.
4.	[Deploy](#cloud-multi-stores-deploy) to your integration branch and test.

### Configure routes {#cloud-multi-stores-routes}
Magento Enterprise Edition *routes* define how incoming URLs are processed. The way you configure routes depends on how you want your site to operate. We suggest configuring routes for integration as follows. You can edit the values later if your needs change.

<div class="bs-callout bs-callout-info" id="info">
  <p>This section discusses how to configure your <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int">integration environment</a> only. To set up routes in a staging or production environment, you must create a <a href="{{ page.baseurl }}cloud/get-help.html">Support ticket</a>.</p>
</div>

{% collapsible To configure routes: %}

To configure routes in an integration environment:

1.	Log in to your local environment as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your Magento Enterprise Cloud Edition base directory.
3.	Open `.magento/routes.yaml` in a text editor.
4.	Replace its contents with the following:

		"http://{default}/":
    		type: upstream
    		upstream: "mymagento:php"
 
		"https://{default}/":
    		type: upstream
    		upstream: "mymagento:php"
 
		"http://*.{default}/":
    		type: upstream
    		upstream: "mymagento:php"
 
		"https://*.{default}/":
    		type: upstream
    		upstream: "mymagento:php"
5.	Save your changes to `routes.yaml` and exit the text editor.

{% endcollapsible %}

### Set up websites, stores, and store views {#cloud-multi-stores-admin}
Set up in your Magento Enterprise Cloud Edition Admin websites, stores, and store views identical to the ones you set up on your local system.

{% collapsible To set up websites, stores, and store views: %}

#### Get your access information
To get the access information you need to log in to the Magento Admin:

1.	If you haven't done so already, log in to your local environment as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your Magento Enterprise Cloud Edition base directory.
3.	Log in to your Magento Enterprise Cloud Edition account:

		magento-cloud login
4.	List the environments:

		magento-cloud environment:list
3.	Check out your environment:

		magento-cloud environment:checkout <environment ID>
4.	View the environment's access URLs:

		magento-cloud environment:url
5.	View Admin login information:

		magento-cloud variable:list

	Admin access information displays similar to the following:

		+----------------+---------------+-----------+------+
		| ID             | Value         | Inherited | JSON |
		+----------------+---------------+-----------+------+
		| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
		| ADMIN_URL      | magento_A8v10 | Yes       | No   |
		| ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
		+----------------+---------------+-----------+------+

#### Configure websites, stores, and store views
Make sure you name your websites, stores, and store views in your Cloud Admin the same as you did when you set up your local installation.

{% include config/multi-site_websites.md %}

{% endcollapsible %}

### Modify `magento-vars.php` {#cloud-multi-stores-magento-vars}
Instead of configuring an nginx virtual host, pass the `MAGE_RUN_CODE` and `MAGE_RUN_TYPE` variables using `magento-vars.php` which is located in your Magento root directory.

{% collapsible To modify `magento-vars.php`: %}

1.	Open `magento-vars.php` in a text editor.
2.	Uncomment everything after the first two lines.
3.	Move the entire block starting with `if (isHttpHost("example.com")` after `function isHttpHost($host)`.

	Following is what the file should look like so far:

		<?php
		// enable, adjust and copy this code for each store you run
		// Store #0, default one
		function isHttpHost($host)
		{
    		if (!isset($_SERVER['HTTP_HOST'])) {
        		return false;
    		}
    		return strpos(str_replace('---', '.', $_SERVER['HTTP_HOST']), $host) === 0;
		}
		if (isHttpHost("example.com")) {
		    $_SERVER["MAGE_RUN_CODE"] = "default";
		    $_SERVER["MAGE_RUN_TYPE"] = "store";
		}
4.	Replace the following values in the `if (isHttpHost("example.com"))` block:

	*	`"example.com"` with the base URL of your website, replacing the first period with three dashes. 
	*	`"default"` with the unique code for your website or store view.
	*	`"store"` with either `website` (to load the website in the storefront) or `store` (to load a storeview in the storefront).

	An example follows:

		<?php
		// enable, adjust and copy this code for each store you run
		// Store #0, default one
		function isHttpHost($host)
		{
    		if (!isset($_SERVER['HTTP_HOST'])) {
        		return false;
    		}
    		return strpos(str_replace('---', '.', $_SERVER['HTTP_HOST']), $host) === 0;
		}
		if (isHttpHost("french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud")) {
    		$_SERVER["MAGE_RUN_CODE"] = "site2";
    		$_SERVER["MAGE_RUN_TYPE"] = "website";
		}
5.	Save your changes to `magento-vars.php` and exit the text editor.

{% endcollapsible %}

### Deploy and test on the integration server {#cloud-multi-stores-deploy}
The final step is to push your changes to your Magento Entperise Cloud Edition server and test your site there.

To deploy and test:

1.	Enter the following commands in the order shown:

		git add -A && git commit -m "Implement multiple sites"
		git push origin <branch name>
2.	Wait for deployment to complete.
3.	When deployment is done, in a web browser, go to your site's base URL.
4.	Make sure you test it thoroughly.
---
group: cloud
subgroup: 090_configure
title: Set up multiple websites or stores
menu_title: Set up multiple websites or stores
menu_order: 15
menu_node:
version: 2.0
github_link: cloud/project/project-multi-sites.md
functional_areas:
  - Cloud
  - Configuration
  - Setup
  - Stores
---

This topic discusses how to set up {{site.data.var.ee}} to have multiple websites or stores. For example, you might have an English store, a French store, and a German store. For more information on websites, stores, and store views, see [Understanding websites, stores, and store views]({{ page.baseurl }}/cloud/configure/configure-best-practices.html#sites).

To set up multiple stores, you must:

1.	[Configure your local installation]({{ page.baseurl }}/config-guide/multi-site/ms_over.html) and test it locally.
2.	Configure {{site.data.var.ece}} routes and variables.
3.	Push the changes to an Integration environment and test it.

## Configure your local installation
To configure your local installation to use multiple stores, see [Multiple websites or stores]({{ page.baseurl }}/config-guide/multi-site/ms_over.html).

## Configure your Integration environment
After successfully creating and testing multiple stores locally, you must:

1.	[Configure routes](#cloud-multi-stores-routes), which specify how incoming URLs are handled by {{site.data.var.ee}}.
2.	[Set up websites, stores, and store views](#cloud-multi-stores-admin) in your {{site.data.var.ee}} server's {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}.
3.	[Modify `magento-vars.php`](#cloud-multi-stores-magento-vars) to specify the values of the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables.
4.	[Deploy](#cloud-multi-stores-deploy) to your Integration branch and test.

### Configure routes {#cloud-multi-stores-routes}
Magento Enterprise Edition *routes* define how incoming URLs are processed. The way you configure routes depends on how you want your site to operate. We suggest configuring routes for integration as follows. You can edit the values later if your needs change.

<div class="bs-callout bs-callout-info" id="info">
To set up routes in a staging or production environment, you must create a <a href="{{ page.baseurl }}/cloud/trouble/trouble.html">Support ticket</a>.</p>
</div>

To configure routes in an integration environment:

1.	Log in to your local environment as, or switch to, the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your {{site.data.var.ee}} base directory.
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

### Set up websites, stores, and store views {#cloud-multi-stores-admin}
Set up in your {{site.data.var.ee}} Admin websites, stores, and store views identical to the ones you set up on your local system.

#### Get your access information
To get the access information you need to log in to the Magento Admin:

1.	If you haven't done so already, log in to your local environment as, or switch to, the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your {{site.data.var.ee}} base directory.
3.	Log in to your account:

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

See [Set up multiple websites, stores, and store views in the Admin]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html).

### Modify `magento-vars.php` {#cloud-multi-stores-magento-vars}
Instead of configuring an {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} virtual host, pass the `MAGE_RUN_CODE` and `MAGE_RUN_TYPE` variables using `magento-vars.php` which is located in your Magento root directory.

1.	Open `magento-vars.php` in a text editor.
2.	Uncomment everything after the first two lines.
3.	Move the entire block starting with `if (isHttpHost("example.com")` after `function isHttpHost($host)`.

	Following is what the file should look like so far:

    <pre class="no-copy">&lt;?php
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
        }</pre>
4.	Change the following line:

	From:

		return strpos(str_replace('---', '.', $_SERVER['HTTP_HOST']), $host) === 0;

	To:

		return $_SERVER['HTTP_HOST'] ===  $host;
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
    		 return $_SERVER['HTTP_HOST'] ===  $host;
		}
		if (isHttpHost("french---branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud")) {
    		$_SERVER["MAGE_RUN_CODE"] = "french";
    		$_SERVER["MAGE_RUN_TYPE"] = "website";
		}
5.	Save your changes to `magento-vars.php` and exit the text editor.

### Deploy and test on the Integration server {#cloud-multi-stores-deploy}
The final step is to push your changes to your Magento Entperise Cloud Edition server and test your site there.
To deploy and test:

1.	Enter the following commands in the order shown:

		git add -A && git commit -m "Implement multiple sites"
		git push origin <branch name>
2.	Wait for deployment to complete.
3.	When deployment is done, in a web browser, go to your site's base {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.

	The URL must be in the format: `http://<magento run_code>---<rest of URL>`

	For example, `http://french---master-benrmky-dyrozemqbw72k.us.magentosite.cloud/`
4.	Make sure you test your site thoroughly.

When complete, merge the code to the `master` Git branch for further deployment.

### Deploy to Staging and Production {#deploy-staging-prod}
Follow the deployment process for [deploying to Staging and Production]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html). For Starter and Pro environments, you use the Project Web Interface to push code across environments. For Pro accounts created before October 23, 2017 and not updated, you can use [SSH and CLI commands]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html#classic).

We recommend fully testing in Staging prior to pushing to Production. If you need to make changes, you should complete those in Integration and beging the process to deploy across environments again.

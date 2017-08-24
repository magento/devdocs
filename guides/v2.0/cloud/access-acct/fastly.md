---
layout: default
group: cloud
subgroup: 090_configure
title: Set up Fastly
menu_title: Set up Fastly
menu_order: 5
menu_node:
version: 2.0
github_link: cloud/access-acct/fastly.md
---

[Fastly](https://www.fastly.com/why-fastly){:target="_blank"} is required for {{site.data.var.<ece>}}, and is used in Staging and Production environments. It works with Varnish to provide fast caching capabilities and a {% glossarytooltip f83f1fa7-7a64-467b-b629-c2d0c25d2e7f %}Content Delivery Network{% endglossarytooltip %} (CDN) for static assets. Fastly is not available in Integration environments.

This information gets you started with installing and configuring Fastly. We provide additional information for backends and Origin shields, and error/maintenance page, and VCL snippets.

For VCL snippets, experience developing that code is required for advanced configurations.

The process for configuring Fastly includes:

* Install Fastly module in Integration
* Deploy code across Staging and Production
* Configure Fastly credentials and settings
* Advanced configurations including VCL snippets

## Get your Fastly credentials {#cloud-fastly-creds}
To get Fastly credentials, open a [support ticket]({{ page.baseurl }}cloud/welcome/get-help.html). You must provide your fully-qualified domain name.

We'll provide you with the following credentials for your Staging and Production services:

*	Fastly Service ID
*	Fastly API token

Make note of which environment each set of credentials is used for. If you use the wrong credentials in an environment, you'll encounter issues with Fastly.

## Get started {#cloud-fastly-start}
You need to install Fastly in its own branch. Fine-tuning Fastly can be a complex process, depending on your needs and store size. If you already have a branch to work in, or know how to create a branch, continue to [installing Fastly](#cloud-fastly-setup).

To create a branch:

{% include cloud/cli-get-started.md %}

## Install Fastly in an Integration branch and deploy {#cloud-fastly-setup}
You should install the Fastly module on your local, pushing the code to Integration and deploying across to your Staging and Production environments.

<div class="bs-callout bs-callout-warning" markdown="1">
Don't configure the module in your local before building and deploying. You'll configure the module in those environments.

We recommend using the `bin/magento magento-cloud:scd-dump` command for [Configuration Management]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm). If you use the `app:config;dump` command, all configuration options for Fastly will be locked from editing in Staging and Production.
</div>


We provide Fastly services only for your Staging and Production environments. You cannot use the Fastly service in Intergration environments.

1.	In your local environment root directory, use a terminal to enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following command to fully update and clear the cache:

		php bin/magento setup:upgrade && php bin/magento cache:clean
4. Edit your composer.json and ensure the Fasty module is included with version.

	* In the "require" section, you should have `"fastly/magento2": <version number>`
	* In the "repositories" section, you should have:

			"fastly-magento2": {
						"type": "vcs",
						"url": "https://github.com/fastly/fastly-magento2.git"
				}
3.	Add, commit, and push the changes to your code repository with the following command:

		git add -A; git commit -m "Install Fastly"; git push origin <branch name>

4. Merge the branch code with the `master` Integration branch.
5. [Deploy]({{ page.baseurl }}cloud/live/stage-prod-live.html) the code to Staging and Production.

After deployment, you can log into the Admin in Staging and Production to configure Fastly credentials and settings. This gives you the flexibility to have different caching features as needed in both environments, including VCL snippets.

## Enable and configure Fastly using the Magento Admin {#cloud-fastly-config}
To begin configuring Fastly, you need to enter and test Fastly credentials in Staging and Production. After successfully testing the credentials, you can continue with advanced configurations and [VCL snippets](#custom-vcl).

We provide your Fastly Service ID and API key (or token) for Staging and Production environments. These credentials are different for each environment. Make sure to use the correct credentials.

Complete the following configuration steps in Staging and Production environments:

1.	Log in to your local Magento Admin as an administrator.
2.	Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**.

	![Expand to select Fastly]({{ site.baseurl }}common/images/cloud_fastly_menu.png){:width="650px"}
4.	For **Caching Application**, uncheck the **Use system value** check box and select **Fastly CDN** from the drop-down list.

	![Choose Fastly]({{ site.baseurl }}common/images/cloud-fastly_enable-admin.png){:width="550px"}
5.	Expand **Fastly Configuration**. You can then [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module){:target="_blank"}.
6.	When you're done, click **Save Config** at the top of the page.
7.	Clear the cache according to the notification. After you have cleared the cache, navigate back to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration** and continue your configurations.

Configure the following features and enable additional [configuration options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}:

* [Configure backends and Origin shielding](#backend)
* [Create custom error/maintenance page](#fastly-errpg)
* [Upload Fastly VCL snippets](#upload-vcl-snippets)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
*	Ignore the link to create a free Fastly account. We'll provide your Fastly credentials (Service ID and API token).
*	With Fastly version 1.2.0 and later, you no longer need to upload your VCL to Fastly. The **Upload VCL to Fastly** button enables you to upload [VCL snippets](#custom-vcl).
</div>

## Upload Fastly VCL snippets {#upload-vcl-snippets}
The installed Fastly module includes the following [VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"} that drive the integration with Fastly. When you click Upload, you push these VCL snippets to Fastly for your extension. These uploaded snippets are prepended with "magentomodule_" with a priority of 50.

You can also create and add [custom VCL snippets](#custom-vcl).

To use snippets, you must upload the Fastly VCL using the Magento Admin as follows:

1.	In the **Fastly Configuration** section, click **Upload VCL to Fastly** as the following figure shows.

	![Upload a Magento VCL to Fastly]({{ site.baseurl }}common/images/cloud_upload-vcl-to-fastly.png)

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		If the **Upload VCL to Fastly** button does not display, you should upgrade the Fastly extension to version 1.2.0 or later. For details, see [Update extensions]({{ page.baseurl}}cloud/howtos/update-components.html). Fastly's Composer name is `fastly/magento2`.
	</div>

2.	Once the upload completes, the modal automatically closes with a success message.

With this uploaded, you can create and upload custom VCL snippets with advanced settings and options. You use APIs to add these VCL snippets, further adding them in your site code depending on the actions.

For more information, see [Fastly VCL documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"} and [Fastly VCL snippets](https://docs.fastly.com/guides/vcl-snippets/about-vcl-snippets){:target="_blank"}.

## Configure backends and Origin shielding {#backend}
Backend settings provide fine tuning for Fastly performance with Origin shielding and timeouts. A _backend_ is a specific location (IP or domain) with configured Origin shield and timeout settings for checking and providing cached content.

_Origin shielding_ routes all requests for your store to a specific Point of Presence (POP). When a request is received, the POP checks for cached content and provides it. If it is not cached, it continues to the Shield POP, then to the Origin server which caches the content. The shields reduces traffic directly to the origin.

You can add multiple backends.

1. Access and expand **Fastly Configuration**.
2. Expand **Backend settings** and click the gear to configure the default backend. A modal opens with options to select and configure.

	![Modify the backend]({{ site.baseurl }}common/images/cloud_fastly-backend.png){:width="600px"}
3. Select a **Shield** location (or datacenter) closest to your server region. For example, if Staging is on the West Coast of the United States, you may want to select a shield in US, Los Angeles, CA. This is the POP accessed for providing caching services.
4. Modify the timeout values (in miliseconds) for the connection to the shield, time between bytes, and time for the first byte. We recommend keeping the default timeout settings.
5. Optionally, select to Activate the backend and Shield after editing or saving.
6. Click **Upload** to save. The settings are commiunicated to Fastly.
7. In the Magento Admin, click **Save Config**.

For more information from Fastly, see the Magento 2 [Backend settings guide](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/Guides/BACKEND-SETTINGS.md){:target="_blank"}.

## Configure purge options {#purge}
Fastly provides multiple types of purge options on your Magento Cache Management page including purging product category, product assets, and content. When enabled, Fastly watches for events to automatically purge those caches. If you disable a purge option, you can manually purge Fastly aches after finishing updates through the Cache Management page.

The options include:
* Purge category: Purges product category content (not product content) when you add and update a single product. You may want to keep this disabled and enable purge product, which purges products and product categories.
* Purge product: Purges all product and product category content when saving a single modification to a product. Enabling purge product can be helpful to immediately get updates to customers when changing a price, adding a product option, and when product inventory is out-of-stock.
* Purge CMS page: Purges page content when updating and adding pages to the Magento CMS. For example, you may want to purge when updating your Terms and Conditions or Return policy. If you rarely make these changes, you could disable automatic purging.
* Soft purge: Sets changed content to stale and purges according to the stale timing. In combination with the stale timings your customers will be served stale content very fast while Fastly is updating the content in the background.

![Configure purge options]({{ site.baseurl }}common/images/cloud_fastly-purgeoptions.png){:width="650px"}

To configure Fastly purge options:

1. In the **Fastly Configuration** section, expand **Advanced**.
2. All purge options display. Select "Yes" per purge option to enable automatic purging. Select "No" to disable automatic purging, allowing you to manually purge caches through the Cache Management page.
4. Click **Save Config** at the top of the page.

For more information, see [Fastly's configuration options](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}.

## Create a custom error/maintenance page {#fastly-errpg}
You can optionally create a custom page for errors or when your site is down for maintenance. Create your page with HTML code to provide detailed information why the site is temporarily down, instead of an HTTP error code.

To create a custom error/maintenance page:

1.	In the **Fastly Configuration** section, expand **Error/Maintenance Page** as the following figure shows.

	![Custom Fastly error page]({{ site.baseurl }}common/images/cloud-fastly_err-pg.png){:width="650px"}
2.	Click **Set HTML**.
3.	In the provided field, enter your HTML code.	The HTML you enter can be a maximum of 65,535 bytes in length.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	Avoid using images on your site in the event Fastly is not available. To use images, refer to [Data URIs on the css-tricks site](https://css-tricks.com/data-uris/){:target="_blank"}.
	</div>
4.	When you're done, click **Upload** to send your updates to Fastly.
5.	Click **Save Config** at the top of the page.

## Create custom VCL snippets {#custom-vcl}
For extensive instructions to create custom VCL snippets and needed edge dictionaries or ACLs, see [Custom Fastly VCL snippets]({{ page.baseurl}}cloud/configure/cloud-vcl-custom-snippets.html)

## Configure GeoIP handling {#geoip}
The Fastly module includes GeoIP handling to automatically redirect visitors or provide a list of stores matching their obtained country code. If you already use a Magento extension for GeoIP handling, you may need to verify the features with Fastly options.

1. In the **Fastly Configuration** section, expand **Advanced**.
2. Scroll down and select **Yes** to **Enable GeoIP**. Additional configuration options disply.
3. For GeoIP Action, select if the visitor is automatically redirected with **Redirect** or provided a list of stores to select from with **Dialog**.
4. For **Country Mapping**, click **Add** to enter a two-letter country code to map with a specific Magento store from a list. For a list of country codes, see [this site](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2){:target="_blank"}.

	![Add GeoIP country maps]({{ site.baseurl }}common/images/cloud_fastly-geo-code.png)
5. Click **Save Config** at the top of the page.

Fastly also provides a series of [geolocation-related VCL features](https://docs.fastly.com/guides/vcl/geolocation-related-vcl-features){:target="_blank"} for customized geolocation coding.

#### Related topics

* [Custom Fastly VCL snippets]({{ page.baseurl}}cloud/configure/cloud-vcl-custom-snippets.html)
* [Fastly in Cloud]({{ page.baseurl}}cloud/welcome/cloud-fastly.html)
*	[Troubleshoot Fastly]({{ page.baseurl}}cloud/trouble/trouble_fastly.html)
*	[Fastly documentation](https://docs.fastly.com/guides){:target="_blank"}
*	[Fastly VCL documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}

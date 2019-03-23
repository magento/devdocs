---
group: cloud-guide
subgroup: 090_configure
title: Set up Fastly
menu_title: Set up Fastly
menu_order: 5
menu_node:
redirect_from:
   - /guides/v2.0/cloud/access-acct/fastly.html

functional_areas:
  - Cloud
  - Setup
  - Configuration
---

[Fastly]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html) is required for {{site.data.var.ece}}, and is used in Staging and Production environments. It works with Varnish to provide fast caching capabilities and a {% glossarytooltip f83f1fa7-7a64-467b-b629-c2d0c25d2e7f %}Content Delivery Network{% endglossarytooltip %} (CDN) for static assets. Fastly is not available in Integration environments.

This information gets you started with installing and configuring Fastly. We provide additional information for backends and Origin shields, and error/maintenance page, and VCL snippets.

For VCL snippets, experience developing that code is required for advanced configurations.

The process for configuring Fastly includes:

* Install Fastly module in Integration
* Deploy code across Staging and Production
* Configure Fastly credentials and settings
* Advanced configurations including VCL snippets

## Multiple Fastly accounts and assigned domains {#domain}

Before launching {{site.data.var.ece}}, you may already have a Fastly account or trial with your apex and subdomains assigned to it. Be advised, you will need to remove any apex domain and subdomains you plan use with {{site.data.var.ece}} from this existing Fastly account.

Fastly only allows one apex domain and all subdomains assigned to a single Fastly service and account. For example, if you have the apex domain of mystore.com with subdomains of shoes.mystore.com and socks.mystore.com managed by an existing Fastly account, you need to remove them from that account before going live with Fastly and {{site.data.var.ece}}.

For details, review your Fastly accounts and [documentation](https://docs.fastly.com/) to remove the domains. This may include removing and updating CNAME records and more.

## Get your Fastly credentials {#cloud-fastly-creds}

To get Fastly credentials, open a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html). You must provide your fully-qualified domain name.

We'll provide you with the following credentials for your Staging and Production services:

*	Fastly Service ID
*	Fastly API token

You can also locate these credentials in your Staging and Production systems in `/mnt/shared/fastly_tokens.txt`. You can SSH into the servers to verify the file in that location. If you do not locate this file, please enter a ticket for [Support]({{ page.baseurl }}/cloud/trouble/trouble.html) asking to have the file added. We can help provide this credentials file.

{: .bs-callout .bs-callout-warning }
Make note of which environment each set of credentials is used for. If you use the wrong credentials in an environment, you'll encounter issues with Fastly.

## Get started {#cloud-fastly-start}

You need to install Fastly in its own branch. Fine-tuning Fastly can be a complex process, depending on your needs and store size. If you already have a branch to work in, or know how to create a branch, continue to [installing Fastly](#cloud-fastly-setup).

To create a branch:

{% include cloud/cli-get-started.md %}

## Install Fastly in an Integration branch and deploy {#cloud-fastly-setup}

You should install the Fastly module on your local, pushing the code to Integration and deploying across to your Staging and Production environments. For {{site.data.var.ece}} 2.2, install Fastly module 1.2.33 or later for all updated settings and full VCL snippet uploading support.

<div class="bs-callout bs-callout-warning" markdown="1">
Don't configure the module in your local before building and deploying. You'll configure the module in those environments.

We recommend using the `bin/magento magento-cloud:scd-dump` command for Configuration Management([2.1.X]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html#cloud-config-specific-recomm), [2.2.X]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html#cloud-config-specific-recomm)). If you use the `app:config:dump` command, all configuration options for Fastly will be locked from editing in Staging and Production.
</div>


We provide Fastly services only for your Staging and Production environments. You cannot use the Fastly service in Integration environments.

1.	In your local environment root directory, use a terminal to enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following command to fully update and clear the cache:

		php bin/magento setup:upgrade && php bin/magento cache:clean
4. Edit your composer.json and ensure the Fastly module is included with version.

	* In the "require" section, you should have `"fastly/magento2": <version number>`
	* In the "repositories" section, you should have:

		"fastly-magento2": {
					"url": "https://github.com/fastly/fastly-magento2.git"
		}
3.	Add, commit, and push the changes to your code repository with the following command:

		git add -A; git commit -m "Install Fastly"; git push origin <branch name>

4. Merge the branch code with the `master` Integration branch.
5. [Deploy]({{ page.baseurl }}/cloud/live/stage-prod-live.html) the code to Staging and Production.

After deployment, you can log into the Admin in Staging and Production to configure Fastly credentials and settings. This gives you the flexibility to have different caching features as needed in both environments, including VCL snippets.

## Enable and configure Fastly using the Magento Admin {#cloud-fastly-config}

To begin configuring Fastly, you need to enter and test Fastly credentials in Staging and Production. After successfully testing the credentials, you can continue with advanced configurations and [VCL snippets](#custom-vcl).

We provide your Fastly Service ID and API key (or token) for Staging and Production environments. These credentials are different for each environment. Make sure to use the correct credentials.

Complete the following configuration steps in Staging and Production environments:

1.	Log in to your local Magento Admin as an administrator.
2.	Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**.

	![Expand to select Fastly]({{ site.baseurl }}/common/images/cloud_fastly_menu.png){:width="650px"}
4.	For **Caching Application**, uncheck the **Use system value** checkbox and select **Fastly CDN** from the drop-down list.

	![Choose Fastly]({{ site.baseurl }}/common/images/cloud-fastly_enable-admin.png){:width="550px"}
5.	Expand **Fastly Configuration**. You can then [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module){:target="_blank"}.
6.	When you're done, click **Save Config** at the top of the page.
7.	Clear the cache according to the notification. After you have cleared the cache, navigate back to **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Fastly Configuration** and continue your configurations.

Configure the following features and enable additional [configuration options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}:

* [Upload Fastly VCL snippets](#upload-vcl-snippets)
* [Configure backends and Origin shielding](#backend)
* [Create custom error/maintenance page](#fastly-errpg)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
*	Ignore the link to create a free Fastly account. We'll provide your Fastly credentials (Service ID and API token).
*	With Fastly version 1.2.0 and later (we recommend 1.2.33 or later), use the **Upload VCL to Fastly** button to upload your default [VCL snippets](#custom-vcl).
</div>

## Upload Fastly VCL snippets {#upload-vcl-snippets}

You don't have to create or code VCL snippets. We provide a default set of snippets for Fastly. You only need to click **Upload VCL to Fastly** to finish this step.

The installed Fastly module includes the following default [VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"} that drive the integration with Fastly. These VCL snippets are not available until you upload them. When you click Upload, you push a set of these default VCL snippets to Fastly for your specific Service ID and extension.

For VCL snippet developers, these default snippets are prepended with `magentomodule_` with a priority of 50. You should not use this prepended name for your own snippets. For full details, see our guide to create and add [custom VCL snippets](#custom-vcl).

To use snippets, you must upload the Fastly VCL using the Magento Admin as follows:

1.	In the **Fastly Configuration** section, click **Upload VCL to Fastly** as the following figure shows.

	![Upload a Magento VCL to Fastly]({{ site.baseurl }}/common/images/cloud_upload-vcl-to-fastly.png)

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		If the **Upload VCL to Fastly** button does not display, you should upgrade the Fastly extension to version 1.2.0 or later. We recommend 1.2.33 or later. For details, see [Update extensions]({{ page.baseurl }}/cloud/howtos/update-components.html). Fastly's Composer name is `fastly/magento2`.
	</div>

2.	Once the upload completes, the modal automatically closes with a success message.

With this uploaded, you can create and upload custom VCL snippets with advanced settings and options. You use APIs to add these VCL snippets, further adding them in your site code depending on the actions.

For more information, see [Fastly VCL documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"} and [Fastly VCL snippets](https://docs.fastly.com/guides/vcl-snippets/about-vcl-snippets){:target="_blank"}.

## Configure backends and Origin shielding {#backend}

Backend settings provide fine tuning for Fastly performance with Origin shielding and timeouts. A _backend_ is a specific location (IP or domain) with configured Origin shield and timeout settings for checking and providing cached content.

_Origin shielding_ routes all requests for your store to a specific Point of Presence (POP). When a request is received, the POP checks for cached content and provides it. If it is not cached, it continues to the Shield POP, then to the Origin server which caches the content. The shields reduces traffic directly to the origin.

You can add multiple backends. Repeat these instructions to create multiple backends. For example, you may need a backend specifically for [WordPress]({{ page.baseurl }}/cloud/cdn/fastly-vcl-wordpress.html) to handle your blog.

1. Access and expand **Fastly Configuration**.
2. Expand **Backend settings** and click the gear to configure the default backend. A modal opens with options to select and configure.

	![Modify the backend]({{ site.baseurl }}/common/images/cloud_fastly-backend.png){:width="600px"}
3. Select a **Shield** location (or datacenter) closest to your server region. For example, if Staging is on the West Coast of the United States (US - Oregon), you may want to select a shield in US, Los Angeles, CA. This is the POP accessed for providing caching services. For example, we have cloud hosting in the following AWS locations:

    * US - Oregon
    * EU - Dublin
    * APAC - Sydney
4. Modify the timeout values (in milliseconds) for the connection to the shield, time between bytes, and time for the first byte. We recommend keeping the default timeout settings.
5. Optionally, select to Activate the backend and Shield after editing or saving.
6. Click **Upload** to save. The settings are communicated to Fastly.
7. In the Magento Admin, click **Save Config**.

For more information from Fastly, see the Magento 2 [Backend settings guide](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/Guides/BACKEND-SETTINGS.md){:target="_blank"}.

## Configure purge options {#purge}

Fastly provides multiple types of purge options on your Magento Cache Management page including purging product category, product assets, and content. When enabled, Fastly watches for events to automatically purge those caches. If you disable a purge option, you can manually purge Fastly aches after finishing updates through the Cache Management page.

The options include:

* **Purge category**: Purges product category content (not product content) when you add and update a single product. You may want to keep this disabled and enable purge product, which purges products and product categories.
* **Purge product**: Purges all product and product category content when saving a single modification to a product. Enabling purge product can be helpful to immediately get updates to customers when changing a price, adding a product option, and when product inventory is out-of-stock.
* **Purge CMS page**: Purges page content when updating and adding pages to the Magento CMS. For example, you may want to purge when updating your Terms and Conditions or Return policy. If you rarely make these changes, you could disable automatic purging.
* **Soft purge**: Sets changed content to stale and purges according to the stale timing. In combination with the stale timings your customers will be served stale content very fast while Fastly is updating the content in the background.

![Configure purge options]({{ site.baseurl }}/common/images/cloud_fastly-purgeoptions.png){:width="650px"}

To configure Fastly purge options:

1. In the **Fastly Configuration** section, expand **Advanced**.
2. All purge options display. Select "Yes" per purge option to enable automatic purging. Select "No" to disable automatic purging, allowing you to manually purge caches through the Cache Management page.
3. Click **Save Config** at the top of the page.
4. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section.

For more information, see [Fastly's configuration options](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}.

## Create a custom error/maintenance page {#fastly-errpg}

You can optionally create a custom page for errors or when your site is down for maintenance. Create your page with HTML code to provide detailed information why the site is temporarily down, instead of an HTTP error code.

To create a custom error/maintenance page:

1.	In the **Fastly Configuration** section, expand **Error/Maintenance Page** as the following figure shows.

	![Custom Fastly error page]({{ site.baseurl }}/common/images/cloud-fastly_err-pg.png){:width="650px"}
2.	Click **Set HTML**.
3.	In the provided field, enter your HTML code.	The HTML you enter can be a maximum of 65,535 bytes in length.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	Avoid using images on your site in the event Fastly is not available. To use images, refer to [Data URIs on the css-tricks site](https://css-tricks.com/data-uris/){:target="_blank"}.
	</div>
4.	When you're done, click **Upload** to send your updates to Fastly.
5.	Click **Save Config** at the top of the page.

## Create custom VCL snippets {#custom-vcl}

For extensive instructions to create custom VCL snippets and needed edge dictionaries or ACLs, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html)

## Extend Fastly timeout for the Magento Admin {#bulkaction}

Fastly sets a 180 second-timeout for HTTPS requests to the Magento Admin, so you may encounter timeouts if you need to complete bulk actions that take longer than 3 minutes. You can manage timeouts using Fastly 1.2.41.

1. In the *Fastly Configuration* section, expand **Advanced**.
2. Set the **Admin path timeout** value in seconds. This value cannot be more than one hour (3600 seconds).
3. Click **Save Config** at the top of the page.
4. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section.

Since version 1.2.39, Fastly gets the Magento Admin path for generating the VCL file from the `app/etc/env.php` configuration file.

## Configure GeoIP handling {#geoip}

The Fastly module includes GeoIP handling to automatically redirect visitors or provide a list of stores matching their obtained country code. If you already use a Magento extension for GeoIP handling, you may need to verify the features with Fastly options.

1. In the **Fastly Configuration** section, expand **Advanced**.
2. Scroll down and select **Yes** to **Enable GeoIP**. Additional configuration options display.
3. For GeoIP Action, select if the visitor is automatically redirected with **Redirect** or provided a list of stores to select from with **Dialog**.
4. For **Country Mapping**, click **Add** to enter a two-letter country code to map with a specific Magento store from a list. For a list of country codes, see [this site](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2){:target="_blank"}.

	![Add GeoIP country maps]({{ site.baseurl }}/common/images/cloud_fastly-geo-code.png)
5. Click **Save Config** at the top of the page.
6. After page reload, click *Upload VCL to Fastly* in the *Fastly Configuration* section.

Fastly also provides a series of [geolocation-related VCL features](https://docs.fastly.com/guides/vcl/geolocation-related-vcl-features){:target="_blank"} for customized geolocation coding.

## Configure DNS for Fastly {#fastly-dns}

You must complete these steps when you go live.

After checking with your registrar about where to change your DNS settings, add a CNAME record for your website that points to the Fastly service: `prod.magentocloud.map.fastly.net`. If you use multiple hostnames for your site, you must add a CNAME record for each one.

{: .bs-callout .bs-callout-info }
This does not work for an [apex domain](https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp){: target="_blank"} (also referred to as a *naked* domain). You must use a DNS provider that supports forwarding DNS queries to use an apex domain.

The following list contains examples of DNS providers for informational purposes. Use your preferred DNS provider.

*	CNAME with ALIAS record from [Dyn](http://dyn.com){:target="_blank"}
*	ANAME record on [DNS Made Easy](http://www.dnsmadeeasy.com){:target="_blank"}
*	ANAME at [easyDNS](https://www.easydns.com){:target="_blank"}
*	ACNAME at [CloudFlare](https://www.cloudflare.com){:target="_blank"}
*	ALIAS at [PointDNS](https://pointhq.com){:target="_blank"}

Many other DNS providers also offer workarounds to accomplish this goal. The most common is to add a CNAME record for the `www` host on the domain and then use the DNS provider's redirect service to redirect the apex over to the `www` version of the domain. Consult your DNS provider for more information.

Another option for apex domain is to add A records, which maps a domain name to the Fastly IP addresses:
* `151.101.1.124`
* `151.101.65.124`
* `151.101.129.124`
* `151.101.193.124`

Refer to [Go live checklist]({{ page.baseurl }}/cloud/live/go-live-checklist.html) for more information.

### TLS and Fastly {#fastly-tls}

If you use TLS with Fastly enabled in your environment, you must provide your DNS provider with a TXT record from Fastly. We provide a Domain Validated SSL certificate with Subject Alternative Name enabled, issued by GlobalSign. When entering your [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) for [DNS information](#fastly-dns) and going live, let us know you are using TLS, provide your domain names, and request the TXT record. You can then send this record to your DNS provider. The domain validation process is executed by Fastly.

For details on this TXT record, see Fastly's [DNS TXT record validation](https://docs.fastly.com/guides/securing-communications/domain-validation-for-tls-certificates#dns-text-record-verification){:target="_blank"}.

## Upgrade Fastly {#upgrade}

Fastly updates the Magento module to resolve issues, increase performance, and provide new features. You can check the [Magento Marketplace](https://marketplace.magento.com/fastly-magento2.html){:target="_blank"} and [GitHub](https://github.com/fastly/fastly-magento2/releases){:target="_blank"} for updates on the latest releases.

When you upgrade Fastly, you get the upgraded subset of default VCL snippets. When you finish upgrading, you must [upload upgraded default VCL snippets to Fastly](#upload-vcl-snippets):

1. In the *Fastly Configuration* section, click **Upload VCL to Fastly**.
2. After the upload completes, the modal automatically closes with a success message.

When you upgrade, the default VCL snippets you uploaded should not be affected or require any additional steps.

For information on upgrading modules, refer to [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html).

If you created a custom VCL snippet using the same name as a default snippet, you may need to verify and update those snippets. We do not recommend replacing existing default snippets with custom snippets of the same name. For details on custom VCL, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

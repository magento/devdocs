---
group: cloud-guide
title: Set up Fastly
redirect_from:
   - /guides/v2.2/cloud/configure/fastly-vcl-extend-timeout.html
   - /guides/v2.3/cloud/configure/fastly-vcl-extend-timeout.html
   - /guides/v2.2/cloud/access-acct/fastly.html
   - /guides/v2.3/cloud/access-acct/fastly.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

[Fastly]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html) is required for {{site.data.var.ece}}, and is used in Staging and Production environments. It works with Varnish to provide fast caching capabilities and a [Content Delivery Network](https://glossary.magento.com/content-delivery-network) (CDN) for static assets. Fastly is not available in Integration environments.

This information gets you started with installing and configuring Fastly.
We provide additional information for configuring backends and Origin shields, customizing
error pages, and adding custom VCL snippets.

For VCL snippets, experience developing that code is required for advanced
configurations.

The process for configuring Fastly includes:

- Get Fastly credentials for Staging and Production environments
- Enable Fastly CDN caching in your environment
- Upload Fastly VCL snippets
- Advanced configurations including VCL snippets
- Enable and configure the Fastly image optimization feature (Fastly IO)

## Get Fastly credentials {#cloud-fastly-creds}

During project provisioning, Magento adds your project to the [Fastly service account]({{ page.baseurl}}/cloud/cdn/cloud-fastly.html#fastly-service-account) for {{ site.data.var.ece }} and adds the Fastly account credentials to the configuration for the Staging and Production environments.

You need the Fastly credentials to configure Fastly CDN services from the Magento Admin UI and to submit Fastly API requests.

#### To view your Fastly credentials:

Use the following methods to find and save the Fastly service ID and API token for your environment:

- IaaS mounted shared directory—On Pro projects, use SSH to connect to your server and get the Fastly credentials from the `/mnt/shared/fastly_tokens.txt` file.

- Local workspace—From the command line, use the Magento Cloud CLI to [list and review]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html#variablelist) Fastly environment variables.

    ```bash
    magento-cloud variable:get -e <environment ID>
    ```

- Project Web UI—Check the following environment variables in the *[Environment configuration]({{ page.baseurl }}/cloud/project/projects.html#environment-configuration-variables)* section.

  - `CONFIG__DEFAULT__SYSTEM__FULL_PAGE_CACHE__FASTLY__FASTLY_API_KEY`

  - `CONFIG__DEFAULT__SYSTEM__FULL_PAGE_CACHE__FASTLY__FASTLY_SERVICE_ID`

{:.bs-callout .bs-callout-info}
If you cannot find the Fastly credentials for the Staging or Production environments, contact your Magento Technical Account Manager.

## Enable Fastly caching for your Cloud environments {#cloud-fastly-config}

**Prerequisites**

- [Fastly CDN for Magento 2 module]({{ page.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2) installed in the Staging and Production environment

- [Fastly credentials](#cloud-fastly-creds) for {{ site.data.var.ece }} Staging and Production environments

#### To enable Fastly CDN caching in Staging and Production

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > Settings > **Configuration** > **Advanced** > **System** and expand **Full Page Cache**.

   ![Expand to select Fastly]({{ site.baseurl }}/common/images/cloud_fastly_menu.png){:width="650px"}

1. In the **Caching Application** section, remove the selection from **Use system value**, and then select **Fastly CDN** from the drop-down list.

   ![Choose Fastly]({{ site.baseurl }}/common/images/cloud-fastly_enable-admin.png){:width="550px"}

1. Expand **Fastly Configuration** and [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module).

1. After configuring the caching options, click **Save Config** at the top of the page.

1. Clear the cache according to the notification. Then, navigate back to **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Fastly Configuration** to continue configuring Fastly.

## Test the Fastly credentials

1. On the Magento Admin UI, navigate to **Stores** > Settings > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.

1. If needed, add the **Fastly service ID** and **API token** values for your project environment.

    ![Fastly credentials Admin UI]({{ site.baseurl }}/common/images/cloud/cloud-fastly-credentials-admin-ui.png){:width="650px"}

   {: .bs-callout-info}
   Ignore the link to create a Fastly API token. Use the [Fastly
   credentials (Service ID and API token) that Magento](#cloud-fastly-creds) provided.

1. Click **Test credentials**.

1. If the test succeeds, click **Save Config**, and then clear the cache.

   If the test fails, verify that the correct service ID and API token values match the credentials for the current environment.

   If the test fails again, submit a support ticket or contact your Technical Account Manager. For Pro projects, include the URLs for your Production and Staging sites.  For Starter projects, include the URLs for your `Master` and Staging site.

{: .bs-callout-info}
If you need to change the Fastly API token credential for a Staging or Production environment, see [Change Fastly credentials](https://support.magento.com/hc/en-us/articles/360006935271-Change-account-owner-access-credentials-via-API-tokens-for-Fastly-on-Cloud) in the Magento Support Knowledgebase.

## Upload VCL to Fastly {#upload-vcl-snippets}

After you enable the Fastly module, upload the default [VCL code](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets) to the Fastly servers.  This code provides a series of VCL snippets that specify the configuration settings to enable caching and other Fastly CDN services for your {{ site.data.var.ece }}.

{: .bs-callout-info }
Fastly caching services do not work until you complete the initial upload of the Fastly VCL code for the {{ site.var.data.ee }} Staging and Production sites.

#### To upload the Fastly VCL:

1. In the **Fastly Configuration** section, click **Upload VCL to Fastly** as
   the following figure shows.

    ![Upload a Magento VCL to Fastly]({{ site.baseurl }}/common/images/cloud_upload-vcl-to-fastly.png)

1. After the upload completes, refresh the cache according to the notification at the top of the page.


## Custom configuration
Configure the following features and enable additional [configuration options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#further-configuration-options):

* [Upload Fastly VCL snippets](#upload-vcl-snippets)
* [Configure backends and Origin shielding](#backend)
* [Customize response pages]({{ page.baseurl }}/cloud/cdn/cloud-fastly-custom-response.html)

### Configure backends and Origin shielding {#backend}

Backend settings provide fine tuning for Fastly performance with Origin
shielding and timeouts. A _backend_ is a specific location (IP or domain) with
configured Origin shield and timeout settings for checking and providing cached
content.

_Origin shielding_ routes all requests for your store to a specific Point of
Presence (POP). When a request is received, the POP checks for cached content
and provides it. If it is not cached, it continues to the Shield POP, then to
the Origin server which caches the content. The shields reduce traffic directly
to the origin.

You can add multiple backends. Repeat these instructions to create multiple
backends. For example, you may need a backend specifically for
[Wordpress]({{ page.baseurl }}/cloud/cdn/fastly-vcl-wordpress.html) to
handle your blog.

1. Access and expand **Fastly Configuration**.

1. Expand **Backend settings** and click the gear to configure the default
   backend. A modal opens with options to select and configure.

	![Modify the backend]({{ site.baseurl }}/common/images/cloud_fastly-backend.png){:width="600px"}

1. Select the **Shield** location (or datacenter) closest to your AWS region.
   For example, if Staging is on the west coast of the United States
   (us-west-1), select the `sjc-ca-us` Fastly shield location. This is the POP
   that provides caching services.

	The following list shows which Faslty shield locations to use based an AWS
  region:

	- ap-northeast-1 => tokyo-jp2
	- ap-southeast-1 => singapore-sg
	- ap-southeast-2 => sydney-au
	- ap-south-1 => singapore-sg
	- eu-central-1 => frankfurt-de
	- eu-west-1 => london-uk, london_city-uk
	- eu-west-2 => london-uk, london_city-uk
	- eu-west-3 => cdg-par-fr
	- sa-east-1	=> gru-br-sa
	- us-east-1 => iad-va-us
	- us-east-2 => iad-va-us
	- us-west-1 => sjc-ca-us
	- us-west-2 => sea-wa-us

1. Modify the timeout values (in microseconds) for the connection to the
   shield, time between bytes, and time for the first byte. We recommend keeping
   the default timeout settings.
  
1. Optionally, select to Activate the backend and Shield after editing or saving.

1. Click **Upload** to save. The settings are communicated to Fastly.

1. In the Magento Admin, click **Save Config**.

For more information from Fastly, see the Magento 2 [Backend settings guide](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/Guides/BACKEND-SETTINGS.md).

### Configure purge options {#purge}

Fastly provides multiple types of purge options on your Magento Cache Management
page including purging product category, product assets, and content. When enabled,
Fastly watches for events to automatically purge those caches. If you disable a
purge option, you can manually purge Fastly aches after finishing updates
through the Cache Management page.

The options include:

* **Purge category**: Purges product category content (not product content) when
you add and update a single product. You may want to keep this disabled and
enable purge product, which purges products and product categories.

* **Purge product**: Purges all product and product category content when
saving a single modification to a product. Enabling purge product can be helpful
to immediately get updates to customers when changing a price, adding a product
option, and when product inventory is out-of-stock.
* **Purge CMS page**: Purges page content when updating and adding pages to the
Magento CMS. For example, you may want to purge when updating your Terms and
Conditions or Return policy. If you rarely make these changes, you could disable
automatic purging.
* **Soft purge**: Sets changed content to stale and purges according to the
stale timing. In combination with the stale timings your customers will be
served stale content very fast while Fastly is updating the content in the
background.

![Configure purge options]({{ site.baseurl }}/common/images/cloud_fastly-purgeoptions.png){:width="650px"}

To configure Fastly purge options:

1.  In the *Fastly Configuration* section, expand **Advanced**.

1.  All purge options display. Select "Yes" per purge option to enable automatic
purging. Select "No" to disable automatic purging, allowing you to manually
purge caches through the Cache Management page.

1.  Click **Save Config** at the top of the page.

1.  After the page reloads, click **Upload VCL to Fastly** in the
   *Fastly Configuration* section.

For more information, see [the Fastly configuration options](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/CONFIGURATION.md#further-configuration-options).

### Create custom VCL snippets {#custom-vcl}

For extensive instructions to create custom VCL snippets and needed edge
dictionaries or ACLs, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html)

### Extend Fastly timeout for the Magento Admin {#bulkaction}

Fastly sets a 180 second-timeout for HTTPS requests to the Magento Admin, so you
may encounter timeouts if you need to complete bulk actions that take longer than
3 minutes. You can manage timeouts using Fastly 1.2.41.

1.  In the *Fastly Configuration* section, expand **Advanced**.

1.  Set the **Admin path timeout** value in seconds. This value cannot be more
   than one hour (3600 seconds).
   
1.  Click **Save Config** at the top of the page.

1.  After the page reloads, click **Upload VCL to Fastly** in the
   *Fastly Configuration* section.

Since version 1.2.39, Fastly gets the Magento Admin path for generating the VCL
file from the `app/etc/env.php` configuration file.

### Configure GeoIP handling {#geoip}

The Fastly module includes GeoIP handling to automatically redirect visitors or
provide a list of stores matching their obtained country code. If you already use
a Magento extension for GeoIP handling, you may need to verify the features with
Fastly options.

1. In the *Fastly Configuration* section, expand **Advanced**.

1. Scroll down and select **Yes** to **Enable GeoIP**. Additional configuration
   options display.
   
1. For GeoIP Action, select if the visitor is automatically redirected with
   **Redirect** or provided a list of stores to select from with **Dialog**.
   
1. For **Country Mapping**, click **Add** to enter a two-letter country code to
   map with a specific Magento store from a list. For a list of country codes, see [this site](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

	![Add GeoIP country maps]({{ site.baseurl }}/common/images/cloud_fastly-geo-code.png)
	
1. Click **Save Config** at the top of the page.

1. After page reload, click **Upload VCL to Fastly** in the *Fastly Configuration* section.

Fastly also provides a series of [geolocation-related VCL features](https://docs.fastly.com/guides/vcl/geolocation-related-vcl-features)
for customized geolocation coding.

## DNS configuration {#dns}

You need to update the DNS configuration to  your:

- Set all necessary redirects, especially if you are migrating from an existing site
- Set the zone’s root resource record to address the hostname
- Lower the value for the Time-to-Live (TTL) to refresh DNS information to correctly point customers faster to the Production store

We recommend a significantly lower TTL value when switching the DNS record. This value tells the DNS how long to cache the DNS record. When shortened, it refreshes the DNS faster. For example, changing this value from 3 days to 10 minutes. Be advised, this adds load to the web server.

After checking with your registrar about where to change your DNS settings, add a CNAME record for your website that points to the Fastly service: `prod.magentocloud.map.fastly.net`. If you use multiple hostnames for your site, you must add a CNAME record for each one.

CNAMES cannot be set for apex domains, also referred to as a naked or base domains. You must use `A` records for this.
`A` records map a domain name to the following Fastly IP addresses:

- `151.101.1.124`
- `151.101.65.124`
- `151.101.129.124`
- `151.101.193.124`

Refer to [Go live checklist]({{ page.baseurl }}/cloud/live/go-live-checklist.html)
for more information.

### TLS and Fastly {#fastly-tls}

If you use TLS with Fastly enabled in your environment, you must provide your
DNS provider with a TXT record from Fastly. We provide a Domain Validated SSL
certificate with Subject Alternative Name enabled, issued by GlobalSign. When
entering your [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) for
DNS information and going live, let us know you are using TLS, provide your
domain names, and request the TXT record. You can then send this record to your
DNS provider. The domain validation process is executed by Fastly.

For details on this TXT record, see the Fastly [DNS TXT record validation](https://docs.fastly.com/guides/securing-communications/domain-validation-for-tls-certificates#dns-text-record-verification).

## Upgrade Fastly {#upgrade}

Fastly updates the Magento module to resolve issues, increase performance, and
provide new features. You can check the [Magento Marketplace](https://marketplace.magento.com/fastly-magento2.html)
and [GitHub](https://github.com/fastly/fastly-magento2/releases)
for updates on the latest releases.

When you upgrade Fastly, you get the upgraded subset of default VCL snippets.
When you finish upgrading, you must [upload upgraded default VCL snippets to Fastly](#upload-vcl-snippets):

1.  In the *Fastly Configuration* section, click **Upload VCL to Fastly**.
1.  After the upload completes, the modal automatically closes with a success message.

When you upgrade, the default VCL snippets you uploaded should not be affected or require any additional steps.

For information on upgrading modules, refer to [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html).

If you created a custom VCL snippet using the same name as a default snippet,
you may need to verify and update those snippets. We do not recommend replacing
existing default snippets with custom snippets of the same name. For details on
custom VCL, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

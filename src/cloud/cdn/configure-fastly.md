---
group: cloud-guide
title: Set up Fastly
redirect_from:
   - /cloud/access-acct/fastly.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

[Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) is required for {{site.data.var.ece}}, and is used in Staging and Production environments. It works with Varnish to provide fast caching capabilities and a [Content Delivery Network](https://glossary.magento.com/content-delivery-network) (CDN) for static assets. Fastly also provides a Web Application Firewall (WAF) to secure your site and Cloud infrastructure. You must route all incoming site traffic through Fastly to protect your site and Cloud infrastructure from malicious traffic and attacks.

{:.bs-callout-info}
Fastly is not available in Integration environments.

Complete the following steps to enable, configure, and test Fastly early in your site development process to enable secure access to your site.

-  Get Fastly credentials for Staging and Production environments
-  Enable Fastly CDN caching in your environment
-  Upload Fastly VCL snippets
-  Test Fastly caching in pre-production environments

<!-- This is the new overview for the Fastly set up topic after removing the custom configuration information to its own topic. Coming next -- adding test information, and updating the DNS configuration section with instructions for provisioning SSL/TLS certificates and updating the DNS configuration with production settings.-->

When you are ready to launch your Production site, you must update your DNS configuration to point your production domains to the Fastly servers and complete additional configuration tasks to send Production store traffic to the Fastly servers.

{:.bs-callout-info}
After you enable and verify that Fastly works with the default settings, you can customize cache configuration settings and enable additional options such as image optimization, edge modules, and custom VCL code. See [Customize cache configuration]({{ site.baseurl }}/cloud/cdn/configure-fastly-customize-cache.html).

## Get Fastly credentials {#cloud-fastly-creds}

During project provisioning, Magento adds your project to the [Fastly service account]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-service-account-and-credentials) for {{ site.data.var.ece }} and adds the Fastly account credentials to the Staging and Production environment configuration.

You need the Fastly credentials to configure Fastly CDN services from the Magento Admin UI and to submit Fastly API requests.

Use the following methods to find and save the Fastly service ID and API token for your environment:

{:.procedure}
To view your Fastly credentials:

-  IaaS-mounted shared directory—On Pro projects, use SSH to connect to your server and get the Fastly credentials from the `/mnt/shared/fastly_tokens.txt` file.

-  Local workspace—From the command line, use the Magento Cloud CLI to [list and review]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html) Fastly environment variables.

   ```bash
   magento-cloud variable:get -e <environment ID>
   ```

-  Project Web UI—Check the following environment variables in the *[Environment configuration variables]({{ site.baseurl }}/cloud/project/projects.html#environment-configuration-variables)* section.

   -  `CONFIG__DEFAULT__SYSTEM__FULL_PAGE_CACHE__FASTLY__FASTLY_API_KEY`

   -  `CONFIG__DEFAULT__SYSTEM__FULL_PAGE_CACHE__FASTLY__FASTLY_SERVICE_ID`

 {:.bs-callout-info}
If you cannot find the Fastly credentials for the Staging or Production environments, contact your Magento Customer Technical Advisor (CTA).

## Enable Fastly caching for your Cloud environments {#cloud-fastly-config}

**Prerequisites:**

-  Latest version of the [Fastly CDN for Magento 2 module]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2) installed in the Staging and Production environments. See [Upgrade Fastly](#upgrade).

-  [Fastly credentials](#cloud-fastly-creds) for {{ site.data.var.ece }} Staging and Production environments

{:.procedure}
To enable Fastly CDN caching in Staging and Production:

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > Settings > **Configuration** > **Advanced** > **System** and expand **Full Page Cache**.

   ![Expand to select Fastly]({{ site.baseurl }}/common/images/cloud/cloud_fastly_menu.png){:width="650px"}

1. In the _Caching Application_ section, remove the selection from **Use system value**, and then select **Fastly CDN** from the drop-down list.

   ![Choose Fastly]({{ site.baseurl }}/common/images/cloud/cloud-fastly_enable-admin.png){:width="550px"}

1. Expand **Fastly Configuration** and [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module).

1. After configuring the caching options, click **Save Config** at the top of the page.

1. Clear the cache according to the notification.

1. Navigate back to **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Fastly Configuration** to continue configuring Fastly.

### Test the Fastly credentials

1. On the Magento Admin UI, navigate to **Stores** > Settings > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.

1. If needed, add the **Fastly service ID** and **API token** values for your project environment.

   ![Fastly credentials Admin UI]({{ site.baseurl }}/common/images/cloud/cloud-fastly-credentials-admin-ui.png){:width="650px"}

    {:.bs-callout-info}
   Ignore the link to create a Fastly API token. Use the [Fastly credentials (Service ID and API token) that Magento](#cloud-fastly-creds) provided.

1. Click **Test credentials**.

1. If the test succeeds, click **Save Config**, and then clear the cache.

   If the test fails, verify that the correct service ID and API token values match the credentials for the current environment.

   If the test fails again, submit a support ticket or contact your Customer Technical Advisor (CTA). For Pro projects, include the URLs for your Production and Staging sites.  For Starter projects, include the URLs for your `Master` and Staging site.

 {:.bs-callout-info}
If you need to change the Fastly API token credential for a Staging or Production environment, see [Change Fastly credentials]({{ site.baseurl}}/cloud/cdn/cloud-fastly.html#change-your-fastly-api-token).

### Upload VCL to Fastly {#upload-vcl-snippets}

After you enable the Fastly module, upload the default [VCL code](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets) to the Fastly servers.  This code provides a series of VCL snippets that specify the configuration settings to enable caching and other Fastly CDN services for your {{ site.data.var.ece }}.

 {:.bs-callout-info}
Fastly caching services do not work until you complete the initial upload of the Fastly VCL code for the {{ site.var.data.ee }} Staging and Production sites.

{:.procedure}
To upload the Fastly VCL:

1. In the _Fastly Configuration_ section, click **Upload VCL to Fastly** as the following figure shows.

   ![Upload a Magento VCL to Fastly]({{ site.baseurl }}/common/images/cloud/cloud_fastly-upload-vcl-admin-ui.png)

1. After the upload completes, refresh the cache according to the notification at the top of the page.

## DNS configuration {#dns}

To enable Fastly caching on your Staging and Production sites, you need make the following changes to the DNS configuration for your site:

-  Set all necessary redirects, especially if you are migrating from an existing site
-  Set the zone’s root resource record to address the hostname
-  Lower the value for the Time-to-Live (TTL) to refresh DNS information to point customers to the correct Production store

We recommend a significantly lower TTL value when switching the DNS record. This value tells the DNS how long to cache the DNS record. When shortened, it refreshes the DNS faster. For example, you can change the TTL value from 3 days to 10 minutes when you are testing your site. Be advised that shortening the TTL value  adds load to the web server.

After checking with your registrar about where to change your DNS settings, add a CNAME record for your website that points to the Fastly service: `prod.magentocloud.map.fastly.net`. If you use multiple hostnames for your site, you must add a CNAME record for each one.

CNAME records cannot be set for apex domains, also referred to as a naked or base domains. You must use `A` records for this.
`A` records map a domain name to the following Fastly IP addresses:

-  `151.101.1.124`
-  `151.101.65.124`
-  `151.101.129.124`
-  `151.101.193.124`

Refer to [Go live checklist]({{ site.baseurl }}/cloud/live/site-launch-checklist.html) for more information.

### TLS and Fastly

To enable the Fastly service to serve secure traffic over HTTPS, your environment must have a Domain-Validated SSL/TLS certificate. Magento provides an automated process to validate domain ownership, provision a Let's Encyrpt SSL/TLS certificate, and apply it to your Cloud environment. This automation requires you to supply information to enable domain validation using **one** of the following methods:

-  **DNS validation**–Update your DNS configuration with CNAME records that point to the Fastly service
-  **ACME challenge CNAME records**–Add the ACME challenge CNAME records to your DNS configuration for each domain

As soon as the domains are validated, Magento provisions the Let's Encrypt TLS/SSL certificate, and applies it to the Staging or Production environment. Each environment has one certificate for all domains and subdomains in that environment. The process can take several hours. We recommend that you complete the DNS configuration updates several days in advance to prevent delays in site development and site launch.

{:.tip}
If you have a Production domain that is not active yet, you can still add the ACME challenge CNAME record for domain validation. Adding the records early allows Magento to provision the SSL/TLS certificate with the correct domains before site launch.

<!-- Coming soon:  Instructions and examples for DNS config updates-->

## Upgrade the Fastly module {#upgrade}

Fastly updates the Fastly CDN for Magento 2 module to resolve issues, increase performance, and provide new features.
We recommend that you update the Fastly module in your Staging and Production environments to the [latest version](https://github.com/fastly/fastly-magento2/releases).

After you update the module, you must upload the VCL code to apply the changes to the Fastly service configuration.

{:.procedure}
To check the version of Fastly CDN module for Magento 2:

1. Change to the root directory of your Cloud environment.

1. Use Composer to check the installed version.

   ```bash
   composer show *fastly*
   ```

1. If the [latest release](https://github.com/fastly/fastly-magento2/releases)is not installed, complete the steps to upgrade the Fastly module.

{:.procedure}
To upgrade the Fastly module:

1. In your local Integration environment, use the following module information to [upgrade the Fastly module]({{ site.baseurl }}/cloud/howtos/install-components.html).

   ```text
   module name: fastly/magento2
   repository: https://github.com/fastly/fastly-magento2.git
   ```

1. Push your updates to the Staging environment.

1. Log in to the Magento Admin UI for your Staging environment to [upload the VCL code](#upload-vcl-snippets).

1. [Verify Fastly services]({{ site.baseurl }}/cloud/cdn/trouble-fastly.html#verify-or-debug-fastly-services) on the {{ site.data.var.ee }} Staging site.

After you verify Fastly services on the Staging site, repeat the upgrade process in the Production environment.

{:.bs-callout-warning}
If you have added a custom VCL snippet that has the same name as a default snippet, you may need to verify and update those snippets after you upgrade the Fastly module. We do not recommend replacing existing default snippets with custom snippets of the same name. For details on custom VCL, see [Custom Fastly VCL snippets]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

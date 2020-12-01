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
-  Enable Fastly CDN caching
-  Upload Fastly VCL snippets
-  Update DNS configuration to route traffic to the Fastly service
-  Test Fastly caching

{:.bs-callout-info}
After you enable and verify that Fastly works with the default settings, you can customize cache configuration settings and enable additional options such as image optimization, edge modules, and custom VCL code. See [Customize cache configuration]({{ site.baseurl }}/cloud/cdn/configure-fastly-customize-cache.html).

## Get Fastly credentials {#cloud-fastly-creds}

During project provisioning, Magento adds your project to the [Fastly service account]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-service-account-and-credentials) for {{ site.data.var.ece }} and creates Fastly account credentials for the Starter `master` and Pro Staging and Production environments. Each environment has unique credentials.

You need the Fastly credentials to configure Fastly CDN services from the Magento Admin UI and to submit Fastly API requests.

{:.bs-callout-info}
With {{ site.data.var.ece }}, you cannot access the Fastly Admin UI directly. You must use the Magento Admin UI to review and update the Fastly configuration for your environments.  If you cannot resolve an issue using the Fastly capabilities in the Magento Admin UI, submit a [Magento Support](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) ticket.

Use the following methods to find and save the Fastly service ID and API token for your environment:

{:.procedure}
To view your Fastly credentials:

-  IaaS-mounted shared directory—On Pro projects, use SSH to connect to your server and get the Fastly credentials from the `/mnt/shared/fastly_tokens.txt` file. Staging and Production environments have unique credentials. You must get the credentials for each environment.

-  Local workspace—From the command line, use the Magento Cloud CLI to [list and review]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html) Fastly environment variables.

   ```bash
   magento-cloud variable:get -e <environment ID>
   ```

-  Project Web UI—Check the following environment variables in the *[Environment configuration variables]({{ site.baseurl }}/cloud/project/projects.html#environment-configuration-variables)* section.

   -  `CONFIG__DEFAULT__SYSTEM__FULL_PAGE_CACHE__FASTLY__FASTLY_API_KEY`

   -  `CONFIG__DEFAULT__SYSTEM__FULL_PAGE_CACHE__FASTLY__FASTLY_SERVICE_ID`

 {:.bs-callout-info}
If you cannot find the Fastly credentials for the Staging or Production environments, contact your Magento Customer Technical Advisor (CTA).

## Enable Fastly caching {#cloud-fastly-config}

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
If you need to change the Fastly API token credential for a Staging or Production environment, see [Change Fastly credentials]({{ site.baseurl}}/cloud/cdn/cloud-fastly.html#change-fastly-api-token).

### Upload VCL to Fastly {#upload-vcl-snippets}

After you enable the Fastly module, upload the default [VCL code](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets) to the Fastly servers.  This code provides a series of VCL snippets that specify the configuration settings to enable caching and other Fastly CDN services for your {{ site.data.var.ece }}.

 {:.bs-callout-info}
Fastly caching services do not work until you complete the initial upload of the Fastly VCL code for the {{ site.var.data.ee }} Staging and Production sites.

{:.procedure}
To upload the Fastly VCL:

1. In the _Fastly Configuration_ section, click **Upload VCL to Fastly** as the following figure shows.

   ![Upload a Magento VCL to Fastly]({{ site.baseurl }}/common/images/cloud/cloud_fastly-upload-vcl-admin-ui.png)

1. After the upload completes, refresh the cache according to the notification at the top of the page.

## Provision SSL/TLS certificates

Magento provides a Domain-Validated Let's Encrypt SSL/TLS certificate to serve secure HTTPS traffic from Fastly. Magento provides one certificate for each Pro Production, Staging, and Starter Production environment to secure all domains in that environment.

{:.bs-callout-info}
You can provide your own TLS/SSL certificate instead of using the Let's Encrypt certificate provided by Magento. However, this process requires additional work to set up and maintain. To choose this option, submit a [Magento Support ticket](https://support.magento.com/hc/en-us/articles/360019088251) or work with your CTA to add custom hosted certificates to your Cloud environments.

To enable the SSL/TLS certificates for your environments, Magento automation completes the following steps:

-  Validates domain ownership
-  Provisions a Let's Encrypt SSL/TLS certificate that covers specified top-level and subdomains for your Magento stores
-  Uploads the certificate to the Cloud environment when the site is live

This automation requires you to update the DNS configuration for your site to supply domain validation information. Use **one** of the following methods:

-  **DNS validation**–For live sites, update your DNS configuration with CNAME records that point to the Fastly service
-  **ACME challenge CNAME records**–Update your DNS configuration with ACME challenge CNAME records provided by Magento for each domain in your environment

   {:.bs-callout-tip}
   If you have a Production domain that is not active yet, use the ACME challenge CNAME records for domain validation. Adding the records to your DNS configuration early allows Magento to provision the SSL/TLS certificate with the correct domains before site launch.

When domain validation completes, Magento provisions the Let's Encrypt TLS/SSL certificate, and uploads it to live Staging or Production environments. This process can take up to 12 hours. We recommend that you complete the DNS configuration updates several days in advance to prevent delays in site development and site launch.

## Update DNS configuration with development settings

During the initial Fastly setup process, you can use the following URLs to configure and test Fastly caching in Staging and Production environments:

-  Pro projects:
   -  `mcprod.<your-domain>.com`
   -  `mcstaging.<your-domain>.com`

-  Starter projects:
   -  `mcprod.<your-domain>.com`

These are the default pre-production URLs available as soon as your project is provisioned. The value for `"your-domain"` is the domain name you specified during the onboarding process.

You must update your DNS configuration to route traffic from your store URLs to the Fastly service. When you update the configuration, Magento automatically provisions the required SSL/TLS certificates and uploads them to your Cloud environments. This provisioning can take up to 12 hours.

{:.bs-callout-info}
When you are ready to launch your Production site, you must update the DNS configuration again to point your production domains to the Fastly service and complete additional configuration tasks. See [Launch checklist]({{ site.baseurl }}/cloud/live/site-launch-checklist.html).

**Prerequisites:**

-  Enable the Fastly module.
-  Upload the default Fastly VCL code.
-  Provide a list of top-level and subdomains for each environment to your Customer Technical Advisor (CTA) or submit them in a Magento Support ticket.
-  Wait for confirmation that the specified domains have been added to your Cloud environments.
-  On Starter projects, add the domains to your Fastly service configuration. See [Manage domains]({{ site.baseurl }}/cloud/cdn/configure-fastly-customize-cache.html#manage-domains).
-  For information about updating the DNS configuration, check with your [DNS registrar](https://lookup.icann.org/) for the correct method for your domain service.

{:.procedure}
To update your DNS configuration for development:

1. Add CNAME records to point pre-production URLs to the Fastly service: `prod.magentocloud.map.fastly.net`, for example:

   | Domain or Subdomain | CNAME
   |---------------------|------
   | mcprod.your-domain.com | prod.magentocloud.map.fastly.net
   | mcstaging.your-domain.com | prod.magentocloud.map.fastly.net

   When the CNAME records are live, Magento provisions certificates and uploads the SSL/TLS certificates.

   {:.bs-callout-info}
   If you plan to use apex domains (`your-domain.com`) for your Production site, you must configure DNS address records (A records) to point to the Fastly server IP addresses. See [Update DNS configuration with production settings]({{ site.baseurl }}/cloud/live/site-launch-checklist.html#dns).

1. Add ACME challenge CNAME records for domain validation and pre-provisioning of Production SSL/TLS certificates, for example:

   | Domain or Subdomain  | CNAME
   |----------------------|---------
   | _acme-challenge.your-domain.com<br>| 0123456789abcdef.validation.magento.cloud
   | _acme-challenge.www.your-domain.com<br> | 9573186429stuvwx.validation.magento.com
   | _acme-challenge.mystore.your-domain.com<br> | 1234567898zxywvu.validation.magento.cloud
   | _acme-challenge.subdomain.your-domain.com<br>| 1098765743lmnopq.validation.magento.cloud

   After adding the CNAME records, Magento validates the domains and provisions the SSL/TLS certificate for the environment. When you update the DNS configuration to route traffic from these domains to the Fastly service, Magento uploads the certificate to the environment.

1. Update the Magento Base URL.

   -  Use SSH to log in to the Production environment.

      ```bash
      magento-cloud ssh
      ```

   -  Use the Magento CLI to change the base URL for your store.

      ```
      php bin/magento setup:store-config:set --base-url="https://mcstaging.your-domain.com/"
      ```

   {:.bs-callout-info}
   As an alternative to using the Magento CLI, you can update the Base URL from the [Magento Admin](https://docs.magento.com/user-guide/stores/store-urls.html#configure-the-base-url).

1. Restart web browser.

1. Test your website.

## Test Fastly caching

After you complete the DNS configuration changes, use the [cURL](https://curl.haxx.se/) command-line tool to verify that Fastly cache is working.

{:.procedure}
To check the response headers:

1. In a terminal, use the following `curl` command to test your live site URL:

   ```bash
   curl -vo /dev/null -H Fastly-Debug:1 https://<live-URL>
   ```

   If you have not set a static route or completed the DNS configuration for the domains on your live site, use the `--resolve` flag, which bypasses DNS name resolution.

   ```bash
   curl -vo /dev/null -H Fastly-Debug:1 --resolve <live-URL-hostname>:443:<live-IP-address>
   ```

1. In the response, verify the [headers]({{ site.baseurl }}/cloud/cdn/trouble-fastly.html#response-headers) to ensure that Fastly is working. You should see following unique headers in the response:

   ```http
   < Fastly-Magento-VCL-Uploaded: yes
   < X-Cache: HIT, MISS
   ```

If the headers do not have the correct values, see [Resolve errors found in the response headers]({{ site.baseurl }}/cloud/cdn/trouble-fastly.html#curl) for troubleshooting help.

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

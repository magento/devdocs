---
group: cloud-guide
title: Reroute requests to WordPress or another backend using Fastly
redirect_from:
   - /guides/v2.2/cloud/configure/fastly-vcl-wordpress.html
   - /guides/v2.3/cloud/configure/fastly-vcl-wordpress.html
functional_areas:
  - Cloud
  - Setup
---

The following procedure describes how to use the _Other CMS/backend integration_ Fastly Edge Module with an Edge Dictionary to create and upload the custom VCL code to reroute incoming requests from a {{ site.data.var.ee }} store (`staging.example.com`) to a separate WordPress site (`customer.example.com`). You can follow a similar process to reroute requests to other CMS backends.

{: .bs-callout-info }
We recommend adding custom VCL configurations to a Staging environment where you can test them before updating the Fastly service configuration in the Production environment.

{:.procedure}
To reroute requests from {{ site.data.var.ee }} to Wordpress:

1. [Upgrade the Fastly Module]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upgrade) to the latest version.

1. Verify the environment configuration for the Fastly service. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).

1. Ensure that you have the credentials to access the Magento Admin UI for the Staging and Production environments.

1. Enable [Fastly Edge Modules](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/Edge-Modules/EDGE-MODULES.md) in the Staging and Production environments.

1. Identify the URL paths to reroute to the WordPress backend.

1. Complete the following tasks to configure the Fastly service and create the custom VCL code to reroute the requests to the WordPress backend.

   -  Create an Edge Dictionary that specifies the paths to reroute from {{ site.data.var.ee }} to the backend.
   -  Add the WordPress backend to the Fastly service configuration and attach the request condition for the URL rewrites.
   -  Configure the *Other CMS/backend integration* Edge Module to handle the URL rewrites from {{ site.data.var.ee }} to the WordPress backend.

   For detailed instructions, see [Fastly Edge Modules - Other CMS/Backend integration](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/Edge-Modules/EDGE-MODULE-OTHER-CMS-INTEGRATION.md) in the _Fastly CDN module for Magento 2_ documentation.

1. After completing the configuration, test your {{ site.var.data.ee }} store to ensure that the specified URL requests for WordPress are rerouted correctly.


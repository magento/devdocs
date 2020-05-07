---
group: cloud-guide
title: Reroute requests to a CMS backend
redirect_from:
   - /cloud/configure/fastly-vcl-wordpress.html
functional_areas:
  - Cloud
  - Setup
---

The following procedure describes how to reroute incoming requests from a {{ site.data.var.ee }} store to a separate WordPress site using the Fastly edge module _Other CMS/backend integration_ with an Edge dictionary.  You can follow a similar process to reroute requests to other CMS backends.

Edge modules help you create and upload custom VCL code from the Magento Admin UI instead of manually writing the VCL code and uploading it using the Fastly API.

 {:.bs-callout-info}
We recommend adding custom VCL configurations to a Staging environment where you can test them before updating the Fastly service configuration in the Production environment.

{:.procedure}
Prerequisites

{%include cloud/cloud-fastly-prereqs-custom-vcl.md%}

{:.procedure}
To reroute requests from {{ site.data.var.ee }} to WordPress:

1. Enable Fastly Edge Modules in the Staging or Production environment.

   -  Log in to the Magento Admin.

   -  Navigate to **Stores** > Settings > **Configuration** > **Advanced** > **System** > **Full Page Cache** > **Fastly Configuration** > **Advanced**.

   -  Set the value for **Fastly Edge Modules** to **Yes**.

   -  Save the configuration.

1. Identify the URL paths to reroute to the WordPress backend.

1. Complete the following tasks to configure the Fastly service and create the custom VCL code to reroute the requests to the WordPress backend.

   -  Create an Edge Dictionary that specifies the paths to reroute from the {{ site.data.var.ee }} store to the backend.

   -  Add the WordPress backend to the Fastly service configuration and attach the request condition for the URL rewrites.

   -  Configure the *Other CMS/backend integration* Edge Module to handle the URL rewrites from {{ site.data.var.ee }} to the WordPress backend.

   For detailed instructions, see [Fastly Edge Modules - Other CMS/Backend integration](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/Edge-Modules/EDGE-MODULE-OTHER-CMS-INTEGRATION.md) in the _Fastly CDN module for Magento 2_ documentation.

1. After updating the Fastly service configuration, test your {{ site.var.data.ee }} store to ensure that the specified URL requests for WordPress are rerouted correctly.
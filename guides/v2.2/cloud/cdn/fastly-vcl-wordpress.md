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

If you need to integrate additional backends into your site such as a backend to serve blog content from a [Wordpress]({{ page.baseurl }}/cloud/cdn/fastly-vcl-wordpress.html) site, you must create and upload custom VCL for your Fastly service configuration to add the backend and route requests from your {{ site.data.var.ee }} store to the Wordpress backend.

The following procedure describes how to use [Fastly Edge Modules](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api) to create and upload the custom VCL code to reroute incoming requests from a {{ site.data.var.ee }} store (`staging.example.com`) to a separate WordPress site (`customer.example.com`) that hosts related content like blog posts and customer stories. You can follow a similar process to reroute requests to other CMS backends. 

{: .bs-callout-info }
We recommend adding custom VCL configurations to a Staging environment where you can test them before running against Production.

{:.procedure}
To reroute requests from {{ site.data.var.ee }} to Wordpress:

1. Configure the {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).

2. Get credentials to access both the Fastly API and the Magento Admin UI for your {{ site.data.var.ece }} environment.

3. Identify the URL paths to reroute to the WordPress backend.

4. Use the Fastly Edge module feature to create the custom VCL code to reroute the requests to the WordPress backend. See  [Fastly Edge Modules - Other CMS/Backend integration](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/Edge-Modules/EDGE-MODULE-OTHER-CMS-INTEGRATION.md) in the _Fastly CDN module for Magento 2_ documentation.

5. After completing the configuration, test your {{ site.var.data.ee }} store to ensure that the specified URL requests for WordPress are rerouted correctly.


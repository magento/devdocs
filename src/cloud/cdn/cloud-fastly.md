---
group: cloud-guide
title: Fastly
functional_areas:
  - Cloud
  - Setup
  - Security
---

{:.bs-callout-warning}
To maintain PCI compliance for {{site.data.var.ee}} sites deployed on the Cloud platform, you must [set up Fastly] on your Starter master, Pro Production, and Pro Staging environments. If you are using {{ site.data.var.ee }} in a headless deployment, we highly recommend that you use Fastly to cache GraphQL responses. See [Caching with Fastly] in the *GraphQL Developer Guide*.

Fastly provides the following services to optimize and secure content delivery operations for your {{ site.data.var.ece }} projects. These services are included with your {{ site.data.var.ece }} subscription at no additional cost.

-  **Content Delivery Network (CDN)**—Varnish-based service that caches your site pages, assets, CSS, and more in backend data centers you set up. As customers access your site and stores, the requests hit Fastly to load cached pages faster. The CDN service provides the following features:

   -  Cache your site pages, assets, CSS, and more in back-end data centers that you set up to reduce bandwidth load and costs

   -  Use [Fastly custom VCL snippets] (Varnish 2.1 compliant) to modify how caching responds to requests

   -  Configure [purge options] to clear generated content

   -  Set up [GeoIP service support]

   -  [Force unencrypted requests over to TLS]

   -  [Customize Fastly timeout] settings to prevent 503 responses on bulk operation requests

   -  Create [custom error response pages]

-  **Security**—After you set up your {{ site.data.var.ece }} project to use the Fastly CDN, additional security features are available to protect your sites and network:

   -  [Web Application Firewall (WAF)](https://devdocs.magento.com/cloud/cdn/fastly-waf-service.html)—Managed web application firewall service that provides PCI-compliant protection to block malicious traffic before it can damage your production {{ site.data.var.ece }} sites and network. The WAF service is available on Pro and Starter Production environments only.

   -  [Distributed Denial of Service (DDoS) protection](#ddos-protection)—Built-in DDoS protection against common attacks like Ping of Death, Smurf attacks, as well as other ICMP-based floods.

   -  [SSL/TLS certificates]({{site.baseurl}}/cloud/cdn/configure-fastly.html#provision-ssltls-certificates)–The Fastly service requires an SSL/TLS certificate to serve secure traffic over HTTPS. {{site.data.var.ee}} provides a Domain-validated Let's Encrypt SSL/TLS certificate for each Staging and Production environment. {{site.data.var.ee}} completes domain validation and certificate provisioning during the Fastly set up process.

   -  **Origin cloaking**–Prevents traffic from bypassing the Fastly WAF and hides the IP addresses of your origin servers to protect them from direct access and DDoS attacks. Origin cloaking is enabled by default on {{ site.data.var.ece }} Pro Production projects. To enable origin cloaking on {{ site.data.var.ece }} Starter Production projects, submit a [{{site.data.var.ee}} support ticket](https://support.magento.com/hc/en-us/articles/360019088251).  If you have traffic that does not require caching, you can customize the Fastly service configuration to allow requests to [bypass the Fastly cache]({{site.baseurl}}/cloud/cdn/fastly-vcl-bypass-to-origin.html).

-  [Image optimization]({{site.baseurl}}/cloud/cdn/fastly-image-optimization.html)—Offloads image processing and resizing load to the Fastly service freeing servers to process orders and conversions efficiently.

-  **Fastly CDN and WAF logs**–For {{ site.data.var.ece }} Pro projects, you can use the New Relic Logs service to review and analyze Fastly CDN and WAF log data. See [New Relic](https://devdocs.magento.com/cloud/project/new-relic.html#new-relic-logs).

## Fastly CDN module for Magento 2

Fastly services for {{ site.data.var.ece }} use the [Fastly CDN module for Magento 2] installed in the following environments: Pro Staging and Production, Starter Production (`master` branch).

On initial provisioning or upgrade of your {{ site. data.var.ece }} project, Adobe installs the latest version of the Fastly CDN module in your Staging and Production environments. When Fastly releases module updates, you receive notifications in the Admin UI for your environments. Adobe recommends that you update your environments to use the latest release. See [Upgrade Fastly].

## Fastly service account and credentials

{{ site.data.var.ece }} projects do not require a dedicated Fastly account or account owner. Instead, each Staging and Production environment has unique Fastly credentials (API token and service ID) to configure and manage Fastly services from the Admin UI. You also need the credentials to submit Fastly API requests.

During project provisioning, Adobe adds your project to the Fastly service account for {{ site.data.var.ece }} and adds the Fastly credentials to the configuration for the Staging and Production environments. See [Get Fastly credentials].

### Change Fastly API token

If you need to change the Fastly API token credential, you must submit a [{{site.data.var.ee}} support ticket] to request a new token, and then update your Staging or Production environment with the new value.

{:.procedure}
To change the Fastly API token credential:

1. Submit a [{{site.data.var.ee}} support ticket] requesting the new token.

   Include your {{ site.data.var.ece }} project ID and the environments that require a new credential.

1. After you receive the new API token, update the API token value in the [Fastly credentials configuration] in the Admin UI or from the [Project Web UI environment configuration variables].

1. [Test the new credential].

1. After you have updated the credentials, submit a support ticket to delete the old API token.

### Multiple Fastly accounts and assigned domains {#domain}

Fastly only allows you to assign an apex domain and associated subdomains to one Fastly service and account. If you have an existing Fastly account that links the same apex and subdomains used for your {{ site.data.var.ece }}, you have the following options:

-  Remove the apex and subdomains from the existing account before requesting Fastly service credentials for your {{ site.data.var.ece}} project environments. See [Working with Domains] in the Fastly documentation.

   Use this option to link the apex domain and all subdomains to the Fastly service account for {{ site.data.var.ece }}.

-  Submit a support ticket to request domain delegation so that apex and subdomains can be linked to different accounts.

   Use this option if your apex domain has multiple subdomains for {{site.data.var.ee}} and non-{{site.data.var.ee}} sites that you want to link to different Fastly accounts.

#### Request domain delegation

*Scenario 1:*

The apex domain (`testweb.com` and `www.testweb.com`) is linked to an existing Fastly account. You have a {{ site.data.var.ece }} project configured with the following subdomains: `mcstaging.testweb.com` and `mcprod.testweb.com`. You do not want to move the apex domain to the Fastly service account for {{ site.data.var.ece }}.

Submit a [Fastly support ticket] requesting that the subdomains be delegated from the existing Fastly account to the Fastly account for {{ site.data.var.ece }}. Include your {{site.data.var.ee}} project ID in the ticket.

After the delegation is complete, your project subdomains can be added to the Fastly service account for {{ site.data.var.ece }}. See [Get Fastly credentials].

*Scenario 2:*

The apex domain (`testweb.com` and `www.testweb.com`) is linked to the {{ site.data.var.ece }} Fastly service account. You want to manage Fastly services for the `service.testweb.com` and `product-updates.testweb.com` subdomains from a different Fastly account.

Submit a [{{site.data.var.ee}} support ticket] requesting that the subdomains be delegated from the {{ site.data.var.ece }} Fastly service account to the Fastly account. Include the service ID for the Fastly account in the ticket.

## DDoS protection

DDOS protection is built-in to the Fastly CDN service. After you enable and configure the Fastly service for your {{ site.data.var.ece }} sites, Fastly filters all web and admin traffic to your site to detect and block potential attacks:

-  For attacks targeting layer 3 or 4, the Fastly service filters out traffic based on port and protocol, inspecting only HTTP or HTTPS requests. ICMP, UDP, and other network born attacks are dropped at our network edge. This includes reflection and amplification attacks, which use UDP services like SSDP or NTP. By providing this level of protection, we effectively block  multiple common attacks like Ping of Death, Smurf attacks, as well as other ICMP-based floods.  Fastly manages the TCP level attacks at the cache layer, addressing the necessary scale and context per client to deal with SYN flood and its many variants, including TCP stack, resource attacks, and TLS attacks within the Fastly systems.

-  Fastly also provides protection against Layer 7 attacks. If your store is experiencing performance issues and you suspect a Layer 7 DDoS attack, submit a [{{site.data.var.ee}} support ticket]. Adobe can create and apply custom rules to the Fastly service to inspect for and filter out malicious requests based on header, payload, or a combination of attributes that identify the attack traffic. See [Checking for DDoS attacks][] and [How to block malicious traffic] in the *{{site.data.var.ee}} Help Center*.

<!--Link definitions-->
[bypass the Fastly cache]: {{site.baseurl}}/cloud/cdn/fastly-vcl-bypass-to-origin.html
[Caching with Fastly]: {{site.baseurl}}/guides/v2.4/graphql/caching.html#caching-with-fastly
[Checking for DDoS attacks]: https://support.magento.com/hc/en-us/articles/360030941932
[custom error response pages]: {{site.baseurl}}/cloud/cdn/cloud-fastly-custom-response.html
[Customize Fastly timeout]: {{site.baseurl}}/cloud/cdn/configure-fastly-customize-cache.html#extend-fastly-timeout
[Fastly CDN module for Magento 2]: https://github.com/fastly/fastly-magento2
[Fastly credentials configuration]: {{site.baseurl}}/cloud/cdn/configure-fastly.html#test-the-fastly-credentials
[Fastly custom VCL snippets]: {{site.baseurl}}/cloud/cdn/cloud-vcl-custom-snippets.html
[Image optimization]: {{site.baseurl}}/cloud/cdn/fastly-image-optimization.html
[Fastly support ticket]: https://docs.fastly.com/products/support-description-and-sla#support-requests
[Force unencrypted requests over to TLS]: {{site.baseurl}}/cloud/cdn/configure-fastly-customize-cache.html#force-tls
[GeoIP service support]: {{site.baseurl}}/cloud/cdn/configure-fastly-customize-cache.html#configure-geoip-handling
[Get Fastly credentials]: {{site.baseurl}}/cloud/cdn/configure-fastly.html#cloud-fastly-creds
[How to block malicious traffic]: https://support.magento.com/hc/en-us/articles/360039447892-How-to-block-malicious-traffic-for-Magento-Commerce-Cloud-on-Fastly-level
[{{site.data.var.ee}} support ticket]: https://support.magento.com/hc/en-us/articles/360019088251
[New Relic]: {{site.baseurl}}/cloud/project/new-relic.html
[Project Web UI environment configuration variables]: {{site.baseurl}}/cloud/project/projects.html#environment-configuration-variables
[purge options]: {{site.baseurl}}/cloud/cdn/configure-fastly-customize-cache.html#configure-purge-options
[set up Fastly]: {{site.baseurl}}/cloud/cdn/configure-fastly.html
[Test the new credential]: {{site.baseurl}}/cloud/cdn/configure-fastly.html#test-the-fastly-credentials
[TLS and Fastly]: {{site.baseurl}}/cloud/cdn/configure-fastly.html#provision-ssltls-certificates
[Upgrade Fastly]: {{site.baseurl}}/cloud/cdn/configure-fastly.html#upgrade
[Web Application Firewall]: {{site.baseurl}}/cloud/cdn/fastly-waf-service.html
[Working with Domains]: https://docs.fastly.com/en/guides/working-with-domains
[test the Fastly credentials]: {{site.baseurl}}/cloud/cdn/configure-fastly.html#test-the-fastly-credentials

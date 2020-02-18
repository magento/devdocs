---
group: cloud-guide
title: Fastly
functional_areas:
  - Cloud
  - Setup
---

Fastly provides the following services to optimize and secure content delivery operations for your {{ site.data.var.ece }} projects. These services are included with your {{ site.data.var.ece }} subscription at no additional cost.

-  **Content delivery network (CDN)**—Varnish-based service that caches your site pages, assets, CSS, and more in backend data centers you set up. As customers access your site and stores, the requests hit Fastly to load cached pages faster. The CDN service provides the following features:

   -  Cache your site pages, assets, CSS, and more in backend data centers that you set up to reduce bandwith load and costs

   -  Use [Fastly custom VCL snippets]({{ site.baseurl}}/cloud/cdn/cloud-vcl-custom-snippets.html) (Varnish 2.1 compliant) to modify how caching responds to requests

   -  Configure [purge options]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#purge) to clear generated content

   -  Set up [GeoIP service support]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#geoip)

   -  [Force unencrypted requests over to TLS](#tls)

   -  [Customize Fastly timeout](#timeouts) settings to prevent 503 responses on bulk operation requests

   -  Create [custom error response pages]({{ site.baseurl }}/cloud/cdn/cloud-fastly-custom-response.html)

-  **Security**—After you set up your {{ site.data.var.ece }} project to use the Fastly CDN, additional security features are available to protect your sites and network.
   -  [**DDoS protection**](#ddos-protection)—Built-in protection against common attacks like Ping of Death, Smurf attacks, as well as other ICMP-based floods.
   -  **[Web Application Firewall]({{ site.baseurl }}/cloud/cdn/fastly-waf-service.html)**—Managed web application firewall service that provides PCI-compliant protection to block malicious traffic before it can damage your production {{ site.data.var.ece }} sites and network. The WAF service is available on Pro and Starter Production environments only.
-  **Image optimization**—Offloads image processing and resizing load to the Fastly service freeing servers to process orders and conversions efficiently. See [Fastly image optimization]({{ site.baseurl }}/cloud/cdn/fastly-image-optimization.html).

We highly recommend using Fastly for your CDN, security, and image optimization needs, unless you are using {{ site.data.var.ee}} in a headless deployment.

## Fastly CDN module for Magento 2

Fastly services for {{ site.data.var.ece }} use the [Fastly CDN module for Magento 2](https://github.com/fastly/fastly-magento2) installed in the following environments: Pro Staging and Production, Starter Production (`master` branch).

On initial provisioning or upgrade of your {{ site. data.var.ece }} project, we install the latest version of the Fastly CDN module in your Staging and Production environments. When Fastly releases module updates, you receive notifications in the Magento Admin UI for your environments. We recommend that you update your environments to use the latest release. See [Upgrade Fastly]({{ site.baseurl}}/cloud/cdn/configure-fastly.html#upgrade).

## Fastly service account and credentials

{{ site.data.var.ece }} projects do not require a dedicated Fastly account or account owner. Instead, each Staging and Production environment has unique Fastly credentials (API token and service ID) to configure and manage Fastly services from the Magento Admin UI. You also need the credentials to submit Fastly API requests.

During project provisioning, Magento adds your project to the Fastly service account for {{ site.data.var.ece }} and adds the Fastly credentials to the configuration for the Staging and Production environments. See [Get Fastly credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#cloud-fastly-creds).

### Change your Fastly API token

If you need to change the Fastly API token credential, you must submit a Magento support ticket to request a new token, and then update your Staging or Production environment with the new value.

{:.procedure}
To change the Fastly API token credential:

1. [Submit a support ticket](https://support.magento.com/hc/en-us/articles/360019088251-Submit-a-support-ticket) requesting the new token. Include your {{ site.data.var.ece }} project ID and the environments that require a new credential.
1. After you receive the new API token, update the API token value from the [Magento Admin UI]({{ site.baseurl}}/cloud/cdn/configure-fastly.html#test-the-fastly-credentials), or from the [Project Web UI environment configuration variables]({{ site.baseurl}}/cloud/project/projects.html#environment-configuration-variables) section.
1. [Test the new credential]({{ site.baseurl}}/cloud/cdn/configure-fastly.html#test-the-fastly-credentials).
1. After you have updated the credentials, submit a support ticket to delete the old API token.

### Multiple Fastly accounts and assigned domains {#domain}

Fastly only allows you to assign an apex domain and associated subdomains to one Fastly service and account. If you have an existing Fastly account that links the same apex and subdomains used for your {{ site.data.var.ece }}, you have the following options:

-  Remove the apex and subdomains from the existing account before requesting Fastly service credentials for your {{ site.data.var.ece}} project environments. See [Working with Domains](https://docs.fastly.com/guides/basic-configuration/working-with-domains) in the Fastly documentation.

   Use this option to link the apex domain and all subdomains to the Fastly service account for {{ site.data.var.ece }}.

-  Submit a support ticket to request domain delegation so that apex and subdomains can be linked to different accounts.

   Use this option if your apex domain has multiple subdomains for Magento and non-Magento sites that you want to link to different Fastly accounts.

#### Request domain delegation

*Scenario 1:*

The apex domain (`testweb.com` and `www.testweb.com`) is linked to an existing Fastly account. You have a {{ site.data.var.ece }} project configured with the following subdomains: `mcstaging.testweb.com` and `mcprod.testweb.com`. You do not want to move the apex domain to the Fastly service account for {{ site.data.var.ece }} Magento.

Submit a [Fastly support ticket](https://docs.fastly.com/guides/detailed-product-descriptions/support-description-and-sla#support-requests) requesting that the subdomains be delegated from the existing Fastly account to the Fastly account for {{ site.data.var.ece }}. Include your Magento project ID in the ticket.

After the delegation is complete, your project subdomains can be added to the Fastly service account for {{ site.data.var.ece }}. See [Get Fastly credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#cloud-fastly-creds).

*Scenario 2:*

The apex domain (`testweb.com` and `www.testweb.com`) is linked to the {{ site.data.var.ece }} Fastly service account. You want to manage Fastly services for the `service.testweb.com` and `product-updates.testweb.com` subdomains from a different Fastly account.

Submit a [Magento support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) requesting that the subdomains be delegated from the {{ site.data.var.ece }} Fastly service account to the Fastly account. Include the service ID for the Fastly account in the ticket.

## DDoS protection

DDOS protection is built-in to the Fastly CDN service. After you enable and configure the Fastly service for your {{ site.data.var.ece }} sites, Fastly filters all web and admin traffic to your site to detect and block potential attacks:

-  For attacks targeting layer 3 or 4, the Fastly service filters out traffic based on port and protocol, inspecting only HTTP or HTTPS requests. ICMP, UDP, and other network born attacks are dropped at our network edge. This includes reflection and amplification attacks, which use UDP services like SSDP or NTP. By providing this level of protection, we effectively block  multiple common attacks like Ping of Death, Smurf attacks, as well as other ICMP-based floods.  Fastly manages the TCP level attacks at the cache layer, addressing the necessary scale and context per client to deal with SYN flood and its many variants, including TCP stack, resource attacks, and TLS attacks within the Fastly systems.

-  The Fastly service protects against Layer 7 attacks by applying custom rules (using VCLs) that can inspect for and filter out malicious requests based on header, payload, or the combination of attributes that identify attack traffic.

## Fastly and 503 timeouts {#timeouts}

Fastly has a default 60 second time out. For Fastly module 1.2.22 and later,
the timeout for the Magento Admin is three minutes.

Any request processing that exceeds the timeout period,  returns a 503 error.
As a result, you might get 503 errors when attempting operations that require
lengthy processing, or when trying to perform bulk operations.

If you receive a 503 error, try to submit the request directly to the origin
shield URL and review logs to identify the source of the issue. For details,
see [Fastly troubleshooting]({{ site.baseurl }}/cloud/cdn/trouble-fastly.html#errors).

Fastly can be bypassed for the Magento Admin to perform long running or bulk actions and API access to avoid 503s. For Fastly module 1.2.22 and later, the timeout for the Magento Admin was extended to three minutes. You can also update the Fastly configuration for your store to [extend the Fastly timeout for the Magento Admin]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#bulkaction).

## Backends and Origin shields {#backend}

Backend settings provide fine tuning for Fastly performance with Origin shielding
and timeouts. A _backend_ is a specific location (IP or domain) with configured
Origin shield and timeout settings for checking and providing cached content.

_Origin shielding_ routes all requests for your store to a specific Point of
Presence (POP). When a request is received, the POP checks for cached content
and provides it. If it is not cached, it continues to the Shield POP, then to
the Origin server which caches the content. The shields reduces traffic directly
to the origin.

We provide detailed instructions for configuring backends when you
[configure Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

## Basic authentication {#basic-auth}

Basic authentication is a feature to protect every page and asset on your site
with a username and password. We **do not recommend** activating basic
authentication on your Production environment. You can configure it on Staging
to protect your site when completing development.

If you add user access and enable basic authentication on Staging, you can still
access the Magento Admin without requiring additional credentials to enter.

## Custom VCLs and actions {#custom-vcl}

Fastly provides an extremely custom code friendly method for creating lists of
items like IPs and domains to complete actions via Fastly and Varnish code
blocks. For example, you can allow, block, or redirect access for specific users or IPs
using edge and ACL dictionaries and VCL code.

After you have [set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html),
you can create [custom VCL snippets]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html)
using these edge dictionaries and ACLs.

## Force TLS {#tls}

Fastly supports forcing unencrypted requests to TLS through the Force TLS
feature. Set up a secure base URL in Magento and turn on the Force TLS option
in the Fastly CDN module. For details and instructions, see the Fastly [Force TLS guide](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/FORCE-TLS.md).

## GeoIP service support {#geoip}

Fastly provides a GeoIP service and supports some GeoIP functionality. GeoIP
handling manages visitor redirection (automatically) and store matching
(select from list) based on their obtained country code. For more information,
see the Fastly [GeoIP documentation](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/CONFIGURATION.md#geoip-handling).

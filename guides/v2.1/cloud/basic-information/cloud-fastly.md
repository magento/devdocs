---
group: cloud
title: Fastly
version: 2.1
github_link: cloud/basic-information/cloud-fastly.md
functional_areas:
  - Cloud
  - Setup
---

Fastly is a CDN based on Varnish caching, basically a cloud varnish service. When
working with Fastly, you are also working directly with a heavily customized version of Varnish (2.1). [Fastly](https://docs.fastly.com/){:target="\_blank"}
with [Varnish](https://varnish-cache.org/docs/){:target="\_blank"} caches your
site pages, assets, CSS, and more in backend data centers you set up. As
customers access your site and stores, the requests hit Fastly to load cached
pages faster.

For {{site.data.var.ece}}, you receive Fastly CDN and DDoS services. When you
update products, catalogs, content, and more, Fastly purges that specific cached
content to refresh and provide the latest changes.

We provide Fastly service credentials including a Fastly Service ID and API key
pair for your Staging and Production environments. To
[set up Fastly](#install-configure), you enter credentials, upload VCL snippets,
and configure backends (with Origin shields) in Staging and Production
environments, not in Integration.

Fastly provides the following powerful tools for Magento:

* Create edge and ACL dictionaries with VCL snippets (Varnish 2.1 compliant) to
  modify how caching responds to requests

* Three types of purges for:

  * Quick Purge (by URL)
  * Surrogate/key purge using tags to purge specific HTML, images, categories, and so on
  * Purge all, which clears everything in the cache
* GeoIP extension support
* Force unencrypted requests over to TLS
* Image optimization support offloads image optimization to the Fastly service
  to speed up image delivery for your store

We highly recommend enabling and using Fastly for your caching and CDN. The only
situation where you might not want to enable Fastly is for a headless deployment.

We strongly recommend installing Fastly module 1.2.33 or later. If you want to
use the image optimization feature, you must use Fastly module version 1.2.52
or later.

## Fastly and 503 timeouts {#timeouts}
Fastly has a default 60 second time out. For Fastly module 1.2.22 and later,
the timeout for the Magento Admin is three minutes.

Any request processing that exceeds the timeout period,  returns a 503 error.
As a result, you might get 503 errors when attempting operations that require
lengthy processing, or when trying to perform bulk operations.

If you receive a 503 error, try to submit the request directly to the origin
shield URL and review logs to identify the source of the issue. For details,
see [Fastly troubleshooting]({{ page.baseurl }}/cloud/trouble/trouble_fastly.html#timeouts).

Fastly can be bypassed for the Magento Admin to perform long running or bulk
actions and API access to avoid 503s.

We provide [VCL snippet instructions]({{ page.baseurl }}/cloud/configure/fastly-vcl-extend-timeout.html)
for extending the timeout for the Magento Admin.

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
[configure Fastly]({{ page.baseurl }}/cloud/access-acct/fastly.html).

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
blocks. For example, with edge and ACL dictionaries and VCL code, you could
allow, block, or redirect access for specific users or IPs.

After you have [set up Fastly]({{ page.baseurl }}/cloud/access-acct/fastly.html),
you can create [custom VCL snippets]({{ page.baseurl }}/cloud/configure/cloud-vcl-custom-snippets.html)
using these edge dictionaries and ACLs.

### Edge dictionaries {#dictionary}
Save key-value pairs on Fastly Edge nodes of dictionary containers and items to
invoke with VCL snippets in your site. You have up to 1,000 entries per
dictionary.

You create an edge dictionary then add items to it of a key and its value. For
example, you could create an edge dictionary of banned bad refer sites from
accessing your site. The key-value pairs would be the refer site URLs
(www.example.com) and a value of 1. Then create a custom VCL snippet to return
a 403 Forbidden to those sites when they access your site.

Another example routes to a different WordPress backend for an edge dictionary
of WordPress URLs.

### Edge ACLs {#acl}
ACLs are access control lists that allow you to manage IP addresses to allow or
block access to resources. You could use edge ACLs with VCL snippets to block IP
addresses or provide access. For example, use edge ACLs and a custom VCL snippet
to white list IPs to access your site.

### VCL snippets {#vcl}
With edge dictionaries and edge ACLs, you can create custom Varnish Configuration
Language (VCL) snippets to Fastly and your site. VCL snippets are small chunks
of logic and code that can be included directly into your service configuration.
They are generated, compiled, and transmitted to all Fastly caches, loaded, and
activated without waiting for maintenance windows without server downtime.

For a few examples, you can create VCL snippets to:

* Block access to the site using an edge dictionary of domains
* Whitelist and allow access using an edge ACL
* Redirect blog links from your store to a blog site
* Extend timeouts for Fastly and Magento

After you have [set up Fastly](#install-configure), we provide detailed
instructions on creating [custom Fastly VCL snippets]({{ page.baseurl }}/cloud/configure/cloud-vcl-custom-snippets.html).

## Force TLS {#tls}
Fastly supports forcing unencrypted requests to TLS through the Force TLS
feature. Set up a secure base URL in Magento and turn on the Force TLS option
in the Fastly extension. For details and instructions, see the Fastly [Force TLS guide](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/FORCE-TLS.md){:target="\_blank"}.

## GeoIP service support {#geoip}
Fastly provides a GeoIP service and supports some GeoIP functionality. GeoIP
handling manages visitor redirection (automatically) and store matching
(select from list) based on their obtained country code. For more information,
see the Fastly [GeoIP documentation](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/CONFIGURATION.md#geoip-handling){:target="\_blank"}.

## Image Optimization support
Fastly image optimization (Fastly IO) provides real-time image manipulation and
optimization to speed up image delivery and simplify maintenance of image
source sets for responsive web applications. Fastly IO provides
the following image optimization features:

- Force lossy conversion
- Deep image optimization
- Adaptive pixel ratios

You must set up your Fastly service and configure the Origin shield before you
can enable and configure the Fastly IO option. See [Configure Fastly image optimization]({{ page.baseurl }}/cloud/access-acct/fastly.html#configure-fastly-image-optimization).

### Force lossy conversion
By default the Fastly IO service forces conversion of lossless formats such
as PNG, BMP, or WEBP into JPEG/WEBP format.

The advantage of forcing lossy conversion is that smaller images are served.
For example, by using JPEG or WEBp format instead of PNG, the size may be
reduced by 60 to 70 percent depending on the quality level specified in the
Fastly IO configuration.

Depending on the quality level selected for image optimization, you might
perceive visual differences in images. For example, Alpha channel/transparencies
are stripped out and replaced with a white background, unless you use Deep image
optimization which uses the background color of your theme.

If you turn off lossy conversion (`WebP Auto? = No`), Fastly IO only changes
JPEG images to WEBP format for compatible browsers. No other image types are
changed. For example, if the original image is PNG the output from the
Fastly IO service is PNG.

### Deep image optimization
Deep image optimization is off by default. Enabling this option turns off the
built-in Magento resizing and offloads it completely to the Fastly IO service.
This feature only resizes *product* images. CMS images are not resized.

Note that enabling deep image optimization adds a background color definition
to every image as defined in your theme. As a result, WebP images are switched
from WebP lossless to WebP lossy. One of the major differences between lossless
and lossy is that it drops the alpha channel from PNG images, which delivers
much smaller images. However, images with transparencies may look odd on product
and campaign pages that use a different background.

For example, the following code represents the original source for an image from
the Luma theme:

```
 <img class="product-image-photo"
    src="https://mymagentosite/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/m/b/mb02-gray-0.jpg"
    width="240"
    height="300"
  alt="Fusion Backpack"/>
```

When the Fastly IO Deep image optimization feature is enabled, the original source
code for the image is rewritten as shown in the following example:

```
 <img class="product-image-photo"
    src="https://mymagentosite/pub/media/catalog/product/m/b/mb02-gray-0.jpg?width=240&height=300&quality=80&bg-color=255,255,255&fit=bounds"
    width="240"
    height="300"
  alt="Fusion Backpack"/>
```
### Adaptive pixel ratios

The Adaptive pixel ratios feature is useful to optimize images for Progressive
web applications. It allows you to deliver multiple image sizes and resolutions
from one image source file by adding a srcset for each product image.

When the Adaptive pixel ratios feature is enabled, the Fastly IO service
delivers a fixed-width image that can adapt to varying `device-pixel-ratios`.
For example, the product image definition is rewritten as shown in the
following example.

```
<img class="product-image-photo"
  srcset="https://mymagentosite/pub/media/catalog/product/m/b/mb02-gray-0.jpg?width=240&height=300&quality=80&bg-color=255,255,255&fit=bounds&dpr=2 2x,
  https://mymagentosite/pub/media/catalog/product/m/b/mb02-gray-0.jpg?width=240&height=300&quality=80&bg-color=255,255,255&fit=bounds&dpr=3 3x"
  src="https://mymagentosite/pub/media/catalog/product/m/b/mb02-gray-0.jpg?width=240&height=300&quality=80&bg-color=255,255,255&fit=bounds"
    width="240"
    height="300"
  alt="Fusion Backpack"/>
```
For more information about srcsets, see `srcset` [browser support](https://caniuse.com/#feat=srcset){:target="\_blank"}
and [specification](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset){:target="\_blank"}.

## Installation and configuration {#install-configure}
The installation and configuration process is:

* Install the Fastly module in an Integration branch, without configuring
settings or entering credentials.
* Deploy the code to `integration` then to Staging and Production
* Configure Fastly in Staging and Production, not in Integration or your local
* Test Fastly for caching

For instructions, see [Set up Fastly]({{ page.baseurl }}/cloud/access-acct/fastly.html).
After you have configured it, you can continue with advanced options including
custom VCL snippets.

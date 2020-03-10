---
group: cloud-guide
title: Go live checklist
functional_areas:
  - Cloud
  - Testing
---

Before you deploy to the Production environment, download the [Go live checklist]({{ site.baseurl }}/common/pdf/magento-commerce-cloud-prelaunch-checklist.pdf), and use it with these instructions to confirm that you have completed all required configuration and testing. See an overview of the complete deployment process for Starter and Pro at [Deploy your store]({{ site.baseurl }}/cloud/live/stage-prod-live.html).

## Completely test in Production {#test}

See [Test deployment]({{ site.baseurl }}/cloud/live/stage-prod-test.html) for testing all aspects of your sites, stores, and environments. These tests include verifying Fastly, User Acceptance Tests (UAT), and performance testing.

## DNS configurations {#dns}

You need to complete configurations for your DNS including:

-  Set all necessary redirects, especially if you are migrating from an existing site
-  Set the zone root resource record to the hostname address
-  Lower the value for the Time-to-Live (TTL) setting to refresh DNS information so customers are directed to the correct Production store more quickly

We recommend a significantly lower TTL value when switching the DNS record. This value tells the DNS how long to cache the DNS record. When shortened, it refreshes the DNS faster. For example, changing this value from 3 days to 10 minutes. Be advised, this adds load to the web server.

After checking with your registrar about where to change your DNS settings, add a CNAME record for your website that points to the Fastly service: `prod.magentocloud.map.fastly.net`. If you use multiple hostnames for your site, you must add a CNAME record for each one.

 {:.bs-callout-info}
This does not work for an [apex domain](https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp) (also referred to as a _naked_ domain). You must use a DNS provider that supports forwarding DNS queries to use an apex domain.

The following list contains examples of DNS providers for informational purposes. Use your preferred DNS provider.

-  CNAME with ALIAS record from [Dyn](http://dyn.com)
-  ANAME record on [DNS Made Easy](http://www.dnsmadeeasy.com)
-  ANAME at [easyDNS](https://www.easydns.com)
-  ACNAME at [CloudFlare](https://www.cloudflare.com)
-  ALIAS at [PointDNS](https://pointhq.com)

Many other DNS providers also offer workarounds to accomplish this goal. The most common is to add a CNAME record for the `www` host on the domain and then use the DNS provider's redirect service to redirect the apex over to the `www` version of the domain. Consult your DNS provider for more information.

Another option for apex domain is to add A records, which maps a domain name to the Fastly IP addresses:

-  `151.101.1.124`
-  `151.101.65.124`
-  `151.101.129.124`
-  `151.101.193.124`

### TLS and Fastly {#fastly-tls}

If you use TLS with Fastly enabled in your environment, you must provide your DNS provider with a TXT record from Fastly. We provide a Domain Validated SSL certificate with Subject Alternative Name enabled, issued by GlobalSign. When entering your [Support ticket](#dns) for DNS information and going live, let us know you are using TLS, provide your domain names and request the TXT record. You can then send this record to your DNS provider. The domain validation process is executed by Fastly.

For details on this TXT record, see Fastly [DNS TXT record validation](https://docs.fastly.com/guides/securing-communications/domain-validation-for-tls-certificates#dns-text-record-verification).

## Verify Production configurations

Make a final pass for any Production configurations in the store(s). If you need to make changes to configurations, you can modify in Production. If settings are read-only, you may need to SSH and CLI commands to modify, or make configuration changes in your local and deploy across.

The following are recommended changes and checks:

-  [Completed Outgoing email testing]({{ site.baseurl }}/cloud/project/sendgrid.html)
-  [Secure configuration for Admin credentials and Base Admin URL](http://docs.magento.com/m2/ee/user_guide/stores/security-admin.html)
-  [Optimize all images for the web]({{ site.baseurl }}/cloud/cdn/fastly-image-optimization.html)
-  [Check minification settings for HTML, Javascript, and CSS]({{ site.baseurl }}/cloud/deploy/static-content-deployment.html)

## Verify Fastly caching {#verifyfastly}

-  Test and verify that Fastly caching is working correctly on the Production site. For detailed tests and checks, see [Fastly testing]({{ site.baseurl }}/cloud/live/stage-prod-test.html#fastly).
-  [Ensure that the latest version of the Fastly CDN Module for Magento 2 is installed in your Production environment]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upgrade)
-  [Ensure that the most current version of the Fastly VCL code has been uploaded]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets)

## Performance testing {#performance}

We recommend that you review the [Magento Performance Toolkit]({{ site.mage2bloburl }}/{{ site.version }}/setup/performance-toolkit) options as part of your pre-launch readiness process.

You can also test using the following 3rd party options:

-  [Siege](https://www.joedog.org/siege-home/): Traffic shaping and testing software to push your store to the limit. Hit your site with a configurable number of simulated clients. Siege supports basic authentication, cookies, HTTP, HTTPS and FTP protocols.
-  [Jmeter](http://jmeter.apache.org/): Excellent load testing to help gauge performance for spiked traffic, like for flash sales. Create custom tests to run against your site.
-  [New Relic](https://support.newrelic.com/) (provided): Helps locate processes and areas of the site causing slow performance with tracked time spent per action like transmitting data, queries, Redis, and so on.
-  [Blackfire]({{ site.baseurl }}/cloud/project/project-integrate-blackfire.html) (provided): Helps track through the issues New Relic finds and helps you dig deeper into the issue for specifics. Blackfire profiles the environment and helps locate bottlenecks in depth: process, method call, query, load, and so on.
-  [WebPageTest](https://www.webpagetest.org/) and [Pingdom](https://www.pingdom.com/): Real-time analysis of your site pages load time with different origin locations. Pingdom may cost a fee. WebPageTest is a free tool.

## Security configuration

-  [Set up your Magento Security Scan]({{ site.baseurl }}/cloud/live/live.html#security-scan)
-  [Secure configuration for Admin user](http://docs.magento.com/m2/ee/user_guide/stores/security-admin.html)
-  [Secure configuration for Base Admin URL](https://docs.magento.com/m2/ee/user_guide/stores/store-urls-custom-admin.html)
-  [Remove any users no longer on the {{ site.data.var.ece}} project]({{ site.baseurl}}/cloud/project/user-admin.html)
-  [Configure two-factor authentication]({{ site.baseurl }}/guides/v2.3/security/two-factor-authentication.html)

## Performance monitoring

You can use New Relic services for performance monitoring on Pro and Starter environments. On Pro plan accounts, we provide Adobe-generated alert policies to monitor application and infrastructure performance using New Relic APM and Infrastructure agents. For details on using these services, see [New Relic]({{ site.baseurl }}/cloud/project/new-relic.html).

{:.ref-header}
Next step

[Launch steps]({{ site.baseurl }}/cloud/live/launch-steps.html)

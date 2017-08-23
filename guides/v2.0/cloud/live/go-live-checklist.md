---
layout: default
group: cloud
subgroup: 165_live
title: Go live checklist
menu_title: Go live checklist
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/live/go-live-checklist.md
---

Prior to entering your ticket to go live and switching the DNS, you should complete this checklist and all tests for your deployed site/store. Deploy your `master` branch to the Production environment.

## Completely test in Production {#test}
See [Test deployment]({{ page.baseurl }}cloud/live/stage-prod-test.html) for testing all aspects of your sites, stores, and environments. These tests include verifying Fastly, User Acceptence Tests (UAT), and performance testing.

## Go Live Prep call with support {#call}
Contact Support to schedule a Go Live Preparation call. We walk through the Go Live process, verify your readiness with a checklist, and discuss the final steps.

## Enter a ticket with domain names {#domainticket}
You may [need information]({{ page.baseurl }}cloud/live/live.html#goliveinfo) for this ticket.

1.	Log in to your [Magento Cloud account](https://accounts.magento.cloud){:target="_blank"}.
2.	Click **Support** > **Submit ticket** from the top menu.
3.	Follow the prompts to open an issue with Support.	Support assists you with your live deployment and gives you an IP address for your live site so you can set up DNS.
5. Provide a list of all storefront domain names for the shared SSL certificate.
4. (Optional) If you purchased a Domain-Validated SSL (HTTP) certificate as part of your subscription, provide the certificate files in an attachment to the ticket. We will provide the certificate to Fastly for deployment.

## DNS configurations {#dns}
You need to complete configurations for your DNS including:

* Set all necessary redirects, especially if you are migrating from an existing site
*	Set the zone’s root resource record to address the hostname
*	Lower the value for the Time-to-Live (TTL) to refresh DNS information to correctly point customers faster to the Production store

  We recommend a significantly lower TTL value when switching the DNS record. This value tells the DNS how long to cache the DNS record. When shortened, it refreshes the DNS faster. For example, changing this value from 3 days to 10 minutes. Be advised, this adds load to the web server.

After you've checked with your registrar about where to change your DNS settings, add a CNAME record that references the Master environment's host name: `<environment>-<project>.<region>.magentosite.cloud`. If you use multiple host names for your site, you must add a CNAME record for each of them.

<div class="bs-callout bs-callout-info" id="info">
<p>This will not work for an <a href="https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp" target="_blank">apex domain</a> (also referred to as a <em>naked</em> domain). In that case, you must use a DNS provider that supports forwarding DNS queries.</p>
</div>

The following is a possible list of DNS providers strictly for your information. Use a DNS provider you prefer.

*	CNAME with ALIAS record from [Dyn](http://dyn.com){:target="_blank"}
*	ANAME record on [DNS Made Easy](http://www.dnsmadeeasy.com){:target="_blank"}
*	ANAME at [easyDNS](https://www.easydns.com){:target="_blank"}
*	ACNAME at [CloudFlare](https://www.cloudflare.com){:target="_blank"}
*	ALIAS at [PointDNS](https://pointhq.com){:target="_blank"}

Many other providers also offer workarounds to accomplish this goal. The most common is to add a CNAME record for the `www` host on the domain and then use the DNS provider's redirection service to redirect the apex over to the `www` version of the domain. Consult your DNS provider to see how they support this.

For the format, we support `www.domain.tld CNAME <environment>-<project>.<region>.magentosite.cloud`. We don't support a domain without www: `domain.tld CNAME <environment>-<project>.<region>.magentosite.cloud`.

## Verify Production configurations
Make a final pass for any Production configurations in the store(s). If you need to make changes to configurations, you can modify in Production. If settings are read-only, you may need to SSH and CLI commands to modify, or make configuration changes in your local and deploy across.

The following are recommended changes and checks:

*	Outgoing email has been tested
*	Base URL and Base Admin URL are set correctly
*	Change the default Magento Admin password

	See [Configuring Admin Security](http://docs.magento.com/m2/ee/user_guide/stores/security-admin.html){:target="_blank"} for further information on Admin configurations.
*	Optimize all images for the web
*	[Enable minification](http://docs.magento.com/m2/ee/user_guide/system/file-optimization.html){:target="_blank"} for JS, CSS, and HTTP

## Verify Fastly caching {#verifyfastly}
Test and verify Fastly caching is correctly working in Production. For detailed tests and checks, see [Fastly testing]({{ page.baseurl }}cloud/live/stage-prod-test.html#fastly).

*	Make sure that pages are being correctly cached in the page cache and Fastly
*	Make sure the Fastly Extension is up-to-date
*	Make sure the Fastly VCL is up-to-date

## Performance testing {#performance}
We recommend that you review the [Magento Performance Toolkit](https://github.com/magento/magento2/tree/develop/setup/performance-toolkit){:target="_blank"} options as part of your pre-launch readiness process.

You can also test using the following 3rd party options:

* [Siege](https://www.joedog.org/siege-home/){:target="_blank"}: Traffic shaping and testing software to push your store to the limit. Hit your site with a configurable number of simiulated clients. Siege supports basic authentication, cookies, HTTP, HTTPS and FTP protocols.
* [Jmeter](http://jmeter.apache.org/){:target="_blank"}: Excellent load testing to help gauge performance for spiked traffic, like for flash sales. Create custom tests to run against your site.
* [New Relic](https://support.newrelic.com/){:target="_blank"} (provided): Helps locate processes and areas of the site causing slow performance with tracked time spent per action like transmitting data, queries, Redis, and so on.
* [Blackfire]({{ page.baseurl }}cloud/project/project-integrate-blackfire.html) (provided): Helps track through the issues New Relic finds and helps you dig deeper into the issue for specifics. Blackfire profiles the environment and helps locate bottlenecks indepth: process, method call, query, load, and so on.
* [WebPageTest](https://www.webpagetest.org/){:target="_blank"} and [Pingdom](https://www.pingdom.com/){:target="_blank"}: Real-time analysis of your site pages load time with different origin locations. Pingdom may cost a fee. WebPageTest is a free tool.

#### Next step:
[Launch steps]({{ page.baseurl }}cloud/live/launch-steps.html)

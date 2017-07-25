---
layout: default
group: cloud
subgroup: 160_live
title: Go live
menu_title: Go live
menu_order: 300
menu_node:
version: 2.0
github_link: cloud/live/live.md
---

This section outlines the tasks you must perform before you can launch your live Magento store. When ready, you will enter a ticket with all required information through your Magento Cloud account.
You need the following information to go live:

* CNAME record information for configuring the DNS
* SSL certificate if not using the shared-SSL

As part of Magento Enterprise Cloud Edition, you have access to a Domain-Validated SSL certificate that is issued by GlobalSign. This SSL is shared with other ECE customers and included for all accounts. If you want to deploy an Extended Validation SSL for your company, this option can be purchased when you first sign-up with Magento Enterprise Cloud Edition. If you need to purchase this option, contact your account representative.

To go live:

1.	Log in to your Magento Cloud account.
2.	Click **Support** > **Submit ticket** from the top menu.

	The following figure shows an example.

	![]({{ site.baseurl }}common/images/cloud_support-ticket.png){:width="600px"}
1.	Follow the prompts to open an issue with Support.

	Support assists you with your live deployment and gives you an IP address for your live site so you can set up DNS.
3.	Configure DNS.

	After you've checked with your registrar about where to change your DNS settings, add a CNAME record that references the Master environment's host name: `<environment>-<project>.<region>.magentosite.cloud`

	If you use multiple host names for your site, you must add a CNAME record for each of them.

	<div class="bs-callout bs-callout-info" id="info">
  		<p>This will not work for an <a href="https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp" target="_blank">apex domain</a> (also referred to as a <em>naked</em> domain). In that case, you must use a DNS provider that supports forwarding DNS queries.</p>
	</div>

	Some DNS providers you can consider follow:

	*	CNAME with ALIAS record from [Dyn](http://dyn.com){:target="_blank"}
	*	ANAME record on [DNS Made Easy](http://www.dnsmadeeasy.com){:target="_blank"}
	*	ANAME at [easyDNS](https://www.easydns.com){:target="_blank"}
	*	ACNAME at [CloudFlare](https://www.cloudflare.com){:target="_blank"}
	*	ALIAS at [PointDNS](https://pointhq.com){:target="_blank"}

	Magento does not endorse or support these companies; we mention them for your information only.

	Many other providers also offer workarounds to accomplish this goal. The most common is to add a CNAME record for the `www` host on the domain and then use the DNS provider's redirection service to redirect the apex over to the `www` version of the domain. Consult your DNS provider to see how they support this.

	We support `www.domain.tld CNAME <environment>-<project>.<region>.magentosite.cloud`

	We don't support `domain.tld CNAME <environment>-<project>.<region>.magentosite.cloud`
4.	For shared-SSL, Magento adds your domains to the shared certificate. If you purchased deployment of a Domain-Validated SSL certificate as part of your ECE account, provide this SSL certificate to Support through the ticket. Support will provide the SSL to Fastly for deployment.

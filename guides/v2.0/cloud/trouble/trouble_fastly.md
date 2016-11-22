---
layout: default
group: cloud
subgroup: 50_trouble
title: Troubleshoot Fastly
menu_title: Troubleshoot Fastly
menu_order: 20
menu_node: 
version: 2.0
github_link: cloud/trouble/trouble_fastly.md
---

## Overview of troubleshooting Fastly
You can easily troubleshoot the Fastly extension using `curl` commands and looking for response headers that indicate whether it's operating normally or not.

In particular, you should look for the following:

*	`Fastly-Magento-VCL-Uploaded` should be `Yes`
*	`X-Magento-Tags` should be returned
*	`Fastly-Module-Enabled` should be `Yes`
*	`X-Cache` should be either `HIT` or `HIT, HIT` 
*	[`Cache-Control: max-age`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9){:target="_blank"} should be greater than 0
*	[`Pragma`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32){:target="_blank"} should be `cache`

You should perform the test on your [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) site. The Fastly extension isn't necessray on [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) site, so there's no point in testing it there.

You must run two `curl` commands:

*	One on your staging or production URL

	This command bypasses the Fastly extension and returns the headers `Fastly-Module-Enabled`, `Cache-Control: max-age`, and `Pragma`
*	One on your live site

	This command goes through the Fastly extension and returns the `Fastly-Magento-VCL-Uploaded` and `X-Cache` headers

	This command works only if you have a DNS-mapped domain

## Test your staging or production site {#cloud-test-stage}
This section discusses how to use `curl` to get response headers from your staging or production site. 

The URL format follows:

*	Staging: `http[s]://staging.<your domain>.<project ID>.ent.magento.cloud`
*	Production: 

	*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
	*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

If you don't know your staging or production URLs, consult your Magento Enterprise Cloud Edition OneDrive account. Your account includes an onboarding document that contains your Git, SSH, and project URLs for staging and production.

Enter the following command to test your site:

	curl -I -k <staging or production URL> [-H 'Host: <public URL>'] -vo /dev/null -HFastly-Debug:1

For example, if you have a public URL `www.mymagento.biz`, enter a command similar to the following to test the production site:

	curl -I -k https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud -H 'Host: www.mymagento.biz' -vo /dev/null -HFastly-Debug:1

If you do not have DNS set up for a public host name, enter a command similar to the following:

	curl -I -k https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud -vo /dev/null -HFastly-Debug:1

The output for this command can be lengthy so the following is a summary only:

	* STATE: INIT => CONNECT handle 0x600057800; line 1402 (connection #-5000)
	* Rebuilt URL to: https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud/
	* Added connection 0. The cache now contains 1 members
	*   Trying 192.0.2.31...
	* STATE: CONNECT => WAITCONNECT handle 0x600057800; line 1455 (connection #0)
	  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
	  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Connected to www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud (54.229.163.31) port 443 (#0)
	* STATE: WAITCONNECT => SENDPROTOCONNECT handle 0x600057800; line 1562 (connection #0)
	  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* ALPN, offering h2

	  ... portion omitted for brevity ...

	< Set-Cookie: mage-messages=%5B%5D; expires=Wed, 22-Nov-2017 17:39:58 GMT; Max-Age=31536000; path=/
	< Pragma: cache
	< Expires: Wed, 23 Nov 2016 17:39:56 GMT
	< Cache-Control: max-age=86400, public, s-maxage=86400, stale-if-error=5, stale-while-revalidate=5
	< X-Magento-Tags: cb_welcome_popup store cb cb_store_info_mobile cb_header_promotional_bar cb_store_info cb_discount-promo-bar cpg_2 cb_83 cb_81 cb_84 cb_85 cb_86 cb_87 cb_88 cb_89 p5646 catalog_product p5915 p6040 p6197 p6227 p7095 p6109 p6122 p6331 p7592 p7651 p7690
	< Fastly-Module-Enabled: yes
	< Strict-Transport-Security: max-age=31536000
		< Content-Security-Policy: upgrade-insecure-requests
	< X-Content-Type-Options: nosniff
	< X-XSS-Protection: 1; mode=block
	< X-Frame-Options: SAMEORIGIN
	< X-Platform-Server: i-dff64b52
	<
	* STATE: PERFORM => DONE handle 0x600057800; line 1955 (connection #0)
	* multi_done
	  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
	* Connection #0 to host www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud left intact

The preceding example shows the correct values for `Pragma`, `X-Magento-Tags`, and `Fastly-Module-Enabled`.

## Test your live site
Enter the following command to test your site if it's live:

	curl http://<domain> -vo /dev/null -HFastly-Debug:1

For example,

	http://www.mymagento.biz -vo /dev/null -HFastly-Debug:1

The output for this command is similar to the preceding command; following are only the unique headers returned by this command:

	< Fastly-Magento-VCL-Uploaded: yes
	< X-Cache: HIT, MISS

## Resolve errors
This section provides suggestions for resolving errors you might find using the `curl` command.

### `Fastly-Module-Enabled` is `No`
Do the following:

1.	[Install the Fastly module]({{ page.baseurl }}cloud/access-acct/fastly.html)
2.	In the Magento Admin, [set Fastly as the page cache]({{ page.baseurl }}cloud/access-acct/fastly.html#cloud-fastly-admin)
3.	Push the changes to your staging or production server.

### `Fastly-Magento-VCL-Uploaded` is `No`
[Upload the Fastly VCL]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html#cloud-live-migrate-fastly)

### `X-Cache` includes `MISS`
If `X-Cache` is either `HIT, MISS` or `MISS, MISS`, enter the same `curl` command again to make sure the page wasn't recently evicted from the cache.

If you get the same result, use the [first `curl` command](#cloud-test-stage) discussed in this topic to verify that:

*	`Pragma` is `cache`
*	`X-Magento-Tags` exists
*	`Cache-Control: max-age` is greater than 0

If the issue persists, another extension is likely resetting these headers. Contact your extension developers or conduct additional testing to identify the source of the issue.


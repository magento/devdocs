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

You should perform the test on your [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) site. The Fastly extension doesn't work the same way on an [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) site, so there's no point in testing it there.

## Test your staging or production site with curl



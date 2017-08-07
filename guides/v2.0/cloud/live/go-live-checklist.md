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

REVISE

You should complete all tests for your deployed site/store. See [Test deployment]({{ page.baseurl }}cloud/live/stage-prod-test.html) for testing all aspects of your sites, stores, and environments.


When you are ready to go live and after you tested the deployment, work through the following checklists to verify your store is fully prepared to launch.

## Launch checklist
* Submit a ticket to provide correct domain names
*	Ensure correct SSL/TLS certificates are in place
*	Outgoing email has been tested
*	All necessary redirects in-place
*	Application has gone through QA testing
*	DNS: Zone’s root resource record can address a hostname
*	DNS: TTL value is lowered as recommended
*	Base URL is set correctly
*	Change the default Magento Admin password
*	Optimize all images for the web
*	Enable minification for JS, CSS, and HTTP
*	Make sure that pages are being correctly cached in the page cache and Fastly
*	Make sure the Fastly Extension is up-to-date
*	Make sure the Fastly VCL is up-to-date
*	Make sure that the Fastly SSL certificate is setup for your domain(s)
*	Review our documentation about going live
*	Schedule the Go Live Preparation call with the support team

We recommend that you review some performance tool kit options as part of your pre-launch readiness process.
https://github.com/magento/magento2/tree/develop/setup/performance-toolkit
And assess performance with 3rd party options:
https://www.webpagetest.org/

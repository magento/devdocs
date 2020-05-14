---
group: cloud-guide
subgroup: 165_live
title: Launch steps
menu_title: Launch steps
menu_order: 20
menu_node:
functional_areas:
  - Cloud
  - Testing
---

{:.ref-header}
Previous step

[Go live checklist]({{ site.baseurl }}/cloud/live/site-launch-checklist.html)

After testing and completing your launch checklist, you can start the final steps to launch. These steps include entering tickets, cutting over access, and finally testing your store(s) when live.

Magento support staff work with you through the process, checking status, and helping if any questions or issues occur. All issues should be tracked with tickets to best capture what happened and how it was resolved. When you begin continuous iterations deploying updates to your launched store, you may have similar issues occur again. These tickets can help pinpoint the issues and help adjust your deployment tasks.

## Contact Magento to launch your site {#contact}

Contact Magento support and update any site launch (go live) tickets with the intended date and time to switch over and launch your store(s).

## Switch DNS to the new site {#dns}

The Time-to-Live changed value is important for checking your changed domain. When you modify the A and CNAME records, the update will take the TTL configured time to update correctly. For details on DNS settings, see [DNS configurations]({{ site.baseurl }}/cloud/live/site-launch-checklist.html#dns).

{:.procedure}
To cut over to the new site:

1. Access your DNS service.
1. Update your A and CNAME records for your domains and hostnames.
1. Wait for the TTL time to pass and restart your web browser.
1. Access your store using the storefront domain.

## Test the live store {#test}

Complete a few UAT tests in your live store to confirm everything is loading and actions complete correctly. For a list of tests, see [Test deployment]({{ site.baseurl }}/cloud/live/stage-prod-test.html).

## Post-Launch {#postlaunch}

Magento will activate checks and monitor the site to ensure all services and access are in the green. We remain on hand as needed to walk-through and check all system logs, services, caching, and functions are working as you and your customers need.

If any issues occur, create and track issues with Support. Include as much information as possible including date/time, specific feature with a problem, symptoms and odd behaviors, extensions, and so on. We will investigate the logs, the issue, and work with you to resolve quickly as possible.

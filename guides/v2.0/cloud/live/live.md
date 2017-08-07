---
layout: default
group: cloud
subgroup: 165_live
title: Go live and launch
menu_title: Go live and launch
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/live/live.md
---

When you have completed deployment and testing in Integration and Staging environments, you can start going live. First, you should complete all development and testing prior to touching Production. Feel ready to launch? Review our checklists, best practices, and final steps to go live.

If you checked this information prior to deploying and testing in Staging, consider reviewing the benefits of testing in Staging first in the next section. Staging is a near-production environment running on similar hardware, configurations, architecture, and services. It can reduce your downtime and make your extension, service, custom configurations, and merchant User Acceptance Testing vital components to releasing your sites and stores.

## Why test fully in Integration and Staging? {#whytest}
We strongly recommend testing in these enviornments due to the complexity of your custom code, themes, Magento extensions, 3rd party integrations all working together to provide a single or multiple stores. Every deployment can differ between merchants. The following are common issues you can find early and solve before touching Production:

* Staging supports all Production services, features, database data, technology stack, architecture, and more. It mirrors Production, which means if errors occur in Staging, you have a **warning before it occurs in Production**.
* Extensions may need to be installed and configured in a specific order. Some extensions touch similar pieces of code in the back and front end, sometimes clashing and causing errors.
* Extensions typically are heavily tested in [Developer mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html, not Production mode. When you move to Staging and use Production mode, you may find error and surprises between extensions, your custom code, and Magento.
* Configurations and code may work great in your developer Integration environments and run into issues in Staging and Production. Working in your local doesn't confirm it works perfectly in production.
* Integration environments don't have all the incredible services available in Staging and Production, like Fastly, New Relic, and Blackfire.
* [Fully test]({{ page.baseurl }}cloud/live/stage-prod-test.html#loadtest) your site with a variety of tools in Staging for load, stress, performance, and site assets
* Integration environments may only have databases populated with test data, not matching a production-like environment

## Ready to go live {#ready}
You are ready to start go live steps:

* [Go live checklist]({{ page.baseurl }}cloud/live/stage-prod-test.html#loadtest)

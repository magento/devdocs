---
layout: default
group: cloud
subgroup: 160_deploy
title: Deploy your store
menu_title: Deploy your store
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/live/stage-prod-live.md
---

The process for deploying and going live with your store in a public or production server in our cloud environment begins with development. To provide the best experience for developing, testing, and deploying your store with consistent configurations we provide an end-to-end solution. Every environment supports direct URL access to the store and Admin console and SSH access for CLI commands.

The Magento Enterprise Cloud Edition provides three full environments with databases, services, and your code.

* You begin in the Integration environment to develop and test your custom modules, Magento extensions, 3rd party integrations, and configurations. When you push your local development to the Git branch, all of your code, the store, and more are built and deployed directly into an environment.
* To fully test in a near-production level environment, you deploy to a Staging environment with full production services. Heavily test in this environment to verify your payment gateways, shipping, price rules, various products, and full customer and admin interactions.
* Finally, deploy to the Production environment to complete go live steps and start selling.

This environment structure supports any methodology and release schedule, including continuous integrations.

To learn more, check the following:

* [Deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html)
* [Protective block]({{ page.baseurl }}cloud/live/live-prot.html)
*	[Build and deploy to your local]({{ page.baseurl }}cloud/live/live-sanity-check.html)
*	Deploy to staging and production:

	*	[Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html)
	*	[Prepare to deploy]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html)
	*	[Deploy code and data]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)
	*	[Test deployment]({{ page.baseurl }}cloud/live/stage-prod-test.html)

* [Go live]({{ page.baseurl }}cloud/live/live.html)

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
redirect_from:
  - /guides/v2.0/cloud/live/stage-prod-over.html
  - /guides/v2.1/cloud/live/stage-prod-over.html
  - /guides/v2.2/cloud/live/stage-prod-over.html
---

The process for deploying and going live with your store in a public or production server in our cloud environment begins with development. To provide the best experience for developing, testing, and deploying your store with consistent configurations we provide an end-to-end solution. Every environment supports direct URL access to the store and Admin console and SSH access for CLI commands.

The following diagram illustrates how the three environments work on a high level:

![How test, staging, and production works]({{ site.baseurl }}common/images/cloud_stage-prod-concept1.png){:width="600px"}

1. You begin in the Integration environment to develop and test your custom modules, Magento extensions, 3rd party integrations, and configurations.
2. When you push your local development to the Git branch, all of your code, the store, and more are built and deployed directly into an environment.
3. To fully test in a near-production level environment, you deploy to a Staging environment with full production services. Heavily test in this environment to verify your payment gateways, shipping, price rules, various products, and full customer and admin interactions.
4. Finally, deploy to the Production environment to complete go live steps and start selling.

<div class="bs-callout bs-callout-info" id="info">
  <p>Although the Integration environment can have many branches, Staging and Production have only one branch: the deployed Git <code>master</code>.</p>
</div>

## Assisted deployment
The Staging and Production environments require *assisted deployment*. These environments are not accessible through the Enterprise Cloud Edition Web Interface to add SSH keys or to modify environment variables, routes, or settings. You must enter a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to deploy code, add SSH keys, and go live.

With SSH keys added, you can access the environments to complete CLI commands without requiring tickets.

### Enter a ticket to deploy
{% include cloud/hooks.md %}

### Git and SSH URLs
Locate your Git and SSH URLs from the OneDrive onboarding document you received when you signed up for Magento Commerce.

After you know these URLs, you can access those environments without further intervention.

* Use the URLs to access the store as a customer.
* Use the URL /admin to access the Admin panel.
* Use SSH access and Git CLI commands to deploy updated code to Staging or Production. Magento Cloud CLI commands are not available in Staging and Production.

## Read-only environments
You should always deploy code and data from the `master` branch of your Integration environment to Staging, then to Production. If you need to fix issues, fix them in local development, push to Git, and complete the full deployment.

## Next steps
To learn more, check the following:

* [Deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html)
* [Protective block]({{ page.baseurl }}cloud/live/live-prot.html)
*	[Build and deploy to your local]({{ page.baseurl }}cloud/live/live-sanity-check.html)
*	[Prepare to deploy]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html)
*	[Migrate and deploy]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)
*	[Test deployment]({{ page.baseurl }}cloud/live/stage-prod-test.html)
* [Go live and launch]({{ page.baseurl }}cloud/live/live.html)

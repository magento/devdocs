---
group: cloud-guide
subgroup: 160_deploy
title: Deploy your store
menu_title: Deploy your store
menu_order: 1
menu_node: parent
redirect_from:
  - /guides/v2.1/cloud/live/stage-prod-over.html
  - /guides/v2.2/cloud/live/stage-prod-over.html
functional_areas:
  - Cloud
  - Deploy
---

The process for deploying and going live begins with development, continues to Staging, and ends with going live in Production. To provide the best experience for developing, testing, and deploying your store with consistent configurations we provide an end-to-end environment solution. Every environment supports direct URL access to the store and Admin console and SSH access for CLI commands.

You can fully push, merge, and deploy through the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-branch.html) or CLI commands through a terminal application.

This section provides indepth instructions and information on the build and deploy process, migrating data and content, and testing.

## Starter plan deployment {#starter}

We recommend creating a Staging branch from the `master` to best support your Starter plan development and deployment. With this in place, you have two of your four active environments ready: `master` for Production and `staging` for Staging.

Now you are ready to develop and deploy:

1. Create development branches from the `staging` branch. This allows you to merge up through Staging and Production.
2. Develop on local: custom modules, Magento extensions, 3rd party integrations, and configurations.
3. Push your local branch to the Git remote branch to test in a full environment.
4. To fully test in a near-production level environment, push code to a Staging branch.
5. Fully test in the Staging environment including payment gateways, shipping, price rules, various products, and full customer and admin interactions.
6. Finally, deploy to the Production `master` to complete testing, go live steps, and start selling.

For detailed information of the process, see [Starter Develop and Deploy Workflow]({{ page.baseurl }}/cloud/basic-information/starter-develop-deploy-workflow.html).

## Pro plan deployment {#pro}

Pro comes with a large Integration environment with eight active branches and environments including `master`, Staging, and Production. When you create your project, code is ready to branch, develop, and push for building and deploying your site. Although the Integration environment can have many branches, Staging and Production have only one branch: the deployed Git `master`.

1. Create development branches from the Integration `master` branch.
2. Develop on local: custom modules, Magento extensions, 3rd party integrations, and configurations.
3. Push your local branch to the Git remote branch to test in a full environment.
4. Merge final code to the Integration `master` branch.
5. To fully test in a near-production level environment, push code to the Staging environment.
6. Fully test in the Staging environment including payment gateways, shipping, price rules, various products, and full customer and admin interactions.
7. Finally, deploy to the Production environment to complete testing, go live steps, and start selling.

For detailed information of the process, see [Pro Develop and Deploy Workflow]({{ page.baseurl }}/cloud/architecture/pro-develop-deploy-workflow.html).

### Enter a ticket for deploying hooks {#hooks}
{% include cloud/hooks.md %}

### Git and SSH URLs {#git-ssh}

For Pro, locate your Git and SSH URLs from the OneDrive onboarding document you received when you signed up for Magento Commerce.

After you know these URLs, you can access those environments without further intervention.

* Use the URLs to access the store as a customer.
* Use the URL /admin to access the Admin panel.
* (Pro) Use SSH access and Git CLI commands to deploy updated code to Staging or Production. Magento Cloud CLI commands are not available in Staging and Production.

For more information, see [SSH and sFTP]({{ page.baseurl }}/cloud/env/environments-ssh.html).

## Read-only environments {#read-only}

You should always deploy code by pushing your local Git branch to your environments. You should only directly modify configurations for a few key extensions directly in your Staging and Production environments through the Magento Admin or using environment variables.

Always update your code in a branch on your local environment, push to Git, and complete the full deployment when you need to do the following:

* Add extensions
* Add 3rd party integrations
* Fix issues and check errors

## Next steps

To learn more, check the following:

* [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)
* [Continuous integration]({{ page.baseurl }}/cloud/deploy/continuous-deployment.html)
* [Protective block]({{ page.baseurl }}/cloud/live/live-prot.html)
*	[Build and deploy to your local]({{ page.baseurl }}/cloud/live/live-sanity-check.html)
*	[Prepare to deploy]({{ page.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)
*	[Migrate and deploy]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html)
*	[Test deployment]({{ page.baseurl }}/cloud/live/stage-prod-test.html)
* [Go live and launch]({{ page.baseurl }}/cloud/live/live.html)

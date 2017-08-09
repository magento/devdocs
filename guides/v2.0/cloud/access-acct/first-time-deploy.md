---
layout: default
group: cloud
subgroup: 080_setup
title: First time deployment
menu_title: First time deployment
menu_order: 60
version: 2.0
github_link: cloud/access-acct/first-time-deploy.md
---

#### Previous step:
[Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)

<div class="bs-callout bs-callout-warning" markdown="1">
Only complete this step once for a new project. You should have a fresh Magento Commerce template `master` branch without any code or configuration changes to deploy. As a best practice, you need to have the template Magento Commerce project (or `master` branch) fully deployed across all environments to ensure all future code pushes correctly deploy.
</div>

After fully setting up your local workspace, you should have the cloned Integration `master` branch on your local. To finish your initial setup, we **strongly recommend fully deploying** `master` branch to Staging and Production environments. You only need to push this branch from Integration to Staging and Production once without any changes. This fully installs the base Magento Commerce application into those environments.

This initial push provides the following benefits:

* Fully installs Magento in each environment
* Allows the build/deploy scripts to use the setup:upgrade command instead of setup:install
* Protects against errors and failures when installing with added modules and extensions

  Not all extensions are correctly tested with the setup:install command and application modes. If you initially install Magento code with added 3rd party extensions or custom code, you may receive errors and build/deploy failures. By deploying the unmodified Magento template, all future deployments to Staging and Production typically do not encounter installation issues from 3rd party and custom code.

To deploy, you should have an unmodified Magento template.

**Do not:**

* Touch any code or options in the Admin console
* Modify any code
* Make configuration changes
* Add extensions or 3rd party integrations

Enter a ticket with Support to have the `master` branch deployed from your Integration environment to Staging and Production.

When this code is fully deployed to those environments, you can begin development, add extensions, and more!

#### Related topics

* [Deploy your store]({{ page.baseurl }}cloud/live/stage-prod-live.html)
* [Deployment workflow]({{ page.baseurl }}cloud/reference/discover-deploy.html)

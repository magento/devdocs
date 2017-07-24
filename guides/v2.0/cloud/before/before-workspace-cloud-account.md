---
layout: default
group: cloud
subgroup: 080_setup
title: Set up an account and project
menu_title: Set up an account and project
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/before/before-workspace-cloud-account.md
redirect_from:
  - /guides/v2.0/cloud/access-acct/first-time-setup_template.html
  - /guides/v2.1/cloud/access-acct/first-time-setup_template.html
  - /guides/v2.2/cloud/access-acct/first-time-setup_template.html
---

#### Previous step:
[Set up a project and dev workspace]({{ page.baseurl }}cloud/before/before-workspace.html)

To begin working with a project and develop your store, [create a Mangento Enterprise Cloud Edition account](https://accounts.magento.cloud){:target="_blank"}. The account provides access to create a project for Magento development and deployment across all supported environments.

You should receive an e-mail invitation to verify and access the account. If you don't see the invitation, check your junk e-mail folder. Click the **Verify my account** option in the email to verify and access your account.

Use this procedure whether you're starting a new project from scratch or if you're importing an existing Magento installation to Enterprise Cloud Edition. When you initially set up a project from a template, we retrieve the code from the [`magento-cloud-configuration` repository](https://github.com/magento/magento-cloud-configuration){:target="_blank"}.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
We recommend always starting with the blank site from a template as your initial project option. Completely deploy this code across your entire environment from Integration to Staging to Production for a clear experience with deployment in Magento ECE. If you have an existing Magento deployment, import code, extensions, themes, and data after fully deploying this base Magento code.
</div>

{% include cloud/new-project-from-template.md %}

#### Next step
[Install Magento prerequisites]({{ page.baseurl }}cloud/before/before-workspace-magento-prereqs.html)

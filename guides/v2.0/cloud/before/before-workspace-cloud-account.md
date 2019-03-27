---
group:
subgroup:
title: Set up an account and project
menu_title: Set up an account and project
menu_order:
menu_node:
---

<!-- This file isn't linked to the main TOC -->

#### Previous step:
[Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html)

To begin working with a project and develop your store, you should have received an e-mail invitation to [create a Magento Enterprise Cloud Edition account](https://accounts.magento.cloud){:target="_blank"}. The account provides access to your project for Magento development and deployment across all supported environments.

You should receive an e-mail invitation to verify and access the account. If you don't see the invitation, check your junk e-mail folder. Click the **Verify my account** option in the email to verify and access your account.

When logged in, you should see a project named and ready to access.

If the project name is **[UntitledProject]**, a Super User admin or the account owner needs to create the project. Only one of these users can create the project.

Use this procedure whether you are starting a new project from scratch or you are importing an existing Magento installation to Enterprise Cloud Edition. When you initially set up a project from a template, we retrieve the code from a specific branch in the 'magento-cloud-configuration' repository.

{: .bs-callout .bs-callout-info }
We recommend always starting with the blank site from a template as your initial project option. Completely deploy this code across your entire environment from Integration to Staging to Production for a clear experience with deployment in {{site.data.var.ece}}. If you have an existing Magento deployment, import code, extensions, themes, and data after fully deploying this base Magento code.

{% include cloud/new-project-from-template.md %}

#### Next step
[Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)

---
layout: default
group: cloud
subgroup: 08_setup
title: Create a sample Magento project from a template
menu_title: Create a sample Magento project from a template
menu_order: 51
menu_node: 
level3_menu_node: level3child
level3_subgroup: newproj
version: 2.0
github_link: cloud/access-acct/first-time-setup_template.md
---

This section discusses how to get started with a Magento cloud deployment by cloning an existing sample project. You can customize your project to your needs anytime, including before you deploy it.

When you initially set up a project from a template, we retrieve the code from the [`magento-cloud-configuration` repository](https://github.com/magento-cloud/magento-cloud-configuration){:target="_blank"}.

<div class="bs-callout bs-callout-info" id="info">
  <p>Before you continue, make sure you completed the tasks discussed in <a href="{{page.baseurl}}cloud/before/before-workspace.html">Set up a Magento workspace</a>.</p>
</div>

{% include cloud/new-project-from-template.md %}
	
#### Next steps
*	[Set up an environment]({{ page.baseurl }}cloud/access-acct/set-up-env.html)
*	[Set Magento Admin environment variables]({{ page.baseurl }}cloud/access-acct/admin-env-vars.html)



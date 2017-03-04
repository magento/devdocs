---
layout: default
group: cloud
subgroup: 08_setup
title: Step 4, Install Magento prerequisites
menu_title: Step 4, Install Magento prerequisites
menu_order: 56
menu_node: 
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-magento-prereqs.md
---

For you to install Magento locally, you must install the prequisite software:

*	[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"} so you can interact with the Magento Enterprise Cloud Edition's Git server.
*	[Apache]({{ page.baseurl }}install-gde/prereq/apache.html)

	You can also use nginx but those instructions aren't documented at this time.
*	PHP

	*	[CentOS]({{ page.baseurl }}install-gde/prereq/php-centos.html)
	*	[Ubuntu]({{ page.baseurl }}install-gde/prereq/php-ubuntu.html)
*	[MySQL]({{ page.baseurl }}install-gde/prereq/mysql.html)

You can also install [optional software]({{ page.baseurl }}install-gde/prereq/optional.html) as well.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento documentation disucsses installing prerequisite software on CentOS or Ubuntu only. For information on installing software on Windows or MacOS, consult a community resource.
</div>

#### Next step
[Step 4, Set up PHP and MySQL]({{ page.baseurl }}cloud/before/before-workspace-php.html)
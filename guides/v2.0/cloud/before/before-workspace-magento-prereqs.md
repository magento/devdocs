---
layout: default
group: cloud
subgroup: 080_setup
title: Step 4, Install Magento prerequisites
menu_title: Step 4, Install Magento prerequisites
menu_order: 56
menu_node:
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-magento-prereqs.md
---

Local installations of Magento require the following software installed.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento documentation provides installation instructions for installing software on CentOS or Ubuntu only. For information on installing software on Windows or MacOS, consult a community resource.
</div>

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"} - Provides code branching and management for accessing Magento Enterprise Cloud Edition and your code respositories. Use Git command-line commands or applications of your choice to work with Git.
	For more information, see [How Cloud uses Composer]({{ page.baseurl }}cloud/reference/cloud-composer.html).
* [Composer](https://getcomposer.org/download/) - Used for dependency management. Composer enables us to manage the Magento components and their dependencies.
	For more information, see [How Cloud uses Composer]({{ page.baseurl }}cloud/reference/cloud-composer.html).
*	[Apache]({{ page.baseurl }}install-gde/prereq/apache.html) (You can also use nginx but those instructions aren't documented at this time.)
*	{% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} - We recommend PHP 7.0. For information on installing PHP, see these instructions for [CentOS]({{ page.baseurl }}install-gde/prereq/php-centos.html) and [Ubuntu]({{ page.baseurl }}install-gde/prereq/php-ubuntu.html).
*	[MySQL]({{ page.baseurl }}install-gde/prereq/mysql.html)

You can also install [optional software]({{ page.baseurl }}install-gde/prereq/optional.html) as well.

#### Next step
[Step 5, Set up PHP and MySQL]({{ page.baseurl }}cloud/before/before-workspace-php.html)

---
layout: default
group: cloud
subgroup: 08_setup
title: Step 2, Clone the project
menu_title: Step 2, Clone the project
menu_order: 62
menu_node: 
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-2_clone.md
---

{::options syntax_highlighter="rouge" /}

This topic discusses how to get started developing on Magento Enterprise Cloud Edition. All developers should perform the tasks discussed in this topic.

## Clone the master environment {#setup-env-setup}

{% collapsible To clone a project and environment: %}

1.	Log in to your local development machine as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Change to the web server or virtual host docroot.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	Clone a project.

		magento-cloud project:get <project ID>

	When prompted for a directory name, enter `magento2`.
4.	Change to the project directory.

	 For example, `cd magento2`
4.	List environments in the project:

		magento-cloud environment:list

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	`magento-cloud environment:list` displays environment hierarchies whereas `git branch` displays does not. If you have any nested environments, use `magento-cloud environment:list`.
	</div>

5.	Fetch origin branches:

		git fetch origin
6.	Pull updated code:

		git pull origin <environment ID>

#### Next step
[]()

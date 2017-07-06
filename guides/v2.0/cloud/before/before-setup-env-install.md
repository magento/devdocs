---
layout: default
group: cloud
subgroup: 080_setup
title: Step 6, Install Magento
menu_title: Step 6, Install Magento
menu_order: 166
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-install.md
---

{::options syntax_highlighter="rouge" /}

To be able to customize the Magento software on your local machine, you should install it using the following information:

*	Host name or IP address of your machine
*	{% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} user name, password, and URI you created earlier

Before you begin, list the environment variables.

	magento-cloud variable:get -e <environment ID>

A sample result follows:

	+----------------+---------------+-----------+------+
	| ID             | Value         | Inherited | JSON |
	+----------------+---------------+-----------+------+
	| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
	| ADMIN_URL      | magento_A8v10 | Yes       | No   |
	| ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
	+----------------+---------------+-----------+------+

<div class="bs-callout bs-callout-info" id="info" markdown="1">
After you install Magento, set file system permissions and ownership as discussed in [Step 7, Set file system permissions and ownership]({{ page.baseurl }}cloud/before/before-setup-env-perms.html).
</div>

#### Next step
[Step 7, Set file system permissions and ownership]({{ page.baseurl }}cloud/before/before-setup-env-perms.html)

#### Related topics
<ul><li><a href="{{ page.baseurl }}install-gde/install/web/install-web.html">Install the Magento software using the Web Setup Wizard</a></li>
	<li><a href="{{ page.baseurl }}install-gde/install/cli/install-cli.html">Install the Magento software using the command line</a></li></ul>

---
layout: default
group: cloud
subgroup: 080_setup
title: Step 6, Install Magento
menu_title: Step 6, Install Magento
menu_order: 167
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-install.md
---

{::options syntax_highlighter="rouge" /}

With your workspace prepared, install Magento on your local to verify custom code, extensions, and more. This section discusses the install options and steps you should complete with your installation.

Installation of Magento onto your local supports a command line option or a Web Setup Wizard. The CLI option also supports a Composer installation with sample data. For best information on your installation options and steps, see the [Installation Roadmap]({{ page.baseurl }}install-gde/install-roadmap_cli.html).

To be able to customize the Magento software on your local machine, you should install it using the following information:

*	Host name or IP address of your machine
*	{% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} user name, password, and URI you created earlier

Before you begin, list the environment variables.

	magento-cloud variable:get -e <environment ID>

The following results provides an example of variables:

	+----------------+---------------+-----------+------+
	| ID             | Value         | Inherited | JSON |
	+----------------+---------------+-----------+------+
	| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
	| ADMIN_URL      | magento_A8v10 | Yes       | No   |
	| ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
	+----------------+---------------+-----------+------+

To install Magento, follow the instructions using one of these options:

* [Install the Magento software using the command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)
* [Install the Magento software using the Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
After you install Magento, set file system permissions and ownership as discussed in [Step 7, Set file system permissions and ownership]({{ page.baseurl }}cloud/before/before-setup-env-perms.html).
</div>

#### Next step
[Step 7, Set file system permissions and ownership]({{ page.baseurl }}cloud/before/before-setup-env-perms.html)

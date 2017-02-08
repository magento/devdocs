---
layout: default
group: cloud
subgroup: 08_setup
title: Step 6, Set file system permissions and ownership
menu_title: Step 6, Set file system permissions and ownership
menu_node: 66
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-perms.md
---

{::options syntax_highlighter="rouge" /}

To set up file system permissions and ownership:

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

				cd <your Magento install dir>
				find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
				find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
				chown -R :<web server group> .
				chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}


<p id="setup-env-install">{% collapsibleh2 Step 8: Install the Magento software %}

To be able to customize the Magento software on your local machine, you should install it using the following information:

*	Host name or IP address of your machine
*	Admin user name, password, and URI you created earlier

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

<h4>Related topics</h4>
<ul><li><a href="{{ page.baseurl }}install-gde/install/web/install-web.html">Install the Magento software using the Web Setup Wizard</a></li>
	<li><a href="{{ page.baseurl }}install-gde/install/cli/install-cli.html">Install the Magento software using the command line</a></li></ul>

{% endcollapsibleh2 %}


<h4>Next step</h4>
<a href="{{ page.baseurl }}cloud/access-acct/fastly.html">Set up Fastly</a>

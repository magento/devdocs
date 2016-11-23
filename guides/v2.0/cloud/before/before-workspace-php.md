---
layout: default
group: cloud
subgroup: 08_setup
title: Step 5, Set up PHP and MySQL
menu_title: Step 5, Set up PHP and MySQL
menu_order: 20
menu_node: 
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-php.md
---

## Set up PHP {#cloud-first-php}
When you're working with the Magento Cloud CLI, local environment settings come from the machine on which you're working, not from Magento Enterprise Cloud Edition. For example, certain things (like debugging) require a larger PHP `memory_limit` than most PHP distributions provide by default.

{% collapsible To set `memory_limit`: %}

Before working with your Magento Enterprise Cloud Edition project, make sure you set the PHP `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.

1.	Find your `php.ini` file using the following command:

		php --ini
		
	Use the value of `Loaded Configuration File`.
2.	Open `php.ini` in a text editor.
3.	Change the value of `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.
4.	Save your changes to `php.ini` and exit the text editor.
5.	Restart your web server:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`

{% endcollapsible %}

## Set up MySQL {#cloud-mysql}
The MySQL configuration parameter [`auto_increment_increment`](http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html){:target="_blank"} is set to `1` by default in a local MySQL installation but the Magento Enterprise Cloud Edition cluster uses a value of `3`.

To avoid issues, we recommend you set `auto_increment_increment=3`.

{% collapsible To view and set `auto_increment_increment`: %}

First, view the current value:

	mysqladmin variables -u <root user name> -p | grep 'auto_increment'

If necessary, set `auto_increment_increment` to 3:

1.	As a user with `root` privileges, open `/etc/my.cnf` in a text editor.
2.	Add or edit the following line in the `[mysqld]` section:

		auto_increment_increment=3
3.	Restart MySQL:

		service mysqld restart

{% endcollapsible %}

#### Next steps
*	If the Magento software isn't installed in a Cloud environment, see [create a new project from a template]({{ page.baseurl }}cloud/access-acct/first-time-setup_template.html) or [import an existing project]({{ page.baseurl }}cloud/access-acct/first-time-setup_import.html)
*	Otherwise, see [Set up an environment and install the Magento software locally]({{ page.baseurl }}cloud/access-acct/set-up-env.html)
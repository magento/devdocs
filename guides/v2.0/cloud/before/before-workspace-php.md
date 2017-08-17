---
layout: default
group: 
subgroup:
title: Step 5, Set up PHP and MySQL
menu_title: Step 5, Set up PHP and MySQL
menu_order:
menu_node:
version: 2.0
github_link: cloud/before/before-workspace-php.md
---

## Set up PHP {#cloud-first-php}
When you're working with the Magento Cloud CLI, local environment settings come from the machine on which you're working, not from Magento Enterprise Cloud Edition. For example, certain things (like debugging) require a larger {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} `memory_limit` than most PHP distributions provide by default.

To set `memory_limit`:

Before working with your Magento Enterprise Cloud Edition project, make sure you set the PHP `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.

1.	Find your `php.ini` file using the following command:

		php --ini

	Use the value of `Loaded Configuration File`.
2.	As a user with `root` privileges, open `php.ini` in a text editor.
3.	Change the value of `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.
4.	Save your changes to `php.ini` and exit the text editor.
5.	Restart your web server:

	*	Apache

		*	CentOS: `service httpd restart`
		*	Ubuntu: `service apache2 restart`
	*	nginx: `service nginx restart`


## Set up MySQL {#cloud-mysql}
The MySQL configuration parameter [`auto_increment_increment`](http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html){:target="_blank"} is set to `1` by default in a local MySQL installation but the Magento Enterprise Cloud Edition cluster uses a value of `3`.

To avoid issues, we recommend you set `auto_increment_increment=3`.

To view and set `auto_increment_increment`:

First, view the current value:

	mysqladmin variables -u <root user name> -p | grep 'auto_increment'

If necessary, set `auto_increment_increment` to 3:

1.	As a user with `root` privileges, open `/etc/my.cnf` in a text editor.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		On Ubuntu 16, the path is typically `/etc/mysql/mysql.conf.d/mysqld.cnf`.
	</div>

2.	Add or edit the following line in the `[mysqld]` section:

		auto_increment_increment=3

		Magento Enterprise Cloud Edition supports a High Availability configuration. This setting increments the database IDs in increments of three to ensure row uniqueness for Galara databases on each of the three HA nodes in production.

3.	Restart MySQL:

		service mysqld restart


#### Next step
[Step 6, Set up the Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html)

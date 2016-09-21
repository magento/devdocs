---
layout: default
group: install_trouble
subgroup: 20_other
title: Error 'MySQL server has gone away' during installation
menu_title: Error 'MySQL server has gone away' during installation
menu_node: 
menu_order: 505 
version: 2.0
github_link: install-gde/trouble/tshoot_mysql_table-open-cache.md
---

<h2 id="install-trouble-mysql-gone-away">'MySQL server has gone away' during installation</h2>

### Details

During installation, the following message displays: 

	MySQL server has gone away

### Solution

Set the value of <a href="https://dev.mysql.com/doc/refman/5.6/en/table-cache.html" target="_blank">table_open_cache</a> to a value of at least 250 as follows:

1.	As a user with `root` privileges, open the MySQL configuration file in a text editor.

	Ubuntu: `/etc/mysql/my.cnf`

	CentOS: `/etc/my.cnf`

2.	Search for an existing `table_open_cache` setting. If there is none, add one.

3.	Set the value to at least 250:

		table_open_cache=250

4.	Save your changes to `my.cnf` and exit the text editor.

5.	As a user with `root` privileges, restart the MySQL service:

	Ubuntu: `service mysql restart`

	CentOS: `service mysqld restart`

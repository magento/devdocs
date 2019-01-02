---
group: installation-guide
subgroup: 20_other
title: Error 'MySQL server has gone away' during installation
menu_title: Error 'MySQL server has gone away' during installation
menu_node:
menu_order: 505
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During installation, the following message displays:

	MySQL server has gone away

### Solution

Set the value of [table_open_cache](https://dev.mysql.com/doc/refman/5.6/en/table-cache.html){:target="_blank"} to a value of at least 250 as follows:

1.	As a user with `root` privileges, open the MySQL configuration file in a text editor.

	Ubuntu 16: `/etc/mysql/mysql.conf.d/mysqld.cnf`

	Ubuntu earlier than 16: `/etc/mysql/my.cnf`

	CentOS: `/etc/my.cnf`

2.	Search for an existing `table_open_cache` setting. If there is none, add one.

3.	Set the value to at least 250:

		table_open_cache=250

4.	Save your changes to `my.cnf` and exit the text editor.

5.	As a user with `root` privileges, restart the MySQL service:

	Ubuntu: `service mysql restart`

	CentOS: `service mysqld restart`

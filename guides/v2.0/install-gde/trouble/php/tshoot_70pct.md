---
layout: default
group: install_trouble
subgroup: Errors during installation
title: Installation stops at about 70%
menu_title: Installation stops at about 70%
menu_node: 
menu_order: 2
version: 2.0
github_link: install-gde/trouble/php/tshoot_70pct.md
---

<h2 id="install-trouble-pdo">Setup Wizard installation stops at about 70%</h2>
During installation using the Setup Wizard, the process stops at about 70% (with or without sample data). No errors display on the screen.

One common issue is the PHP setting for <a href="http://php.net/manual/en/info.configuration.php#ini.max-execution-time" target="_blank">`max_execution_time`</a>. 

### Solution:
If you encounter this error, we recommend you increase the value in `php.ini` to 18000 (30 minutes). You can use a larger or smaller value if it helps.

1.	Locate your `php.ini` using a `phpinfo.php` file.
2.	As a user with `root` privileges, open `php.ini` in a text editor.
3.	Locate the `max_execution_time` setting.
4.	Change its value to `18000`.
5.	Save your changes to `php.ini` and exit the text editor.
6.	Restart your web server.

	Examples for Apache follow:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`	


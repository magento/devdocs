---
layout: default 
group: install_trouble
subgroup: Z_Other issues
title: SQLSTATE[HY000] [2002] No such file or directory 
menu_title: SQLSTATE[HY000] [2002] No such file or directory 
menu_node: 
menu_order: 400
version: 2.0
github_link: install-gde/trouble/php/tshoot_phpini.md
---

<h2 id="install-trouble-phpini">SQLSTATE[HY000] [2002] No such file or directory</h2>

### Details

During or after installation, a  message similar to the following displays: 

	Exception' with message 'PHP Fatal error: Uncaught exception 'PDOException' with message 
	'SQLSTATE[HY000] [2002] No such file or directory 

### Solution

This is commonly caused by a different instance of PHP being used by the PHP command line compared to the web server. In particular, `mysql.sock` might be misconfigured if this is the case.

To determine whether or not you're using one instance of PHP:

1.	Log in to your Magento server.
2.	Enter the following command:

		php -i | grep 'php.ini'
	
	This determines the settings used by the PHP command-line interface (CLI). Note where `php.ini` is located.

3.	If you haven't already done so, set up a <a href="{{page.baseurl}}install-gde/prereq/optional.html#install-optional-phpinfo">phpinfo.php</a> on your web server.
4.	Compare the value of **Loaded Configuration File** from `phpinfo.php` with the one from `php -i`. 

	`phpinfo.php` shows the `php.ini` file used by your web server. If it's different from what's in PHP's `php.ini`, you must make *all* PHP settings consistent for both the PHP CLI and the web server.

	For additional details, consult the documentation provided with your web server.


---
layout: default
group: install_trouble
subgroup: Errors during installation
title: During installation, exception SessionHandler::read()
menu_title: During installation, exception SessionHandler::read()
menu_node: 
menu_order: 26
github_link: install-gde/trouble/tshoot_session.md
---

<h2>During installation, Exception - SessionHandler::read</h2>
**Symptom**: At the last step of installing Magento 2, the following exception displays:

{% highlight PHP %} 
exception 'Exception' with message 'Warning: SessionHandler::read():
open(..) failed: No such file or directory (2) ../magento2/lib/internal/Magento/Framework/Session/SaveHandler.php on line 74' 
in ../magento2/lib/internal/Magento/Framework/App/ErrorHandler.php:67
{% endhighlight %} 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
	<p>This error occurs only in versions earlier than TBD. If you installed version TBD or later, this error should not occur.</p>
	<p>For more information about PHP configuration options for Redis, see TBD.</p>
	<p>For more information about specifying Redis using the command-line installer, see TBD.</p></span>
</div>

### Solution:

This happens when your `session.save_handler` PHP parameter is set to some another session storage than `files` (for example, `redis`, `memcached`, and so on). This is a known issue we're working to resolve.

Until a fix is available, as a workaround you can make changes to `php.ini` discussed in the following sections.

### Locate `php.ini`
Locate `php.ini` by entering the following command:

	php -i | grep "Loaded Configuration File"

Typical locations follow:

*	Ubuntu: `/etc/php5/cli/php.ini`
*	CentOS: `/etc/php.ini`

### Workaround
1.	As a user with `root` privileges, open `php.ini` in a text editor.
2.	Locate `session.save_handler`
3.	Set it in any of the following ways:

	*	To comment it out:

			;session.save_path = <path>
		
	*	To set it to a file system path:
		
			session.save_handler = files



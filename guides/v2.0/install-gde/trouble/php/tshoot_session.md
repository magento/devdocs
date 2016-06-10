---
layout: default
group: install_trouble
subgroup: Errors during installation
title: During installation, exception SessionHandler::read()
menu_title: During installation, exception SessionHandler::read()
menu_node: 
menu_order: 26
version: 2.0
github_link: install-gde/trouble/php/tshoot_session.md
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
	<p>This error occurs only in code versions earlier than September 28, 2015. If you installed code dated September 29 or later, this error should not occur.</p>
	<p>For more information about configuration options for Redis, see <a href="{{ site.gdeurl }}config-guide/redis/config-redis.html">Configure Redis</a>.</p>
	<p>For more information about specifying Redis using the command-line installer, see the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">installation topic</a> or the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-deployment.html#instgde-cli-subcommands-configphp">deployment configuration topic</a>.</p></span>
</div>

### Solution:

This happens when your `session.save_handler` PHP parameter is set to some another session storage than `files` (for example, `redis`, `memcached`, and so on). This is a known issue we're working to resolve.

Solutions:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Upgrade your Magento 2 code</a>
*	Use the following workaround with existing code.

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



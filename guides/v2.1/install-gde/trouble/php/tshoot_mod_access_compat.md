---
layout: default
group: install_trouble
subgroup: 02_access
title: 503 (Service Unavailable) errors accessing Magento software in a web browser
menu_title: 503 (Service Unavailable) errors accessing Magento software in a web browser
menu_node:
menu_order: 3
version: 2.1
github_link: install-gde/trouble/php/tshoot_mod_access_compat.md
redirect_from:
  - /guides/v1.0/install-gde/trouble/tshoot_mod_access_compat.html
  - /guides/v2.0/install-gde/trouble/tshoot_mod_access_compat.html
functional_areas:
  - Install
  - System
  - Setup
---


<h2 id="trouble-install-depend">503 (Service Unavailable) errors accessing Magento software in a web browser</h2>

#### Symptoms

When you try to access your {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} or {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} in a web browser, you get HTTP 503 (Service Unavailable) errors.

To confirm this issue is not related to <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-maint-configphp">maintenance mode</a>, look in your Apache `error.log` for messages that include:

	"Invalid command 'Order', perhaps misspelled or defined by a module not included in the server configuration". 

#### Details

Apache 2.4 changes the way certain directives related to `.htaccess` work. The Magento software uses `.htaccess` to rewrite URLs. If `.htaccess` doesn't work properly, you cannot access the Magento software in a web browser.

Not all Apache 2.4 distributions have this issue because in some cases, a compatibility {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} named `mod_access_compat` is enabled by default. If, however, your Apache 2.4 distribution has this module disabled, you must perform the tasks discussed in the next section. You can also consult the resources listed in the final section in this topic.

#### Suggested solution
As a user with 'root' privileges, enter the following commands:

	a2enmod access_compat
	service <name> restart

On CentOS, `<name>` is `httpd`. On Ubuntu, `<name>` is `apache2`.

#### Additional resources

*	<a href="http://httpd.apache.org/docs/current/mod/mod_access_compat.html" target="_blank">Apache documentation about mod_access_compat</a>
*	<a href="http://httpd.apache.org/docs/current/mod/mod_authz_host.html" target="_blank">Apache documentation about mod_authz_host</a>
*	<a href="http://docstore.mik.ua/orelly/linux/apache/ch05_06.htm" target="_blank">Order, Allow, Deny from the Apache Definitive Guide</a>
*	<a href="http://askubuntu.com/questions/335228/changes-in-apache-config-between-12-04-2-and-12-04-3-lts" target="_blank">askubuntu.com</a>

---
group: install_trouble
subgroup: 03_install
title: Installation stops at about 70%
menu_title: Installation stops at about 70%
menu_node:
menu_order: 2
version: 2.1
functional_areas:
  - Install
  - System
  - Setup
---

During installation using the Setup Wizard, the process stops at about 70% (with or without sample data). No errors display on the screen.

Common causes for this issue include:

*	The {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} setting for [`max_execution_time`](http://php.net/manual/en/info.configuration.php#ini.max-execution-time)
*	Timeout values for {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} and Varnish

### Solution:

Set all of the following as appropriate.

#### All web servers and Varnish

1.	Locate your `php.ini` using a [`phpinfo.php`]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpinfo) file.
2.	As a user with `root` privileges, open `php.ini` in a text editor.
3.	Locate the `max_execution_time` setting.
4.	Change its value to `18000`.
5.	Save your changes to `php.ini` and exit the text editor.
6.	Restart Apache:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`

	If you use nginx or Varnish, continue with the following sections.

#### nginx only

If you use nginx, use our included `nginx.conf.sample` or add a timeout settings in the nginx host configuration file to the `location ~ ^/setup/index.php` section as follows:

	location ~ ^/setup/index.php {
		.....................
		fastcgi_read_timeout 600s;
       	fastcgi_connect_timeout 600s;
	}

Restart nginx: `service nginx restart`

#### Varnish only

If you use Varnish, edit `default.vcl` and add a timeout limit value to the `backend` stanza as follows:

	backend default {
    .....................
	      .first_byte_timeout = 600s;
	}

Restart Varnish.

		service varnish restart

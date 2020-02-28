---
group: installation-guide
subgroup: 03_install
title: Installation stops at about 70%
menu_title: Installation stops at about 70%
menu_node:
menu_order: 2
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360033773871
---

During installation using the Setup Wizard, the process stops at about 70% (with or without sample data). No errors display on the screen.

Common causes for this issue include:

*  The [PHP](https://glossary.magento.com/php) setting for [`max_execution_time`](http://php.net/manual/en/info.configuration.php#ini.max-execution-time){:target="_blank"}
*  Timeout values for [nginx](https://glossary.magento.com/nginx) and Varnish

### Solution:

Set all of the following as appropriate.

#### All web servers and Varnish

1. Locate your `php.ini` using a [`phpinfo.php`]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpinfo) file.
1. As a user with `root` privileges, open `php.ini` in a text editor.
1. Locate the `max_execution_time` setting.
1. Change its value to `18000`.
1. Save your changes to `php.ini` and exit the text editor.
1. Restart Apache:

   *  CentOS: `service httpd restart`
   *  Ubuntu: `service apache2 restart`

 If you use nginx or Varnish, continue with the following sections.

#### nginx only

If you use nginx, use our included `nginx.conf.sample` or add a timeout settings in the nginx host configuration file to the `location ~ ^/setup/index.php` section as follows:

```conf
location ~ ^/setup/index.php {
  .....................
  fastcgi_read_timeout 600s;
      fastcgi_connect_timeout 600s;
}
```

Restart nginx: `service nginx restart`

#### Varnish only

If you use Varnish, edit `default.vcl` and add a timeout limit value to the `backend` stanza as follows:

```conf
backend default {
  .....................
      .first_byte_timeout = 600s;
}
```

Restart Varnish.

```bash
service varnish restart
```

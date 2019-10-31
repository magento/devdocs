---
group: installation-guide
subgroup: 02_access
title: 503 (Service Unavailable) errors accessing Magento software in a web browser
menu_title: 503 (Service Unavailable) errors accessing Magento software in a web browser
menu_node:
menu_order: 3
functional_areas:
  - Install
  - System
  - Setup
---

## 503 (Service Unavailable) errors accessing Magento software in a web browser {#trouble-install-depend}

### Symptoms

When you try to access your [Magento Admin](https://glossary.magento.com/magento-admin) or [storefront](https://glossary.magento.com/storefront) in a web browser, you get HTTP 503 (Service Unavailable) errors.

To confirm this issue is not related to [maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html), look in your Apache `error.log` for messages that include:

```text
"Invalid command 'Order', perhaps misspelled or defined by a module not included in the server configuration".
```

### Details

Apache 2.4 changes the way certain directives related to `.htaccess` work. The Magento software uses `.htaccess` to rewrite URLs. If `.htaccess` doesn't work properly, you cannot access the Magento software in a web browser.

Not all Apache 2.4 distributions have this issue because in some cases, a compatibility [module](https://glossary.magento.com/module) named `mod_access_compat` is enabled by default. If, however, your Apache 2.4 distribution has this module disabled, you must perform the tasks discussed in the next section. You can also consult the resources listed in the final section in this topic.

### Suggested solution

As a user with 'root' privileges, enter the following commands:

```bash
a2enmod access_compat
```

```bash
service <name> restart
```

On CentOS, `<name>` is `httpd`. On Ubuntu, `<name>` is `apache2`.

### Additional resources

*  [Apache documentation about mod_access_compat](http://httpd.apache.org/docs/current/mod/mod_access_compat.html){:target="_blank"}
*  [Apache documentation about mod_authz_host](http://httpd.apache.org/docs/current/mod/mod_authz_host.html){:target="_blank"}
*  [Order, Allow, Deny from the Apache Definitive Guide](http://docstore.mik.ua/orelly/linux/apache/ch05_06.htm){:target="_blank"}
*  [askubuntu.com](http://askubuntu.com/questions/335228/changes-in-apache-config-between-12-04-2-and-12-04-3-lts){:target="_blank"}

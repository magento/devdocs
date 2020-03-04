---
group: installation-guide
subgroup: 03_install
title: During installation, exception SessionHandler::read()
menu_title: During installation, exception SessionHandler::read()
menu_node:
menu_order: 26
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360033427272
---

**Symptom**: At the last step of installing Magento 2, the following [exception](https://glossary.magento.com/exception) displays:

```temrinal
exception 'Exception' with message 'Warning: SessionHandler::read():
open(..) failed: No such file or directory (2) ../magento2/lib/internal/Magento/Framework/Session/SaveHandler.php on line 74'
in ../magento2/lib/internal/Magento/Framework/App/ErrorHandler.php:67
```

{:.bs-callout-info}
This error occurs only in code versions earlier than September 28, 2015. If you installed code dated September 29 or later, this error should not occur. For more information about configuration options for Redis, see [Configure Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html). For more information about specifying Redis using the command-line installer, see the [installation topic]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html) or the [deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html#instgde-cli-subcommands-configphp) topic.

### Solution:

This happens when your `session.save_handler` PHP parameter is set to some another session storage than `files` (for example, `redis`, `memcached`, and so on). This is a known issue we're working to resolve.

Solutions:

*  [Upgrade your Magento 2 code]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*  Use the following workaround with existing code.

### Locate `php.ini`

Locate `php.ini` by entering the following command:

```bash
php -i | grep "Loaded Configuration File"
```

Typical locations follow:

*  Ubuntu: `/etc/php5/cli/php.ini`
*  CentOS: `/etc/php.ini`

### Workaround

1. As a user with `root` privileges, open `php.ini` in a text editor.
1. Locate `session.save_handler`
1. Set it in any of the following ways:

   *  To comment it out:

      ```conf
      ;session.save_path = <path>
      ```

   *  To set it to a file system path:

      ```conf
      session.save_handler = files
      ```

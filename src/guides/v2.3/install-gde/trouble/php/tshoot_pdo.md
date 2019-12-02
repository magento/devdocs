---
group: installation-guide
title: During installation, fatal PDO error displays
functional_areas:
  - Install
  - System
  - Setup
---

### Details

```terminal
PHP Fatal error:  Class 'PDO' not found in /var/www/html/magento2/setup/module/Magento/Setup/src/Module/Setup/ConnectionFactory.php on line 44
```

### Solution

Make sure you installed [all required PHP extensions]({{ page.baseurl }}/install-gde/prereq/php-settings.html#verify-installed-extensions).

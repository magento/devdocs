---
group: installation-guide
subgroup: 02_access
title: Installation dependencies not met
menu_title: Installation dependencies not met
menu_node:
menu_order: 10
functional_areas:
  - Install
  - System
  - Setup
---

### Details

This topic applies to you *only* if you [cloned the Magento 2 GitHub repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html).

Errors similar to the following display when you run the Web Setup Wizard:

```terminal
Magento\Framework\Exception
 Command returned non-zero exit code:
`/usr/bin/php5 -f '/var/www/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/magento2' 2>&1`
```

[other errors]

{% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}Exception{% endglossarytooltip %}
 {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} Fatal error:  Class 'Magento\Framework\Stdlib\DateTime\TimezoneInterface' not found in /var/www/magento2/app/bootstrap.php on line 56</pre>

```
Dependencies not installed. Please run 'composer install' under /setup directory.
```

<pre>Whoops, it looks like setup tool dependencies are not installed.</pre>

<pre>`/usr/bin/php -f '/var/www/html/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/html/magento2' 2>&1`</pre>
<pre> Exception
 PHP Fatal error:  Class 'Magento\Framework\Stdlib\DateTime\TimezoneInterface' not found in /var/www/html/magento2/app/bootstrap.php on line 56</pre>

{:.bs-callout .bs-callout-info}
If the Web Setup Wizard stops, informs you that the installation is incomplete, but does not display an error in the console log, the likely cause is you did not run <code>composer install</code> from the `<magento_root>/setup` directory. The entire message is `Installation is incomplete. Check the console log for errors before trying again.`

### Description

You must run `composer install` from *both* the `<magento_root>` and `<magento_root>/setup` directories before installer.

### Suggestion

[Run composer install]({{ page.baseurl }}/install-gde/install/prepare-install.html) from both of the preceding directories and try the installation again.

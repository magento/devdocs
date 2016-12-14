---
layout: default
group: install_trouble
subgroup: 02_access
title: Installation dependencies not met
menu_title: Installation dependencies not met
menu_node: 
menu_order: 10
version: 2.0
github_link: install-gde/trouble/tshoot_install_depend.md
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_install_depend.html
---


### Details
This topic applies to you *only* if you [cloned the Magento 2 GitHub repository]({{ page.baseurl }}install-gde/prereq/dev_install.html).

Errors similar to the following display when you run the Web Setup Wizard:

<pre> Magento\Framework\Exception
 Command returned non-zero exit code:
`/usr/bin/php5 -f '/var/www/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/magento2' 2>&1`

[other errors]

Exception
 PHP Fatal error:  Class 'Magento\Framework\Stdlib\DateTime\TimezoneInterface' not found in /var/www/magento2/app/bootstrap.php on line 56</pre>
 
<pre>Dependencies not installed. Please run 'composer install' under /setup directory.</pre>

<pre>Whoops, it looks like setup tool dependencies are not installed.</pre>

<pre>`/usr/bin/php -f '/var/www/html/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/html/magento2' 2>&1`</pre>
<pre> Exception
 PHP Fatal error:  Class 'Magento\Framework\Stdlib\DateTime\TimezoneInterface' not found in /var/www/html/magento2/app/bootstrap.php on line 56</pre>
 
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If the Web Setup Wizard stops, informs you that the installation is incomplete, but does not display an error in the console log, the likely cause is you did not run <code>composer install</code> from the <code>&lt;your Magento install dir>/setup</code> directory.</p>
  <p>The entire message is <code>Installation is incomplete. Check the console log for errors before trying again.</code></p></span>
</div>
 
### Description

You must run `composer install` from *both* the `<your Magento install dir>` and `<your Magento install dir>/setup` directories before installer.

### Suggestion

<a href="{{page.baseurl}}install-gde/install/prepare-install.html">Run composer install</a> from both of the preceding directories and try the installation again.

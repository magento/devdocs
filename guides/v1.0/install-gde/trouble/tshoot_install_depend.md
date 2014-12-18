---
layout: default
group: install
subgroup: Z_Troubleshooting
title: Installation dependencies not met
menu_title: Installation dependencies not met
menu_node: 
menu_order: 2
github_link: install-gde/trouble/tshoot_install_depend.md
---


<h2 id="trouble-install-depend">Installation dependencies not met</h2>

### Details

Errors similar to the following display when you run the installer:

<pre> Magento\Framework\Exception
 Command returned non-zero exit code:
`/usr/bin/php5 -f '/var/www/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/magento2' 2>&1`

[other errors]

Exception
 PHP Fatal error:  Class 'Magento\Framework\Stdlib\DateTime\TimezoneInterface' not found in /var/www/magento2/app/bootstrap.php on line 56</pre>

<pre>Whoops, it looks like setup tool dependencies are not installed.</pre>

<pre>`/usr/bin/php -f '/var/www/html/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/html/magento2' 2>&1`</pre>
<pre> Exception
 PHP Fatal error:  Class 'Magento\Framework\Stdlib\DateTime\TimezoneInterface' not found in /var/www/html/magento2/app/bootstrap.php on line 56</pre>
 
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If the web installer stops, informs you that the installation is incomplete, but does not display an error in the console log, the likely cause is you did not run `composer install` from the `<your Magento install dir>/setup` directory. The web installer message is <code>Installation is incomplete. Check the console log for errors before trying again.</code></p></span>
</div>
 
### Description

You must run `composer install` from `<your Magento install dir>` directory before running the installer.

### Suggestion

<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Run composer install</a> from the Magento root directory and try the installation again.

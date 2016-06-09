---
layout: default
group: install_trouble
subgroup: PHP issues
title: The PHP mcrypt extension is not installed properly
menu_title: The PHP mcrypt extension is not installed properly
menu_node:
menu_order: 5
version: 2.0
github_link: install-gde/trouble/php/tshoot_mcrypt.md
redirect_from:
  -  /guides/v1.0/install-gde/trouble/tshoot_mcrypt.html
  -  /guides/v2.0/install-gde/trouble/tshoot_mcrypt.html
---

<h2 id="trouble-php-mycrypt">The PHP mcrypt extension is not installed properly</h2>

### Detail

Errors can include the following:

<pre>exception 'Exception' with message 'PHP Warning: PHP Startup: Unable to load dynamic library '/usr/lib/php5/20121212/mcrypt.so' - /usr/lib/php5/20121212/mcrypt.so: cannot open shared object file: No such file or directory</pre>
<pre>Installing data fixtures:
/usr/bin/php -f '/Users/username/www/magento/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/Users/username/www/magento' 2>&1
[ERROR] exception 'Exception' with message '
Fatal error: Uncaught exception 'Exception' with message 'Module 'Magento_Core' depends on 'mcrypt' PHP extension that is not loaded.'
</pre>
<pre>======================================================================
   The application has thrown an exception!
======================================================================
 Magento\Framework\Exception
 Command returned non-zero exit code:
`/usr/bin/php5 -f '/var/www/magento2/dev/shell/run_data_fixtures.php' -- --bootstrap='MAGE_DIRS[base][path]=/var/www/magento2' 2>&1`</pre>

### Description

Particularly on developer systems that include a Linux/Apache/MySQL/PHP (LAMP) "stack" that is separate from the operating system, it's possible that mcrypt is either not installed at all or it's installed in the LAMP stack's path but not the operating system's path.

As a result, the Magento installer cannot locate the extension and the installation fails.

### Suggestion

Determine if the mcrypt extension is loaded in any of the following ways:

*	Set up a <a href="http://kb.mediatemple.net/questions/764/How+can+I+create+a+phpinfo.php+page%3F#gs" target="_blank">phpinfo.php</a> file in the web server's root directory and examine the output in a web browser.
*	Run the following command:

	<pre>php -r "phpinfo();" | grep mcrypt</pre>

	If mycrypt is *not* installed, messages similar to the following display:

	<pre>PHP Warning:  PHP Startup: Unable to load dynamic library '/usr/lib/php5/20121212/mcrypt.so' - /usr/lib/php5/20121212/mcrypt.so: cannot open shared object file: No such file or directory in Unknown on line 0</pre>

In some cases, you might need to install the Magento software from the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">command line</a> and specify the full path to the LAMP stack that has mcrypt installed.


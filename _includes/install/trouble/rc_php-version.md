
## PHP version readiness check issues

You might encounter the following issues with the PHP version readiness check:

* The check fails because you're using an unsupported PHP version.

To solve this issue, use one of the supported versions listed in our [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

* The check reports the incorrect PHP version.

Typically, this happens only to advanced users who have multiple PHP versions installed. In some cases, the readiness check fails; in other cases, it might pass.

* The PHP readiness check doesn't display the PHP version as the following figure shows.

 ![]({{ site.baseurl }}/common/images/upgr-tshoot-no-cron.png)

This is a symptom of incorrect cron job setup. For more information, see [Set up cron jobs]({{ page.baseurl }}/install-gde/install/post-install-config.html#post-install-cron).

### PHP version is incorrect

If the PHP version reported by the readiness check is incorrect, it's the result of a mismatch of PHP versions between the PHP CLI and the web server plug-in. Magento requires you to use *one version* of PHP for both the CLI (which runs cron) and the web server (which runs the Magento Admin, Component Manager, and System Upgrade).

We assume that if you have this issue, you're an advanced user who has likely installed multiple versions of PHP on your system.

To resolve the issue, try the following:

*	Restart your web server or php-fm.
*	Check the `$PATH` environment variable for multiple paths to PHP
*	Use the `which php` command to locate the first PHP executable in your path; if it's not correct, remove it or create a symlink to the correct PHP version
*	Use a [`phpinfo.php`]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpinfo) page to collect more information
*	Make sure you're running a supported PHP version according to our System Requirements:

	*	[Version 2.2]({{ site.gdeurl22 }}install-gde/system-requirements.html)
	*	[Version 2.3]({{ site.gdeurl23 }}install-gde/system-requirements.html)

*	Set the same PHP settings for both the PHP command line and the PHP web server plug-in as discussed in [PHP configuration options]({{ page.baseurl }}/install-gde/prereq/php-centos.html)

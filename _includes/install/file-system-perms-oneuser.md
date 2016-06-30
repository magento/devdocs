To set permissions before you install the Magento software:

1.	Log in to your Magento server.
2.	Use a file manager application provided by your shared hosting provider to verify write permissions are set on the following directories:

	*	`vendor` (Composer or compressed archive installation)
	*	`app/etc`
	*	`pub/static`
	*	`var`
	*	Any other static resources

2.	If you have command-line access, enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc var -type f -exec chmod u+w {} \;
		find var vendor pub/static pub/media app/etc var -type d -exec chmod u+w {} \;
		chmod u+x bin/magento

	To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

		cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var vendor pub/static pub/media app/etc -type d -exec chmod g+w {} \; && chmod u+x bin/magento
3.	After you have set file system ownership and permissions, continue with any of the following:

	*	[Command-line installation]({{page.baseurl}}install-gde/install/cli/install-cli.html)
	*	[Setup Wizard installation]({{page.baseurl}}install-gde/install/web/install-web.html)

<div class="bs-callout bs-callout-info" id="info">
  <p>To further restrict permissions after installing the Magento software, you <a href="{{ page.baseurl }}install-gde/install/post-install-umask.html">configure a Magento umask</a>.</p>
</div>


*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase

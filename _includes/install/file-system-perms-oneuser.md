To set permissions before you install the Magento software:

1.	Log in to your Magento server.
2.	Set write permissions on the following directories using a file manager application provided by your shared hosting provider:

	*	`vendor` (Composer or compressed archive installation)
	*	`app/etc`
	*	`lib`
	*	`pub/static`
	*	Any other static resources

2.	If you have command-line access, enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+w {} \;
		chmod u+x bin/magento

	To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

		cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var vendor pub/static pub/media app/etc -type d -exec chmod g+w {} \; && chmod u+x bin/magento
3.	After you have set file system ownership and permissions, continue with any of the following:

	*	[Command-line installation]({{ site.gdeurl21 }}install-gde/install/cli/install-cli.html)
	*	[Setup Wizard installation]({{ site.gdeurl21 }}install-gde/install/web/install-web.html)

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase

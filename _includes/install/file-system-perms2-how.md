<div markdown="1">

Use the following steps:

1.	If you haven't already done so, log in to your Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to the Magento installation directory:

		cd <web server docroot>/<magento2 base dir>

	The base directory is typically a subdirectory named `magento2` under your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here</a>.<br>

	Examples:

	*	Ubuntu: `/var/www/magento2`
	*	CentOS: `/var/www/html/magento2`

2.	Set ownership:

		chown -R :<your web server group name> .

	Typical examples:

	*	CentOS: `chown -R :apache .`
	*	Ubuntu: `chown -R :www-data .`

3.	Set permissions:

		find . -type d -exec chmod 770 {} \; && find . -type f -exec chmod 660 {} \; && chmod u+x bin/magento

	If you must enter the commands as `sudo`, use:

		sudo find . -type d -exec chmod 770 {} \; && sudo find . -type f -exec chmod 660 {} \; && sudo chmod u+x bin/magento
To set permissions before you install the Magento software:

1.	Log in to your Magento server.
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var pub/static pub/media app/etc -type d -exec chmod g+w {} \;
		chmod u+x bin/magento

	To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

		cd /var/www/html/magento2 && find var pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var pub/static pub/media app/etc -type d -exec chmod g+w {} \; && chmod u+x bin/magento

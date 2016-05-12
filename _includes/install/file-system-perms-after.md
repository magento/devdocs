<div markdown="1">

This topic discusses how to set read-write permissions for the web server group before you install the Magento software. This is necessary so the Setup Wizard or command line can write files to the Magento file system.

The procedure you use is different, depending on whether you use shared hosting and have one user or if you use a private server and have two users.


### Set permissions 
To set permissions before you install the Magento software:

1.	Log in to your Magento server.
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var pub/static pub/media app/etc -type d -exec chmod g+w {} \;

	To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

		cd /var/www/html/magento2 && find . -type f -exec chmod g+w {} \; && find . -type d -exec chmod g+w {} \;

### Set ownership, permissions, and `setgid`
TBD - set ownership

#### Find the web server group
TBD

### 

To set ownership and permissions before you install the Magento software:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html).
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var pub/static pub/media app/etc -type d -exec chmod g+ws {} \;

	To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

		cd /var/www/html/magento2 && find . -type f -exec chmod g+w {} \; && find . -type d -exec chmod g+ws {} \;
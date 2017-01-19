---
layout: default
group: install-dock
subgroup: 01_over
title: Troubleshoot issues with Magento DevBox
menu_title: Troubleshoot issues with Magento DevBox
menu_node: 
menu_order: 5
version: 2.0
github_link: install-gde/docker/docker-trouble.md
---

This topic discusses suggested solutions to issues you might counter when installing or using Magento DevBox.

{% collapsibleh2 Problem: Cannot install Magento %}

The following error message might display:

	Project directory ./ is not empty

The preceding error means that the directory into which you're trying to install the Magento software isn't empty. To verify which directory is the cause of the error, open `docker-compose.yml`. The directory name is specified as follows:

	volumes:
	   - "Users/me/somepath:/home/magento2/magento2"

In this case, delete everything from `Users/me/somepath`

_Solution_: Make sure all files, including all hidden files, are removed from that directory and try again.

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: Error displays in the Magento Admin %}

After you log in to the Magento Admin, the following notification error might display:

	Your web server is set up incorrectly and allows unauthorized access to sensitive files. Please contact your hosting provider.

This error results from the fact that the Magento application is running in developer mode. The message doesn't indicate any issues. You can ignore it and develop as normal.

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: 404 error accessing the Magento Admin, storefront is accessible %}

When you access the Magento Admin, the following error displays in the browser:

	The requested URL /admin was not found on this server.

However, you can access the Magento storefront.

_Solution_: The most likely cause of this error is missing `.htaccess` files the Magento application uses for URL redirects and other things. To resolve this error, if you use the Mac OS, see [How to download Magento code]({{ page.baseurl }}install-gde/docker/docker-over.html#devbox-download)

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: Cannot access the Magento storefront or Admin %}

If you are having trouble accessing your Magento storefront and Magento Admin, connect to the web container and run some additional commands.

1.  Locate the running web container by running the command: `docker-compose ps`

    The web container has a name like `magento2devbox_web_1` 
2.  Connect to the web container using the following command:

        docker-compose exec --user=magento2 <service> /bin/bash
3.  Navigate to the Magento installation and call the compiler by running the following command:

        cd /var/www/magento2/ && php bin/magento setup:di:compile
4.  Optional: After the compiler finishes, run the following command to speed up page loads:

        php bin/magento setup:static-content:deploy
5. When you're finished, enter `exit`.

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: Errors display on Windows %}

During installation, errors similar to the following display in your primary command window:

	ERROR: for db  Cannot create container for service db: C: drive is not shared. Please share it in Docker for Windows Settings
	ERROR: Encountered errors while bringing up the project.

Other errors might display in a secondary command window:

	Error response from daemon: No such container: magento2devbox_web_7f927cb82fd5dfc7d21b4d02387a0d12
	Error response from daemon: No such container: magento2devbox_web_7f927cb82fd5dfc7d21b4d02387a0d12
	Error: No such container: magento2devbox_web_7f927cb82fd5dfc7d21b4d02387a0d12

*Solution*: [Set up file sharing]({{ page.baseurl }}install-gde/docker/docker-ref.html#devbox-docker-file-share).

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: You want to start over %}

In the event you want to start over with a new Magento application installation, use the following steps from the directory to which you copied the DevBox scripts:

1.	Kill the Magento Docker containers.

		docker-compose down --rmi all -v --remove-orphans
2.	Run one of the following commands:

	*	Mac OS

			./m2devbox-init.sh

	*	Windows

			m2devbox-init.bat

{% endcollapsibleh2 %}

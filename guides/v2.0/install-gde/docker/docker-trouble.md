---
group: install-dock
subgroup: 100_trouble
title: Troubleshoot issues with Magento DevBox
menu_title: Troubleshoot issues with Magento DevBox
menu_node: parent
menu_order: 1
version: 2.0
github_link: install-gde/docker/docker-trouble.md
functional_areas:
  - Install
  - System
  - Setup
---

{% include install/docker/deprecated-note.html %}

This topic discusses suggested solutions to issues you might counter when installing or using Magento DevBox.

{% collapsibleh2 Problem: Cannot install Magento %}

This section discusses errors that prevent you from installing DevBox.

### Directory not empty
The following error message might be displayed:

	Project directory ./ is not empty

The preceding error means that the directory into which you're trying to install the Magento software isn't empty. To verify which directory is the cause of the error, open `docker-compose.yml`. The directory name is specified as follows:

	volumes:
	   - "Users/me/somepath:/home/magento2/magento2"

In this case, delete everything from `Users/me/somepath`

_Solution_: Make sure all files, including all hidden files, are removed from that directory and try again.

### SQLSTATE[HY000] [2002] Connection refused
The following error message might be displayed:

	Executing shell command:
	cd /var/www/magento2 && php bin/magento setup:install --base-url=http://127.0.0.1:32774/ --db-host=db --db-name=magento2 --db-user=root --db-password=root --admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1 --backend-frontname=admin
	SQLSTATE[HY000] [2002] Connection refused

 	  [InvalidArgumentException]   
	  Parameter validation failed

_Solution_: Run the Terminal (Mac OS) as `root` or run DOS Command Prompt (Windows) as Administrator.

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

_Solution_: The most likely cause of this error is missing `.htaccess` files the Magento application uses for URL redirects and other things. To resolve this error, if you use the Mac OS, see [How to download Magento code]({{ page.baseurl }}/install-gde/docker/docker-over.html)

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

*Solution*: [Set up file sharing]({{ page.baseurl }}/install-gde/docker/docker-ref.html#devbox-docker-file-share).

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: Error during installation %}

During DevBox installation, the following error might display:

<pre class="no-copy">ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network</pre>

_Solution_: Try the following:

*	If you're connected to a VPN network, end your VPN session and try to install DevBox again.
*	Check the total number of active Docker networks:

		docker network ls

	If there are more than 32 networks, delete the networks you're not using and try again. (Docker has a limit of 32 active network connections.)

	The following command deletes _all_ Docker networks; use it with caution:

		docker network rm $(docker network ls -q)

For more information, see the [Docker GitHub issue](https://github.com/docker/libnetwork/issues/779){:target="_blank"}.

{% endcollapsibleh2 %}

{% collapsibleh2 Problem: You want to start over %}

In the event you want to start over with a new Magento application installation, use the following steps from the directory to which you copied the DevBox scripts:

1.	List all Magento Docker containers.

		docker-compose ps
2.	Kill the Magento Docker containers.

		docker rm -fv <service>
3.	Run one of the following commands:

	*	Mac OS

			./m2devbox-init.sh

	*	Windows

			m2devbox-init.bat

{% endcollapsibleh2 %}

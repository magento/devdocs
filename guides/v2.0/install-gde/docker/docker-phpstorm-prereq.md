---
layout: default
group: install-dock
subgroup: 05_PhpStorm
title: PhpStorm prerequisites
menu_title: PhpStorm prerequisites
menu_node:
menu_order: 5
version: 2.0
github_link: install-gde/docker/docker-phpstorm-prereq.md
functional_areas:
  - Install
  - System
  - Setup
---

{% include install/docker/deprecated-note.html %}

This topic discusses tasks you must perform before you can use PhpStorm with DevBox.

## Find a service port
DevBox randomly assigns ports to services every time a container starts. To use DevBox with PhpStorm, you must know some of these ports (especially the SSH and the web server listen ports).

### Determine a listen port {#devbox-PhpStorm-ssh-find}
To determine a listen port:

In a command window, find your container identifiers:

	docker-compose ps

The command displays the listen ports. An example follows:

{% include install/docker/docker_compose-ps.md %}

## Create an SSH tunnel on Windows {#devbox-ssh-windows}
To use Xdebug with {% glossarytooltip 57f1b0dc-1341-466d-a685-e0dbf5a3b713 %}Docker{% endglossarytooltip %} on Windows, you must set up an SSH tunnel because Windows doesn't have a native SSH client.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You don't need to use a third-party SSH client on Mac OS because it has a native client. Instead, run the `m2devbox-debug.sh` script before you need to create a tunnel to DevBox. One example of doing this is to run [Xdebug]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-debug.html).
</div>

The following procedure shows an example of creating an SSH tunnel using [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html){:target="_blank"}. You can use other applications (such as Cygwin); for more information, consult the documentation provided with those applications.

To set up an SSH tunnel on Windows using Putty:

1.	If you haven't already done so, download [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html){:target="_blank"}.
2.	Start Putty.
3.	In the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} pane, click **Session**.
4.	Enter the following information:

	*	**Host Name (or IP address)** field: Enter `127.0.0.1`
	*	**Port** field: Enter the [SSH listen port]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-prereq.html)

	![Set up Putty]({{ site.baseurl}}/common/images/install_docker_putty-session.png){:width="350px"}

5. In the Category pane, click **Connection** > **Data**
6. Enter the following information:

	* **Auto-login username** field: Enter `magento2`

	![Set up Putty]({{ site.baseurl}}/common/images/install_docker_putty_autologin.png){:width="350px"}

7.	In the Category pane, click **Connection** > **SSH** > **Tunnels**.
8.	Enter the following information:

	*	**Source port** field: Enter `9000`
	*	**Destination** field: Enter `127.0.0.1:9000`
	*	Click **Remote**
9.	Click **Add**.

	The following figure shows an example.

	![Create an SSH tunnel in Putty]({{ site.baseurl}}/common/images/install_docker_putty-tunnels.png){:width="400px"}{:width="350px"}
10.	In the Category pane, click **Session**.
11.	In the **Saved Sessions** field, enter a name for this SSH tunnel.
12.	Click **Save** as the following figure shows.

	![Save your SSH tunnel]({{ site.baseurl}}/common/images/install_docker_putty-session-save.png){:width="350px"}
13.	To test the SSH tunnel, click **Load**, then click **Open**.

If an "unable to connect" error displays, verify all of the preceding information and try again.

## Set the user's bash profile
This section discusses an optional step of changing to the `/var/www/magento2` directory in the DevBox's user's bash profile. This means every time you start an interactive session in a command shell, you're executing commands from that directory.

To set the user's bash profile:

1.	Open a DOS command prompt (Windows) or Terminal (Mac OS) window.
2.	Enter the following command:

		docker-compose exec --user=magento2 web /bin/bash

	This commands opens an SSH shell.
3.	In the shell prompt, enter the following command:

		vim ~/.bash_profile
4.	Press `i` (insert).
5.	Enter the following command in the vim window:

		cd /var/www/magento2
6.	Press `:wq` to save the file and exit vim.
7.	Enter `exit` to exit the SSH shell and return to your command prompt.

#### Next step
[Set up your PhpStorm project]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-project.html)

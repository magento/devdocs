---
layout: default
group: install-dock
subgroup: 05_phpstorm
title: PhpStorm prerequisites
menu_title: PhpStorm prerequisites
menu_node: 
menu_order: 5
version: 2.0
github_link: install-gde/docker/docker-phpstorm-prereq.md
---

This topic discusses tasks you must perform before you can use PhPStorm with DevBox.

## Find a service port
DevBox randomly assigns ports to services every time a container starts. To use DevBox with PhPStorm, you must know some of these ports (especially the SSH and the web server listen ports). 

### Determine a listen port {#devbox-phpstorm-ssh-find}
To determine a listen port:

In a command window, find your container identifiers:

	docker-compose ps

The command displays the listen ports. An example follows:

{% include install/docker/docker_compose-ps.md %}

## Create an SSH tunnel on Windows {#devbox-ssh-windows}
To use Xdebug with Docker on Windows, you must set up an SSH tunnel because Windows doesn't have a native SSH client.

The following procedure shows an example of creating an SSH tunnel using [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html){:target="_blank"}. You can use other applications (such as Cygwin); for more information, consult the documentation provided with those applications.

To set up an SSH tunnel on Windows using Putty:

1.	If you haven't already done so, download [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html){:target="_blank"}.
2.	Start Putty.
3.	In the Category pane, click **Session**.
4.	Enter the following information:

	*	**Host Name (or IP address)** field: Enter `127.0.0.1`
	*	**Port** field: Enter the [SSH listen port]({{ page.baseurl }}install-gde/docker/docker-phpstorm-prereq.html)

	![Set up Putty]({{ site.baseurl }}common/images/install_docker_putty-session.png){:width="350px"}
3.	In the Category pane, click **Connection** > **SSH** > **Tunnels**.
4.	Enter the following information:

	*	**Source port** field: Enter `9000`
	*	**Destination** field: Enter `127.0.0.1:9000`
	*	Click **Remote**
5.	Click **Add**.

	The following figure shows an example.

	![Create an SSH tunnel in Putty]({{ site.baseurl }}common/images/install_docker_putty-tunnels.png){:width="400px"}{:width="350px"}
6.	In the Category pane, click **Session**.
7.	In the **Saved Sessions** field, enter a name for this SSH tunnel.
8.	Click **Save** as the following figure shows.

	![Save your SSH tunnel]({{ site.baseurl }}common/images/install_docker_putty-session-save.png){:width="350px"}
9.	To test the SSH tunnel, click **Load**, then click **Open**.

If an "unable to connect" error displays, verify all of the preceding information and try again.

#### Next step
[Set up your PhPStorm project]({{ page.baseurl }}install-gde/docker/docker-phpstorm-project.html)
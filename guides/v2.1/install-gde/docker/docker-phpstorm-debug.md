---
group: install-dock
subgroup: 05_PhpStorm
title: Debug in PhpStorm and browser
menu_title: Debug in PhpStorm and browser
menu_node:
menu_order: 50
version: 2.1
github_link: install-gde/docker/docker-phpstorm-debug.md
functional_areas:
  - Install
  - System
  - Setup
---
 
{% include install/docker/deprecated-note.html %}

This topic discusses how to debug custom code using PhpStorm and the Chrome web browser using Xdebug.

{% include install/docker/docker-phpstorm.md %}

## Create an SSH tunnel {#devbox-xdebug-tunnel}
Before you run Xdebug, you must create an SSH tunnel to the DevBox container.

### SSH tunnel: Windows
To use an SSH tunnel on Windows:

1.	See [Create an SSH tunnel on Windows]({{ page.baseurl }}/install-gde/docker/docker-phpstorm-prereq.html#devbox-ssh-windows).
2.	Start Putty.
3.	From the **Saved Sessions** list, click the name of your DevBox SSH session and click **Load**.
4.	Click **Open**.
5.	At the `Login as` prompt, enter `magento2`

### SSH tunnel: Mac OS
To create an SSH tunnel on Mac OS, open a Terminal window and enter the following command:

	./<DevBox root folder>/m2devbox-debug.sh

## Debug code with Xdebug
This section discusses how to debug code using Xdebug using PhpStorm and a web browser. For demonstration purposes, this topic discusses how to test Magento modules. Typically, you'll test your own code; adjust the procedures as required.

### Debug with PhpStorm and Xdebug
This topic discusses one way to debug code using PhpStorm. For additional information, consult the PhpStorm documentation.

To debug code with PhpStorm and Xdebug:

1.	Create an [SSH tunnel](#devbox-xdebug-tunnel) to the DevBox container.
2.	Open your DevBox PhpStorm project.
3.	In the navigation window, expand the code to reveal a {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} file to test.
4.	Double-click the file to open it.
5.	In the right pane, in the gray area next to a line number, click to set a breakpoint (![Set a breakpoint]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-breakpoint.png){:width="25px"}).

	The following figure shows an example.

	![Set a breakpoint in code]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-breakpoint-set.png){:width="700px"}
6.	In the top navigation bar, click ![Debug]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-debug.png){:width="25px"} (**Debug**).

	If the navigation bar doesn't display, click **View** > **Navigation Bar**.

	You can also right-click the PHP file name in the left pane and, from the pop-up menu, click **Debug**. (If more than one debug option is displayed, click the PHP option ![Run a PHP Xdebug test]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-flyout.png).

	Results are displayed in the console pane as follows:

	![Run an Xdebug test]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-success.png)

#### Troubleshooting
This section discusses possible errors and how to solve them.

*	_Problem_: The following error is displayed:

		Connection with 'xdebug 2.5.0' was not established. Validate installation.

	_Solution_: Make sure you created an [SSH tunnel](#devbox-xdebug-tunnel) to the DevBox container and try again.
*	_Problem_: When you debug a PHP file, a web browser window opens.

	_Solution_:

	1.	In the PhpStorm toolbar, click **Edit Configurations** from the Run/Edit Configurations button as the following figure shows.

		![Edit the run configuration]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-edit-config.png){:width="250px"}

	2.	If there is a JavaScript configuration defined, click its name and delete it as the following figure shows.

		![Delete JS configuration]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-js-config.png){:width="150px"}
	
	3.	Click **OK** and try your test again.

## Use Xdebug in a browser
This section discusses how to use Xdebug in Chrome using the Xdebug Helper {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}. For information about Xdebug tools for other browsers, consult the browser documentation.

To use Xdebug Helper with Chrome:

1.	Create an [SSH tunnel](#devbox-xdebug-tunnel) to the DevBox container.
7.	Install the [Xdebug Helper extension](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en){:target="_blank"} from the Chrome store.
8.	Enable the extension in Chrome as shown in the following figure.

	![Enable the Xdebug extension in Chrome]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-chrome.png)
3.	Open your DevBox PhpStorm project.
4.	In the top navigation bar, click ![Start listening for connections]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-start-listening.png){:width="25px"}  (**Start listening**).

	If the navigation bar isn't displayed, click **View** > **Navigation Bar**.
3.	In the PhpStorm navigation pane, double-click the PHP file to test.
5.	In the right pane, in the gray area next to a line number, click to set a breakpoint (![Set a breakpoint]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-breakpoint.png){:width="25px"}).
8.	In Chrome, go to a {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} that invokes the breakpoint.

	If Chrome is already displaying the URL, click **Refresh** in the Chrome toolbar.

	If the Incoming Connection from Xdebug dialog box displays, select the same file in which you set the breakpoint and click **Accept**.
	



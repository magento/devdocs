---
layout: default
group: install-dock
subgroup: 05_PhpStorm
title: Set up your PhpStorm project
menu_title: Set up your PhpStorm project
menu_node:
menu_order: 5
version: 2.1
github_link: install-gde/docker/docker-phpstorm-project.md
functional_areas:
  - Install
  - System
  - Setup
---

{% include install/docker/deprecated-note.html %}

This topic discusses how to set up a PhpStorm project to work with Magento DevBox. 

{% include install/docker/docker-phpstorm.md %}

If you have already set up a PhpStorm project, you can skip this topic and continue with:

*	[Debug in PhpStorm and browser]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-debug.html)
*	[Run PHPUnit]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-test.html)

## Prerequisites
Before you continue, complete the tasks discussed in [PhpStorm prerequisites]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-prereq.html).

## Set up your PhpStorm project {#devbox-PhpStorm-project}
This section discusses how to set up a new PhpStorm project to work with Magento DevBox.

### Create the project from existing files
To set up a new PhpStorm project to work with Magento DevBox:

1.	Start PhpStorm.
2.	Click **File** > **New Project from Existing Files**.

	The Create New Project: Choose Your Scenario dialog box is displayed as follows.

	![Create a new PhpStorm project from existing files]({{ site.baseurl}}/common/images/install_docker_php-storm_new-project.png){:width="500px"}

3.	Click **Source files are in a local directory, no Web server is yet configured** and click **Next**.

	For a description of other options, consult the PhpStorm documentation.
4.	In the Create New Project: Choose Project Directory dialog box, browse to locate the `<DevBox root folder>/shared/webroot/pub` folder.

	Sample path on Windows: `C:\magento\build-18c4e4d3c5a541f37e9cffd35f1bf74e\build-18c4e4d3c5a541f37e9cffd35f1bf74e\shared\webroot\pub`

	Sample path on Mac OS: `/Users/me/build-18c4e4d3c5a541f37e9cffd35f1bf74e/shared/webroot/pub`

	The following figure shows an example.

	![Locate your project root directory]({{ site.baseurl}}/common/images/install_docker_php-storm_new-project-root.png){:width="500px"}
5.	Click **Project Root** and click **Finish**.
7.	Wait while PhpStorm indexes the project.

### Add a remote PHP CLI interpreter
This section discusses how to add a remote {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7 CLI interpreter.

1.	In your PhpStorm Settings window, do one of the following:

	*	Mac OS: Click **PhpStorm** > **Preferences**.
	*	Windows: Click **File** > **Settings**.
2.	In the left pane of the Preferences (Mac OS) or Settings (Windows) window, click **Languages & Frameworks** > **PHP**.
3.	From the **PHP Language Level** list, click **PHP 7**.
4.	Click ![Add an interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm-ellipsis.png){:width="20px"} next to the **CLI Interpreter** list.

	The CLI Interpreters window is displayed.

5.	Click ![New interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm-add-new.png) (**Add**).
6.	From the **Select Interpreter Path** list, click **Remote** as the following figure shows.

	![Add a remote PHP interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm_new-cli-interpreter.png)
7.	In the Configure Remote Interpreter dialog box, click **SSH Credentials** as the following figure shows.

	![Set up a remote interpreter using SSH credentials]({{ site.baseurl}}/common/images/install_docker_php-storm-ssh-php-intepreter.png){:width="400px"}

8.	Enter the following information:

	*	**Host**: Enter `127.0.0.1 `
	*	**Port**: Enter the web container's [SSH listen port]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-prereq.html).
	*	**Username**: Enter `magento2`
	*	**Password**: Leave blank
	*	**Save password**: Select the check box
	*	**PHP executable**: Enter `/usr/local/bin/php`
7.	In the Configure Remote PHP Interpreter dialog box, click **OK**.

	If the connection is successful, a confirmation dialog box similar to the following is displayed:

	![Confirmation dialog box]({{ site.baseurl}}/common/images/install_docker_php-storm-ssh-confirm.png)

	If an error displays, review the preceding information, make sure you know the correct SSH listen port, and try again.
8.	Follow the prompts on your screen to save your changes.

### Create the Xdebug remote host {#devbox-xdebug-remote}
Adding an Xdebug remote host makes debugging easier because it happens automatically every time you start the DevBox container.

To create the Xdebug remote host:

1.	In your CLI Interpreters dialog box, in the General section, click **Refresh** as the following figure shows.

	![Refresh the Xdebug version]({{ site.baseurl}}/common/images/install_docker_php-storm_interpreter-refresh-xdebug.png){:width="350px"}
2.	In the Additional section, click ![Add configuration options]({{ site.baseurl}}/common/images/install_docker_php-storm-ellipsis.png){:width="20px"} next to the **Configuration options** field as the following figure shows.

	![Add the Xdebug interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm_xdebug-option.png){:width="400px"}
7.	In the Configuration Options dialog box, click ![New interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm-add-new.png) (**Add**).
8.	Enter the following information:

	*	**Configuration Directive** field: Enter `xdebug.remote_host`
	*	**Value** field: Enter `127.0.0.1`
8.	In the Configuration Options dialog box, click **OK**.

	Make sure the option _and value_ display as follows.

	![xdebug option]({{ site.baseurl}}/common/images/install_docker_php-storm_interpreter-xdebug-options.png){:width="500px"}
9.	If the name and value are displayed, click **OK**.

If both name and value do not display, click **Refresh** in the General section and try again.

### Add path mappings
Because Magento uses symlinks, you must create path mappings so PhpStorm can properly locate files.

To add path mappings:

1.	In your PhpStorm Settings window, click **Languages & Frameworks** > **PHP**.
4.	In the right pane, from the **CLI Interpreter** list, click the name of the DevBox remote CLI interpreter.
5.	In the right pane, next to the **Path Mappings** field, click ![Add path mappings]({{ site.baseurl}}/common/images/install_docker_php-storm-ellipsis.png){:width="20px"}.

	The following figure shows an example.

	![Add CLI interpreter path mappings]({{ site.baseurl}}/common/images/install_docker_php-storm_cli-path-mappings.png){:width="350px"}

	The Edit Project Path Mappings dialog box is displayed.
6.	In the Edit Project Path Mappings dialog box, click ![Add path mappings]({{ site.baseurl}}/common/images/install_docker_php-storm-add-new.png){:width="25px"} (**Add**).
6.	In the **Local Path** row, click ![Browse]({{ site.baseurl}}/common/images/install_docker_php-storm-ellipsis.png){:width="20px"} (**Browse**) to locate your DevBox project root directory and click **Open**.
7.	In the **Remote Path** field, enter `/var/www/magento2`

	The following figure shows an example.

	![Creating a path mapping]({{ site.baseurl}}/common/images/install_docker_php-storm_project-path.png){:width="350px"}
6.	In the Edit Project Path Mappings dialog box, click **OK**.

## Set up PHPUnit {#devbox-phpunit-setup}
To set up PHPUnit:

1.	In your PhpStorm Settings window, expand **Languages & Frameworks** > **PHP** > **PHPUnit**.
2.	In the right pane, click **Use {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} autoloader** as the following figure shows.

	![Set up PHPUnit]({{ site.baseurl}}/common/images/install_docker_php-storm-phpunit.png){:width="650px"}

3.	In the **Path to script** field, click ![Edit the interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm-ellipsis.png){:width="20px"} (**Browse**).
4.	Browse to locate `<PhpStorm project root>/vendor/autoload.php`

	Sample path on Mac: `/Users/me/Downloads/build-18c4e4d3c5a541f37e9cffd35f1bf74e/shared/webroot/vendor`

	Sample path on Windows: `C:\magento\build-18c4e4d3c5a541f37e9cffd35f1bf74e\build-18c4e4d3c5a541f37e9cffd35f1bf74e\shared\webroot\vendor`
4.	Click **Open**.
6.	In the Preferences window, click **OK**.

### Set up PHPUnit to use the remote CLI interpreter

1.	In your PhpStorm Settings window, expand **Languages & Frameworks** > **PHP** > **PHPUnit**.
9.	In the center pane, click ![Add an interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm-add-new.png){:width="25px"} (**Add**).
10.	From the list, click **By remote interpreter** as the following figure shows.

	![Add a remote interpreter]({{ site.baseurl}}/common/images/install_docker_php-storm_interpreter-for-phpunit.png)
11.	From the **Interpreter** list, click the name of the DevBox remote CLI interpreter.
12.	Click **OK** as the following figure shows.

	![Save your changes]({{ site.baseurl}}/common/images/install_docker_php-storm_interpreter-for-phpunit-save.png)
8.	In the Settings window, click **OK**.

### Set up a PHP server
To set up a PHP server for debugging:

1.	In your PhpStorm Settings window, click **Languages & Frameworks** > **PHP** > **Servers**.
2.	In the center pane, click ![New PHP server]({{ site.baseurl}}/common/images/install_docker_php-storm-add-new.png) (**Add**).

	The following figure shows an example.

	![Set up a new PHP server]({{ site.baseurl}}/common/images/install_docker_php-storm_debug-pathmap.png){:width="650px"}

3.	Enter the following information:

	*	**Name**: Enter a name to identify your server
	*	**Host**: `127.0.0.1`
	*	**Port**: Enter the [SSH listen port]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-prereq.html)
	*	Select the **Use path mappings** check box.
	*	**Debugger**: Click **Xdebug**
5.	Specify path mappings:

	*	In the File/Directory column, make sure your project root is selected.
	*	In the Absolute path on the server column, click ![Edit]({{ site.baseurl}}/common/images/install_docker_php-storm-edit.png){:width="15px"} (**Edit**) and enter `/var/www/magento2`
6.	Click **OK**.

#### Next steps

*	[Run PHPUnit]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-test.html)
*	[Debug in PhpStorm and browser]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-debug.html)



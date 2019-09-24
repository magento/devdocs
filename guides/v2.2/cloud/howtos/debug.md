---
group: cloud-guide
subgroup: How To
title: Configure Xdebug
menu_title: Configure Xdebug
menu_order: 100
menu_node:
functional_areas:
  - Cloud
  - Setup
---

We recommend using Xdebug for your PHP debugging. The following sections detail how to configure Xdebug and PhpStorm to work locally with settings in your environments. You can use any IDE of your choice. See the vendor documentation for those applications for further configuration information.

To set up Xdebug, you need to [configure](#configure) a file in your Git repo, configure your IDE PhpStorm, and set up port forwarding. You will configure settings in the `magento.app.yaml` file. After editing, you can push the Git changes across all Starter environments and Pro Integration environments to enable Xdebug. To push these settings to Pro plan Staging and Production environments, you must enter a ticket.

Once configured, you can debug [CLI commands](#debugcli), [web requests](#webrequests), [code](#code). Remember, all {{site.data.var.ece}} environments are read-only. You will need to pull code to your local development environment to perform debugging. For Pro plan Staging and Production, we include [additional instructions](#pro-debug) for Xdebug on those environments.

## Requirements {#usexdebug}

To run and use Xdebug, you will need the environment's SSH URL. You can locate the information through the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html) or your spreadsheet.

## Configure Xdebug {#configure}

To configure Xdebug, you need to do the following:

* [Work in a branch](#branch) to push file updates
* [Enable Xdebug for environments](#enable)
* Configure your IDE, like [PhpStorm](#phpstorm)
* [Set up port forwarding](#port)

For configuring on Pro plan Staging and Production, you need to enter a [ticket for Staging and Production](#pro).

### Get started with a branch {#branch}

To add Xdebug, we recommend creating a branch to work in and add the files.

{% include cloud/cli-get-started.md %}

### Enable Xdebug in your environment {#enable}

Enable Xdebug by adding it to the extensions section of magento.app.yaml. When you push this update to Git and deploy to environments, the debugger is available.

You can enable Xdebug directly to all Starter environments and Pro Integration environments. For Pro Staging and Production, you need to update this file and enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to have it enabled. We will get Xdebug enabled onto those environments for you.

<!-- You may need to run PHP with a separate config file to enable xdebug on the CLI, such as "php -c /etc/platform/<project_id>/php.ini ... " -->

1. In your local terminal, open `.magento.app.yaml` in a text editor.
2. In the `runtime` section, under `extensions`, add `xdebug`. For example:

		runtime:
		   extensions:
          - mcrypt
          - redis
          - xsl
          - json
          - xdebug
3. Optionally, modify the timeout. A default timeout of 300 seconds (5 minutes) is set in `php-fpm` and will end your session. To avoid the timeout, add the following lines to the `web:` section of `.magento.app.yaml`:

        web:
            commands:
                start: |
                    cat /etc/php/7.0/fpm/php-fpm.conf | sed -e 's/request_terminate_timeout.*//g' > /tmp/php-fpm.conf
                    /usr/sbin/php-fpm7.0 -y /tmp/php-fpm.conf

    {: .bs-callout-info}
    The actual path to the `php-fpm` configuration file can be different than the one in the example. For the correct path, open an SSH connection to the Cloud environment,  and check the value of the `/etc/alternatives/php` symlink.
4. Save your changes to `.magento.app.yaml` and exit the text editor.
5. Add, commit, and push the changes to redeploy the environment:

		git add -A
		git commit -m "Add xdebug"
		git push origin <environment ID>

When deployed to Starter environments and Pro Integration environments, Xdebug is now available. You should continue configuring your IDE. For PhpStorm, see [Configure PhpStorm](#phpstorm).

### Configure PhpStorm {#phpstorm}

You need to configure [PhpStorm](https://www.jetbrains.com/phpstorm/) to properly work with Xdebug.

1. Open your PhpStorm project.
2. Open the settings for PhpStorm.

    * On Mac, select **File** > **Preferences**.
    * On Windows/Linux, select **File** > **Settings**.
3. Expand and locate **Languages & Frameworks** > **PHP** > **Servers** section in settings.
4. Add a server configuration. Click the + to add a server. Notice at the top, it will show the project name in grey, just for reference. This will create a "server" configuration. This will be used to listen to port 9000 locally, which will be [forwarded](#port).
5. Configure settings for the new server:

    * **Name**: enter the same as the hostname. This value is used in and must match the value for `PHP_IDE_CONFIG` variable in [Debug CLI commands](#debugcli).
    * **Host**: enter `localhost`
    * **Port**: enter 80
    * **Debugger**: set to Xdebug in the drop-down
6. Select the **Use path mappings** option. In the files/directories, the root of the project displays that you opened for the added server.
7. In the **Absolute path on the server** column, click ![Edit]({{ site.baseurl }}/common/images/install_docker_php-storm-edit.png){:width="15px"} (**Edit**) and add a setting based on the environment:

    * For all Starter environments and Pro Integration environments, the remote path is `/app`.
    * For Pro Staging and Production environments:

        * Production: `/app/<project_code>/`
        * Staging:  `/app/<project_code>_stg/`

### Set up port forwarding {#port}

You need to set up port forwarding. This is necessary to map the XDEBUG connection from the server to your local system to PHPSTORM and xdebug locally can track along with it

To do any type of debugging, you must forward port 9000 from your {{site.data.var.ece}} server to your local machine. See one of the following sections:

*	[Port forwarding on Mac or UNIX](#portmac)
*	[Port forwarding on Windows](#portwindows)

#### Port forwarding on Mac or UNIX {#portmac}

To set up port forwarding on a Mac or in a Unix environment, you will enter a command in a terminal.

1. Open a terminal.
2. Enter the following command:

        ssh -R 9000:localhost:9000 <ssh url>

    Add the `-v` option to the SSH command to show in the terminal whenever a socket is connected to the port that is being forwarded.

If an "unable to connect" or "could not listen to port on remote" error is displayed, there could be another active SSH session persisting on the server that is occupying port 9000. If that connection isn't being used, you can terminate it.

To troubleshoot the connection:

1.	[SSH]({{ page.baseurl }}/cloud/env/environments-ssh.html) to the integration, staging, or production server.
2.	Enter `who` to view a list of SSH sessions.
3.	View existing SSH sessions by user. Be careful to not affect a user other than yourself!

    *	Integration: usernames are similar to `dd2q5ct7mhgus`
    *	Staging: usernames are similar to `dd2q5ct7mhgus_stg`
    *	Production: usernames are similar to `dd2q5ct7mhgus`
4.	For a user session that is older than yours, find the pseudo-terminal (PTS) value. For example, `pts/0`.
5.	Kill the process ID (PID) corresponding to the PTS value using the following commands:

        ps aux | grep ssh
        kill <PID>

      For example, suppose `ps aux | grep ssh` returned the following:

        dd2q5ct7mhgus        5504  0.0  0.0  82612  3664 ?      S    18:45   0:00 sshd: dd2q5ct7mhgus@pts/0

      To terminate the connection, you enter a kill command with the process ID (PID). For example:

        kill 3664

#### Port forwarding on Windows {#portwindows}

To set up port forwarding (SSH tunneling) on Windows, you must configure your Windows terminal application. For this example, we walk through creating an SSH tunnel using [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). You can use other applications such as Cygwin. For more information on other applications, see the vendor documentation provided with those applications.

To set up an SSH tunnel on Windows using Putty:

1.	If you have not already done so, download [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).
2.	Start Putty.
3.	In the Category pane, click **Session**.
4.	Enter the following information:

    *	**Hostname (or IP address)** field: Enter your Cloud server's [SSH URL]({{ page.baseurl }}/cloud/env/environments-ssh.html)
    *	**Port** field: Enter `22`

    ![Set up Putty]({{ site.baseurl }}/common/images/cloud-xdebug_putty-session.png){:width="350px"}
3.	In the Category pane, click **Connection** > **SSH** > **Tunnels**.
4.	Enter the following information:

    *	**Source port** field: Enter `9000`
    *	**Destination** field: Enter `127.0.0.1:9000`
    *	Click **Remote**
5.	Click **Add**.

    ![Create an SSH tunnel in Putty]({{ site.baseurl }}/common/images/cloud-xdebug_putty-tunnels.png){:width="350px"}
6.	In the Category pane, click **Session**.
7.	In the **Saved Sessions** field, enter a name for this SSH tunnel.
8.	Click **Save**.

    ![Save your SSH tunnel]({{ site.baseurl }}/common/images/cloud-xdebug_putty-session-save.png){:width="350px"}
9.	To test the SSH tunnel, click **Load**, then click **Open**.

If an "unable to connect" error displays, verify all of the following:

*	All Putty settings are correct
*	You are running Putty on the machine on which your private {{site.data.var.ece}} SSH keys are located

### Configure Pro Staging and Production {#pro}

To complete configuration for Pro plan Staging and Production environments, you must enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to have Xdebug enabled and configured in Staging and Production environments.

We will enable Xdebug in the environment. Be aware, this will require a redeployment of Staging and Production.

## SSH access to Xdebug environments {#ssh}

For initiating debugging, performing setup, and more, you need the SSH commands for accessing the environments. You can get this information, through the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html) and your project spreadsheet.

For Starter environments and Pro Integration environments, you can use the following Magento Cloud CLI command to SSH into those environments:

	magento-cloud environment:ssh --pipe -e <environment ID>

To use Xdebug, SSH to the environment as follows:

	ssh -R <xdebug listen port>:<host>:<xdebug listen port> <SSH URL>

For example,

	ssh -R 9000:localhost:9000 pwga8A0bhuk7o-mybranch@ssh.us.magentosite.cloud

## Debug for Pro Staging and Production {#pro-debug}

To use Xdebug specifically on Pro plan Staging and Production environment, you create a separate SSH tunnel and web session only you have access to. This usage differs from typical access, only providing access to you and not to all users.

You need the following:

* SSH commands for accessing the environments. You can get this information, through the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html) and your project spreadsheet.
* The `xdebug_key` value we set when configuring the Staging and Pro environments

Set up an SSH tunnel to Staging or Production environment:

1. Open a terminal.
2. Enter the following command to clean up all SSH sessions.

        ssh USERNAME@CLUSTER.ent.magento.cloud 'rm /run/platform/USERNAME/xdebug.sock'
3. Enter the following command to set up the SSH tunnel for Xdebug:

        ssh -R /run/platform/USERNAME/xdebug.sock:localhost:9000 -N USERNAME@CLUSTER.ent.magento.cloud

To start debugging, use the following commands with the environment URL:

1. To enable remote debugging, visit the site in the browser with the following added to the URL where `KEY` is value for `xdebug_key`:

        ?XDEBUG_SESSION_START=KEY

    This sets the cookie that sends browser requests to trigger Xdebug.
2. Complete your debugging with Xdebug.
3. When you are ready to end the session, you can use the following command to remove the cookie and end debugging through the browser where `KEY` is value for `xdebug_key`:

        ?XDEBUG_SESSION_STOP=KEY

{: .bs-callout-info }
The `XDEBUG_SESSION_START` passed by `POST` requests are not supported at this time.

## Debug CLI commands {#debugcli}

This section walks through debugging CLI commands. To debug, you will need the SSH commands for your environments.

1. SSH into the server you want to debug using CLI commands.
2. Create the following environment variables:

        export XDEBUG_CONFIG='PHPSTORM'
        export PHP_IDE_CONFIG="serverName=<name of the server that is configured in PHPSTORM>"

These variables will be removed when SSH session is over. When adding the variables, you can add runtime options:

    php -d xdebug.profiler_enable=On -d xdebug.max_nesting_level=9999 ...

If you expect to SSH and debug multiple times, you can put the export commands into a bash script in the `/tmp` directory to run them each time.

## For debugging web requests {#webrequests}

The following steps help you debug web requests.

1. On the Extension menu, click **Debug** to enable.
2. Right click and on the options menu set the IDE key to **PHPSTORM**.
3. Install the Xdebug client on the browser. Configure and enable it.

### Example set up on Chrome {#chrome}

This section discusses how to use Xdebug in Chrome using the Xdebug Helper extension. For information about Xdebug tools for other browsers, consult the browser documentation.

To use Xdebug Helper with Chrome:

1.	Create an [SSH tunnel](#ssh) to the Cloud server.
2.	Install the [Xdebug Helper extension](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en) from the Chrome store.
3.	Enable the extension in Chrome as shown in the following figure.

	![Enable the Xdebug extension in Chrome]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-chrome.png)
4.	In Chrome, right-click ![Xdebug helper icon]({{ site.baseurl }}/common/images/cloud-xdebug_helper-icon.png){:width="25px"} in the Chrome toolbar.
5.	From the pop-up menu, click **Options**.
6.	From the **IDE Key** list, click **PhpStorm**.
7.	Click **Save**.

	![Xdebug Helper options]({{ site.baseurl }}/common/images/cloud-xdebug_helper-options.png){:width="400px"}
8.	Open your PhpStorm project.
9.	In the top navigation bar, click ![Start listening for connections]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-start-listening.png){:width="25px"}  (**Start listening**).

	If the navigation bar isn't displayed, click **View** > **Navigation Bar**.
10.	In the PhpStorm navigation pane, double-click the PHP file to test.

## Debug code locally {#code}

Due to your environments being read-only, you need to pull code locally from an environment or specific Git branch/repository to perform debugging.

The method you choose is up to you. You have the following options:

*	Check out code from Git and run `composer install`

	This method works unless `composer.json` references packages in private repositories to which you do not have access. This method results in getting the entire Magento codebase.

*	Copy the `vendor`, `app`, `pub`, `lib`, and `setup` directories

	This method results in your having all code you can possibly test. Depending on how many static assets you have, it could result in a long transfer with a large volume of files.
*	Copy the `vendor` directory only

	Because most Magento and third-party code is in the `vendor` directory, this method is likely to result in good testing although you won't be testing the entire codebase.

To compress files and copy them to your local machine:

1.	SSH to the environment.
3.	Enter the following command:

		tar -czf /tmp/<file name>.tgz <directory list>

	For example, to compress the `vendor` directory only, enter

		tar -czf /tmp/vendor.tgz vendor
4.	On your local environment with PhpStorm, enter the following commands:

		cd <phpstorm project root dir>
		rsync <SSH URL>:/tmp/<file name>.tgz .
		tar xzf <file name>.tgz

## Troubleshooting Xdebug {#trouble}

If you you suspend your laptop (like closing your lid on a Mac), then your SSH session may no longer work when your computer resumes. But the TCP session for the SSH connection on the server might not timeout on the server, leaving any open debug sessions active and preventing you from using the nginx server.

Due to not having access to manually restart the nginx server, you need to locate and terminate SSH processes that haven't timed out yet.

1.	[SSH]({{ page.baseurl }}/cloud/env/environments-ssh.html) to the integration, staging, or production server.
2.	Enter `who` to view a list of SSH sessions.
3.	View existing SSH sessions by user. Be careful to not affect a user other than yourself!

    *	Integration: usernames are similar to `dd2q5ct7mhgus`
    *	Staging: usernames are similar to `dd2q5ct7mhgus_stg`
    *	Production: usernames are similar to `dd2q5ct7mhgus`
4.	For a user session that is older than yours, find the pseudo-terminal (PTS) value. For example, `pts/0`.
5.	Kill the process ID (PID) corresponding to the PTS value using the following commands:

        ps aux | grep ssh
        kill <PID>

      For example, suppose `ps aux | grep ssh` returned the following:

        dd2q5ct7mhgus        5504  0.0  0.0  82612  3664 ?      S    18:45   0:00 sshd: dd2q5ct7mhgus@pts/0

      To terminate the connection, you enter a kill command with the process ID (PID). For example:

        kill 3664

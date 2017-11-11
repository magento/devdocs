---
layout: default
group: cloud
subgroup: How To
title: Configure Xdebug
menu_title: Configure Xdebug
menu_order: 100
menu_node:
version: 2.0
github_link: cloud/howtos/debug.md
functional_areas:
  - Cloud
  - Setup
---

We recommend using Xdebug for your PHP debugging. The following sections detail how to configure Xdebug and PhpStorm to work locally with settings in your environments. Some of these settings need to be configured in the `magento.app.yaml` file that you can push across all Starter environments and Pro Integration environments. To push these settings to Pro plan Staging and Production environments, you must enter a ticket.

## Get started with a branch {#branch}
To add Xdebug, we recommend creating a branch to work in and add the files.

{% include cloud/cli-get-started.md %}

## Enable Xdebug in your environment {#enable}


You may need to run PHP with a separate config file to enable xdebug on the CLI, such as "php -c /etc/platform/<project_id>/php.ini ... "

1.	Open `.magento.app.yaml` in a text editor.
2.	In the `runtime` section, under `extensions`, add `xdebug`. For example:

		runtime:
		   extensions:
		      - mcrypt
  			  - redis
  			  - xsl
  			  - json
		      - xdebug
3. Optionally, modify the timeout. A default timeout of 300 seconds (5 minutes) set in `php-fpm`. After this time, your Xdebug session will end.  To avoid the timeout, add the following lines to the `web:` section of `.magento.app.yaml`:

    # If the web or commands section already exists, place start within them like this.
    web:
        commands:
            start: |
                cat /etc/php/7.0/fpm/php-fpm.conf | sed -e 's/request_terminate_timeout.*//g' > /tmp/php-fpm.conf
                /usr/sbin/php-fpm7.0 -y /tmp/php-fpm.conf
4.	Save your changes to `.magento.app.yaml` and exit the text editor.
5.	Add, commit, and push the changes to redeploy the environment:

		git add -A
		git commit -m "Add xdebug"
		git push origin <environment ID>

### Enter a ticket for Pro Staging and Production {#pro}
For Pro plans, you must enter a [Support ticket]({{page.baseurl}}cloud/bk-cloud.html#gethelp) to have Xdebug enabled and configured in Staging and Production environments.

## Configure PhpStorm {#configure}
You need to configure [PhpStorm](https://www.jetbrains.com/phpstorm/) to properly work with Xdebug.

1. Open your PhpStorm project.
2. Open the settings for PhpStorm. On Mac, select File > Preferences. On Windows/Linux, select File > Settings.
3. Expand and locate **Languages & Frameworks** > **PHP** > **Servers** section in settings.
3. Click the + to add a server. Notice at the top, it will show the project name in grey, just for reference.This will create a "server" configuration. This will be used to listen to port 9000 locally, which will be forwarded (see Step 5 for port forwarding for those steps when done info)
4. Configure settings for the new server:

  * **Name**: enter the same as the hostname. This value must match what is in PHP_IDE_CONFIG variable in Step 3 B)
  * **Host**: enter `localhost`
  * **Port**: enter 80
  * **Debugger**: set to Xdebug in the drop-down
5. Select the **Use path mappings** option. In the files/directories, the root of the project displays that you opened for the added server.
6. In the Absolute path on the server column, click ![Edit]({{ site.baseurl }}common/images/install_docker_php-storm-edit.png){:width="15px"} (**Edit**) and add a setting based on the environment:

    * For all Starter environments and Pro Integration environments, the remote path is `/app`.
    * For Pro Staging and Production environments:

        * Production: `/app/<project_code>/`
        * Staging:  `/app/<project_code>_stg/`
4. Create new web application Xdebug configuration. (Dev left this:  note: unsure about this one, investigating)

## Debug CLI commands
SSH into the server you want to debug using CLI commands.
If you expect to SSH and debug multiple times, you can put the export commands into a bash script in the `/tmp` directory to run them each time.

Enter the following environment variables:

    export XDEBUG_CONFIG='PHPSTORM'
    export PHP_IDE_CONFIG="serverName=<name of the server that is configured in PHPSTORM>"

These variables will be removed when SSH session is over. When running the command (which command?), you can add runtime options:

    php -d xdebug.profiler_enable=On -d xdebug.max_nesting_level=9999 ...

You can skip the step 1 of "Enable xdebug on the server" if you add the zend_extension argument and put the correct settings in `XDEBUG_CONFIG`:

    export XDEBUG_CONFIG="idekey=PHPSTORM remote_host=127.0.0.1 remote_port=9000 remote_autostart=1 auto_trace=1 remote_enable=1"
    php -d zend_extension=/usr/lib/php/20151012/xdebug.so /tmp/phpinfo.php

## For debugging web requests
The following steps help you debug web requests.

1. On the Extension menu, click **Debug** to enable.
2. Right click (on what?), and on the options menu set the IDE key to **PHPSTORM**.
3. Install the Xdebug client on the browser. Configure and enable it.

### Example set up on Chrome {#chrome}
This section discusses how to use Xdebug in Chrome using the Xdebug Helper extension. For information about Xdebug tools for other browsers, consult the browser documentation.

To use Xdebug Helper with Chrome:

1.	Create an [SSH tunnel](#devbox-xdebug-tunnel) to the Cloud server.
2.	Install the [Xdebug Helper extension](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en){:target="_blank"} from the Chrome store.
3.	Enable the extension in Chrome as shown in the following figure.

	![Enable the Xdebug extension in Chrome]({{ site.baseurl }}common/images/install_docker_php-storm_xdebug-chrome.png)
4.	In Chrome, right-click ![Xdebug helper icon]({{ site.baseurl }}common/images/cloud-xdebug_helper-icon.png){:width="25px"} in the Chrome toolbar.
5.	From the pop-up menu, click **Options**.
6.	From the **IDE Key** list, click **PhpStorm**.
7.	Click **Save**.

	The following figure shows an example.

	![Xdebug Helper options]({{ site.baseurl }}common/images/cloud-xdebug_helper-options.png){:width="400px"}
8.	Open your PhpStorm project.
9.	In the top navigation bar, click ![Start listening for connections]({{ site.baseurl }}common/images/install_docker_php-storm_xdebug-start-listening.png){:width="25px"}  (**Start listening**).

	If the navigation bar isn't displayed, click **View** > **Navigation Bar**.
10.	In the PhpStorm navigation pane, double-click the PHP file to test.

## Set up port forwarding {#port}
You need to set up port forwarding. This is necessary to map the XDEBUG connection from the server to your local system to PHPSTORM and xdebug locally can track along with it

1. This command forwards port 9000 from your PHPStorm to the remote server so that php-fpm or php-cli can connect to it:

      ssh -R 9000:localhost:9000 <ssh url>

2. Add the -v option to the ssh command to show in the terminal whenever a socket is connected to the port that is being forwarded.

If you get some error like "could not listen to port on remote" then possibly there is another SSH session which may have been terminated by the client, but may still be persisting on the server, which is occupying port 9000.

1. Run 'who' to see list of ssh sessions
2. Locate sessions from your user (there can be two users on the box, the prod user and the staging user. For instance, prod user looks like dd2q5ct7mhgus and staging user looks like dd2q5ct7mhgus_stg). Make sure to only mess with sessions from the user for the environment you are trying to debug, and don't mess with "prod" user if you are debugging staging. (Probably Unix user management would not allow you to mess anything up anyway but it's worth being careful).
3. Find the sessions with a start time that looks too old to be your current session, and find what PTS they belong to (e.g. pts/0)
4. Find the PID of that SSH session, by looking for the process with that PTS, and kill it. "ps aux | grep ssh ", and then "kill <PID>"




To do any type of debugging, you must forward port 9000 from your Magento Enterprise Cloud Edition server to your local machine. See one of the ollowing sections:

*	[Port forwarding on Windows](#portwindows)
*	[Port forwarding on Mac or UNIX](#portmac)

### Port forwarding on Windows {#portwindows}
The following procedure shows an example of creating an SSH tunnel using [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html){:target="_blank"}. You can use other applications (such as Cygwin); for more information, consult the documentation provided with those applications.

To set up an SSH tunnel on Windows using Putty:

1.	If you haven't already done so, download [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html){:target="_blank"}.
2.	Start Putty.
3.	In the Category pane, click **Session**.
4.	Enter the following information:

	*	**Host Name (or IP address)** field: Enter your Cloud server's [SSH URL]({{ page.baseurl }}cloud/env/environments-ssh.html)
	*	**Port** field: Enter `22`

	![Set up Putty]({{ site.baseurl }}common/images/cloud-xdebug_putty-session.png){:width="350px"}
3.	In the Category pane, click **Connection** > **SSH** > **Tunnels**.
4.	Enter the following information:

	*	**Source port** field: Enter `9000`
	*	**Destination** field: Enter `127.0.0.1:9000`
	*	Click **Remote**
5.	Click **Add**.

	The following figure shows an example.

	![Create an SSH tunnel in Putty]({{ site.baseurl }}common/images/cloud-xdebug_putty-tunnels.png){:width="350px"}
6.	In the Category pane, click **Session**.
7.	In the **Saved Sessions** field, enter a name for this SSH tunnel.
8.	Click **Save** as the following figure shows.

	![Save your SSH tunnel]({{ site.baseurl }}common/images/cloud-xdebug_putty-session-save.png){:width="350px"}
9.	To test the SSH tunnel, click **Load**, then click **Open**.

If an "unable to connect" error displays, verify all of the following:

*	All Putty settings are correct
*	You're running Putty on the machine on which your Magento Enterprise Cloud Edition SSH keys are located

### Port forwarding on Mac or UNIX {#portmac}
Enter the following command:

	ssh -R 9000:localhost:9000 <ssh url>

If an "unable to connect" error is displayed, there could be another active SSH session persisting on the server that is occupying port 9000. If that connection isn't being used, you can terminate it.

To troubleshoot the connection:

1.	[SSH]({{ page.baseurl }}cloud/env/environments-ssh.html) to the integration, staging, or production server.
2.	Enter `who` to view a list of SSH sessions.
3.	View existing SSH sessions by user.

	*	Integration: user names are similar to TBD
	*	Staging: user names are similar to `dd2q5ct7mhgus_stg`
  *	Production: user names are similar to `dd2q5ct7mhgus`

	Be careful to not affect a user other than yourself!
4.	For a user session that is older than yours, find the pseudo-terminal (PTS) value (for example, `pts/0`).
5.	Kill the process ID (PID) corresponding to the PTS value using the following commands:

    ps aux | grep ssh
    kill <PID>

For example, suppose `ps aux | grep ssh` returned the following:

<pre class="no-copy">dd2q5ct7mhgus        5504  0.0  0.0  82612  3664 ?      S    18:45   0:00 sshd: dd2q5ct7mhgus@pts/0</pre>

In the preceding example, enter

<pre class="no-copy">kill 3664</pre>










## Pull code locally to debug
You need to pull code locally from an environment to perform debugging.

The following looks like internal content...?

1. git checkout & composer install. it may be possible to retrieve the composer.json file from the customer's project and just run composer install to get all the code. If possible, do this. It may not be possible if they use private repositories on github to get packages
2. git checkout & download vendor directory. So you can zip up the vendor directory and place it in /tmp, then download with rsync (make sure to remove after downloading it! To save disk space!). The only issue is that patches which modify code in app or setup directories won't be applied, but this should not be an issue unless you are actually debugging through those files. But most of the code in Magento that needs to be debugged will live in vendor directory, since all modules and also the framework are here. 3p modules that can live inside app/code are probably not patched by MCC or m2-hotfixes.

  * remote: `tar -czf /tmp/vendor.tgz vendor`
  * local: `rsync <ssh url>:/tmp/vendor.tgz .`
  * local: `tar xzf vendor.tgz`

3. no git checkout, instead download vendor, app, pub, lib, and setup directories. You have a couple options actually if you need to debug code in app or setup which is actually affected by patches (you can grep through all the patches in MCC and m2-hotfixes to see if files in question get patched). One way is to use find and xargs to apply all patches from m2-hotfixes and MCC manually. The more convenient option is to checkout the repo, delete vendor, app, pub, lib, and setup, and then copy in the downloaded versions from remote, same as packing and downloading vendor.tgz in previous example

## Use Xdebug {#usexdebug}
To run and use Xdebug, you will need the environment's SSH URL. You can locate the information through the [Project Web Interface]({{page.baseurl}}cloud/project/projects.html).

		magento-cloud environment:ssh --pipe -e <environment ID>

To use Xdebug, SSH to the environment as follows:

		ssh -R <xdebug listen port>:<host>:<xdebug listen port> <SSH URL>

For example,

		ssh -R 9000:localhost:9000 pwga8A0bhuk7o-mybranch@ssh.us.magentosite.cloud

## Troubleshooting
If you you suspend your laptop (like closing your lid on a Mac (sad) ), then your ssh session may no longer work when your computer resumes.  But, the TCP session for the SSH connection on the server might not timeout on the server, leaving any open debug sessions active, prevent you from using the nginx server.  Because we don't have access to manually restart the nginx server, the way to kill the old debug session is to kill the old ssh processes that haven't timed out yet.  (to find them: ps ax |grep ssh)


#### Related topics
*	[Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

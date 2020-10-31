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

Xdebug is an extension for debugging your PHP. The following explains how to configure Xdebug and PhpStorm to debug in your local environment. You can use the IDE of your choice. See the vendor documentation for those applications for further configuration information.

{:.bs-callout-info}
You can configure Xdebug to run in the {{site.data.var.mcd-prod}} environment for local debugging without changing your {{site.data.var.ece}} project configuration. See [Configure Xdebug for Docker]({{site.baseurl}}/cloud/docker/docker-development-debug.html).

To set up Xdebug, you need to [configure](#configure-xdebug) a file in your Git repository, configure your IDE, and set up port forwarding. You can configure settings in the `magento.app.yaml` file. After editing, you can push the Git changes across all Starter environments and Pro Integration environments to enable Xdebug. To push these settings to Pro plan Staging and Production environments, you must enter a ticket.

Once configured, you can debug [CLI commands](#debugcli), [web requests](#webrequests), and [code](#code). Remember, all {{site.data.var.ece}} environments are read-only. You need to pull code to your local development environment to perform debugging. For Pro Staging and Production environments, we include [additional instructions](#pro-debug) for Xdebug.

## Requirements {#usexdebug}

To run and use Xdebug, you need the SSH URL for the environment. You can locate the information through the [Project Web Interface]({{ site.baseurl }}/cloud/project/projects.html) or your Cloud Onboarding UI.

## Configure Xdebug

To configure Xdebug, you need to do the following:

-  [Work in a branch](#branch) to push file updates
-  [Enable Xdebug for environments](#enable)
-  Configure your IDE, like [PhpStorm](#phpstorm)
-  [Set up port forwarding](#port)

For configuring on Pro plan Staging and Production, you need to enter a [ticket for Staging and Production](#pro).

### Get started with a branch {#branch}

To add Xdebug, we recommend creating a branch to work in and add the files.

{% include cloud/cli-get-started.md %}

### Enable Xdebug in your environment {#enable}

To enable Xdebug for your project, add `xdebug` to the `runtime:extensions` section of the `.magento.app.yaml` file.

You can enable Xdebug directly to all Starter environments and Pro Integration environments. For Pro Staging and Production, you need to update this file and enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) to have it enabled. We enable Xdebug on those environments for you.

{:.procedure}
To enable Xdebug:

1. In your local terminal, open the `.magento.app.yaml` file in a text editor.

1. In the `runtime` section, under `extensions`, add `xdebug`. For example:

   ```yaml
   runtime:
       extensions:
           - redis
           - xsl
           - json
           - newrelic
           - sodium
           - xdebug
   ```

1. Save your changes to the `.magento.app.yaml` file and exit the text editor.

1. Add, commit, and push the changes to redeploy the environment.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Add xdebug"
   ```

   ```bash
   git push origin <environment-ID>
   ```

When deployed to Starter environments and Pro Integration environments, Xdebug is now available. You should continue configuring your IDE. For PhpStorm, see [Configure PhpStorm](#phpstorm).

### Configure PhpStorm {#phpstorm}

You need to configure [PhpStorm](https://www.jetbrains.com/phpstorm/) to properly work with Xdebug.

{:.procedure}
To configure PhpStorm to work with Xdebug:

1. In your PhpStorm project, open the settings panel.

   -  _Mac OS X_—Select **File** > **Preferences**.
   -  _Windows/Linux_—Select **File** > **Settings**.

1. In the _Settings_ panel, expand and locate the **Languages & Frameworks** > **PHP** > **Servers** section.

1. Click the **+** to add a server configuration. The project name is in grey at the top.

1. Configure the following settings for the new server configuration:

   -  **Name**—enter the same as the hostname. This value is used in and must match the value for `PHP_IDE_CONFIG` variable in [Debug CLI commands](#debugcli).
   -  **Host**—Enter `localhost`.
   -  **Port**—Enter `80`.
   -  **Debugger**—Select `Xdebug`.

1. Select **Use path mappings**. In the _File/Directory_ pane, the root of the project for the `serverName` displays.

1. In the **Absolute path on the server** column, click ![Edit]({{ site.baseurl }}/common/images/install_docker_php-storm-edit.png){:width="15px"} (**Edit**) and add a setting based on the environment:

   -  For all Starter environments and Pro Integration environments, the remote path is `/app`.
   -  For Pro Staging and Production environments:

      -  Production: `/app/<project_code>/`
      -  Staging:  `/app/<project_code>_stg/`

1. Change the Xdebug port to 9000 in the **Languages & Frameworks** > **PHP** > **Debug** > **Xdebug** > **Debug Port** panel.

1. Click **Apply**.

### Set up port forwarding {#port}

You must map the XDEBUG connection from the server to your local system. To do any type of debugging, you must forward port 9000 from your {{site.data.var.ece}} server to your local machine. See one of the following sections:

-  [Port forwarding on Mac or UNIX](#portmac)
-  [Port forwarding on Windows](#portwindows)

#### Port forwarding on Mac or UNIX {#portmac}

{:.procedure}
To set up port forwarding on a Mac or in a Unix environment:

1. Open a terminal.

1. Use SSH to establish the connection.

   ```bash
   ssh -R 9000:localhost:9000 <ssh url>
   ```

   Add the `-v` option to the SSH command to show in the terminal whenever a socket is connected to the port that is being forwarded.

   If an "unable to connect" or "could not listen to port on remote" error is displayed, there could be another active SSH session persisting on the server that is occupying port 9000. If that connection isn't being used, you can terminate it.

{:.procedure}
To troubleshoot the connection:

1. Use SSH to log in to the remote Integration, Staging, or Production environment.

1. Enter `who` to view a list of SSH sessions.

1. View existing SSH sessions by user. Be careful to not affect a user other than yourself!

   -  Integration: usernames are similar to `dd2q5ct7mhgus`
   -  Staging: usernames are similar to `dd2q5ct7mhgus_stg`
   -  Production: usernames are similar to `dd2q5ct7mhgus`

1. For a user session that is older than yours, find the pseudo-terminal (PTS) value, such as `pts/0`.

1. Kill the process ID (PID) corresponding to the PTS value.

   ```bash
   ps aux | grep ssh
   kill <PID>
   ```

   Sample response:

   ```terminal
   dd2q5ct7mhgus        5504  0.0  0.0  82612  3664 ?      S    18:45   0:00 sshd: dd2q5ct7mhgus@pts/0
   ```

   To terminate the connection, enter a kill command with the process ID (PID).

   ```bash
   kill 3664
   ```

#### Port forwarding on Windows {#portwindows}

To set up port forwarding (SSH tunneling) on Windows, you must configure your Windows terminal application. For this example, we walk through creating an SSH tunnel using [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). You can use other applications such as Cygwin. For more information on other applications, see the vendor documentation provided with those applications.

{:.procedure}
To set up an SSH tunnel on Windows using Putty:

1. If you have not already done so, download [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

1. Start Putty.

1. In the Category pane, click **Session**.

1. Enter the following information:

   -  **Hostname (or IP address)** field: Enter the [SSH URL]({{ site.baseurl }}/cloud/env/environments-ssh.html) for your Cloud server
   -  **Port** field: Enter `22`

   ![Set up Putty]({{ site.baseurl }}/common/images/cloud-xdebug_putty-session.png){:width="350px"}

1. In the _Category_ pane, click **Connection** > **SSH** > **Tunnels**.

1. Enter the following information:

   -  **Source port** field: Enter `9000`
   -  **Destination** field: Enter `127.0.0.1:9000`
   -  Click **Remote**

1. Click **Add**.

   ![Create an SSH tunnel in Putty]({{ site.baseurl }}/common/images/cloud-xdebug_putty-tunnels.png){:width="350px"}

1. In the _Category_ pane, click **Session**.

1. In the **Saved Sessions** field, enter a name for this SSH tunnel.

1. Click **Save**.

   ![Save your SSH tunnel]({{ site.baseurl }}/common/images/cloud-xdebug_putty-session-save.png){:width="350px"}

1. To test the SSH tunnel, click **Load**, then click **Open**.

   If an "unable to connect" error displays, verify all of the following:

   -  All Putty settings are correct
   -  You are running Putty on the machine on which your private {{site.data.var.ece}} SSH keys are located

### Configure Pro Staging and Production {#pro}

To complete configuration for Pro plan Staging and Production environments, you must enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) to have Xdebug enabled and configured in Staging and Production environments.

We enable Xdebug in the environment. Be aware that this is a configuration change that requires us to redeploy your Staging and Production environments.

## SSH access to Xdebug environments {#ssh}

For initiating debugging, performing setup, and more, you need the SSH commands for accessing the environments. You can get this information, through the [Project Web Interface]({{ site.baseurl }}/cloud/project/projects.html) and your project spreadsheet.

For Starter environments and Pro Integration environments, you can use the following Magento Cloud CLI command to SSH into those environments:

```bash
magento-cloud environment:ssh --pipe -e <environment-ID>
```

To use Xdebug, SSH to the environment as follows:

```bash
ssh -R <xdebug listen port>:<host>:<xdebug listen port> <SSH URL>
```

For example,

```bash
ssh -R 9000:localhost:9000 pwga8A0bhuk7o-mybranch@ssh.us.magentosite.cloud
```

## Debug for Pro Staging and Production {#pro-debug}

To use Xdebug specifically on Pro plan Staging and Production environment, you create a separate SSH tunnel and web session only you have access to. This usage differs from typical access, only providing access to you and not to all users.

You need the following:

-  SSH commands for accessing the environments. You can get this information, through the [Project Web Interface]({{ site.baseurl }}/cloud/project/projects.html) or your Cloud Onboarding UI.
-  The `xdebug_key` value we set when configuring the Staging and Pro environments

{:.procedure}
To set up an SSH tunnel to a Staging or Production environment:

1. Open a terminal.

1. Clean up all SSH sessions.

   ```bash
   ssh USERNAME@CLUSTER.ent.magento.cloud 'rm /run/platform/USERNAME/xdebug.sock'
   ```

1. Set up the SSH tunnel for Xdebug.

   ```bash
   ssh -R /run/platform/USERNAME/xdebug.sock:localhost:9000 -N USERNAME@CLUSTER.ent.magento.cloud
   ```

{:.procedure}
To start debugging using the environment URL:

1. To enable remote debugging, visit the site in the browser with the following added to the URL where `KEY` is value for `xdebug_key`:

   ```http
   ?XDEBUG_SESSION_START=KEY
   ```

   This sets the cookie that sends browser requests to trigger Xdebug.

1. Complete your debugging with Xdebug.

1. When you are ready to end the session, you can use the following command to remove the cookie and end debugging through the browser where `KEY` is value for `xdebug_key`:

   ```http
   ?XDEBUG_SESSION_STOP=KEY
   ```

   {:.bs-callout-info}
   The `XDEBUG_SESSION_START` passed by `POST` requests are not supported at this time.

## Debug CLI commands {#debugcli}

This section walks through debugging CLI commands.

{:.procedure}
To debug CLI commands:

1. SSH into the server you want to debug using CLI commands.

1. Create the following environment variables:

   ```bash
   export XDEBUG_CONFIG='PHPSTORM'
   ```

   ```bash
   export PHP_IDE_CONFIG="serverName=<name of the server that is configured in PHPSTORM>"
   ```

   These variables are removed when the SSH session ends.

1. Begin debugging

   On Starter environments and Pro Integration environments, run the CLI command to debug.
   You may add runtime options, for example:

   ```bash
   php -d xdebug.profiler_enable=On -d xdebug.max_nesting_level=9999 bin/magento cache:clean
   ```

   On Pro Staging and Production environments, you must specify the path to the Xdebug php configuration file when debugging CLI commands, for example:

   ```bash
   php -c /etc/platform/USERNAME/php.xdebug.ini bin/magento cache:clean
   ```

## For debugging web requests {#webrequests}

The following steps help you debug web requests.

1. On the _Extension_ menu, click **Debug** to enable.

1. Right click, select the options menu, and set the IDE key to **PHPSTORM**.

1. Install the Xdebug client on the browser. Configure and enable it.

### Example set up on Chrome {#chrome}

This section discusses how to use Xdebug in Chrome using the Xdebug Helper extension. For information about Xdebug tools for other browsers, consult the browser documentation.

{:.procedure}
To use Xdebug Helper with Chrome:

1. Create an [SSH tunnel](#ssh) to the Cloud server.

1. Install the [Xdebug Helper extension](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en) from the Chrome store.

1. Enable the extension in Chrome as shown in the following figure.

   ![Enable the Xdebug extension in Chrome]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-chrome.png)

1. In Chrome, right-click ![Xdebug helper icon]({{ site.baseurl }}/common/images/cloud-xdebug_helper-icon.png){:width="25px"} in the Chrome toolbar.

1. From the pop-up menu, click **Options**.

1. From the _IDE Key_ list, click **PhpStorm**.

1. Click **Save**.

   ![Xdebug Helper options]({{ site.baseurl }}/common/images/cloud-xdebug_helper-options.png){:width="400px"}

1. Open your PhpStorm project.

1. In the top navigation bar, click ![Start listening for connections]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-start-listening.png){:width="25px"}  (**Start listening**).

   If the navigation bar isn't displayed, click **View** > **Navigation Bar**.

1. In the PhpStorm navigation pane, double-click the PHP file to test.

## Debug code locally {#code}

Due to the read-only environments, you need to pull code locally from an environment or specific Git branch to perform debugging.

The method you choose is up to you. You have the following options:

-  Check out code from Git and run `composer install`

   This method works unless `composer.json` references packages in private repositories to which you do not have access. This method results in getting the entire Magento codebase.

-  Copy the `vendor`, `app`, `pub`, `lib`, and `setup` directories

   This method results in your having all code you can possibly test. Depending on how many static assets you have, it could result in a long transfer with a large volume of files.

-  Copy the `vendor` directory only

   Because most Magento and third-party code is in the `vendor` directory, this method is likely to result in good testing although you will not be testing the entire codebase.

{:.procedure}
To compress files and copy them to your local machine:

1. Use SSH to login to the remote environment.

1. Compress the files.

   ```bash
   tar -czf /tmp/<file-name>.tgz <directory list>
   ```

   For example, to compress the `vendor` directory only, enter

   ```bash
   tar -czf /tmp/vendor.tgz vendor
   ```

1. On your local environment, use PhpStorm to compress the files.

   ```bash
   cd <phpstorm project root dir>
   ```

   ```bash
   rsync <SSH-URL>:/tmp/<file-name>.tgz .
   ```

   ```bash
   tar xzf <file-name>.tgz
   ```

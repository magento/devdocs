---
group: cloud-guide
title: Docker development configure Xdebug
functional_areas:
- Cloud
- Setup
- Configuration
- Debug
---

We recommend using Xdebug for your PHP debugging. The following sections detail how to configure Xdebug and PhpStorm to debug locally in your docker local environment.

To enable Xdebug, you need to [configure](#configure) `docker/global.php` file during launching [Docker Environment]({{ page.baseurl }}/cloud/docker/docker-config.html).


## Configure Docker {#docker}

### For Windows

1. Open docker settings.
2. Select checkbox near `Expose daemon on tcp://localhost:2375 without TLS`
3. Wait for settings applied.

## Configure Xdebug {#configure}

To configure Xdebug, you need to do modify next options in `docker/global.php` file during launching [Docker Environment]({{ page.baseurl }}/cloud/docker/docker-config.html#configure_docker_global_variables).

* set `PHP_ENABLE_XDEBUG` option to true to enable Xdebug
* modify `remote_host` in `XDEBUG_CONFIG` option according to your OS, for Windows `remote_host=host.docker.internal`
* modify `PHP_IDE_CONFIG` option if you want to change `serverName` this is name of your server created in IDE
* you can change any Xdebug configuration in `XDEBUG_CONFIG` option. For example, for changing `xdebug.remote_port`: `'XDEBUG_CONFIG' => 'remote_host=host.docker.internal remote_port=9002'`


### Configure PhpStorm {#phpstorm}

You need to configure [PhpStorm](https://www.jetbrains.com/phpstorm/) to properly work with Xdebug.

1. Open your PhpStorm project.
2. Open the settings for PhpStorm.

    * On Mac, select **File** > **Preferences**.
    * On Windows/Linux, select **File** > **Settings**.
3. Expand and locate **Languages & Frameworks** > **PHP** > **Servers** section in settings.
4. Add a server configuration. Click the + to add a server. Notice at the top, it will show the project name in grey, just for reference. This will create a "server" configuration.
5. Configure settings for the new server:

    * **Name**: enter the same as the `serverName` in `PHP_IDE_CONFIG` option from `docker/global.php` file.
    * **Host**: enter `localhost`
    * **Port**: enter 80
    * **Debugger**: set to Xdebug in the drop-down
6. Select the **Use path mappings** option. In the files/directories, the root of the project displays that you opened for the added server.
7. In the **Absolute path on the server** column, click ![Edit]({{ site.baseurl }}/common/images/install_docker_php-storm-edit.png){:width="15px"} and add value of `MAGENTO_ROOT` option, `/var/www/magento` by default.
8. Change Xdebug port to 9001 **Languages & Frameworks** > **PHP** > **Debug** > **Xdebug** > **Debug Port**, apply changes  


## For debugging web requests {#webrequests}

The following steps help you debug web requests.


1. Open your PhpStorm project and in the top navigation bar, click ![Start listening for connections]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-start-listening.png){:width="25px"}  (**Start listening**)
1. Put some breakpoints in `pub/index.php` file 
1. Install debug extension in browser, click **Debug** to enable.
1. Open `https://localhost` in browser with enabled debug in extension. 
1. PhpStorm should catch Xdebug connection and you are able to start debugging of web requests.

### Example set up on Chrome {#chrome}

This section discusses how to use Xdebug in Chrome using the Xdebug Helper extension. For information about Xdebug tools for other browsers, consult the browser documentation.

To use Xdebug Helper with Chrome:

1.	Install the [Xdebug Helper extension](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en) from the Chrome store.
1.	Enable the extension in Chrome as shown in the following figure.
	![Enable the Xdebug extension in Chrome]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-chrome.png)
1.	In Chrome, right-click ![Xdebug helper icon]({{ site.baseurl }}/common/images/cloud-xdebug_helper-icon.png){:width="25px"} in the Chrome toolbar.
1.	From the pop-up menu, click **Options**.
1.	From the **IDE Key** list, click **PhpStorm**.
1.	Click **Save**.
	![Xdebug Helper options]({{ site.baseurl }}/common/images/cloud-xdebug_helper-options.png){:width="400px"}
   
	
	
## Debug CLI commands {#debugcli}

This section walks through debugging CLI commands.

1. Open PhpStorm
1. Go to **Build, Extension, Deployment** > **Docker** click on `+` to add new Docker server:
      * **Name**: Docker Cloud
      * **Connect to Docker daemon with**:
      	 * For Windows select `TCP socket` and fill **Engine Api Url** with `tcp://localhost:2375`
1. Create new Cli Interpreter from your docker image **Languages & Frameworks** > **PHP** > **Cli Interpreter** click **[...]** button.
   Click **[+]** to add and configure new interpreter
   * **Name** enter name for new interpreter `Magento cloud docker cli`
   * **Remote** select Docker
     * **Server** select `Docker Cloud` from previous step
     * **Image name** select *magento/magento-cloud-docker-php:7.x-cli*
   * **Additional** > **Debugger extension** enter `xdebug`
   * Click refresh button to ensure that interpreter and xdebug configured properly.
   
   Save changes.     
1. Open Run/Debug Configuration window and add new **Php script**:
  * **Name**: enter `bin/magento`	
  * **Configuration** > **File**: select path to `bin/magento` file in your local environment.
  
1. Put some breakpoints in `bin/magento` file and debug Php script created in previous step.
1. You can debug any magento command or php script using described steps.

  
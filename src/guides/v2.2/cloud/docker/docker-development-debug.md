---
group: cloud-guide
title: Configure Xdebug for Docker
functional_areas:
- Cloud
- Setup
- Configuration
- Debug
---

Xdebug is an extension for debugging your PHP. The following explains how to configure Xdebug and PhpStorm to debug in your local Docker environment.

If you use Microsoft Windows, take the following steps before continuing:

1. Open your Docker settings.
1. Select the **Expose daemon on tcp://localhost:2375 without TLS** checkbox.
1. Wait for the settings to apply.

## Enable Xdebug

To enable Xdebug for your project, add `xdebug` to the `runtime:extensions` section of the `.magento.app.yaml` file.

```yaml
runtime:
    extensions:
        - redis
        - xsl
        - json
        - blackfire
        - newrelic
        - xdebug
```

## Configure Xdebug

1. Rebuild the `docker-compose.yml` file by continuing to configure your local workstation to [launch the Docker environment][docker-config]. The following is an excerpt from the `docker-compose.yml` file that shows Docker global variables.

   ```yaml
   generic:
     image: alpine
     environment:
       - PHP_MEMORY_LIMIT=2048M
       - UPLOAD_MAX_FILESIZE=64M
       - MAGENTO_ROOT=/app
       - PHP_IDE_CONFIG=serverName=magento_cloud_docker
       - XDEBUG_CONFIG=remote_host=host.docker.internal
       - 'PHP_EXTENSIONS=bcmath bz2 calendar exif gd gettext intl mysqli pcntl pdo_mysql soap sockets sysvmsg sysvsem sysvshm opcache zip redis xsl xdebug'
   ```
   {:.no-copy}

1. Change any Xdebug configuration using the`XDEBUG_CONFIG` option. For example, to change the `xdebug.remote_port` option:

   ```yaml
   XDEBUG_CONFIG='remote_host=host.docker.internal remote_port=9002'
   ```

{:.procedure}
To configure PhpStorm to work with Xdebug:

1. In your PhpStorm project, open the settings panel.

   -  _Mac OS X_—Select **File** > **Preferences**.
   -  _Windows/Linux_—Select **File** > **Settings**.

1. In the _Settings_ panel, expand and locate the **Languages & Frameworks** > **PHP** > **Servers** section.

1. Click the **+** to add a server configuration. The project name is in grey at the top.

1. Configure the following settings for the new server configuration:

   -  **Name**—Enter the name used for the `serverName` in `PHP_IDE_CONFIG` option from `docker-compose.yml` file.
   -  **Host**—Enter `localhost`.
   -  **Port**—Enter `80`.
   -  **Debugger**—Select `Xdebug`.

1. Select **Use path mappings**. In the _File/Directory_ pane, the root of the project for the `serverName` displays.

1. In the **Absolute path on the server** column, click ![Edit]({{ site.baseurl }}/common/images/install_docker_php-storm-edit.png){:width="15px"} and add a value to the `MAGENTO_ROOT` option. The default value is `/app`

1. Change the Xdebug port to 9001 in the **Languages & Frameworks** > **PHP** > **Debug** > **Xdebug** > **Debug Port** panel.

1. Click **Apply**.

## Use Xdebug

The following steps describe debugging web requests and CLI commands.

{:.procedure}
To debug web requests:

1. In your PhpStorm project, click ![Start listening for connections]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-start-listening.png){:width="25px"} (**Start listening**) in the top navigation bar.

1. Add breakpoints in the `pub/index.php` file.

1. Install the debug extension in the browser, and then click **Debug** to enable.

1. In the browser, open the `https://localhost` URL.

1. When PhpStorm recognizes the Xdebug connection, you can begin debugging web requests.

You can debug any Magento command or PHP script using the following steps.

{:.procedure}
To debug CLI commands:

1. In your PhpStorm project, open the **Build, Extension, Deployment** > **Docker** panel, and then click `+` to add a new Docker server and update the following settings:

   -  **Name**—Enter a name for the server, for example `Docker Cloud`.
   -  **Connect to Docker daemon with**—
      -  _Windows_—Select **TCP socket** and update **Engine Api Url** with `tcp://localhost:2375`.
      -  _Mac OS X_—Select **Docker for Mac**. [_default_]

1. In the **Languages & Frameworks** > **PHP** > **Cli Interpreter** panel, click **[...]**.

1. Click **[+]** to add and configure a new Cli Interpreter from your Docker image. Update the following settings:

   -  **Name**—Enter a name for the new interpreter, such as `Magento cloud docker cli`.
   -  **Remote**—Select `Docker`.
      -  **Server**—Select `Docker Cloud` from the previous step.
      -  **Image name**—Select `magento/magento-cloud-docker-php:7.x-cli`.
   -  **Additional** > **Debugger extension**—
      -  Windows—Enter `xdebug`.
      -  Mac OS X/Linux—Enter `xdebug.so`.
   -  Click **Refresh** to verify that the interpreter and Xdebug extension are configured properly.

1. Click **Save**.

1. Open the _Run/Debug Configuration_ window and add a new **PHP script** with the following settings:

   -  **Name**—Enter `bin/magento`.
   -  **Configuration** > **File**—Select the path to the `bin/magento` file in your local environment.

1. Add breakpoints in the `bin/magento` file and the debug PHP script created in the previous step.

## Using Xdebug Helper

You can install and use the Xdebug Helper Chrome extension to debug your PhP code from the browser.

{:.procedure}
To use Xdebug Helper with Chrome:

1. Install the [Xdebug Helper extension] from the Chrome store.

1. Enable the extension in Chrome as shown in the following figure.

   ![Enable the Xdebug extension in Chrome]({{ site.baseurl }}/common/images/install_docker_php-storm_xdebug-chrome.png)

1. In _Chrome_, click ![Xdebug helper icon]({{ site.baseurl }}/common/images/cloud-xdebug_helper-icon.png){:width="25px"} in the Chrome toolbar.

1. From the _Xdebug helper_ menu, click **Options**.

1. From the _IDE Key_ list, select **PhpStorm**.

1. Click **Save**.

   ![Xdebug Helper options]({{ site.baseurl }}/common/images/cloud-xdebug_helper-options.png){:width="400px"}

[docker-config]: {{page.baseurl}}/cloud/docker/docker-config.html
[Xdebug Helper extension]: https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en
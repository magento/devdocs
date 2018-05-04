---
layout: default
group: install-dock
subgroup: 02_ref
title: DevBox reference
menu_title: DevBox reference
landing-page: DevBox Quick Installation (Beta)
menu_node: parent
menu_order: 1
version: 2.0
github_link: install-gde/docker/docker-ref.md
functional_areas:
  - Install
  - System
  - Setup
---

{% include install/docker/deprecated-note.html %}

## System requirements {#devbox-sys-req}
To use the Magento DevBox, you must have a system with the following:

*	64-bit Windows 10 Pro, Enterprise and Education (1511 November update, Build 10586 or later)
*	Mac OS 10.10.3 "Yosemite" or later

Magento DevBox is packaged with the following:

*	Debian GNU/Linux 8 (jessie)
*	Apache 2.4.10
*	{% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7.0.12
*	MySQL 5.6.34

{% collapsibleh2 Prerequisites %}

This section discusses prerequisites you must complete before you install the Magento DevBox.

### Docker prerequisites
Before you continue, make sure you install and configure the following:

*	Mac OS and Windows: Install the [Docker software](https://www.docker.com/products/docker-toolbox){:target="_blank"}
*	Windows 10 only:

    *   You must enable Hyper-V

        After Docker starts, it requests you to enable Hyper-V. A reboot is required.

    *   Set up Docker file sharing as discussed in the next section

    <div class="bs-callout bs-callout-warning" markdown="1">
    You cannot work with Docker, VirtualBox, or Vagrant simultaneously on Windows 10.
    </div>

#### Set up Docker file sharing {#devbox-docker-file-share}
For the Magento application to work, the application must be installed in a folder that Docker uses for file sharing.

**Windows**

To set up Docker file sharing on Windows:

1.  Right-click the Docker icon in the system tray.
2.  From the pop-up menu, click **Settings**.
3.  Click the **Shared Drives** tab.

    This tab page displays all drives that Docker currently knows about. Make sure you install Magento in a drive listed on this tab page.

4.  Select the check box next to the drive in which to install Magento.
5.  Click **Apply**.    

**Mac OS**

To set up Docker file sharing on the Mac OS:

1.  Right-click the Docker logo.
2.  From the pop-up menu, click **Preferences**.
3.  In the Preferences dialog box, click the **File Sharing** tab.

    This tab page displays all shared directories that Docker currently knows about. Make sure you install Magento in a folder listed on this tab page.
5.  To add additional directories, follow the prompts on your screen or consult Docker documentation.

{% endcollapsibleh2 %}

## Get Magento DevBox now
To get Magento DevBox now, go to the [Magento download page](https://magento.com/tech-resources/download){:target="_blank"}.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
*   Magento DevBox should be used in development only. (You should _not_ use it in production.)
*   Magento DevBox is Beta software. Report any issues on the [DevBox GitHub repository](https://github.com/magento/magento2devbox-web/issues){:target="_blank"}.
</div>

<p id="devbox-fileshare"></p>{% collapsibleh2 How DevBox uses file sharing %}

DevBox runs in a Docker container, which is also referred to as the _guest operating system_. The Magento files and folders are located on your _host operating system_ (Windows or Mac OS). To facilitate development, Magento files and directories are shared by the guest and host operating systems.

When you make a change to files, the changes are automatically synchronized, regardless of which files you change. (In other words, if you change files on the host operating system, those files are synchronized with the guest operating system and vice versa.)

Use the following guidelines:

*   New Magento DevBox installations: Files are shared in the `shared/webroot` folder relative to your Magento installation root folder.

    The Magento installation root folder is typically a subfolder of the folder in which you extracted the `.zip` file you download from Magento.
*   If you use an existing Magento installation with DevBox: Files are shared in the location to which you downloaded Magento.

{% endcollapsibleh2 %}

{% collapsibleh2 Magento authentication prerequisites %}

{% include install/auth-tokens-get.md %}

{% endcollapsibleh2 %}

<p id="devbox-download"></p>{% collapsibleh2 How to download Magento code %}

This section applies to you if you use an existing Magento installation with DevBox. This means you first download the Magento software using either [Composer]({{ page.baseurl}}/install-gde/prereq/integrator_install.html) or a [compressed archive]({{ page.baseurl}}/install-gde/prereq/zip_install.html) but you don't _install_ the software.

Downloading a compressed archive has potential issues on the Mac OS, which extracts known compressed file types like `.zip` to a folder. The folder contains files that have to be copied in a particular way; otherwise, the Magento DevBox doesn't perform properly.

If you download a compressed archive on the Mac OS, you must make sure to copy _all_ of the Magento code to an empty folder. In particular, you must copy all Apache [distributed configuration files](http://httpd.apache.org/docs/current/howto/htaccess.html){:target="_blank"}, named `.htaccess`, to the folder. `.htaccess` files are located in several Magento directories, including in the root folder.

Failure to copy `.htaccess` files causes the Magento application to function incorrectly because URL redirects won't work.

When you download a file on the Mac OS, the file is usually located in the `/Users/<name>/Downloads` folder. If you download a `.zip` file, it's usually extracted to a subfolder like the following:

<pre class="no-copy">
/Users/&lt;name>/Downloads/&lt;Magento folder name>
</pre>

To make sure your existing Magento installation works it with DevBox, create an empty folder and copy all of the contents of the Magento compressed file to it as follows:

<pre class="no-copy">
mkdir -p &lt;path>
cp -r /Users/&lt;name>/Downloads/&lt;Magento folder name> &lt;path></pre>

<div class="bs-callout bs-callout-warning" markdown="1">
Don't use arguments like `/*` in the `cp` command because hidden files like `.htaccess` won't copy.
</div>

For example, to copy {{site.data.var.ce}} 2.1.3 code to a new folder named `/Users/me/Applications/Magento`, use the following commands:

    mkdir -p /Users/me/Applications/Magento
    cp -r /Users/me/Downloads/Magento-CE-2_1_3_zip-2016-12-16-06-04-03 /Users/me/Applications/Magento

Double-check to make sure the hidden files were copied:

    ls -al /Users/me/Applications/Magento

The first files listed should be:

<pre class="no-copy">
.gitignore
.htaccess
.htaccess.sample
.php_cs
.travis.yml
 .user.ini
</pre>

All the files in the preceding list are hidden; if these files exist in the folder, it confirms you copied them correctly.

{% endcollapsibleh2 %}

{% collapsibleh2 Installation options %}
This section discusses options common to creating a new Magento installation or using an existing Magento installation.

#### New or existing installation
The first question the wizard asks is whether you want to:

*	Create New Magento Installation

	Choose this option if you haven't yet downloaded the Magento software.

*	Get Only DevBox and Use Existing Local Installation

	Choose this option if you have already downloaded the Magento software but haven't installed it yet.

#### Choose your operating system
Click a [supported operating system](#devbox-sys-req).

#### Local Project Path (existing installation only)
Enter the path to install the Magento application. The simplest option is to specify an absolute file system path like `/Users/me/magento`. The folder must already exist.

See <a href="#devbox-download">How to download Magento code</a>.

#### Select Magento Edition
For new installations, you have the option to install {{site.data.var.ce}} or {{site.data.var.ee}}. Both editions require authentication; to get {{site.data.var.ee}} authentication credentials, you must be a licensed customer.

**Optional sample data** Optional sample data provides a storefront based on the Luma theme outfitted with products, categories, customer registration, and so on. It functions just like a Magento storefront and you can manipulate prices, inventory, and promotional pricing rules using the Magento Admin.

Select the check box to install optional sample data. This option increases your installation time by a few minutes.

#### Access Keys
Enter your Magento public and private authentication keys in the provided fields.

Click **Take Me to My Access Keys** to log in to `magento.com` and get or generate [authentication keys]({{ page.baseurl}}/install-gde/prereq/connect-auth.html).

{% endcollapsibleh2 %}

{% collapsibleh2 Advanced options for new installations %}

To provide you more control over your Magento installation, we enable you to choose the following advanced options:

<table>
    <tbody>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>Local Project Path</td>
        <td><p>Enter the path to install the Magento application. The simplest option is to specify an absolute file system path like <code>/Users/me/magento</code>. The folder must already exist.</p>
            <p>See <a href="#devbox-download">How to download Magento code</a>.</p></td>
    </tr>
    <tr>
        <td>Store Admin Username</td>
        <td>Enter a user name for the Magento Admin, the management application for your stores.</td>
    </tr>
    <tr>
        <td>Store Admin Password</td>
        <td>Enter the administrator's password.</td>
    </tr>
    <tr>
        <td>Authentication Key Directory</td>
        <td><p>Directory used to store your Magento authentication keys. From the <strong>Composer Directory</strong> list, click either of the following:</p> <ul><li><strong>Automatically generate</strong>: Allow Magento to create a directory for you.</li><li><strong>Use existing directory</strong>: If your authentication keys are already located in a directory on your laptop, specify its location relative to your home directory. Select the <strong>Use Access Keys from Composer directory?</strong> check box if your keys are stored in the specified directory.</li></ul></td>
    </tr>

    <tr>
        <td>Environment configuration</td>
        <td><p>Choose which of the following software to install:</p> <ul><li><a href="{{ page.baseurl}}/config-guide/mq/rabbitmq-overview.html">RabbitMQ</a> (required for Magento EE, can be installed optionally for {{site.data.var.ce}})</li><li><a href="{{page.baseurl}}/config-guide/redis/config-redis.html#config-redis-overhtml">Redis</a> for full-page cache</li><li>Redis for the default Magento cache</li><li>Redis for session cache</li><li><a href="{{ page.baseurl}}/config-guide/varnish/config-varnish.html#config-varnish-over.html">Varnish</a> for HTTP acceleration</li><li><a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-overview.html#overview">Elasticsearch</a> (used by Magento EE 2.1 and later only, can be installed optionally for Magento CE)</li></ul></td>
    </tr>
</tbody>
</table>

{% endcollapsibleh2 %}

{% collapsibleh2 Advanced options for existing installations %}

<table>
    <tbody>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>Store Admin Username</td>
        <td>Enter a user name for the Magento Admin, the management application for your stores.</td>
    </tr>
    <tr>
        <td>Store Admin Password</td>
        <td>Enter the administrator password to log in to the Magento Admin, the management application for your stores.</td>
    </tr>
    <tr>
        <td>Authentication Key Directory</td>
        <td><p>Directory used to store your Magento authentication keys. From the <strong>Composer Directory</strong> list, click either of the following:</p> <ul><li><strong>Automatically generate</strong>: Allow Magento to create a directory for you.</li><li><strong>Use existing directory</strong>: If your authentication keys are already located in a directory on your laptop, specify its location relative to your home directory. Select the <strong>Use Access Keys from Composer directory?</strong> check box if your keys are stored in the specified directory.</li></ul></td>
    </tr>

    <tr>
        <td>Environment configuration</td>
        <td><p>Choose which of the following software to install:</p> <ul><li><a href="{{ page.baseurl}}/config-guide/mq/rabbitmq-overview.html">RabbitMQ</a> (required for Magento EE, can be installed optionally for {{site.data.var.ce}})</li><li><a href="http://devdocs.magento.com/guides/v2.1/config-guide/redis/config-redis.html#config-redis-overhtml">Redis</a> for full-page cache</li><li>Redis for the default Magento cache</li><li>Redis for session cache</li><li><a href="{{ page.baseurl}}/config-guide/varnish/config-varnish.html#config-varnish-over.html">Varnish</a> for HTTP acceleration</li><li><a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-overview.html#overview">Elasticsearch</a> (used by Magento EE 2.1 and later only, can be installed optionally for Magento CE)</li></ul></td>
    </tr>
</tbody>
</table>

{% endcollapsibleh2 %}

## Run scripts {#devbox-root-dir}
After you finish the DevBox wizard, you're prompted to download a `.zip` file to any folder on your system. When you extract the `.zip` file, your operating system might create another folder.

In the following example, the user downloaded `build-18c4e4d3c5a541f37e9cffd35f1bf74e.zip` to a `C:\magento` folder on Windows. Extracting the `.zip` created a subfolder.

    C:\magento\build-18c4e4d3c5a541f37e9cffd35f1bf74e\build-18c4e4d3c5a541f37e9cffd35f1bf74e

An equivalent folder on Mac OS follows:

    /Users/me/Downloads/build-18c4e4d3c5a541f37e9cffd35f1bf74e

The preceding sample paths are referred to as the _DevBox root folder_.

To run the scripts, you should open a DOS command prompt (Windows) or Terminal (Mac) window and change to the DevBox root folder.

The following DevBox scripts and configuration files are located in the root folder:

*   `m2devbox-init.[bat|sh]` which starts the DevBox installation.
*   `m2devbox-reset.[bat|sh]` which restarts the DevBox installation.

    You can run this script, for example, after you stop and start your computer or Docker. DevBox assigns new ports to services. You can do the following:

    *   To set static listen ports that don't change every time you restart a container, see [Set static listen ports](#devbox-static-port) _before_ you run `m2devbox-init.[bat|sh]`
    *   To find the listen ports currently being used, see [Stop, start, restart, and view port mappings]({{ page.baseurl}}/install-gde/docker/docker-commands.html#cloud-docker-cmds-stopstart).

*   `docker-compose.yml` DevBox configuration file.

    To set static listen ports so you don't have to reconfigure PhpStorm every time you start DevBox, see [Set static ports](#devbox-static-port).
*   _Windows only_: `m2devbox-unison-sync.bat`, which runs Unison file synchronization. You should not run this script by itself; one of the other scripts starts it automatically.
*   _Mac OS only_: `m2devbox-debug.sh`, which opens an SSH tunnel to the {% glossarytooltip 57f1b0dc-1341-466d-a685-e0dbf5a3b713 %}Docker{% endglossarytooltip %} container so PhpStorm can connect to it.

<div class="bs-callout bs-callout-info" markdown="1">
When you run the installation script on Windows, an additional command window opens for Unison sync. You don't normally need to interact with this command window.

Do not close the Unison sync window; otherwise, files you change won't be added to the Magento docroot.
</div>

### Set static listen ports {#devbox-static-port}
By default, every time you start a Docker container, all listen ports are reassigned randomly. To cause DevBox to use the same listen ports every time you restart, you must modify `docker-compose.yml` _before you initialize_ DevBox for the first time.

To set static listen ports:

1.  Open `docker-compose.yml` in a text editor.

    It's located in the root directory to which you downloaded DevBox.
2.  Locate the `ports:` section.
3.  Precede the default listen port with a free port number followed by `:`

    An example follows.

        ports:
           - "12345:80"
           - "54321:22"

    The preceding example causes the web container to listen on port 12345 and SSH to listen on port 54321.

    <div class="bs-callout bs-callout-warning" id="warning" markdown="1">
    Make sure the ports you assign to DevBox are not used by another process.
    </div>
4.  Save your changes to `docker-compose.yml` and exit the text editor.

#### Next step
[PhpStorm prerequisites]({{ page.baseurl}}/install-gde/docker/docker-phpstorm-prereq.html)

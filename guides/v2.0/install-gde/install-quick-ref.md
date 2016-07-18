---
layout: default
group: install_pre
subgroup: Getting Started
title: Installation quick reference (tutorial)
menu_title: Installation quick reference (tutorial)
menu_node: parent
menu_order: 1
version: 2.0
github_link: install-gde/install-quick-ref.md
---

We know it's challenging to install the Magento software. We'd like to help you by simplifying the process as much as possible.

This topic assumes:

*	You have your own Magento server (you're not using a shared hosting provider).
*	You're starting the installation using `composer create-project`, which enables you to get the most recent Magento software and to add your own customizations to it, if desired.
*	Everything is installed on one host (database, web server, and so on).
*	The host you're installing on is either Ubuntu or CentOS. 

	(You can use the same instructions to install on other UNIX distributions like RedHat Enterprise Linux (RHEL), or Debian, but these instructions aren't for Mac or Windows.)
*	Your host's IP address is 192.0.2.5
*	You're installing to the `magento2` subdirectory under your web server's docroot (full path is `/var/www/html/magento2`)

	You can optionally set up static routing or a virtual host to install to a host name instead of an IP but that's beyond the scope of this topic.

We've broken the installation process into three main parts: getting started, installing, and post-installation. We hope that what follows helps you; if you'd like to suggest improvements, click **Edit this page on GitHub** at the top of this page and let us know.

## Precondition: How advanced are you?
Do you know what a "terminal" application is? Do you know what operating system your server runs? Do you know what Apache is? 

If not, see the <a href="{{page.baseurl}}install-gde/bk-install-guide.html">Installation overview</a>.

## Installation part 1: Getting started
1.	See the System Requirements:

	*	[Version 2.0.x]({{ page.baseurl }}install-gde/system-requirements.html)
	*	[Version 2.1.x]({{ page.baseurl }}install-gde/system-requirements-tech.html)
2.	If your system lacks any requirements, see the prerequisites documentation:

	*	<a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a>
	*	<a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html">PHP (Ubuntu)</a>
	*	<a href="{{page.baseurl}}install-gde/prereq/php-centos.html">PHP (CentOS)</a>
	*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>
3.	Just as importantly, set up the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a> on the server.
4.	Switch to the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).

### Get the Magento software
When all prerequisites have been met, get the Magento software using Composer as follows:

	cd <web server docroot directory>
	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition magento2

You're required to authenticate; see <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">Get your authentication keys</a> for details. This downloads Magento code only; it doesn't install the software for you.

<div class="bs-callout bs-callout-tip">
	<p>Alternatively, you can also download a <a href="{{page.baseurl}}install-gde/install/get-software.html">Magento software archive</a>.</p>
</div>

{% include install/file-system-perms-before.md %}

## Installation part 2: Installing the Magento software
You can choose to install the Magento software using either a <a href="{{page.baseurl}}install-gde/install/web/install-web.html">web-based Setup Wizard</a> or using the <a href="{{page.baseurl}}install-gde/install/cli/install-cli.html">command line</a>.

#### Command line installation

{% collapsible Click to view the command-line installation %}

The following example shows how to install using the command line with the following options:

*	The Magento software is installed in the `/var/www/html/magento2` directory, which means your storefront URL is `http://192.0.2.5/magento2/`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	Uses server rewrites

*	The Magento administrator has the following properties:

	*	First and last name are `Magento User`
	*	User name is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

		php /var/www/html/magento2/bin/magento setup:install --base-url=http://192.0.2.5/magento2/ \
		--db-host=localhost --db-name=magento --db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --use-rewrites=1

Optionally switch to <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">developer mode</a>.

	cd <your Magento install dir>/bin
	php magento deploy:mode:set developer

{% endcollapsible %}

#### Web Setup Wizard

{% collapsible Click to view the Web Setup Wizard installation %}

The following example shows how to install using the Web Setup Wizard with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot, which means your storefront URL is `http://192.0.2.5/magento2/`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	The Magento administrator has the following properties:

	*	User name is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

To run the Web Setup Wizard:

1.	Enter the following URL in your browser's address or location field:

		http://192.0.2.5/magento2
2.	At the welcome page, click **Agree and Setup Magento**.

	![You must accept the license agreement to install the Magento software]({{ site.baseurl }}common/images/install_qr_wizard-welcome.png){:width="200px"}
3.	Step 1: Readiness Check verifies your system is ready to install the Magento software.

	Click **Start Readiness Check**

	![The Readiness Check makes sure your system is ready for the Magento software]({{ site.baseurl }}common/images/install_qr_readiness.png){:width="400px"}

	*	If the readiness check passes, click **Next** and continue with the next step.
	*	If the readiness check fails, see [Readiness check issues]({{ page.baseurl }}install-gde/trouble/readiness/tshoot_rc_main.html)
4.	Step 2: Add a Database enables you to set up your Magento database.

	![Set up your Magento database]({{ site.baseurl }}common/images/install_qr_database.png){:width="400px"}
5.	Step 3: Web Configuration enables you to enter the storefront and Magento Admin URLs.

	![Enter your storefront and Magento Admin URLs]({{ site.baseurl }}common/images/install_qr_web.png){:width="400px"}
6.	Step 4: Customize Your Store enables you to enter a default store currency, time zone, and language.

	![Customize the store's language, time zone, currency]({{ site.baseurl }}common/images/install_qr_store.png){:width="400px"}
7.	Step 5: Create Admin Account enables you to set up a Magento administrator. This user can perform all actions in the Magento Admin.

	![Create a Magento administrator account]({{ site.baseurl }}common/images/install_qr_admin.png){:width="400px"}
8.	Step 6: Install starts the installation when you click **Install Now**.

	You can optionally expand **Console Log** to see installation messages while the installation is in progres.

	If errors display, see TBD.

{% endcollapsible %}


## Installation part 3: Post-installation
*	<a href="{{page.baseurl}}install-gde/install/verify.html">Verify the installation</a> was successful.
*	<a href="{{page.baseurl}}install-gde/trouble/tshoot.html">Troubleshoot issues</a> if necessary.
*	Learn about the <a href="{{page.baseurl}}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade</a> for future updates.

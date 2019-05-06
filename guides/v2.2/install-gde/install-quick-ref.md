---
group: installation-guide
subgroup: 01_resource
title: Installation quick reference (tutorial)
menu_title: Installation quick reference (tutorial)
menu_node:
menu_order: 2
functional_areas:
  - Install
  - System
  - Setup
---

We know it's challenging to install the Magento software. We'd like to help you by simplifying the process as much as possible.

This topic assumes:

*	You have your own Magento server (you're not using a shared hosting provider).
*	You're starting the installation using `composer create-project`, which enables you to get the most recent Magento software and to add your own customizations to it, if desired.
*	Everything is installed on one host (database, web server, and so on).
*	The host you're installing on is either Ubuntu or CentOS.

	(You can use the same instructions to install on other UNIX distributions like RedHat Enterprise Linux (RHEL), or Debian, but these instructions aren't for Mac or Windows.)
*	Your host's IP address is `192.0.2.5`.

	This is just an example IP address that you'll see in detailed examples throughout this topic. You can substitute it with whatever internal/external IP address matches your server.

*	You're installing to the `magento2` subdirectory under your web server's docroot (full path is `/var/www/html/magento2`)

	You can optionally set up static routing or a virtual host to install to a hostname instead of an IP but that's beyond the scope of this topic.

We've broken the installation process into three main parts: getting started, installing, and post-installation. We hope that what follows helps you; if you'd like to suggest improvements, click **Edit this page on GitHub** at the top of this page and let us know.

## Precondition: How advanced are you?

Do you know what a "terminal" application is? Do you know what operating system your server runs? Do you know what Apache is?

If not, see the [Installation overview]({{ page.baseurl }}/install-gde/bk-install-guide.html).

## Installation part 1: Getting started

1.	See the [system requirements]({{ page.baseurl }}/install-gde/system-requirements.html).
2.	If your system lacks any requirements, see the prerequisites documentation:

	*	[Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
	*	[PHP (Ubuntu)]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html)
	*	[PHP (CentOS)]({{ page.baseurl }}/install-gde/prereq/php-centos.html)
	*	[MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
3.	Just as importantly, set up the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) on the server.
4.	Switch to the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.

### Get the Magento software

When all prerequisites have been met, get the Magento software using {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} as follows:

	cd <web server docroot directory>
	composer create-project --repository=https://repo.magento.com/ magento/project-community-edition magento2

You're required to authenticate; see [Get your authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) for details. This downloads Magento code only; it doesn't install the software for you.

{:.bs-callout .bs-callout-tip}
Alternatively, you can also download a [Magento software archive]({{ page.baseurl }}/install-gde/install/get-software.html).

{% include install/file-system-perms-before_22.md %}

## Installation part 2: Installing the Magento software

You can choose to install the Magento software using either a [web-based Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html) or using the [command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html).

#### Command line installation

{% collapsible Click to view the command-line installation %}

The following example shows how to install using the command line with the following options:

*	The Magento software is installed in the `/var/www/html/magento2` directory, which means your storefront URL is `http://192.0.2.5/magento2/`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the username and password are both `magento`

*	Uses server rewrites

*	The Magento administrator has the following properties:

	*	First and last name are `Magento User`
	*	Username is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

		php /var/www/html/magento2/bin/magento setup:install --base-url=http://192.0.2.5/magento2/ \
		--db-host=localhost --db-name=magento --db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --use-rewrites=1

Optionally switch to [developer mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html).

	cd <magento_root>/bin
	php magento deploy:mode:set developer

{% endcollapsible %}

#### Web Setup Wizard

{% collapsible Click to view the Web Setup Wizard installation %}

The following example shows how to install using the Web Setup Wizard with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot, which means your storefront URL is `http://192.0.2.5/magento2/`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the username and password are both `magento`

*	The Magento administrator has the following properties:

	*	Username is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

To run the Web Setup Wizard:

1.	Enter the following URL in your browser's address or location field:

		http://192.0.2.5/magento2/setup
2.	At the welcome page, click **Agree and Setup Magento**.

	![You must accept the license agreement to install the Magento software]({{ site.baseurl }}/common/images/install_qr_wizard-welcome.png){:width="200px"}
3.	Step 1: Readiness Check verifies your system is ready to install the Magento software.

	Click **Start Readiness Check**

	![The Readiness Check makes sure your system is ready for the Magento software]({{ site.baseurl }}/common/images/install_qr_readiness.png){:width="400px"}

	*	If the readiness check passes, click **Next** and continue with the next step.
	*	If the readiness check fails, see [Readiness check issues]({{ page.baseurl }}/install-gde/trouble/readiness/tshoot_rc_main.html)
4.	Step 2: Add a Database enables you to set up your Magento database.

	![Set up your Magento database]({{ site.baseurl }}/common/images/install_qr_database.png){:width="400px"}
5.	Step 3: Web Configuration enables you to enter the storefront and Magento Admin URLs.

	![Enter your storefront and Magento Admin URLs]({{ site.baseurl }}/common/images/install_qr_web.png){:width="400px"}
6.	Step 4: Customize Your Store enables you to enter a default store currency, time zone, and language.

	![Customize the store's language, time zone, currency]({{ site.baseurl }}/common/images/install_qr_store.png){:width="400px"}
7.	Step 5: Create Admin Account enables you to set up a Magento administrator. This user can perform all actions in the Magento Admin.

	![Create a Magento administrator account]({{ site.baseurl }}/common/images/install_qr_admin.png){:width="400px"}
8.	Step 6: Install starts the installation when you click **Install Now**.

	You can optionally expand **Console Log** to see installation messages while the installation is in progress.

{% endcollapsible %}

## Installation part 3: Post-installation

*	[Verify the installation]({{ page.baseurl }}/install-gde/install/verify.html) was successful.
*	Learn about the [Component Manager and System Upgrade]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html) for future updates.

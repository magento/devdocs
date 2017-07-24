---
layout: default
group: cloud
subgroup: 080_setup
title: Install Magento
menu_title: Install Magento
menu_order: 50
version: 2.0
github_link: cloud/before/before-setup-env-install.md
redirect_from:
  - /guides/v2.0/cloud/before/before-setup-env-perms.html
  - /guides/v2.1/cloud/before/before-setup-env-perms.html
  - /guides/v2.2/cloud/before/before-setup-env-perms.html
---

#### Previous step:
[Branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)

With your workspace prepared, install Magento on your local to verify custom code, extensions, and more. This section includes the installation prep, options, and post-installation configuration you should complete.

## Prepare to install Magento

To be able to customize the Magento software on your local machine, you should install it using the following information:

*	Host name or IP address of your machine
*	{% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} user name, password, and URI you created earlier

Before you begin, list the environment variables.

	magento-cloud variable:get -e <environment ID>

The following results provides an example of variables:

	+----------------+---------------+-----------+------+
	| ID             | Value         | Inherited | JSON |
	+----------------+---------------+-----------+------+
	| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
	| ADMIN_URL      | magento_A8v10 | Yes       | No   |
	| ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
	+----------------+---------------+-----------+------+

## Install Magento

Installation of Magento onto your local supports a command line option or a Web Setup Wizard. The CLI option also supports a Composer installation with sample data. For best information on your installation options and steps, see the [Installation Roadmap]({{ page.baseurl }}install-gde/install-roadmap_cli.html).

After installing prerequisties, cloning the project and branch, configuring SSH keys, and adding Magento authentication keys, make sure to [Update installation dependencies]({{ page.baseurl }}install-gde/install/prepare-install.html). With the Magento respository cloned, you need to update and resolve any dependencies using Composer commands.

To install, use one of the following options:

* [Install the Magento software using the command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)
* [Install the Magento software using the Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)

For example, using the command line method:

1. Switch to the user:

		sudo su - magento
2. Change directories for the installation:

		cd /app/bin
3. Enter a CLI command with options for entering the name, email, admin credentials, URL, and additional information. For a list of all options, see [Installer help commands]({{ page.baseurl }}install-gde/install/cli/install-cli-install.html#instgde-cli-help-cmds).

		php magento setup:install \
  		--admin-firstname=John \
  		--admin-lastname=Smith \
  		--admin-email=jsmith@mail.com \
		  --admin-user=admin \
		  --admin-password=password1 \
		  --base-url=http://magento.local/ \
		  --db-host=localhost \
		  --db-name=magento \
		  --db-user=magento \
		  --db-password=magento \
		  --currency=USD \
		  --timezone=America/Chicago \
		  --language=en_US \
		  --use-rewrites=1

## Post-install configurations
After installing Magento, [compile]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html) and [deploy]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-static-view.html) the code:

	php magento setup:di:compile
	php magento setup:static:deploy

## Magento store URI
To get the URI for the Magento store, enter this command:

	php bin/magento info:adminuri

##
After you have installed Magento, you need to set the file system permissions and ownership.

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :<web server group> .
		chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}

## Local workspace completed
With these steps completed, you should have:
* Magento ECE account and initial project setup
* A local workspace configured with installations of required software, Magento ECE CLI, and Magento
* SSH keys set up
* The Magento file system owner configured
* A branch for your code
* Magento authentication keys set up

Begin developing and testing in your branch.

#### Related topics
[Deployment workflow]({{ page.baseurl }}cloud/before/before-setup-env-perms.html)

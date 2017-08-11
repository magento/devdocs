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

## Set the docroot
Set the docroot to the /magento directory until you complete all setup. If you change the DOCROOT to /magento/pub prior to completion, you will encounter issues running the Web Setup Wizard.

For the Production environment, you should set the docroot to /magento/pub, which helps restrict access to vulnerable areas of the system. The webserver DOCROOT should be set to /magento/pub only after Magento is installed (including any upgrades and patches), configured, and static files have been generated and populated in /magento/pub. Alternatively, you could also create a subdomain (for example, install.domain.com) and configure your webserver's DOCROOT to the Magento installed root folder.

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
After installing Magento, run the commands for [compile]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html) and [deploy]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-static-view.html) for the code:

1. If you are not in the correct Magento user, switch:

	sudo su - magento
2. Change directory to `app/bin`.
3. Run the compile command:

		php magento setup:di:compile
3. When complete, Run the deploy command:

		php magento setup:static:deploy

Optionally, if you used Vagrant with the hostmanager plugin, update the hosts file:

1. Access the localdev root for the Vagrant box.
2. Enter the command `vagrant hostmanager` to update the hosts file.

## Set file system permissions and ownership {#file-system-permissions}
After you have installed Magento, you need to set the file system permissions and ownership.

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :<web server group> .
		chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}

## Additional software and services
For Integration development, you may also want to install additional tools, software, and services.

* [Redis]({{ page.baseurl }}cloud/project/project-conf-files_services-redis.html)
* [ElasticSearch]({{ page.baseurl }}cloud/project/project-conf-files_services-elastic.html)
* [RabbitMQ]({{ page.baseurl }}cloud/project/project-conf-files_services-rabbit.html)
* [Additional software]({{ page.baseurl }}install-gde/prereq/optional.html) for Magento

## Verify your local workspace
To verify the local, access the store using the URL you passed in the install command. For this example, the local Magento store should load using http://magento.local/. The Admin panel should open using http://magento.local/admin. If you change the URI for the Admin panel, use this command to locate it:

	php bin/magento info:adminuri

To verify the Integration master branch environment, log into the Project Web Interface and select your named project. In the list of branches, select the Master. Click Access site to pull up a list of URLs (HTTP and HTTPS) and click the preferred link to open the site. To view the admin, add /admin or other configured Admin URI.

![Click Access for list of URLs]({{ site.baseurl }}common/images/cloud-project-master-access.png){:width="297px"}

With these steps completed, you should have:

* Magento Commerce account and initial project setup and master branch
* A local workspace configured with installations of required software, Magento Cloud CLI, and Magento
* SSH keys set up
* The Magento file system owner configured
* Your initial code branch
* Magento authentication keys set up and configured in the project and local

## Next steps
We strongly recommend fully deploying this base Magento template `master` branch without any code or configuration changes to Staging and Production.

#### Next step:
[First time deployment]({{ page.baseurl }}cloud/access-acct/first-time-deploy.html)

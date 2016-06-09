<div markdown="1">

## Installation and upgrade instructions {#ce-rn-install}
You can install Magento Community Edition 2.1 from either Github or by using Composer. 

See one of the following sections:

*	[Install from GitHub](#install-rc-gh)
*	[Install using Composer](#install-rc-composer)
*	[Upgrade existing installations](#upgrade-rc-nosamp)

### Install from GitHub {#install-rc-gh}
Before proceeding, please familiarize yourself with these prerequisites, then run

	git clone git@github.com:magento/magento2.git

	git checkout tags/2.1.0 [-b 2.1.0]

### Install using Composer
The Magento software is available from `repo.magento.com`. Before installing using Composer, familiarize yourself with the Composer metapackage  <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run 

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.1.0 <installation directory name>

## Upgrade existing installations {#upgrade-rc-nosamp}
This section discusses how to upgrade to version 2.1.


### Upgrade using the Setup Wizard
Use the instructions in [Start System Upgrade]({{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html). 

### Upgrade an existing installation from the GitHub repository
Developers who contribute to the CE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

### Upgrade using the command line

{% collapsible To upgrade to version 2.1 using the command line: %}

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following commands in the order shown:

		composer require <product> 2.1.0 --no-update
		composer update

	To upgrade to Magento CE 2.1, enter:

		composer require magento/product-community-edition 2.1.0 --no-update
		composer update

	To upgrade to Magento EE 2.1, enter:

		composer require magento/product-enterprise-edition 2.1.0 --no-update
		composer update
	
3.	If prompted, enter your [authentication keys]({{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html).
4. Update the database schema and data:

		php bin/magento setup:upgrade

{% endcollapsible %}
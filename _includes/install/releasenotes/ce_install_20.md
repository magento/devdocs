<div markdown="1">
 
## Install the Magento software
See one of the following sections:

*	[Get Magento CE using Composer](#install-ce-composer)
*	[Get Magento CE using a compressed archive](#get-zip)
*	[Get the Magento CE software from GitHub](#install-rc-gh)
*	[Complete the installation](#install-complete)

### Get the Magento CE software using Composer {#install-ce-composer}
{:.no_toc}

This software is available from `repo.magento.com`. Before installing the CE software using Composer, familiarize yourself with the Composer metapackage  <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run 

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=<version> <installation directory name>

where `<version>` matches the version you want (for example, `2.0.8`)

For example, to install Magento CE 2.0.8 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.0.8 magento2

### Get the Magento CE software from GitHub {#install-rc-gh}
{:.no_toc}

Before proceeding, please familiarize yourself with [these prerequisites]({{ page.baseurl }}install-gde/prereq/dev_install.html), then run

	git clone git@github.com:magento/magento2.git
	cd magento2
	git checkout tags/<version> [-b <version>]

where 

`<version>` matches the version you want (for example, `2.0.8`)

`[-b <version>]` optionally checks out a new branch.

### Get Magento CE using a compressed archive {#get-zip}
{:.no_toc}

{% include install/releasenotes/get-ce-software_zip.md %}

### Complete the installation {#install-complete}
{:.no_toc}

After you get the CE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the Magento software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)

## Upgrade from an earlier version {#upgrade}
To upgrade to version 2.0.x from an earlier version:

*	[Web Setup Wizard (System Upgrade)]({{ page.baseurl }}comp-mgr/upgrader/upgrade-start.html)
*	[Command-line upgrade]({{ page.baseurl }}comp-mgr/cli/cli-upgrade.html)

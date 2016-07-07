<div markdown="1">
 
## Installation and upgrade instructions
See one of the following sections:

*	[Get Magento EE using Composer](#install-rc-composer)
*	[Get Magento EE using a compressed archive](#get-zip)
*	[Upgrade from an earlier version](#upgrade)

### Get Magento EE using Composer {#install-rc-composer}
This Release Candidate is available from `repo.magento.com`. Before installing the Magento EE software using Composer,  familiarize yourself with these  <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=<version> <installation directory name>

where `<version>` matches the version you want (for example, `2.0.8`)

For example, to install 2.0.8 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.0.8 magento2

### Get Magento EE using a compressed archive {#get-zip}
{% include install/get-software_zip.md %}

### Complete the installation {#install-complete}
After you get the EE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the Magento software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)

### Upgrade from an earlier version {#upgrade}
To upgrade to version 2.0.x from an earlier version:

*	[Web Setup Wizard (System Upgrade)]({{ page.baseurl }}comp-mgr/upgrader/upgrade-start.html)
*	[Command-line upgrade]({{ page.baseurl }}comp-mgr/cli/cli-upgrade.html)


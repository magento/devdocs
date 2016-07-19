<div markdown="1">
 
## Installation and upgrade instructions
See one of the following sections:

*	[Get Magento EE using Composer](#install-rc-composer)
*	[Get Magento EE using a compressed archive](#get-zip)
*	[Upgrade from an earlier version](#upgrade)

A Release Candidate is for testing purposes only. Do not install it in a production environment.

### Get Magento EE using Composer {#install-rc-composer}
{:.no_toc}

Magento EE is available from `repo.magento.com`. Before installing the Magento EE software using Composer,  familiarize yourself with these  <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=<version> <installation directory name>

where `<version>` is `2.1.0` (GA release) or `2.1.0-rc3` for Release Candidate 3 (RC3)

For example, to install 2.1.0 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.1.0 magento2

### Get Magento EE using a compressed archive {#get-zip}
{:.no_toc}

{% include install/releasenotes/get-ee-software_zip.md %}

### Complete the installation
{:.no_toc}

After you get the EE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)

### Upgrade from an earlier version
To upgrade to Magento EE 2.1 from an earlier version, see [Upgrade to Magento version 2.1 (June 22, 2016)]({{ page.baseurl }}release-notes/tech_bull_21-upgrade.html).
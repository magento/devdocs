<div markdown="1">

## Installation and upgrade instructions
You can install Magento Enterprise Edition 2.1 (including a Release Candidate) using Composer. 

A Release Candidate is for testing purposes only. Do not install it in a production environment.

### Get Magento EE using Composer {#install-rc-composer}
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer,  familiarize yourself with these  <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=<version> <installation directory name>

where `<version>` is `2.1.0` (GA release) or `2.1.0-rc3` for Release Candidate 3 (RC3)

For example, to install 2.1.0 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.1.0 magento2

### Complete the installation
After you get the EE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)

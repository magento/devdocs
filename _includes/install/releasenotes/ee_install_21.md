<div markdown="1">

## Installation and upgrade instructions
You can install Magento Enterprise Edition 2.1 (including a Release Candidate) using Composer. 

This Release Candidate is for test purposes only. Do not install it in a production environment.

See one of the following sections:

*	[Install using Composer](#install-rc-composer)
*	[Upgrade existing installations](#upgrade-rc-nosamp)
*	[Upgrade to Magento 2.1 with sample data](#upgrade-rc-samp) 

### Install using Composer {#install-rc-composer}
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer,  familiarize yourself with these  <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=<version> <installation directory name>

where `<version>` is `2.1.0-rc1`, `2.1.0-rc2`, or `2.1.0-rc3`

For example, to install 2.1 RC3 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.0.1-rc3 magento2

## Upgrade existing installations {#upgrade-rc-nosamp}
Upgrade instructions are discussed in [Upgrade to Magento version 2.1 (June 22, 2016)]({{ site.gdeurl }}comp-mgr/release-notes/tech_bull_21-upgrade.html).
<div markdown="1">

## Installation and upgrade instructions
You can install Magento Enterprise Edition 2.1 (including a Release Candidate) from either Github or by using Composer. 

<div class="bs-callout bs-callout-warning">
    <p><em>Do not</em> install or upgrade to a Release Candidate on a production system. Upgrade to a Release Candidate on a development system only.</p>
</div>

See one of the following sections:

*	[Install from GitHub](#install-rc-gh)
*	[Install using Composer](#install-rc-composer)
*	[Upgrade existing installations](#upgrade-rc-nosamp)
*	[Upgrade to Magento 2.1 with sample data](#upgrade-rc-samp)

### Install from GitHub {#install-rc-gh}
Before proceeding, please familiarize yourself with these prerequisites, then run

	git clone git@github.com:magento/magento2.git
	cd magento2
	git checkout tags/<version> [-b <version>]

where 

`<version>` is `2.1.0-rc1`, `2.1.0-rc2`, or `2.1.0-rc3`

`[-b <version]` optionally checks out a new branch.

### Install using Composer {#install-rc-composer}
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer, familiarize yourself with the Composer metapackage  <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run 

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=<version> <installation directory name>

where `<version>` is `2.1.0-rc1`, `2.1.0-rc2`, or `2.1.0-rc3`

For example, to install Magento CE RC3 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.1.0-rc3 magento2

## Upgrade existing installations {#upgrade-rc-nosamp}
This section discusses how to upgrade to Magento version 2.1 (including a Release Candidate) *without* sample data.

If you installed optional sample data, see [Upgrade to an RC with sample data](#upgrade-rc-samp) instead.

<div class="bs-callout bs-callout-warning">
    <p><em>Do not</em> upgrade to a Release Candidate on a production system. Upgrade to a Release Candidate on a development system only.</p>
</div>

### Upgrade from the GitHub repository
Developers who contribute to the CE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

### Other upgrades
Other upgrade instructions are discussed in [Upgrade to Magento version 2.1 (June 22, 2016)]({{ site.gdeurl }}comp-mgr/release-notes/tech_bull_21-upgrade.html).


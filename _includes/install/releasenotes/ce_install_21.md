<div markdown="1">
 
## Installation and upgrade instructions
You can install Magento Enterprise Edition 2.1 (including a Release Candidate) from either Github or by using Composer. 

<div class="bs-callout bs-callout-warning">
    <p><em>Do not</em> install or upgrade to a Release Candidate on a production system. Upgrade to a Release Candidate on a development system only.</p>
</div>

### Get the Magento CE software from GitHub {#install-rc-gh}
Before proceeding, please familiarize yourself with these prerequisites, then run

	git clone git@github.com:magento/magento2.git
	cd magento2
	git checkout tags/<version> [-b <version>]

where 

`<version>` is `2.1.0` (GA release), `2.1.0-rc3`

`[-b <version]` optionally checks out a new branch.

### Get the Magento CE software using Composer {#install-rc-composer}
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer, familiarize yourself with the Composer metapackage  <a href="{{page.baseurl}}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run 

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=<version> <installation directory name>

where `<version>` is `2.1.0` (GA release), or a Release Candidate; for example, `2.1.0-rc3`

For example, to install Magento CE RC3 in the `magento2` directory:

	composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.1.0 magento2

### Complete the installation
After you get the CE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)
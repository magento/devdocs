

## Install the Magento software

See one of the following sections:

*	[Get Magento Commerce using Composer](#install-rc-composer)
*	[Get Magento Commerce using a compressed archive](#get-zip)
*	[Complete the installation](#install-complete)

### Get Magento Commerce using Composer {#install-rc-composer}
{:.no_toc}

Magento Commerce (formerly Enterprise Edition) is available from `repo.magento.com`. Before installing the Magento Commerce software using Composer,  familiarize yourself with these  [prerequisites]({{ page.baseurl }}/install-gde/composer.html), then run:


	composer create-project --repository=https://repo.magento.com/ magento/project-enterprise-edition=<version> <installation directory name>

where `<version>` is `2.1.0`, `2.1.1`, and so on

For example, to install 2.1.1 in the `magento2` directory:

	composer create-project --repository=https://repo.magento.com/ magento/project-enterprise-edition=2.1.1 magento2

### Get Magento Commerce using a compressed archive {#get-zip}
{:.no_toc}

{% include install/releasenotes/get-ee-software_zip.md %}

### Complete the installation {#install-complete}
{:.no_toc}

After you get the Commerce software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html).
2.	Install the software:

	*	[Web Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html)

## Upgrade from an earlier version

To upgrade to Magento Commerce 2.1 from an earlier version, see [Upgrade to Magento version 2.1 (June 22, 2016)]({{ site.baseurl }}/guides/v2.1/release-notes/tech_bull_21-upgrade.html).



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

These instructions apply to anyone upgrading to {{site.data.var.ce}} or {{site.data.var.ee}}  version 2.1 (including a Release Candidate). 

See one of the following sections for more information:

*	[Upgrade to Magento Open Source or Commerce version 2.1 *without* sample data](#tb-upgr-nosamp)
*	[Upgrade to Magento Open Source or Commerce version 2.1 with sample data](#tb-upgr-samp)
*	[Enterprise Edition only: Web Setup Wizard upgrade to Magento Commerce version 2.1 with sample data](#tb-upgr-samp-wiz)

### Upgrade to Magento Open Source or Commerce version 2.1 *without* sample data {#tb-upgr-nosamp}

Upgrades to version 2.1 without sample data can fail because of an issue with the Magento `composer-installer` component. It doesn't correctly detect code changes and therefore doesn't update the [cache](https://glossary.magento.com/cache) and compiled code directories properly. As a result, fatal errors display during the upgrade.

To address the issue, you must apply a patch.

#### Get the patch

Use the following instructions to get the patch named `MDVA-532.*`, then transfer it to your Magento server.

{% collapsible To get the patch: %}

{% include install/patch/get-patch.md %}

{% endcollapsible %}

#### Apply the patch

As the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html), extract the patch in your Magento installation directory.

{% collapsible To apply the patch: %}

{% include install/patch/apply-patch.md %}

For example, to change to the `magento_user` and extract `MDVA-532.zip` into `/var/www/magento2`, enter:

	su magento_user && cd /var/www/magento2 && unzip -o MDVA-532.zip

{% endcollapsible %}

#### Complete your upgrade

After applying the patch, complete your upgrade as follows:

*	[Command-line upgrade]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html)
*	[Start System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html)

### Command-line upgrade to Magento Open Source or Commerce version 2.1 with sample data {#tb-upgr-samp}

{%include install/sampledata/sample-data-rc1-cli.md %}

### Commerce only: Web Setup Wizard upgrade to Magento Commerce version 2.1 with sample data {#tb-upgr-samp-wiz}

Upgrades to Magento Commerce 2.1 with sample data can fail because of the following issues:

*	An issue with the Magento `composer-installer` component. It doesn't correctly detect code changes and therefore doesn't update the cache and compiled code directories properly. As a result, fatal errors display during the upgrade.

	We have a patch that resolves this issue.
*	Magento's `composer.lock` file specifies a non-existent component type; this issue prevents the upgrade with sample data from completing successfully.

	You can edit `composer.lock` to fix this issue.

#### Get the patch

Use the following instructions to get the patch named `MDVA-532.*`, then transfer it to your Magento server.

{% collapsible To get the patch: %}

{% include install/patch/get-patch-ee.md %}

{% endcollapsible %}

#### Apply the patch

As the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html), extract the patch in your Magento installation directory.

{% collapsible To apply the patch: %}

{% include install/patch/apply-patch.md %}

For example, to change to the `magento_user` and extract `MDVA-532.zip` into `/var/www/magento2`, enter:

	su magento_user && cd /var/www/magento2 && unzip MDVA-532.zip

{% endcollapsible %}

#### Fix `composer.lock`

{% collapsible To fix composer.lock: %}

1.	As the Magento file system owner, open `<magento_root>/composer.lock` in a text editor.
2.	Change the following entry.

	from:

		"type": "magento2-module-customer-balance",

	to:

		"type": "magento2-module",
3.	Save your changes to `composer.lock` and exit the text editor.

{% endcollapsible %}

#### Manually clear directories

Manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

A sample command follows:

	rm -rf var/cache/* var/page_cache/* var/generation/*

#### Start the upgrade

Start your upgrade as discussed in [Start System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html).

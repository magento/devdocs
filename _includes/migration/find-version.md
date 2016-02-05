<div markdown="1">

### Find the Magento software version {#magento-version}
To find the version of the Magento software:

*	If you downloaded the Magento software using a Composer metapackage, enter the following command:

		php <your Magento install dir>/bin/magento --version
*	If you cloned the Magento 2 GitHub repository, enter the following commands:

		cd <your Magento 2 clone directory>
		git branch

	If you're currently in the `develop` branch, you must change to a <a href="{{ site.gdeurl }}install-gde/install/cli/dev_downgrade.html">released branch</a> before you continue.

### Find the Data Migration Tool version {#migration-tool-version}

To find the version of the migration tool:

1.	Change to your Magento install directory.
2.	Open `composer.json` in a text editor.
3.	In the `require` section, locate the value of `"magento/data-migration-tool"`.

	This is the version of your Data Migration Tool.

	If `"magento/data-migration-tool"` is absent, you haven't installed the Data Migration Tool yet.
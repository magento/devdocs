<div markdown="1">

## Remove sample data modules or update sample data {#instgde-prereq-sample-intro}

This topic discusses how to:

*	[Remove sample data modules](#inst-sample-remove) from the Magento installation `composer.json`

	This option does *not* remove sample data from the database.
*	[Prepare to update sample data](#inst-sample-reset) (for example, before updating the Magento application).

## First steps {#sample-first}

{% include install/first-steps-cli.html %}

## Remove sample data modules {#inst-sample-remove}
Enter the following command:

	magento sampledata:remove 

<!-- where `[module-list]` is an optional space-separated list of sample data modules to install. Omit this parameter to remove all sample data modules.

The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %} -->

Wait while sample data is removed.

<h2 id="inst-sample-reset">Prepare to update sample data</h2>
This command enables you to update sample data before you update the Magento application.

To prepare sample data for updating, enter the following command:

	magento sampledata:reset

After that, <a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">update the Magento application</a>.
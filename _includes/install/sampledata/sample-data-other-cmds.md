<div markdown="1">

<h2 id="instgde-prereq-sample-intro">Remove or update sample data</h2>
This topic discusses how to:

*	<a href="#inst-sample-remove">Remove sample data</a> from your Magento installation (this option does *not* affect other Magento data or database tables)
*	<a href="#inst-sample-reset">Prepare to update sample data</a> (for example, before updating the Magento application)

<h2 id="sample-first">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="inst-sample-remove">Remove sample data</h2>
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

After that, <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">update the Magento application</a>.
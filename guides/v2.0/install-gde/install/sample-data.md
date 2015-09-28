---
layout: default 
group: SampleData
subgroup: T_SampleData
title: Install the optional sample data module
menu_title: Install the optional sample data module
menu_node: parent
menu_order: 1 
github_link: install-gde/install/sample-data.md
redirect_from: /guides/v1.0/install-gde/install/sample-data.html
--- 

## Install sample data after the Magento software

This topic discusses how to install optional Magento sample data *after* you install the Magento software. If you haven't installed Magento, go <a href="{{ site.gdeurl }}install-gde/install/install-web-sample-data.html">here</a>.

{% include install/sample-data.html %} 

<h2 id="sample-next-steps">Next steps</h2>
Continue with the next section to complete the installation.

<h2 id="instgde-install-sample-enable-after">Finish installing sample data</h2>
To complete the sample data installation, enter the following commands in the order shown:

	<path to Magento 2 bin dir>/magento setup:upgrade
	<path to Magento 2 bin dir>/magento sampledata:install <your Magento administrator user name>

For example,

	/var/www/magento2/bin/magento setup:upgrade
	/var/www/magento2/bin/magento sampledata:install admin



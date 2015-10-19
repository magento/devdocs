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

This topic discusses how to install optional Magento sample data *after* you install the Magento software. If you haven't installed Magento, go <a href="{{ site.gdeurl }}install-gde/install/web/install-web-sample-data.html">here</a>.

{% include install/sample-data.html %} 

<h2 id="sample-next-steps">Next steps</h2>
After you install the sample data, log in to your Magento server as, or switch to, the Magento file system owner and enter the following command:

	php <your Magento install dir>/bin magento setup:upgrade

If errors display when you go to the storefront, set file system permissions and ownership again.



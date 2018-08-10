---
group: install_trouble
subgroup: 03_install
title: Unknown module Magento_BundleSampleData
menu_title: Unknown module Magento_BundleSampleData
menu_node:
menu_order: 400
version: 2.1
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During the installation, a  message similar to the following displays: 

	[ERROR] exception 'LogicException' with message 'Unknown module in the requested list: 'Magento_BundleSampleData'' 

### Solution

Try each of the following one at a time, then try your installation again.

1.	As a user with `root` privileges, restart your web server and MySQL.

	*	nginx: `service nginx restart`
	*	Apache (Ubuntu): `service apache2 restart`
	*	Apache (CentOS): `service httpd restart`
	*	MySQL (Ubuntu): `service mysql restart`
	*	MySQL (CentOS): `service mysqld restart`
2.	Run the [Web Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html).

	On Step 4: Customize Your Store, expand **Advanced Modules Configurations** and clear the **Magento_BundleSampleData** checkbox as the following figure shows.

	![Clear the Magento_ModuleSampleData checkbox]({{ site.baseurl }}/common/images/install_tshoot_bundlesample.png)
3.	Clear all browser history and data from your web browser.
4.	If you have Chrome, clear all browser data related to your site.

	Go to **Settings** > **Advanced options** > **Privacy** > **Content Settings** > **All cookies and site data**. In the Site column, click the address of your Magento server and click **Remove All**.
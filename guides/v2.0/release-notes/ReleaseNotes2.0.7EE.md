---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.7 Release Notes 
menu_title: Magento EE 2.0.7 Release Notes 
menu_order: 14
github_link: release-notes/ReleaseNotes2.0.7EE.md
---

<h2>Magento Enterprise Edition 2.0.7</h2>
We are pleased to present Magento Enterprise Edition 2.0.7. This release includes  several functional fixes.


Backward-incompatible changes are documented in <a href="{{ site.gdeurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Fixed issues</h3>

* Resolved multiple issues with the accurate display of the contents of the cart, mini cart, and checkout,  including:

	* Estimated shipping and taxes. Previously, these values were not always displayed consistently. 

	* Checkout. Previously, the checkout process did not display all items.

	* Contents of the mini cart. Previously, mini cart sometimes appeared empty when it actually contained items.

	* When a user first logged in, the User menu did not display the expected information about him.



* The payment gateway now works as expected in a Magento installation running PHP 7.0.3. Previously, when you would place an order in an installation running PHP 7.0.3, the checkout page would become unresponsive, and the transaction would not appear in the payment gateway.




<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="{{ site.gdeurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.7 from an archive file.

#####<b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.7**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0 through 2.0.6 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. 


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the Admin panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the on-screen instructions to complete the upgrade.

For more information, see <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.

#####<b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the <a href="https://magento.com/partners/become-a-partner" target="_blank">Partner Portal</a>.
2.	Under Magento Enterprise Edition, choose **Magento Enterprise Edition 2.x**.
3.	Find the **Magento Enterprise Edition 2.x Release**, and choose **Version 2.0.7**.

<h3>Migration toolkits</h3>
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.









---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.0.5 Release Notes 
menu_title: Magento EE 2.0.5 Release Notes 
menu_order: 698
version: 2.0
github_link: release-notes/ReleaseNotes2.0.5EE.md
---

<h2>Magento Enterprise Edition 2.0.5</h2>
We are pleased to present Magento Enterprise Edition 2.0.5. This release includes miscellaneous functional fixes. 


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



<h3>Fixed issues</h3>


<h4> Upgrade and Installation</h4>

<!-- 50224 --> *  Magento no longer assumes hard-coded root category IDs or default category IDs. Previously, Magento used hard-coded IDs for these values, which could produce inconsistent data during store installation.


<h4>Import/Export</h4>

<!-- 46245 --> * Product import now works successfully in a multi-store environment. Previously, Magento would display the following error message,  “URL key for specified store already exists”, when importing products into a multi-store configuration. 

<!-- 48722 --> * Export performance has been enhanced.  Pages no longer hang randomly, and CPU usage is no longer pegged.  <a href="https://github.com/magento/magento2/issues/3217" target="_blank">(GITHUB-3217)</a>

<h4>Database</h4>

<!-- 49004 --> * Magento no longer duplicates queries to the database from the Catalog page. Instead, if Magento has already loaded specific data during request processing, it re-uses it instead of duplicating the query. 

<!-- 49003 --> * Magento no longer duplicates SQL queries on CMS and Category pages. Previously, significant duplications occurred. 


<h4>Miscellaneous</h4> 

<!-- 47255 --> * Selecting the Use Aggregated Data option now correctly displays Dashboard data. <a href="https://github.com/magento/magento2/issues/3459" target="_blank">(GITHUB-3459)</a>


<!-- 51074 --> * Magento now displays the expected color swatch when you select a color swatch for a configurable product. Previously, Magento did not change the color when you selected a swatch.

<!-- 48659 -->* HTML template magnification now properly handles commented code.


<!-- 48760 --> * Deleting one of several custom options no longer deletes all options. Previously, deleting one option from the Product page also deleted all other custom options. <a href="https://github.com/magento/magento2/issues/2989" target="_blank">(GITHUB-2989)</a>  


<!-- 50279 --> * When Full Page Cache (FPC) is enabled, the CAPTCHA image differs for every user. Previously, the CAPTCHA image on the registration page remained the same for every customer after FPC was enabled.

<!-- 50195 --> * Google no longer indexes the Admin URL. Previously, Google indexed the Admin side meta tag. The frontend meta tag was not affected. 


<!-- 43959 --> * Magento no longer sends a subscription success email whenever a customer enters his email address to subscribe to a newsletter. Users receive a "thank you for your subscription" message and a subscription success email only when registering for the first time. 

<!-- 47458 --> * Guests can now successfully click on the product page link for any item in an emailed shared wishlist. 

<!-- 50912 --> * Custom customer attributes are now saved at checkout. 



<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
[System Requirements]({{ site.baseurl }}magento-system-requirements.html){:target="_blank"}.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.5 from an archive file.

##### <b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.5**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


##### <b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the Admin panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.

##### <b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the <a href="https://magento.com/partners/become-a-partner" target="_blank">Partner Portal</a>.
2.	Under Magento Enterprise Edition, choose **Magento Enterprise Edition 2.x**.
3.	Find the **Magento Enterprise Edition 2.x Release**, and choose **Version 2.0.5**.

<h3>Migration toolkits</h3>
The <a href="{{page.baseurl}}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{page.baseurl}}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.









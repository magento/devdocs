---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.0.5 Release Notes 
menu_title: Magento CE 2.0.5 Release Notes 
menu_order: 9
version: 2.0
github_link: release-notes/ReleaseNotes2.0.5CE.md
---

<h2>Magento Community Edition 2.0.5</h2>
We are pleased to present Magento Community Edition 2.0.5. This release includes miscellaneous functional fixes. 


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

<!-- 48659 -->* HTML template minification now properly handles commented code.


<!-- 48760 --> * Deleting one of several custom options no longer deletes all options. Previously, deleting one option from the Product page also deleted all other custom options. <a href="https://github.com/magento/magento2/issues/2989" target="_blank">(GITHUB-2989)</a>  


<!-- 50279 --> * When Full Page Cache (FPC) is enabled, the CAPTCHA image differs for every user. Previously, the CAPTCHA image on the registration page remained the same for every customer after FPC was enabled.

<!-- 50195 --> * Google no longer indexes the Admin URL. Previously, Google indexed the Admin side meta tag. The frontend meta tag was not affected. 


<!-- 43959 --> * Magento no longer sends a subscription success email whenever a customer enters his email address to subscribe to a newsletter. Users receive a "thank you for your subscription" message and a subscription success email only when registering for the first time. 

<!-- 47458 --> * Guests can now successfully click on the product page link for any item in an emailed shared wishlist. 

<!-- 50912 --> * Custom customer attributes are now saved at checkout. 



<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later support PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="http://devdocs.magento.com/guides/v2.0/install-gde/system-requirements.html" target="_blank">System Requirements</a>.

<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Community Edition 2.0.5 from an archive file on the <a href="https://www.magentocommerce.com/download" target="_blank">Download</a> page.

#####<b>Download a new installation</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Community Edition Download</a> page.

2. Under Full Release, select a format for the download archive file. Then, click **Download**.

3.	Follow the Magento <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/integrator_install.html#integrator-first-composer-ce" target="_blank">installation instructions</a>.

#####<b>Install a new installation with Composer</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Community Edition Download</a> page.

2.	Under **Download with Composer**, click **Download**.

3.	Follow the instructions to download Composer, and get the Magento CE metapackage.


<h4><b>Upgrade existing installations</b></h4>
If you installed Magento Community Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1.	Log in to Admin with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.


#####<b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the CE codebase can <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update Composer.

<h3>Migration toolkits</h3>
The <a href="{{page.baseurl}}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{page.baseurl}}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.













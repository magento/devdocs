---
layout: default
group: release-notes
subgroup: Release Notes
title: Release Notes
menu_title: Magento CE Release Notes 
menu_order: 1
github_link: release-notes/ReleaseNotes2.0.5CE.md
redirect_from: 
---

<h2>Magento Community Edition 2.0.5</h2>
We are pleased to present Magento Community Edition 2.0.5. This release includes miscellaneous performance and API enhancements. 


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Fixed issues</h3>

<h4> Upgrade and Installation</h4>
<!-- 47999 --> * Magento now successfully registers installed themes in the theme table during production mode.  (GITHUB-2797)

<!-- 50224 --> *  Magento no longer assumes hard-coded root category IDs or default category IDs. Previously, Magento used hard-coded IDs for these values, which could produce inconsistent data during store installation.

<!-- 51693 --> * Zip archives on **repo.magento.com** are now compressed.


<h4>Performance</h4>

<!-- 48722 --> * Export performance has been enhanced.  Pages no longer hang randomly, and CPU usage is no longer pegged.  (GITHUB-3217)

<!-- 50752 --> * The performance of the Sync button has been enhanced.   



<h4>APIs</h4>

<!-- 46720 --> * The Orders API now exposes the shipping address. This corrects an issue with using this API to integrate with third-party systems. (GITHUB-2628)

<!-- 50299 --> * When you create a shipment and invoice using the REST API, order status now changes as expected from Processing to Complete. Previously, Magento would create the order invoice and shipment, but would continue to display order status  as Processing.

<!-- 48526 -->* The Credit Memo API now correctly refunds orders or updates an order's status. Previously, credit memos created through APIs did not update order status or make refunds.  



<h4>Miscellaneous</h4> 

<!-- 47255 --> * (GITHUB-3459)


<!-- 51074 --> * Magento now displays the expected color swatch when you select a color swatch for a configurable product. Previously, Magento did not change the color when you selected a swatch.

<!-- 48659 -->* HTML template magnification now properly handles commented code.


<!-- 49003 --> * Magento no longer duplicates SQL queries on CMS and Category pages. Previously, significant duplications occurred. 

<!-- 48760 --> * Deleting one of several custom options no longer deletes all options. Previously, deleting one option from the Product page also deleted all other custom options. (GITHUB-2989)  

<!-- 50195 --> * Google no longer indexes the Admin URL. Previously, Google indexed the Admin side meta tag. The frontend meta tag was not affected. 


<!-- 50279 --> * When FPC is enabled, the CAPTCHA image differs for every user. Previously, the CAPTCHA image on the registration page remained the same for every customer after FPC was enabled.

<!-- 46287 --> * You can now use Redis for session storage without modifying the <code>php.ini</code> file. You can also lock session storage to prevent simultaneous write access. 

<!-- 50507 --> * Resetting the Product Attributes Mass Update Admin form works as expected. Previously, resetting the form resulted in an exception error. 


<h4>Custom attributes</h4>

<!-- 50912 --> * Custom customer attributes are now saved at checkout. 

<!-- 51416 --> * Magento now loads custom attribute values for customer and address forms. 




<h4>Security enhancements</h4>
This release includes several enhancements to improve the security of your Magento 2.0 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 

<!-- 51806  --> *  Magento no longer permits an unauthenticated user to remotely execute doc on the server. Previously, an unauthenticated user could remotely execute PHP code on the server using either REST or SOAP APIs. (These APIs are enabled by default in most installations.) 

<!-- 51807 --> *  The Magento installation code is no longer accessible once the installation process has completed. Previously, an unauthenticated user could execute PHP code on the server because the installation process would leave the <code>/app/etc</code> directory writable, and many administrators would not change the permissions on this directory after installation. (During installation, the system requires the <code>/app/etc</code> directory to be writeable.)
 

<!-- 51808 --> *  Magento no longer allows authenticated customers to change their information using either SOAP or REST calls.  Magento  now confirms that the ID of the customer whose account is being edited matches the authentication token in use. Previously, a malicious user could hijack a customer account by logging in as an authenticated user, then editing the account of any other user.  (The SOAP and REST APIs are enabled by default in most installations.)

<!-- 51390 --> * Anonymous users can no longer retrieve the private data of registered customers. To prevent malicious attacks of this type, the <code>quote_id_mask</code> table of the Quote API no longer includes a <code>cart id mask</code> value. 



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











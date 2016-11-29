---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.0.4 Release Notes
menu_title: Magento CE 2.0.4 Release Notes 
menu_order: 5
version: 2.0
github_link: release-notes/ReleaseNotes2.0.4CE.md
---

<h2>Magento Community Edition 2.0.4</h2>
We are pleased to present Magento Community Edition 2.0.4. This release includes all of the security enhancements and performance improvements of Magento 2.0.3, in improved packaging. **You must download and install 2.0.4 to ensure that you receive all the security enhancements of 2.0.3**. 


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Fixed issues</h3>

<h4> Upgrade and Installation</h4>
<!-- 50224 -->* Magento no longer creates store data inconsistently during installation. 

<!-- 47531 -->* During upgrade, the `setup:config:set` script no longer deletes values in the `env.php` file. 


<h4>Import</h4>
<!-- 50255 -->* Magento now successfully imports existing products as well as products that use custom URLs. 


<h4>APIs</h4>
<!-- 46720 --> * The Orders API now exposes the shipping address. This corrects an issue with using this API to integrate with third-party systems. 

<!-- 49558 --> * The SOAP API now returns attributes of type "text swatch" and "visual swatch" when you use the API to add attribute options. Previously, this feature did not work for these attribute types.  


<h4>PHP</h4>
<!-- 50500 -->* Magento now allows you to use arguments of `url` type in nested arrays. Previously, you could pass route parameters only if the `url` argument was declared at the top level.  


<h4>Miscellaneous</h4>
<!-- 47704 -->* Magento no longer displays HTML tags in messages. 

<!-- 48781 --> * Product performance has been enhanced when loading catalog products with multiple color swatches. 

<!-- 47844 -->* Magento now successfully saves and displays new customer attributes. 

<!-- 49449--> * Magento performance has been improved by the removal of redundant get requests that previously occurred during shopping cart refresh.



<h4>Security enhancements</h4>
This release includes several enhancements to improve the security of your Magento 2.0 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 

<!-- 45887 -->* Issue with persistent cross-site scripting through a user account has been resolved. 

<!-- 50608 -->*  Magento now supports setting limits on password attempts. Previously, Admin and Customer Token API access did not limit the number of attempts to enter a password, inadvertently allowing brute force attempts to guess passwords. 

<!-- 50611 -->* APIs that previously granted access to anonymous users are now configured to require a higher permission level.  Default product behavior does not permit anonymous access to Catalog, Store and CMS APIs. However, if you would like to allow anonymous access, you can change this setting. 


<!-- 48819 -->* Magento now prevents the arbitrary execution of PHP code through the language package CSV file. 

<!-- 47050 -->* The encryption keys that are generated in **System > Manage Encryption Key** have been strengthened. 

<!-- 50755 -->* Reflected XSS can no longer occur through the Authorizenet module’s redirect data. 

We recommend that you review Magento's <a href="http://merch.docs.magento.com/ce/user_guide/magento/magento-security-best-practices.html" target="_blank">Security Best Practices</a>, and confirm that all safeguards are in place to protect your system from compromise. Use this occasion to examine your system for indications of possible attack, such as strange administrator accounts, unfamiliar files on the server, etc. To receive direct notification from our security team regarding any emerging issues and solutions, sign up for the <a href="https://magento.com/security/sign-up" target="_blank">Security Alert Registry</a>.


<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later support PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
[System Requirements]({{ site.baseurl }}magento-system-requirements.html){:target="_blank"}.

<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Community Edition 2.0.4 from an archive file on the <a href="https://www.magentocommerce.com/download" target="_blank">Download</a> page.

##### <b>Download a new installation</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Community Edition Download</a> page.

2. Under Full Release, select a format for the download archive file. Then, click **Download**.

3.	Follow the Magento <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/integrator_install.html#integrator-first-composer-ce" target="_blank">installation instructions</a>.

##### <b>Install a new installation with Composer</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Community Edition Download</a> page.

2.	Under **Download with Composer**, click **Download**.

3.	Follow the instructions to download Composer, and get the Magento CE metapackage.


<h4><b>Upgrade existing installations</b></h4>
If you installed Magento Community Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


##### <b>Upgrade an existing installation from the Setup Wizard</b>#####

1.	Log in to Admin with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.


##### <b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the CE codebase can <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update Composer.











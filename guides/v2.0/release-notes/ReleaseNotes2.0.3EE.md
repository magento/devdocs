---
layout: default
group: release-notes
subgroup: Release Notes
title: Release Notes
menu_title: Magento EE Release Notes 
menu_node: 
menu_order: 1
github_link: release-notes/ReleaseNotes2.0.3EE.md
redirect_from: 
---

<h2>Magento Enterprise Edition 2.0.3</h2>
This release includes multiple functional fixes and performance enhancements. It also addresses five security issues, as described in Security enhancements.  


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

<h3>Fixed issues</h3>

<h4> Upgrade and Installation</h4>
<!-- 50224 -->* inconsistent data during installation of store

<!-- 47531 -->* During update, the `setup:config:set` script no longer deletes values. 


<h4>Import</h4>
<!-- 50255 -->* You can now successfully import products that meet these two criteria: they already exist in the product catalog,  and they use custom URLs. 


<h4>APIs</h4>
<!-- 46720 --> * The Orders API now exposes Shipping address. This corrects a problem users of Magento 2.x experienced using this API to integrate with third-party systems. 

<h4>PHP</h4>
<!-- 50500 -->* Magento now allows the use of arguments of `url` type in nested arrays. Previously, you could pass route parameters only if the `url` argument was declared at the top level.  

<h4>Miscellaneous</h4>
<!-- 47704 -->* Magento no longer displays HTML tags in messages. 

<!-- 48081 -->* Source files now display 2016 copyright statement. 

<!-- 48781 --> * Product performance has been enhanced when loading catalog products with multiple color swatches. 

<!-- 47844 -->* Magento now successfully saves and displays new customer attributes. 

<!-- 47685 --> * The Google Tag Manager module now sends impressions to the Magento Data layer.

<!-- 48124 --> * Admin users can now view orders only from stores for which they have view  permission.


<h4>Security enhancements</h4>
This release includes several enhancements to improve the security of your Magento 2.0.3 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issues in greater detail in the Magento Security Center. See the link that follows each issue for its specific discussion. 

<!-- 45887 -->* Issues with persistent cross-site scripting have been resolved. Previously, during customer registration on the storefront, a user could provide an email address that contained JavaScript code. Magento now properly validates this email address and executes it in Admin context when viewing the order in the backend. See APPSEC-1263 for more information. 

<!-- 50608 -->*  Magento now supports setting limits on password attempts. Previously, Admin and customer token API access did not limit the number of attempts to enter a password, inadvertently allowing brute force attempts to guess passwords. See APPSEC-1377 for more information.

<!-- 50611 -->* <!-- 50611 -->* Many REST APIs that previously granted access to anonymous users can now be configured to require a higher permission level.  See APPSEC-1378 for more information.


<!-- 48819 -->* arbitrary PHP code execution. See APPSEC-1337 for more information.

<!-- 47050 -->* The encryption keys that are generated in **System -> Manage Encryption Key** have been strengthened. See APPSEC-1303 for more information.

We recommend that you review Magento’s Security Best Practices, and confirm that all safeguards are in place to protect your system from compromise. Use this occasion to examine your system for indications of possible attack, such as strange administrator accounts, unfamiliar files on the server, etc. To receive direct notification from our security team regarding any emerging issues and solutions, sign up for the Security Alert Registry.



<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6x, 7.0.2, and MySQL 5.6. For more information, see 
<a href="http://devdocs.magento.com/guides/v2.0/install-gde/system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.3 from an archive file on the <a href="https://www.magentocommerce.com/download" target="_blank">Download</a> page.

#####<b>Download a new installation</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Enterprise Edition Download</a> page.

2. Under Full Release for version 2.0.3, select a format for the download archive file. Then, click **Download**.

3.	Follow the Magento <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install-quick-ref.html" target="_blank">installation instructions</a>.

#####<b>Install a new installation with Composer</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Enterprise Edition Download</a> page.

2.	Under **Download with Composer**, click **Download**.

3.	Follow the instructions to download Composer, and get the Magento EE metapackage.

<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2 must first update the installer from the command line. Then, update the installation from the <a href="http://http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1.	1.	Log in to Admin with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.


#####<b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the EE codebase can <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">upgrade manually</a> from the Magento EE GitHub repository.

1.	Go to the <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update Composer.










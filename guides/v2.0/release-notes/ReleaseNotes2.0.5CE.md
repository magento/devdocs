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
We are pleased to present Magento Community Edition 2.0.5. This release includes all . 


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Fixed issues</h3>

<h4> Upgrade and Installation</h4>
<!--  -->* 
<!--  -->*  


<h4>Import</h4>
<!--  -->* . 


<h4>APIs</h4>
<!--  --> * . 

<!--  --> * .  


<h4>PHP</h4>
<!--  -->* .  


<h4>Miscellaneous</h4>
<!--  -->* . 

<!--  --> * . 

<!--  -->* . 

<!-- --> * .



<h4>Security enhancements</h4>
This release includes several enhancements to improve the security of your Magento 2.0 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 

<!--  -->* 

<!--  -->*   

<!--  -->* 


<!--  -->* 

<!--  -->* 

<!-- 50755 -->* 

We recommend that you review Magento's <a href="http://merch.docs.magento.com/ce/user_guide/magento/magento-security-best-practices.html" target="_blank">Security Best Practices</a>, and confirm that all safeguards are in place to protect your system from compromise. Use this occasion to examine your system for indications of possible attack, such as strange administrator accounts, unfamiliar files on the server, etc. To receive direct notification from our security team regarding any emerging issues and solutions, sign up for the <a href="https://magento.com/security/sign-up" target="_blank">Security Alert Registry</a>.


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











---
layout: default
group: release-notes
subgroup: Release Notes
title: Release Notes
menu_title: Magento EE Release Notes 
menu_order: 2
github_link: release-notes/ReleaseNotes2.0.5EE.md
redirect_from: 
---

<h2>Magento Enterprise Edition 2.0.5</h2>
We are pleased to present Magento Enterprise Edition 2.0.5. This release includes all . 


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

<h3>Fixed issues</h3>

<h4> Upgrade and Installation</h4>
<!--  -->*  

<!--  -->*  


<h4>Import</h4>
<!--  -->*  


<h4>APIs</h4>
<!--  --> * 


<!--  --> *   


<h4>PHP</h4>
<!--  -->*  

<h4>Miscellaneous</h4>
<!-- 50716 -->* Error in Admin Log archive. No longer displays error. Previously, if you selected Admin > Admin Log > Archive and chose archive, you'd receive the following error:  ‘DateTime::__construct(): Failed to parse time string (2016022707) at position 8 (0): Unexpected character. 


<!-- 51074 --> * Magento now displays the expected color swatch when you select a color swatch for a configurable product. Previously, Magento was not changing the color swatch when you selected a color swatch.

<!-- 48659 -->* HTML template magnification now properly handles commented code. 

<!-- 49003 --> * Magento no longer duplicates SQL queries on CMS and Category pages. Previously, significant duplications occurred. 

<!-- 48760 --> * Deleting one of several custom options no longer deletes all options. Previously, deleting one option from the Product page also deleted all other custom options.  
<!-- 50195 --> * Google no longer indexes the Admin URL. Previously, Google was indexing the Admin side metatag. The frontend metatag is not affected. 



<h4>Security enhancements</h4>
This release includes several enhancements to improve the security of your Magento 2.0 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 



We recommend that you review Magento's <a href="https://magento.com/security/best-practices/security-best-practices.html" target="_blank">Security Best Practices</a>, and confirm that all safeguards are in place to protect your system from compromise. Use this occasion to examine your system for indications of possible attack, such as strange administrator accounts, unfamiliar files on the server, etc. To receive direct notification from our security team regarding any emerging issues and solutions, sign up for the <a href="https://magento.com/security/sign-up" target="_blank">Security Alert Registry</a>.



<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="http://devdocs.magento.com/guides/v2.0/install-gde/system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.5 from an archive file.

#####<b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.5**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the Admin panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.

#####<b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the <a href="https://magento.com/partners/become-a-partner" target="_blank">Partner Portal</a>.
2.	Under Magento Enterprise Edition, choose **Magento Enterprise Edition 2.x**.
3.	Find the **Magento Enterprise Edition 2.x Release**, and choose **Version 2.0.5**.











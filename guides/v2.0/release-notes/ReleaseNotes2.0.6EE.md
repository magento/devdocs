---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.0.6 Release Notes 
menu_title: Magento EE 2.0.6 Release Notes 
menu_order: 256
level3_menu_node: level3child
level3_subgroup: ee20-relnotes
version: 2.0
github_link: release-notes/ReleaseNotes2.0.6EE.md
---

<h2>Magento Enterprise Edition 2.0.6</h2>
We are pleased to present Magento Enterprise Edition 2.0.6. This release includes security enhancements as well as several functional fixes and enhancements.

<div class="bs-callout bs-callout-warning">
    <p>2.0.6 contains important security updates. Please update to this version or use the latest available Magento version when starting a new project.</p>
</div>


Backward-incompatible changes are documented in <a href="{{page.baseurl}}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



<h3>Fixed issues</h3>


<!--- 51847 --> * Varnish no longer returns a 400 bad request error message when clearing its cache. Previously, this issue occurred with Magento instances running on GoDaddy. 



<h3>Functional enhancements</h3>

<!-- 52322 --> * Starting with Magento 2.0.6, Magento provides a more flexible way for you to set file ownership and permissions. Instead of setting permissions explicitly, you only need to make sure files and directories are writable for installation. We provide different suggestions for doing this, depending on whether you access your Magento server with one user account (typical of shared hosting) or two user accounts (typical of private hosting or having your own server). After installation, to further restrict access to files and directories, you can optionally create a file named `magento_umask` in your Magento root directory. By default, the `umask` is 002, which means that directories have 775 permissions and files have 664 permissions. For more details, see  <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system ownership and permissions</a>. 



<!-- 51809 -->* You can now use the Redis adapter to provide session storage in Magento 2.0.6. For more information, see <a href="{{page.baseurl}}config-guide/redis/config-redis.html">Redis for session storage</a>. 


<h4>Security enhancements</h4>
This release includes  enhancements to improve the security of your Magento installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 

<!-- 51806 -->*  Magento no longer permits an unauthenticated user to remotely execute code on the server through APIs. 


<!-- 51808 -->*  Magento no longer allows authenticated customers to change other customers' account information using either SOAP or REST calls.  Magento  now confirms that the ID of the customer whose account is being edited matches the authentication token in use. 

<!-- 51390 -->* Anonymous users can no longer retrieve the private data of registered customers. To prevent malicious attacks of this type, the <code>quote_id_mask</code> table of the Quote API no longer includes a <code>cart id mask</code> value. 

<!-- 51461 -->* Several parameters in the Authorize.net payment module are vulnerable to reflected Cross-Site Scripting (XSS) attacks. Existing protection against such malicious parameters is not enough to stop all types of attacks. 



<!-- 52187 -->* Magento no longer allows users with minimum privileges (for example,  access to the dashboard only) to force re-installation of Magento, which could allow them to potentially execute malicious code.
 


<!-- 51807 -->*  The Magento installation code is no longer accessible once the installation process has completed.  

<!-- 51292 -->* When an integration is created, Magento now bases the OAuth consumer key expiration from when the token exchange begins instead of when the consumer key is created. <a href="https://github.com/magento/magento2/issues/3449" target="_blank">(GITHUB-3449)</a>

<!-- 51392 -->* Only a registered customer can assign a guest cart to himself. Previously, an anonymous user could modify the state  (that is, set an active quote) of a registered customer. 


<!-- 51370 -->* Magento no longer discloses information about its internal path during installation. 


<!-- 51376 -->* Magento no longer discloses the administrator URL to an unauthenticated user during setup. 


<!-- 50955 -->* Application error messages no longer include the path to the file where the error occurred.  


<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="{{ site.baseurl }}magento-system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.6 from an archive file.

##### <b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.6**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4/2.0.5 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="{{page.baseurl}}release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


##### <b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the Admin panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="{{page.baseurl}}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.

##### <b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the <a href="https://magento.com/partners/become-a-partner" target="_blank">Partner Portal</a>.
2.	Under Magento Enterprise Edition, choose **Magento Enterprise Edition 2.x**.
3.	Find the **Magento Enterprise Edition 2.x Release**, and choose **Version 2.0.6**.

<h3>Migration toolkits</h3>
The <a href="{{page.baseurl}}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{page.baseurl}}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.









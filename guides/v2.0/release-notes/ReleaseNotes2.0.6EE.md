---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.6 Release Notes 
menu_title: Magento EE 2.0.6 Release Notes 
menu_order: 12
github_link: release-notes/ReleaseNotes2.0.6EE.md
---

<h2>Magento Enterprise Edition 2.0.6</h2>
We are pleased to present Magento Community Edition 2.0.6. This release includes security enhancements as well as several functional fixes.

Functional features include the ability to use <a href="http://devdocs.magento.com/guides/v2.0/config-guide/redis/config-redis.html">Redis for session storage</a> and a change to our default file permissions strategy that provides a more flexible way to set file ownership and permissions.  

Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



<h3>Fixed issues</h3>


<!-- 51809 -->* You can now use the Redis adapter to provide session storage in Magento 2.0.6. (51807)


<!-- 46287 -->* You can now use Redis for session storage without modifying the <code>php.ini</code> file. You can also lock session storage to prevent simultaneous write access. (46287)

<!-- 52322 --> * Starting with Magento 2.0.6, Magento provides a more flexible way for you to set file ownership and permissions. Instead of setting permissions explicitly, we enable you to create a file named `mage_umask` in your Magento root directory. By default, the umask is `002`, which means that files have 775 permissions and directories have 664 permissions. For more details, see <a href="http://devdocs.magento.com/prereq/apache-user.html">Magento file system ownership and permissions</a>. (52322)

<!-- 52612 --> * (56212)

<!--- 51847 --> * Varnish no longer returns a 400 bad request error message when clearing its cache. Previously, this issue occurred with Magento instances running on GoDaddy. (51847)



<h4>Security enhancements</h4>
This release includes  enhancements to improve the security of your Magento 2.0 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 

<!-- 50955 -->* Application error messages no longer include the path to the file where the error occurred.  (50955)


<!-- 51808 -->*  Magento no longer allows authenticated customers to change other customers' account information using either SOAP or REST calls.  Magento  now confirms that the ID of the customer whose account is being edited matches the authentication token in use. (51808)

<!-- 51390 -->* Anonymous users can no longer retrieve the private data of registered customers. To prevent malicious attacks of this type, the <code>quote_id_mask</code> table of the Quote API no longer includes a <code>cart id mask</code> value. (51390)


<!-- 52187 -->* Magento now works as expected when a user with minimum privileges logs in. For example, if a user with limited system privilege (for example,  access to the Admin dashboard only) had previously logged in, the Magento instance would not work. (52187)


<!-- 51806 -->*  Magento no longer permits an unauthenticated user to remotely execute code on the server through APIs. Previously, an unauthenticated user could remotely execute PHP code on the server using either REST or SOAP APIs. (These APIs are enabled by default in most installations.) (51806)

<!-- 51807 -->*  The Magento installation code is no longer accessible once the installation process has completed. (51807)

<!-- 51292 -->* When an integration is created, Magento now bases the OAuth consumer key expiration from when the token exchange begins instead of when the consumer key is created. <a href="https://github.com/magento/magento2/issues/3449" target="_blank">(GITHUB-3449)</a>(51292)

<!-- 51392 -->* Only a registered customer can assign a guest cart to himself. Previously, an anonymous user could modify the state  (that is, set an active quote) of a registered customer. (51392)


<!-- 51370 -->* Magento no longer discloses information about its internal path during installation. (51370)


<!-- 51376 -->* Magento no longer discloses the administrator URL to an unauthenticated user during setup. (51376)


<!-- 51461 -->* Several parameters in the Authorize.net payment module are vulnerable to reflected Cross-Site Scripting (XSS) attacks. Existing protection against such malicious parameters is not enough to stop all types of attacks.(51461)


<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="http://devdocs.magento.com/guides/v2.0/install-gde/system-requirements.html" target="_blank">System Requirements</a>.


<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.0.6 from an archive file.

#####<b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.6**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4/2.0.5 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the Admin panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="http://devdocs.magento.com/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.

#####<b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the <a href="https://magento.com/partners/become-a-partner" target="_blank">Partner Portal</a>.
2.	Under Magento Enterprise Edition, choose **Magento Enterprise Edition 2.x**.
3.	Find the **Magento Enterprise Edition 2.x Release**, and choose **Version 2.0.6**.

<h3>Migration toolkits</h3>
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.









---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.6 Release Notes 
menu_title: Magento Commerce 2.0.6 Release Notes 
menu_order: 289
level3_menu_node: level3child
level3_subgroup: ee20-relnotes
---

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.0.6. This release includes security enhancements as well as several functional fixes and enhancements.

{: .bs-callout .bs-callout-warning }
2.0.6 contains important security updates. Please update to this version or use the latest available Magento version when starting a new project.


Backward-incompatible changes are documented in [Magento 2.0 Backward Incompatible Changes]({{ page.baseurl }}/release-notes/changes_2.0.html){: target="_blank"}.

### Fixed issues

<!--- 51847 --> * Varnish no longer returns a 400 bad request error message when clearing its {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}. Previously, this issue occurred with Magento instances running on GoDaddy. 

### Functional enhancements

<!-- 52322 --> * Starting with Magento 2.0.6, Magento provides a more flexible way for you to set file ownership and permissions. Instead of setting permissions explicitly, you only need to make sure files and directories are writable for installation. We provide different suggestions for doing this, depending on whether you access your Magento server with one user account (typical of shared hosting) or two user accounts (typical of private hosting or having your own server). After installation, to further restrict access to files and directories, you can optionally create a file named `magento_umask` in your Magento root directory. By default, the `umask` is 002, which means that directories have 775 permissions and files have 664 permissions. For more details, see  [Magento file system ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html). 



<!-- 51809 -->* You can now use the Redis {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} to provide session storage in Magento 2.0.6. For more information, see [Redis for session storage]({{ page.baseurl }}/config-guide/redis/config-redis.html). 

#### Security enhancements

This release includes  enhancements to improve the security of your Magento installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the [Magento Security Center](https://magento.com/security){: target="_blank"}. 

<!-- 51806 -->*  Magento no longer permits an unauthenticated user to remotely execute code on the server through APIs. 


<!-- 51808 -->*  Magento no longer allows authenticated customers to change other customers' account information using either SOAP or REST calls.  Magento  now confirms that the ID of the customer whose account is being edited matches the authentication token in use. 

<!-- 51390 -->* Anonymous users can no longer retrieve the private data of registered customers. To prevent malicious attacks of this type, the <code>quote_id_mask</code> table of the {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}Quote{% endglossarytooltip %} {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} no longer includes a <code>cart id mask</code> value. 

<!-- 51461 -->* Several parameters in the Authorize.net payment {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} are vulnerable to reflected Cross-Site Scripting (XSS) attacks. Existing protection against such malicious parameters is not enough to stop all types of attacks. 



<!-- 52187 -->* Magento no longer allows users with minimum privileges (for example,  access to the dashboard only) to force re-installation of Magento, which could allow them to potentially execute malicious code.
 


<!-- 51807 -->*  The Magento installation code is no longer accessible once the installation process has completed.  

<!-- 51292 -->* When an integration is created, Magento now bases the OAuth consumer key expiration from when the token exchange begins instead of when the consumer key is created. [(GITHUB-3449)](https://github.com/magento/magento2/issues/3449){: target="_blank"}

<!-- 51392 -->* Only a registered customer can assign a guest cart to himself. Previously, an anonymous user could modify the state  (that is, set an active quote) of a registered customer. 


<!-- 51370 -->* Magento no longer discloses information about its internal path during installation. 


<!-- 51376 -->* Magento no longer discloses the administrator {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} to an unauthenticated user during setup. 


<!-- 50955 -->* Application error messages no longer include the path to the file where the error occurred.  

### System requirements

Our technology stack is built on {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
[System Requirements]({{ site.baseurl }}/magento-system-requirements.html){: target="_blank"}.

### Installation instructions

#### New installations

New users can now complete a full installation of Magento Commerce 2.0.6 from an archive file.

##### <b>Download a new installation</b>#####
1. Go to the [Magento](https://www.magento.com/){: target="_blank"} website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Commerce 2.x**, and do the following:

	a.	Click **Magento Commerce 2.x Release**.

	b.	In the list, choose **Version 2.0.6**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.

#### Upgrade existing installations

If you installed Magento Commerce 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4/2.0.5 must first update the installer from the command line. Then, update the installation from the [Web Setup Wizard](http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html){: target="_blank"} or command line. For detailed instructions, see the [technical bulletin]({{ page.baseurl }}/release-notes/tech_bull_201-upgrade.html){: target="_blank"}.


##### <b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see [Upgrade the Magento installation and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html){: target="_blank"}.

##### <b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the [Partner Portal](https://magento.com/partners/become-a-partner){: target="_blank"}.
2.	Under Magento Commerce, choose **Magento Commerce 2.x**.
3.	Find the **Magento Commerce 2.x Release**, and choose **Version 2.0.6**.

### Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){: target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){: target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){: target="_blank"}.

The [Code Migration Toolkit](https://github.com/magento/code-migration){: target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.









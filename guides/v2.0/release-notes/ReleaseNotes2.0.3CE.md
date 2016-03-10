---
layout: default
group: release-notes
subgroup: Release Notes
title: Release Notes
menu_title: Magento Release Notes 
menu_node: 
menu_order: 1
github_link: release-notes/ReleaseNotes2.0.3CE.md
redirect_from: 
---

<h2>Magento Community Edition 2.0.3</h2>
This release resolves issues that some users encountered while upgrading from Magento 2.0.0 to Magento 2.0.1 using a compressed archive file (.zip, .tar.gz, .tar.bz2). For a detailed description, see the technical bulletin <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">Issues upgrading to 2.0.1</a> (Jan. 28, 2016).

The content of this release does not include changes to the code, and the issues might not directly impact your current installation, provided that:

* You installed Magento 2.0.x using either `git clone` or `composer create-project`.

However, if you installed Magento 2.0.1 from an archive, you will encounter problems later with future upgrades. For this reason, we highly recommend that you upgrade your installation to Magento Community Edition, version 2.0.3.

<h3>Fixed issues</h3>



<h3>System requirements</h3>
Our technology stack is built on PHP and MySQL. Magento 2.0.1 supports PHP 5.5, 5.6x, 7.0.2, and MySQL 5.6. For more information, see 
<a href="http://devdocs.magento.com/guides/v2.0/install-gde/system-requirements.html" target="_blank">System Requirements</a>.

<h3>Installation instructions</h3>

<h4>New installations</h4>
New users can now complete a full installation of Magento Community Edition 2.0.3 from an archive file on the <a href="https://www.magentocommerce.com/download" target="_blank">Download</a> page.

#####Download and install#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Community Edition Download</a> page.

2. Under Full Release for version 2.0.2, select a format for the download archive file. Then, click **Download**.

3.	Follow the Magento <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install-quick-ref.html" target="_blank">installation instructions</a>.

#####Install with Composer#####

1.	Go to the Magento Community Edition <a href="https://www.magentocommerce.com/download" target="_blank">download</a> page.

2.	Under **Download with Composer**, click **Download**.

3.	Follow the instructions to download Composer, and get the Magento CE metapackage.


<h4>Upgrade existing installations</h4>
If you installed Magento Community Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1 must first update the installer from the command line. Then, update the installation from the <a href="http://http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="http://devdocs.magento.com/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


#####Upgrade from the Setup Wizard#####

1.	Log in to your store Admin with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.


#####Upgrade from the GitHub repository#####
Developers who contribute to the CE codebase can <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="http://devdocs.magento.com/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update Composer.











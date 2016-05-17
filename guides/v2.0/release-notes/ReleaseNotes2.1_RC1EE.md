---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.1 Release Candidate 1 Release Notes 
menu_title: Magento EE 2.1 Release Candidate 1 Release Notes 
menu_order: 14
github_link: release-notes/ReleaseNotes2.1_RC1EE.md
---

<h2>Magento Enterprise Edition 2.1 Release Candidate 1</h2>
We are pleased to present Magento 2.1 Release Candidate 1. This release candidate build is not intended for production purposes. Instead, it provides a preview of the new features and fixes that Magento 2.1 GA will contain.

This candidate release also offers the development community an opportunity to contribute to the Magento 2.1 code base by identifying unresolved issues. We welcome your participation in this process on GitHub! For more information on how to contribute on GitHub, see <a href="{{ site.gdeurl }}contributor-guide/contributing.html" target="_blank">Code contributions</a>. 

This Release Candidate is available only on GitHub and repo.magento.com. 

<h3>Highlights</h3>

Magento Enterprise Edition 2.1 includes several new  features:

* **Content Staging and Preview** improves productivity by enabling business teams to easily create, preview, and schedule a wide range of content updates without involving IT. Merchants can make updates to products, categories, CMS content, promotions, and pricing and can preview these changes based on specific dates and times or store views. User-friendly dashboards provide greater visibility into all planned site changes and updates can be automatically deployed at scheduled times.
 
* **Elasticsearch is a next-generation search technology** that is replacing Solr in Magento Enterprise Edition 2.1. It is simpler to set up, able to handle large catalogs, and can easily scale as search volume grows. It supports 33 languages out-of-the-box and merchants can configure stop words and synonyms to ensure high quality search results.

* **PayPal in-context checkout helps to increase conversion rates** 69 bps[1] by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit card capabilities allow merchants to securely store credit cards with PayPal so shoppers can make future purchases without re-entering their credit card information.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive cardholder information in checkout. Merchants retain complete control over their checkout style and layout because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree settlement reports from within the Magento Admin.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.
 
[1] PayPal pilot data comparing in-context experience to full-page experience for 5 Large Enterprise merchants in North America from Q4’14 – Q1’15 found the in-context experience increased conversion rates by 69 bps.









<h3>Technology stack</h3>

Our technology stack is built on PHP and MySQL. Magento 2.1 RC1 supports PHP 5.6 and 7.0.2, and MySQL 5.6.

We do not support PHP 5.5. 


<h3>Installation instructions</h3>


<h4>New installations</h4>
New users can now complete a full installation of Magento Enterprise Edition 2.1 Release Candidate 1 from an archive file.

#####<b>Download a new installation</b>#####
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.1**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


<h4>Upgrade existing installations</h4>
If you installed Magento Enterprise Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4/2.0.5/2.0.6 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="{{ site.gdeurl }}release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.

Readiness check can fail under some circumstances because of incorrect permissions on the `var/session` directory. To resolve this issue, enter the following command:

<code>chmod -R 770 <your Magento install dir>/var/session</code>

For example, enter <code>chmod -R 770 /var/www/magento2/var/session</code>


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1. Log in to the Admin panel with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.

#####<b>Magento Partners</b>#####
Magento partners can download the release and the release notes in PDF format from the Partner Portal.

1.	Log in to the <a href="https://magento.com/partners/become-a-partner" target="_blank">Partner Portal</a>.
2.	Under Magento Enterprise Edition, choose **Magento Enterprise Edition 2.x**.
3.	Find the **Magento Enterprise Edition 2.x Release**, and choose **Version 2.1**.

<h3>Migration toolkits</h3>
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

<h3>Migration toolkits</h3>
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.











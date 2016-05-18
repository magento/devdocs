---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.1 Release Candidate 1 (RC1) Release Notes 
menu_title: Magento CE 2.1 Release Candidate 1 (RC1) Release Notes 
menu_order: 13
github_link: release-notes/ReleaseNotes2.1_RC1CE.md
---

<h2>Magento Community Edition 2.1 Release Candidate 1 (RC1)</h2>

We are pleased to present Magento 2.1 Release Candidate 1 (RC1). This release candidate build is not intended for production purposes. Instead, it provides the development community opportunities to: 

* preview the new features and fixes that Magento 2.1 GA will contain

* contribute to the Magento 2.1 code base by identifying unresolved issues

* test your 2.0 extensions against  2.1 

We welcome your participation in this process! Please file any Community Edition issues on the Community Edition GitHub repository. 

<h3>Highlights</h3>
Magento Community Edition 2.1 includes several new features:


* **PayPal in-context checkout helps to increase conversion rates** by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit card capabilities allow merchants to securely store credit cards with PayPal so shoppers can make future purchases without re-entering their credit card information.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive card holder information in checkout. Merchants retain complete control over their checkout style and layout because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree settlement reports from within the Magento Admin.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin interface, set up global search synonyms, and create new product, category, and CMS content.
 

<h3>Fixed issues</h3>

This release includes fixes for the following GitHub issues:

<!--- 52414 --> * Integration test syntax error has been fixed. <a href="https://github.com/magento/magento2/issues/4343" target="_blank">(GITHUB-4343)</a> 

<!--- 50611--> * Web APIs no longer allow anonymous access by default<a href="https://github.com/magento/magento2/issues/3786" target="_blank">(GITHUB-3786)</a>.

<!--- 51292 --> * The OAuth Token exchange expiration period is now calculated correctly. <a href="https://github.com/magento/magento2/issues/3449" target="_blank">(GITHUB-3449)</a> 

<!--- 46720 --> * Shipping Address is now exposed for the Orders API. <a href="https://github.com/magento/magento2/issues/2628" target="_blank">(GITHUB-2628)</a>


<!--- 52613 --> * A Credit Memo REST API issue with updating attributes has been fixed. Previously, certain attributes (such as Order Status) were not updated when the user took action through the API. However, Magento updates these attributes when the same action is completed in the Admin interface. <a href="https://github.com/magento/magento2/issues/4329" target="_blank">(GITHUB-4329)</a>  

<!--- 52607 --> *  Varnish caching performance has been enhanced. <a href="https://github.com/magento/magento2/issues/3926" target="_blank">(GITHUB-3926)</a> 

<!--- 52316 --> *  Product update operations by either customers or store administrators no longer result in locking queries on catalog category product index.<a href="https://github.com/magento/magento2/issues/4342" target="_blank">(GITHUB-4342)</a> 

<!--- 52079 --> * The Order Repository getList method no longer returns the same shipping address for all orders. <a href="https://github.com/magento/magento2/issues/4019" target="_blank">(GITHUB-4019)</a> 

<!--- 51181 --> * A configurable product's last attribute with price of zero (0) no longer results in an error. The user can configure the product, and the correct price results. <a href="https://github.com/magento/magento2/issues/3912" target="_blank">(GITHUB-3912)</a> 

<!--- 48175 --> * An error message that users typically received during upgrade has been improved. The message now clearly states when a user must login first to `magento.com` before continuing the upgrade process. <a href="https://github.com/magento/magento2/issues/3059" target="_blank">(GITHUB-3059)</a> 

<!--- 47440 --> *  Magento now displays the correct product prices on the Configurable product page when catalog prices include tax. <a href="https://github.com/magento/magento2/issues/2471" target="_blank">(GITHUB-2471)</a> 

<!--- 47439 --> * The `i18n:collect-phrases -m` command now works correctly. Previously, this command would not find all important Magento phrases. <a href="https://github.com/magento/magento2/issues/2630" target="_blank">(GITHUB-2630)</a>

<!--- 47009 --> *  Plugins/interceptors now work with early stage single instance objects in Developer mode. <a href="https://github.com/magento/magento2/issues/2674" target="_blank">(GITHUB-2674)</a> 

<!--- 46808 --> * Admin order creation no longer fails when the "Include Tax In Order Total" option is set to yes. <a href="https://github.com/magento/magento2/issues/2675" target="_blank">(GITHUB-2675)</a> 

<!--- 47639 --> * The `setup:di:compile` script now compiles all files as expected. <a href="https://github.com/magento/magento2/issues/2888" target="_blank">(GITHUB-2888)</a>

<!--- 46044 --> * Synonyms now work as expected with Magento 2.x.  <a href="https://github.com/magento/magento2/issues/2519" target="_blank">(GITHUB-2519)</a> 

<!--- 40320 --> * Attribute 'setup_version' is missing for module error when defined as optional. <a href="https://github.com/magento/magento2/issues/1493" target="_blank">(GITHUB-1493)</a>





<h3>Technology stack</h3>

Our technology stack is built on PHP and MySQL. Magento 2.1 Release Candidate 1 (RC1) supports PHP 5.6, 7.0.2, and 7.0.6. It supports MySQL 5.6.

We do not support PHP 5.5. 


<h3>Installation instructions</h3>

You can install Magento Enterprise Edition 2.1 Release Candidate 1 (RC1) from either Github or by using Composer. 

This Release Candidate is for test purposes only. Do not install it in a production environment.

#####<b>Install from GitHub</b>#####

If you have previously signed an agreement to access Magento Enterprise Edition 2.0 beta software on GitHub, you can install this release candidate from GitHub. Before proceeding, please familiarize yourself with these prerequisites, then run

git clone git@github.com:magento/magento2.git

git checkout tags/<2.1.0-rc1> [-b <2.1.0-rc1>]



<h4><b>Upgrade existing installations</b></h4>
If you installed Magento Community Edition 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3/2.0.4/2.0.5/2.0.6 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="{{ site.gdeurl }}release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.

Readiness check can fail under some circumstances because of incorrect permissions on the `var/session` directory. To resolve this issue, enter the following command:

`chmod -R 770 <your Magento install dir>/var/session`

For example, enter `chmod -R 770 /var/www/magento2/var/session`


#####<b>Upgrade an existing installation from the Setup Wizard</b>#####

1.	Log in to Admin with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.


#####<b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the CE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_options.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update Composer.













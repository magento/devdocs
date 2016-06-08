---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.1 Release Candidate 1 (RC1) Release Notes 
menu_title: Magento EE 2.1 Release Candidate 1 (RC1) Release Notes 
menu_order: 16
github_link: release-notes/ReleaseNotes2.1_RC1EE.md
---

<h2>Magento Enterprise Edition 2.1 Release Candidate 1 (RC1)</h2>
We are pleased to present Magento 2.1 Release Candidate 1 (RC1). This release candidate build is not intended for production purposes. Instead, it provides the development community opportunities to: 

* preview the new features and fixes that Magento 2.1 GA will contain

* contribute to the Magento 2.1 code base by identifying unresolved issues

* test your 2.0 extensions against  2.1 

We welcome your participation in this process! Enterprise Edition customers can provide feedback in these two ways: 

* Enterprise Edition GitHub repository.  For more information on how to provide feedback and contribute on GitHub, see <a href="{{ site.gdeurl }}contributor-guide/contributing.html" target="_blank">Code contributions</a>. 

* Email to DL-Magento-2.1-Feedback@magento.com.


This Release Candidate is available from `repo.magento.com` if you have an Enterprise Edition license or GitHub  if you have previously signed an agreement to access Magento Enterprise Edition 2.0 beta software on GitHub.


Backward-incompatible changes are documented in <a href="http://devdocs.magento.com/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


<h3>Highlights</h3>

Magento Enterprise Edition 2.1 includes several new features:

* **Content Staging and Preview** improves productivity by enabling business teams to easily create, preview, and schedule a wide range of content updates without involving IT. Merchants can make updates to products, categories, CMS content, promotions, and pricing and can preview these changes based on specific dates and times or store views. User-friendly dashboards provide greater visibility into all planned site changes and updates can be automatically deployed at scheduled times.
 
* **Elasticsearch is a next-generation search technology** that is replacing Solr in Magento Enterprise Edition 2.1. It is simpler to set up, able to handle large catalogs, and can easily scale as search volume grows. It supports 33 languages out-of-the-box, and merchants can configure stop words and synonyms to ensure high quality search results.

* **PayPal in-context checkout helps to increase conversion rates** by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit card capabilities allow merchants to securely store credit cards with PayPal so shoppers can make future purchases without re-entering their credit card information.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive cardholder information in checkout. Merchants retain complete control over their checkout style and layout because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree settlement reports from within the Magento Admin.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.


<h3>Known issue</h3>

<b>Issue:</b> Enabling Varnish causes the category menu to switch from http to https<a href="https://github.com/magento/magento2/issues/4540" target="_blank"> (GITHUB-4540)</a>

<b>Work-around:</b> To use Varnish caching with an HTTP site, add rewrite rules such as the following in Magento's root `.htaccess`: 

<pre>RewriteCond %{HTTPS} on
RewriteCond %{REQUEST_URI} /yellow-fruit.html
RewriteRule (.*) http://%{HTTP_HOST}%{REQUEST_URI} [L]</pre>

<pre>RewriteCond %{HTTPS} on
RewriteCond %{REQUEST_URI} /red-fruit.html
RewriteRule (.*) http://%{HTTP_HOST}%{REQUEST_URI} [L]</pre>

 
<h3>Fixed issues</h3>

This release includes fixes for the following GitHub issues:

<!--- 52414 --> * Integration test syntax error has been fixed. <a href="https://github.com/magento/magento2/issues/4343" target="_blank">(GITHUB-4343)</a> 

<!--- 50611--> * Web APIs no longer allow anonymous access by default. <a href="https://github.com/magento/magento2/issues/3786" target="_blank">(GITHUB-3786)</a>

<!--- 51292 --> * The OAuth Token exchange expiration period is now calculated correctly. <a href="https://github.com/magento/magento2/issues/3449" target="_blank">(GITHUB-3449)</a> 

<!--- 46720 --> * Shipping Address is now exposed for the Orders API. <a href="https://github.com/magento/magento2/issues/2628" target="_blank">(GITHUB-2628)</a>


<!--- 52613 --> * A Credit Memo REST API issue with updating attributes has been fixed. Previously, certain attributes (such as Order Status) were not updated when the user took action through the API. However, Magento updates these attributes when the same action is completed in the Admin interface. <a href="https://github.com/magento/magento2/issues/4329" target="_blank">(GITHUB-4329)</a>  

<!--- 52607 --> *  Varnish caching performance has been enhanced. <a href="https://github.com/magento/magento2/issues/3926" target="_blank">(GITHUB-3926)</a> 

<!--- 52316 --> *  Product update operations by either customers or store administrators no longer result in locking queries on catalog category product index. <a href="https://github.com/magento/magento2/issues/4342" target="_blank">(GITHUB-4342)</a> 

<!--- 52079 --> * The Order Repository GetList method no longer returns the same shipping address for all orders. <a href="https://github.com/magento/magento2/issues/4019" target="_blank">(GITHUB-4019)</a> 

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

Our technology stack is built on PHP and MySQL. Magento 2.1 Release Candidate 1 (RC1) supports PHP 5.6, 7.0.2&mdash;7.0.4, and 7.0.6. It supports MySQL 5.6.

We do not support PHP 5.5. 

## Installation and upgrade instructions
You can install Magento Enterprise Edition 2.1 Release Candidate 1 (RC1) using Composer. 

This Release Candidate is for test purposes only. Do not install it in a production environment.

### Install using Composer {#install-rc-composer}
This Release Candidate is available from `repo.magento.com`. Before installing this Release Candidate using Composer,  familiarize yourself with these  <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html" target="_blank">prerequisites</a>, then run:

		composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.1.0-rc2 <installation directory name>

## Upgrade existing installations {#upgrade-rc-nosamp}
This section discusses how to upgrade to a Release Candidate *without* sample data.

If you installed optional sample data, see [Upgrade to an RC with sample data](#upgrade-rc-samp) instead.

<div class="bs-callout bs-callout-warning">
    <p><em>Do not</em> upgrade to a Release Candidate on a production system. Upgrade to a Release Candidate on a development system only.</p>
</div>

### Upgrade using the Setup Wizard
Use the instructions in [Start System Upgrade]({{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html). When prompted to choose a version, choose a Release Candidate.

### Upgrade an existing installation from the GitHub repository
Developers who contribute to the CE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento CE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

### Upgrade using the command line
To upgrade to a Release Candidate using the command line:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following command to disable the cache:

		php bin/magento cache:disable
2.	Enter the following commands in the order shown:

		composer require <product> 2.1.0-rc1 --no-update
		composer update

	To upgrade to Magento CE 2.1 RC1, enter:

		composer require magento/product-community-edition 2.1.0-rc1 --no-update
		composer update

	To upgrade to Magento EE 2.1 RC1, enter:

		composer require magento/product-enterprise-edition 2.1.0-rc1 --no-update
		composer update
	
3.	If prompted, enter your [authentication keys]({{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html).
4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Enter the following command to enable the cache:

		php bin/magento cache:enable

## Upgrade to an RC with sample data {#upgrade-rc-samp}
If you installed optional Magento sample data, see one of the following sections:

*	[Upgrade using the command line](#upgrade-rc-samp-cli)
*	[Upgrade using the Setup Wizard](#upgrade-rc-samp-web)

### Upgrade using the command line {#upgrade-rc-samp-cli}

{% include install/sampledata/sample-data-rc1-cli.md %}

### Upgrade using the Setup Wizard {#upgrade-rc-samp-web}

{% include install/sampledata/sample-data-rc1-web.md %}












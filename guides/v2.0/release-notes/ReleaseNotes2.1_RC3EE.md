---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1 Release Candidate 3 (RC3) Release Notes 
menu_title: Magento Commerce 2.1 Release Candidate 3 (RC3) Release Notes 
menu_order: 406
version: 2.0
level3_menu_node: level3child
level3_subgroup: rc20-relnotes
---

We are pleased to present Magento 2.1 Release Candidate 3 (RC3). This release candidate build is not intended for production purposes. Instead, it provides the development community opportunities to: 

* preview the new features and fixes that Magento 2.1 GA will contain

* contribute to the Magento 2.1 code base by identifying unresolved issues

* test your 2.0 extensions against  2.1 

We welcome your participation in this process! Enterprise Edition customers can provide feedback in these two ways: 

* Commerce GitHub repository.  For more information on how to provide feedback and contribute on GitHub, see <a href="{{ page.baseurl }}/contributor-guide/contributing.html" target="_blank">Code contributions</a>. 

* Email to DL-Magento-2.1-Feedback@magento.com.


This Release Candidate is available from `repo.magento.com` if you have a Commerce license or GitHub  if you have previously signed an agreement to access Magento Commerce 2.0 beta software on GitHub.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}/release-notes/changes_2.0.html" target="_blank">Magento 2.1 Backward Incompatible Changes</a>.

### Highlights

Magento Enterprise Edition 2.1 includes several new and exciting features:

* **Content Staging and Preview** improves productivity by enabling business teams to easily create, preview, and schedule a wide range of content updates without involving IT. Merchants can make updates to products, categories, {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} content, promotions, and pricing and can preview these changes based on specific dates and times or store views. User-friendly dashboards provide greater visibility into all planned site changes and updates can be automatically deployed at scheduled times.
 
* **Elasticsearch is a next-generation search technology** that is replacing Solr in Magento Commerce 2.1. It is simpler to set up, able to handle large catalogs, and can easily scale as search volume grows. It supports 33 languages out-of-the-box and merchants can configure stop words and synonyms to ensure high quality search results. 

* **PayPal enhancements** include PayPal in-context {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} and saved credit cards. In-context checkout helps to increase {% glossarytooltip 38c73ce4-8f01-4f74-ab30-1134cec5664f %}conversion{% endglossarytooltip %} rates 69 bps by allowing shoppers to pay with PayPal without leaving the merchant’s site. PayPal saved credit cards boost repeat purchases by allowing merchants to securely store credit card information with PayPal so customers do not need to re-enter it in checkout or when reordering items from the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} interface.
 
* **Braintree enhancements enable merchants to qualify for the simplest set of PCI compliance** requirements by using Braintree Hosted Fields to collect all sensitive {% glossarytooltip 117df0a3-29a6-4636-9c29-8f696b3ad737 %}cardholder{% endglossarytooltip %} information in checkout. Merchants retain complete control over their checkout style and {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} because Braintree uses small, transparent iframes to replace individual payment fields. Merchants can now also access Braintree {% glossarytooltip 73a87074-8de7-4e69-a97f-12c65c6f5582 %}settlement{% endglossarytooltip %} reports from within the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} interface.
 
* **Improved management interfaces** make it faster and easier to search for information in the Admin, set up global search synonyms, and create new product, category, and CMS content.
 

### Fixed issues

#### Security enhancement

<!--- 52867-->* Magento no longer discloses sensitive information about the server when an invalid {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} has been requested. 

#### Performance enhancements

<!--- 53530-->* {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} page performance has significantly improved when categories contain more than 30000 items. 

<!--- 53223-->* Setting the Merge {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} Files option to Yes no longer reduces product performance. <a href="https://github.com/magento/magento2/issues/4710" target="_blank">(GITHUB-4710)</a>

#### Staging

<!--- 53424 -->  Changing the update start or end time on one {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} no longer overwrites update settings on other stores. Previously, changing the update start or end time on one page would overwrite settings on other stores. 

<!--- 54357-->* The product update preview now works as expected. 

<!--- 50468-->* You can now filter products by Category ID as expected.

#### Google Tag Manager

<!--- 53170-->* The Update Cart Quantity {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} now correctly observes add or remove cart actions. 

#### Import/Export

<!--- 54200-->* Magento now successfully imports products with a "gift_message_available" parameter. Previously, Magento exported the wrong "gift_message_available" parameter, which resulted in a validation error. (54200)

#### Cache

<!--- 52923-->* Category menus now display as expected for installations using Varnish. <a href="https://github.com/magento/magento2/issues/4540" target="_blank">(GITHUB-4540)</a>

<!--- 54228-->* Varnish {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} is no longer disabled due to {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} requests. 

<!--- 53474-->* Magento now enables caches by default when upgrading by the command-line interface.  <a href="https://github.com/magento/magento2/issues/4707" target="_blank">(GITHUB-4707)</a>

<!--- 54205-->* Magento no longer disables all cache types after you use the command-line interface to enable or disable modules. Previously, all cache types were disabled after you disabled or enabled  modules through the command line interface. 

#### Messages and documentation

<!--- 52993-->* Media Uploader error messages now make it clear the SVG file format is not supported. <a href="https://github.com/magento/magento2/issues/2958" target="_blank">(GITHUB-2958)</a>

<!--- 53008-->* The Swagger-generated docs for the REST {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} now display the property identifiers formatted as camelCaseFormat. <a href="https://github.com/magento/magento2/issues/4925" target="_blank">(GITHUB-4925)</a>

<!--- 54255-->*  Magento now displays enhanced messages for cache management exceptions. 

#### Payment methods

<!--- 53238-->* Magento no longer displays the Payflow Pro option for the Vault Provider field for countries where that option is unavailable. 

<!--- 54214-->* Problems placing an order using the Payflow Pro {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} have been resolved. 

<!--- 54293-->*  You can now place an order using the Braintree Credit card as the payment method when 3D Secure Verification is enabled. 

#### Miscellaneous

<!--- 51753-->* You can now re-install Magento and use a different Admin email address than you had previously used.

<!--- 52615-->* Using the Web Setup wizard to disable a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} no longer results in a backup error. <a href="https://github.com/magento/magento2/issues/3562" target="_blank">(GITHUB-3562)</a>

<!--- 54205-->* Magento no longer disables all cache types after you use the command-line interface to enable or disable modules. Previously, all cache types were disabled after you disabled or enabled  modules through the command line interface. 

<!--- 54283-->* The ProductsList {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} now returns the identities of the products displayed by this widget. 

<!--- 52124-->* Magento now retains special prices as expected for grouped products. 

<!--- 53121-->* You can now use a custom template to successfully create New Account email for a new customer. 

<!--- 52891-->* Magento now  displays the thousand separator for a product's price  price, weight, and custom option price fields. 

<!--- 54262-->* You can now remove products from the {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} as expected. Previously, if the number of products being removed exceeded half the quantity of products in stock, Magento would throw an error. 

<!--- 54191-->* You can now successfully save new {% glossarytooltip ab517fb3-c9ff-4da8-b7f9-00337c57b3a5 %}order status{% endglossarytooltip %}. Previously, you could not save new order status when selecting Create New Status from the Go to Stores > Order Status menu. <a href="https://github.com/magento/magento2/issues/4146" target="_blank">(GITHUB-4146)</a>


<!--- 54186-->* {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} validation now works as expected when you add a product to a shopping cart. Previously, if a validation error occurred during this task, Magento would still submit the form. 
 
<!--- 54242-->*  Grid view pagination (as configured from Stores > Configuration > {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} > Catalog >Storefront)  now works as expected. <a href="https://github.com/magento/magento2/issues/3861" target="_blank">(GITHUB-3861)</a>

<!--- 53139-->*  Magento now correctly displays prices for products with several configurable price options. 

<!--- 54182-->*  You can successfully complete an order  for a quantity of product that exceeds half of the product stock. 

<!--- 54222-->*  You can now generate a new {% glossarytooltip f85f36ad-2942-446e-b711-39f2a16f6364 %}simple product{% endglossarytooltip %} without changing the names of already existing products.  <a href="https://github.com/magento/magento2/issues/4951" target="_blank">(GITHUB-4951)</a>


<!--- 54257-->*  The Stock Status attribute now works as expected during creation of configurable products. 

<!--- 54231-->* You can successfully delete an Admin user without breaking integration if the Admin user shares the same ID as an integration user. Previously, if you deleted an Admin user who shared an ID with an integration user, the integration would be permanently broken. 


<!--- 54051-->* Problems related to login when inline translation is enabled have been resolved.  <a href="https://github.com/magento/magento2/issues/4925" target="_blank">(GITHUB-4925)</a>

<!--- 54172-->* Magento now generates URL rewrites for a new {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} as expected during a mass update to a new {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %}. 

<!--- 54043-->* Magento no longer prompts you to select a dropdown attribute when adding a product to the shopping cart if you have already selected an attribute. <a href="https://github.com/magento/magento2/issues/4899" target="_blank">(GITHUB-4899)</a>


<!--- 53034-->*  You can now drag values as expected when working in the Customizable Options window.


<!--- 53366-->* Tax Report now displays records as expected. 


<!--- 52165 internal only-->

<!--- 54120 internal only --> 

<!--- 54031 internal only-->

<!--- 53293 internal only-->

<!--- 54211 DUPLICATE-->

### Known issues

Magento Commerce 2.1, Release Candidate 3 includes the following known issues: 

<!--- 54445-->* The process of uninstalling modules using command-line tools unexpectedly stalls. 
**Workaround:** Ensure that your `<magento root>/var/composer_home/auth.json` file contains your authentication keys. You can create an `auth.json` file in one of two ways:

**Method 1:** If you ran Composer commands from CLI before and specified your `repo.magento.com` credentials, you can copy the existing `auth.json` file from your home directory under `"~/.composer/"`


**Method 2:** You can manually create the file using this format:

{% highlight php startinline=true %}

{
    "http-basic": {
        "repo.magento.com": {
            "username": "<public key>",
            "password": "<private key>"
        }
    }
}

{% endhighlight %}



<!--- 54320-->* The Category page displays the former price instead of the current price during scheduled updates. 

### Technology stack

Our technology stack is built on {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and MySQL. Magento 2.1 RC3 supports:

* PHP 5.6
* PHP 7.0.2
* PHP 7.0.6 + up until 7.1
* MySQL 5.6.

We do not support PHP 5.5.x or 7.0.5. 

## Installation and upgrade instructions

You can install Magento Commerce 2.1 Release Candidate 3 (RC3) using {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %}. 

This Release Candidate is for test purposes only. Do not install it in a production environment.

{% include install/releasenotes/ee_install_21.md %}

### Upgrades

To upgrade to Magento 2.1 (including a Release Candidate), see [Upgrade to Magento version 2.1 (June 22, 2016)]({{ page.baseurl }}/release-notes/tech_bull_21-upgrade.html).

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

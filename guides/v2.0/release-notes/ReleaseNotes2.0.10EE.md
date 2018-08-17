---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.10 Release Notes
menu_title: Magento Commerce 2.0.10 Release Notes
level3_menu_node: level3child
level3_subgroup: ee20-relnotes
version: 2.0
menu_order: 270
version: 2.0
---

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.0.10. This release includes multiple security and functional enhancements as well as enhancements to the Sales {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}. New Sales API methods allow third party solutions, such as shipping or ERP applications, to use APIs when they create an {% glossarytooltip 631b9627-a367-4a56-b3b1-0f6ca8fe6e02 %}invoice{% endglossarytooltip %} or {% glossarytooltip c8f00e9d-7f70-4561-9773-60da604ba5c9 %}shipment{% endglossarytooltip %}.



Backward-incompatible changes are documented in <a href="{{ page.baseurl }}/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

## Highlights

* Patch 2.0.10 is now <i>compatible with MySQL 5.7</i>.

* Patch 2.0.10 introduces <i>two new web APIs (or service contracts) for the Sales module</i> that incorporate functionality into the Sales API that is currently available in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} interface. After you install this patch, you’ll be able to use the Sales API `ShipOrder` and `InvoiceOrder` methods to capture payment and ship product. For more information on these API enhancements, see the <a href="{{ page.baseurl }}/mrg/ce/Sales.html#invoiceorder" target="_blank">Sales API</a> discussion in the <a href="{{ page.baseurl }}/mrg/intro.html" target="_blank">Module Reference Guide</a>.

#### Why are we adding new APIs in a patch release?
{:.no_toc}

<i>These new interfaces will not break any existing customizations or extensions.</i>   See <a href="https://alankent.me/category/magento/" target="_blank">Alan Kent’s blog about Magento</a> for more information about these features and Magento’s use of semantic versioning.

## Security enhancements

This release includes enhancements to improve the security of your Magento software. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security/patches/magento-2010-and-212-security-update" target="_blank">Magento Security Center</a>.

### General security
{:.no_toc}

<!--- 57811 -->* You can no longer delete a currently logged-in user.

<!--- 51376 -->* Fixed issue that occurred during update with disclosure of the application's internal path.


<!--- 51370 -->* Fixed issue that occurred during setup with disclosure of the application's internal path.



<!--- 56930 -->* Sessions now expire as expected after logout.

<!--- 57582/1488 -->* Fixed issue with using the Magento Enterprise Edition invitations feature to insert malicious {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} and subsequently execute it in the Admin context.


<!--- 57566-->* You can no longer change or fake a product price from the Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and then complete an order with that fake price.


<!--- 56902, 56834  -->* A user with lesser privileges can no longer use a JSON call to force an Admin user to add his private or public key.

<!--- 56851 -->* Fixed remote code execution issue in {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}.

<!--- 57579 -->* Upgrade now places stores in maintenance mode as expected. <a href="https://github.com/magento/magento2/issues/3191" target="_blank">(GITHUB-3191)</a>



<!--- 56542/1480 -->* Resolved issue with potential SQL injection through the use of the ordering or grouping parameters.

<!--- 56905 -->* Fixed issue with retrieving potentially sensitive information through the use of {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} media.

#### Denial-of-service (DoS) attacks and brute force attacks
{:.no_toc}

<!--- 57464 -->* The Guest order view protection code is no longer vulnerable to brute force attacks.

<!--- 57303 -->* Fixed vulnerability to DoS attacks by full page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} poisoning.

### Cross-Site Request Forgery (CSRF)
{:.no_toc}


<!--- 45757 -->* Removed vulnerability in cart checkout experience by enhancing server-side CSRF validation.

<!--- 57580/1433 -->* Resolved a potential  vulnerability in which customer addresses could be deleted. You can no longer deceive a user into deleting his store address book entries.

### Cross-site scripting (XSS)
{:.no_toc}


<!--- 57803/1539 -->* Fixed issue with XSS reflection in the loading section of REST requests.


<!--- 57363 -->*  Fixed issue with potential storage of malicious XSS code in the body of an email template. (A malicious user could use this this script to steal user information and cookies, or to bypass cross-site request forgery protection.)

## Functional fixes

We address the following functional issues in this release.

### Sales API enhancements
{:.no_toc}


<!--- 56429 -->*  We've added the ability to change the status of a shipment through the {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %}.  The new `ShipOrder` interface support tasks you can already do through the Admin dashboard, including the ability to:  

	* create a shipment document (full or partial)

	* add details about shipped items into an order

	* change status and state of an order according to performed actions

	* notify customer about new shipment document



<!--- 56428 -->*  We've added the ability to change the status of an invoice through the web API.  The new `InvoiceOrder` interface supports tasks you can already do through the Admin dashboard, including the ability to:  

	* create an invoice document (full or partial)

	* capture money placed with order payment

	* notify a customer about document creation

	* change order status and state

For more information on these API enhancements, see <a href="{{ page.baseurl }}/mrg/ce/Sales.html" target="_blank">Magento Sales API</a>.

### Performance
{:.no_toc}

<!--- 55300 -->* We've improved the load speed of the {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %} form.

<!--- 55791 -->* We've improved the load speed of the review step for the wizard used to create a configurable product.

### Tracking and shipping
{:.no_toc}


<!--- 57098 -->* Changing the city field of an order now affects the shipping rate as expected. Previously, the shipping rate was not updated when you changed the city on your order form.

<!--- 56908 -->* Magento now returns UPS shipping rates for Puerto Rico.

<!--- 57461 -->* Magento no longer throws an {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} if you enter an invalid FedEx shipment tracking number.

### Cart and checkout
{:.no_toc}


<!--- 56953 -->* Magento now updates the mini cart as expected when you reorder an item. Previously, Magento added the reordered items to the shopping cart, but the mini cart did not update its item count. <a href="https://github.com/magento/magento2/issues/6121" target="_blank">(GITHUB-6121)</a>


<!--- 56911 -->* You can now use an alternative {% glossarytooltip 5ac2d367-070a-474c-badf-df2b84fe3b09 %}Merchant Account{% endglossarytooltip %} ID when using Braintree as a {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}. <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a>

### General fixes
{:.no_toc}



<!--- 57065 -->* Magento now returns you to the Admin dashboard after you've successfully changed your Admin password. Previously, Magento prompted you to change your password even after you just successfully changed it. <a href="https://github.com/magento/magento2/issues/4331" target="_blank">(GITHUB-4331)</a>


<!--- 55054 -->* You can now update multiselect attribute values for multiple products from the {% glossarytooltip ebe2cd14-d6d4-4d75-b3d7-a4f2384e5af9 %}server side{% endglossarytooltip %}.  <a href="https://github.com/magento/magento2/issues/5459" target="_blank">(GITHUB-5459)</a>



<!--- 56963, 57069 -->* State/Province field is now displayed as required on the Add New Address page. <a href="https://github.com/magento/magento2/issues/5279" target="_blank">(GITHUB-5279)</a>


<!--- 57072 -->* Maestro credit card now passes validation.

<!--- 57390 -->* The cursor now appears as expected when you edit a product description.


<!--- 58674 -->* Visual swatches are now displayed when in search results.

<!--- 58695 -->* GiftRegistry *.less file is not properly packaged in the {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}composer{% endglossarytooltip %} package


<!--- 58933 -->* Delete paging functionality for configurable product variations.

<!--- 56700 -->* The order comment timestamp now correctly reflects the time that the comment was submitted, not when the page was last refreshed. <a href="https://github.com/magento/magento2/issues/5719" target="_blank">(GITHUB-5719)</a>, <a href="https://github.com/magento/magento2/issues/5890" target="_blank">(GITHUB-5890)</a>





<!--- Omitted (can't be reproduced or won't fix) 57800 (CLONES: 5704858314, 58798, 58883) (CANNOT REPRO: 53971, 53431) (INTERNAL ONLY:  58816, 558874, 56759, 58167, 57879, 57577, 57568, 57294, 57546), 57303, 55862, 52239, 58626, 58625, 58666, 58933, 58923 (WONT FIX: 58671-->

## Known issues

* **Issue**:  Logo Email for transactional emails can not be uploaded successfully <a href="https://github.com/magento/magento2/issues/6275" target="_blank">(GITHUB-6275)</a>. **Workaround**: Create a header template and reference the image location absolutely.


<!-- 59428 -->

* **Issue**: Cannot save a custom {% glossarytooltip eeafe8ee-36bc-495e-871d-2957d8dd8c74 %}transactional email{% endglossarytooltip %} logo. **Workaround:** None.


<!-- 53010 -->

* **Issue**: The scope selector on the Product page does not display all websites associated with a restricted user. **Workaround**: None.

<!--- 57004 -->

## System requirements

Our technology stack is built on {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and MySQL. See
[System Requirements]({{ site.baseurl }}/magento-system-requirements.html){:target="_blank"}.


{% include install/releasenotes/ee_install_20.md %}

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

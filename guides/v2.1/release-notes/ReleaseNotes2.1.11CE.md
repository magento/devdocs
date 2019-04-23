---
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.1.11 Release Notes
menu_title: Magento Open Source 2.1.11 Release Notes
menu_order: 154
level3_menu_node: level3child
level3_subgroup: ce21-relnotes 
---

*	TOC
{:toc}


*Patch code and release notes were published on December 12,  2017.*

*Release notes updated December 19, 2017.*


We are pleased to present Magento Open Source  2.1.11. This release includes both new features and many improvements. Check out the many community-contributed fixes!

## Highlights

Look for the following highlights in this release:

### New features

* **Support for the Indian Rupee (INR) in PayPal Express Checkout**

* **New commands and functionality for the command-line interface**. We've added interactivity to the `admin:user:create` command, and added the ability to handle CLI setup interactively (with prompts). 

### Fixes and enhancements (highlights)

* **Significant enhancements for payment methods**. We've fixed an issue where some Braintree refunds did not work. Braintree online refunds now work when you are using two Braintree accounts on two separate websites.

<!--- MAGETWO-57166 -->* **Corrected sitemap generation**. Magento no longer generates the sitemap in the wrong directory when `vhost` is connected to `/pub`. Previously, Magento generated the sitemap in the root folder instead of the pub folder. [GitHub-2802](https://github.com/magento/magento2/issues/2802)

<!--- MAGETWO-71515 -->* When a simple child product on a configurable product has a lower price (either regular, or special price) than the other options (variations), the configurable product without any selected options now indicates that the price could be "As low as" = <the lowest price>. Previously, if a simple child product has a price that is lower than the other options, and no options on the configurable product have been selected yet, the configurable product will be shown with the lowest available price.

<!--- MAGETWO-58503 -->* You can now add a configurable product to your cart from the Category page. Previously, you had to review the product on the Product page before adding it to your cart. [GitHub-2574](https://github.com/magento/magento2/issues/2574), [GitHub-5850](https://github.com/magento/magento2/issues/5850), [GitHub-5882](https://github.com/magento/magento2/issues/5882), [GitHub-6572](https://github.com/magento/magento2/issues/6572), [GitHub-5558](https://github.com/magento/magento2/issues/5558), [GitHub-8470](https://github.com/magento/magento2/issues/8470)

## Fixed issues

### Setup

<!--- MAGETWO-82780 -->*  The  `/.user.ini` and `/pub/.user.ini` files now specify a `memory_limit` value of at least 1G to 2G for debugging purposes. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11761*. [GitHub-11322](https://github.com/magento/magento2/issues/11322)

<!--- MAGETWO-83020 -->*  Magento now downloads the backup `.tgz` file that you select for downloading. Previously, no matter which backup you selected, Magento downloaded the most recent backup. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 11596*. [GitHub-10032](https://github.com/magento/magento2/issues/10032)

### Cache

<!--- MAGETWO-72798 -->* We’ve resolved an issue where store websites do not work when Redis cache is installed and the PhpRedis extension is enabled.

### Catalog

<!--- MAGETWO-70373 -->* A user who does not have permission to view a category (based on category permissions) can no longer view it in the menu even if it were cached.

<!--- MAGETWO-62040 -->* You can now place orders when the **Use deferred Stock update setting** is set to **Yes**.


<!--- MAGETWO-83037 -->* You can now save a price of 0 (zero) for a custom option. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11844*. [GitHub-4808](https://github.com/magento/magento2/issues/4808)

<!--- MAGETWO-83067 -->* Magento no longer changes a product image background to black no matter which color you configure.  *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11890*. [GitHub-8799](https://github.com/magento/magento2/issues/8799)

<!--- MAGETWO-82948 -->* Magento now checks the uniqueness of attribute option values when you use REST to create the option. *Fix submitted by [gonzalopelon](https://github.com/gomencal) in pull request 11786*. [GitHub-8846](https://github.com/magento/magento2/issues/8846)

<!--- MAGETWO-82487 -->* `GET v1/products/attribute-sets/sets/list` now returns a full list of attribute sets. *Fix submitted by [David Verholen](https://github.com/davidverholen) in pull request 11432*. [GitHub-11022](https://github.com/magento/magento2/issues/11022)

<!--- MAGETWO-70498 -->* If a configurable product is part of a shipment being created via REST, only the parent's quantity will be counted towards total shipment item quantity. Previously, Magento counted both the parent and child product of the configurable product, which resulted in a count of two products added to the shopping cart. 

<!--- MAGETWO-82756 -->* The **Add-to-cart** checkboxes in Related Products are no longer visible on the storefront when `$canItemsAddToCart` is set to **false**. *Fix submitted by [Marc Rodriguez](https://github.com/mrodespin) in pull request 11610*.  [GitHub-689](https://github.com/magento/magento2/issues/689)

### Cart and checkout

<!--- MAGETWO-66447 -->* Magento no longer applies free shipping when you remove a free shipping coupon code from the checkout page.

<!--- MAGETWO-83195 -->* Magento now permits zip codes for the Netherlands to contain spaces. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11960*. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

### Configurable products

<!--- MAGETWO-61133 -->* Magento now displays the correct drop-down option labels for configurable products when you create attributes for products with a custom source. 

<!--- MAGETWO-58034 -->*  Magento now saves selected product options when you edit a product page. Previously, Magento did not save configurable options. 



<!--- MAGETWO-71515 -->* When a simple child product on a configurable product has a lower price (either regular, or special price) than the other options (variations), the configurable product without any selected options now indicates that the price could be could be **as low as** as the lowest price. Previously, if a simple child product has a price that is lower than the other options, and no options on the configurable product have been selected yet, the configurable product will be shown with the lowest available price.

### Framework

<!--- MAGETWO-82237 -->* `app:config:dump` no longer adds an extra space to multi-line array values. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11451*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

<!--- MAGETWO-82462 -->*  You can now run `bin/magento cron:install` and then remove the `crontab` without changing the external crontab entry. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11590*. [GitHub-11586](https://github.com/magento/magento2/issues/11586)

<!--- MAGETWO-82959 -->*  Office XML handler now supports exports of XML that contain negative values. *Fix submitted by [HausO](https://github.com/hauso) in pull request 11758*. [GitHub-11729](https://github.com/magento/magento2/issues/11729)

<!--- MAGETWO-82983 -->*  Magento no longer throws an exception when the X-Magento-Tags header contains whitespace. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 11848*. [GitHub-7640](https://github.com/magento/magento2/issues/7640)

<!--- MAGETWO-83155 -->* New orders now appear as expected in the Order table after you migrate data. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 11932*. [GitHub-10185](https://github.com/magento/magento2/issues/10185)

<!--- MAGETWO-83096 -->* We've added an extra API call to the interface for managing customer accounts, and it permits you to implement the full reset password process. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11920*. 

<!--- MAGETWO-83052 -->* We no longer hard-code the array index of `Magento_Backend::admin` in the resources ACL tree. *Fix submitted by [Navarr Barnier](https://github.com/navarr) in pull request 11739*.

### General

<!--- MAGETWO-83760 -->* The  **Stores > Settings > Configuration > General > Design** page now displays as expected. [GitHub-5256](https://github.com/magento/magento2/issues/5256)

<!--- MAGETWO-72206 -->* After confirming a customer’s account, the Magento welcome message now displays the customer's first and last name.

<!--- MAGETWO-70322 -->* Products in the cart with a price of $0.00 no longer cause an extra cent to be applied to the discount amount. [GitHub-9453](https://github.com/magento/magento2/issues/9453)

<!--- MAGETWO-64126 -->* Magento no longer throws SQL errors when TargetRules are implemented.

<!--- MAGETWO-81676 -->* Magento now displays the State/Province field after you edit the billing address on sales orders. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11378*. [GitHub-10441](https://github.com/magento/magento2/issues/10441)

<!--- MAGETWO-82657 -->* We removed a typo in the Paypal Module. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11674*. [GitHub-7591](https://github.com/magento/magento2/issues/7591)

<!--- MAGETWO-82646 -->* The Customer Groups are now located in the Magento Admin under **Customers > Customer Groups**. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11678*. 

<!--- MAGETWO-82762 -->* We've fixed the dashboard graph's y-axis range. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11753*. [GitHub-7927](https://github.com/magento/magento2/issues/7927)

<!--- MAGETWO-82980 -->* We've fixed an error in the  `\Magento\Customer\Test\Unit\Model\AccountManagementTest class:` unit tests. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11606*. 

<!--- MAGETWO-83100 -->* Magento no longer assigns multiple blocks the same ID. *Fix submitted by [Thiago](https://github.com/thiagolima-bm) in pull request 11804*. 

<!--- MAGETWO-83205 -->* If you add a new value for an EAV attribute, Magento checks to make sure it is unique for the attribute. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11621*.

<!--- MAGETWO-83284 -->* Shipping address lines no longer disappear when `street_lines` in customer configuration is set to 0 (zero). *Fix submitted by [Cristian Sanclemente](https://github.com/crissanclick) in pull request 12022*. [GitHub-7995](https://github.com/magento/magento2/issues/7995)

<!--- MAGETWO-81328 -->* Magento now sends email confirming a newsletter subscription  only when the subscriber is subscribing for the first time. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11316*. [GitHub-5439](https://github.com/magento/magento2/issues/5439)

<!--- MAGETWO-83319 -->* The Magento store code validation `regex` now supports uppercase letters in store code. *Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request 12040*. [GitHub-11996](https://github.com/magento/magento2/issues/11996)

<!--- MAGETWO-83320 -->* Magento now displays datepicker fields as expected when you scroll. *Fix submitted by [@lionelalvarez](https://github.com/lionelalvarez) in pull request 12045*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)

<!--- MAGETWO-83000 -->* You can now add an HTML node to page XML root of a theme without causing a validation error. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11861*. [GitHub-11697](https://github.com/magento/magento2/issues/11697)

<!--- MAGETWO-83500 -->* Magento no longer converts special characters in a store name to numerical character references in the email subject line. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 12115*. [GitHub-6597](https://github.com/magento/magento2/issues/6597), [GitHub-8094](https://github.com/magento/magento2/issues/8094)

<!--- MAGETWO-83475 -->* We've simplified the `update button.phtml` translation. *Fix submitted by [@ChuckyK](https://github.com/ChuckyK) in pull request 12106*. 

<!--- MAGETWO-57166 -->*  Magento no longer generates the sitemap in the wrong directory when `vhost` is connected to `/pub`. Previously, Magento generated the sitemap in the root folder instead of the pub folder. [GitHub-2802](https://github.com/magento/magento2/issues/2802)

<!--- MAGETWO-82947 -->* Magento now throws a PHP 500 Error when `$optionsArray['delete'][$optionId]` is not set. *Fix submitted by [@angelo983](https://github.com/angelo983) in pull request 11728*. 

<!--- MAGETWO-83488 -->* Magento now correctly displays storefront search fields in Magento installations running in Safari. Previously, the search field shifted unexpectedly after you viewed shopping cart contents  in Magento installations running either desktop or mobile versions of Safari. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 12111*. [GitHub-8178](https://github.com/magento/magento2/issues/8178)

### Import/export

<!--- MAGETWO-82554 -->* You can now import customer addresses from websites with country restrictions.

<!--- MAGETWO-69857 -->*  Magento now successfully imports customer multiselect attributes. Previously, when you imported a CSV file with either the option's ID numbers or the option's values, Magento returned an error.

<!--- MAGETWO-69718 -->* Magento no longer changes custom options IDs each time the product is imported or saved. 

<!--- MAGETWO-83956 -->* When you export customer details into CSV format, Magento now displays the values of the Confirmed email and Account Lock columns in the Customer table. Previously, Magento displayed a blank value for these columns in the CSV file. 

### Index

<!--- MAGETWO-84444 -->* We've fixed an issue that lead to wrong products being indexed. Previously, the `mview.xml` configuration used `row_id`  instead of `entity_id` when collecting information from changelogs.

### Order management

<!--- MAGETWO-82759 -->* We've corrected the block class defined in the XML layout for order items on the order print page is definitely not correct. As a result, you cannot see the order item's information upon the order printing. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request 11631*. [GitHub-9830](https://github.com/magento/magento2/issues/9830), [GitHub-10530](https://github.com/magento/magento2/issues/10530)

### Payment methods

<!--- MAGETWO-83149 -->* Magento PayPal integration now supports the Indian Rupee currency (INR).

<!--- MAGETWO-71185 -->* Braintree online refunds now work when you are using two Braintree accounts on two separate websites. Previously, when using two Braintree accounts for two separate websites, Magento did not process the refund, and displayed this message: **Sorry, but something went wrong**.


<!--- MAGETWO-83742 -->*  We've fixed the race condition that previously caused duplicate orders with a user double-clicked on the Braintree **Pay** button. *Fix submitted by [Daniel Doyle](https://github.com/tr33m4n) in pull request 11901*. [GitHub-10767](https://github.com/magento/magento2/issues/10767)

<!--- MAGETWO-83956 -->* Magento no longer throws an exception when you choose an Order page in the Admin, or set a transaction ID in a payment module. *Fix submitted by [Alex](https://github.com/madonzy) in pull request 12284*. [GitHub-3596](https://github.com/magento/magento2/issues/3596)

### Performance

<!--- MAGETWO-82527 -->*  We’ve improved the performance of Web API calls that are used to access checkout payment information or place orders. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request 11640*. [GitHub-9007](https://github.com/magento/magento2/issues/9007)

### Reports

<!--- MAGETWO-82178 -->* You can now successfully search reports for a particular customer (**Reports** > Reviews > **By Customers**). *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11523*. [GitHub-10301](https://github.com/magento/magento2/issues/10301)

### SalesRule

<!--- MAGETWO-64066 -->* Magento no longer discounts items that belong to an excluded category. Previously, you were unable to exclude products assigned to a specific category due to the Cart Price rule. 

<!--- MAGETWO-82242 -->* Products in the cart with a price of $0.00 no longer cause an extra cent to be applied to the discount amount.

<!--- MAGETWO-83689 -->* We've fixed a range of issues that affect shipping when Sales rules and Cart rules are involved. For example,  the free shipping coupon previously did not work with Table Rates shipping. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11919*. [GitHub-8172](https://github.com/magento/magento2/issues/8172), [GitHub-8089](https://github.com/magento/magento2/issues/8089), [GitHub-10507](https://github.com/magento/magento2/issues/10507)

### Shipping

<!--- MAGETWO-83429 -->* Magento no longer throws an error (`Undefined variable: responseAjax`) when you try to save a shipment package. *Fix submitted by [Joe Constant](https://github.com/lazyguru) in pull request 12092*. 

### Tax

<!--- MAGETWO-72280 -->* Magento now correctly calculates the tier price percentage when displayed prices include tax. [GitHub-8833](https://github.com/magento/magento2/issues/8833)

<!--- MAGETWO-83403 -->* The total tax amount displayed in the Full Tax Summary now equals the sum of the relevant individual taxes. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 11593*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)

### Translations

<!--- MAGETWO-71591 -->* You can now implement translations from themes (in contrast to translations from modules). 

## Known issue

<!--- MAGETWO-85164 -->**Issue**: In Swagger, the text area that contains the payload structure of some POST and PUT operations is not displayed. If a fraction of the text area is displayed, you can click on it to display the payload structure in a text area in the center of the page. If the text area is not displayed at all, then you cannot access the payload structure. 

**Workaround**: Use the Devdocs [static Swagger site]({{ site.baseurl }}/swagger/index_21.html) to navigate to the REST call you want to use, then copy the payload structure to your Swagger instance. 



<!--- NOT NEEDED   MAGETWO-83263 MAGETWO-71185  MAGETWO-84545     MAGETWO-69344  MAGETWO-69107   MAGETWO-67681   MAGETWO-65466    MAGETWO-64459   MAGETWO-63226 MAGETWO-62621  MAGETWO-61164  MAGETWO-58503 MAGETWO-77969     MAGETWO-71576  MAGETWO-82242 MAGETWO-82554 MAGETWO-71522 MAGETWO-75526 -->


<!--- WON'T FIX MAGETWO-82982   -->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.


<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11378">11378</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10441" target="_blank">10441</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11451">11451</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11328" target="_blank">11328</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11674">11674</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7591" target="_blank">7591</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11678">11678</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11523">11523</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10301" target="_blank">10301</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11753">11753</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7927" target="_blank">7927</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11590">11590</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11586" target="_blank">11586</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11761">11761</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11322" target="_blank">11322</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11640">11640</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9007" target="_blank">9007</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11611">11611</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6891" target="_blank">6891</a></td>
    <td><a target="_blank" href="https://github.com/mrodespin">Marc Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11606">11606</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11758">11758</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11729" target="_blank">11729</a></td>
    <td><a target="_blank" href="https://github.com/hauso">HausO</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11728">11728</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/angelo983">@angelo983</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11844">11844</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4808" target="_blank">4808</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11848">11848</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7640" target="_blank">7640</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11932">11932</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10185" target="_blank">10185</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11804">11804</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/thiagolima-bm">Thiago</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11890">11890</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8799" target="_blank">8799</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11920">11920</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11960">11960</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11898" target="_blank">11898</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11621">11621</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12022">12022</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7995" target="_blank">7995</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11316">11316</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5439" target="_blank">5439</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11786">11786</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8846" target="_blank">8846</a></td>
    <td><a target="_blank" href="https://github.com/gomencal">gonzalopelon</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12040">12040</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11996" target="_blank">11996</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12045">12045</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7903" target="_blank">7903</a></td>
    <td><a target="_blank" href="https://github.com/lionelalvarez">@lionelalvarez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11861">11861</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11697" target="_blank">11697</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12092">12092</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lazyguru">Joe Constant</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11432">11432</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11022" target="_blank">11022</a></td>
    <td><a target="_blank" href="https://github.com/davidverholen">David Verholen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11596">11596</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10032" target="_blank">10032</a></td>
    <td><a target="_blank" href="https://github.com/PieterCappelle">Pieter Cappelle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11739">11739</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/navarr">Navarr Barnier</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11631">11631</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9830" target="_blank">9830</a>, <a href="https://github.com/magento/magento2/issues/10530" target="_blank">10530</a></td>
    <td><a target="_blank" href="https://github.com/rogyar">Yaroslav Rogoza</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12111">12111</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12115">12115</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6597" target="_blank">6597</a>, <a href="https://github.com/magento/magento2/issues/8094" target="_blank">8094</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11901">11901</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10767" target="_blank">10767</a></td>
    <td><a target="_blank" href="https://github.com/tr33m4n">Daniel Doyle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11919">11919</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8172" target="_blank">8172</a>, <a href="https://github.com/magento/magento2/issues/8089" target="_blank">8089</a>, <a href="https://github.com/magento/magento2/issues/10507" target="_blank">10507</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12106">12106</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ChuckyK">@ChuckyK</a></td>
  </tr>
</table>

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see
[System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html){:target="_blank"}.


{% include install/releasenotes/ce_install_21.md %}

## Migration toolkits
The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){:target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){:target="_blank"}.

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration){:target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports. 


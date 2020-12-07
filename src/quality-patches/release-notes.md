---
group: software-update-guide
title: Magento Quality Patches release notes
functional_areas:
  - Setup
  - Configuration
  - Upgrade
---

The [Magento Quality Patches](https://github.com/magento/quality-patches) package delivers individual patches developed by Magento and allows you to apply, revert, and view general information about all individual patches that are available for the installed version of {{ site.data.var.ee }} or {{ site.data.var.ce }}.

<!-- The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues -->

{:.bs-callout-info}
See [Apply patches]({{ site.baseurl }}/guides/v2.4/comp-mgr/patching/mqp.html) for instructions on applying patches to your Magento projects.
See [Patches available in MQP tool](https://support.magento.com/hc/en-us/sections/360010506631-Patches-available-in-MQP-tool-) for additional patch details.

## v1.0.12

-  **MDVA-31399** _(for Magento `>=2.3.2 <2.4.2`)_—Adds the "Subtotal (Incl. Tax)" option to price rule conditions.
-  **MDVA-31236** _(for Magento `>=2.4.0 <2.4.2`)_—Fixes the issue where Magento Admins with custom resource access are not able to set up 2FA or log in.
-  **MDVA-30845** _(for Magento `>=2.3.5 <2.3.7`)_—Fixes the issue where the "Sorry, no quotes are available for this order at this time" error is displayed when failing to connect to UPS XML/USPS/DHL, and no other shipping method is available.
-  **MDVA-32133** _(for Magento `>=2.4.0 <2.4.1`)_—Fixes the issue where media gallery is not loading from Page Builder in certain cases.
-  **MDVA-12304** _(for Magento `>=2.3.0 <2.4.2`)_—Increases the maximum number of cookies from 50 to 200.
-  **MDVA-32632** _(for Magento `>=2.3.2 <2.3.5`)_—Fixes the issue where orders appear in the payment system, but not in Magento.
-  **MDVA-32449** _(for Magento `>=2.3.0 <2.3.6 || 2.4.0 || >=2.4.1 <2.4.2` with B2B extension)_—Fixes the issue where the order history loads very slowly or does not load at all.
-  **MDVA-32739** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where enabling Asynchronous Email Notifications sends out old sales emails.

## v1.0.11

-  **MC-38509** _(for Magento `2.3.6, 2.4.1`)_—Fixes the issue where the "Create an Account" button stays disabled after correcting invalid data in the "Create New Customer Account" form.
-  **MDVA-31006** _(for Magento `2.3.0, 2.3.1`)_—Fixes the issue where duplicated orders appear after placing an order using Paypal Express payment.
-  **MDVA-25602** _(for Magento `2.3.0`)_—Fixes issue with PayPal Payflow Pro payment method and treating cookies as SameSite=Lax by default in the Chrome 80 browser and API response redirect to customer login page.

## v1.0.10

Minor fixes for patch versions

## v1.0.9

-  **MDVA-31363** _(for Magento `>=2.3.2 <2.4.2`)_—Fixes the issue where the Cart Price Rule with coupon does not apply via GraphQL when 'Fixed amount discount for whole cart' action is used.
-  **MDVA-30889** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where an error occurs after invoicing a bundle with virtual and simple products as options.
-  **MDVA-31791** _(for Magento `>=2.3.4 <2.3.5`)_—Improves the performance of the product page in cases when target rules or linked products are used.
-  **MDVA-31168** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where the product export CSV file does not appear, and there is a memory allocation error.
-  **MDVA-32313** _(for Magento `>=2.3.0 <2.3.4`)_—Fixes the issue where configurable products could be added to the wishlist with the wrong configuration options.
-  **MDVA-31759** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where products are not updated with `dropdown` and `textarea` attribute values during CSV import.
-  **MDVA-32012** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where zip codes in Korea and Argentina cannot be validated.
-  **MDVA-31640** _(for Magento `>=2.3.1 <2.3.6 || >=2.4.0 <2.4.1`)_—Fixes the issue where a special price cannot be updated via REST API.
-  **MDVA-28651** _(for Magento `>=2.3.0 <2.3.6 || >2.4.0` with B2B extension)_—Fixes the issue where there are performance problems with loading negotiable quotes via REST API.

## v1.0.8

-  **MDVA-31242** _(for Magento `>=2.3.0 <2.4.1` with B2B extension)_—Fixes the issue where a wrong currency sign is displayed in Credit Memo grid.
-  **MDVA-31295** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where reward points are not calculated when a partial order is completed and items are taxed.
-  **MDVA-30112** _(for Magento `>=2.3.4 <2.4.2`)_—Fixes the issue where if the number of orders exceeds the "bunch-size" value, Magento considers the orders with "pending" status as inconsistencies.
-  **MDVA-31150** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where the store credit and gift card balances are not returned by the GET Invoice Rest API call, when the invoice was posted by Rest API call and the order was partially paid by store credit and gift card accounts.
-  **MDVA-30963** _(for Magento `>=2.3.2 <2.4.2`)_—Fixes the issue where products filtering results set to only contain values specified for "All store views" scope in Admin, include products with values overridden on the store view level.
-  **MDVA-29954** _(for Magento `>=2.3.0 <2.3.6 || 2.4.0 || 2.4.2` with B2B extension)_—Fixes the issue where the "New Company Registration Request" and "You've been linked to a company" emails are sent from the wrong address.
-  **MDVA-28357** _(for Magento `>=2.3.2 <2.3.6 || >=2.4.0 <2.4.1`)_—Replaces the standard analyzer with a custom analyzer with keyword tokenizer for the SKU field in the ElasticSearch index, to make wildcard search queries work with SKUs containing a hyphen ("-").

## v1.0.7

-  **MDVA-30972** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where custom order status was changed to Processing after partial shipment creation using WebApi.
-  **MDVA-30428** _(for Magento `>=2.3.4 <2.3.5`)_—Fixes the issue where customers cannot add a product to wishlist if this product is assigned to a custom inventory source.
-  **MDVA-30594** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where an order with multiple addresses could not be saved during checkout when FPT is configured.
-  **MDVA-29148** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue when creating a product via an API call, the product custom attribute of "\Magento\Eav\Model\Entity\Attribute\Backend\ArrayBackend" (like Multiselect) type does not use its default value if no value was provided in the payload.
-  **MDVA-30837** _(for Magento `>=2.3.1 <2.3.5`)_—Added a configuration setting "Include Tax to Amount": Yes/No in Free Shipping method configuration. When "Include Tax to Amount" is set to Yes Minimum Order Amount is calculated as = Subtotal + Tax. When "Include Tax to Amount" is set to No Minimum Order Amount is calculated as = Subtotal
-  **MDVA-25028** _(for Magento `>=2.3.2 <2.3.3 || >=2.3.5 <2.3.6`)_—Fixes the issue when orders that are placed using PayPal Payflow Pro are not set to Suspected Fraud status when fraud filters are triggered.
-  **MDVA-31224** _(for Magento `>=2.3.3 <2.3.5`)_—Improves the performance of the catalog_product_price re-index operation for bundle products.
-  **MDVA-31321** _(for Magento `>=2.3.2 <2.3.5`)_—Fixes a blank page (error) when "Show All" is selected. Elasticsearch returns large list of product ids. In this scenario the order by clause gets converted to an incorrect SQL format.
-  **MDVA-30815** _(for Magento `>=2.3.2 <2.3.4`)_—Fixes the issue where when you changed how many search results should be displayed on the search results page, Magento displayed a blank page. Elasticsearch now correctly displays results from category pages when you change the number of search results viewed per page.
-  **MDVA-30782** _(for Magento `>=2.3.5 <2.4.2`)_—Fixes the issue where Dynamic Block is displayed regardless of cart rule.
-  **MDVA-31021** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where performance issues exists in module-catalog-import-export/Model/Import/Product/Option.php. If there are more than ~100k records in catalog_product_option table, a new CSV with single product takes less than 10 sec to validate.
-  **MDVA-31007** _(for Magento `>=2.3.5 <2.3.6 || >=2.4.0 <2.4.1`)_—Fixes the issue where custom address attributes are not correctly displayed in the order details page in the my account area and in the backend.
-  **MDVA-29389** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue with Advanced Reporting where the analytics_collect_data cronjob says: "Port must be configured within host parameter (like localhost:3306)".
-  **MDVA-31343** _(for Magento `>=2.3.4 <2.3.6`)_—Fixes the issue with the removed body class "page-layout-category-full-width" when a category is scheduled.
-  **MDVA-30945** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where you receive a fatal error message when updating carts "Call to a member function getValue() on null in module-configurable-product CartItemProcessor.php".

## v1.0.6

-  **MDVA-28993** _(for Magento `>=2.3.4 <2.4.0`)_—Implements the "Minimum should match" functionality and partial search for Elasticsearch engine. Solves issues with hyphens in search queries.
-  **MDVA-30102** _(for Magento `>=2.3.2 <=2.4.0`)_—Fixes the issue where Redis cache grows up quickly since layout caches don't have TTL.
-  **MDVA-30599** _(for Magento `>=2.3.4 <=2.4.0`)_—Fixes the issue where guest quotes created using API are incorrectly marked as quotes for logged in customers.
-  **MDVA-29446** _(for Magento `>=2.3.3 <=2.4.0`)_—Fixes the issue where the price of not applicable shipping method is shown as zero during checkout.
-  **MDVA-30357** _(for Magento `>=2.3.2 <=2.4.0`)_—Fixes the issue with wrong image URLs are created when generating a sitemap by cron.
-  **MDVA-30565** _(for Magento `>=2.3.2 <=2.3.3-p1`)_—Fixes the issue where "No such entity with cartid = 0" error is displayed for guest customer on storefront checkout if persistent shopping cart is enabled.
-  **MDVA-29787** _(for Magento `>=2.3.0 <=2.4.0`)_—Fixes the issue where target rule for related products does not work when 'is one of' condition is used to define products to be displayed.
-  **MDVA-30977** _(for Magento `>=2.3.4 <=2.3.5-p2`)_—Fixes the issue with random products missing from categories after reindex.
-  **MDVA-28202** _(for Magento `>=2.3.4 <=2.4.2`)_—Fixes the issue where Layered Navigation doesn't filter configurable products correctly when MSI is used.
-  **MDVA-28300** _(for Magento `>=2.3.0 <2.3.6`)_—Fixes the issue where GQL request doesn't reflect the price changes from catalog price rules.
-  **MDVA-31006** _(for Magento `>=2.3.2 <=2.4.2`)_—Fixes the issue where duplicated orders appear after placing an order using Paypal Express payment.

## v1.0.5

-  **MDVA-30841** _(for Magento `>=2.3.4 <2.3.6 || 2.4.0`)_—Fixes the issue with layered navigation, where the 'No' value for boolean type product attributes was not included in layered navigation if Elasticsearch was used as a search engine.
-  **MDVA-28191** _(for Magento `>=2.3.3 <2.4.2`)_—Fixes the issue where no payment methods are loaded during order creation via Magento Admin panel.
-  **MDVA-29959** _(for Magento `>=2.3.0 <=2.3.3-p1` with B2B extension)_—Fixes the issue where restricted admin user with 'Companies' permissions is not allowed to delete company account.
-  **MDVA-30265** _(for Magento `>=2.3.3 <2.4.2`)_—Fixes the issue where shipment tracking link stops working after Invoice creation.
-  **MDVA-28409** _(for Magento `>=2.3.4 <2.3.6 || 2.4.0`)_—Fixes the issue where the "sales_clean_quotes" cron job fails with out-of-memory error when the number of expired quotes in the database is huge.
-  **MDVA-30593** _(for Magento `>=2.3.0 <2.3.4`)_—Fixes the issue where quotes, that expired according to the Quote Lifetime setting, are not cleaned up.
-  **MDVA-30107** _(for Magento `>=2.3.0 <2.3.6`)_—Fixes the issue where store switcher doesn't work as expected if different base URLs are used for store views.
-  **MDVA-28763** _(for Magento `>=2.3.2 <2.3.4`)_—Fixes the issue where product image is getting duplicated after updating product information using REST API more than once.
-  **MDVA-30284** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where Catalog Search indexer fails due to the following Elasticsearch error: limit of total fields in index has been exceeded.
-  **MDVA-29042** _(for Magento `>=2.3.3 <=2.3.4-p2` with B2B extension)_—Fixes the issue where Catalog permissions were changed to Allow automatically after new product was added to the shared catalog.
-  **MDVA-30428** _(for Magento `>=2.3.3 <2.4.2`)_—Fixes the issue where customers cannot add a product to wishlist if this product is assigned to a custom inventory source.
-  **MDVA-28661** _(for Magento `>=2.3.0 <2.4.2` with B2B extension)_—Fixes the issue where an error is thrown in the Company Users company account section after company admin is changed.

## v1.0.4

-  **MDVA-30195** _(for Magento `2.3.1 - 2.3.4-p2`)_—Fixes the issue where cron jobs fail if database name is too long, resulting in categories not being updated on the frontend.
-  **MDVA-30106** _(for Magento `^2.3.0`)_-Fixes an issue where during checkout payments are not loaded with “Cannot read property ‘length’ of null ” error in JS console.
-  **MDVA-28656** _(for Magento `>=2.3.1 <2.3.6 || >=2.4.0 <2.4.2`)_-Fixes the issue where if an order was placed with no payment information required (for example, with 100% discount) and an invoice was created for the order, the order status changes to Closed instead of Complete.
-  **MDVA-30209** _(for Magento `2.3.0 - 2.3.3-p1`)_-Fixes the issue where the customer group was changed to default if customer updated their account information.
-  **MDVA-30123** _(for Magento `>=2.3.4 <2.4.2`)_-Fixes the issue where attribute option labels are not translated correctly for GraphQL queries.
-  **MDVA-29996** _(for Magento `>=2.3.3 <2.4.2`)_-Fixes the issue where after enabling category permission, the category page is not getting cached by Full Page Cache.
-  **MDVA-30164** _(for Magento `>=2.3.1 <2.4.2`)_-Fixes the issue where customers records cannot be exported from the Customers grid, if custom customer attributes exist.
-  **MDVA-30444** _(for Magento `>=2.3.0 <2.4.1`)_-Fixes the issue where no confirmation email is sent for orders placed using GraphQL.
-  **MDVA-30490** _(for Magento `2.3.4 - 2.3.5-p2`)_-Fixes the issue where products comparison throws the 500 error page, if one of the products has an empty short description.
-  **MDVA-30232** _(for Magento `>=2.3.1 <2.4.1`)_-Fixes the issue where it is not possible to re-order if the original order contains a gift card.
-  **MDVA-29965** _(for Magento `>=2.3.3 <2.4.0`)_-Fixes the issue where customers get Invalid Form Key error when adding a product to the cart.
-  **MDVA-30008** _(for Magento `>=2.3.0 <2.4.2`)_-Fixes the B2B issue where it is not possible to place orders through Admin API for a product which is in a public catalog.
-  **MDVA-22469** _(for Magento `2.3.2-p2 - 2.3.3-p1`)_-Fixes the issue where after upgrading to Magento 2.3.3, Page Builder is not working in the Admin panel and some JS and CSS files are not loading.
-  **MC-35984** _(for Magento `>=2.4.0 <2.4.1`)_-Fixes the issue where merchants could not interact with any page elements on the Returns page after creating a shipping label for a Return Merchandise Authorization (RMA).

## v1.0.3

-  **MDVA-25602** _(for Magento `2.3.0 - 2.3.4`)_—Fixes the issue with PayPal Payflow Pro payment method and treating cookies as SameSite=Lax by default in the Chrome 80 browser and API response redirect to customer login page.
-  **MDVA-26694** _(for Magento `>=2.3.0 <2.3.6 || 2.4.0`)_—Fixes the issue with product and catalog caches expiring daily, though being scheduled to expire differently.
-  **MDVA-27825** _(for Magento `>=2.3.0 <2.4.1`)_—Fixes the issue where exporting of big amounts of data failed because of memory leak.
-  **MDVA-29085** _(for Magento `>=2.3.0 <=2.3.5-p1`)_—Fixes the B2B issue where no required new company emails are sent out if a company is created by API.
-  **MDVA-29344** _(for Magento `>=2.3.5 <=2.4.0-p1`)_—Fixes the issue where Page Builder gets stuck after copying text from a header element to a text element.
-  **MDVA-29835** _(for Magento `>2.3.1 <2.4.2`)_—Fixes the issue where gift card orders contained two codes instead one.
-  **MDVA-30052** _(for Magento `>=2.3.2-p2 <2.3.5`)_—Fixes the issue with private content (local storage) not being populated correctly, which resulted in performance problems.
-  **MDVA-30131** _(for Magento `>=2.3.4 <2.3.6 || 2.4.0`)_—Fixes the issue with layered navigation, where the `No` value for boolean type product attributes was not included in layered navigation if Elasticsearch was used as a search engine.
-  **MDVA-35514** _(for Magento `>=2.4.0 <2.4.1`)_—Fixes the issue with creating a shipping label and adding ordered products to a package in the Create Packages modal window.

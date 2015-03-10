---
layout: default
group: release-notes
title: Release Notes
menu_title: Issues fixed since last release
menu_node: 
menu_order: 4
github_link: release-notes/issues-fixed.md
---

<h2 id="fixed">Issues fixed since last release</h2>

*    Issue with distance between "Log in" & "or" & "Register" in Frontend header
*    JavaScript error when clicking on toggle arrow to show fixed product tax (FPT) in shopping cart
*    PHP Warning when trying to checkout with Multiple Addresses on review order page
*	 Fixed fatal error on page that contains a widget with a condition based on "Category"
*    Compiled definitions can cause unexpected errors compared to runtime definitions
*   Fixed an issue with image rendering on the CMS page on Frontend when web server rewrites are disabled
*   Fixed an issue where the "Select all" mass action on the Customers page did not select all customers 
*   Fixed an issue where values for a customer  attribute of multiple-select type were not saved
*   Fixed an issue where the parental wakeup() method was not called in interceptors
*   Fixed an issue where bundle products with the same configurations added from different pages were displayed in the wishlist as separate items 
*   Fixed an issue where the number of items added to the wishlist was not displayed on certain pages
*   Fixed an issue where it was impossible to use `\Magento\Customer\Model\Resource\AddressRepository::getList` with predefined `direction(sortOrder)` 
*   Fixed an issue where editing a product from a wishlist led caused a fatal error 
*   Fixed an issue where the redirect link to continue shopping was absent in the success message after adding product to a wishlist 
*   Fixed an issue where HTML tags where displayed in product prices on the Customer's Wishlist page in the Magento Admin
*   Fixed an issue with the redirect after searching product in a customer wishlist in the Admin
*   Fixed an issue where a configurable product did not go out of stock when last subitem of some option was sold
*   Fixed an issue with Varnish config generation for multiple IPs in access list field
*   Fixed an issue where changes were not saved when the default billing or shipping address was not selected in customer addresses 
*   Fixed the issue where the Update Qty button looked disabled during a partial invoice creation
*   Fixed an issue where the creation date was not displayed in invoices and credit memo grids
*   Fixed an issue where it was impossible to install `Magento_Quote` on PHP 5.6 
*   Fixed an issue where date created column is not populated in invoices and credit memo grid
*    Fixed an where issue were WebAPI generated the wrong WSDL 
*    Fixed an issue where SOAP tests failed after upgrading to Zend Framework 1.12.9 
*    Fixed an issue where the `There is no data for export` message displayed permanently after invalid search 
*    Fixed an issue where there was no ability to set category position during creation 
*    Fixed a CSS issue where certain images were absent on banners
*    Fixed an issue where the `Date Of Birth` value was reset to current date on the customer form
*    Fixed an issue where the behavior of the "Terms and Conditions" validation on multiple address checkout was different from the one for the one-page checkout 
*    Fixed an issue where it was impossible to check out with multiple addresses
*    Fixed an issue where the `This is a required field` message was not displayed for "Terms and Conditions" if the latter was not selected
*    Fixed an issue where the Discounts and Coupons RSS feed had incorrect title
*    Fixed an issue where a wrong special price expiration date was displayed in RSS
*    Fixed an issue in the Import functionality where imported files disappeared after the Check Data operation
*    Fixed an issue where the Unsubscribe link in the Newsletter was broken
*    Fixed an issue where stock status changed incorrectly after import
*    Fixed an issue where selected filters and exclude did not work during Export
*    Fixed an issue where tax details order was different on order/invoice/refund create and view pages 
*    Fixed a typo in the getCalculationAlgorithm public function
*    Fixed an issue where the incorrect value of Subtotal Including Tax was displayed in invoices
*    Fixed an issue where tax details were not displayed on a new order
*    Improved pricing performance using caching
*    Fixed an issue where CsvImportHandler tests still referred to links from Tax module instead of the TaxImportExport module
*    Fixed an issue where an exception was thrown instead of 404 if altering the URL for a product with required configuration on the storefront
*    Fixed an issue where the title of successfully placed order page was empty
*    Fixed an issue where certain fields were not disabled by default on the website scope in System Configuration as expected
*    Eliminated the `protocol` parameter from the ReadInterface and WriteInterface
*    Fixed an issue where a coupon code was reported to be invalid if it has been removed from reorder in the Magento Admin and then re-applied
*    Fixed an issue where the Recently Compared Products and Recently Viewed Products widgets were not displayed in sidebars
*    Fixed an issue where the Orders and Returns widget type contained unnecessary Tab characters
*    Fixed an issue where an image added to a CMS page using the WYSIWYG editor was displayed as a broken link after turning off the `allow_url_fopen` parameter in `php.ini`
*    Fixed an issue where it was impossible to log in to the Admin from the first attempt after changing Base URL
*    Fixed an issue where it was impossible to set back the default English (United States) interface locale for an Admin user after changing it so another value
*    Fixed an issue where it was possible to execute malicious JavaScript code in the context of website via the Sender Email parameter
*    Fixed an issue where the Product Stock Alert email was sent to a customer from a store view different than a customer account was created in
*    Fixed an issue where the "Server cannot understand Accept HTTP header media type" error message was not informative enough
*    Fixed an issue where unit tests did not work as expected after installing Magento 2
*    Fixed an issue where the password change email notification was sent after saving an Admin account settings even if password was not changed
*    Fixed an issue where static tests failed as a result of adding  API functional tests
*    Fixed an issue where the Edit button was present for invoiced orders
*    Fixed an issue where function `_underscore` did not work with keys like SKeyName (`s_key_name`)
*    Fixed an issue where a fatal error occurred when browsing categories if the web server did not have write permissions for `media/catalog/product`
*    Fixed an issue where malicious JavaScript could be executed when adding new User Roles in the Admin
*    Fixed an issue where incorrect output format was returned when invoking the Customer service
*    Fixed an issue where it was impossible to activate an integration after editing the URLs
*    Fixed an issue where incorrect class path was used in the ObjectManager calls
*    Fixed an issue where inconsistent Reflection classes were used for WebApi applications
*    Fixed an issue where the parent element was removed from `theme.xml` by mistake
*    Fixed an issue where an exception occurred when adding configurable products to cart from the wishlist
*    Fixed an issue where the `Not %Username%?` link was displayed for a logged in user while pages were loaded
*    Fixed an issue where Shopping Cart Price Rules based on product attributes were not applied to configurable products
*    Fixed an issue where the Tax Class drop-down field on New Customer Group page contained the 'none' value when a tax class already existed
*    Fixed an issue where the Credit Memo button was absent on the Invoice page for payments
*    Fixed an issue where incorrect totals were shown in the Coupon Usage report
*    Fixed an issue where an error occurred and the Append Comments check box was cleared when submitting an order in the Admin
*    Fixed an issue where the Transactions tab appeared in the Admin for orders where offline payment methods were used
*    Fixed an issue with the extra empty line appearing in the Customer Address template

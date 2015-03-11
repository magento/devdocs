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
*    Fixed an issue where the Tax Class drop-down on New Customer Group page contained the `none` value when a tax class already existed
*    Fixed an issue where the Credit Memo button was absent on the Invoice page for payments
*    Fixed an issue where incorrect totals were shown in the Coupon Usage report
*    Fixed an issue where an error occurred and the Append Comments check box was cleared when submitting an order in the Admin
*    Fixed an issue where the Transactions tab appeared in the Admin for orders where offline payment methods were used
*    Fixed an issue with the extra empty line appearing in the Customer Address template
*    Fixed an issue with incorrect price index rounding on bundle product
*    Fixed an issue with product price not being updated when clicking the downloadable link on the downloadable product page
*    Fixed an issue with exception appearing when clicking the Compare button for selected products
*    Fixed an issue with the Compare Products block appearing on mobile devices
*    Fixed an issue with inability to add conditions to the Catalog Products List widget
*    Fixed an issue with a customer redirected to page 404 when trying to unsubscribe from a newsletter
*    Fixed an issue with showing a warning when customer tried to change billing address during multiple address checkout
*    Fixed an issue with redirecting a customer to the Admin panel when clicking the Reset customer password link
*    Fixed an issue with inability of a newly registered customer to select product quantity and shipping addresses during multiple checkout
*    Fixed an issue with showing Zend_Date_Exception and Zend_Locale_Exception exceptions after a customer placed an order
*    Fixed an issue with inability to rename a subcategory on a store view level
*    Fixed an issue with fatal error appearing when trying to enter a new address on multi-address checkout
*    Fixed an issue with inability to delete a product in the customer’s wishlist in the Admin 
*    Fixed an issue with inability to change product configuration in the customer’s wishlist in the Admin 
*    Fixed an issue with showing errors when customer with no addresses tried to checkout a product via Check out With Multiple Addresses
*    Fixed an issue with fatal errors appearing in the Recently Viewed Products storefront widget block
*    Fixed an issue with the ability of an authenticated RSS admin user to access all RSS feeds
*    Fixed an issue with widgets losing their options and part of their layout references if more than 11 layout references are added and saved
*    Fixed an issue with the Privacy Policy link missing in the storefront
*    Fixed an issue with inability to place an order during multiple checkout
*    Fixed an issue with store views switching in the storefront
*    Fixed an issue with inability to open the edit page for a CMS page after filtering in the grid
*    Fixed an issue with inability to expand customer menu if it doesn't contain the categories, if responsive
*    Fixed an issue with the absence of JS validation for the Zip/Postal code field
*    Fixed an issue with a 1 cent difference in the tax summary and detail on an invoice and a credit memo for a partial invoice when a discount and fixed product tax are applied
*    Fixed an issue with throwing validation error for the State field when saving a product with FPT
*    Fixed an issue with throwing an error when trying to save a timezone
*    Fixed an issue with Exploited Session ID in second browser leading to Error
*    Fixed an issue with session loss on page 404 when using the Varnish caching
*    Fixed an issue with integration test not resetting static properties to correct default values after each test suite
*    Fixed an issue with PDO exception during an installation when MySQL does not meet minimum version requirement
*    Removed hard-coded PHP version requirement in the installer. Validation of PHP version during installation now uses the Composer information
*    Fixed an issue with not redirecting to the setup page when Magento is not installed
*    Fixed an issue with missing of some languages in the drop-down list on the Customize Your Store page of the Web installation
*    Merged and updated data and SQL install scripts to 2.0.0
*    Merged user reported patch to fix fetching headers for APIs when PHP is run as fast CGI
*    Fixed an issue with the fatal error when enabling Website Restrictions in the storefront
*    Fixed an issue with showing incorrect message for view files population tool when the application is not installed
*    Fixed an issue with the Continue button losing its style after returning to the Shipping Information step during one-page checkout in Luma, IE11, FF
*    Fixed an issue with broken responsive design of the Compare Products functionality in the Blank Theme
*    Fixed an issue with showing the “No such entity with cartId' message error appearing during creating a new order for a new customer on non-default website
*    Fixed an issue with inability to find by name simple and virtual products in the customer wishlist grid
*    Fixed an issue with inability to install Magento without the ConfigurableProduct module
*    Fixed an issue with fatal error appearing on the grouped product page if the GroupedProduct module is disabled
*    Fixed an issue with no validation for assigning an attribute to an attribute group (API)
*    Fixed an issue with inability to place an order with the registration method and different billing and shipping address
*    Fixed an issue with broken footer layout on some Admin panel pages (product creation, order creation, catalog etc.) in IE11
*    Fixed an issue with countries previously selected in the Ship to specific countries field not visible when the parameter is changed to showing all allowed countries and set back again to specific countries in the flat rate shipping method in IE11
*    Fixed an issue with product alerts not working
*    Fixed an issue with incorrect URL rewrite for category with two stores after renaming category for one store
*    Fixed an issue with inability to save a bundle product with a re-created bundle option
*    Fixed an issue with inability to add conditions to the Catalog Products List widget
*    Fixed an issue with export not available if modules for Products Import/Export are removed
*    Fixed an issue with the Use Layered Navigation for custom product attributes leading to an error on an anchor category page in the storefront
*    Fixed an issue with the broken export product file on environment SampleData
*    Fixed an issue with cache not invalidating after categories are moved in tree
*    Fixed an issue with last five orders showing 0 items quantity after invoices are created
*    Fixed an issue with an exception displaying on a category page if installing Magento without the `LayeredNavigation` module
*    Fixed an issue with tax rate not being saved if all states were chosen for any non-default country
*    Fixed an issue with multi-select fail on the Customer add/edit form
*    Added exception handling for required fields for REST APIs
*    Fixed an issue with success message missing after the signup for price alert
*    Fixed an issue with inability to create a return order from the Admin panel
*    Fixed an issue with incorrect work of the Default Value for Disable Automatic Group Changes Based on VAT ID setting
*    Fixed an issue with fatal error on the I18n tools launch due to incorrect bootstrap/autoload
*    Removed incomplete in functional tests for fixed bugs
*    Fixed an issue with missing theme preview images
*    Fixed an issue with invalid online status on the Edit Product page in the Admin panel
*    Fixed an issue with incorrect location of an error message "Incorrect CAPTCHA" in the storefront
*    Fixed an issue with showing  endless JavaScript loader on the View Configurable Product page in the storefront, IE, Google Chrome
*    Fixed a JavaScript error that occurred on the Create Admin Account step during Magento web installation
*    Fixed an issue where a product remained in stock after saving it with the Out of Stock inventory value
*    Fixed an issue where the JavaScript loader was not disappearing on the View Product page on the storefront if a customer closed the gallery
*    Fixed an issue where the JavaScript loader was absent while CAPTCHA was being reloaded
*    Fixed an incorrect alignment of fields on the Create Packages pop-up
*    Fixed an issue where Google Content Experiments was not available for CMS pages
*    Fixed the New Product Attribute pop-up
*    Fixed an issue where a product page was not found if an incorrect image URL was inserted using the WYSISYG editor
*    Fixed an issue with the Search Term Report and Search Term list in the Admin 
*    Fixed an issue where downloadable links and samples were not saved because of a JavaScript error
*    Fixed an issue where changes made in tax configuration did not appear in the Admin on the Create New Order page
*    Fixed an issue where it was impossible to update options of bundle products from the mini shopping cart
*    Fixed an issue where layered navigation worked incorrectly with the Automatic (equalize product counts) setting
*    Fixed an issue with the incorrect error message appearing when running `php -f setup/index.php help`
*    Fixed an issue where URLs for subcategories were incorrect after editing URL of a subcategory
*    Fixed an issue where attribute labels were loaded from cache after updating product attributes
*    Fixed an issue where form data was not preserved when product form did not pass server side validation
*    Fixed an issue with static files missing in production mode
*    Fixed issues with errors after running the static view files deployment tool 
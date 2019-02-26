---
group: release-notes
title: Magento Commerce 2.2.8 Release Notes

---

*Patch code and release notes were published on .*




We are pleased to present Magento Commerce 2.2.8. This release includes over 30 critical enhancements to product security, over 150 core code fixes and enhancements, and over 100 community-submitted pull requests. 

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.8) have been ported to 2.3.1, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.



## Highlights

In addition to over 30 critical security fixes, look for the following highlights in this release:


### Core code highlights

This release includes improvements to general usability of the core code plus enhancements to . 


#### General improvements



### Community contribution highlights

Highlights of community contributions include these fixes:

Looking for more information on these new features as well as many others? Check out [Magento Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).


## Functional fixes

In addition to security enhancements, this release contains the following functional fixes. 


### Installation, setup, and deployment

<!-- MC-5926 -->* The `bin/magento setup:config:set --enable-syslog-logging=true|false` command now provides the functionality that Magento previously provided in .  See [Logging](https://devdocs.magento.com/guides/v2.3/config-guide/logging.html). 

<!-- MAGETWO-83474 -->* The storefront now  uses HTTPS exclusively and the Admin  uses HTTP without resulting in excessive redirects. 



<!-- ENGCOM-2958-->* 

Use route ID when creating secret keys in backend menus instead of route name

Backend Security key broken for controllers with frontname not equal to route ID



*Fix submitted by [Laura Folco](https://github.com/lfolco) in pull request [18018](https://github.com/magento/magento2/pull/18018)*. [GitHub-7557](https://github.com/magento/magento2/issues/7557)


<!-- ENGCOM-2723 -->* Integrations are no longer reset after running the `bin/magento setup:upgrade` command. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18273](https://github.com/magento/magento2/pull/18273)*. [GitHub-12095](https://github.com/magento/magento2/issues/12095)

<!-- ENGCOM-3001 -->* The `./bin/magento config:show` command no longer fails with a fatal error after you run `./bin/magento app:config:dump`. *Fix submitted by [Keyur Shah](https://github.com/keyurshah070) in pull request [17993](https://github.com/magento/magento2/pull/17993)*. [GitHub-17582](https://github.com/magento/magento2/issues/17582)

<!-- ENGCOM-3104 -->* A new `cron.log` file dedicated to logging cron-related information has been added to Magento. This new log file reduces output previously sent to the `system.log` file, making it easier to find non-cron-related information in the `system.log` file. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18389](https://github.com/magento/magento2/pull/18389)*. [GitHub-17190](https://github.com/magento/magento2/issues/17190)

<!-- ENGCOM-3207 -->* The `getHostUrl()` method has been updated to reference `HTTP_HOST` rather than `SERVER_PORT`. *Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18595](https://github.com/magento/magento2/pull/18595)*. [GitHub-18585](https://github.com/magento/magento2/issues/18585)


<!-- MAGETWO-95411 -->* 

Add the ability to install Magento without creating an administrator

Magento can be installed without creating an administrator.

To simplify deployment process on Cloud, we need to make admin user creation optional, so initial deployment happens without admin created.

Background:

Currently initial installation needs admin user to be created
If not using setup wizard, on Cloud this user has same username & random password for every customer
^ is potential security issues and would be better if we can run deployment without creating random admin users




<!-- ENGCOM-3756-->* Magento now skips disabled modules  when compiling static content. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [19989](https://github.com/magento/magento2/pull/19989)*. [GitHub-19605](https://github.com/magento/magento2/issues/19605)

<!-- ENGCOM-3881 -->* The `config:set --lock-config` command  now acts as expected on all scopes. Previously, after this command was run, admin users were not able to change the configuration for the default store, but could still change it for other scopes. *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [20322](https://github.com/magento/magento2/pull/20322)*. [GitHub-19609](https://github.com/magento/magento2/issues/19609)



### Backend

<!-- MAGETWO-96174 -->* The address form in the Admin order creation workflow has been refactored to improve performance.

<!-- ENGCOM-3777-->* Calling `getCurrentUrl` on a store no longer adds the  `___store` parameter when **store code in URL** is set to **yes** and the current store is not the same store requested in the URL. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [19910](https://github.com/magento/magento2/pull/19910)*. [GitHub-19285](https://github.com/magento/magento2/issues/19285)

<!-- ENGCOM-3903 -->* Corrected alignment of the **Detailed Rating** field on the Edit Review page. *Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20272](https://github.com/magento/magento2/pull/20272)*. [GitHub-20120](https://github.com/magento/magento2/issues/20120)

<!-- ENGCOM-3868 -->* `CustomerRepository::getList()` now loads custom attributes named `company`. *Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [20284](https://github.com/magento/magento2/pull/20284)*. [GitHub-17759](https://github.com/magento/magento2/issues/17759)


### B2B

<!-- MAGETWO-96442 -->*  Merchants can now add a product to the default public catalog,  and the product can be accessed by the product URL on the storefront. Previously, Magento did not add the product to the shared catalog and instead displayed this error, `Requested categories don't exist`. 

<!-- MAGETWO-94884 -->* Magento no longer displays a duplicate **Add product** button when you change currency from the Order currency dropdown while creating an order from the Admin. 

<!-- MAGETWO-94820 -->* 
If an additional admin user creates a custom shared catalog and the user is later deleted, the catalog is deleted as well.



EXPECTED RESULTS:
The custom shared catalog should not be deleted when the user that created it is deleted

ACTUAL RESULTS:
The custom shared catalog is deleted when the user that created it is deleted




<!-- MAGETWO-85125 -->* Magento now loads the company profile, roles, and permissions sections of a company account when **Enable Reward Points Functionality** is set to **no** in the Admin, and you flush cache storage. 








<!-- MAGETWO-88254 -->* 

"Tier Pricing" of Products changes to "Price" (without discount) after Updated Items and Quantities in the Order of B2B Store View.

When creating an order in the admin panel for a B2B store, the tier price of products in the order changes when adding more products to the order, applying a custom price to one of the products or when applying a coupon code to the order.

EXPECTED RESULTS: 
 Tier prices for all already added products shouldn't change.

ACTUAL RESULTS:
 The tier price for all already added products changes.





<!-- MAGETWO-90835 -->* You can now filter customers by status. Previously, Magento threw a SQL ERROR when you clicked on **Apply Filters** after setting the filter to status. 

<!-- MAGETWO-94431 -->* Magento now displays products that merchants have added to the public catalog through **Product** > **Edit page** > **Shared Catalog**. Previously, these items appeared if added  through **Catalog** > **Shared Catalog**, but not through **Product** > **Edit page** > **Shared Catalog**. 

<!-- MAGETWO-89296 -->* Menus now close as expected from the Quick Order page in mobile view.


### Bundle products

<!-- MAGETWO-88810 -->* Bundle product SKUs are now built based on the order of the associated (selected) product ID numbers in ascending order. Previously, SKUs were built based on the order of the selected product ID numbers in ascending order instead of the order in which the option is added to the bundle product.

<!-- ENGCOM-2997 -->* Magento no longer overwrites user-defined option quantities with default values when a customer edits a bundle product from a shopping cart. *Fix submitted by [Joseph Maxwell](https://github.com/JosephMaxwell) in pull request [15905](https://github.com/magento/magento2/pull/15905)*. [GitHub-4942](https://github.com/magento/magento2/issues/4942)


<!-- ENGCOM-3275 -->* Bundle special prices are now correctly rounded when you load and resave a bundle product. Previously, when you reloaded a bundle with a special price that requires four positions after the decimal (for example, 78,9473), Magento rounded the price to two decimal places. *Fix submitted by [magently](https://github.com/magently) in pull request [17971](https://github.com/magento/magento2/pull/17971)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)


<!-- MAGETWO-90381 -->* Magento now maintains the correct base price for a bundle product when you add a bundle product in one currency and then add the same bundle product option in a different currency. Previously, when you added the same bundle product option in a different currency, Magento doubled the base price. 


### CAPTCHA

<!-- MAGETWO-93780 -->* CAPTCHA now appears as expected in the Log in popup window.




### Catalog



<!-- MAGETWO-69650 -->* 

Merchant reported that some products are showing a discounted price in the shopping cart when no discounts are applied and products do not have special price and no tiered price.





<!-- MAGETWO-73140 -->* Categories that are set to anchor **Yes** and that have disabled subcategories no longer display  products from those disabled subcategories. [GitHub-9002](https://github.com/magento/magento2/issues/9002)

<!-- MAGETWO-96288 -->* You can now use REST to update category positions. 

<!-- MAGETWO-95898 -->* 

Cannot update qty in mini shopping cart if enable decimal qty and qty increment	
 Create a simple product with next inventory configuration

Minimum Qty Allowed in Shopping Cart = 1.1
Qty Uses Decimals = Yes
Enable Qty Increments = Yes
Qty Increments = 1.1
3. Go to frontend
4. Add product to cart(qty = 1.1)
5. Open mini shopping cart and try to update qty to 2.2

ACTUAL RESULTS:
Appears error popup "You can buy this product only in quantities of 1.1 at a time."

Expected Result
Qty updated successfully.



<!-- MAGETWO-95556 -->* Magnifier now correctly handles zoomed sections of images when the image width/height ratio has a `~2x` difference. Previously, these sections were distorted. 

<!-- MAGETWO-95461 -->* You can now save products with at least one tier price.

<!-- MAGETWO-95122 -->* Magento now saves default values for category URL paths in accordance with the **Use Default Value**  and **Create a Permanent Redirect** settings. Previously, in deployments running multiple stores, if a category's URL key was changed and saved, Magento did not change the category's url key back to the default URL key when saved with the **Use Default Value** box checked and **Create a Permanent Redirect** box unchecked.

<!-- MAGETWO-94988 -->* 

Image downsampling to 80% on the product page

Jpeg image quality now can be changed by admin via settings 
Image frontend resize now can be switched off by admin via settings

Our Partner Tryzen's merchant David Nieper is not happy with the image quality of their Category Landing pages, Product Landing pages and Product Listing pages
They area using Fastly IO and even when they configure fastly to use non-lossy compresion and 100% quality, the impages are still be downsized 80%

Download achok3-150dpi.jpg. Note it is 276KB and 150dpi
Go to Admin > Catalog > Product > Any product
Upload Image. Note image size is 276KB (after fix from MAGETWO-94092)
Go to the product page
Click on the uploaded image (popup will be loaded)
Open browser Inspector, find a path to this image
Download image
Actual result : downloaded image has original width and height, but 80dpi

Expected result:  image should be identical to the uploaded (equal size, width, height and DPI)



<!-- MAGETWO-93149 -->* MC5604 

Virtual merchandiser product position can't be changed when using a condition.

Create a custom product attribute, with Text Field as the input type
Include that attribute in the Stores > Configuration > Catalog > Virtual Merchandiser configuration as an attribute that can be used
Save the configuration and edit a category to match products by rule based on a condition using the custom attribute.
Make the condition operator "Contains" and enter a string which should be matched by the value for the custom attribute on products that are in the catalog.
Attempt to reposition the product order (Sorting should be set to "None").
Attempt to save the category so that any successfully altered positions are saved to the database and visible on page reload.
 ACTUAL RESULTS:
Position not saved

 EXPECTED RESULTS:
Position saved and respected on storefront





<!-- MAGETWO-91070 -->* 

Missing Swatch Images Break Catalog Pages

Create Several simple products and add to the same category
Remove Swatch images from the server rm -rf ./pub/media/attribute/swatch/*
Clear cache
Open category page

EXPECTED RESULTS:
Products should be shows in the category

ACTUAL RESULTS:
No one product in the category.
"Error: [object Object]" in the browser console.


<!-- MAGETWO-73687 -->* Magento now retains across categories any value you set for the number of categories displayed per page.

<!-- MAGETWO-73449 -->* Changes to product images made under the All Stores scope now affect product images at the store-view level

<!-- ENGCOM-4089 -->*  4094


*Fix submitted by [Milind Singh](https://github.com/milindsingh) in pull request [20886](https://github.com/magento/magento2/pull/20886)*. [GitHub-20409](https://github.com/magento/magento2/issues/20409)


Magento\Catalog\Api\ProductRenderListInterface returns products regardless of visibility.

Expected result
No results on the search

Actual result
One result on the search


<!-- MAGETWO-73342 -->* Customers can change product status by clicking on the toggle element or by clicking on label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.

<!-- ENGCOM-2930 -->*  Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17885](https://github.com/magento/magento2/pull/17885)*. [GitHub-14050](https://github.com/magento/magento2/issues/14050)

<!-- ENGCOM-2943 -->* You can now save a product on deployments in single-store mode when the default website has been removed and a new website has been added. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [18001](https://github.com/magento/magento2/pull/18001)*. [GitHub-13405](https://github.com/magento/magento2/issues/13405)

<!-- ENGCOM-3047 -->* `getStoreId()` now consistently returns `int`. *Fix submitted by [sv3n](https://github.com/sreichel) in pull request [18086](https://github.com/magento/magento2/pull/18086)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)

<!-- ENGCOM-3097 -->* You can now set a Boolean attribute to is_filterable, which allows them to be included in layered navigation. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [17823](https://github.com/magento/magento2/pull/17823)*. [GitHub-3283](https://github.com/magento/magento2/issues/3283)

<!-- ENGCOM-3050 -->* If you create a catalog price rule based on categories with a nesting level 4 or higher, these categories now maintain the status of their checkboxes when you re-open Category Chooser. 
Previously, when you reopened these categories, no checkboxes were checked.  *Fix submitted by [magently](https://github.com/magently) in pull request [18175](https://github.com/magento/magento2/pull/18175)*. [GitHub-17493](https://github.com/magento/magento2/issues/17493)


<!-- ENGCOM-3133 -->* An incorrect return type in the `StockRegistryInterface` API has been corrected. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [18427](https://github.com/magento/magento2/pull/18427)*. [GitHub-15085](https://github.com/magento/magento2/issues/15085)

<!-- ENGCOM-3158 -->* Magento no longer changes the attribute type of 'backend_type' from `varchar` to `int` when the product associated with the attribute is saved or updated in the Admin. *Fix submitted by [Bartosz Kubicki](https://github.com/bartoszkubicki) in pull request [18196](https://github.com/magento/magento2/pull/18196)*. [GitHub-9219](https://github.com/magento/magento2/issues/9219)

<!-- ENGCOM-3171 -->* Magento now validates the quantity of items in th shoppng cart against the **Maximum Qty Allowed in Shopping Cart** setting. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18552](https://github.com/magento/magento2/pull/18552)*. [GitHub-18477](https://github.com/magento/magento2/issues/18477)

<!-- ENGCOM-3193 -->* When a new customer is created, Magento sets a value of zero for any custom attribute if no other value is explicitly provided. Previously, if no value was explicitly assigned, Magento did not save the custom attribute with any value. *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16915](https://github.com/magento/magento2/pull/16915)*. [GitHub-14510](https://github.com/magento/magento2/issues/14510)

<!-- ENGCOM-3230 -->*  `\Magento\Catalog\Model\Product::getQty()` now consistently returns float/double. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [18424](https://github.com/magento/magento2/pull/18424)*. [GitHub-18094](https://github.com/magento/magento2/issues/18094)


<!-- ENGCOM-3254 -->* 

*Fix submitted by [m.matrafailo](https://github.com/k1las) in pull request [18535](https://github.com/magento/magento2/pull/18535)*. [GitHub-18534](https://github.com/magento/magento2/issues/18534)


 2 wysiwyg on catalog category edit page


1. Have 2 or more wysiwyg editors on catalog category edit page;
2. Press "WYSIWYG Editor" popup button on first editor;
3. Fill some text data in opened popup form.
4. Submit popup.
5. Press "WYSIWYG Editor" popup button on second editor;
6. Fill some text data in opened popup form.
7. Submit popup.

Expected Result:
The filled data isn't changed(reseted) after second editor popup submit.

Actual Result
The data of first editor have been lost after second editor popup submit.





*Fix submitted by [m.matrafailo](https://github.com/k1las) in pull request [18535](https://github.com/magento/magento2/pull/18535)*. [GitHub-18534](https://github.com/magento/magento2/issues/18534)

<!-- ENGCOM-3261 -->* 

the "order by price" option for a product listing is not working. Neither ascending or descending.

As a customer, If I order a product listing on price, the products should be ordered on price.


*Fix submitted by [Giel Berkers](https://github.com/kanduvisla) in pull request [18737](https://github.com/magento/magento2/pull/18737)*. [GitHub-18264](https://github.com/magento/magento2/issues/18264)


<!-- ENGCOM-2930 -->* Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17885](https://github.com/magento/magento2/pull/17885)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720), [GitHub-14050](https://github.com/magento/magento2/issues/14050)




<!-- ENGCOM-3317 -->* 

Expected result
1. SKU should be trimmed while importing into the database.

Actual result
1. [Screenshot, logs]
   Two duplicates SKU are created with same name.

1. SKU accepts the value with space at end at starting of the value. They are not validated while importing products by CSV.

*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18862](https://github.com/magento/magento2/pull/18862)*. [GitHub-16572](https://github.com/magento/magento2/issues/16572), [GitHub-12300](https://github.com/magento/magento2/issues/12300) 




<!-- MAGETWO-93673 -->*  You can now use an attribute set on the product create page after moving the attributes from one attribute group to another.




<!-- MAGETWO-96258 -->* 

Sorting by a price of configurable products is not working correctly when Display Out of Stock Products is enabled.

Create two products with prices $51 and $53
Create a configurable product with two variations
Set variation prices to $52
Edit first variation of the configurable
Set the Special Price to $50
Set the simple as Out of Stock
Set Display Out of Stock = Yes
Clean cache
Run reindex
Go to the storefront and sort by Price low to hight
ACTUAL RESULT
The product prices are sorted in the following order: $52, $51, $53

EXPECTED RESULTS
The product prices are sorted in the following order: $51, $52, $53

Sorting by a price of configurable products is not working correctly when Display Out of Stock Products is enabled.


<!-- MAGETWO-93273 -->* Magento no longer throws an error when you use REST to update a product's special price if the product previously had a scheduled update to its special price or had a special price set from the Admin. 


<!-- MAGETWO-96374 -->* In a multi-website instance, with a category that contains products belonging to different websites, when the product sort order in a category is changed at the store-view level, the products that belong to a different website gets unassigned from the category.



<!-- MAGETWO-90930 -->* Magento now correctly displays the greater than operator (>) when you configure the catalog products list widget for a CMS block.

<!-- MAGETWO-73840 -->* 

Videos in product description are displayed incorrectly

Actual result:
Height of second video is too small (see attached screenshot)

Expected result:
Video size should be the same as in wysiwyg in backend


<!-- ENGCOM-3312 -->* You can now insert multiple catalog product list widgets in a CMS page.

<!-- ENGCOM-3373 -->*


*Fix submitted by [Oleksandr Miroshnichenko](https://github.com/omiroshnichenko) in pull request [19014](https://github.com/magento/magento2/pull/19014)*. [GitHub-17813](https://github.com/magento/magento2/issues/17813)


1. Open the shop.
2. Visit a lot of different product pages (~400 in our case) without invalidating user data.
3. Notice how browser slows down at load because of `product_data_storage` in localStorage getting bigger and bigger.

I'm also attaching the contents of [product_data_storage.txt](https://github.com/magento/magento2/files/2323063/product_data_storage.txt), which we dumped from one of the affected computers that you can use to replace the value in your browser.

Expected result
1. I think that some rotating mechanism or even a simple purge when number of products in `product_data_storage` is getting too big.




<!-- ENGCOM-3738 -->* Corrected misspelled argument name `allowDrug` to `allowDrag` in `vendor/magento/module-catalog/view/adminhtml/templates/catalog/product/attribute/set/main.phtml`.

<!-- ENGCOM-3766 -->* Corrected formatting issue on **Catalog** > **Category** > **Product** > **Assign products** page.

<!-- ENGCOM-3790 -->* Magento now correctly imports  `product_type` drop-down attributes. Previously, Magento displayed an error message indicating that values for these attributes were incorrect during import. 


<!-- ENGCOM-3800 -->* Magento no longer throws an exception when a customer tries to place an order whose components will be shipped to different addresses. 

<!-- ENGCOM-4004 -->*  The `bin/magento catalog:images:resize` command now processes all specified images. 


<!-- ENGCOM-4003 -->*  The message that Magento displays when you successfully add a product to your cart or shopping list is now available in the i18n translation file.

<!-- ENGCOM-3859 -->*  `getProductUrl` no longer returns the wrong URL when the current category has no products.

<!-- ENGCOM-3978 -->* Magento now correctly applies the **Set Items' Status to be In Stock When Order is Cancelled** attribute setting. Previously, after an order was canceled, Magento increased product stock even when **Set Items' Status to be In Stock When Order is Cancelled** is set to **no**.

<!-- ENGCOM-3832 -->* Magento no longer displays a negative value on the product list page when a product's stock falls below the product's `OutOfStock` threshold value.

<!-- ENGCOM-3826 -->* 

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [20178](https://github.com/magento/magento2/pull/20178)*. [GitHub-16198](https://github.com/magento/magento2/issues/16198)


Category image remain after deleted

Steps to reproduce
1. Go to Admin > Catalog > Categories
2. Upload image via field Category Image under Content section > Save
3. Click on trash icon to remove image > Save

Expected result
1. Image disappeared in category management + Image under pub\media\catalog\category should be removed

Actual result
1. Image disappeared in category management + Image under pub\media\catalog\category still remain




### Catalog rule

<!-- ENGCOM-3396 -->* Magento no longer throws an exception when you try to edit and save a catalog price rule when the Admin language is set to a language other than English.


### Cart and checkout

<!-- MAGETWO-95938 -->* Administrators with appropriate permissions can now manage customer shopping carts from the Admin. Previously, when an administrator clicked **Manage Shopping Cart** from **Admin** > **Customers** > **Customer**, Magento threw an error. 

<!-- MAGETWO-95846 -->* Customers can now configure options for a configurable product after adding it to their shopping cart.  Previously, under these circumstances, Magento threw a fatal error.

<!-- MAGETWO-95067 -->* **Checkout information now persists after a cart update**. Information previously entered by a customer during check out (such as shipping address) now persists after the customer updates their shopping cart. Previously, when a customer updated their shopping cart, all information previously entered during check out (such as shipping address) was deleted

<!-- MAGETWO-94425 -->* Magento now updates the minicart as expected when an administrator updates the product from the Admin. Previously, if a product that had been added to the shopping cart was subsequently disabled from the Admin,  the product was still displayed in the cart.

<!-- MAGETWO-91932 -->* Magento now validates zip codes for new addresses as expected when the **My billing and shipping address are the same** option is unchecked. 

<!-- MAGETWO-91138 -->* You can now update the quantity of grouped product  if the quantity field was left empty when initially added to an Admin order by SKU. Previously, under these circumstances, you could not update the quantity. 

<!-- MAGETWO-90056 -->*  Tooltips that are available from the checkout page on mobile devices are now displayed properly. Previously, customers had to scroll to access the tooltip. 

<!-- MAGETWO-89397 -->* Magento now uses the configured default sort order  during checkout to calculate totals. Previously, Magento ignored the configured order and used `Sub Total > Shipping > Discount > Tax > Grand Total` to calculate order totals. 

<!-- MAGETWO-87971 -->* 
Once Top Destinations have been saved, and you try to remove all of them, the Country dropdown at the cart/checkout will still show the countries at the top.

EXPECTED RESULTS:
When removing all Top destinations, the Country dropdown should no longer display any Top destinations

ACTUAL RESULTS:
When removing all Top destinations, the Country dropdown continues to display the now-removed Top destinations


<!-- MAGETWO-87016 -->* Magento no longer removes the billing and shipping address information for an order when a customer cancels an order by clicking **Cancel and Return** when  using PayPal Website Payments Pro Hosted Solution. Previously, when a customer placed an order and then clicked the **Cancel and Return** link, Magento removed the billing/shipping address and displayed an error. 

<!-- MAGETWO-87016 -->* Expired gift cards are no longer applied to a customer's account. Previously, if a gift card applied to a customer account expired, Magento could not complete the checkout process. 

<!-- MAGETWO-72877 -->* Magento now displays the correct status for orders with zero subtotals. Previously, new order status appeared as pending when it was processing. 

<!-- MAGETWO-62841 -->*  Magento no longer permits you to use the up and down arrow keys to enter negative numers when entering a credit card number on the payment information page during checkout.

<!-- MAGETWO-86477 -->* Magento now displays informative error messages when an order paid for with Authorize.Net fails.

<!-- ENGCOM-3649 -->* `\Magento\Checkout\Observer\SalesQuoteSaveAfterObserver` now updates the checkout session quote ID as needed.

<!-- ENGCOM-3348 -->*

*Fix submitted by [Rahul Mahto](https://github.com/rahulwebkul) in pull request [18908](https://github.com/magento/magento2/pull/18908)*. [GitHub-18907](https://github.com/magento/magento2/issues/18907)



Unable to select payment method according to country of the address at checkout time

I think we should remove check !quote.billingAddress() in file Magento/Checkout/view/frontend/web/js/model/shipping-save-processor/default.js




<!-- ENGCOM-3315 -->* Custom shipping methods in custom carrier code can now include underscores.

<!-- ENGCOM-3322 -->* The global search icon on the Admin is now correctly aligned. *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18917](https://github.com/magento/magento2/pull/18917)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)

<!-- ENGCOM-3088 -->* Magento no longer displays the infinite loading indicator when an error occurs during check out. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [18369](https://github.com/magento/magento2/pull/18369)*. [GitHub-18330](https://github.com/magento/magento2/issues/18330)


<!-- ENGCOM-3154 -->* 

After upgrading from 2.2.5 to 2.2.6 with module One Step Checkout module we started getting js error "Cannot read property 'code' of undefined".
Reason - this module removes all checkout "steps", but in Magento code there is no check that we have at least one step.


*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [18495](https://github.com/magento/magento2/pull/18495)*. [GitHub-18164](https://github.com/magento/magento2/issues/18164)


<!-- ENGCOM-3251 -->* The **Clear shopping cart** button now works as expected. Previously, the page reloaded, but the shopping cart was not cleared. *Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18597](https://github.com/magento/magento2/pull/18597)*.

<!-- ENGCOM-3195 -->* Magento now displays a product's special price on the storefront, product listings, and product detail page as expected when the special price is 0.00. Previously, Magento displayed the regular price, but used the special price for sorting and quote calculations. *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18604](https://github.com/magento/magento2/pull/18604)*. [GitHub-18268](https://github.com/magento/magento2/issues/18268)

<!-- MAGETWO-86120 -->* 

Gift wrapping selection does not show in shopping cart on product level unless additional gift option is added.

EXPECTED RESULTS:
Gift wrapping should be added to the product line item without needing to add another gift option.

ACTUAL RESULTS:
Gift wrapping is not added to the product line item without add another gift option.



### Clean up and minor refactoring


<!-- ENGCOM-4014 -->* Fixed misalignment of logo on the Admin home page. *Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20544](https://github.com/magento/magento2/pull/20544)*. [GitHub-20399](https://github.com/magento/magento2/issues/20399)

<!-- ENGCOM-3933 -->*  Fixed misalignment of logo on Admin home page. *Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [20456](https://github.com/magento/magento2/pull/20456)*. [GitHub-19791](https://github.com/magento/magento2/issues/19791)
 

<!-- ENGCOM-3853 -->*  


*Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20219](https://github.com/magento/magento2/pull/20219)*. [GitHub-20210](https://github.com/magento/magento2/issues/20210)
 
Changes-Hamburger-Icon-was-available-on-a-page



Hamburger Icon was available on a page where menu was not present. Issue in responsive view

1. Hamburger icon should not be there when viewing in responsive view as there is no menu on that page

Order Shipment subtab
8)Click on Print All Shipments
9)Cancel the option to print the Shipment form





<!-- ENGCOM-3895 -->*  

*Fix submitted by [Nainesh Waghale](https://github.com/nainesh2jcommerce) in pull request [20369](https://github.com/magento/magento2/pull/20369)*. [GitHub-20172](https://github.com/magento/magento2/issues/20172)


On customer login page input field are short width on tablet view



<!-- ENGCOM-3847 -->* 

*Fix submitted by [Arvinda Kumar](https://github.com/cedarvinda) in pull request [19986](https://github.com/magento/magento2/pull/19986)*. [GitHub-19985](https://github.com/magento/magento2/issues/19985)

Send email confirmation popup close button area overlapping to content

Go to **sales** > **order** grid
Step 3: **Edit** any order


<!-- ENGCOM-3322 -->* The global search icon on the Admin is now correctly aligned. *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18917](https://github.com/magento/magento2/pull/18917)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)



<!-- ENGCOM-3324 -->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [18922](https://github.com/magento/magento2/pull/18922)*. [GitHub-18918](https://github.com/magento/magento2/issues/18918)



1. Login into admin panel > Click on cagalog > Choose display Settings

Asterisk sign display twice



<!-- ENGCOM-3327 -->* 

*Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [18372](https://github.com/magento/magento2/pull/18372)*. [GitHub-18355](https://github.com/magento/magento2/issues/18355)



method Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider::getSearchableAttributes dispatches event with typo in its name
cat**e**logsearch_searchable_attributes_load_after
instead of
cat**a**logsearch_searchable_attributes_load_after


<!-- ENGCOM-3534 -->* Content in  confirmation popups on th Admin no longer overlap the **Close** button. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19340](https://github.com/magento/magento2/pull/19340)*. [GitHub-19263](https://github.com/magento/magento2/issues/19263)

<!-- ENGCOM-3527 -->* The **Add to Cart** button in the Recently Ordered block now works as expected. *Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [19023](https://github.com/magento/magento2/pull/19023)*. [GitHub-17833](https://github.com/magento/magento2/issues/17833)

<!-- ENGCOM-3541 -->* Fixed the rendering of the check notifications counters icon on the Admin. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19356](https://github.com/magento/magento2/pull/19356)*. [GitHub-18887](https://github.com/magento/magento2/issues/18887)

<!-- ENGCOM-3618 -->* You can now add a custom field to a newsletter in the position of your choice by editing  the newsletter configuration file (`app/code/Magento/Newsletter/etc/adminhtml/system.xml`).  Previously, you could add a new field but could not select where it woud be appear in the newsletter. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19568](https://github.com/magento/magento2/pull/19568)*. [GitHub-19418](https://github.com/magento/magento2/issues/19418)

<!-- ENGCOM-3748 -->* Corrected typo in `SalesRule/Model/ResourceModel/Coupon/Usage.php`. *Fix submitted by [Milind Singh](https://github.com/milindsingh) in pull request [19968](https://github.com/magento/magento2/pull/19968)*. [GitHub-19721](https://github.com/magento/magento2/issues/19721)

<!-- ENGCOM-4010 -->*  Added a missing space between the title of the workflow step and the saved address on the first page of the checkout process. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20418](https://github.com/magento/magento2/pull/20418)*. [GitHub-20304](https://github.com/magento/magento2/issues/20304)

<!-- ENGCOM-4040 -->*  Fixed misalignment of the title of the order page accessed when you check a recent order in the sidebar of listing pages or account pages. *Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20744](https://github.com/magento/magento2/pull/20744)*. [GitHub-20500](https://github.com/magento/magento2/issues/20500)

<!-- ENGCOM-4058 -->*  Fixed misalignment of the **Edit** and **Remove** buttons on the gift option popup that Magento displays when a customer adds a product to the shoopping cart. *Fix submitted by [Ajay Ajabale](https://github.com/ajay2jcommerce) in pull request [20784](https://github.com/magento/magento2/pull/20784)*. [GitHub-20604](https://github.com/magento/magento2/issues/20604)

<!-- ENGCOM-4090 -->*  Fixed the alignment of the **Apply discount** button  on the checkout page. *Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20837](https://github.com/magento/magento2/pull/20837)*. [GitHub-20137](https://github.com/magento/magento2/issues/20137)




### Configurable products

<!-- ENGCOM-3554 -->* Translations for `tier_price.phtml` now works as expected. Previouslyy, these translations were not included in `js-translation.json`, and not visible on the storefront. *Fix submitted by [Oleksii Gorbulin](https://github.com/agorbulin) in pull request [19377](https://github.com/magento/magento2/pull/19377)*. [GitHub-19085](https://github.com/magento/magento2/issues/19085)

<!-- MAGETWO-89230 -->* You can now add a configurable product with no options  to a gift registry from a wishlist.





<!-- ENGCOM-3135 -->* mc 5498

*Fix submitted by [Thiago](https://github.com/thiagolima-bm) in pull request [18461](https://github.com/magento/magento2/pull/18461)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)



Fatal Error when save configurable product 

Expected result
1. Save products without any error with SKU length less then or equal to 64

Actual result
1.Getting major error when save such product. even after decrease lenght of SKU to valid client side validation.




### CMS

<!-- MAGETWO-94154 -->* 

Any files or folders symlinked inside pub/media directory are unable to be deleted because there is a validation check which uses realpath to test whether the file is outside of media directory base path. Since realpath resolves symlinks to actual paths, this check will fail if actual path is outside of base path and will prevent action from being completed.

Expected Result:
folder is removed from media gallery after ajax request completes.

Actual result: 
directory remains in media gallery with no UI feedback. Response from XHR payload includes exception message "We cannot delete directory /var/www/magento/pub/media/example/"




<!-- MAGETWO-91122 -->* 
Html attributes auto removed from WYSIWYG Editor

Here while updating the above html structure from cms page or block WYSIWYG editor, it will auto trim/remove the aria-role attribute from the div.








### Customer

<!-- MAGETWO-97151 -->* Order creation page in Admin was fixed and now works without any performance issues and slowdowns for customer accounts with 3000 addresses.  

<!-- MAGETWO-95990 -->* Magento no longer unchecks the default billing and shipping address checkboxes when you create or update a customer address using the API. 

<!-- MAGETWO-89847 -->* Customers can now be matched in customer segments based on the number of orders in a multi-site deployment

<!-- MAGETWO-87214 -->* When a customer uses a gift card to make a purchase, Magento now applies only the applicable amount to the invoice. Previously, the total amount of the gift card was applied to a customer's store credit for a partial invoice.

<!-- MAGETWO-81818 -->*  Magento now loads customer private data only once when system state changes. Previously, "Directory Data" and "Cart" were loaded twice after a user logged in to the system, which caused additional server load and traffic.

<!-- ENGCOM-3052 -->* Magento now maintains alphabetical order for customer groups when you filter customers by group in the Admin.  Previously, groups were sorted by ID. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18280](https://github.com/magento/magento2/pull/18280)*. [GitHub-18101](https://github.com/magento/magento2/issues/18101)

<!-- ENGCOM-3107 -->* Merchants can now edit a customer account if the customer's password has expired. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18414](https://github.com/magento/magento2/pull/18414)*. [GitHub-18162](https://github.com/magento/magento2/issues/18162)

<!-- ENGCOM-3082 -->* Magento now saves customer custom attributes as expected when with EAV caching is disabled.  Previously, directly saving customer information resulted in data loss. *Fix submitted by [Francesco Haymar d'Ettory](https://github.com/Thundar) in pull request [17968](https://github.com/magento/magento2/pull/17968)*. [GitHub-12479](https://github.com/magento/magento2/issues/12479)

<!-- MAGETWO-96079 -->* 

Cannot update password using received link

Go to Admin > Сustomers > All Customers and select created customer in precondition from grid.
Click "Reset Password" button
Check email, click to "Set a New Password" link.
Fill new password and click to "Set a New Password" button.
 Expected result

Password is succesfully updated.
 Actual result

Error message apear: "Something went wrong while saving the new password.".




<!-- MAGETWO-87853 -->* You can now change payment methods after selecting store credit when creating an order from the Admin. 

<!-- ENGCOM-3812 -->* Customers who have an address associated with a country that has not been set to allowed can now successfully reset their password. 

<!-- MAGETWO-93072 -->* Magento now displays the value of a custom customer address attribute  in the column for that attribute when you create a custom customer address attribute and set it to be displayed in the Columns list.  Previously, Magento added the customer code column to the Custoer table, but left these columns blank.

<!-- MAGETWO-74169 -->* 

Steps to reproduce:

Install Magento from develop branch.
Go to Admin / Stores / Configuration / Customers / Customer Configuration.
Set Store Credit Options / Enable Store Credit Functionality to "No" and save.

Expected result:
 There should be no traces of the store credit functionality on the front end.

Actual result:
 The "Store Credit" link is still displayed in My Account.


[GitHub-5609](https://github.com/magento/magento2/issues/5609)


### Customer custom attributes

<!-- MAGETWO-89039 -->* Customer address attribute validation during checkout now permits spaces. 

<!-- MAGETWO-95059 -->* Merchants can now create attributes  for customer addresses (**Stores** > **Attributes** > **Customer Address**) as expected. Previously, a merchant could create an attribute, but Magento did not save or display it. 

<!-- MAGETWO-86686 -->* Magento now adds the address entered during checkout to a new account when a custom address attribute is required when creating a user account after checkout.




### Developer

<!-- ENGCOM-2940 -->* You can now print order information from the customer dashboard. Previously, when you tried to print  order information from the customer dashboard, Magento displayed this error, `Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php`. *Fix submitted by [passtet](https://github.com/passtet) in pull request [17984](https://github.com/magento/magento2/pull/17984)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)


### Directory


<!-- ENGCOM-2747 -->* 

Feature australian regions

Add Australian regions to be as a dropdown during address population

*Fix submitted by [Maxim Baibakov](https://github.com/maximbaibakov) in pull request [17516](https://github.com/magento/magento2/pull/17516)*. [GitHub-17514](https://github.com/magento/magento2/issues/17514)


### Downloadable

<!-- ENGCOM-3385 -->* 

During research was found another issue: #19034 which the main reason that problem has appeared.
Events are moved from 'save_commit_after' to 'save_after' to resolve the issue and keep downloadable links save in scope of Sales Order Save transaction.

*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [19036](https://github.com/magento/magento2/pull/19036)*. [GitHub-10934](https://github.com/magento/magento2/issues/10934),
 [GitHub-19003](https://github.com/magento/magento2/issues/19003),  [GitHub-18323](https://github.com/magento/magento2/issues/18323)



Order confirmation email for guest checkout does not include download links

salesInvoiceOrder REST API does not make downloadable products available


sales_order_item_save_commit_after and sales_order_save_commit_after events will never fire for guest checkout



<!-- ENGCOM-3584 -->* 

Sample Link Issue in Downloadable product

*Fix submitted by [Ansari](https://github.com/ansari-krish) in pull request [19431](https://github.com/magento/magento2/pull/19431)*. [GitHub-19344](https://github.com/magento/magento2/issues/19344)


Expected result 
1. Sample link will be removed.

Actual result 
1. Sample link is not deleted upon save.


### EAV

<!-- ENGCOM-3128 -->* Magento no longer changes the ute source_model when you create an attribute option through the API. Previously, the `source_model` of an EAV attribute was set to `Magento\Eav\Model\Entity\Attribute\Source\Table` when updating an EAV attribute's options through the API. This eliminated the ability to update this attribute's options through the Admin. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18390](https://github.com/magento/magento2/pull/18390)*. [GitHub-13156](https://github.com/magento/magento2/issues/13156)


<!-- ENGCOM-3215 -->* Magento no longer throws an SQL Join error when you use a custom EAV entity  with the `standard eav_entity` entity table. Previously, this usage resulted in an integrity constraint violation. *Fix submitted by [Oleksii Lisovyi](https://github.com/oleksii-lisovyi) in pull request [18566](https://github.com/magento/magento2/pull/18566)*. [GitHub-18532](https://github.com/magento/magento2/issues/18532)


<!-- ENGCOM-3732 -->* 

*Fix submitted by [Ansari](https://github.com/ansari-krish) in pull request [19431](https://github.com/magento/magento2/pull/19431)*. [GitHub-19344](https://github.com/magento/magento2/issues/19344)


1.Create a new Downloadable product.
2.Create a Link select with file type url. Create a Sample link with file type url.
3. Save product
4. Now delete sample link only and save product again.
5. After save sample link reappearing.

Expected result 
1. Sample link will be removed.

Actual result
1. Sample link is not deleted upon save.




### Email

<!-- MAGETWO-95057 -->* The return path e-mail variable `system/smtp/return_path_email` now works as expected.




### Frameworks

<!-- ENGCOM-3921 -->* Fixed icon behavior on product customization page. *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19400](https://github.com/magento/magento2/pull/19400)*. [GitHub-19399](https://github.com/magento/magento2/issues/19399)

<!-- ENGCOM-3935 -->* Fixed checkbox alignment on the account information page. *Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19646](https://github.com/magento/magento2/pull/19646)*. [GitHub-19645](https://github.com/magento/magento2/issues/19645)

<!-- ENGCOM-3740 -->* Newly added links on the customer dashboard are now shown as current as expected when the link path has been constructed from both default and new elements. Previously, the link was added, but not shown in the current state as expected. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [19927](https://github.com/magento/magento2/pull/19927)*. [GitHub-19099](https://github.com/magento/magento2/issues/19099)

<!-- ENGCOM-3359 -->* Class `\Magento\Framework\Data\Form\Element\Fieldset` now calls the `getBeforeElementHtml` method. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18985](https://github.com/magento/magento2/pull/18985)*. [GitHub-2618](https://github.com/magento/magento2/issues/2618)

<!-- ENGCOM-2942 -->* The `bin/magento module:uninstall` command  now works as expected with Composer. Previously, there was a discrepancy between `composer.lock` and `composer.json` when this command was used to remove a module. *Fix submitted by [Francesco Haymar d'Ettory](https://github.com/Thundar) in pull request [18002](https://github.com/magento/magento2/pull/18002)*. [GitHub-5797](https://github.com/magento/magento2/issues/5797)

<!-- ENGCOM-3172 -->* Magento now throws `LogicException($message, 0, $e)` instead of `LogicException($message)` as needed when running validation for communication configuration (`communication.xml`).  Previously, the  validator in `Magento\Framework\Communication\Config\Validator` did not propagate exceptions, which obscured the cause of the error. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18554](https://github.com/magento/magento2/pull/18554)*. [GitHub-14555](https://github.com/magento/magento2/issues/14555)

<!-- MAGETWO-87297 -->* Module names can now contain numbers. Previously, `magento/framework-message-queue/etc/queue_base.xml` contained a pattern that did not allow numbers to be used in `instanceType`, which resulted in the invalidation of custom message consumers in this file.


<!-- MAGETWO-96104 -->* 

Password Reset fails with "... is a required field." due to failing customer address model validation	

Expected results
Email with reset password link has been received. Go to reset password page and save new password.

Actual results
Email with reset password link missed. Error message on the front-end "We're unable to send the password reset email"

<!-- MAGETWO-95779 -->* Attributes in flat tables are now updated after the product is saved when the catalog product flat index is turned on and the indexer is set to **Save on Update**. 

<!-- MAGETWO-93183 -->* You can now set all products that currently have **Set Product as New** set to **yes** set to **no**. This change affects bulk updates, CSV imports, and scheduled updates. 

<!-- ENGCOM-3528 -->* Images can now by default be successfully imported from HTTP and redirected to HTTPS. Previously, the image could not be uploaded.

<!-- ENGCOM-3568 -->*

*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [19398](https://github.com/magento/magento2/pull/19398)*. [GitHub-15505](https://github.com/magento/magento2/issues/15505)


Interceptor class methods do not support nullable return types



<!-- ENGCOM-3479 -->*  Magento can now read responses from third-party servers that use HTTP/2 if your server also uses HTTP/2. Previously, this inability to read requests from third-party servers that use HTTP/2 prevented access to Magento Marketplace. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19239](https://github.com/magento/magento2/pull/19239)*. [GitHub-19127](https://github.com/magento/magento2/issues/19127)


<!-- ENGCOM-3424 -->* 

dd availability to leave empty config for events.xml

*Fix submitted by [Lisovyi Yevhenii](https://github.com/lisovyievhenii) in pull request [19145](https://github.com/magento/magento2/pull/19145)*. [GitHub-15931](https://github.com/magento/magento2/issues/15931)



#### Cache framework

<!-- MAGETWO-73528 -->* Problems with cache-cleaning for product pages for simple  products associated with configurable products  have been resolved. and as a result, product pages now now accurately display out-of-stock status.  Previously, when an associated product went out-of-stock, Magento did not update the product page of the configurable product unless you cleaned the cache. [GitHub-8009](https://github.com/magento/magento2/issues/8009)

<!-- MAGETWO-69766 -->* The images cache can now be flushed from the Admin (**Admin** > **System** > **Cache Management** and click **Flush Catalog Images Cache**). Previously, you could not delete the directory, and Magento displayed an error on the cache management page. 



#### JavaScript framework

<!-- MAGETWO-74160 -->* Wishlist names can now contain apostrophes. Previously, a wishlist whose name contained an apostrophe could not be edited or deleted.
 ee only






### General

<!-- MAGETWO-89377 -->* You can now create a customer without a phone number when **Show Telephone** is set to optional. Previously, Magento displayed an informative error message and did not let you create the customer. 

<!-- ENGCOM-3882 -->* Corrected alignment of the store switcher in Tab view. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20325](https://github.com/magento/magento2/pull/20325)*. [GitHub-20158](https://github.com/magento/magento2/issues/20158)

<!-- ENGCOM-3934 -->* Corrected the alignment of Contact us area accessed from the storefront page footers. *Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [20455](https://github.com/magento/magento2/pull/20455)*. [GitHub-19800](https://github.com/magento/magento2/issues/19800)
 



<!-- ENGCOM-3540 -->* 

*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19357](https://github.com/magento/magento2/pull/19357)*. [GitHub-13157](https://github.com/magento/magento2/issues/13157)


The left block Last Ordered Items is not showing properly the Add to cart button on the :
data-bind="css: {'no-display': !lastOrderedItems().isShowAddToCart}
Always returning false.
Target JS file is : Magento_Sales/web/js/view/last-ordered-items.js

Fix logic in last-order-items.js and Recently Ordered block.


<!-- ENGCOM-3507 -->* 

 *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19296](https://github.com/magento/magento2/pull/19296)*. [GitHub-19286](https://github.com/magento/magento2/issues/19286)

Steps to reproduce 
1. Place more than 10 orders (so that pager gets activated) as registered customer.
2. Go to 'My Orders' in My Account
3. Pager should be visible

Expected result
1. Pager should be displayed correctly (Limiter should float to right side)
   ![image](https://user-images.githubusercontent.com/27951674/48804620-28e8d100-ed3b-11e8-99ac-334ac9dc9f24.png)

Actual result
1. Pager is broken because the Limiter is over page links and we can't go to any other page.



<!-- ENGCOM-3301 -->* 

I think there is no need to use escapeJs method as we are already using escapeHtml method.
Due to this string getting converted in hexadecimal.

Translation issue send-friend in sendphtml

 *Fix submitted by [Rahul Mahto](https://github.com/rahulwebkul) in pull request [18886](https://github.com/magento/magento2/pull/18886)*. [GitHub-18779](https://github.com/magento/magento2/issues/18779)





<!-- ENGCOM-2937 -->* Merchants can now change the currency symbol back to its default value from the Admin in Single-store mode. Previously, when a merchant tried to change this symbol back to its default value, Magento displayed a success message, but did not change the currency symbol back to the default value. *Fix submitted by [magently](https://github.com/magently) in pull request [17966](https://github.com/magento/magento2/pull/17966)*. [GitHub-17567](https://github.com/magento/magento2/issues/17567)


<!-- ENGCOM-2938 -->* 

Menu does not work when you change from Mobile to Desktop mode

Expected result
1. User should be redirected to a page with link provided from Category url-key clicked in menu.

Actual result
1. Nothing happens.



*Fix submitted by [Emanuel Arcos](https://github.com/emanuelarcos) in pull request [17990](https://github.com/magento/magento2/pull/17990)*. [GitHub-5402](https://github.com/magento/magento2/issues/5402)


<!-- ENGCOM-3054 -->* 

*Fix submitted by [adammada](https://github.com/adammada) in pull request [18215](https://github.com/magento/magento2/pull/18215)*. [GitHub-18138](https://github.com/magento/magento2/issues/18138)



fix wysiwyg editor not decoding base64 filenames special chars

Properly decode base64 special chars in TinyMCE. Whole part of code was changed in 2.3, but it is not working in 2.2


* Open WYSIWYG editor for a product select option to insert image and upload file which base64 encoded filename would use any of special allowed characters (like =), for example: **regular_png_.png**
* Select uploaded image and insert it. In upload dialog in Image URL field you will unusale URL


*Fix submitted by [adammada](https://github.com/adammada) in pull request [18215](https://github.com/magento/magento2/pull/18215)*. [GitHub-18138](https://github.com/magento/magento2/issues/18138)


<!-- ENGCOM-3185 -->* 



* Open the special price for simple products

1. Alignment of Icon of selecting the calendar from and to

Calendar icon in advance pricing alignment solved

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18593](https://github.com/magento/magento2/pull/18593)*. [GitHub-18581](https://github.com/magento/magento2/issues/18581)



<!-- ENGCOM-3200 -->* 

Fix disappearing navigation arrows in fotorama zoom 

* Click on the large product image on the left
* Check that navigation arrows are visible
* Click on a thumbnail
* Check that navigation arrows keep visible



*Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18595](https://github.com/magento/magento2/pull/18595)*. [GitHub-18585](https://github.com/magento/magento2/issues/18585)


<!-- ENGCOM-3311 -->* You can now customize the view of tab and accordion components by using mixins to redefine the default variables in the scope of a custom theme. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18875](https://github.com/magento/magento2/pull/18875)*. [GitHub-18729](https://github.com/magento/magento2/issues/18729)


<!-- MAGETWO-87734 -->* You can now pause product videos on YouTube on storefronts running on Internet Explorer 11.x.

<!-- MAGETWO-90189 -->* You can sort a grouped product's associated products across multiple pages. Previously, when you trid to sort associated products, Magento sorted only the products visible on the current page.

<!-- MAGETWO-85932 -->* Product pages that are included in a related products rule that uses a Price (percentage) condition now load correctly. Previously, loaded pages were blank.

<!-- MAGETWO-86549 -->* After a session expires, and a customer refreshes the page, Magento displays an empty shopping cart and logs out the customer as expected. Previously, Magento displayed an empty shopping cart but the minicart still displayed the selected items, and if the customer refreshed the page again, the shopping cart displayed the items. 

<!-- MAGETWO-94423 -->* You can now successfully save a role from the Admin. Previously, when you saved a role from the Admin, Magento removed all  users from the role (no matter which checkbox was checked), and displayed this message, `This user has no tokens`.


<!-- MAGETWO-94076 -->* 

Attachment is not opened on storefront 'My Quotes' section 'Comments' tab

??

<!-- MAGETWO-89487 -->*

Widget 'required field' error message is overlapped by the "Quick Search Form Types" field

During widget creation, if saving from 'Widget Options' subsection without selecting an option from the multiselection field (lower of the two if multiple fields exist - example 'Recently Compared Products'), error message overlaps the bottom of multiselection field. This is likely affecting all widget types.

<!-- MAGETWO-89438 -->* Magento now prompts you to enter a valid value when you enter a value of zero for a customer group price discount by percentage when setting advanced pricing for a product.  Previously, Magento threw an error. 




### Gift card

<!-- MAGETWO-90920 -->* Magento now displays the correct creation date for a gift card when the **Lifetime** field is populated. 

<!-- MAGETWO-87985 -->* Magento now consistently validates gift card prices according to the constraints of the relevant store locale. 


### Gift registry

<!-- MAGETWO-95738 -->* Magento now shows the correct price for configurable products in a shared gift registry. Previously, Magento displayed the original price instead of the special price for configurable products.

<!-- MAGETWO-73447 -->* You can now successfully preview a Registry Update email template. Previously, Magento threw a fatal error when you tried to preview this template. 


### Google Analytics

<!-- ENGCOM-3091 -->* 

Simple change of reference (referenceContainer to referenceBlock) for Google Analytics module.

1. Google Analytics not added to head correctly

1. Google Analytics JavaScript should be loaded on the frontend

Actual result
1. Google Analytics isn't added at all on the frontend.

*Fix submitted by [Petar Sambolek](https://github.com/sambolek) in pull request [18375](https://github.com/magento/magento2/pull/18375)*. [GitHub-16497](https://github.com/magento/magento2/issues/16497)

<!-- ENGCOM-2271 -->* You can now save configuration from the **Admin**  > **Stores** > **Configuration** > **General** > **Advanced Reporting** without providing an industry value. Previously, Magento dud not save configuration settings, and displayed this error:  `Please select a vertical.` *Fix submitted by [Sunil](https://github.com/sunilit42) in pull request [15366](https://github.com/magento/magento2/pull/15366)*. [GitHub-15259](https://github.com/magento/magento2/issues/15259)




### Image


<!-- MAGETWO-93985 -->* Magnifier now works as expected on any supported operating system and browser. Previously, Magnifier did not hover correctly on devices running Windows Chrome or FireFox. 

<!-- MAGETWO-94235 -->* 

Images added through wysiwyg are broken on frontend

Wysiwyg image added to a product attribute shows the admin CMS directive path in the URL



### Import/export

<!-- ENGCOM-3877 -->* We've resolved multiple issues that users previously encountered when importing configurable products with images and virtual products. Previously, image import failed under certain circumstances, and Magento displayed these messages:  `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s)` and `Products are imported but configurable product has no image in Magento`.

<!-- ENGCOM-3827 -->* Magento now indicates correct stock status (in stock/out-of-stock) after importing products that have an indicated quantity but a status of out-of-stock from a CSV file. Previously, Magento imported the product quantity correctly, but not the stock status. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [20177](https://github.com/magento/magento2/pull/20177)*. [GitHub-15950](https://github.com/magento/magento2/issues/15950)




<!-- ENGCOM-2930 -->*

 Make sure all linked products (related, upsells, crosssells) show up …in the backend grids and in the correct order

 1. Updated related products should come in the frontend of product page and backend of product edit page

Actual result
1. The update related products are showing in the frontend .But only 2 related products are showing in the backend


*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17885](https://github.com/magento/magento2/pull/17885)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720), [GitHub-14050](https://github.com/magento/magento2/issues/14050)



<!-- ENGCOM-2916 -->* 



Do not overwrite URL Key with blank value


* do not update existing products with a blank URL Key if no `url_key` value is provided in the import data
* do not update existing products with a new URL Key if a `name` but no `url_key` value is provided in the import data
*Fix submitted by [Joseph McDermott](https://github.com/josephmcdermott) in pull request [17882](https://github.com/magento/magento2/pull/17882)*. [GitHub-17023](https://github.com/magento/magento2/issues/17023)



<!-- ENGCOM-3321 -->* 

Fix SKU limit in import new products

import new products via csv: products are created with empty value when strings are too long
import new products via csv: products are created with empty value when strings are too long

* when strings are too long, I expect to see an error after I run check data. I also expect that import get blocked until all error are fixed so no products gets created until the check data allows you to proceed with the import.




*Fix submitted by [Ravi Chandra](https://github.com/ravi-chandra3197) in pull request [18591](https://github.com/magento/magento2/pull/18591)*. [GitHub-17865](https://github.com/magento/magento2/issues/17865)


<!-- MAGETWO-93222 -->* 

With Magento 2.2.4, importing existing products to update them without a url-key in the import csv file will lead to url-key being deleted.

EXPECTED RESULTS:
Prices should be updated, no other changes.

ACTUAL RESULTS:
Prices are updated, url-key is dropped.

go to products>catalog
look up a sku from the csv
Expand the SEO section
Note there is now no url-key


<!-- MAGETWO-86048 -->* Special characters in the CSV import file no longer trigger a general system exception. Previously, special characters (for example, <code>ƒ</code>, <code>ª</code>, and <code>›</code>) halted the check data phase of import. 

<!-- MAGETWO-73922 -->* You can now properly set data for drop-down attributes during product import in deployments with multiple storeviews. 

<!-- MAGETWO-95101 -->* URL Key columns that contain  accented characters are now converted properly after the import of a CSV file. Previously, if you manually assigned a URL key to a product in the Admin that contained an accent character or punctuation, Magento converted it to the regular character or removed it. 

<!-- MAGETWO-94432 -->* You can now hide an image as expected by using the `hide_from_product_page` attribute during import.

<!-- MAGETWO-91283 -->* Import now completes successfully when a product’s CSV entry is split over two import “bunches”.  Previously, Magento threw this error, `Cannot add or update a child row: a foreign key constraint fails`, and import failed. 

<!-- MAGETWO-95653 -->* Magento now retains product order within a category after import. 


<!-- MAGETWO-74012 -->* 

Steps to reproduce
Try to provide your own Sample file in 
<Your Module>/Files/Sample/<yourentity.csv>

 Expected result
You can add your own sample-file to your module and it will be taken from the ImportExport Wizard in the Backend

 Actual result
The sample file needs to be placed in the Module "ImportExport".


[GitHub-6553](https://github.com/magento/magento2/issues/6553)



<!-- MAGETWO-95535 -->* 
We've resolved the following issues with imported images.

 images of all sizes reverted to the default placeholder size after import.

	* images that were removed through the Admin before import returned after import. 

Magento now displays an informative error message if images are not imported as expected. 



<!-- ENGCOM-4075 -->*  


`\Magento\ImportExport\Block\Adminhtml\Export\Filter::_getSelectHtmlWithValue()` method overwrites self $value argument


*Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20863](https://github.com/magento/magento2/pull/20863)*. [GitHub-20624](https://github.com/magento/magento2/issues/20624)


<!-- MAGETWO-74044 -->* The import process now supports `add_update` along with the dafault behavior `append`.  [GitHub-6193](https://github.com/magento/magento2/issues/6193)

<!-- MAGETWO-94072 -->* Magento now exports configurable products based on swatches with the correct Admin and Default Store View labels. Previously, after import the `configurable_variations` column for these configurable products contained the wrong values. 




### Infrastructure

<!-- ENGCOM-3025 -->* Magento no longer throws an error when you send an email from the command line. Previously, Magento threw an exception because `$debugHintsPath` was missing. *Fix submitted by [passtet](https://github.com/passtet) in pull request [17984](https://github.com/magento/magento2/pull/17984)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)


### Integration

<!-- ENGCOM-3102 -->* The Last logged In value displayed on the customer account page on the Admin is now updated as expected when a customer is authenticated through REST. *Fix submitted by [Prakash](https://github.com/prakashpatel07) in pull request [17978](https://github.com/magento/magento2/pull/17978)*. [GitHub-17488](https://github.com/magento/magento2/issues/17488)


### Layered navigation

<!-- ENGCOM-3388 -->* 

"Use in Layered Navigation: Filterable (no results)" property confuse for Price filter

*Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [19044](https://github.com/magento/magento2/pull/19044)*. [GitHub-14007](https://github.com/magento/magento2/issues/14007)


I'm trying to set **Filterable (no results)** for price attribute but it's not working.
There is below note for **Use in Layered Navigation** setting of product attribute at the backend.
**Can be used only with catalog input type Dropdown, Multiple Select and Price.**
So I hope it should work for Price attribute too.




<!-- MAGETWO-97000 -->* Layered navigation for Elasticsearch now includes all product sizes. If the **Filterable (with results)** option is set for a product attribute then: 

	* Layered navigation includes only those filters for which matching products can be found. 
	* Any attribute value that already applies to all products shown in the list should still appear as an available filter.
	* Attribute values with a count of zero (0) product matches are omitted from the list of available filters. 


<!-- MAGETWO-85162 -->* You can now filter products based on color. 



### Newsletter

<!-- ENGCOM-3253 -->* Customers are no longer unsubscribed to a newsletter as a result of a password reset email request when **Newsletter Need to Confirm** is set to **yes** on the Admin. *Fix submitted by [Janak Bhimani](https://github.com/janakbhimani) in pull request [18643](https://github.com/magento/magento2/pull/18643)*. [GitHub-17954](https://github.com/magento/magento2/issues/17954)

<!-- MAGETWO-88736 -->* Magento now permits only one newsletter subscription per email address. Previously, when a website had multiple store views, a customer could subscribe multiple times to a newsletter with one email address. 

<!-- MAGETWO-82530 -->* Magento now displays an informative `You have unsubscribed` message when you click the unsubscribe link in the newsletter email. 

<!-- ENGCOM-3579 -->*  Magento now sets the correct store_id for each store when a customer subscribes to a newsletter from more than one store. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [19426](https://github.com/magento/magento2/pull/19426)*. [GitHub-19172](https://github.com/magento/magento2/issues/19172)

<!-- ENGCOM-3680 -->*  A logged-in user who already has an account can now use the footer to sign up for a newsletter subscription. Previously, this user received an error message, and Magento did not subscribed her to the newsletter. *Fix submitted by [Ravi chandra](https://github.com/ravi-chandra3197) in pull request [18912](https://github.com/magento/magento2/pull/18912)*. [GitHub-8952](https://github.com/magento/magento2/issues/8952)



### Offline shipping

<!-- ENGCOM-3079 -->*  Magento now displays the appropriate error message when free shipping is not available for an order during check out. *Fix submitted by [vaibhavahalpara](https://github.com/vaibhavahalpara) in pull request [17982](https://github.com/magento/magento2/pull/17982)*. [GitHub-17977](https://github.com/magento/magento2/issues/17977)

<!-- ENGCOM-3057 -->* The table rate shipping method no longer fails to return a quote when a customer uses an American  post code in the form of *five-digit zip - four-digit* extension (for example, 44444-1234). *Fix submitted by [magently](https://github.com/magently) in pull request [18166](https://github.com/magento/magento2/pull/18166)*. [GitHub-17770](https://github.com/magento/magento2/issues/17770)



### PageBuilder

<!-- ENGCOM-3410 -->* Unit test annotations now assert exception messages correctly. 

*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [19105](https://github.com/magento/magento2/pull/19105)*. [GitHub-18840](https://github.com/magento/magento2/issues/18840)



<!-- ENGCOM-3392 -->* Magento now correctly calculates fixed tier price discount for prpoducts with special prices. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18743](https://github.com/magento/magento2/pull/18743)*. [GitHub-18652](https://github.com/magento/magento2/issues/18652)


### Payment methods


<!-- MAGETWO-93750 -->*


Base Currency for website is CND but PayPal Payflow Pro is charging in USD
Set Base Currency as USD for default config
Creat Canadian website
Set Base Currency and Default Display Currency for Canadian store to Canadian Dollar.
Set Payment Action = Sale
Go to Canadian store on the store front
Add product to cart
Complete checkout
Invoice the order
Actual result
USD currency

Expected result
CND currency



<!-- MAGETWO-94260 -->* Magento now displays the correct billing address in the order confirmation email when  **Paypal Express Checkout** is enabled. Previously, Magento displayed the shipping address instead of the billing address. 

<!-- MAGETWO-96587 -->* When an order placed with PayPal fails during checkout, Magento no longer processs payment for the order. Previously, orders that failed during the checkout when being processed through PayPal were processed. 

<!-- ENGCOM-3997 -->*  Magento now identifies shipping method in the Shipping section of the order review page for orders paid with using PayPal Express. *Fix submitted by [Nirav Kadiya](https://github.com/ssp58bleuciel) in pull request [19655](https://github.com/magento/magento2/pull/19655)*. [GitHub-14712](https://github.com/magento/magento2/issues/14712)

<!-- ENGCOM-3691 -->*  Magento now correctly handles attribute options that begin with zero. Previously, these attribute options  did not work if an option with the same number but lacking the zero already existed. *Fix submitted by [SikailoISM](https://github.com/SikailoISM) in pull request [19612](https://github.com/magento/magento2/pull/19612)*. [GitHub-19436](https://github.com/magento/magento2/issues/19436)

<!-- ENGCOM-3316 -->* Magento now populates the estimated billing address  field  on the checkout page with the default billing address as expected when the cart contains virtual products only. Previously, when a signed-in customer with different default shipping and billing addresses had a cart containing only virtual products, the cart estimation field was populated with the default shipping address information  instead of the default billing address information. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18863](https://github.com/magento/magento2/pull/18863)*. [GitHub-17744](https://github.com/magento/magento2/issues/17744)


<!-- ENGCOM-2629 -->* You can now use REST to create an order without payment. Previously, when using REST to submit an order without a payment, Magento threw an error. *Fix submitted by [Michiel Gerritsen](https://github.com/michielgerritsen) in pull request [15683](https://github.com/magento/magento2/pull/15683)*. [GitHub-15652](https://github.com/magento/magento2/issues/15652)

<!-- MAGETWO-96289 -->* A popup no longer blocks completion of check out using Braintree PayPal on a mobile device.

<!-- MAGETWO-90929 -->* Customers can now check out using PayPal when the **Request Billing Information** feature is not enabled. Previously, Magento threw this error when a customer tried to check out with Braintree through Paypal from the shopping cart,  `Undefined index: billingAddress in /app/aacdg4mgbgw24/vendor/magento/module-braintree/Model/PayPal/Helper/QuoteUpdater.php on line 138`. 

<!-- MAGETWO-94857 -->*  Magento now creates invoices as expected for orders created using Braintree PayPal. Previously, Magento threw an error when a merchant tried to create an invoice for an order from **Admin** > **Sales** > **Order**.

<!-- MAGETWO-95218 -->* When a  customer selects PayPal as a payment method but then applies a gift card, Magento now reverts to zero subtotal checkout. Previously, the order failed at the review step if a gift card were applied. 


### Pricing

<!-- MAGETWO-95721 -->* Removing Special Price changes final_price, min_price, max_price to 0.00
This causes incorrect sorting by price


### Quote

<!-- MAGETWO-91332 -->* You can now request a quote on a storefront running on iOS 11.3.1.

<!-- MAGETWO-95180 -->* Merchants can now create new user roles that do not have  access to Quotes.

<!-- ENGCOM-3314 -->* You can now use REST to set billing information for a customer (`customerId`) with an existing address. Previously, Magento threw an exception during address validation. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18872](https://github.com/magento/magento2/pull/18872)*. [GitHub-17485](https://github.com/magento/magento2/issues/17485)

<!-- ENGCOM-3839 -->* You can now update a shopping cart that contains a reserved order number (for example, 000000651). *Fix submitted by [Saphal Jha](https://github.com/saphaljha) in pull request [20208](https://github.com/magento/magento2/pull/20208)*. [GitHub-19101](https://github.com/magento/magento2/issues/19101)

<!-- ENGCOM-3975 -->* We fixed an issue with inaccurate floating point calculations during checkout. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20638](https://github.com/magento/magento2/pull/20638)*. [GitHub-18027](https://github.com/magento/magento2/issues/18027)



### Reports

<!-- MAGETWO-90727 -->* Magento now updates the reports table as expected when a new administrator with restricted privileges logs in and selects **Report** > **Products** > **Ordered**. Previously, Magento did not generate this report, and logged an error in `var/log/system.log`. 







### Review

<!-- ENGCOM-3833 -->* Administrators can now access product ratings in deployments with multiple websites running different locales. *Fix submitted by [Saphal Jha](https://github.com/saphaljha) in pull request [20183](https://github.com/magento/magento2/pull/20183)*. [GitHub-18192](https://github.com/magento/magento2/issues/18192)

<!-- MAGETWO-93988 -->* The  **Save and Next** and **Save and Previous** buttons in **Marketing** > **Reviews** now work as expected.



### Reward

<!-- MAGETWO-89737 -->* Customers are now subscribed as expected to email notifications about reward points. 

<!-- MAGETWO-88674 -->* `/V1/orders/{id}` now retrieves information about used reward points. 


### RMA

<!-- MAGETWO-96664 -->* 

ACTUAL RESULTS:
Created attribute does not displays on storefront

EXPECTED RESULTS:
Created attribute should be visible on storefront



RMA attribute "file" does not displays on fronted



<!-- MAGETWO-94019 -->* The **Show/Hide** details button now works as expected on the Returns (RMA) page.

<!-- MAGETWO-94232 -->* Return attributes that have the **Values Required** attribute  set to **no** no longer break the storefront display of those attributes.

<!-- MAGETWO-72953 -->* Magento now displays the correct amount in the **Remaining Quantity** field after Magento has processed a return.

<!-- MAGETWO-97009 -->* Administrators can now process returns when a request includes a required image attribute. Previously, administrators could not process a return if the request included a required image attribute. Previously, the Return Items tab displayed a validation error even though the image had  been uploaded, and if you clicked on **Details**, Magento displayed this message, `Please select a file`.



### Sales

<!-- ENGCOM-1429 -->*  The order status label on the  customer order status page  can now be translated. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [14914](https://github.com/magento/magento2/pull/14914)*. [GitHub-14849](https://github.com/magento/magento2/issues/14849)

<!-- MAGETWO-93155 -->* You can now filter orders by customer email. Previously, Magento threw an error when you tried to filter orders by customer email from **Sales** > **Orders**. 

<!-- ENGCOM-3791 -->* Fixed an incorrect class name on orders and returns page on the Admin. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20080](https://github.com/magento/magento2/pull/20080)*. [GitHub-19780](https://github.com/magento/magento2/issues/19780)

<!-- ENGCOM-3494 -->* The `last_trans_id` column of the `sales_order_payment` table has been updated to handle the full order reference values for Amazon and Klarna extensions. *Fix submitted by [Ian cassidy](https://github.com/iancassidyweb) in pull request [18621](https://github.com/magento/magento2/pull/18621)*. [GitHub-18615](https://github.com/magento/magento2/issues/18615)

<!-- ENGCOM-2940 -->* You can now print order information from the customer dashboard. Previously, when you tried to print  order information from the customer dashboard, Magento displayed this error, `Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php`. *Fix submitted by [MateuszChrapek](https://github.com/MateuszChrapek) in pull request [17998](https://github.com/magento/magento2/pull/17998)*. [GitHub-9830](https://github.com/magento/magento2/issues/9830) [GitHub-10530](https://github.com/magento/magento2/issues/10530)

<!-- ENGCOM-3092 -->* Magento no longer marks email as "not sent" when the email copy fails due to exception. Previously, Magento marked this email as not sent, and subsequently continued to resend the email. *Fix submitted by [Petar Sambolek](https://github.com/sambolek) in pull request [18376](https://github.com/magento/magento2/pull/18376)*. [GitHub-17152](https://github.com/magento/magento2/issues/17152)

<!-- MAGETWO-96976 -->* Magento no longer adds giftwrap tax to the credit memo twice.



<!-- MAGETWO-94295 -->* 

United States 'state' field in admin orders is not a drop down

When placing an order in the admin, the state/providence field for the United States is not a drop down with states, but instead of text field.



<!-- MAGETWO-94181 -->* You can now issue a partial refund to store credit for an order made with an online payment method.

<!-- MAGETWO-73570 -->* Company logos are now displayed correctly in printed PDF versions of invoices and shipment statements.

<!-- MAGETWO-93393 -->*  Magento now uses  the correct table rate shipment when creating a merchant creates an order through the Admin. Previously, when a merchant  created an order through the Admin and selected the shipping method table rate, Magento took the shipping rate table from the wrong website ID.

<!-- MAGETWO-94458 -->* You can now create a credit memo for an order that contains taxes and discounts and is placed online.  Previously, when you tried to create this credit memo, Magento displayed an informative error.

<!-- MAGETWO-86292 -->* You can now create a credit memo for an order with no payment required. Previously, when an order was placed with no payment required, the **Credit Memo** button was not displayed on the order.


<!-- MAGETWO-73039 -->* Orders exported to a CSV file now display dates in a consistent format. 

<!-- MAGETWO-86121 -->* Merchants can now ship the remaining items in an order in which some items require a credit memo.

<!-- MAGETWO-96394 -->* Orders for bundle products created from the Admin now display  correct product prices. 

<!-- MAGETWO-96141 -->* 

"Custom price" can't be removed during order creation in admin

reate simple product with price = 100
Start to create order for new customer in admin
Add created product to order
Check checkbox 'Custom price' and set custom price to 50
Click 'Update Items and Quantities' to update quote data
Uncheck checkbox 'Custom price'
Click 'Update Items and Quantities' to update quote data
Start to fill account information (to recalculate quote and to reload sections)
Scroll to 'Items Ordered' block and check 'Custom price' field for item
 Actual result:
'Custom price' checkbox is checked, 'Custom price' input has data = 50, item price = 50

 Expected result:
'Custom price' checkbox is UNchecked, 'Custom price' input is invisible, item price = 100



<!-- MAGETWO-94956 -->* 

The Arabic character in invoice PDF is looking different as in admin address (it is reversed).

ACTUAL RESULTS:
Invoice PDF contains a different address (it is reversed)

EXPECTED RESULT
Both invoice and shipment PDF contain correct addresses.




<!-- ENGCOM-3734 -->* 

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19804](https://github.com/magento/magento2/pull/19804)*. [GitHub-19796](https://github.com/magento/magento2/issues/19796)


Sales Order invoice Update Qty's Button is misaligned



<!-- ENGCOM-4017 -->*  

*Fix submitted by [Dipti](https://github.com/dipti2jcommerce) in pull request [20613](https://github.com/magento/magento2/pull/20613)*. [GitHub-20609](https://github.com/magento/magento2/issues/20609)


Currency rate value not align proper in order information tab when we create creditmemo from admin 



<!-- ENGCOM-3998 -->*  The order view invoice template is now displayed properly on the ipad. *Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20546](https://github.com/magento/magento2/pull/20546)*. [GitHub-20373](https://github.com/magento/magento2/issues/20373)

<!-- ENGCOM-3999 -->* Access restrictions on the order API are now enforced as expected. Previously, adminstrators with restricted privileges had complete access to orders. *Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20542](https://github.com/magento/magento2/pull/20542)*. [GitHub-20169](https://github.com/magento/magento2/issues/20169)

<!-- ENGCOM-3939 -->* Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by [Prince Patel](https://github.com/mageprince) in pull request [20508](https://github.com/magento/magento2/pull/20508)*. [GitHub-19899](https://github.com/magento/magento2/issues/19899)

<!-- ENGCOM-3874 -->* The email that customers receive after completing an order now contains tracking information for only their order. Previously, Magento included tracking information for other orders, too. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [20184](https://github.com/magento/magento2/pull/20184)*. [GitHub-19887](https://github.com/magento/magento2/issues/19887)




<!-- ENGCOM-3880 -->* 

 *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [20353](https://github.com/magento/magento2/pull/20353)*. [GitHub-20352](https://github.com/magento/magento2/issues/20352)


* Create a product with file type option.
* Place an order with this product by uploading file.
* Go to Sales->Order view.
* Option value is displaying html content instead on link

pected result 
1. Option value must be display as link.


<!-- MAGETWO-73883 -->* The Items Ordered list now updates as expected when the user clicks **OK** when changing the options of a configurable product during creation of an order from the Admin. Previously, the update did not occur until the user clicked **Update Items and Quantities**.



### Sales rule

<!-- MAGETWO-86098 -->* The cart price rule now uses specified conditions correctly when applying discounts on configurable products.

<!-- MAGETWO-86637 -->* The sales rule indexer now runs without error. Previously, the sales rule indexer returned an error during reindexing because of the Magento_AdvancedSalesRule module.

<!-- ENGCOM-3784 -->* 

 *Fix submitted by [Andriy Kravets](https://github.com/Winfle) in pull request [19423](https://github.com/magento/magento2/pull/19423)*. [GitHub-19230](https://github.com/magento/magento2/issues/19230)


1. Checkout as a guest using a valid coupon
2. After placing the order, register an account using the create account button on the order confirmation page.
3. Login to the admin
4. Make sure to get the order to a processing state.
5. Try to cancel the order

Expected result 
1. The order is canceled

Actual result 
1. You receive the generic errror "You have not canceled the item"



<!-- MAGETWO-95993 -->* Archived orders no longer reappear in the Order Management table after cron runs. 


### Search

<!-- MAGETWO-73351 -->* Full text search for Elasticsearch no longer includes the `date` attribute.

<!-- MAGETWO-86052 -->* The default sort order field now works as expected on the Catalog Search results page. 

<!-- MAGETWO-86396 -->* Searching for a synonym that contains a hyphen and number now returns the same results as any other search term in the group


<!-- ENGCOM-3811 -->* 

 *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [19984](https://github.com/magento/magento2/pull/19984)*. [GitHub-19982](https://github.com/magento/magento2/issues/19982)


Expected result
1. The classes defined in xml should be existed

Actual result 
1. Classes defined in xml not found


### Shipping 

<!-- MAGETWO-c -->* Magento now uses  shipping table rates from the correct store in multistore deployments. 

<!-- MAGETWO-73894 -->* You can now use `GET .V1/shipments` to search for shipments that contain a shipping label. Previously, using this call  caused Magento to throw an exception. [GitHub-6668](https://github.com/magento/magento2/issues/6668)


<!-- MAGETWO-91105 -->* Table rates now work as expected when using the AE code (Armed Forces Europe) when calculating weight vs destination table rates. 

<!-- MAGETWO-96156 -->* Shipments created through REST now return tracking information as expected. Previously, Magento created shipment notifications without a tracking number when shipment was created using REST. 


<!-- MAGETWO-95497 -->* 

EXPECTED RESULTS:
Order successfully completes.

ACTUAL RESULTS:
Order results in error: "Please check the shipping address information. Invalid value of "GB" provided for the countryId field."

Please check the shipping address information. Invalid value of "GB" provided for the regionId field



<!-- ENGCOM-4042 -->*  Fixed misalignment of elements on the shipping information page that Magento displays when you click **Check Out with Multiple Addresses** from the shopping cart. *Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20739](https://github.com/magento/magento2/pull/20739)*. [GitHub-20563](https://github.com/magento/magento2/issues/20563)



**Go to shipping information**, **Update qty & Addresses** and **Enter a new address** button Not aligned from left and right in **767px screen size**

<!-- ENGCOM-3008 -->*  Sitemaps now display correct base URLs for deployments with  multiple stores. *Fix submitted by [Toan Nguyen](https://github.com/nntoan) in pull request [18000](https://github.com/magento/magento2/pull/18000)*. [GitHub-17999](https://github.com/magento/magento2/issues/17999)


### Staging

<!-- MAGETWO-86541 -->* Updates containing zero objects are now removed as expected from the dashboard. Previously, Magento did not remove updates with zero objects.

<!-- MAGETWO-73332 -->* 

Partner reported that the Staging Dashboard page in the Magento admin panel is crashing in their dev Magento Cloud instance. 
Go to Content -> Staging -> Dashboard
Edit stagin compain and set end date as 2117 year
You can create few more staging compains with end date 2117 year
ACTUAL RESULTS:

Go to Content -> Staging -> Dashboard and page freeze and sometimes crash down
EXPECTED RESULTS

Page should be opened as usual, without significant performance degree.



<!-- MAGETWO-67135 -->* An administrator  with a custom (limited) role can now edit and schedule  updates to CMS content pages.

<!-- MAGETWO-86102 -->* Restricted users with access to specified sections can now save a scheduled update. Previously, Magento threw a "forbidden" error.



### Store

<!-- ENGCOM-3737 -->* Calling `getCurrentUrl` on a store no longer adds the  `___store` parameter when **store code in URL** is set to **yes** and the current store is not the same store requested in the URL. *Fix submitted by [Nazar](https://github.com/Nazar65) in pull request [19945](https://github.com/magento/magento2/pull/19945)*. [GitHub-18941](https://github.com/magento/magento2/issues/18941)




### Swatches

<!-- ENGCOM-3383 -->* 1. admin cannot change the default swatch option

In admin, last swatch option set to default upon save 

Steps to reproduce
1. View a product page

Expected result
1. Product page and content to be displayed

Actual result
1. Exception displayed:

*Fix submitted by [Rostislav Sabischenko](https://github.com/RostislavS) in pull request [19012](https://github.com/magento/magento2/pull/19012)*. [GitHub-8348](https://github.com/magento/magento2/issues/8348)


When viewing a product page I get a crash on NotProtectedExtension.php on line 89. This is due the following setting being empty and not checked before it is used:

'general/file/protected_extensions' in core_config_data



<!-- ENGCOM-2912 -->* Store views now show the correct swatch values. *Fix submitted by [Misha Medzhytov](https://github.com/magicaner) in pull request [17891](https://github.com/magento/magento2/pull/17891)*. [GitHub-17890](https://github.com/magento/magento2/issues/17890)

<!-- MAGETWO-73862 -->* You can now change the size of a swatch image as expected. [GitHub-6382](https://github.com/magento/magento2/issues/6382)


### TargetRule

<!-- MAGETWO-95420 -->* Magento no longer throws a fatal error when price is used in a Target Rule for actions.

<!-- MAGETWO-87678 -->* Magento no longer throws an exception when Target Rules are set to a rotation mode other than **SHUFFLE** (You can set rotation modes in **Admin** > **System** > **Configurations** > **Catalog** > **Catalog** > **Rule-Based Product Relations**).





### Tax

<!-- MAGETWO-89986 -->* 

teps to reproduce:

Create a Fixed Product Tax attribute (Store->Attirbutes->Product->Add new Attribute->
Catalog Input Type for Store Owner->Fixed Product Tax)
Add previously created Fixed Product Tax attribute to the Default attribute set.
Go to Stores->Configurations->Sales->Tax->Fixed Product Taxes->Enable FPT = Yes
Create a simple product with at least one option in FPT section (example: Country - United States, Tax - 10)
Save the product
Delete the earlier created option from FPT
Save the product
Expected result:
If the field is required, it should show an error while saving the product and leaving this field empty.

Actual result:
The product is saved successfully but the option is not deleted.

Can't delete an option from Fixed Product Tax	



<!-- MAGETWO-94179 -->* 

Tax isn't calculated for all type of virtual products if use PayPal checkout as payment method

Expected Result:

Tax should be calculated according to the selected "Ship to" address in PayPal
Actual Result:

Tax isn't calculated for virtual products if use PayPal checkout as payment method.



<!-- ENGCOM-3319 -->* Magento no longer uses the default tax information set in **Stores** > **Configuration** > **Sales** > **Tax** customer, quote, and order data.  *Fix submitted by [Nirav Kadiya](https://github.com/ssp58bleuciel) in pull request [18857](https://github.com/magento/magento2/pull/18857)*. [GitHub-16684](https://github.com/magento/magento2/issues/16684)


### Testing


<!-- ENGCOM-3875 -->* 

"@magentoDataIsolation" is used instead of "@magentoDbIsolation" in some integration tests.  

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [20298](https://github.com/magento/magento2/pull/20298)*. [GitHub-20296](https://github.com/magento/magento2/issues/20296)




<!-- ENGCOM-3021 -->*  Integration tests now respect module status as defined in `config-global.php`.  This permits you to enable only the modules you typically keep enabled while still saving system resources. *Fix submitted by [Jisse Reitsma](https://github.com/jissereitsma) in pull request [16361](https://github.com/magento/magento2/pull/16361)*. [GitHub-15196](https://github.com/magento/magento2/issues/15196)


### Theme

<!-- MAGETWO-74208 -->* Text now remains in the header area when you resize a page in deployments running in Internet Explorer. 

<!-- MAGETWO-85037 -->* Wishlist and compare links now appear for related products in portrait mode when viewed on a mobile device.

<!-- MAGETWO-89546 -->* We've improved the display of the navigation menu on mobile deployments. Previously, Magento displayed only a portion of any submenu accessed from a top menu. 

<!-- MAGETWO-94455 -->* The user agent rule now sets correct templates for product pages. Previously, the `footer.phtml` and `absolute_footer.phtml` templates were loaded from the desktop theme instead of the mobile theme, regardless of the user agent.

<!-- MAGETWO-87027 -->* The text attribute implemented on the product page within the mobile theme now fluidly displays the entire text value. Previously, long values were truncated.  

<!-- MAGETWO-94462 -->* All thumbnails reload as expected after you click on a configurable option when a configurable product detail page has more than 14 thumbnail images. Previously, not all thumbnails reloaded.

<!-- ENGCOM-3672 -->* Clicking on the store logo on the home page now reloads the page. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [19199](https://github.com/magento/magento2/pull/19199)*. [GitHub-19142](https://github.com/magento/magento2/issues/19142)







### UI

<!-- ENGCOM-3973 -->* 3937


Fix issue with file uploading if an upload field is disabled


 *Fix submitted by [Serhiy Zhovnir](https://github.com/serhiyzhovnir) in pull request [20636](https://github.com/magento/magento2/pull/20636)*. [GitHub-20376](https://github.com/magento/magento2/issues/20376)



Image gets uploaded if field is disable in Category






<!-- ENGCOM-4012 -->*  Store switcher now works correctly on mobile devices. *Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20540](https://github.com/magento/magento2/pull/20540)*. [GitHub-20259](https://github.com/magento/magento2/issues/20259)




<!-- ENGCOM-3308 -->* 

Fix the issue with missing asterisk for admin required fields

 *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18905](https://github.com/magento/magento2/pull/18905)*. [GitHub-18904](https://github.com/magento/magento2/issues/18904)


There is a missing asterisk for admin required fields. in several pages on the Admin





<!-- ENGCOM-3306 -->* 

 *Fix submitted by [Shubham Sharma](https://github.com/Shubham-Webkul) in pull request [18865](https://github.com/magento/magento2/pull/18865)*. [GitHub-18458](https://github.com/magento/magento2/issues/18458)



Magento version 2.2.6 Alert widget gets close when click anywhere on screen


<!-- ENGCOM-3174 -->* Admin tables now work as expected when single store mode is set to **on**. Previously, column positioning in these tables was not preserved when the page was refreshed. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18561](https://github.com/magento/magento2/pull/18561)*. [GitHub-12070](https://github.com/magento/magento2/issues/12070)

<!-- ENGCOM-3177 -->*  Magento now regenerates product URL rewrites as expected after an administrator changes a product URL key from the Admin and subsequently saves the product attribute URL path value. Previously, product URL rewrites could not be generated after this attribute value was changed. *Fix submitted by [Oleksii Lisovyi](https://github.com/oleksii-lisovyi) in pull request [18566](https://github.com/magento/magento2/pull/18566)*. [GitHub-5929](https://github.com/magento/magento2/issues/5929)

<!-- ENGCOM-3313 -->* You can now use the `OptionManagement.delete` method to programmatically delete a product attribute that converts to false. Previously, Magento threw an exception. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18873](https://github.com/magento/magento2/pull/18873)*. [GitHub-13083](https://github.com/magento/magento2/issues/13083)




<!-- MAGETWO-91403 -->* WYSIWYG editor functionality is now available in all rows of the dynamic rows UI component. Previously, this functionality was available in the first row only. 


###  URL rewrite

<!-- MAGETWO-86419 -->* Product URLs are now based on the configuration information from the Admin, not the order of records in the database. Previously, the order of records in the database affected the generated URL, and some products showed category paths for product URLS when **Use Categories Path for Product URLs** was set to **no**. 

<!-- MAGETWO-94860 -->* The storefront now properly displays the order of categories when you move categories in the Admin.

<!-- MAGETWO-93424 -->* Attempts to rewrite catalog URLs with `POST /V1/products` endpoint now  work as expected. [GitHub-16789](https://github.com/magento/magento2/issues/16789)

<!-- MAGETWO-89619 -->* Magento no longer ignores the store-level `url_key` of child categories when rewriting URLs process for global scope. [GitHub-13513](https://github.com/magento/magento2/issues/13513)

<!-- MAGETWO-86303 -->* Magento now correctly updates existing product URLs during import. Previously, Magento update existing URLs with the new URLs, but displayed a 404 error if you tried to access the product from the new URL.  

<!-- ENGCOM-3175 -->* The upsert category process during product import now generates freshly created category URL rewrites globally and not just for the default scope. Previously, Magento created URL rewrites for the default website scope only. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18563](https://github.com/magento/magento2/pull/18563)*. [GitHub-18234](https://github.com/magento/magento2/issues/18234)



### Visual Merchandiser

<!-- MAGETWO-91019 -->* Visual Merchandiser now correctly sorts configurable product prices in Tile view.


### Web API framework

<!-- MAGETWO-73526 -->* 
creating products with same name (url-key constraint)



Expected result
Both products created successfully

Actual result
Error "URL key for specified store already exists."

{"message":"URL key for specified store already exists.","trace":"#0......"}





<!-- MAGETWO-86344 -->* Product searches using `GET V1/products` return `extension_attributes` for configurable products as expected.

<!-- MAGETWO-73061 -->* The response for `GET V1/orders/:orderId` now contains `bundle_option` and `product_option` information as expected.

<!-- ENGCOM-3929 -->*  `Magento\Framework\Webapi\Rest\Response\Renderer` class's  `_formatValue` method has been refactored to handle ampersands correctly. Previously, an ampersand in any customer text field when using the WebApi doubled the encoding. [GitHub-18361](https://github.com/magento/magento2/issues/18361)

### Widget

<!-- MAGETWO-85683 -->* Magento now correctly renders apostrophes as entered in text fields. 


<!-- MAGETWO-93947 -->* The product page's Recently View section no longer displays the name of the current product. 


### Wishlist

<!-- ENGCOM-3344 -->*

Default values are not rendering on Wishlist product edit page.
While editing wishlist item that has configuration, it will not visible selected on configuration page. But after applying this fix it will work.

*Fix submitted by [Ratnesh Kumar](https://github.com/webkul-ratnesh) in pull request [18967](https://github.com/magento/magento2/pull/18967)*. [GitHub-18555](https://github.com/magento/magento2/issues/18555)


<!-- MAGETWO-90812 -->* Registered users can now create new wishlists as expected when multiple wishlists are enabled. Previously, Magento displayed an error.

<!-- MAGETWO-93035 -->*  Magento no longer retains entries for deleted products in the database `wishlist_item_option` table. 



### WYSIWG

<!-- ENGCOM-3291 -->*



*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [18641](https://github.com/magento/magento2/pull/18641)*. [GitHub-15828](https://github.com/magento/magento2/issues/15828)




Multisite installation, default website slow (X-Magento-Vary)

Hi. We have a multisite installation. The default website is fast, but the non-default website is really slow. When we switch the default website to the slow one, that ones becomes fast. What I've found out so far is that the slow site always get a cookie named **X-Magento-Vary**, while the fast one get a **PHPSESSID** cookie.

Set cache id prefix on installation

The undocumented `id_prefix` option for the cache frontend is used to prefix cache keys. If it is not set, Magento uses the first 12 bits of the md5 hash of the absolute path to Magentos app/etc directory. But if this is not exactly the same on all web servers, cache invalidation does not work.

To prevent this issue, the value shall be set on installation, so that the fall back on the fly does not happen anymore. Optionally, the value can be specified explicitly.

## Known issues






## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.


### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.



### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 




### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

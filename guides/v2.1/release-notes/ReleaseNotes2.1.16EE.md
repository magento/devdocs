---
group: release-notes
title: Magento Commerce 2.1.16 Release Notes
---

*	TOC
{:toc}

*Patch code and release notes were published on November , 2018.*


We are pleased to present Magento Commerce  2.1.16. This release includes  multiple enhancements to product security plus  bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.1.16) have been ported to 2.2.7, 1.14.4.0, and 1.9.4.0, as appropriate. 

## Highlights

Magento 2.1.16 contains 25 security fixes and enhancements. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for more information.

## Fixed issues

In addition to security enhancements, this release contains the following functional fixes.



### Installation, configuration, and deployment


### Catalog

<!--- ENGCOM-2750 -->* 

Product image roles v disappearing

[GitHub-10687](https://github.com/magento/magento2/issues/10687)


After upgrading from Magento 2.1.7 to 2.1.8 we had problems with product image roles. We have experienced that some products that previously had product image role set to base, small, thumbnail didn't have it anymore. It seems that the image roles get's removed from random products over time. This weekend at we have at least identified 10 products that got images roles removed during the weekend.

Expected result
Product image roles should be set to base, small, thumbnail unless the user changes it.
Actual result
Product image roles disappear randomly from some products from time to time.

title: [Backport] Fix #10687 - Product image roles disappearing
url: magento/magento2#17553
contributor name: @eduard13
contributor link: https://github.com/eduard13

### EAV

<!--- ENGCOM-2707 -->*  Incorrect return value from Product Attribute Repository 
Pull Request:

title: [Backport] Fix #4803: Incorrect return value from Product Attribute Repository
url: magento/magento2#15688
contributor name: @cream-julian
contributor link: https://github.com/cream-julian

[GitHub-4803](https://github.com/magento/magento2/issues/4803)


To adhere to Magento\Catalog\Api\ProductAttributeRepositoryInterface (extends Magento\Framework\Api\MetadataServiceInterface), the

Magento\Catalog\Model\Product\Attribute\Repository::getCustomAttributesMetadata
implementation should return Magento\Framework\Api\MetadataObjectInterface[], however it instead returns Magento\Catalog\Api\Data\ProductAttributeInterface[].

The ProductAttributeInterface does declare the two methods declared in MetadataObjectInterface , however they are not related by PHP extend.


### Email

<!--- MAGETWO-82598 -->* 



### Framework

<!--- ENGCOM-2706 -->* View.xml is inheriting image sizes from parent (so an optional field is replaced by the value of parent) 

I want to resize my images to a width of 250px and keep the aspect ratio (so I'm not adding a height tag). Instead of resizing the image to the full height of the image, Magento takes the height for that image from the parent theme's view.xml

Expected result
An image with 250px width which kept the aspect ratio without adding
Actual result
An image with 250px width and 90px height (as defined in the parent view.xml)


title: [Backport] magento/magento2#12250: View.xml is inheriting image sizes from paren?
url: magento/magento2#17439
contributor name: @quisse
contributor link: https://github.com/quisse
Fixed Issues:
1. magento/magento2#12250:

[GitHub-12250](https://github.com/magento/magento2/issues/12250)



<!--- ENGCOM-2324 -->* [Backport] issue/14056 - Coupon API not working for guest user

[GitHub-14056](https://github.com/magento/magento2/issues/14056)

Coupon code also does not work for logged-in customer through webapi, on frontend it works fine.

title: [Backport] Add compare list link to success message after adding a product
url: magento/magento2#16782
contributor name: @gelanivishal
contributor link: https://github.com/gelanivishal

check 2.2.6??







### General

<!--- ENGCOM-2795 -->* Resolved product custom option title save issue 

title: [Backport] 6305 - Resolved product custom option title save issue
url: magento/magento2#17609
contributor name: @jignesh-baldha
contributor link: https://github.com/jignesh-baldha


[GitHub-6305](https://github.com/magento/magento2/issues/6305)


Steps to reproduce

Go to Catalog/Product then edit a product
In Customizable Options tab, add option:
Option Title: Test
Option Type: Dropdown





<!--- ENGCOM-2805 -->* Solution for User role issue with customer group

title: [Backport] Solution for User role issue with customer group
url: magento/magento2#17629
contributor name: @jignesh-baldha
contributor link: https://github.com/jignesh-baldha

[GitHub-16499](https://github.com/magento/magento2/issues/16499)

While creating a user role for the “customer group”, issue with “customer group” menu for user role(ACL file).
The “customer group” menu is displayed under "customers" menu on the admin side, whereas it is displayed under store > other setting menu while assigning user role.

Steps to reproduce
1.System > Permission > User Roles
2. Create a role, give Resource Access to "Dashboard" and "Customer Groups"
3. Then create a user with the above-specified user role
4. Log in with the user(with the above-specified role) and you will notice that the system and customer menu both are visible at the same time.
5. But customer group is displayed under customer while system menu is blank.

Expected result
"Customer group" menu should be displayed under "customers" while Store menu should not be displayed.

[Screenshots, logs or description]
Actual result
Customer group is displaying under customer while Store menu is blank.



<!--- ENGCOM-2975 -->* Fixes reverted for remove space when only one country in drop-down on both cart

title: [Backport] Fixes reverted for remove space when only one country in drop-down on both cart ?
url: magento/magento2#17194
contributor name: @nilesh2jcommerce
contributor link: https://github.com/nilesh2jcommerce

Countries dropdown is empty

Everywhere in my Magento webshop the dropdown to select countries is empty. For example General > General > Country options > Default Country is empty (The only option is --Please Select--).

Also under locale options (I'm trying to change the store view locale) the dropdown is empty.

Is this a known issue? How can I fix this for my installation? I have other Magento 2 installations running that does not have this problem. Maybe the way of installing Magento is the cause (via Composer or download from Github)?


[GitHub-2146](https://github.com/magento/magento2/issues/2146)



### Infrastructure

<!--- ENGCOM-2730 -->* 

itle: [Backport] Convert to string $option->getValue, in order to be compared with oth?
url: magento/magento2#17476
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik

Configurable product addtocart with restAPI not working as expected

Addtocart using same API work fine for simple product, but while adding configurable product with restAPI, it creates duplicate product entry in cart, it should ideally update the qty.
Using single store and quote id is also same.






### Password

<!--- ENGCOM-2653 -->* 

title: [Backport] Fix bug Magento 2.2.2 password reset strength meter #13429
url: magento/magento2#17290
contributor name: @jignesh-baldha
contributor link: https://github.com/jignesh-baldha


Magento 2.2.2 password reset strength meter

[GitHub-13429](https://github.com/magento/magento2/issues/13429)



Steps to reproduce
Install Magento 2.2.2 CE
Remove footer newsletter block for the customer_account_createpassword handle
<referenceContainer name="form.subscribe" remove="true"/>
Create any customer account.
Logout on frontend and go to login page and click "Forgot Your Password?"
Fill created customer email and click "Reset password"
Follow on the link "Set a New Password" in received email letter
Try enter somekind of password to the New Pasword field
Expected result
Strength meter starts working, showing a different password strength as I type
Actual result
Strength meter doesn't work.
Error on the console.



### Reports

<!--- ENGCOM-2764 -->* Year-to-date dropdown in Stores>Configuration>General>Reports>Dashboard 

title: [Backport] Magento 2.2.5: Year-to-date dropdown in Stores>Configuration>General>Reports>Dashboard #17289
url: magento/magento2#17496
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram

[GitHub-17289](https://github.com/magento/magento2/issues/17289)


Steps to reproduce
Go to Stores > Configuration > General > Reports
Click on the 'Month' dropdown of the Year-to-date starts section.
Expected result
Numerical list appears of numbers 01 to 12.
Actual result
Numerical list appears of following numbers: [01,03,03,05,05,07,07,09,09,10,10,11,11,12,12]


### Review

<!--- ENGCOM-2806 -->* Fixed review list ajax if product not exist redirect to 404 page
title: [Backport] Fixed review list ajax if product not exist redirect to 404 page #13102
url: magento/magento2#17632
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik

Steps to reproduce
Visit review/product/listAjax/id/{{non existent id}/
Expected result
I would expect a 404 not found

Actual result
An exception which triggers a 503 HTTP status code


[GitHub-13102](https://github.com/magento/magento2/issues/13102)



###  Sales

<!--- ENGCOM-2933 -->* 
title: [Backport] #8035 join extension attributes not added to orders
url: magento/magento2#16169
contributor name: @Scarraban
contributor link: https://github.com/Scarraban

Join extension attributes are not added to Order results (REST api)

Expected result
I expected to see some_id in the resulting json response (this does work for Quote extension attributes).
Actual result
No some_id in the extension attributes property of the json response

Steps to reproduce
Define a Extension attribute for the OrderInterface with a join table:
    <extension_attributes for="Magento\Sales\Api\Data\OrderInterface">
        <attribute code="some_id" type="string">
            <join reference_table="SOMETABLE" join_on_field="quote_id" reference_field="quote_id">
                <field>some_id</field>
            </join>
        </attribute>
    </extension_attributes>
Make sure there's matching data in the SOMETABLE table and the sales_order table
Request orders via REST

[GitHub-8035](https://github.com/magento/magento2/issues/8035)



<!--- ENGCOM-2691 -->* 

title: [Backport] Fix #16655 Block totalbar not used in invoice create and credit memo create screens
url: magento/magento2#17413
contributor name: @dverkade
contributor link: https://github.com/dverkade


https://github.com/magento/magento2/issues/16655
Block totalbar not used in invoice create and credit memo create screens

In the following layout files the Magento\Sales\Block\Adminhtml\Order\Totalbar block is defined:

sales_order_creditmemo_new.xml
sales_order_creditmemo_updateqty.xml
sales_order_invoice_new.xml
sales_order_invoice_updateqty.xml
However up on investigation I found that this block doesn't do anything and seems to be deprecated. Even when it does render something there is no styling. All styling is in the file styles-old.less and styling can not be found in the style.less file of the Magento adminhtml theme.

Expected result
Totalbar block renders something.
Actual result
Block doesn't render anything.

[GitHub-16653](https://github.com/magento/magento2/issues/16653)



Not possible to create an invoice in Magento 2.3 

When testing the new Magento 2.3 Alpha version it found out it it's not possible to create a new invoice for an order. An error is thrown.

Preconditions
Magento 2.3 Alpha installed
Create an order without an invoice attached to it.
Steps to reproduce
Open the order and click the "Invoice" action to start creating an invoice
Expected result
See the invoice screen, so that an invoice can be created.
Actual result
Error is thrown, a new invoice can't be created.




### Shipping

<!--- ENGCOM-2325 -->* 
Fix the issue with "Shipping address is not set" exception

title: [Backport] Fix the issue with "Shipping address is not set" exception
url: magento/magento2#16783
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch


[GitHub-16555](https://github.com/magento/magento2/issues/16555)


"Shipping address is not set" exception in Multishipping Checkout.

Steps to reproduce
Log In as Customer.
Add Product to Cart.
Proceed to Checkout.
Fill Shipping Address data, click Next (do not place Order)
Return to the Storefront.
Go to the Shopping Cart.
Click Check Out with Multiple Addresses.
Expected result
Correct Multishipping Checkout workflow.
Actual result
Exception #0 (Magento\Framework\Exception\StateException): Shipping address is not set
Exception #0 (Zend_Db_Statement_Exception): SQLSTATE[23000]: Integrity constraint violation when trying to access Shopping Cart.



### Store

<!--- ENGCOM-2627 -->* 

ix bug in method getUrlInStore() of product model 

title: #16273: [Backport] Fix bug in method getUrlInStore() of product model
url: magento/magento2#16310
contributor name: @vasilii-b
contributor link: https://github.com/vasilii-b


[GitHub-16273](https://github.com/magento/magento2/issues/16273)


Method $product->getUrlInStore() returning extremely long URLs, could be a bug 

Steps to reproduce
Use the following code where a product model is loaded and where you can see the result:

<?= $product->getUrlInStore() ?>

Expected result
The URL produced for the product would look like:

https://www.domain.com/my-product.html?___store=default
Actual result
The URL produced is actually very long winded:

https://www.domain.com/my-product.html?___store%5B_data%5D%5Bstore_id%5D=1&___store%5B_data%5D%5Bcode%5D=default&___store%5B_data%5D%5Bwebsite_id%5D=1&___store%5B_data%5D%5Bgroup_id%5D=1&___store%5B_data%5D%5Bname%5D=UK+Mainland&___store%5B_data%5D%5Bsort_order%5D=0&___store%5B_data%5D%5Bis_active%5D=1&___store%5B_data%5D%5Bavailable_currency_codes%5D%5B0%5D=GBP&___store%5B_data%5D%5Bbase_currency%5D%5B_data%5D%5Bcurrency_code%5D=GBP&___store%5B_data%5D%5Bcurrent_currency%5D%5B_data%5D%5Bcurrency_code%5D=GBP






### Theme

<!--- ENGCOM-2917 -->* 

Wishlist icon cut on Shopping cart page in mobile view 

title: [Backport] Resolved : Wishlist icon cut on Shopping cart page in mobile view #17851 #28
url: magento/magento2#17912
contributor name: @hitesh-wagento
contributor link: https://github.com/hitesh-wagento


[GitHub-17851](https://github.com/magento/magento2/issues/17851)


Wishlist icon cut on Shopping cart page in mobile view.



Steps to reproduce
Login in your frontend.
Add any product in Cart.
Go to Shopping cart.
Switch mobile view.
Expected result
Wishlist icon should not cut in mobile view.
Actual result
Wishlist icon cut in mobile view.



### UI

<!--- ENGCOM-2825 -->* 
Update time12h javascript validation rule to be compatible with js minify 

title: [Backport] Update time12h javascript validation rule to be compatible with js minify
url: magento/magento2#17689
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

UI validation rule for valid time am/pm doesn't work when js is minified

Steps to reproduce
Run SQL: update core_config_data set value = 1 where path = 'dev/js/minify_files'
bin/magento deploy:mode:set production
Run production compilation scripts
Try to save a ui component that validates against time12h
Expected result
The input field should validate against the time12h validation rule
Actual result
There is a javascript error that happens when the js is minified. The space in the validation rule is stripped.

<!--- ENGCOM-2835 -->* Message list component fix: the message type is always error when parameters specified
itle: [Backport] Message list component fix: the message type is always error when parameters specified
url: magento/magento2#17702
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

Message list component: the message type is always error when parameters specified

Description
Component: Magento_Ui/js/model/messageList.js component.
The message type is always "error" when specifying the parameters property.

Expected result
The success message should be shown.
Actual result
The error message is shown.




<!--- ENGCOM-2898 -->* Fixes black background for png images in wysiwyg editors

title: [Backport] Fixes black background for png images in wysiwyg editors.
url: magento/magento2#17855
contributor name: @eduard13
contributor link: https://github.com/eduard13

[GitHub-14248](https://github.com/magento/magento2/issues/14248)


Transparent background becomes black for thumbnails of PNG into Wysiwyg editor

This PR fixes the black background for png images, which are uploaded in wysiwyg editors. This issue appears only for GD2 image processing library.




## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request, and the GitHub issue number associated with the pull request (if available).

{% include release-notes/engcom-2-1-16.md %}


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).




## System requirements

Our technology stack is built on PHP and MySQL. For more information, see <a href="http://devdocs.magento.com/guides/v2.1/install-gde/system-requirements2.html" target="_blank">System Requirements</a>.


## Installation

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup. 


## Migration toolkits 

The Magento [Data Migration Tool](http://devdocs.magento.com/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool](http://devdocs.magento.com/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions,  bug reports, and code contributions. 

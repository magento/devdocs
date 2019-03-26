---
group: release-notes
subgroup: 05_techbull
title: Image Resize Issue with Magento version 2.1.6
menu_title: Image resize issue Magento version 2.1.6 (May 17, 2017)
menu_node: 
menu_order: 4
---

*Technical bulletin updated on May 17, 2017.*

These instructions apply to anyone upgrading to {{site.data.var.ce}} or {{site.data.var.ee}}  version 2.1.6 whose installation runs custom themes. This Technical Bulletin provides both a discussion of the issue and a link to our hot fix for 2.1.6. 

### Who needs this information?

You need to read this bulletin if you've upgraded to Magento 2.1.6 (Open Source or Commerce) and are experiencing any of the following issues: 

* all images on the product frontend appear reduced in size, including the base image

* images do not have uniform sizes -- some are greatly reduced, while others appear as expected. (This particular anomaly occurs after you've run the `bin/magento catalog:images:resize` command.)

You cannot change the size of the base image within the gallery by editing `etc > view.xml`. Instead, using this method increases image size as well as gallery size, which renders the image out of alignment.

### Background

Magento 2.1.6 introduced a change in how the platform handles images associated with custom themes. The `frame` element adds white space around your image. In Magento 2.1.6, the default value of this optional setting is **true**. 

If your custom theme doesn't include the `frame` element, or a value has not been assigned to it, then Magento will rely upon the `product_image_white_borders` option in the Catalog module for the value of the `frame` option. The `product_image_white_borders` setting typically has a value of **1**,  but is overridden to **0** in the default Luma and Blank themes. 

### Action

We strongly recommend that you upgrade to  2.1.7 as soon as that release is available. Magento 2.1.7 will contain a fix for this issue as well as critically important security enhancements. We provide the hot fix described in this Technical Bulletin as a temporary fix only. 

#### Magento 2.1.x CE

You can fix this issue with image resizing by downloading  and installing the `CE-MAGETWO-67805.patch` hot fix, and then immediately upgrading to Magento 2.1.7, as soon as it is available. 

  To download this patch, 

  1) On [Magento Tech Resources](https://magento.com/tech-resources/download){:target="_blank"}, choose **Downloads > Magento Community Edition Patches > 2.x**.

  2) Select the `CE-MAGETWO-67805.patch` hot fix.

#### Magento 2.1.x EE

You can fix this issue with image resizing by downloading and installing the `EE-MAGETWO-67805.patch` hot fix, and then immediately upgrading to Magento 2.1.7, as soon as it is available.

  To download this patch,

  1) Log in to your EE client account by selecting **My Account** on [magentocommerce.com](https://magentocommerce.com){:target="_blank"}. 

  2) After logging in, navigate to MAGETWO-67805 on the Support Patches page (**Downloads > Magento Enterprise Edition 2.X > Magento Enterprise Edition 2.x Release > Support Patches > MAGETWO-67805**). 

  3) Select and install the `EE-MAGETWO-67805.patch` hot fix. 

#### Magento Commerce (Cloud) 

General Magento Commerce (Cloud) patches are provided for all Magento Commerce (Cloud) customers in a repository referenced in your `composer.json`. We apply patches automatically during the build phase when a patch is available. `magento-cloud-configuration 101.6.2` contains the hot fix for this image resize issue. 

See [Update extensions]({{ site.baseurl }}/guides/v2.1/cloud/howtos/update-components.html){:target="_blank"} for more information on running `composer update` to upgrade your Cloud extension. 

### More information

For further discussion of this issue, see [GITHUB-9385](https://github.com/magento/magento2/issues/9385){:target="_blank"} and [GITHUB-9395](https://github.com/magento/magento2/issues/9395){:target="_blank"}

## Credits

Dear community members, thank you for your prompt identification of this issue.  







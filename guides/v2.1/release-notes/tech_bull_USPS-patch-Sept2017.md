---
layout: default 
group: release-notes
subgroup: 05_techbull
title: USPS Service Name Change  
menu_title: USPS Service Name Change (September 10, 2017)
menu_node: 
menu_order: 7
version: 2.1
github_link: release-notes/tech_bull_USPS-patch-Sept2017.md
---

*Technical Bulletin published on September 10, 2017.*



On September 1, USPS changed their First-Class Mail Parcel Service to First-Class Package Service – Retail. Because the First-Class Mail Parcel is no longer available after September 1,  Magento 1.x and 2.x merchants offering this service must change this service name in the `Usps.php` file as soon as possible. 

If you do not take action, your store will not support checkout using the First-Class Package Service - Retail mailing option. 




### Who is affected by this issue?


Users of any version of Magento Open Source 1.x and Magento Commerce 1.x are affected by this change. 

Users of any version of Magento Open Source and Magento Commerce earlier than 2.1.9 or 2.0.16 (expected to be released next week) are affected by this change, too. If you are running a store on any version of Magento 2.x prior to 2.1.9 or 2.0.16, you must follow the workaround detailed below.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you are running a different shipping extension, contact your extension provider to determine whether you're affected, and if so, the remedial action to take.
</div>



### Recommended Magento 1.x actions

We've provided the following workaround to address this change the USPS API. Additionally, we will release the `SUPEE-10336 for 1.x` patch for this issue in the near future. If you implement the following workaround, note that you must undo the workaround before installing the patch. 


### Workaround for Magento 1.x 
Follow this procedure to edit the `Usps.php` file to use the new shipping method name: 

1) Navigate to `app/code/core/Mage/Usa/Model/Shipping/Carrier/Usps.php`. 

2) Search for the string `First-Class Mail Parcel`. This files by default contains two occurrences of this string.  

3) Replace all the occurrences of `First-Class Mail Parcel` with `First-Class Package Service - Retail`.

4) Save your changes to `Usps.php`. 

5) Flush the Magento cache. 

**If you've implemented the temporary workaround, you'll need to delete it before you can install the patch.**


### Recommended Magento 2.x actions

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Fixes for this issue will be included in the Magento 2.1.9 and 2.0.16 releases, which are scheduled for release on September 14. We strongly recommend that you install or upgrade to these versions as soon as they are available.
</div>

### Workaround for Magento 2.x

Follow this procedure to edit the `Carrier.php` file to use the new shipping method name:

1) Navigate to `vendor/magento/module-usps/Model/Carrier.php`. 

2) Search for the string `First-Class Mail Parcel`. This file by default contains the two occurrences of this string.  

3) Replace all the occurrences of `First-Class Mail Parcel` with `First-Class Package Service - Retail`.

4) Save your changes to `Carrier.php`. 

5) Flush the Magento cache. 




### More information

See [USPS® Announces September Rate Change, Reclassification for First-Class Mail Parcels](http://www.pitneybowes.com/us/blog/usps-announces-september-rate-change-first-class-mail-parcels.html) for more information on this and other recent USPS rate and classification changes. 

### Acknowlegments

Thanks to @shipperhq for bringing this issue to our attention!






---
group: release-notes
subgroup: 05_techbull
title: USPS Service Name Change  
menu_title: USPS Service Name Change (September 10, 2017)
menu_node: 
menu_order: 7
---

*Technical Bulletin published on September 10, 2017.*

*last revised: September 12, 2017* 



On September 1, USPS changed their First-Class Mail Parcel Service to First-Class Package Service – Retail. Because the First-Class Mail Parcel is no longer available after September 1,  Magento 1.x and 2.x merchants offering this service must change this service name in the `Usps.php` as soon as possible. 

If you do not take action, your store will not support checkout using the First-Class Package Service - Retail mailing option. 

### Who is affected by this issue?

Users of any version of Magento Open Source 1.x and Magento Commerce 1.x are affected by this change.

Users of any version of Magento Open Source and Magento Commerce earlier than 2.1.9 or 2.0.16 (expected to be released within the next week) are affected by this change, too. If you are running a store on any version of Magento 2.x prior to 2.1.9 or 2.0.16, you must follow the workaround detailed below.

{: .bs-callout .bs-callout-info }
If you are running a different shipping extension, contact your extension provider to determine whether you're affected, and if so, the remedial action to take.

### Recommended Magento 1.x actions

We’ve provided the following workaround to address this change to the USPS API. Additionally, we have released the `SUPEE-10336 for 1.x` patch for this issue. If you implement the following workaround, note that you must undo the workaround before installing the patch.

#### Access Magento 1.x patches

To get patches for Magento 1.x Commerce or Open Source

1.	Log in to [www.magento.com](http://magentocommerce.com){:target="_blank"}

2.	In the left pane, click Downloads.

3.	In the right pane, click either Magento Commerce or Magento Open Source.

4.	Follow the prompts on your screen to download the SUPEE-10336 for 1.x patch for your version of Magento Commerce or Open Source.

5.	Apply the patch as discussed in [How to Apply and Revert Magento Patches]({{ site.baseurl }}/guides/m1x/other/ht_install-patches.html){:target="_blank"}.

### Workaround for Magento 1.x 

Follow this procedure to edit the `Usps.php` file to use the new shipping method name: 

1) Navigate to `app/code/core/Mage/Usa/Model/Shipping/Carrier/Usps.php`. 

2) Search for the string `First-Class Mail Parcel`. This files by default contains two occurrences of this string.  

3) Replace all the occurrences of `First-Class Mail Parcel` with `First-Class Package Service - Retail`.

4) Save your changes to `Usps.php`. 

5) Flush the Magento cache. 


**If you've implemented the temporary workaround, you'll need to delete it before you can install the patch.**

### Recommended Magento 2.x actions

{: .bs-callout .bs-callout-info }
Fixes for this issue will be included in the Magento 2.1.9 and 2.0.16 releases, which are scheduled for release on September 14. We strongly recommend that you install or upgrade to these versions as soon as they are available.

* If you cannot upgrade to or install these releases, or need a temporary workaround until these releases are available, follow the workaround procedure.

### Workaround for Magento 2.x

Follow this procedure to edit the `Carrier.php` file to use the new shipping method name:

1) Navigate to `vendor/magento/module-usps/Model/Carrier.php`. 

2) Search for the string `First-Class Mail Parcel`. This file by default contains the two occurrences of this string.  

3) Replace all the occurrences of `First-Class Mail Parcel` with `First-Class Package Service - Retail`.

4) Save your changes to `Carrier.php`. 

5) Flush the Magento cache. 

### More information

See [USPS® Announces September Rate Change, Reclassification for First-Class Mail Parcels](http://www.pitneybowes.com/us/blog/usps-announces-september-rate-change-first-class-mail-parcels.html) for more information on this and other recent USPS rate and classification changes. 

### Acknowledgments

Thanks to [ShipperHQ](https://shipperhq.com/) for bringing this issue to our attention!






---
layout: default 
group: release-notes
subgroup: 05_techbull
title: USPS Service Name Change  
menu_title: USPS Service Name Change (September 7, 2017)
menu_node: 
menu_order: 7
version: 2.1
github_link: release-notes/tech_bull_USPS-patch-Sept2017.md
---

*Technical Bulletin published on September 7, 2017.*



On September 1, USPS changed their First-Class Mail Parcel Service to First-Class Package Service – Retail. Because the First-Class Mail Parcel is no longer available after September 1,  Magento 1.x and 2.x merchants offering this service must change this service name in the `Usps.php` file as soon as possible. If you do not take action, your store will not support checkout using the First-Class Package Service - Retail mailing option. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Fixes for this issue will be included in the Magento 2.1.9 and 2.0.16 releases, which are scheduled for release in the second half of September.
</div>


### Who is affected by this issue?

Users of any version of Magento Open Source 1.x and Magento Commerce 1.x are affected by this change. If you are running a store on any version of Magento 1.x,  you must either apply a Magento-provided patch or following the workaround detailed below.  

Users of any version of Magento Open Source and Magento Commerce before 2.1.9 or 2.0.16 are affected by this change, too. If you are running a store on any version of Magento 2.x prior to 2.1.9 or 2.0.16, you must follow the workaround detailed below.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you are running the ShipperHQ extension, you do not need to either apply the patch or implement the workaround. Please consult USPS API [Changes Sept 1st 2017](http://blog.shipperhq.com/2017/09/usps-api-changes-sept-1st-2017/).
</div>




### Recommended Magento 1.x actions

Users of Magento 1.x can either apply the `SUPEE-10336 for 1.x` patch or implement the workaround described below. 



#### Access Magento 1.x patches

To get patches for Magento 1.x Commerce or Open Source

1.	Log in to [www.magento.com](http://magentocommerce.com){:target="_blank"}

2.	In the left pane, click Downloads.

3.	In the right pane, click either Magento Commerce or Magento Open Source.

4.	Follow the prompts on your screen to download the SUPEE-10336 for 1.x for your version of Magento Commerce or Open Source.

5.	Apply the patch as discussed in [How to Apply and Revert Magento Patches](http://devdocs.magento.com/guides/m1x/other/ht_install-patches.html){:target="_blank"}.


### Workaround for Magento 1.x 
Follow this procedure to edit the `Usps.php` file to use the new shipping method name: 

1) Navigate to `app/code/core/Mage/Usa/Model/Shipping/Carrier/Usps.php`. 

2) Search the `Usps.php` file for `method-to-code`. Within that code block, you'll see `First-Class Mail Parcel`. 

3) Replace `First-Class Mail Parcel` with `First-Class Package Service - Retail`. 

4) Save your changes to `Usps.php`. 

5) In the Magento Admin, refresh your shipping methods, and select this new "Allowed Methods". 


#### Recommended Magento 2.x actions
* Magento versions 2.1.9 and 2.0.16 will contain the fix for this issue. **We strongly recommend that you install or upgrade to these versions as soon as they are available.** 

* If you cannot upgrade to or install these releases, or need a temporary workaround until these releases are available, follow this procedure:

1) Navigate to `vendor/magento/module-usps/Model/Usps.php`. 

2) Search the `Usps.php` file for `method-to-code`. Within that code block, you'll see `First-Class Mail Parcel`. 

3) Replace `First-Class Mail Parcel` with `First-Class Package Service - Retail`. 

4) Save your changes to `Usps.php`. 

5) In the Magento Admin, refresh your shipping methods, and select this new "Allowed Methods". 




### More information

See [USPS® Announces September Rate Change, Reclassification for First-Class Mail Parcels](http://www.pitneybowes.com/us/blog/usps-announces-september-rate-change-first-class-mail-parcels.html) for more information on this and other recent USPS rate and classification changes. 








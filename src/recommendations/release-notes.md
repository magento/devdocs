---
group: product-recommendations
title: Release Notes
ee_only: True
---

The following updates describe the latest improvements to Product Recommendations.

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## **3.0.2** for Magento Commerce (EE) and Commerce on Cloud (ECE) 2.3.1

-  {:.new}Added a status column on the grid when selecting Recommendation units in Page Builder
-  {:.fix}Fixed an issue with incorrect http/https protocol in product and image URLs

## **3.0.1** for Magento Commerce (EE) and Commerce on Cloud (ECE) 2.3.1

This is a major version release. You must [edit your project's root composer.json file](https://devdocs.magento.com/recommendations/install-configure.html#update-your-product-recommendations-installation)

-  {:.new}Page Builder support. With the Page Builder integration, you can accurately and granularly place Recommendation units in any arbitrary location on Page Builder-authored content. You also can style the headings and recommendation units themselves. [Page Builder support](https://docs.magento.com/user-guide/marketing/page-builder-add-product-recs.html) further describes this feature.

-  {:.new}Fetch Product Recommendations from alternate SaaS environments. This allows you to use product recommendations computed in your product environment on other, non-production environments.
[Switching SaaS Environments](https://docs.magento.com/user-guide/marketing/recommendation-change-source.html) further describes this feature.

-  {:.fix}Fixed an issue where checkout was inhibited for shoppers using uBlock Origin
-  {:.fix}Fixed an issue sending extraneous add-to-cart events

## **2.0.0** for Magento Commerce (EE) and Commerce on Cloud (ECE) 2.3.0

-  {:.new}General availability release!

### Documentation

To learn more about Product Recommendations and Product Recommendations development:

-  [Developer Documentation](https://devdocs.magento.com/recommendations/product-recs.html)
-  [User Guide](https://docs.magento.com/user-guide/marketing/product-recommendations.html)

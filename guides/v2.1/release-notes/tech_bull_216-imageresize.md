---
layout: default 
group: release-notes
subgroup: 05_techbull
title: Image Resize Issue with Magento version 2.1.6
menu_title: Image resize issue Magento version 2.1.6 (May 17,2017)
menu_node: 
menu_order: 4
version: 2.1
github_link: release-notes/tech_bull_216-imageresize.md
---

*Technical bulletin updated on May 17, 2017.*

These instructions apply to anyone upgrading to Magento Community Edition (CE) or Magento Enterprise Edition (EE) version 2.1.6 whose installation runs custom themes. This Technical Bulletin provides both a discussion of the issue and a link to our hot fix for 2.1.6. 

### Who needs this information?
You need to read this bulletin if you've upgraded to Magento 2.1.6 (CE or EE) and are experiencing any of the following issues: 

* all images on the product front end appear reduced in size, including the base image

* images do not have uniform sizes -- some are greatly reduced, while others appear as expected. (This particular anomaly occurs after you've run the `bin/magento catalog:images:resize` command.)

You cannot change the size of the base image within the gallery by editing `etc > view.xml`. Instead, using this method increases image size as well as gallery size, which renders the image out of alignment.


### Background

Magento 2.1.6 introduced a change in how the platform handles images associated with custom themes. The `frame` element adds white space around your image. In Magento 2.1.6, the default value of this optional setting is **true**. (Previous versions of Magento did **not** set this value to **true** by default in the blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.) 

If your custom theme doesn't include the `frame` element, or a value has not been assigned to it, then Magento will rely upon the `product_image_white_borders` option in the Catalog module for the value of the `frame` option. The `product_image_white_borders` setting typically has a value of **1**,  but is overridden to **0** in the default Luma and Blank themes. 


### Action
You can fix this issue with image resizing in one of two ways:

* install `MAGETWO-67805.hotfix.git-composer-compatible.patch` from [Magento Tech Resources](https://magento.com/tech-resources/download){:target="_blank"}.

* upgrade to 2.1.7, which will be released in the near future.



### More information

For further discussion of this issue, see [GITHUB-9385](https://github.com/magento/magento2/issues/9385){:target="_blank"} and [GITHUB-9395](https://github.com/magento/magento2/issues/9395){:target="_blank"}

## Credits
Dear community members, thank you for your prompt identification of this issue.  







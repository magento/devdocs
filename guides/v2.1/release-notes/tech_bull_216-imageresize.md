---
layout: default 
group: release-notes
subgroup: 05_techbull
title: Technical Bulletin
menu_title: Image resize issue Magento version 2.1.6 (April 27,2016)
menu_node: 
menu_order: 4
version: 2.1
github_link: release-notes/tech_bull_216-imageresize.md
---

These instructions apply to anyone upgrading to Magento Community Edition (CE) or Magento Enterprise Edition (EE) version 2.1.6.

### Who needs this information?
You need to read this bulletin if you've upgraded to Magento 2.1.6 (CE or EE) and are experiencing any of the following issues: 

* all images on the product front end appear reduced in size, including the base image. 

* images are different sizes (occurs after you've run the CLI image resize command)

You cannot change the size of the base image size within the gallery using etc>view.xml. Instead, using this method increases image size as well as gallery size, which renders the image out of alignment.


### Background

Magento 2.1.6 introduced a change in how images are handled: By default, the value of  <frame></frame> is set to true. Previously, this value was not set to true by default. 

#### What does the <frame>/<frame> option do?

The <frame></frame> option adds white space around your image with the goal of imposing a specific width and height in `view.xml` while preserving the desired aspect ratio. 


If the image doesn't have a <frame> option,  Magento uses the `product_image_white_borders` option in Catalog module. This setting typically has a value of 1,  and but is overriden to 0 in Luma and Blank themes. If your theme doesn't include this option, then Magento will use the Catalog value  as the value for the `frame` option.


### Suggested workaround 

To prevent Magento from resizing images, you must include <frame>0</frame> within that image definition in `view.xml`. 



### More information

https://github.com/magento/magento2/issues/9385

https://github.com/magento/magento2/issues/9395











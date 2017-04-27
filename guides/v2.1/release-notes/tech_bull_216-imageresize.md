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

*Technical bulletin first published on April 27, 2017.*

These instructions apply to anyone upgrading to Magento Community Edition (CE) or Magento Enterprise Edition (EE) version 2.1.6.

### Who needs this information?
You need to read this bulletin if you've upgraded to Magento 2.1.6 (CE or EE) and are experiencing any of the following issues: 

* all images on the product front end appear reduced in size, including the base image

* images are different sizes (occurs after you've run the CLI image resize command).

You cannot change the size of the base image size within the gallery using etc>view.xml. Instead, using this method increases image size as well as gallery size, which renders the image out of alignment.


### Background

Magento 2.1.6 introduced a change in how images are handled: By default, the value of <frame></frame> is set to true. Previously, this value was not set to true by default. 

#### What does the <frame>/<frame> option do?

The <frame></frame> option adds white space around your image with the goal of imposing a specific width and height in `view.xml` while preserving the desired aspect ratio. 


If the image doesn't have a <frame> option,  Magento uses the `product_image_white_borders` option in Catalog module. This setting typically has a value of 1,  and but is overriden to 0 in Luma and Blank themes. If your theme doesn't include this option, then Magento will use the Catalog value  as the value for the `frame` option.


### Suggested workaround 

To prevent Magento from resizing images, you must include <frame>0</frame> within that image definition in `view.xml`. 


1. Update your `view.xml` file by adding `<frame>0</frame>` to each image definition.

2. Clean your full-page cache. 

3. manually resize all your images using the `bin/magento catalog:images:resize` command. 



### More information

For further discussion of this issue, see <a href="https://github.com/magento/magento2/issues/9385" target="_blank">(GITHUB-9385)</a> and <a href="https://github.com/magento/magento2/issues/9395" target="_blank">(GITHUB-9395)</a>. 


## Credits
Dear community members, thank you for your prompt identification of this issue.  







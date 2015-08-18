---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Page
menu_order: 6
github_link: mtf/mtf_entities/mtf_page.md
---

<h2 id="mtf_page_overview">Page overview</h2>

A page object is a class that serves as an interface to the Magento page under test.
A page serves as containers for blocks.
To improve the process of working with page elements the mechanism of pages and blocks was implemented in the MTF.
Test uses the methods of the blocks of page object class, when it need to interact with Magento page.
The benefit is that if the UI changes, the tests don’t need to be changed.
Only the code within the block requires changes.

The Page Object Design Pattern provides the following advantages:

- Clean separation between test code and page specific code like locator.
- Single repository for the services or operations required by the page.


In this topic we will create new page and add blocks to the page.
You will know about mechanism of extending the page in another module.
---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Block
menu_order: 4
github_link: mtf/mtf_entities/mtf_block.md
---

<h2 id="mtf_block_overview">Block overview</h2>
Block is the area of user interface aimed to perform concrete functionality, for example, Search Box, Header, Footer.

The block object pattern is used in the MTF to avoid unnecessary duplication of code and makes tests easier to support.

A block can have the following features:

- Block can contain other blocks.
- Block can be used in several pages and blocks.

This topic shows how to create new block and explore its structure. It discusses renders, form mapping, and merging pages.

<h2 id="mtf_block_types">How to work with block</h2>

In general a basic flow is the following:

* create page
* create block in the page
* create methods to do something with the block during the test (for example, get data, push the button, choose tab)
* call the page
* locate the block
* call the method you need

<h2 id="mtf_block_path">How to determine block name and a path</h2>

To work with block you need its name and path. Magento has a feature that shows you this data right on the Magento page.

To enable this feature go through the following steps:

1. Login to Magento Admin as administrator
1. Follow **STORES > Configuration**
1. Change **Store View** to **Main Website** (the Template Path and Block name will only appear for current website)
1. Follow **ADVANCED > Developer**
1. Expand **Debug** tab
1. Set **Template Path Hints** to **Yes**
1. Set **Add Block Name to Hints** to **Yes**
1. **Save Config**

Voilà!
 
<a href="{{ site.baseurl }}common/images/mtf_block_path-feature.png"><img src="{{ site.baseurl }}common/images/mtf_block_path-feature.png" /></a>









<h2 id="mtf_block_mapping">Mapping</h2>

<h2 id="mtf_block_mapping_merdge">Merdge of mappings</h2>

<h2 id="mtf_block_create">How to create block for the test</h2>


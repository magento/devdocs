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

Block may have the following features:

- Block can contain other blocks.
- Block can be used in several pages and blocks.

In this topic we will create new block and explore its structure. You will know about renders, form mapping and merging pages.
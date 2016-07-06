---
layout: default
group: config-guide
subgroup: 08_Caching
title: Public and private content
menu_title: Public and private content
menu_order: 19
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-priv.md
---

#### Contents
*	[]()
*	[]()
*	[]()
*	[]()

## Public and private content {#config-cache-priv-over}
Almost every page in Magento contains personal or sensitive information that should be delivered to only one specific user. To enable you to deliver private content in a public page, we define two broad types of content:

*	Public, which can display to many customers. 

	Public content is stored in your cache storage (file, database, Varnish, and so on). Examples of public content includes header, footer, and category listing.
*	Private is not stored in your cache; instead, it's stored on the client only. 

	Examples of private content include the wishlist, shopping cart, customer name, and addresses.
---
layout: default
group: config-guide
subgroup: 08_Caching
title: Create a cache type
menu_title: Create a cache type
menu_order: 10
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-types
version: 2.0
github_link: config-guide/cache/caching-cache-type.md
---

A *cache type* enables you to specify what is cached and enables merchants to clear that cache type using the Cache Management page in the Magento Admin.

The tag *scope* provides a mechanism for a cache type.

You must specify the following parameters:

*	`Namespace_Module` defines the name of a module that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*	`%cache_type_id%` defines unique identifier of a cache type.
*	`%cache_type_tag%` defines unique tag to be used in the cache type scoping.

## More information about caching

You can get more information about caching by looking at the code.
We suggest you locate classes that extend [Magento\Framework\Cache\Frontend\Decorator\TagScope][tagscope].

For example, look at [Magento\Eav\Model\Cache\Type][type] to understand more about the EAV cache type.

<div class="bs-callout bs-callout-info" id="info">
  <p>Please help us improve this topic by suggesting details using the <strong>Edit this page in GitHub</strong> link at the top of the page. </p>
</div>

[tagscope]: {{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php
[type]: {{ site.mage2000url }}app/code/Magento/Eav/Model/Cache/Type.php

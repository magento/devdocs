---
layout: default
group: config-guide
subgroup: 08_Caching
title: Create a cache type
menu_title: Create a cache type
menu_order: 500
menu_node: 
version: 2.0
github_link: config-guide/config/caching-cache-type.md
---

#### Contents  

*	<a href="#m2devgde-cache-type">Create a cache type</a>
* <a href="#m2devgde-cache-more">More information about caching</a>

<h2 id="m2devgde-cache-type">Create a cache type</h2>

A *cache type* enables you to specify what is cached and enables merchants to clear that cache type using the Cache Management page in the Magento Admin.

The tag *scope* provides a mechanism for a cache type.

To create a new cache type:

<script src="https://gist.github.com/xcomSteveJohnson/574ff5d582c92f8f6acf.js"></script>

You must specify the following parameters:

*	`Namespace_Module` defines the name of a module that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*	`%cache_type_id%` defines unique identifier of a cache type.
*	`%cache_type_tag%` defines unique tag to be used in the cache type scoping.

<h2 id="m2devgde-cache-more">More information about caching</h2>
You can get more information about caching by looking at the code. We suggest you locate classes that extend <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php" target="_blank">Magento\Framework\Cache\Frontend\Decorator\TagScope</a>.

For example, look at <a href="{{ site.mage2000url }}app/code/Magento/Eav/Model/Cache/Type.php" target="_blank">Magento\Eav\Model\Cache\Type</a> to understand more about the EAV cache type.

<div class="bs-callout bs-callout-info" id="info">
  <p>Please help us improve this topic by suggesting details using the <strong>Edit this page in GitHub</strong> link at the top of the page. </p>
</div>


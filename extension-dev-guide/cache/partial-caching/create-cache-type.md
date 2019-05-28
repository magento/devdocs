---
group: php-developer-guide
subgroup: 08_Partial caching
title: Create a cache type
menu_title: Create a cache type
menu_order: 10
menu_node:
redirect_from:
  - /guides/v2.0/config-guide/cache/caching-cache-type.html
---

A *cache type* enables you to specify what is cached and enables merchants to clear that {% glossarytooltip 65f9a5a1-79ee-4f27-aac7-29abe24db40d %}cache type{% endglossarytooltip %} using the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}Cache{% endglossarytooltip %} Management page in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.

The tag *scope* provides a mechanism for a cache type.

To create a new cache type:

{% highlight php startinline %}
class %Namespace%\%Module%\Model\Cache\Type extends \Magento\Framework\Cache\Frontend\Decorator\TagScope
{
  const TYPE_IDENTIFIER = '%cache_type_id%';
  const CACHE_TAG = '%CACHE_TYPE_TAG%';
  
  public function __construct(\Magento\Framework\App\Cache\Type\FrontendPool $cacheFrontendPool)
  {
    parent::__construct($cacheFrontendPool->get(self::TYPE_IDENTIFIER), self::CACHE_TAG);
  }
}
{% endhighlight %}

You must specify the following parameters:

*	`Namespace\Module` defines the name of a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} that uses a cache type. A module can use several cache types and a cache type can be used in several modules.
*	`%cache_type_id%` defines unique identifier of a cache type.
*	`%CACHE_TYPE_TAG%` defines unique tag to be used in the cache type scoping.

## More information about caching

You can get more information about caching by looking at the code.
We suggest you locate classes that extend [Magento\Framework\Cache\Frontend\Decorator\TagScope][tagscope].

For example, look at [Magento\Eav\Model\Cache\Type][type] to understand more about the EAV cache type.

{: .bs-callout .bs-callout-info }
Please help us improve this topic by suggesting details using the **Edit this page in GitHub** link at the top of the page.

[tagscope]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Frontend/Decorator/TagScope.php
[type]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Eav/Model/Cache/Type.php

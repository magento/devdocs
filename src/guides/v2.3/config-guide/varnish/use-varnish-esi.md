---
group: configuration-guide
title: Varnish ESI Block
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
---

Edge Side Includes (ESI) are special directives to include web pages in other web pages.

An example:

```html
<div>
  <esi:include src="http://domain.com/index.php/page_cache/block/esi/blocks"/>
</div>
```

Varnish will fetch content from `http://domain.com/index.php/page_cache/block/esi/blocks` and put it in place of `esi` tag.

## Magento 2 and Varnish ESI

An ESI tag is created when several conditions are met:

*  The caching application is set to `Varnish Cache`
*  A XML layout `block` element is added with a `ttl` attribute

### Example

`cms_index_index.xml`:

```xml
  <referenceContainer name="content">
      <block class="Magento\Framework\View\Element\Template" template="Magento_Paypal::esi.phtml" ttl="30"/>
   </referenceContainer>
```

In the example above, content from `esi.phtml` is added to a homepage and is automatically updated by Varnish every 30 seconds.

## Limitations

Currently, Varnish does not support ESI over https so it automatically switches to http.

`Magento\PageCache\Observer\ProcessLayoutRenderElement`:

```php
    private function _wrapEsi(
        \Magento\Framework\View\Element\AbstractBlock $block,
        \Magento\Framework\View\Layout $layout
    ) {
    ....
        // Varnish does not support ESI over HTTPS must change to HTTP
        $url = substr($url, 0, 5) === 'https' ? 'http' . substr($url, 5) : $url;
        return sprintf('<esi:include src="%s" />', $url);
    }
```

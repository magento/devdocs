---
group: graphql
title: Create a custom GraphQL urlResolver service
---

The `Magento\UrlRewrite` module converts URL rewrite requests to canonical URLs. As a result, your custom `urlResolver` module does not require its own class for performing these actions, but it must be able to save and delete entries in the `url_rewrite` table.

## Create observers

You can use the `Magento\CmsUrlRewrite\Observer\ProcessUrlRewriteSavingObserver` class as the basis for saving URL rewrites. For deleting entries, create a `ProcessUrlRewriteDeleteObserver` class similar to the following:

```php
/**
 * Generate urls for UrlRewrite and save it in storage
 *
 * @param \Magento\Framework\Event\Observer $observer
 * @return void
 */
public function execute(EventObserver $observer)
{
    /** @var \Magento\MyModule\Model\Page $myEntityPage  */
    $page = $observer->getEvent()->getObject();

    if ($page->isDeleted()) {
        $this->urlPersist->deleteByData(
            [
                UrlRewrite::ENTITY_ID => $page->getId(),
                UrlRewrite::ENTITY_TYPE => MyEntityPageUrlRewriteGenerator::ENTITY_TYPE,
            ]
        );
    }
}
```
See [Events and observers]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html) for more information about creating an observer.

## Configure the custom module

Update the `graphql.xml` and `events.xml` file in your module's `etc` directory to configure your custom GraphQL `urlResolver` service:

*  Add lines similar to the following in your module's `graphql.xml` file to define the enumeration. The `UrlRewriteGraphQl` module defines `UrlRewriteEntityTypeEnum`.

 ```xml
  <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_GraphQl:etc/graphql.xsd">
    <type xsi:type="Enum" name="UrlRewriteEntityTypeEnum">
      <item name="my_entity">MY_ENTITY</item>
    </type>
  </config>
 ```

*  Define two events similar to the following in your module's `events.xml` file.

 ```xml
  <event name="mymodule_page_save_after">
    <observer name="process_url_rewrite_saving" instance="Magento\MyModuleRewrite\Observer\ProcessUrlRewriteSavingObserver" />
  </event>
  <event name="mymodule_page_delete_after">
    <observer name="process_url_rewrite_delete" instance="Magento\MyModuleRewrite\Observer\ProcessUrlRewriteDeleteObserver" />
  </event>
 ```

## Related Topics

*  [Events and observers]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html)
*  [urlResolver endpoint]({{ page.baseurl }}/graphql/queries/url-resolver.html)

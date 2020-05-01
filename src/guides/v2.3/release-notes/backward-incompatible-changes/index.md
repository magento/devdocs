---
group: release-notes
title: Magento 2.3 backward incompatible changes
---

This page highlights backward incompatible changes between releases that have a major impact and require detailed explanation and special instructions to ensure third-party modules continue working with Magento. High-level reference information for all backward incompatible changes in each release are documented in the [Backward incompatible changes reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html) topic.

## API changes

### StoreManager instead of StoreResolver

`\Magento\Store\Api\StoreResolverInterface` has been deprecated in favor of the `\Magento\Store\Model\StoreManagerInterface`.

When resolving for a store frontend, use `\Magento\Store\Model\StoreManagerInterface::getStore`.

The following example shows the diff in `Magento\Catalog\Model\ResourceModel\Product\StatusBaseSelectProcessor` class after replacing the deprecated method.

```diff
...
     /**
-     * @var StoreResolverInterface
+     * @var StoreManagerInterface
     */
-    private $storeResolver;
+    private $storeManager;
     /**
     * @param Config $eavConfig
     * @param MetadataPool $metadataPool
-    * @param StoreResolverInterface $storeResolver
+    * @param StoreManagerInterface $storeManager
     *
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function __construct(
        Config $eavConfig,
        MetadataPool $metadataPool,
-       StoreResolverInterface $storeResolver
+       StoreManagerInterface $storeManager = null
    ) {
        $this->eavConfig = $eavConfig;
        $this->metadataPool = $metadataPool;
-        $this->storeResolver = $storeResolver;
+        $this->storeManager = $storeManager ?: \Magento\Framework\App\ObjectManager::getInstance()
+            ->get(StoreManagerInterface::class);

...

            . ' AND status_attr.attribute_id = ' . (int)$statusAttribute->getAttributeId()
-           . ' AND status_attr.store_id = ' . $this->storeResolver->getCurrentStoreId(),
+           . ' AND status_attr.store_id = ' . $this->storeManager->getStore()->getId(),
            []
        );
...
```
## Customer data section invalidation

Magento 2.3.4 introduced a change in the customer data sections invalidation logic.

### Issue

With the release of Magento 2.3.4, you can no longer invalidate custom customer sections in `etc/frontend/sections.xml` by declaring an action node without specifying any related sections.

Here’s an example of a typical usage. This usage is no longer compatible with deployments running Magento 2.3.4:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Customer:etc/sections.xsd">
    <action name="customer/account/logout"/>
</config>
```

Deployments that use custom customer sections with this type of action invalidation may face an issue when private content isn’t entered correctly. As a result, problems may occur in the storefront checkout and cart workflows.

### Workaround

For all actions where it is required to invalidate custom customer sections, use either `*` as the section name or use empty actions and ensure that they will not be overridden by any other rules.

Example:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Customer:etc/sections.xsd">
    <action name="customer/account/editPost">
        <section name="*"/>
    </action>
</config>
```

See [Private content]({{page.baseurl}}/extension-dev-guide/cache/page-caching/private-content.html) for information on how to invalidate private content.

## Application framework libraries

### Zend Framework

With the release of Magento 2.3 we are releasing a new version of Zend Framework 1.

**Affected libraries**: `Zend Framework 1`

**Affected modules**:

-  `Zend_Application`
-  `Zend_Barcode`
-  `Zend_Captcha`
-  `Zend_Cloud`
-  `Zend_CodeGenerator`
-  `Zend_Controller`
-  `Zend_Debug`
-  `Zend_Dojo`
-  `Zend_Dom`
-  `Zend_EventManager`
-  `Zend_Feed`
-  `Zend_Form`
-  `Zend_Gdata`
-  `Zend_Layout`
-  `Zend_Markup`
-  `Zend_Mobile`
-  `Zend_Navigation`
-  `Zend_Paginator`
-  `Zend_Queue`
-  `Zend_Reflection`
-  `Zend_Rest`
-  `Zend_Search`
-  `Zend_Stdlib`
-  `Zend_Tag`
-  `Zend_Test`
-  `Zend_Tool`
-  `Zend_XmlRpc`
-  `Zend_Amf`
-  `Zend_Auth`
-  `Zend_Ldap`
-  `Zend_OpenId`
-  `Zend_Serializer`
-  `Zend_Version`
-  `Zend_View`
-  `Zend_Wildfire`

**Affected classes**:

-  `Zend_Db_Profiler_Firebug`
-  `Zend_Log_Formatter_Firebug`
-  `Zend_Log_Writer_Firebug`
-  `Zend_Log_Writer_Mail`
-  `Zend_Validate_Ldap_Dn`

**Action**: Affected modules and classes were removed.

**Reason**: They are no longer used in Magento or Marketplace extensions, are expensive and time-intensive to maintain, and can cause potential security risks if not maintained properly.

**Details**:

-  If the functionality previously facilitated by these removed Zend Framework modules and classes is necessary, use existing functionality or modules to suit your needs:
   -  Verify whether the needed functionality exists natively in the Magento framework.
   -  Verify whether the needed functionality exists in one of the existing bundled Zend Framework v2 or v3 modules.
   -  Look for the needed functionality in existing Symfony components or Zend modules.
-  In place of the now removed `Zend_Serializer` module you can use `Magento\Framework\Serialize\Serializer\Serialize`, which facilitates backward-compatibility.

## Search and related modules

**Affected modules**: `Search`, `CatalogSearch`, `AdvancedSearch`, `Elasticsearch`.

**Affected framework libraries**: `Search`

**Action**: Affected components were updated to use single interface. The interface is `\Magento\Framework\Search\EngineResolverInterface`. Its implementation is `\Magento\Search\Model\EngineResolver`.

**Reason**: To resolve a search engine currently set in System Configuration.

**Details**:

-  The interface provides method `getCurrentSearchEngine()` that returns a string with the current search engine identifier.
-  The implementation introduces a fallback to a default search engine `mysql` if the current search engine (set in the System Configuration) doesn't exist.
-  Classes affected by this modification have backward incompatible changes in their constructor arguments.

Affected {{site.data.var.ce}} classes:

-  `\Magento\CatalogSearch\Model\Indexer\IndexStructureFactory`
-  `\Magento\CatalogSearch\Model\Indexer\IndexSwitcherProxy`
-  `\Magento\CatalogSearch\Model\Indexer\IndexerHandlerFactory`
-  `\Magento\CatalogSearch\Model\ResourceModel\EngineProvider`
-  `\Magento\Search\Controller\Adminhtml\Synonyms\ResultPageBuilder`
-  `\Magento\Search\Model\AdapterFactory`
-  `\Magento\Search\Model\SearchEngine\MenuBuilder`
-  `\Magento\Search\Model\EngineResolver` - added interface
-  `\Magento\Framework\Search\Dynamic\DataProviderFactory`
-  `\Magento\Framework\Search\Dynamic\IntervalFactory`

Affected {{site.data.var.ee}} classes:

-  `\Magento\CatalogSearch\Model\Indexer\IndexStructureFactory`
-  `\Magento\CatalogSearch\Model\Indexer\IndexSwitcherProxy`
-  `\Magento\CatalogSearch\Model\Indexer\IndexerHandlerFactory`
-  `\Magento\CatalogSearch\Model\ResourceModel\EngineProvider`
-  `\Magento\Search\Controller\Adminhtml\Synonyms\ResultPageBuilder`
-  `\Magento\Search\Model\AdapterFactory`
-  `\Magento\Search\Model\SearchEngine\MenuBuilder`
-  `\Magento\Search\Model\EngineResolver` - added interface
-  `\Magento\Framework\Search\Dynamic\DataProviderFactory`
-  `\Magento\Framework\Search\Dynamic\IntervalFactory`
-  `\Magento\AdvancedSearch\Model\Client\ClientResolver`
-  `\Magento\AdvancedSearch\Model\Indexer\Fulltext\Plugin\CustomerGroup`
-  `\Magento\AdvancedSearch\Model\SuggestedQueries`

## WYSIWYG Editor

### Banner module

-  The Banner module now uses a UI Component form and no longer uses the `banner_edit_tab_properties_after_prepare_form` event in `Magento/Banner/Block/Adminhtml/Banner/Edit/Tab/Properties.php`.
-  The `Magento/Banner/Block/Adminhtml/Banner/Edit/Tab/Content.php` class is no longer used.

   The `adminhtml_banner_edit_tab_content_before_prepare_form` that was used in this class is now used in the data provider for the banner form.

### Magento Banner

-  The Banner content type has been renamed to **Dynamic Block**.

### Magento Banner Rotator widget

-  The Banner Rotator widget has been renamed to **Dynamic Blocks Rotator**.

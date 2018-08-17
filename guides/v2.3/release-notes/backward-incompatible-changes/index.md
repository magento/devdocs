---
group: release-notes
title: Magento 2.3 backward incompatible changes
version: 2.3
redirect_from: /guides/v2.3/release-notes/backward-incompatible-changes.html
---

Magento 2.3 introduces several major changes that may affect the correct functionality of already released external modules.
The purpose of this document is to highlight major changes between Magento 2.2 and 2.3.

View a detailed list of PHP code changes that were made in the "2.3-develop" branch after the "2.2.0" release:
- [{{site.data.var.ce}} changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/open-source.html)
- [{{site.data.var.ee}} changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html)

## Application framework libraries

### Zend Framework

With the release of Magento 2.3 we are releasing a new version of Zend Framework 1.

**Affected libraries**: `Zend Framework 1`

**Affected modules**:

* `Zend_Application`
* `Zend_Barcode`
* `Zend_Captcha`
* `Zend_Cloud`
* `Zend_CodeGenerator`
* `Zend_Controller`
* `Zend_Debug`
* `Zend_Dojo`
* `Zend_Dom`
* `Zend_EventManager`
* `Zend_Feed`
* `Zend_Form`
* `Zend_Gdata`
* `Zend_Layout`
* `Zend_Markup`
* `Zend_Mobile`
* `Zend_Navigation`
* `Zend_Paginator`
* `Zend_Queue`
* `Zend_Reflection`
* `Zend_Rest`
* `Zend_Search`
* `Zend_Stdlib`
* `Zend_Tag`
* `Zend_Test`
* `Zend_Tool`
* `Zend_XmlRpc`
* `Zend_Amf`
* `Zend_Auth`
* `Zend_Ldap`
* `Zend_OpenId`
* `Zend_Serializer`
* `Zend_Version`
* `Zend_View`
* `Zend_Wildfire`

**Affected classes**:
* `Zend_Db_Profiler_Firebug`
* `Zend_Log_Formatter_Firebug`
* `Zend_Log_Writer_Firebug`
* `Zend_Log_Writer_Mail`
* `Zend_Validate_Ldap_Dn`

**Action**: Affected modules and classes were removed.

**Reason**: They are no longer used in Magento or Marketplace extensions, are expensive and time-intensive to maintain, and can cause potential security risks if not maintained properly.

**Details**:
* If the functionality previously facilitated by these removed Zend Framework modules and classes is necessary, use existing functionality or modules to suit your needs:
	* Verify whether the needed functionality exists natively in the Magento framework.
	* Verify whether the needed functionality exists in one of the existing bundled Zend Framework v2 or v3 modules.
	* Look for the needed functionality in existing Symfony components or Zend modules.
* In place of the now removed `Zend_Serializer` module you can use `Magento\Framework\Serialize\Serializer\Serialize`, which facilitates backward-compatibility.

## Search and related modules

**Affected modules**: `Search`, `CatalogSearch`, `AdvancedSearch`, `Elasticsearch`.

**Affected framework libraries**: `Search`

**Action**: Affected components were updated to use single interface. The interface is `\Magento\Framework\Search\EngineResolverInterface`. Its implementation is `\Magento\Search\Model\EngineResolver`.

**Reason**: To resolve a search engine currently set in System Configuration.

**Details**:
* The interface provides method `getCurrentSearchEngine()` that returns a string with the current search engine identifier.
* The implementation introduces a fallback to a default search engine `mysql` if the current search engine (set in the System Configuration) doesn't exist.
* Classes affected by this modification have backward incompatible changes in their constructor arguments.

Affected {{site.data.var.ce}} classes:

* `\Magento\CatalogSearch\Model\Indexer\IndexStructureFactory`
* `\Magento\CatalogSearch\Model\Indexer\IndexSwitcherProxy`
* `\Magento\CatalogSearch\Model\Indexer\IndexerHandlerFactory`
* `\Magento\CatalogSearch\Model\ResourceModel\EngineProvider`
* `\Magento\Search\Controller\Adminhtml\Synonyms\ResultPageBuilder`
* `\Magento\Search\Model\AdapterFactory`
* `\Magento\Search\Model\SearchEngine\MenuBuilder`
* `\Magento\Search\Model\EngineResolver` - added interface
* `\Magento\Framework\Search\Dynamic\DataProviderFactory`
* `\Magento\Framework\Search\Dynamic\IntervalFactory`

Affected {{site.data.var.ee}} classes:

* `\Magento\CatalogSearch\Model\Indexer\IndexStructureFactory`
* `\Magento\CatalogSearch\Model\Indexer\IndexSwitcherProxy`
* `\Magento\CatalogSearch\Model\Indexer\IndexerHandlerFactory`
* `\Magento\CatalogSearch\Model\ResourceModel\EngineProvider`
* `\Magento\Search\Controller\Adminhtml\Synonyms\ResultPageBuilder`
* `\Magento\Search\Model\AdapterFactory`
* `\Magento\Search\Model\SearchEngine\MenuBuilder`
* `\Magento\Search\Model\EngineResolver` - added interface
* `\Magento\Framework\Search\Dynamic\DataProviderFactory`
* `\Magento\Framework\Search\Dynamic\IntervalFactory`
* `\Magento\AdvancedSearch\Model\Client\ClientResolver`
* `\Magento\AdvancedSearch\Model\Indexer\Fulltext\Plugin\CustomerGroup`
* `\Magento\AdvancedSearch\Model\SuggestedQueries`

## WYSIWYG Editor

### Banner module

* The Banner module now uses a UI Component form and no longer uses the `banner_edit_tab_properties_after_prepare_form` event in `Magento/Banner/Block/Adminhtml/Banner/Edit/Tab/Properties.php`.
* The `Magento/Banner/Block/Adminhtml/Banner/Edit/Tab/Content.php` class is no longer used.
  The `adminhtml_banner_edit_tab_content_before_prepare_form` that was used in this class is now used in the data provider for the banner form.

### Magento Banner

* The Banner content type has been renamed to **Dynamic Block**.

### Magento Banner Rotator widget

* The Banner Rotator widget has been renamed to **Dynamic Blocks Rotator**.

---
group: release-notes
title: Magento 2.3 backward incompatible changes
version: 2.3
github_link: release-notes/backward-incompatible-changes/index.md
redirect_from: guides/v2.3/release-notes/backward-incompatible-changes.html
---

Magento 2.3 introduces several major changes that may affect the correct functionality of already released external modules.
The purpose of this document is to highlight major changes between Magento 2.2 and 2.3.

View a detailed list of PHP code changes that were made in the "2.3-develop" branch after the "2.2.0" release:
- [{{site.data.var.ce}} changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/open-source.html)
- [{{site.data.var.ee}} changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html)

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
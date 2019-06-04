---
group: php-developer-guide
subgroup: 99_Module Development
title: Service contracts
menu_title: Service contracts
menu_order: 2
functional_areas:
  - Services
---

Magento is a modular system that enables third-party developers to customize and overwrite core parts of its framework. This flexibility, however, comes at a price. Business logic tends to leak across the layers of the Magento system, which manifests as duplicated and inconsistent code.

Merchants might be reluctant to upgrade Magento because customized extensions that they have purchased might not be compatible with new versions of Magento. Also, Magento and third-party developers can find it difficult to track and report the dependencies that customized extensions have on other extensions.

To address these issues, the Magento system introduces _service contracts_.

## What is a service contract? {#what-is-msc}

<p>A [service contract](https://glossary.magento.com/service-contract) is a set of [PHP](https://glossary.magento.com/php) interfaces that are defined for a [module](https://glossary.magento.com/module).
   A service contract includes <a href="{{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html#data-interfaces">data interfaces</a>, which preserve data integrity, and <a href="{{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html#service-interfaces">service interfaces</a>, which hide business logic details from service requestors such as controllers, web services, and other modules.
</p>
<p>If developers define data and service interfaces according to a set of <a href="{{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html">design patterns</a>, the result is a well-defined, durable [API](https://glossary.magento.com/api) that other modules and third-party extensions can implement through Magento models and resource models.
</p>
<p><img src="{{ site.baseurl }}/common/images/msc.jpg"/></p>

## Service contract benefits {#msc-benefits}

<p>Service contracts enhance the modularity of Magento. They enable Magento and third-party developers to report system dependencies through <b>composer.json</b> files and, consequently, guarantee compatibility among Magento versions. This compatibility ensures that merchants can easily upgrade Magento.</p>
<p>These contracts ensure a well-defined, durable API that other modules and third-party extensions can implement. Also, these contracts make it easy to <a href="{{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html">configure services as web APIs</a>.
</p>
<p>Data entities are a side benefit of service contracts.
   The database tables that normally support these entities can be complicated.
   For example, some attributes might be stored in an EAV table, so a set of MySQL database tables might define a single data [entity](https://glossary.magento.com/entity).
   Data entities in a service contract reveal a simpler data model than the data model in an underlying relational [database schema](https://glossary.magento.com/database-schema).
   Eventually, you will be able to use different storage technologies for different data collections. For example, you could use a NoSQL database to replace product tables.
</p>

## Using the @api tag

Backward compatibility can be indicated by the use of `@api`. For more information, see [Backward compatibility]({{ page.baseurl }}/contributor-guide/backward-compatible-development/).

### Related topics {#related-topics}

- [Service contract designpatterns]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html)
- [Configure services as webAPIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)

---
group: extension-dev-guide
subgroup: 99_Module Development
title: Service contracts
menu_title: Service contracts
menu_order: 2
redirect_from: /guides/v1.0/extension-dev-guide/service-contracts/service-contracts.html
functional_areas:
  - Services
---

Magento is a modular system that enables third-party developers to customize and overwrite core parts of its framework. This flexibility, however, comes at a price. Business logic tends to leak across the layers of the Magento system, which manifests as duplicated and inconsistent code.

Merchants might be reluctant to upgrade Magento because customized extensions that they have purchased might not be compatible with new versions of Magento. Also, Magento and third-party developers can find it difficult to track and report the dependencies that customized extensions have on other extensions.

To address these issues, the Magento system introduces _service contracts_.

## What is a service contract? {#what-is-msc}

A {% glossarytooltip cdf644c4-bc99-4550-a954-dd5ae165785a %}service contract{% endglossarytooltip %} is a set of {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} interfaces that are defined for a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.
A service contract includes [datainterfaces]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html#data-interfaces),which preserve data integrity, and [serviceinterfaces]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html#service-interfaces), which hide business logic details from service requestors such as controllers, web services, and other modules.

If developers define data and service interfaces according to a set of [designpatterns]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html), the result is a well-defined, durable {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} that other modules and third-party extensions can implement through Magento models and resource models.

![Service contracts]({{ site.baseurl }}/common/images/msc.jpg)

## Service contract benefits {#msc-benefits}

Service contracts enhance the modularity of Magento. They enable Magento and third-party developers to report system dependencies through **composer.json** files and, consequently, guarantee compatibility among Magento versions. This compatibility ensures that merchants can easily upgrade Magento.

These contracts ensure a well-defined, durable API that other modules and third-party extensions can implement. Also, these contracts make it easy to [configure services as webAPIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html).

Data entities are a side benefit of service contracts. The database tables that normally support these entities can be complicated. For example, some attributes might be stored in an EAV table, so a set of MySQL database tables might define a single data {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %}. Data entities in a service contract reveal a simpler data model than the data model in an underlying relational {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %}. Eventually, you will be able to use different storage technologies for different data collections. For example, you could use a NoSQL database to replace product tables.

## Using the @api tag

Backward compatibility can be indicated by the use of `@api`. For more information, see [Backward compatibility]({{ page.baseurl }}/extension-dev-guide/backward-compatibility.html).

### Related topics {#related-topics}

- [Service contract design patterns]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html)
- [Configure services as webAPIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)

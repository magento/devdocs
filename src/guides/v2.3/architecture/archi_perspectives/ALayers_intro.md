---
group: architecture-guide
title: Architectural layers overview
menu_title: Architectural layers
---

## Magento as layered software

At its highest level, Magento's product architecture consists of the core product code plus optional *modules*. These optional modules enhance or replace the basic product code.

If you are substantially customizing the basic Magento product, [module](https://glossary.magento.com/module) development will be your central focus. Modules organize code that supports a particular task or feature. A module can include code to change the look-and-feel of your [storefront](https://glossary.magento.com/storefront) as well as its fundamental behavior.

Your modules function with the core Magento product code, which is organized into layers. Understanding layered software pattern is essential for understanding basic Magento product organization.

Layered software is a popular, widely discussed principle in software development. Many resources exist for this topic, but consider consulting Pattern-Oriented Software Architecture for a general discussion.

## Advantages of layered application design

Layered application design offers many advantages, but users of Magento will appreciate:

*  Stringent separation of business logic from presentation logic simplifies the customization process. For example, you can alter your storefront appearance without affecting any of the [backend](https://glossary.magento.com/backend) business logic.

*  Clear organization of code predictably points [extension](https://glossary.magento.com/extension) developers to code location.

{:.ref-header}
Related topics

[Architectural diagrams]({{page.baseurl}}/architecture/archi_perspectives/arch_diagrams.html)

[Presentation layer]({{page.baseurl}}/architecture/archi_perspectives/present_layer.html)

[Service layer]({{page.baseurl}}/architecture/archi_perspectives/service_layer.html)

[Domain layer]({{page.baseurl}}/architecture/archi_perspectives/domain_layer.html)

[Persistence layer]({{page.baseurl}}/architecture/archi_perspectives/persist_layer.html)

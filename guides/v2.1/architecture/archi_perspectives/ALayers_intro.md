---
group: arch-guide
title: Architectural layers overview
menu_title: Architectural layers
redirect_from: /guides/v1.0/architecture/archi_perspectives/ALayers_intro.html
---

## Magento as layered software

At its highest level, Magento's product architecture consists of the core product code plus optional *modules*. These optional modules enhance or replace the basic product code.

If you are substantially customizing the basic Magento product, {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} development will be your central focus. Modules organize code that supports a particular task or feature. A module can include code to change the look-and-feel of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} as well as its fundamental behavior.

Your modules function with the core Magento product code, which is organized into layers. Understanding layered software pattern is essential for understanding basic Magento product organization.

Layered software is a popular, widely discussed principle in software development. Many resources exist for this topic, but consider consulting Pattern-Oriented Software Architecture for a general discussion.

## Advantages of layered application design

Layered application design offers many advantages, but users of Magento will appreciate:

* Stringent separation of business logic from presentation logic simplifies the customization process. For example, you can alter your storefront appearance without affecting any of the {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} business logic.

* Clear organization of code predictably points {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers to code location.

## Related topics

[Architectural diagrams]({{page.baseurl}}/architecture/archi_perspectives/arch_diagrams.html)

[Presentation layer]({{page.baseurl}}/architecture/archi_perspectives/present_layer.html)

[Service layer]({{page.baseurl}}/architecture/archi_perspectives/service_layer.html)

[Domain layer]({{page.baseurl}}/architecture/archi_perspectives/domain_layer.html)

[Persistence layer]({{page.baseurl}}/architecture/archi_perspectives/persist_layer.html)

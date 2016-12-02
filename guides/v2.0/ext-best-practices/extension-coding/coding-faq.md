---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Coding FAQ
menu_title: Coding FAQ
menu_order: 1000
version: 2.0
github_link: ext-best-practices/extension-coding/coding-faq.md
---

This page is a compilation of frequently asked coding questions by the Magento Community.

### What do I need to know to work with the framework?

* [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)){:target="_blank"} - The essential principles needed to create maintainable and extendible code.
* [PHP](http://php.net/){:target="_blank"} - This is the programming language used for developing Magento 2 code.
* [HTML](https://en.wikipedia.org/wiki/HTML){:target="_blank"}, [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets){:target="_blank"}, and [JavaScript](https://www.javascript.com/){:target="_blank"} - Languages used for [frontend development]({{page.baseurl}}frontend-dev-guide/bk-frontend-dev-guide.html).
* [Magento architecture]({{page.baseurl}}architecture/arch_whatis.html) - Developers should be familiar with the architectural concepts used in Magento such as the [Model-View-Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller){:target="_blank"} pattern and the [Command Query Responsibility Segregation](http://martinfowler.com/bliki/CQRS.html){:target="_blank"} principle.
* [Dependency Injection]({{page.baseurl}}extension-dev-guide/depend-inj.html) - An important design pattern used in Magento to handle dependencies across classes and modules.


### In Magento 2, how can my extension distinguish between the Community Edition and the Enterprise Edition?

The correct edition can be obtained through `\Magento\Framework\App\ProductMetadataInterface::getEdition`.

In Magento CE that interface maps to the concrete implementation `Magento\Framework\AppInterface\ProductMetadata`.
However, in Magento EE, the Enterprise module will override that mapping and the interface will be implemented by `\Magento\Enterprise\Model\ProductMetadata`.

Just relying on the interface through dependency injection will get you the right class, and calling "getEdition" will return the right answer.

### How do I configure my module so that it appears in a specific place on the Admin?

Use the `<Module Directory>/etc/adminhtml/menu.xml` file to configure from where on the Admin your extension is accessible.

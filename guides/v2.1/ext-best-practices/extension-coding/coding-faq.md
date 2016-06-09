---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Coding FAQ
menu_title: Coding FAQ
menu_order: 1000
version: 2.1
github_link21: ext-best-practices/extension-coding/coding-faq.md
---
##{{page.menu_title}}
{:.no_toc}

This page is a compilation of frequently asked coding questions by the Magento Community.

### Frequently Asked Questions
{:.no_toc}
* Table of Content
{:toc}

____


#### In Magento 2, how can my extension distinguish between the Community Edition and the Enterprise Edition?

The correct edition can be obtained through `\Magento\Framework\App\ProductMetadataInterface::getEdition`.

In Magento CE that interface maps to the concrete implementation `Magento\Framework\AppInterface\ProductMetadata`.
However, in Magento EE, the Enterprise module will override that mapping and the interface will be implemented by `\Magento\Enterprise\Model\ProductMetadata`.

Just relying on the interface through dependency injection will get you the right class, and calling "getEdition" will return the right answer.

____

#### How do I configure my module so that it appears in a specific place on the Admin?

Use the `<Module Directory>/etc/adminhtml/menu.xml` file to configure from where on the Admin your extension is accessible.

---
group: functional-testing-framework-guide
title: Functional Testing Framework Entities
---

Functional Testing Framework entities enable you to create and modify functional tests.
For example, you want to cover with functional tests the process of creation the [widget](https://glossary.magento.com/widget) [Catalog](https://glossary.magento.com/catalog) [Category](https://glossary.magento.com/category) Link.
To do this you have to create [injectable test]({{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html).

As widget functionality is not covered with tests, you need to create widget [fixture]({{ page.baseurl }}/mtf/mtf_entities/mtf_fixture.html), that is your object for testing. You will describe the test data that will be applied to the widget object in [repository topic]({{ page.baseurl }}/mtf/mtf_entities/mtf_fixture-repo.html).

You want to automate creating of Catalog Category Link widget, that requires to have a category. As far creating of new category is out of the scope of your testing, you will use [handlers]({{ page.baseurl }}/mtf/mtf_entities/mtf_handler.html) to prepare it.

To understand what blocks and pages you need in the test, you should perform tests manually.
Using [blocks]({{ page.baseurl }}/mtf/mtf_entities/mtf_block.html) and [pages]({{ page.baseurl }}/mtf/mtf_entities/mtf_page.html) entities you can create and define blocks and pages objects for tests.

When you have all building blocks for the test you can determine steps of [injectable test]({{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html).

Any test requires different variations of [data sets]({{ page.baseurl }}/mtf/mtf_entities/mtf_dataset.html) and corresponding [constraints]({{ page.baseurl }}/mtf/mtf_entities/mtf_constraint.html).
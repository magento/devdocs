---
layout: default
group: mftf
title: Best practices
version: 2.2
github_link: magento-functional-testing-framework/release-2/best-practices.md
functional_areas:
 - Testing
---

Check out our best practices below to ensure you're getting the absolute most out of the MFTF.

## Annotations

 - Always use annotations in a test.
 
 - When updating tests, always make corresponding annotation updates.
 
 - Annotation types and recommendations are described as:
    - **Feature** - Report grouping, a set of tests that verify a feature.
    - **Story** - Report grouping, a set of tests that verify a story.
    - **Group** - Module name.
    - **Title** - Describes the purpose of the test.
    - **Description** - Describes how the test achieves the purpose defined in the title.
    - **Severity** - Allowed values are _BLOCKER_, _CRITICAL_, _MAJOR_, _AVERAGE_, and _MINOR_.
 
## Data entities

- When using a `<createData>` action in a `<before>` block, always use a corresponding `<deleteData>` in your `<after>` block.

- Where data values are required to be unique in the database, enforce the uniqueness on the attribute of the data entity. Use `[unique=”suffix”]` or `[unique=”prefix”]` to append or prepend a unique value to the entity attribute. This ensures tests using the entity can be repeated.

- Do not modify existing data entity fields or add/merge additional data fields without fully understanding and verifying all existing data usages. We recommend that you create a new data entity for your test when you are not sure. 

## Page objects

Do not overuse parameterized selectors. 

Parameterized selectors should only be used when test-specific or runtime-generated information is needed to construct a selector. Do not use it for static elements.

For example, do not define a parameterized element like the following:
  ``` xml
  <element name="relatedProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='{{productType}}']" parameterized="true"/>
  ```
  Instead, define these three elements and reference them by name in the tests:
  ``` xml
  <element name="relatedProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='related']"/>
  <element name="upSellProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='upsell']"/>
  <element name="crossSellProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='crosssell']"/>
  ```

## Test step merge orders

When setting merge orders for a test step, do not depend on steps from Magento modules that could be disabled by an application.

For example, when you write a test step to create a gift card product, it's probably better to set your test step **after** simple product creation and let MFTF handle the merge order. This is better than setting the test step **before** creating a configurable product, because the configurable product module could be disabled.

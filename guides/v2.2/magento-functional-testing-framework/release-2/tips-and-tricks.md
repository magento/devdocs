---
layout: default
group: mftf
title: Tips and tricks in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/tips-and-tricks.md
functional_areas:
 - Testing
---

## Best Practices

### Annotations

 - Always use annotations in a test.
 
 - When updating tests, always make corresponding annotation updates.
 
 - Annotation types and recommendations are described as:
 
   **Feature**: report grouping, set of tests which verify a feature.
   
   **Story**: report grouping, set of tests which verify a story.
   
   **Group**: module name.
   
   **Title**: descriptive title of test purpose.
   
   **Description**: describe how test achieves purpose from title.
   
   **Severity**: allowed values are **BLOCKER**, **CRITICAL**, **MAJOR**, **AVERAGE**, **MINOR**.
 
### Data Entities

- When using a <createData> action in a <before> block, always use a corresponding <deleteData> in your <after> block.

- Where data values are required to be unique in the database, enforce the uniqueness on the attribute of the data entity.
  Use [unique=”suffix”] or [unique=”prefix”] to append or prepend unique value to entity attribute. This ensure repeatable running of tests using entity.

- Do not modify existing data entity fields or add/merge additional data fields without fully understanding and verifying all existing data usages. We recommend that you create a new data entity for your test when you are not sure. 

### Page Objects

- Do not overuse parameterized selectors. 

  Parameterized selectors should only be used when test-specific or runtime-generated information is needed in constructing a selector. Do not use it for static elements. For example, do not define a parameterized element like the following:
  ``` xml
  <element name="relatedProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='{{productType}}']" parameterized="true"/>
  ```
  Instead, define these 3 elements and reference them by name in the tests.
  ``` xml
  <element name="relatedProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='related']"/>
  <element name="upSellProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='upsell']"/>
  <element name="crossSellProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='crosssell']"/>
  ```

### Test Steps Merge Orders

- When setting merge orders for a test step, try not to depend on steps from Magento modules that could be disabled by an application.

  For example, when you write a test step to create a gift card product, it's probably better to set your test step **after** simple product creation and let MFTF handle the merge order. This is better than setting the test step **before** creating a configurable product, because the configurable product module could be disabled.

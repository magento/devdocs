---
mftf-release: 2.2.0
redirect_from: /guides/v2.2/magento-functional-testing-framework/2.2/best-practices.html
---

# Best practices

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Check out our best practices below to ensure you're getting the absolute most out of the Magento Functional Testing Framework.

## Action group

1. [Action group] names should be sufficiently descriptive to inform a test writer of what the action group does and when it should be used.
 Add additional explanation in comments if needed. 
2. Provide default values for the arguments that apply to your most common case scenarios.

## Annotation

1. Use [annotations] in a test. 
2. Update your annotations correspondingly when updating tests.

## Data entity

1. Keep your testing instance clean.
 Remove data after the test if the test required creating any data.
 Use a corresponding [`<deleteData>`] test step in your [`<after>`] block when using a [`<createData>`] action in a [`<before>`] block.
2. Make specific data entries under test to be unique.
 Enable data uniqueness where data values are required to be unique in a database by test design. 
 Use `unique=”suffix”` or `unique=”prefix”` to append or prepend a unique value to the [entity] attribute.
 This ensures that tests using the entity can be repeated.
3. Do not modify existing data entity fields or merge additional data fields without complete understanding and verifying the usage of existing data in tests.
 Create a new data entity for your test if you are not sure.
 
## Naming conventions
 
### File names
 
Name files according to the following patterns to make searching in future more easy:

#### Test file name

Format: {_Admin_ or _Storefront_}{Functionality}_Test.xml_, where Functionality briefly describes the testing functionality.

Example: _StorefrontCreateCustomerTest.xml_.
 
#### Section file name
 
Format: {_Admin_ or _Storefront_}{UI Description}_Section.xml_, where UI Description briefly describes the testing UI.
 
Example: _AdminNavbarSection.xml_.
 
#### Data file name
 
Format: {Type}_Data.xml_, where Type represents the entity type.
 
Example: _ProductData.xml_.
 
### Object names
 
Use the _Foo.camelCase_ naming convention, which is similar to _Classes_ and _classProperties_ in PHP.
 
#### Upper case
 
Use an upper case first letter for:
 - File names. Example: _StorefrontCreateCustomerTest.xml_
 - Test name attributes. Example: `<test name="TestAllTheThingsTest">`.
 - Data entity names. Example: `<entity name="OutOfStockProduct">`.
 - Page name. Example: `<page name="AdminLoginPage">`.
 - Section name. Example: `<section name="AdminCategorySidebarActionSection">`.
 - Action group name. Example: `<actionGroup name="LoginToAdminActionGroup">`.
 
#### Lower case
 
Use a lower case first letter for:
 - Data keys. Example: `<data key="firstName">`.
 - Element names. Examples: `<element name="confirmDeleteButton"/>`.
 
## Page object

Use [parameterized selectors] for constructing a selector when test specific or runtime generated information is needed.
Do not use them for static elements.

{:style="color:red"}
BAD:
``` xml
<element name="relatedProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='{{productType}}']" parameterized="true"/>
```

{:style="color:green"}
GOOD:

Define these three elements and reference them by name in the tests.
``` xml
<element name="relatedProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='related']"/>
<element name="upSellProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='upsell']"/>
<element name="crossSellProductSectionText" type="text" selector=".fieldset-wrapper.admin__fieldset-section[data-index='crosssell']"/>
```

## Test

1. Use actions such as [`<waitForElementVisible>`], [`<waitForLoadingMaskToDisappear>`], and [`<waitForElement>`] to wait the exact time required for the test step.
 Try to avoid using the [`<wait>`] action, because it forces the test to wait for the time you specify. You may not need to wait so long to proceed.
2. Keep your tests short and granular for target testing, easier reviews, and easier merge conflict resolution.
 It also helps you to identify the cause of test failure.
3. Use comments to keep tests readable and maintainable:
  * Keep the inline `<!-- XML comments -->` and [`<comment>`] tags up to date.
  It helps to inform the reader of what you are testing and to yield a more descriptive Allure report.
  * Explain in comments unclear or tricky test steps.
4. Refer to [sections] instead of writing selectors.

## Test step merging order

When setting a [merging] order for a test step, do not depend on steps from Magento modules that could be disabled by an application.

For example, when you write a test step to create a gift card product, set your test step **after** simple product creation and let the MFTF handle the merge order.
Since the configurable product module could be disabled, this approach is more reliable than setting the test step **before** creating a configurable product.

<!-- Link definitions -->

[Action group]: test/action-groups.html
[`<after>`]: test/actions.html#before-and-after
[annotations]: test/annotations.html
[`<before>`]: test/actions.html#before-and-after
[`<comment>`]: test/actions.html#comment
[`<createData>`]: test/actions.html#createdata
[`<deleteData>`]: test/actions.html#deletedata
[entity]: data.html
[merging]: merging.html
[parameterized selectors]: section/parameterized-selectors.html
[sections]: section.html
[`<wait>`]: test/actions.html#wait
[`<waitForElement>`]: test/actions.html#waitforelement
[`<waitForElementVisible>`]: test/actions.html#waitforelementvisible
[`<waitForLoadingMaskToDisappear>`]: test/actions.html#waitforloadingmasktodisappear
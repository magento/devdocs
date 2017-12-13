---
layout: default
group: mftf
title: Actions in the Magento Functional Testing Framework cests
version: 2.2
github_link: magento-functional-testing-framework/cest/actions.md
functional_areas:
 - Testing
---

This topic contains a reference list of available action type tags available in the MFTF cests.

## Overview

Actions in the MFTF allow you to automate different scenarios of Magento user's actions.
They are mostly XML implementations of [Codeception actions](http://codeception.com/docs/modules/WebDriver#Actions).
Some actions drive browser elements, while others use REST APIs.

All actions contain the following attributes that are useful for merging needs:

* `stepKey` is a required attribute that stores a unique identifier of the action. Example: `"conditionalClickStep1"`.
* `remove` is an optional attribute that removes the action when merging same test in different modules
* `before` is an optional attribute that Set `stepKey` of an action that must be executed one step before the current one.
* `after` is an optional attribute that Set `stepKey` of an action that must be executed next.

## Principles

`stepKey` value format principles:

* Must be unique within [`<test>`](../cest.html#test)
* Naming should be as descriptive as possible
  * Should describe the action performed
  * Should briefly describe the purpose
  * May describe which data is in use
* Should be in camelCase with lowercase first letter
* Should be the last attribute of an element

## Example
{%raw%}
The following example contains four actions:

1. [Open the Sign In page for a Customer](#example-step1)
2. [Enter customer's e-mail](#example-step2)
3. [Enter customer's password](#example-step3)
4. [Click the Sign In button](#example-step4)

```xml
<amOnPage stepKey="amOnSignInPage"  url="{{StorefrontCustomerSignInPage}}"/>
<fillField  stepKey="fillEmail" userInput="$$customer.email$$" selector="{{StorefrontCustomerSignInFormSection.emailField}}"/>
<fillField  stepKey="fillPassword" userInput="$$customer.password$$" selector="{{StorefrontCustomerSignInFormSection.passwordField}}"/>
<click stepKey="clickSignInAccountButton" selector="{{StorefrontCustomerSignInFormSection.signInAccountButton}}"/>
```

#### 1. Open the Sign In page for a Customer {#example-step1}

```xml
<amOnPage stepKey="amOnSignInPage"  url="{{StorefrontCustomerSignInPage.url}}"/>
```

The Customer Sign In page is declared in the _.../Customer/Page/StorefrontCustomerSignInPage.xml_.
The given relative URI is declared in `StorefrontCustomerSignInPage.url`

The _StorefrontCustomerSignInPage.xml_ source code:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Page/etc/PageObject.xsd">
    <page name="StorefrontCustomerSignInPage" url="/customer/account/login/" module="Magento_Customer">
        <section name="StorefrontCustomerSignInFormSection" />
    </page>
</config>
```

[amOnPage](#amonpage) is an action that opens a page for a given URI. It has a key `"amOnSignInPage"` that will be used as a reference for merging needs in other modules.
This action uses value of the `url` attribute for the given relative URI to open in browser.
Here, `url` contains a pointer to a `url` attribute of the `StorefrontCustomerSignInPage`.

#### 2. Enter customer's e-mail  {#example-step2}

```xml
<fillField  stepKey="fillEmail" userInput="$$customer.email$$" selector="{{StorefrontCustomerSignInFormSection.emailField}}"/>
```

[fillField](#fillfield) fills a text field with the given string.

The customer's e-mail is stored in the `email` parameter of the `customer` entity created somewhere earlier it the test using a tag [createData](#createdata).
`userInput` points to that data.

`selector` points to the field where to enter the data.
A required selector is stored in the `emailField` element of the `StorefrontCustomerSignInFormSection` section.

This section is declared in _.../Customer/Section/StorefrontCustomerSignInFormSection.xml_:
{: #section-code}

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Page/etc/SectionObject.xsd">
    <section name="StorefrontCustomerSignInFormSection">
        <element name="emailField" type="input" selector="#email"/>
        <element name="passwordField" type="input" selector="#pass"/>
        <element name="signInAccountButton" type="button" selector="#send2" timeout="30"/>
    </section>
</config>
```

#### 3. Enter customer's password  {#example-step3}

```xml
<fillField  stepKey="fillPassword" userInput="$$customer.password$$" selector="{{StorefrontCustomerSignInFormSection.passwordField}}"/>
```

The action here is very similar to the action in a previous step.
The only difference is that different data assigned to the attributes which set a field with password.


#### 4. Click the Sign In button {#example-step4}

```xml
<click stepKey="clickSignInAccountButton" selector="{{StorefrontCustomerSignInFormSection.signInAccountButton}}"/>
```

Here, [click](#click) performs a click on a button that can be found by selector that is stored in the `signInAccountButton` of the `StorefrontCustomerSignInFormSection`.
See the _StorefrontCustomerSignInPage.xml_ code in [step 2](#section-code)
{%endraw%}
## Available actions

The following list contains reference documentation about all action elements available in the MFTF.
If description of an element does not includes a link to Codeception analogue, it means that the action is developed by Magento for specific MFTF needs.

### acceptPopup

[See acceptPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#acceptPopup){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### amOnPage

[See amOnPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnPage){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### amOnSubdomain

[See amOnSubdomain docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnSubdomain){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### amOnUrl

[See amOnUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnUrl){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### appendField

[See appendField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#appendField){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### attachFile

[See attachFile docs on codeception.com](http://codeception.com/docs/modules/WebDriver#attachFile){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### cancelPopup

[See cancelPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#cancelPopup){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### checkOption

[See checkOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#checkOption){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### click

[See click docs on codeception.com](http://codeception.com/docs/modules/WebDriver#click){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### clickWithLeftButton

[See clickWithLeftButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithLeftButton){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
x|string|optional|
y|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### clickWithRightButton

[See clickWithRightButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithRightButton){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
x|string|optional|
y|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### closeAdminNotification

Remove from the DOM all elements with the CSS classes `.modal-popup` or `.modals-overlay`

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### closeTab

[See closeTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#closeTab){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### conditionalClick

Conditionally click on an element if and only if another element is visible or not.

For example, to click on `#foo` if `#bar` is visible:

```xml
<conditionalClick selector="#foo" dependentSelector="#bar" visible="true" stepKey="click1"/>
```

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
dependentSelector|string|optional|
visible|boolean|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### createData

Create an entity (e.g. a category or product). In other words, make a POST request
to the Magento API according to the data and metadata of the entity to be created.

For example, you can create the entity with the name "SampleProduct":

```xml
<createData entity="SampleProduct" stepKey="createSampleProduct"/>
```

Attribute|Type|Use|Description
---|---|---|---
entity|string|required| 
stepKey|string|required
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.
storeCode|string|optional|

This action can optionally contain one or more `required-entity` child elements.

#### required-entity

Specify relationships amongst data to be created. For example, a complex Product
object may contain within it a pointer (an ID) to a complex Category object.

For example, first we create a category, then we create a product in that category
by indicating the relationship.

```xml
<createData entity="SampleCategory" stepKey="createCategory"/>

<createData entity="SampleProduct" stepKey="createProduct">
    <required-entity createDataKey="createCategory"/>
</createData>
```

Attribute|Type|Use|Description
---|---|---|---
createDataKey|string|required|  
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### deleteData

Delete an entity that was previously created.

It's important to note that this action is only able to delete entities that were
previously created using [createData](#createdata) in the scope of the [Cest](../cest.html#cest-element) or [Test](../cest.html#test).

Assuming we created _SampleCategory_ like:

```xml
<createData entity="SampleCategory" stepKey="createCategory"/>
```

We can delete _SampleCategory_ like:

```
<deleteData createDataKey="createCategory" stepKey="deleteCategory"/>
```

Attribute|Type|Use|Description
---|---|---|---
createDataKey|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.
storeCode|string|optional|

### dontSee

[See the codeception.com documentation for more information about this action.](http://codeception.com/docs/modules/WebDriver#dontSee){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
selector|string|optional|
selectorArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeCheckboxIsChecked

[See dontSeeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCheckboxIsChecked){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeCookie

[See dontSeeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCookie){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeCurrentUrlEquals

[See dontSeeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlEquals){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeCurrentUrlMatches

[See dontSeeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlMatches){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeElement

[See dontSeeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElement){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
parameterArray|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeElementInDOM

[See dontSeeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElementInDOM){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
parameterArray|string|optional|
attributeArray|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeInCurrentUrl

[See dontSeeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInCurrentUrl){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeInField

[See dontSeeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInField){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeInFormFields

[See dontSeeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInFormFields){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
parameterArray|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeInPageSource

[See dontSeeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInPageSource){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeInSource

[See dontSeeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInSource){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
html|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeInTitle

[See dontSeeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInTitle){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeJsError

Assert that there are no Javascript errors.

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeLink

[See dontSeeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeLink){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dontSeeOptionIsSelected

[See dontSeeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeOptionIsSelected){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### doubleClick

[See doubleClick docs on codeception.com](http://codeception.com/docs/modules/WebDriver#doubleClick){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### dragAndDrop

[See dragAndDrop docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dragAndDrop){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector1|string|optional|
selector2|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### executeInSelenium

[See executeInSelenium docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeInSelenium){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
function|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### executeJS

[See executeJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeJS){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
function|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### fillField

[See fillField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#fillField){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabAttributeFrom

[See grabAttributeFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabAttributeFrom){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
returnVariable|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabCookie

[See grabCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabCookie){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
parameterArray|string|optional|
returnVariable|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabFromCurrentUrl

[See grabFromCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabFromCurrentUrl){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
returnVariable|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabMultiple

[See grabMultiple docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabMultiple){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
returnVariable|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabPageSource

[See grabPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabPageSource){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
returnVariable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabTextFrom

[See grabTextFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabTextFrom){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
returnVariable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### grabValueFrom

[See grabValueFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabValueFrom){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
returnVariable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### loadSessionSnapshot

[See loadSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#loadSessionSnapshot){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
returnVariable|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### loginAsAdmin

A convenient helper that will go to the Magento admin page, fill in the username and password, click login, and finally
calls [closeAdminNotification](#closeAdminNotification)

Attribute|Type|Use|Description
---|---|---|---
username|string|optional|
password|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### makeScreenshot

[See makeScreenshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#makeScreenshot){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### maximizeWindow

[See maximizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#maximizeWindow){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### moveBack

[See moveBack docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveBack){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### moveForward

[See moveForward docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveForward){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### moveMouseOver

[See moveMouseOver docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveMouseOver){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
x|string|optional|
y|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### mSetLocale

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
locale|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### mResetLocale

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### openNewTab

[See openNewTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#openNewTab){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### parseFloat

Parse float number with thousands seperator.

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### pauseExecution

[See pauseExecution docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pauseExecution){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### performOn

[See performOn docs on codeception.com](http://codeception.com/docs/modules/WebDriver#performOn){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
function|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### pressKey

[See pressKey docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pressKey){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### reloadPage

[See reloadPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#reloadPage){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### resetCookie

[See resetCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resetCookie){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### resizeWindow

[See resizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resizeWindow){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
width|string|optional|
height|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### saveSessionSnapshot

[See saveSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#saveSessionSnapshot){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### scrollTo

[See scrollTo docs on codeception.com](http://codeception.com/docs/modules/WebDriver#scrollTo){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
x|string|optional|
y|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### scrollToTopOfPage

A convenience function that executes `window.scrollTo(0,0)` as JavaScript thus returning to the top of the page.

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### searchAndMultiSelectOption

Search for and select options from a Magento multi-select drop down menu.
For example, the drop down menu you use to assign Products to Categories.

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
parameterArray|string|optional|
requiredAction|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### see

[See see docs on codeception.com](http://codeception.com/docs/modules/WebDriver#see){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
selector|string|optional|
selectorArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeCheckboxIsChecked

[See seeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCheckboxIsChecked){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeCookie

[See seeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCookie){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeCurrentUrlEquals

[See seeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlEquals){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeCurrentUrlMatches

[See seeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlMatches){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeElement

[See seeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElement){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
parameterArray|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeElementInDOM

[See seeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElementInDOM){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
parameterArray|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInCurrentUrl

[See seeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInCurrentUrl){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInField

[See seeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInField){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
selectorArray|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInFormFields

[See seeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInFormFields){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
parameterArray|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInPageSource

[See seeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPageSource){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
html|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInPopup

[See seeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPopup){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInSource

[See seeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInSource){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
html|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeInTitle

[See seeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInTitle){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeLink

[See seeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeLink){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
url|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeNumberOfElements

[See seeNumberOfElements docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeNumberOfElements){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### seeOptionIsSelected

[See seeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeOptionIsSelected){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### selectOption

[See selectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#selectOption){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### setCookie

[See setCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#setCookie){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
parameterArray|string|optional|
value|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### submitForm

[See submitForm docs on codeception.com](http://codeception.com/docs/modules/WebDriver#submitForm){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
parameterArray|string|optional|
button|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### switchToIFrame

[See switchToIFrame docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToIFrame){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### switchToNextTab

[See switchToNextTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToNextTab){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### switchToPreviousTab

[See switchToPreviousTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToPreviousTab){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### switchToWindow

[See switchToWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToWindow){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### typeInPopup

[See typeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#typeInPopup){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### uncheckOption

[See uncheckOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#uncheckOption){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### unselectOption

[See unselectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#unselectOption){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
userInput|string|optional|
parameterArray|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### wait

[See wait docs on codeception.com](http://codeception.com/docs/modules/WebDriver#wait){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForAjaxLoad

Wait for all AJAX calls to finish.

Attribute|Type|Use|Description
---|---|---|---
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForElementChange

[See waitForElementChange docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementChange){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
function|string|optional|
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForElement

[See waitForElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElement){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForElementNotVisible

[See waitForElementNotVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementNotVisible){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForElementVisible

[See waitForElementVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementVisible){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
selector|string|optional|
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForJS

[See waitForJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForJS){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
function|string|optional|
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForLoadingMaskToDisappear

Wait for all Magento loading overlays to go away.

<div class="bs-callout bs-callout-info" markdown="1">
The CSS class for loading masks is not used consistently throughout Magento. Therefore, this convenience function tries to wait for various specific selectors.
</div>

```config
# Wait for these classes to not be visible

//div[contains(@class, "loading-mask")]
//div[contains(@class, "admin_data-grid-loading-mask")]
//div[contains(@class, "admin__data-grid-loading-mask")]
//div[contains(@class, "admin__form-loading-mask")]
//div[@data-role="spinner"]
```
 

Attribute|Type|Use|Description
---|---|---|---
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForPageLoad

Wait for AJAX, Magento loading overlays, and `document.readyState == "complete"`.

Attribute|Type|Use|Description
---|---|---|---
time|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.

### waitForText

[See waitForText docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForText){:target='_blank'}

Attribute|Type|Use|Description
---|---|---|---
userInput|string|optional|
time|string|optional|
selector|string|optional|
variable|string|optional|
stepKey|string|required|A unique identifier of the action.
remove|boolean|optional| Set to "true" to remove the action during parsing when merging same test in different modules.
before|string|optional| Set `stepKey` of an action that must be executed one step before the current one.
after|string|optional| Set `stepKey` of an action that must be executed next.


<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework

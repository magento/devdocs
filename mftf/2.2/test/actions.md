---
mftf-release: 2.2.0
redirect_from: /guides/v2.2/magento-functional-testing-framework/2.2/actions.html
---

# Test actions

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Actions in the MFTF allow you to automate different scenarios of Magento user's actions.
They are mostly XML implementations of [Codeception actions](http://codeception.com/docs/modules/WebDriver#Actions).
Some actions drive browser elements, while others use REST APIs.

## Common attributes

All `<actions>` contain the following attributes that are useful for merging needs.

### `stepKey`

`stepKey` is a required attribute that stores a unique identifier of the action.

Example test step of the `myAction` action with the `conditionalClickStep1` identifier:

```xml
<myAction stepKey="conditionalClickStep1"/>
```

This step can be referenced within the test using `conditionalClickStep1`.

The value format should met the following principles:

* Must be unique within [`<test>`](../test.html#test-tag).
* Naming should be as descriptive as possible:
  * Describe the action performed.
  * Briefly describe the purpose.
  * Describe which data is in use.
* Should be in camelCase with lowercase first letter.
* Should be the last attribute of an element.

***

### `before` and `after`

`before` and `after` are optional attributes that insert the action into the test while merging. The action will be executed before or after the one set in these attributes. The value here is the `stepKey` of reference action.

Example with `before`:

```xml
<myAction before="fillField" stepKey="conditionalClickStep1"/>
```

`myAction` will be executed before the action, which has `stepKey="fillField"`.

Example with `after`:

```xml
<myAction after="fillField" stepKey="seeResult"/>
```

`myAction` will be executed after the action, which has `stepKey="fillField"`.

## Example

{%raw%}
The following example contains four actions:

1. [Open the Sign In page for a Customer](#example-step1).
2. [Enter a customer's email](#example-step2).
3. [Enter a customer's password](#example-step3).
4. [Click the Sign In button](#example-step4).

    ```xml
    <amOnPage url="{{StorefrontCustomerSignInPage.url}}" stepKey="amOnSignInPage"/>
    <fillField  userInput="$$customer.email$$" selector="{{StorefrontCustomerSignInFormSection.emailField}}" stepKey="fillEmail"/>
    <fillField  userInput="$$customer.password$$" selector="{{StorefrontCustomerSignInFormSection.passwordField}}" stepKey="fillPassword"/>
    <click selector="{{StorefrontCustomerSignInFormSection.signInAccountButton}}" stepKey="clickSignInAccountButton"/>
    ```

### 1. Open the Sign In page for a customer {#example-step1}

```xml
<amOnPage url="{{StorefrontCustomerSignInPage.url}}" stepKey="amOnSignInPage"/>
```

The Customer Sign In page is declared in the `.../Customer/Page/StorefrontCustomerSignInPage.xml` file.
The given relative URI is declared in `StorefrontCustomerSignInPage.url`.

Source code (`StorefrontCustomerSignInPage.xml` ):

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Page/etc/PageObject.xsd">
    <page name="StorefrontCustomerSignInPage" url="/customer/account/login/" module="Magento_Customer">
        <section name="StorefrontCustomerSignInFormSection" />
    </page>
</config>
```

[`<amOnPage>`](#amonpage) is an action that opens a page for a given URI. It has a key `"amOnSignInPage"` that will be used as a reference for merging needs in other modules.
This action uses the `url` attribute value for the given relative URI to open a browser page.
Here, `url` contains a pointer to a `url` attribute of the `StorefrontCustomerSignInPage`.

### 2. Enter a customer's email  {#example-step2}

```xml
<fillField  userInput="$$customer.email$$" selector="{{StorefrontCustomerSignInFormSection.emailField}}" stepKey="fillEmail"/>
```

[`<fillField>`](#fillfield) fills a text field with the given string.

The customer's email is stored in the `email` parameter of the `customer` entity created somewhere earlier in the test using a [`<createData>`](#createdata) tag.
`userInput` points to that data.

`selector` points to the field where you enter the data.
A required selector is stored in the `emailField` element of the `StorefrontCustomerSignInFormSection` section.

This section is declared in `.../Customer/Section/StorefrontCustomerSignInFormSection.xml` file:
{: #section-code}

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Page/etc/SectionObject.xsd">
    <section name="StorefrontCustomerSignInFormSection">
        <element name="emailField" type="input" selector="#email"/>
        <element name="passwordField" type="input" selector="#pass"/>
        <element name="signInAccountButton" type="button" selector="#send2" timeout="30"/>
    </section>
</config>
```

### 3. Enter a customer's password  {#example-step3}

```xml
<fillField  userInput="$$customer.password$$" selector="{{StorefrontCustomerSignInFormSection.passwordField}}" stepKey="fillPassword"/>
```

This `<action>` is very similar to the `<action>` in a previous step.
The only difference is that different data is assigned to the attributes, which set a field with a password.

### 4. Click the Sign In button {#example-step4}

```xml
<click selector="{{StorefrontCustomerSignInFormSection.signInAccountButton}}" stepKey="clickSignInAccountButton"/>
```

Here, [`<click>`](#click) performs a click on a button that can be found by the selector that is stored in the `signInAccountButton` of the `StorefrontCustomerSignInFormSection`.
See the `StorefrontCustomerSignInPage.xml` file code in [step 2](#section-code)
{%endraw%}.

## Actions returning a variable

The following test actions return a variable:

*  [grabAttributeFrom](#grabattributefrom)
*  [grabCookie](#grabcookie)
*  [grabFromCurrentUrl](#grabfromcurrenturl)
*  [grabMultiple](#grabmultiple)
*  [grabPageSource](#grabpagesource)
*  [grabTextFrom](#grabtextfrom)
*  [grabValueFrom](#grabvaluefrom)
*  [executeJS](#executejs)

Learn more in [Using data returned by test actions](../data.html#use-data-returned-by-test-actions).

## Actions handling data entities

The following test actions handle data entities using [metadata](../metadata.html):

* [createData](#createData)
* [deleteData](#deleteData)
* [updateData](#updateData)
* [getData](#getData)

Learn more in [Handling a REST API response](../metadata.html#rest-response).

## Reference

The following list contains reference documentation about all action elements available in the MFTF.
If the description of an element does not include a link to Codeception analogue, it means that the action is developed by Magento for specific MFTF needs.

### acceptPopup

See [acceptPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#acceptPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### amOnPage

See [amOnPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnPage){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required|A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### amOnSubdomain

See [amOnSubdomain docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnSubdomain){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### amOnUrl

See [amOnUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### appendField

See [appendField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#appendField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### attachFile

See [attachFile docs on codeception.com](http://codeception.com/docs/modules/WebDriver#attachFile){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|The selector identifying the corresponding HTML element (`<input type="file">`).
`userInput`|string|optional|The name of attaching file. The file must be placed in the `tests/_data` directory.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### cancelPopup

See [cancelPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#cancelPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### checkOption

See [checkOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#checkOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### clearField

Clears a text input field.
Equivalent to using [`<fillField>`](#fillfield) with an empty string.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|required|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### click

See [click docs on codeception.com](http://codeception.com/docs/modules/WebDriver#click){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### clickWithLeftButton

See [clickWithLeftButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithLeftButton){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`x`|string|optional|
`y`|string|optional|
`stepKey`|string|required|A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### clickWithRightButton

See [clickWithRightButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithRightButton){:target='"_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`x`|string|optional|
`y`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### closeAdminNotification

Remove from the DOM all elements with the CSS classes `.modal-popup` or `.modals-overlay`.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### closeTab

See [closeTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#closeTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### comment

Allows input of a string as a PHP code comment.
This tag is not executed.
It is intended to aid documentation and clarity of tests.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|required| PHP comment that will be written in generated test file.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### conditionalClick

Conditionally click on an element if, and only if, another element is visible or not.

For example, to click on `#foo` if `#bar` is visible:

```xml
<conditionalClick selector="#foo" dependentSelector="#bar" visible="true" stepKey="click1"/>
```

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`dependentSelector`|string|optional|
`visible`|boolean|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### createData

Create an entity (for example, a category or product). In other words, make a `POST` request
to the Magento API according to the data and metadata of the entity to be created.

For example, you can create the entity with the name "SampleProduct":

```xml
<createData entity="SampleProduct" stepKey="createSampleProduct"/>
```

Attribute|Type|Use|Description
---|---|---|---
`entity`|string|required|
`storeCode`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

This action can optionally contain one or more `requiredEntity` child elements.

#### requiredEntity

Specify relationships amongst data to be created. For example, a complex Product
object may contain within it a pointer (an ID) to a complex Category object.

For example, first we create a category, then we create a product in that category
by indicating the relationship.

```xml
<createData entity="SampleCategory" stepKey="createCategory"/>

<createData entity="SampleProduct" stepKey="createProduct">
    <requiredEntity createDataKey="createCategory"/>
</createData>
```

Attribute|Type|Use|Description
---|---|---|---
`createDataKey`|string|required|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### field

Specify a custom field you'd like persisted to Magento (as a part of the entity) which will overwrite any other declaration in static data. This field will only replace at a top level (nested values such as custom attributes or extension attributes will not be replaceable via this annotation).

For example, to overwrite the `name` field in a particular product specify a field element during its creation.

```xml
<createData entity="SampleProduct" stepKey="createProduct">
    <field key="name">myCustomProductName</field>
</createData>
```

Attribute|Type|Use|Description
---|---|---|---
`key`|string|required| Name of the field to be replaced or added.

### deleteData

Delete an entity that was previously created.

Attribute|Type|Use|Description
---|---|---|---
`createDataKey`|string|optional| Reference to `stepKey` of the `createData` action .
`url`|string|optional| REST API route to send a DELETE request.
`storeCode`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example of persisted data deletion

Delete the entity that was previously created using [`createData`](#createdata) in the scope of the [test](../test.html#test-tag).

1. Create _SampleCategory_:

```xml
<createData entity="SampleCategory" stepKey="createCategory"/>
```

2. Delete _SampleCategory_:

```xml
<deleteData createDataKey="createCategory" stepKey="deleteCategory"/>
```

#### Example of existing data deletion

Delete an entity using [REST API]({{ site.gdeurl22 }}rest/bk-rest.html) request to the corresponding route:

```xml
<grabFromCurrentUrl regex="categories/id\/([\d]+)/" stepKey="grabId"/>
<deleteData url="V1/categories/{$grabId}" stepKey="deleteCategory"/>
```

### dontSee

See [the codeception.com documentation for more information about this action](http://codeception.com/docs/modules/WebDriver#dontSee){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`selector`|string|optional|
`selectorArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeCheckboxIsChecked

See [dontSeeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCheckboxIsChecked){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeCookie

See [dontSeeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeCurrentUrlEquals

See [dontSeeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlEquals){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeCurrentUrlMatches

See [dontSeeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlMatches){:target="_blank"}

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeElement

See [dontSeeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeElementInDOM

See [dontSeeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElementInDOM){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`attributeArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeInCurrentUrl

See [dontSeeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInCurrentUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeInField

See [dontSeeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeInFormFields

See [dontSeeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInFormFields){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeInPageSource

See [dontSeeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeInSource

See [dontSeeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeInTitle

See [dontSeeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInTitle){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeJsError

Ensure that there are no JavaScript errors.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeLink

See [dontSeeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeLink){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dontSeeOptionIsSelected

See [dontSeeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeOptionIsSelected){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### doubleClick

See [doubleClick docs on codeception.com](http://codeception.com/docs/modules/WebDriver#doubleClick){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### dragAndDrop

See [dragAndDrop docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dragAndDrop){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector1`|string|optional|A selector for the HTML element to drag.
`selector2`|string|optional|A selector for the HTML element to drop onto.
`x`|int|optional| X offset applied to drag-and-drop destination.
`y`|int|optional| Y offset applied to drag-and-drop destination.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### executeInSelenium

See [executeInSelenium docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeInSelenium){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### executeJS

See [executeJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeJS){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### fillField

See [fillField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#fillField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### formatMoney

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`locale`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### getData

Gets an entity (for example, a category, the Magento API according to the data and metadata of the entity type that is requested.

For example, using `getData` in a test looks like this:

```xml
<getData entity="ProductAttributeOptionGetter" index="1" stepKey="getAttributeOption1Handle">
    <requiredEntity createDataKey="productAttributeHandle"/>
</getData>
```

The `ProductAttributeOptionGetter` entity must be defined in the corresponding [data `*.xml`](../data.html).

Attribute|Type|Use|Description
---|---|---|---
`storeCode`|string|optional|
`index`|integer|optional|
`entity`|string|required|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

This action can optionally contain one or more [requiredEntity](#requiredentity) child elements.

### grabAttributeFrom

See [grabAttributeFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabAttributeFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### grabCookie

See [grabCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### grabFromCurrentUrl

See [grabFromCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabFromCurrentUrl){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### grabMultiple

See [grabMultiple docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabMultiple){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### grabPageSource

See [grabPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### grabTextFrom

See [grabTextFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabTextFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### grabValueFrom

See [grabValueFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabValueFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### loadSessionSnapshot

See [loadSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#loadSessionSnapshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### magentoCLI

Specifies a CLI command to execute in a Magento environment.

Attribute|Type|Use|Description
---|---|---|---
`command`|string |optional| CLI command to be executed in Magento environment.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### makeScreenshot

See [makeScreenshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#makeScreenshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### maximizeWindow

See [maximizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#maximizeWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### moveBack

See [moveBack docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveBack){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### moveForward

See [moveForward docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveForward){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### moveMouseOver

See [moveMouseOver docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveMouseOver){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`x`|string|optional|
`y`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### mSetLocale

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`locale`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### mResetLocale

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### openNewTab

See [openNewTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#openNewTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### parseFloat

Parses float number with thousands separator.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### pauseExecution

See [pauseExecution docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pauseExecution){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### performOn

See [performOn docs on codeception.com](http://codeception.com/docs/modules/WebDriver#performOn){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`function`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### pressKey

See [pressKey docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pressKey){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### reloadPage

See [reloadPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#reloadPage){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### remove

Removes action by its `stepKey`.

Attribute|Type|Use|Description
---|---|---|---
`keyForRemoval`|string|required| Set `stepKey` of the action you want to remove.

### resetCookie

See [resetCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resetCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### resizeWindow

See [resizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resizeWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`width`|string|optional|
`height`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### saveSessionSnapshot

See [saveSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#saveSessionSnapshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### scrollTo

See [scrollTo docs on codeception.com](http://codeception.com/docs/modules/WebDriver#scrollTo){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`x`|string|optional|
`y`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### scrollToTopOfPage

A convenience function that executes `window.scrollTo(0,0)` as JavaScript, thus returning to the top of the page.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### searchAndMultiSelectOption

Search for and select options from a Magento multi-select drop-down menu.
For example, the drop-down menu you use to assign Products to Categories.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|required|The selector of a multi select HTML element (drop-down menu). 
`parameterArray`|array|required| Items to search and select in the selected drop-down menu.
`requiredAction`|boolean|optional|Clicks **Done** after selections if `true`. 
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

Example:

```xml
<searchAndMultiSelectOption selector="#stuff" parameterArray="['Item 1', 'Item 2']" stepKey="searchAndMultiSelect1"/>
```

On this test step the MFTF:
1. Searches for a drop-down HTML element that matches the `#stuff` selector.
2. Opens the drop-down menu.
3. Enters **Item 1** in a search field of the drop-down element.
4. Selects first element from the filtered results.
5. Enters **Item 2** in a search field of the drop-down element.
6. Selects first element from the filtered results.

### see

See [see docs on codeception.com](http://codeception.com/docs/modules/WebDriver#see){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`selector`|string|optional|
`selectorArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeCheckboxIsChecked

See [seeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCheckboxIsChecked){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeCookie

See [seeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeCurrentUrlEquals

See [seeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlEquals){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeCurrentUrlMatches

See [seeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlMatches){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeElement

See [seeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeElementInDOM

See [seeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElementInDOM){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInCurrentUrl

See [seeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInCurrentUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInField

See [seeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInFormFields

See [seeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInFormFields){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInPageSource

See [seeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInPopup

See [seeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInSource

See [seeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeInTitle

See [seeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInTitle){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeLink

See [seeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeLink){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeNumberOfElements

See [seeNumberOfElements docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeNumberOfElements){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### seeOptionIsSelected

See [seeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeOptionIsSelected){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### selectOption

See [selectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#selectOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### selectMultipleOptions

Selects all given options in the given Magento drop-down element.

Example:

```xml
<selectMultipleOptions filterSelector=".filter" optionSelector=".option" stepKey="selectMultipleOpts1">
    <array>['opt1', 'opt2']</array>
</selectMultipleOptions>
```

Attribute|Type|Use|Description
---|---|---|---
`filterSelector`|string|required| The selector for the text filter field.
`optionSelector`|string|required| The selector used to select the corresponding options based on the filter field.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

It contains a child element `<array>` where you specify the options that must be selected using an array format like `['opt1', 'opt2']`.
See the previous example.

### setCookie

See [setCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#setCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`value`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### submitForm

See [submitForm docs on codeception.com](http://codeception.com/docs/modules/WebDriver#submitForm){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`button`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### switchToIFrame

See [switchToIFrame docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToIFrame){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### switchToNextTab

See [switchToNextTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToNextTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### switchToPreviousTab

See [switchToPreviousTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToPreviousTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### switchToWindow

See [switchToWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### typeInPopup

See [typeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#typeInPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### uncheckOption

See [uncheckOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#uncheckOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### unselectOption

See [unselectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#unselectOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.


### updateData

When you create a data entity using `createData`, you may need to update it later in the test.
The `updateData` action allows this.

For example, to change the price of a product:

```xml
<updateData entity="AdjustPriceProduct" createDataKey="productHandle" stepKey="updateProduct"/>
```

Where `AdjustPriceProduct` simply looks like this:

```xml
<entity name="AdjustPriceProduct" type="product">
    <data key="price">321.00</data>
</entity>
```

Only the fields that you want to update are set.

Attribute|Type|Use|Description
---|---|---|---
`storeCode`|string|optional|
`entity`|string|required|
`createDataKey`|string|required|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

This action can optionally contain one or more [requiredEntity](#requiredentity) child elements.

### wait

See [wait docs on codeception.com](http://codeception.com/docs/modules/WebDriver#wait){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForAjaxLoad

Wait for all AJAX calls to finish.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForElementChange

See [waitForElementChange docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementChange){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`function`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForElement

See [waitForElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForElementNotVisible

See [waitForElementNotVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementNotVisible){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForElementVisible

See [waitForElementVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementVisible){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForJS

See [waitForJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForJS){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForLoadingMaskToDisappear

Wait for all Magento loading overlays to disappear.

{: .bs-callout .bs-callout-info }
The CSS class for loading masks is not used consistently throughout Magento. Therefore, this convenience function tries to wait for various specific selectors.

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
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForPageLoad

Wait for AJAX, Magento loading overlays, and `document.readyState == "complete"`.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### waitForText

See [waitForText docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForText){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`time`|string|optional|
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

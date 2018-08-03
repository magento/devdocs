---
group: mftf
title: Test actions
version: 2.2
github_link: magento-functional-testing-framework/release-2/test/actions.md
functional_areas:
 - Testing
mftf-release: 2.2.0
---

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

* Must be unique within [`<test>`](../test.html#test).
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

## Examples

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
        xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/PageObject.xsd">
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
<fillField userInput="$$customer.email$$" selector="{{StorefrontCustomerSignInFormSection.emailField}}" stepKey="fillEmail"/>
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
        xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/SectionObject.xsd">
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

* [createData](#createdata)
* [deleteData](#deletedata)
* [updateData](#updatedata)
* [getData](#getdata)

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

#### Example:

```xml
<acceptPopup stepKey="acceptPopup"/>
```
This action will accept the current popup visible on the page.

### amOnPage

See [amOnPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnPage){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required|A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<amOnPage url="/admin" stepKey="goToLogoutPage"/>
```
This action will open the page `(baseURL)/admin`.

### amOnSubdomain

See [amOnSubdomain docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnSubdomain){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<amOnSubdomain url="data" stepKey="changeSubdomain"/>
<amOnPage url="/" stepKey="goToDataPage"/>
```
If the current base URL was `http://www.magento.com`, these actions would open the page `http://data.magento.com`.

### amOnUrl

See [amOnUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<amOnUrl url="https://www.google.com/" stepKey="amOnUrl"/>
```
This action will take to you the URL `https://www.google.com/`.

### appendField

See [appendField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#appendField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<appendField userInput="Sample Text" selector="input#name" stepKey="appendSuffix"/>
```
This action would append the suffix "Sample Text" to the current value of an input with an id of `name`.

### attachFile

See [attachFile docs on codeception.com](http://codeception.com/docs/modules/WebDriver#attachFile){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|The selector identifying the corresponding HTML element (`<input type="file">`).
`userInput`|string|optional|The name of attaching file. The file must be placed in the `tests/_data` directory.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<attachFile userInput="image.png" selector="input#imgUpload" stepKey="uploadFile"/>
```
This action would upload a file in the `tests/_data` directory with the name of `image.png` to an input with the id of `imgUpload`.

### cancelPopup

See [cancelPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#cancelPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<cancelPopup stepKey="cancelPopup"/>
```
This action will cancel the current popup visible on the page.

### checkOption

See [checkOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#checkOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<checkOption selector="input#checkbox" stepKey="checkCheckbox"/>
```
This action will ensure that the input with the id of `checkbox` is checked, regardless of whether it was already checked or not

### clearField

Clears a text input field.
Equivalent to using [`<fillField>`](#fillfield) with an empty string.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|required|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<appendField selector="input#name" stepKey="clearField"/>
```
This action will clear the field of an input with an id of `name`.

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

#### Example:

```xml
<click selector="button#clickable" stepKey="clickButton"/>
```
This action will click the button with the id of `clickable`.

```xml
<click selectorArray="['link' => 'Login']" stepKey="clickButton2"/>
```
This action will click on a link with the text of "login" using a [strict selector](http://codeception.com/docs/modules/WebDriver#locating-elements){:target="_blank"}.

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

#### Examples:

```xml
<clickWithLeftButton selector="button#clickable" stepKey="clickButton1"/>
```
This action will perform a left button click on the center of an element with the id of `clickable`.

```xml
<clickWithLeftButton x="50" y="50" stepKey="clickButton2"/>
```
This action will perform a left button click that is 50px from the top of the window and 50px from the left of the window.

```xml
<clickWithLeftButton selector="button#clickable" x="50" y="50" stepKey="clickButton3"/>
```
This action will perform a left button click that is 50px from the top and 50px from the left of a button with the id of `clickable`.

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

#### Examples:

```xml
<clickWithRightButton selector="button#clickable" stepKey="clickButton1"/>
```
This action will perform a right button click on the center of an element with the id of `clickable`.

```xml
<clickWithRightButton x="50" y="50" stepKey="clickButton2"/>
```
This action will perform a right button click that is 50px from the top of the window and 50px from the left of the window.

```xml
<clickWithRightButton selector="button#clickable" x="50" y="50" stepKey="clickButton3"/>
```
This action will perform a right button click that is 50px from the top and 50px from the left of a button with the id of `clickable`.

### closeAdminNotification

Remove from the DOM all elements with the CSS classes `.modal-popup` or `.modals-overlay`.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<closeAdminNotification stepKey="closeAdminNotification"/>
```
This action will remove all elements with the CSS classes `.modal-popup` or `.modals-overlay`.

### closeTab

See [closeTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#closeTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<closeTab stepKey="closeTab"/>
```
This action will close the current active tab and switch to the previous active tab.

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

```xml
<amOnPage url="/login" stepKey="goToLoginPage"/>
<comment userInput="I am on the login page" stepKey="loginPageComment"/>
```
This action will leave a comment of "I am on the login page" after the `amOnPage` action in the generated PHP file and will be displayed in test execution.

### conditionalClick

Conditionally click on an element if, and only if, another element is visible or not.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`dependentSelector`|string|optional|
`visible`|boolean|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<conditionalClick selector="#foo" dependentSelector="#bar" visible="true" stepKey="click1"/>
```
This action will click on `#foo` if `#bar` is visible.

### createData

Create an entity (for example, a category or product). In other words, make a `POST` request
to the Magento API according to the data and metadata of the entity to be created.

Attribute|Type|Use|Description
---|---|---|---
`entity`|string|required|
`storeCode`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<createData entity="SampleProduct" stepKey="createSampleProduct"/>
```
This action will create the entity with the name "SampleProduct":

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

#### Examples:

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

Delete an entity using [REST API]({{ page.baseurl }}/rest/bk-rest.html) request to the corresponding route:

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

#### Example:

```xml
<dontSee userInput="Sample title" selector="h2#title" stepKey="dontSeeTitle"/>
```
This action will be true only if there is no h2 element with an id of `title` containing the text "Sample title" on the page.

### dontSeeCheckboxIsChecked

See [dontSeeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCheckboxIsChecked){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeCheckboxIsChecked userInput="Sample title" selector="input#option1" stepKey="checkboxNotChecked"/>
```
This action will be true only if a checkbox element with an id of `option1` is unchecked.

### dontSeeCookie

See [dontSeeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<dontSeeCookie userInput="cookie1" stepKey="cookie1NotPresent"/>
```
This action will be true only if there is no cookie with the given name `cookie1`.

```xml
<dontSeeCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="dontSeeCookieInExampleDomain"/>
```
This action will be true only if there is no cookie with the given name `cookie1` from the domain `www.example.com`.

### dontSeeCurrentUrlEquals

See [dontSeeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlEquals){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeCurrentUrlEquals url="/admin" stepKey="notOnAdminPage"/>
```
This action will be true only if active window is not currently on the URL `(baseURL)/admin`.

### dontSeeCurrentUrlMatches

See [dontSeeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlMatches){:target="_blank"}

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeCurrentUrlMatches regex="~$/users/(\d+)~" stepKey="dontSeeCurrentUrlMatches"/>
```
This action will be true only if active window is not currently on the URL that matches the regex expression `~$/users/(\d+)~`.

### dontSeeElement

See [dontSeeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeElement selectore="div#box" stepKey="dontSeeBox"/>
```
This action will be true only if a div with an id of `box` is not available or invisible on the page.

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

#### Example:

```xml
<dontSeeElementInDOM selectore="div#box" stepKey="dontSeeBoxInDOM"/>
```
This action will be true only if a div with an id of `box` is not available on the page. The action would be false if the element was available on the page, but invisible.

### dontSeeInCurrentUrl

See [dontSeeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInCurrentUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeInCurrentUrl url="/users/" stepKey="dontSeeInCurrentUrl"/>
```
This action will be true only if the url of the current active tab does not contain the string "/users/".

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

#### Example:

```xml
<dontSeeInField userInput="Sample text" selector="input#field" stepKey="dontSeeInField1"/>
```
This action will be true only if the input with an id of `field` does not contain the text "Sample text".

### dontSeeInFormFields

See [dontSeeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInFormFields){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeInFormFields selector="form[name=myform]" parameterArray="['input1' => 'value1', 'input2' => 'value2']" stepKey="dontSeeInFormFields"/>
```
This action will be true only if the form with the name `myform`, with the input elements of name `input1` and `input2`, do not have the values of `value1` and `value2` respectively.

### dontSeeInPageSource

See [dontSeeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeInPageSource userInput="Sample text" stepKey="dontSeeInPageSource"/>
```
This action will be true only if the page source does not contain the string "Sample text".

### dontSeeInSource

See [dontSeeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeInSource userInput="<h1>Sample text</h1>" stepKey="dontSeeInSource"/>
```
This action will be true only if the page does not contain the raw source code `<h1>Sample text</h1>`.

### dontSeeInTitle

See [dontSeeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInTitle){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeInTitle userInput="Page Title" stepKey="dontSeeInTitle"/>
```
This action will be true only if the title of the current active window does not contain the text "Page Title".

### dontSeeJsError

Ensure that there are no JavaScript errors.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeJsError stepKey="dontSeeJsError"/>
```
This action will be true only if there are no JavaScript errors in the current active window.

### dontSeeLink

See [dontSeeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeLink){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<dontSeeLink userInput="External link" stepKey="dontSeeLink"/>
```
This action will be true only if there is no hyperlink tag with the text "External link".

```xml
<dontSeeLink userInput="External link" url="/admin" stepKey="dontSeeAdminLink"/>
```
This action will be true only if there is no hyperlink tag with the text "External link" and the `href` attribute of `/admin`.

### dontSeeOptionIsSelected

See [dontSeeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeOptionIsSelected){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<dontSeeOptionIsSelected userInput="option1" selector="select#myselect" stepKey="dontSeeOption1"/>
```
This action will be true only if the select element with an id of `myselect` does not have the option `option1` selected

### doubleClick

See [doubleClick docs on codeception.com](http://codeception.com/docs/modules/WebDriver#doubleClick){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<doubleClick selector="button#mybutton" stepKey="doubleClickButton"/>
```
This action will click the button with the id of `mybutton` twice in succession.

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

#### Examples:

```xml
<dragAndDrop selector1="#block1" selector2="#block2" stepKey="dragAndDrop"/>
```
This action will click and drag the element with an id of `block1` to the middle of an element with an id of `block2`.

```xml
<dragAndDrop selector1="#block1" selector2="#block2" x="50" y="50" stepKey="dragAndDrop"/>
```
This action will click and drag the element with an id of `block1` to the middle of the element with an id of `block2` with a left offset of 50px and top offset of 50px.

### executeInSelenium

See [executeInSelenium docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeInSelenium){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<executeInSelenium function="function(\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {$webdriver->get('http://google.com');}" stepKey="executeInSelenium"/>
```
This action will execute the Selenium function `function(\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {$webdriver->get('http://google.com');}`.

### executeJS

See [executeJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeJS){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<executeJS function="return Math.floor(new Date() / 1000);" stepKey="returnTime"/>
```
This action will return the time in seconds since Unix Epoch (January 1, 1970) using the JavaScript Date() function.

To access this value you would use `{$returnTime}` in later actions.

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

#### Example:

```xml
<fillField userInput="Sample text" selector="input#myfield" stepKey="fillField"/>
```
This action will fill in the field with an id of `myfield` with the text "Sample text".

### formatMoney

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`locale`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### generateDate

Generates a date for use in `{$stepKey}` format in other test actions.

Attribute|Type|Use|Description
---|---|---|---
`date`|string|required| Date input to parse. Uses the same functionality as the PHP `strtotime()` function.
`format`|string|required| Format in which to save the given date. Uses the same formatting as the PHP `date()` function.
`timezone`|string|optional| Timezone to use when generating date, defaults to `America/Los_Angeles`.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### getData

Gets an entity (for example, a category), from the Magento API according to the data and metadata of the entity type that is requested.

Attribute|Type|Use|Description
---|---|---|---
`storeCode`|string|optional|
`index`|integer|optional|
`entity`|string|required|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<getData entity="ProductAttributeOptionGetter" index="1" stepKey="getAttributeOption1Handle">
    <requiredEntity createDataKey="productAttributeHandle"/>
</getData>
```
This action would get the product attribute that was created using `<createData>` with the stepkey of `productAttributeHandle`.

The `ProductAttributeOptionGetter` entity must be defined in the corresponding [data `*.xml`](../data.html).

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

#### Example:

```xml
<grabAttributeFrom userInput="title" selector="input#myinput" stepKey="grabAttributeFromInput"/>
```
This action would grab the `title` attribute from an input element with the id of `myinput`.

To use this value later in a test you would call it using `{$grabAttributeFromInput}`.

### grabCookie

See [grabCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<grabCookie userInput="cookie1" stepKey="grabCookie1"/>
```
This action will grab the cookie with the given name `cookie1`.

To use this value later in a test you would call it using `{$grabCookie1}`.

```xml
<grabCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="grabCookieExampleDomain"/>
```
This action will grab the cookie with the given name `cookie1` from the domain `www.example.com`.

To use this value later in a test you would call it using `{$grabCookieExampleDomain}`.

### grabFromCurrentUrl

See [grabFromCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabFromCurrentUrl){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<grabFromCurrentUrl regex="~$/user/(\d+)/~" stepKey="grabFromCurrentUrl"/>
```
This action will grab the text from the current URL that matches the regex expression `~$/user/(\d+)/~`.

To use this value later in a test you would call it using `{$grabFromCurrentUrl}`.

### grabMultiple

See [grabMultiple docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabMultiple){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<grabMultiple selector="div.myElement" stepKey="grabAllMyElements"/>
```
This action will grab every element on the page with the class `myElement` and return them as an array.

To use these values later in a test you would call it using `{$grabAllMyElements}`.

```xml
<grabMultiple userInput="href" selector="a" stepKey="grabAllLinks"/>
```
This action will grab the `href` tag from every `a` element on the page and return them as an array.

To use these values later in a test you would call it using `{$grabAllLinks}`.

### grabPageSource

See [grabPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<grabPageSource stepKey="grabPageSource"/>
```
This action will grab the source code of the page and store it as text.

To use this string later in a test you would call it using `{$grabPageSource}`.

### grabTextFrom

See [grabTextFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabTextFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<grabTextFrom selector="h2#title" stepKey="grabTitle"/>
```
This action will store the text currently displayed by an h2 with the id of `title`.

To use this string later in a test you would call it using `{$grabTitle}`.

### grabValueFrom

See [grabValueFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabValueFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`selectorArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<grabValueFrom selector="input#name" stepKey="grabInputName"/>
```
This action will store the value currently entered in the input with the id of `name`.

To use this string later in a test you would call it using `{$grabInputName}`.

### loadSessionSnapshot

See [loadSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#loadSessionSnapshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<loadSessionSnapshot userInput="savedSnapshot" stepKey="loadSnapshot"/>
```
This action will load all cookies saved via a `<saveSessionSnapshot>` action with the name of `savedSnapshot`.

### magentoCLI

Specifies a CLI command to execute in a Magento environment.

Attribute|Type|Use|Description
---|---|---|---
`command`|string |optional| CLI command to be executed in Magento environment.
`arguments`|string |optional| Unescaped arguments to be passed in with the CLI command. 
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<magentoCLI command="indexer:reindex" stepKey="reindex"/>
```
This action will re-index all indices via the command line.

### makeScreenshot

See [makeScreenshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#makeScreenshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<makeScreenshot userInput="example" stepKey="screenshotPage"/>
```
This action will take a screenshot of the page in its current state and save it to the directory `tests/_output/debug` under the name `example.png`.

### maximizeWindow

See [maximizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#maximizeWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<maximizeWindow stepKey="maximizeWindow"/>
```
This action will maximize the current window.

### moveBack

See [moveBack docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveBack){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<moveBack stepKey="moveBack"/>
```
This action will move back one page in history.

### moveForward

See [moveForward docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveForward){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

```xml
<moveForward stepKey="moveForward"/>
```
This action will move forward one page in history.

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

#### Example:

```xml
<moveMouseOver selector="div#product1" stepKey="hoverOverProduct1"/>
```
This action will move the mouse cursor over the div element with an id of `product1`.

```xml
<moveMouseOver selector="div#product1" x="50" y="50" stepKey="hoverOverProduct2"/>
```
This action will move the mouse cursor over the div element with an id of `product1` with an offset of 50px from the top and 50px from the left.

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

#### Example:

```xml
<openNewTab stepKey="openNewTab"/>
```
This action will open a new browser tab and switch to it.

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

#### Example:

```xml
<pauseExecution stepKey="pause"/>
```
This action will cause test execution to stop until the `enter` key is pressed to continue.

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

#### Examples:

```xml
<pressKey userInput="a" selector="#page" stepKey="pressA"/>
```
This action will press the `a` key on an element with the id of `page`.

```xml
<pressKey selector="#targetElement" parameterArray="[\Facebook\WebDriver\WebDriverKeys::ENTER]" stepKey="pressDelete"/>
```
This action uses key constants from the WebDriverKeys class to press the delete key on an element with an id of `targetElement`.

### reloadPage

See [reloadPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#reloadPage){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<reloadPage stepKey="reloadPage"/>
```
This action will reload the current page.

### remove

Removes action by its `stepKey`.

Attribute|Type|Use|Description
---|---|---|---
`keyForRemoval`|string|required| Set `stepKey` of the action you want to remove.

#### Example:

```xml
<remove keyForRemoval="stepKeyToRemove"/>
```
This action will remove another action in the test with the stepKey of `stepKeyToRemove`.

### resetCookie

See [resetCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resetCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<resetCookie userInput="cookie1" stepKey="resetCookie1"/>
```
This action will reset the cookie with the given name `cookie1`.

```xml
<resetCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="resetCookieExampleDomain"/>
```
This action will reset the cookie with the given name `cookie1` from the domain `www.example.com`.

### resizeWindow

See [resizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resizeWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`width`|string|optional|
`height`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<resizeWindow width="800" height="600" stepKey="resizeWindow"/>
```
This action will resize the current window to a width of 800px and a height of 600px.

### saveSessionSnapshot

See [saveSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#saveSessionSnapshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<saveSessionSnapshot userInput="savedSnapshot" stepKey="saveCurrentCookies"/>
```
This action will save all of the current cookies under the name `savedSnapshot`.

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

#### Examples:

```xml
<scrollTo selector="#anchor" stepKey="scrollToAnchor"/>
```
This action will move the page to the middle of an element with an id of `anchor`.

```xml
<scrollTo selector="#anchor" x="50" y="50" stepKey="scrollToAnchor2"/>
```
This action will move the page to the middle of an element with an id of `anchor`, with an offset of 50px from the top and 50px from the left.

### scrollToTopOfPage

A convenience function that executes `window.scrollTo(0,0)` as JavaScript, thus returning to the top of the page.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<scrollToTopOfPage stepKey="scrollToTopOfPages"/>
```
This action will move the page to the uppermost, leftmost position.

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

#### Example:

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

#### Example:

```xml
<see userInput="Sample title" selector="h2#title" stepKey="seeTitle"/>
```
This action will be true only if there is a header with an id of `title` on the page that contains the text "Sample title".

### seeCheckboxIsChecked

See [seeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCheckboxIsChecked){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeCheckboxIsChecked userInput="Sample title" selector="input#option1" stepKey="seeCheckboxChecked"/>
```
This action will be true only if a checkbox element with an id of option1 is checked.

### seeCookie

See [seeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<seeCookie userInput="cookie1" stepKey="cookie1Present"/>
```
This action will be true only if there is a cookie with the given name `cookie1`.

```xml
<seeCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="seeCookieInExampleDomain"/>
```
This action will be true only if there is a cookie with the given name `cookie1` from the domain `www.example.com`.

### seeCurrentUrlEquals

See [seeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlEquals){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeCurrentUrlEquals url="/admin" stepKey="onAdminPage"/>
```
This action will be true only if active window is currently on the URL `(baseURL)/admin`.

### seeCurrentUrlMatches

See [seeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlMatches){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeCurrentUrlMatches regex="~$/users/(\d+)~" stepKey="seeCurrentUrlMatches"/>
```
This action will be true only if active window is currently on the URL that matches the regex expression `~$/users/(\d+)~`.

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

#### Example:

```xml
<seeElement selectore="div#box" stepKey="seeBox"/>
```
This action will be true only if a div with an id of `box` is available and visible on the page.

### seeElementInDOM

See [seeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElementInDOM){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeElementInDOM selectore="div#box" stepKey="seeBoxInDOM"/>
```
This action will be true only if a div with an id of `box` is available on the page. The action would also be true if the element was available on the page, but invisible.

### seeInCurrentUrl

See [seeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInCurrentUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeInCurrentUrl url="/users/" stepKey="seeInCurrentUrl"/>
```
This action will be true only if the url of the current active tab contains the string "/users/".

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

#### Example:

```xml
<seeInField userInput="Sample text" selector="input#field" stepKey="seeInField"/>
```
This action will be true only if an input with an id of `field` contains the text “Sample text”.

### seeInFormFields

See [seeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInFormFields){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`parameterArray`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeInFormFields selector="form[name=myform]" parameterArray="['input1' => 'value1', 'input2' => 'value2']" stepKey="seeInFormFields"/>
```
This action will be true only if the form with the name `myform`, with the input elements of name `input1` and `input2`, have the values of `value1` and `value2` respectively.

### seeInPageSource

See [seeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeInPageSource userInput="Sample text" stepKey="seeInPageSource"/>
```
This action will be true only if the page source contains the string "Sample text".

### seeInPopup

See [seeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeInPopup userInput="Sample text" stepKey="seeInPopup"/>
```
This action will be true only if the current popup on the page contains the string "Sample text".

### seeInSource

See [seeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeInSource userInput="<h1>Sample text</h1>" stepKey="seeInSource"/>
```
This action will be true only if the page containa the raw source code `<h1>Sample text</h1>`.

### seeInTitle

See [seeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInTitle){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeInTitle userInput="Page Title" stepKey="seeInTitle"/>
```
This action will be true only if the title of the current active window contains the text "Page Title".

### seeLink

See [seeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeLink){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`url`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeLink userInput="External link" stepKey="seeLink"/>
```
This action will be true only if there is a hyperlink tag with the text "External link".

```xml
<seeLink userInput="External link" url="/admin" stepKey="seeAdminLink"/>
```
This action will be true only if there is a hyperlink tag with the text "External link" and the href attribute of `/admin`.

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

#### Examples:

```xml
<seeNumberOfElements userInput="10" selector=".product" stepKey="seeTenProducts"/>
```
This action will be true only if there are 10 elements with the class of `product` on the page.

```xml
<seeNumberOfElements userInput="[5, 10]" selector=".product" stepKey="seeFiveToTenProducts"/>
```
This action will be true only if there are between 5 and 10 elements with the class of `product` on the page.

### seeOptionIsSelected

See [seeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeOptionIsSelected){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<seeOptionIsSelected userInput="option1" selector="select#myselect" stepKey="seeOption1"/>
```
This action will be true only if the select element with an id of `myselect` has the option `option1` selected.

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

#### Example:

```xml
<selectOption userInput="option1" selector="select#myselect" stepKey="selectOption1"/>
```
This action will select the option `option1` from a select element with an id of `myselect`.

### selectMultipleOptions

Selects all given options in the given Magento drop-down element.

Attribute|Type|Use|Description
---|---|---|---
`filterSelector`|string|required| The selector for the text filter field.
`optionSelector`|string|required| The selector used to select the corresponding options based on the filter field.
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

It contains a child element `<array>` where you specify the options that must be selected using an array format like `['opt1', 'opt2']`.

#### Example:

```xml
<selectMultipleOptions filterSelector=".filter" optionSelector=".option" stepKey="selectMultipleOpts1">
    <array>['opt1', 'opt2']</array>
</selectMultipleOptions>
```
This action would select the options `opt1` and `opt2` from the option tag with the class of `option` and a field element with the class of `filter`.

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

#### Examples:

```xml
<setCookie userInput="cookieName" value="cookieValue" stepKey="setCookie"/>
```
This action will set a cookie with the name of `cookieName` and value of `cookieValue`.

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

#### Examples:

```xml
<submitForm selector="#loginForm" parameterArray="['username' => 'admin','password' => '123123q']" button="#submit" stepKey="submitForm"/>
```
This action will submit a value of `admin` for an input of name `username`, a value of `123123q` for an input of name `password` for a form with an id of `loginForm` and a submit button with an id of `submit`.

### switchToIFrame

See [switchToIFrame docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToIFrame){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<switchToIFrame userInput="embeddedFrame" stepKey="switchToIFrame"/>
```
This action will the focus to an iframe with the name attribute of `embeddedFrame`.

### switchToNextTab

See [switchToNextTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToNextTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<switchToNextTab stepKey="switchToNextTab"/>
```
This action will switch to the next tab.

```xml
<switchToNextTab userInput="3" stepKey="switchToThirdNextTab"/>
```
This action will switch to the third next tab.

### switchToPreviousTab

See [switchToPreviousTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToPreviousTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples:

```xml
<switchToPreviousTab stepKey="switchToPreviousTab"/>
```
This action will switch to the previous tab.

```xml
<switchToPreviousTab userInput="3" stepKey="switchToThirdPreviousTab"/>
```
This action will switch to the third previous tab.

### switchToWindow

See [switchToWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<switchToWindow userInput="newWindow" stepKey="switchToWindow"/>
```
This action will switch to a window with the `name` parameter of `newWindow`.

### typeInPopup

See [typeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#typeInPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<typeInPopup userInput="Sample Text" stepKey="typeInPopup"/>
```
This action will type the text "Sample Text" into the current popup visible on the page.

### uncheckOption

See [uncheckOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#uncheckOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<uncheckOption selector="input#checkbox" stepKey="uncheckCheckbox"/>
```
This action will ensure that the input with the id of `checkbox` is unchecked, regardless of whether it was already checked or not.

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

#### Example:

```xml
<unselectOption userInput="option1" selector="select#myselect" stepKey="unselectOption1"/>
```
This action will unselect the option `option1` from a select element with an id of `myselect`.

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

#### Example:

```xml
<wait time="10" stepKey="waitTenSeconds"/>
```
This action will halt test execution for 10 seconds before continuing.

### waitForAjaxLoad

Wait for all AJAX calls to finish.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForAjaxLoad stepKey="waitForAjaxLoad"/>
```
This action will wait by default up to 30 seconds for all AJAX calls to finish before continuing.

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

#### Example:

```xml
<waitForElementChange selector="#changedElement" function="function(\WebDriverElement $el) {return $el->isDisplayed();}" stepKey="waitForElementChange"/>
```
This action will wait by default up to 30 seconds for an element with an id of `changedElement` to change to displayed before continuing.

### waitForElement

See [waitForElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForElement selector="#changedElement" stepKey="waitForElement"/>
```
This action will wait by default up to 30 seconds for an element with an id of `changedElement` to be appear on the page before continuing.

### waitForElementNotVisible

See [waitForElementNotVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementNotVisible){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForElementNotVisible selector="#changedElement" stepKey="waitForElementNotVisible"/>
```
This action will wait by default up to 30 seconds for an element with an id of `changedElement` to become non-visible on the page before continuing.

### waitForElementVisible

See [waitForElementVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementVisible){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForElementVisible selector="#changedElement" stepKey="waitForElementVisible"/>
```
This action will wait by default up to 30 seconds for an element with an id of `changedElement` to become visible on the page before continuing.

### waitForJS

See [waitForJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForJS){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional|
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForJS function="return $.active == 0;" stepKey="waitForJS"/>
```
This action will wait for all jQuery AJAX requests to finish before continuing.

### waitForLoadingMaskToDisappear

Wait for all Magento loading overlays to disappear.

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
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForLoadingMaskToDisappear stepKey="waitForLoadingMaskToDisappear"/>
```
This action will wait by default up to 30 seconds for all Magento loading overlays to disappear before continuing.

### waitForPageLoad

Wait for AJAX, Magento loading overlays, and `document.readyState == "complete"`.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional|
`stepKey`|string|required| A unique identifier of the action.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example:

```xml
<waitForPageLoad stepKey="waitForPageLoad"/>
```
This action will wait by default up to 30 seconds for the current page to fully load before continuing.

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

#### Example:

```xml
<waitForText userInput="Sample Text" selector="#page" stepKey="waitForText"/>
```
This action will wait for text "Sample Text" to appear in an element with the id of `page` before continuing.

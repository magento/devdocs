---
mftf-release: 2.3.7
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/test/actions.html
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

### `skipReadiness`

`skipReadiness` is an optional flag to skip the readiness check.

Example test step with skipping the readiness check:

```xml
<myAction skipReadiness="true" stepKey=""/>
```

The flag:

* cannot be used within action groups.
  * Can be used on individual actions inside the action group.

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

* [grabAttributeFrom](#grabattributefrom)
* [grabCookie](#grabcookie)
* [grabFromCurrentUrl](#grabfromcurrenturl)
* [grabMultiple](#grabmultiple)
* [grabPageSource](#grabpagesource)
* [grabTextFrom](#grabtextfrom)
* [grabValueFrom](#grabvaluefrom)
* [executeJS](#executejs)

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

Accepts the current popup visible on the page.

See [acceptPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#acceptPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Accept the current popup visible on the page. -->
<acceptPopup stepKey="acceptPopup"/>
```

### amOnPage

Opens the page by the URL relative to the one set in the `MAGENTO_BASE_URL` configuration variable.

See [amOnPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnPage){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| A path to the page relative to the `MAGENTO_BASE_URL`.
`stepKey`|string|required|A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Open the `(baseURL)/admin` page. -->
<amOnPage url="/admin" stepKey="goToLogoutPage"/>
```

### amOnSubdomain

Takes the base URL and changes the subdomain.

See [amOnSubdomain docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnSubdomain){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| The name of the subdomain.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

Pre-condition: the current base URL is `https://www.magento.com`.

```xml
<!-- Change the sub-domain to `https://devdocs.magento.com`. -->
<amOnSubdomain url="devdocs" stepKey="changeSubdomain"/>
<!-- Open the page `https://devdocs.magento.com` -->
<amOnPage url="/" stepKey="goToDataPage"/>
```

### amOnUrl

Opens a page by the absolute URL.

See [amOnUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| The absolute URL to be used in subsequent steps.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Set url to be used in the next steps to https://www.magento.com/ -->
<amOnUrl url="https://www.magento.com/" stepKey="amOnUrl"/>
```

### appendField

See [appendField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#appendField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector used to identify the form field.
`userInput`|string|optional| Value to append to the form field.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Append the "Sample Text" string to the selected input element -->
<appendField userInput="Sample Text" selector="input#name" stepKey="appendSuffix"/>
```

### attachFile

See [attachFile docs on codeception.com](http://codeception.com/docs/modules/WebDriver#attachFile){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional|The selector identifying the corresponding HTML element (`<input type="file">`).
`userInput`|string|optional|The name of attaching file. The file must be placed in the `tests/_data` directory.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Upload a file from the `tests/_data` directory with the `image.png` name to the selected input element. -->
<attachFile userInput="image.png" selector="input#imgUpload" stepKey="uploadFile"/>
```

### cancelPopup

See [cancelPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#cancelPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Cancel the current popup visible on the page. -->
<cancelPopup stepKey="cancelPopup"/>
```

### checkOption

See [checkOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#checkOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Ensure the checkbox `<input type="checkbox" id="checkbox" ... >...</input>` is checked. -->
<checkOption selector="input#checkbox" stepKey="checkCheckbox"/>
```

### clearField

Clears a text input field.
Equivalent to using [`<fillField>`](#fillfield) with an empty string.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|required| The selector identifying the corresponding HTML element to be cleared.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Clear the selected field. -->
<clearField selector="input#name" stepKey="clearField"/>
```

### click

See [click docs on codeception.com](http://codeception.com/docs/modules/WebDriver#click){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Selects an element as a key value array. See [strict locator](http://codeception.com/docs/modules/WebDriver#locating-elements){:target="_blank"}.
`userInput`|string|optional| Data to be sent with the click.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Click the selected button. -->
<click selector="button#clickable" stepKey="clickButton"/>
```

```xml
<!-- Click on the "<a href=...>Login</a>" link. -->
<click selectorArray="['link' => 'Login']" stepKey="clickButton2"/>
```

### clickWithLeftButton

See [clickWithLeftButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithLeftButton){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Selects an element as a key value array; See [strict locator].
`x`|string|optional| The x-axis value in pixels for the click location.
`y`|string|optional| The y-axis value in pixels for the click location.
`stepKey`|string|required|A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Left click on the center of the `<button id="clickable" />` element. -->
<clickWithLeftButton selector="button#clickable" stepKey="clickButton1"/>
```

```xml
<!-- Left click on the point that is 50 px from the top of the window and 50 px from the left of the window. -->
<clickWithLeftButton x="50" y="50" stepKey="clickButton2"/>
```

```xml
<!-- Left click on the point that is 50 px from the top and 50 px from the left of of the `<button id="clickable" />` element.. -->
<clickWithLeftButton selector="button#clickable" x="50" y="50" stepKey="clickButton3"/>
```

### clickWithRightButton

See [clickWithRightButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithRightButton){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Selects an element as a key value array; See [strict locator].
`x`|string|optional| The x-axis value in pixels for the click location.
`y`|string|optional| The y-axis value in pixels for the click location.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Right click on the center of the `<button id="clickable" />` element. -->
<clickWithRightButton selector="button#clickable" stepKey="clickButton1"/>
```

```xml
<!-- Right click on the point that is 50 px from the top of the window and 50 px from the left of the window. -->
<clickWithRightButton x="50" y="50" stepKey="clickButton2"/>
```

```xml
<!-- Right click on the point that is 50 px from the top and 50 px from the left of of the `<button id="clickable" />` element.. -->
<clickWithRightButton selector="button#clickable" x="50" y="50" stepKey="clickButton3"/>
```

### closeAdminNotification

Remove from the DOM all elements with the CSS classes `.modal-popup` or `.modals-overlay`.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Remove elements of the `.modal-popup` or `.modals-overlay` CSS classes. -->
<closeAdminNotification stepKey="closeAdminNotification"/>
```

### closeTab

See [closeTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#closeTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Close the active tab. -->
<closeTab stepKey="closeTab"/>
```

### comment

Allows input of a string as a PHP code comment.
This tag is not executed.
It is intended to aid documentation and clarity of tests.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|required| PHP comment that will be written in generated test file.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

```xml
<!-- Open the specified page and print a comment "I am on the login page" in the log during test execution. -->
<amOnPage url="/login" stepKey="goToLoginPage"/>
<comment userInput="I am on the login page" stepKey="loginPageComment"/>
```

### conditionalClick

Conditionally clicks on an element if, and only if, another element is visible or not.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the HTML element to be clicked.
`dependentSelector`|string|optional| The selector of the HTML element whose visibility is checked for to activate the click.
`visible`|boolean|optional| Determines whether the conditional click is activated by the element being visible or hidden.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Click on the element with `id="foo"` if the element with `id="bar"` is visible. -->
<conditionalClick selector="#foo" dependentSelector="#bar" visible="true" stepKey="click1"/>
```

### createData

Creates an entity (for example, a category or product).
To create an entity, the MFTF makes a `POST` request to the Magento API according to the [data](../data.html) and [metadata](../metadata.html) of the entity to be created.

Attribute|Type|Use|Description
---|---|---|---
`entity`|string|required| Type of entity to be created.
`storeCode`|string|optional| ID of the store within which the data is created.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

It can optionally contain one or more `requiredEntity` child elements.

#### Example

```xml
<!-- Create an entity with the "SampleProduct" name.  -->
<createData entity="SampleProduct" stepKey="createSampleProduct"/>
```

#### requiredEntity

Specify relationships amongst data to be created.
For example, a complex Product object may contain within it a pointer (an ID) to a complex Category object.

##### Example

```xml
<!-- Create an entity with the "SampleCategory" name.  -->
<createData entity="SampleCategory" stepKey="createCategory"/>
<!-- Create the "SampleProduct" product in that category. -->
<createData entity="SampleProduct" stepKey="createProduct">
    <requiredEntity createDataKey="createCategory"/>
</createData>
```

Attribute|Type|Use|Description
---|---|---|---
`createDataKey`|string|required| Name of the required entity.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### field

Persists a custom field (as a part of the entity) overriding the matching declaration in static data.
This field is replaced at a top level only (nested values such as custom attributes or extension attributes are not replaced).

Attribute|Type|Use|Description
---|---|---|---
`key`|string|required| Name of the field to be replaced or added.

##### Example

To overwrite the `name` field in a particular product, specify a field element during its creation.

```xml
<createData entity="SampleProduct" stepKey="createProduct">
    <field key="name">myCustomProductName</field>
</createData>
```

### deleteData

Delete an entity that was previously created.

Attribute|Type|Use|Description
---|---|---|---
`createDataKey`|string|optional| Reference to `stepKey` of the `createData` action .
`url`|string|optional| REST API route to send a DELETE request.
`storeCode`|string|optional| ID of the store from which to delete the data.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

Delete the entity that was previously created using [`createData`](#createdata) in the scope of the [test](../test.html#test-tag).

1. Create _SampleCategory_:

```xml
<createData entity="SampleCategory" stepKey="createCategory"/>
```

1. Delete _SampleCategory_:

```xml
<deleteData createDataKey="createCategory" stepKey="deleteCategory"/>
```

#### Example of existing data deletion

Delete an entity using [REST API]({{ site.gdeurl23 }}rest/bk-rest.html) request to the corresponding route:

```xml
<grabFromCurrentUrl regex="/^.+id\/([\d]+)/" stepKey="grabId"/>
<deleteData url="V1/categories/{$grabId}" stepKey="deleteCategory"/>
```

### dontSee

See [the codeception.com documentation for more information about this action](http://codeception.com/docs/modules/WebDriver#dontSee){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Value for the form field.
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors to evaluate.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Check that the page does not contain the `<h2 id="title">Sample title</h2>` element. -->
<dontSee userInput="Sample title" selector="h2#title" stepKey="dontSeeTitle"/>
```

### dontSeeCheckboxIsChecked

See [dontSeeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCheckboxIsChecked){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the page does not contain the `<input type="checkbox" id="option1" ... >...</input>` element. -->
<dontSeeCheckboxIsChecked selector="input#option1" stepKey="checkboxNotChecked"/>
```

### dontSeeCookie

See [dontSeeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Value for the form field.
`parameterArray`|string|optional| Parameters to search for within the cookie.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Verify that there is no cookie with the given name `cookie1`. -->
<dontSeeCookie userInput="cookie1" stepKey="cookie1NotPresent"/>
```

```xml
<!-- Verify that there is no cookie with the given name `cookie1` from the domain `www.example.com`. -->
<dontSeeCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="dontSeeCookieInExampleDomain"/>
```

### dontSeeCurrentUrlEquals

See [dontSeeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlEquals){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| URL to be compared with the current URL.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the relative URL of the current page does not match `/admin`. -->
<dontSeeCurrentUrlEquals url="/admin" stepKey="notOnAdminPage"/>
```

### dontSeeCurrentUrlMatches

See [dontSeeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlMatches){:target="_blank"}

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the relative URL of the current page does not match the `~$/users/(\d+)~` regular expression. -->
<dontSeeCurrentUrlMatches regex="~$/users/(\d+)~" stepKey="dontSeeCurrentUrlMatches"/>
```

### dontSeeElement

See [dontSeeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`parameterArray`|string|optional| Parameters to search for within the selected element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<div id="box" ... >...</div>` is missing or invisible on the current page. -->
<dontSeeElement selector="div#box" stepKey="dontSeeBox"/>
```

### dontSeeElementInDOM

See [dontSeeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElementInDOM){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`parameterArray`|string|optional| Array of parameters to search for within the selector.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<div id="box" ... >...</div>` is completely missing on the current page. -->
<dontSeeElementInDOM selector="div#box" stepKey="dontSeeBoxInDOM"/>
```

### dontSeeInCurrentUrl

See [dontSeeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInCurrentUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| String to search for within the current URL.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the url of the current active tab does not contain the string "/users/". -->
<dontSeeInCurrentUrl url="/users/" stepKey="dontSeeInCurrentUrl"/>
```

### dontSeeInField

See [dontSeeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors to be searched.
`userInput`|string|optional| Value for the form field.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<input id="field" ... >...</input>` does not contain the text "Sample text". -->
<dontSeeInField userInput="Sample text" selector="input#field" stepKey="dontSeeInField1"/>
```

### dontSeeInFormFields

See [dontSeeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInFormFields){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`parameterArray`|string|optional| Array of name/value pairs of the form fields to check against.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<form name="myform" ... >...</form>` with the input elements `<input name="input1">...</input>` and `<input name="input2">...</input>`, do not have the values of `value1` and `value2` respectively. -->
<dontSeeInFormFields selector="form[name=myform]" parameterArray="['input1' => 'value1', 'input2' => 'value2']" stepKey="dontSeeInFormFields"/>
```

### dontSeeInPageSource

See [dontSeeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Value for the form field.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the page source does not contain the string "Sample text". -->
<dontSeeInPageSource userInput="Sample text" stepKey="dontSeeInPageSource"/>
```

### dontSeeInSource

See [dontSeeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional| HTML code to search for within the source code.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the page does not contain the raw source code `<h1>Sample text</h1>`. -->
<dontSeeInSource userInput="<h1>Sample text</h1>" stepKey="dontSeeInSource"/>
```

### dontSeeInTitle

See [dontSeeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInTitle){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Value to be located in the page title.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the title of the current active window does not contain the text "Page Title". -->
<dontSeeInTitle userInput="Page Title" stepKey="dontSeeInTitle"/>
```

### dontSeeJsError

Ensure that the current page does not have JavaScript errors.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify there are no JavaScript errors in the current active window. -->
<dontSeeJsError stepKey="dontSeeJsError"/>
```

### dontSeeLink

See [dontSeeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeLink){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Text of the link field to search for.
`url`|string|optional| Value of the href attribute to search for.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Verify that there is no hyperlink tag on the page with the text "External link". -->
<dontSeeLink userInput="External link" stepKey="dontSeeLink"/>
```

```xml
<!-- Verify that there is no hyperlink tag with the text "External link" and the `href` attribute of `/admin`. -->
<dontSeeLink userInput="External link" url="/admin" stepKey="dontSeeAdminLink"/>
```

### dontSeeOptionIsSelected

See [dontSeeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeOptionIsSelected){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding select element.
`userInput`|string|optional| Name of the option to look for.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<select id="myselect" ... >...</select>` does not have the option `option1` selected -->
<dontSeeOptionIsSelected userInput="option1" selector="select#myselect" stepKey="dontSeeOption1"/>
```

### doubleClick

See [doubleClick docs on codeception.com](http://codeception.com/docs/modules/WebDriver#doubleClick){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Click the selected element twice in succession. -->
<doubleClick selector="button#mybutton" stepKey="doubleClickButton"/>
```

### dragAndDrop

See [dragAndDrop docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dragAndDrop){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector1`|string|optional|A selector for the HTML element to drag.
`selector2`|string|optional|A selector for the HTML element to drop onto.
`x`|int|optional| X offset applied to drag-and-drop destination.
`y`|int|optional| Y offset applied to drag-and-drop destination.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Click and drag `<div id="block1" ... >...</div>` to the middle of `<div id="block2" ... >...</div>` -->
<dragAndDrop selector1="div#block1" selector2="div#block2" stepKey="dragAndDrop"/>
```

```xml
<!-- Click and drag `<div id="block1" ... >...</div>` to the middle of `<div id="block2" ... >...</div>` with a left offset of 50px and top offset of 50px. -->
<dragAndDrop selector1="#block1" selector2="#block2" x="50" y="50" stepKey="dragAndDrop"/>
```

### executeInSelenium

See [executeInSelenium docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeInSelenium){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional| Name of Selenium function to run.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Execute the Selenium function `function(\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {$webdriver->get('http://google.com');}`. -->
<executeInSelenium function="function(\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {$webdriver->get('http://google.com');}" stepKey="executeInSelenium"/>
```

### executeJS

See [executeJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeJS){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional| JavaScript to be executed.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Return the time in seconds since Unix Epoch (January 1, 1970) using the JavaScript Date() function.
To access this value, use `{$returnTime}` in later actions. -->
<executeJS function="return Math.floor(new Date() / 1000);" stepKey="returnTime"/>
```

To access this value you would use `{$returnTime}` in later actions.

### fillField

See [fillField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#fillField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of name/value pairs with which to populate the form.
`userInput`|string|optional| Value for the form field.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Fill in `<input id="myfield" ... >...</input>` with the text "Sample text". -->
<fillField userInput="Sample text" selector="input#myfield" stepKey="fillField"/>
```

### formatMoney

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Value for the money form field.
`locale`|string|optional| The PHP locale value for the store.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
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
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Generate a date that is 1 minute after the current date using Pacific Standard Time. For example "07/11/2020 7:00 AM".
To access this value, use `{$generateDate}` in later actions. -->
<generateDate date="+1 minute" format="m/d/Y g:i A" stepKey="generateDate"/>
```

### getData

Gets an entity (for example, a category), from the Magento API according to the data and metadata of the entity type that is requested.

Attribute|Type|Use|Description
---|---|---|---
`storeCode`|string|optional| Identifier of the store from which to get the data.
`index`|integer|optional| The index in the returned data array.
`entity`|string|required| Name of the entity from which to get the data.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Get the product attribute that was created using `<createData stepKey="productAttributeHandle" ... />`. -->
<getData entity="ProductAttributeOptionGetter" index="1" stepKey="getAttributeOption1Handle">
    <requiredEntity createDataKey="productAttributeHandle"/>
</getData>
```

The `ProductAttributeOptionGetter` entity must be defined in the corresponding [data `*.xml`](../data.html).

This action can optionally contain one or more [requiredEntity](#requiredentity) child elements.

### grabAttributeFrom

See [grabAttributeFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabAttributeFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| Name of tag attribute to grab.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Grab the `title` attribute from `<input id="myinput" ... >...</input>`.
To access this value, use `{$grabAttributeFromInput}` in later actions. -->
<grabAttributeFrom userInput="title" selector="input#myinput" stepKey="grabAttributeFromInput"/>
```

### grabCookie

See [grabCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Name of the cookie to grab.
`parameterArray`|string|optional| Array of cookie parameters to grab.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Grab the cookie with the given name `cookie1`.
To access this value, use `{$grabCookie1}` in later actions. -->
<grabCookie userInput="cookie1" stepKey="grabCookie1"/>
```

```xml
<!-- Grab the cookie with the given name `cookie1` from the domain `www.example.com`.
To access this value, use `{$grabCookieExampleDomain}` in later actions. -->
<grabCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="grabCookieExampleDomain"/>
```

### grabFromCurrentUrl

See [grabFromCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabFromCurrentUrl){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Grab the text from the current URL that matches the regex expression `~$/user/(\d+)/~`.
To access this value, use `{$grabFromCurrentUrl}` in later actions. -->
<grabFromCurrentUrl regex="~$/user/(\d+)/~" stepKey="grabFromCurrentUrl"/>
```

### grabMultiple

See [grabMultiple docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabMultiple){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| Name of the tag attribute to grab.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Grab every element on the page with the class `myElement` and return them as an array.
To access this value, use `{$grabAllMyElements}` in later actions. -->
<grabMultiple selector="div.myElement" stepKey="grabAllMyElements"/>
```

```xml
<!-- Grab the `href` tag from every `a` element on the page and return them as an array.
To access this value, use `{$grabAllLinks}` in later actions. -->
<grabMultiple userInput="href" selector="a" stepKey="grabAllLinks"/>
```

### grabPageSource

See [grabPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Store the page source code as text
To access this value, use `{$grabPageSource}` in later actions. -->
<grabPageSource stepKey="grabPageSource"/>
```

### grabTextFrom

See [grabTextFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabTextFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Store the text currently displayed by the selected element.
To access this value, use `{$grabTitle}` in later actions. -->
<grabTextFrom selector="h2#title" stepKey="grabTitle"/>
```

### grabValueFrom

See [grabValueFrom docs on codeception.com](https://codeception.com/docs/modules/WebDriver#grabValueFrom){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors for the form fields to be selected.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Store the value currently entered in <input id="name" ... >...</input>.
To access this value, use `{$grabInputName}` in later actions. -->
<grabValueFrom selector="input#name" stepKey="grabInputName"/>
```

### loadSessionSnapshot

See [loadSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#loadSessionSnapshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Name of saved cookie.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Load all cookies saved via `<saveSessionSnapshot name="savedSnapshot" ... />`.
To access this value, use the `loadSessionSnapshot` action -->
<loadSessionSnapshot userInput="savedSnapshot" stepKey="loadSnapshot"/>
```

### magentoCLI

Specifies a CLI command to execute in a Magento environment.

Attribute|Type|Use|Description
---|---|---|---
`command`|string |optional| CLI command to be executed in Magento environment.
`arguments`|string |optional| Unescaped arguments to be passed in with the CLI command.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Re-index all indices via the command line.  -->
<magentoCLI command="indexer:reindex" stepKey="reindex"/>
```

### makeScreenshot

See [makeScreenshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#makeScreenshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Name of PNG file to be created.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

{% include note.html
      type="info"
      content="The makeScreenshot action does not automatically add the screenshot to Allure reports."
      %}

#### Example

```xml
<!-- Take a screenshot of the page and save it to the directory `tests/_output/debug` under the name `example.png`. -->
<makeScreenshot userInput="example" stepKey="screenshotPage"/>
```

{:.bs-callout .bs-callout-info}
This action does not add a screenshot to the Allure [report](../reporting.html).

### maximizeWindow

See [maximizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#maximizeWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Maximize the current window. -->
<maximizeWindow stepKey="maximizeWindow"/>
```

### moveBack

See [moveBack docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveBack){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Move back one page in history. -->
<moveBack stepKey="moveBack"/>
```

### moveForward

See [moveForward docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveForward){:target="_blank"}..

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

```xml
<!-- Move forward one page in history. -->
<moveForward stepKey="moveForward"/>
```

### moveMouseOver

See [moveMouseOver docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveMouseOver){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors.
`x`|string|optional| Number of pixels on the x-axis to offset from the selected element.
`y`|string|optional| Number of pixels on the y-axis to offset from the selected element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Move the mouse cursor over the selected element. -->
<moveMouseOver selector="button#product1" stepKey="hoverOverProduct1"/>
```

```xml
<!-- Move the mouse cursor over the selected element with an offset of 50px from the top and 50px from the left. -->
<moveMouseOver selector="button#product1" x="50" y="50" stepKey="hoverOverProduct2"/>
```

### mSetLocale

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Value of the expected locale.
`locale`|string|optional| Number of the locale value to be set.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### mResetLocale

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### openNewTab

See [openNewTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#openNewTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Open and switch to a new browser tab. -->
<openNewTab stepKey="openNewTab"/>
```

### parseFloat

Parses float number with thousands separator.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Float value to be parsed.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### pauseExecution

See [pauseExecution docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pauseExecution){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Halt test execution until the `enter` key is pressed to continue. -->
<pauseExecution stepKey="pause"/>
```

### performOn

See [performOn docs on codeception.com](http://codeception.com/docs/modules/WebDriver#performOn){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`function`|string|optional| Function or actions to be taken on the selected element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

### pressKey

See [pressKey docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pressKey){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| Key to be pressed.
`parameterArray`|string|optional| Array of keys to be pressed and functions to be run for the action.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Press the `a` key within the selected area. -->
<pressKey userInput="a" selector="#targetElement" stepKey="pressA"/>
```

The `parameterArray` attribute value must begin with `[` and end with `]`.
To press more than one key at a time, wrap the keys in secondary `[]`.

```xml
<!-- Press the delete within the selected area uses key constants from the WebDriverKeys class. -->
<pressKey selector="#targetElement" parameterArray="[['ctrl', 'a'], \Facebook\WebDriver\WebDriverKeys::DELETE]" stepKey="pressDelete"/>
```

### reloadPage

See [reloadPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#reloadPage){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Reload the current page. -->
<reloadPage stepKey="reloadPage"/>
```

### remove

Removes action by its `stepKey`.

Attribute|Type|Use|Description
---|---|---|---
`keyForRemoval`|string|required| Set `stepKey` of the action you want to remove.

#### Example

```xml
<!-- Remove an action in the test with the stepKey of `stepKeyToRemove`. -->
<remove keyForRemoval="stepKeyToRemove"/>
```

### resetCookie

See [resetCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resetCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Name of the cookie to be reset.
`parameterArray`|string|optional| Array of key/values to get reset within the cookie.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Reset a cookie with the name `cookie1`. -->
<resetCookie userInput="cookie1" stepKey="resetCookie1"/>
```

```xml
<!-- Reset a cookie with the given name `cookie1` from the domain `www.example.com`. -->
<resetCookie userInput="cookie1" parameterArray="['domainName' => '.example.com']" stepKey="resetCookieExampleDomain"/>
```

### resizeWindow

See [resizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resizeWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`width`|string|optional| The new width of the window in pixels.
`height`|string|optional| The new height of the window in pixels.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Resize the current window to a width of 800px and a height of 600px. -->
<resizeWindow width="800" height="600" stepKey="resizeWindow"/>
```

### saveSessionSnapshot

See [saveSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#saveSessionSnapshot){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Name of snapshot where cookies are to be saved.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Save all of the current cookies under the name `savedSnapshot`. -->
<saveSessionSnapshot userInput="savedSnapshot" stepKey="saveCurrentCookies"/>
```

### scrollTo

See [scrollTo docs on codeception.com](http://codeception.com/docs/modules/WebDriver#scrollTo){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors to return.
`x`|string|optional| x offset of the element to be scrolled to.
`y`|string|optional| y offset of the element to be scrolled to.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Move the page to the middle of the selected area. -->
<scrollTo selector="div#anchor" stepKey="scrollToAnchor"/>
```

```xml
<!-- Move the page to the middle of the selected area with an offset of 50px from the top and 50px from the left. -->
<scrollTo selector="div#anchor" x="50" y="50" stepKey="scrollToAnchor2"/>
```

### scrollToTopOfPage

A convenience function that executes `window.scrollTo(0,0)` as JavaScript, thus returning to the top of the page.

Attribute|Type|Use|Description
---|---|---|---
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Move the page to the uppermost, leftmost position. -->
<scrollToTopOfPage stepKey="scrollToTopOfPages"/>
```

### searchAndMultiSelectOption

Search for and select options from a Magento multi-select drop-down menu.
For example, the drop-down menu you use to assign Products to Categories.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|required|The selector of a multi select HTML element (drop-down menu).
`parameterArray`|array|required| Items to search and select in the selected drop-down menu.
`requiredAction`|boolean|optional|Clicks **Done** after selections if `true`.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Search and select for "Item 1" amd "Item 2" in the Magento multiselect element with the id of `multiSelect`. -->
<searchAndMultiSelectOption selector="#multiSelect" parameterArray="['Item 1', 'Item 2']" stepKey="searchAndMultiSelect1"/>
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
`userInput`|string|optional| The text to be searched for within the selector.
`selector`|string|optional| The selector identifying the corresponding HTML element to be searched for.
`selectorArray`|string|optional| Array of selectors to be searched for.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the selected element contains the text "Sample title". -->
<see userInput="Sample title" selector="h2#title" stepKey="seeTitle"/>
```

### seeCheckboxIsChecked

See [seeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCheckboxIsChecked){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify `<input type="checkbox" id="option1" ... >...</input>` is checked. -->
<seeCheckboxIsChecked selector="input#option1" stepKey="seeCheckboxChecked"/>
```

### seeCookie

See [seeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Name of the cookie to be searched for.
`parameterArray`|string|optional| Cookie parameters to be searched for.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Verify that there is a cookie with the given name `cookie1`. -->
<seeCookie userInput="cookie1" stepKey="cookie1Present"/>
```

```xml
<!-- Verify that there is a cookie with the given name `cookie1` from the domain `www.example.com`. -->
<seeCookie userInput="cookie1" parameterArray="['domainName' => 'www.example.com']" stepKey="seeCookieInExampleDomain"/>
```

### seeCurrentUrlEquals

See [seeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlEquals){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| The full URL to be searched for.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the relative URL of the current page matches `/admin`. -->
<seeCurrentUrlEquals url="/admin" stepKey="onAdminPage"/>
```

### seeCurrentUrlMatches

See [seeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlMatches){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`regex`|string|optional| Regular expression against the current URI.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the relative URL of the current page matches the `~$/users/(\d+)~` regular expression. -->
<seeCurrentUrlMatches regex="~$/users/(\d+)~" stepKey="seeCurrentUrlMatches"/>
```

### seeElement

See [seeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors to be searched for.
`parameterArray`|string|optional| Array of parameters to be searched for within the selector.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<div id="box" ... >...</div>` is available and visible on the current page. -->
<seeElement selector="div#box" stepKey="seeBox"/>
```

### seeElementInDOM

See [seeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElementInDOM){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`parameterArray`|string|optional| Array of parameters to be searched for within the selected element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<div id="box" ... >...</div>` is available on the current page. -->
<seeElementInDOM selector="div#box" stepKey="seeBoxInDOM"/>
```

### seeInCurrentUrl

See [seeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInCurrentUrl){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`url`|string|optional| String to be searched for within the current URL.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the url of the current active tab contains the string "/users/". -->
<seeInCurrentUrl url="/users/" stepKey="seeInCurrentUrl"/>
```

### seeInField

See [seeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInField){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`selectorArray`|string|optional| Array of selectors to be searched.
`userInput`|string|optional| Value to be searched for within the selected form field.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<input id="field" ... >...</input>` contains the text "Sample text". -->
<seeInField userInput="Sample text" selector="input#field" stepKey="seeInField"/>
```

### seeInFormFields

See [seeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInFormFields){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`parameterArray`|string|optional| Array of parameters to be searched for within the selector.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<form name="myform" ... >...</form>` with the input elements `<input name="input1">...</input>` and `<input name="input2">...</input>`, has the values of `value1` and `value2` respectively. -->
<seeInFormFields selector="form[name=myform]" parameterArray="['input1' => 'value1', 'input2' => 'value2']" stepKey="seeInFormFields"/>
```

### seeInPageSource

See [seeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPageSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional| HTML code to be searched for within the document.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the page source contains the string "Sample text". -->
<seeInPageSource userInput="Sample text" stepKey="seeInPageSource"/>
```

### seeInPopup

See [seeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| String to be searched for within the popup.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify the current popup on the page contains the string "Sample text". -->
<seeInPopup userInput="Sample text" stepKey="seeInPopup"/>
```

### seeInSource

See [seeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInSource){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`html`|string|optional| HTML code to be searched for within the page source.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the page does contains the raw source code `<h1>Sample text</h1>`. -->
<seeInSource userInput="<h1>Sample text</h1>" stepKey="seeInSource"/>
```

### seeInTitle

See [seeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInTitle){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| String to be searched for within the current page title.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that the title of the current active window contains the text "Page Title". -->
<seeInTitle userInput="Page Title" stepKey="seeInTitle"/>
```

### seeLink

See [seeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeLink){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| String to be searched for within the text of the link.
`url`|string|optional| Hyperlink to be searched.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that there is a hyperlink tag on the page with the text "External link". -->
<seeLink userInput="External link" stepKey="seeLink"/>
```

```xml
<!-- Verify that there is a hyperlink tag with the text "External link" and the `href` attribute of `/admin`. -->
<seeLink userInput="External link" url="/admin" stepKey="seeAdminLink"/>
```

### seeNumberOfElements

See [seeNumberOfElements docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeNumberOfElements){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| Number of instances of the specified selector to be found.
`parameterArray`|string|optional| Array of parameters to be searched for within the selector.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Verify there are 10 `<div id="product" ... >...</div>` elements on the page. -->
<seeNumberOfElements userInput="10" selector="div.product" stepKey="seeTenProducts"/>
```

```xml
<!-- Verify there are between 5 and 10 `<div id="product" ... >...</div>` elements on the page. -->
<seeNumberOfElements userInput="[5, 10]" selector=".product" stepKey="seeFiveToTenProducts"/>
```

### seeOptionIsSelected

See [seeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeOptionIsSelected){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| The name of the option that should be selected.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Verify that `<select id="myselect" ... >...</select>` has the option `option1` selected -->
<seeOptionIsSelected userInput="option1" selector="select#myselect" stepKey="seeOption1"/>
```

### selectOption

See [selectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#selectOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| The name of the option to be selected.
`parameterArray`|string|optional| Array of options to be selected.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Select `option1` from `<select id="mySelect" ... >...</select>`. -->
<selectOption userInput="option1" selector="select#mySelect" stepKey="selectOption1"/>
```

### selectMultipleOptions

Selects all given options in the given Magento drop-down element.

Attribute|Type|Use|Description
---|---|---|---
`filterSelector`|string|required| The selector for the text filter field.
`optionSelector`|string|required| The selector used to select the corresponding options based on the filter field.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

It contains a child element `<array>` where you specify the options that must be selected using an array format like `['opt1', 'opt2']`.

#### Example

```xml
<!-- Select the options `opt1` and `opt2` from `<option class="option" ... >...</option>` and `<input class="filter" ...>...</input>` -->
<selectMultipleOptions filterSelector=".filter" optionSelector=".option" stepKey="selectMultipleOpts1">
    <array>['opt1', 'opt2']</array>
</selectMultipleOptions>
```

### setCookie

See [setCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#setCookie){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| The name of the cookie to be set.
`parameterArray`|string|optional| Array of name/value pairs to be set within the cookie.
`value`|string|optional| Value to be written to the cookie.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Set a cookie with the name of `cookieName` and value of `cookieValue`. -->
<setCookie userInput="cookieName" value="cookieValue" stepKey="setCookie"/>
```

### submitForm

See [submitForm docs on codeception.com](http://codeception.com/docs/modules/WebDriver#submitForm){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`parameterArray`|string|optional| An array of form field names and their corresponding values.
`button`|string|optional| Selector for the form submit button.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Submit a value of `admin` for `<input name="username" ... >...</input>`, a value of `123123q` for `<input name="password" ... >...</input>` for the form `<form id="loginForm" ...>...</form>` and a submit button of `<button id="submit" ... >...</button>` -->
<submitForm selector="#loginForm" parameterArray="['username' => 'admin','password' => '123123q']" button="#submit" stepKey="submitForm"/>
```

### switchToIFrame

See [switchToIFrame docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToIFrame){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| The name of the IFrame to set focus to.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Set the focus to <iframe name="embeddedFrame" ... /> -->
<switchToIFrame userInput="embeddedFrame" stepKey="switchToIFrame"/>
```

### switchToNextTab

See [switchToNextTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToNextTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Offset of the tab to open, usually a number.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Switch to the next tab. -->
<switchToNextTab stepKey="switchToNextTab"/>
```

```xml
<!-- Switch to the third next tab. -->
<switchToNextTab userInput="3" stepKey="switchToThirdNextTab"/>
```

### switchToPreviousTab

See [switchToPreviousTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToPreviousTab){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| Number of tabs to go back.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Examples

```xml
<!-- Switch to the previous tab. -->
<switchToPreviousTab stepKey="switchToPreviousTab"/>
```

```xml
<!-- Switch to the third previous tab. -->
<switchToPreviousTab userInput="3" stepKey="switchToThirdPreviousTab"/>
```

### switchToWindow

See [switchToWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToWindow){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| The name of new window to be opened.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Switch to a window with the `name` parameter of `newWindow`. -->
<switchToWindow userInput="newWindow" stepKey="switchToWindow"/>
```

### typeInPopup

See [typeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#typeInPopup){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| String to be added to the current popup.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Type the text "Sample Text" into the current popup visible on the page. -->
<typeInPopup userInput="Sample Text" stepKey="typeInPopup"/>
```

### uncheckOption

See [uncheckOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#uncheckOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Ensure the checkbox `<input type="checkbox" id="checkbox" ... >...</input>` is unchecked. -->
<uncheckOption selector="input#checkbox" stepKey="uncheckCheckbox"/>
```

### unselectOption

See [unselectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#unselectOption){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`userInput`|string|optional| The name of the option to deselect.
`parameterArray`|string|optional| Array of options to be deselected.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Deselect `option1` from `<select id="mySelect" ... >...</select>`. -->
<unselectOption userInput="option1" selector="select#myselect" stepKey="unselectOption1"/>
```

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
`storeCode`|string|optional| ID of the store in which to apply the updated data.
`entity`|string|required| The name of the `updateData` entity being created.
`createDataKey`|string|required| Key of the data entity to be updated.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

This action can optionally contain one or more [requiredEntity](#requiredentity) child elements.

### wait

See [wait docs on codeception.com](http://codeception.com/docs/modules/WebDriver#wait){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional| The number of seconds to wait.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Halt test execution for 10 seconds before continuing. -->
<wait time="10" stepKey="waitTenSeconds"/>
```

### waitForAjaxLoad

Wait for all AJAX calls to finish.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional| The number of seconds to wait for Ajax calls to finish.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for all AJAX calls to finish before continuing. -->
<waitForAjaxLoad stepKey="waitForAjaxLoad"/>
```

### waitForElementChange

See [waitForElementChange docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementChange){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the HTML element to be changed.
`function`|string|optional| The function to be run after the element changes.
`time`|string|optional| The number of seconds to wait for the change. Default is 30.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for `<div id="changedElement" ... >...</div>` to change to displayed before continuing. -->
<waitForElementChange selector="div#changedElement" function="function(\WebDriverElement $el) {return $el->isDisplayed();}" stepKey="waitForElementChange"/>
```

### waitForElement

See [waitForElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElement){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`time`|string|optional| The number of seconds to wait for the element to appear.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for `<div id="changedElement" ... >...</div>` to be appear on the page before continuing. -->
<waitForElement selector="#changedElement" stepKey="waitForElement"/>
```

### waitForElementNotVisible

See [waitForElementNotVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementNotVisible){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`time`|string|optional| The number of seconds to wait for the element to become not visible.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for `<div id="changedElement" ... >...</div>` to become non-visible on the page before continuing. -->
<waitForElementNotVisible selector="#changedElement" stepKey="waitForElementNotVisible"/>
```

### waitForElementVisible

See [waitForElementVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementVisible){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`selector`|string|optional| The selector identifying the corresponding HTML element.
`time`|string|optional| The number of seconds to wait for the element to appear.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for `<div id="changedElement" ... >...</div>` to become visible on the page before continuing. -->
<waitForElementVisible selector="#changedElement" stepKey="waitForElementVisible"/>
```

### waitForJS

See [waitForJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForJS){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`function`|string|optional| The function to be run after all JavaScript finishes.
`time`|string|optional| The number of seconds to wait for JavaScript to finish.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait for all jQuery AJAX requests to finish before continuing. -->
<waitForJS function="return $.active == 0;" stepKey="waitForJS"/>
```

### waitForLoadingMaskToDisappear

Wait for all Magento loading overlays to disappear.

{: .bs-callout .bs-callout-info }
The CSS class for loading masks is not used consistently throughout Magento.
Therefore, this convenience function tries to wait for various specific selectors.

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
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for all Magento loading overlays to disappear before continuing. -->
<waitForLoadingMaskToDisappear stepKey="waitForLoadingMaskToDisappear"/>
```

### waitForPageLoad

Wait for AJAX, Magento loading overlays, and `document.readyState == "complete"`.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional| Number of seconds to wait for the page to load.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait up to 30 seconds for the current page to fully load before continuing. -->
<waitForPageLoad stepKey="waitForPageLoad"/>
```
### waitForPwaElementNotVisible

Waits up to the given `time` for a PWA Element to disappear from the screen.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional| Number of seconds to wait for the element to disappear.
`selector`|string|required| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait for the PWA element to disappear. -->
<waitForPwaElementNotVisible time="1" stepKey="waitForPwaElementNotVisible"/>
```
### waitForPwaElementVisible

Waits up to the given 'time' for a PWA Element to appear on the screen.

Attribute|Type|Use|Description
---|---|---|---
`time`|string|optional| Number of seconds to wait for the selected element.
`selector`|string|required| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait for the selected element to appear. -->
<waitForPwaElementVisible stepKey="waitForPwaElementVisible"/>
```

### waitForText

See [waitForText docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForText){:target="_blank"}.

Attribute|Type|Use|Description
---|---|---|---
`userInput`|string|optional| The string to wait for.
`time`|string|optional| The number of seconds to wait for the text to appear.
`selector`|string|optional| The selector identifying the corresponding HTML element.
`stepKey`|string|required| A unique identifier of the action.
`skipReadiness`|boolean|optional| A flag to skip the readiness check.
`before`|string|optional| `stepKey` of action that must be executed next.
`after`|string|optional| `stepKey` of preceding action.

#### Example

```xml
<!-- Wait for text "Sample Text" to appear in the selected area before continuing. -->
<waitForText userInput="Sample Text" selector="div#page" stepKey="waitForText"/>
```

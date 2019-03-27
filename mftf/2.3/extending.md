---
mftf-release: 2.3.0
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/extending.html
---

# Extending

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

There are cases when you need to create many tests that are very similar to each other.
For example, only one or two parameters (for example, URL) might vary between tests.
To avoid copy-pasting and to save some time the Magento Functional Testing Framework (MFTF) enables you to extend test components such as [test], [data], and [action group].
You can create or update any component of the parent body in your new test/action group/entity.

* A test starting with `<test name="SampleTest" extends="ParentTest">` creates a test `SampleTest` that takes body of existing test `ParentTest` and adds to it the body of `SampleTest`.
* An action group starting with `<actionGroup name="SampleActionGroup" extends="ParentActionGroup">` creates an action group based on the `ParentActionGroup`, but with the changes specified in `SampleActionGroup`.
* An entity starting with `<entity name="SampleEntity" extends="ParentEntity">` creates an entity `SampleEntity` that is equivalent to merging the `SampleEntity` with the `ParentEntity`.

Specify needed variations for a parent object and produce a copy of the original that incorporates the specified changes (the "delta").

Unlike merging, the parent test (or action group) will still exist after the test generation.
 {:.bs-callout .bs-callout-info}

## Extending tests

### Update a test step

__Use case__: Create two similar tests with different `url` (`"{{AdminCategoryPage.url}}"` and `"{{OtherCategoryPage.url}}"`) in a test step.

> Test with "extends":

```xml
<tests >
    <test name="AdminCategoryTest">
            <annotations>
                ...
            </annotations>
        ...(several steps)
        <amOnPage url="{{AdminCategoryPage.url}}" stepKey="navigateToAdminCategory"/>
        ...(several steps)
    </test>
    <test name="OtherCategoryTest" extends="AdminCategoryTest">
            <annotations>
                ...
            </annotations>
        <amOnPage url="{{OtherCategoryPage.url}}" stepKey="navigateToAdminCategory"/>
    </test>
</tests>
```

> Test without "extends":

```xml
<tests >
    <test name="AdminCategoryTest">
            <annotations>
                ...
            </annotations>
        ...(several steps)
        <amOnPage url="{{AdminCategoryPage.url}}" stepKey="navigateToAdminCategory"/>
        ...(several steps)
    </test>
    <test name="OtherCategoryTest">
            <annotations>
                ...
            </annotations>
        ...(several steps)
        <amOnPage url="{{OtherCategoryPage.url}}" stepKey="navigateToAdminCategory"/>
        ...(several steps)
    </test>
</tests>
```

### Add a test step

__Use case__: Create two similar tests where the second test contains two additional steps:

* `checkOption` before `click` (`stepKey="clickLogin"`)
* `seeInCurrentUrl` after `click` in the `LogInAsAdminTest` test (in the `.../Backend/Test/LogInAsAdminTest.xml` file)

> Tests with "extends":

```xml
<tests >
    <test name="LogInAsAdminTest">
        <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
        <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
        <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
        <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
    <test name="AlternativeLogInAsAdminTest" extends="LogInAsAdminTest">
        <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe" before="clickLogin"/>
        <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl" after="clickLogin"/>
    </test>
</tests>
```

> Tests without "extends":

```xml
<tests >
    <test name="LogInAsAdminTest">
        <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
        <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
        <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
        <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
    <test name="AlternativeLogInAsAdminTest">
        <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
        <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
        <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
        <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe"/>
        <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl"/>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
</tests>
```

### Update a test annotation

__Use case__: Create two similar tests where the second one contains two additional actions in the `before` hook:

* `checkOption` before `click` (`stepKey="clickLogin"`)
* `seeInCurrentUrl` after `click` in the `LogInAsAdminTest` test (in the `.../Backend/Test/LogInAsAdminTest.xml` file)

> Tests with "extends":

```xml
<tests >
    <test name="LogInAsAdminTest">
        <before>
            <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
            <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
            <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
            <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        </before>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
    <test name="AlternativeLogInAsAdminTest" extends="LogInAsAdminTest">
        <before>
            <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe" before="clickLogin"/>
            <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl" after="clickLogin"/>
        </before>
    </test>
</tests>
```

> Tests without "extends":

```xml
<tests >
    <test name="LogInAsAdminTest">
        <before>
            <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
            <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
            <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
            <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
        </before>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
    <test name="AlternativeLogInAsAdminTest">
        <before>
            <amOnPage url="{{AdminLoginPage}}" stepKey="navigateToAdmin"/>
            <fillField selector="{{AdminLoginFormSection.username}}" userInput="admin" stepKey="fillUsername"/>
            <fillField selector="{{AdminLoginFormSection.password}}" userInput="password" stepKey="fillPassword"/>
            <checkOption selector="{{AdminLoginFormSection.rememberMe}}" stepKey="checkRememberMe"/>
            <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>
            <seeInCurrentUrl url="admin/admin/dashboard/" stepKey="seeAdminUrl"/>
        </before>
        <see userInput="Lifetime Sales" stepKey="seeLifetimeSales"/>
    </test>
</tests>
```

## Extending action groups

Extend an [action group] to add or update [actions] in your module.

### Update an action

__Use case__: The `CountProductA` test counts the particular product.
Modify the action group to use another product.

> Action groups with "extends":

```xml
<actionGroups>
    <actionGroup name="CountProductA">
        <arguments>
            <argument name="count" type="string"/>
        </arguments>
        <grabMultiple selector="selectorForProductA" stepKey="grabProducts"/>
        <assertCount stepKey="assertCount">
            <expectedResult type="int">{{count}}</expectedResult>
            <actualResult type="variable">grabProducts</actualResult>
        </assertCount>
    </actionGroup>

    <actionGroup name="CountProductB" extends="CountProductA">
        <grabMultiple selector="selectorForProductB" stepKey="grabProducts"/>
    </actionGroup>
</actionGroups>
```

> Action groups without "extends":

```xml
<actionGroups>
    <actionGroup name="CountProductA">
        <arguments>
            <argument name="count" type="string"/>
        </arguments>
        <grabMultiple selector="selectorForProductA" stepKey="grabProducts"/>
        <assertCount stepKey="assertCount">
            <expectedResult type="int">{{count}}</expectedResult>
            <actualResult type="variable">grabProducts</actualResult>
        </assertCount>
    </actionGroup>

    <actionGroup name="CountProductB">
        <arguments>
            <argument name="count" type="string"/>
        </arguments>
        <grabMultiple selector="selectorForProductB" stepKey="grabProducts"/>
        <assertCount stepKey="assertCount">
            <expectedResult type="int">{{count}}</expectedResult>
            <actualResult type="variable">grabProducts</actualResult>
        </assertCount>
    </actionGroup>
</actionGroups>
```

### Add an action

__Use case__: The `GetProductCount` action group returns the count of products.
Add a new test `VerifyProductCount` that asserts the count of products:

> Action groups with "extends":

```xml
<actionGroups>
    <actionGroup name="GetProductCount">
        <arguments>
            <argument name="productSelector" type="string"/>
        </arguments>
        <grabMultiple selector="{{productSelector}}" stepKey="grabProducts"/>
    </actionGroup>

    <actionGroup name="VerifyProductCount" extends="GetProductCount">
        <arguments>
            <argument name="count" type="string"/>
        </arguments>
        <assertCount stepKey="assertCount" after="grabProducts">
            <expectedResult type="int">{{count}}</expectedResult>
            <actualResult type="variable">grabProducts</actualResult>
        </assertCount>
    </actionGroup>
</actionGroups>
```

> Action groups without "extends":

```xml
<actionGroups>
    <actionGroup name="GetProductCount">
        <arguments>
            <argument name="productSelector" type="string"/>
        </arguments>
        <grabMultiple selector="{{productSelector}}" stepKey="grabProducts"/>
    </actionGroup>

    <actionGroup name="VerifyProductCount">
        <arguments>
            <argument name="count" type="string"/>
            <argument name="productSelector" type="string"/>
        </arguments>
        <grabMultiple selector="{{productSelector}}" stepKey="grabProducts"/>
        <assertCount stepKey="assertCount">
            <expectedResult type="int">{{count}}</expectedResult>
            <actualResult type="variable">grabProducts</actualResult>
        </assertCount>
    </actionGroup>
</actionGroups>
```

## Extending data

Extend data to reuse entities in your module.

### Update a data entry

__Use case__: Create an entity named `DivPanelGreen`, which is similar to the `DivPanel` entity, except that it is green.

> Entities with "extends":

```xml
<entities >
    <entity name="DivPanel">
        <data key="divColor">Red</data>
        <data key="divSize">80px</data>
        <data key="divWidth">100%</data>
    </entity>
    <entity name="DivPanelGreen" extends="DivPanel">
        <data key="divColor">Green</data>
    </entity>
</entities>
```

> Entities without "extends":

```xml
<entities >
    <entity name="DivPanel">
        <data key="divColor">Red</data>
        <data key="divSize">80px</data>
        <data key="divWidth">100%</data>
    </entity>
    <entity name="DivPanelGreen" extends="DivPanel">
        <data key="divColor">Green</data>
        <data key="divSize">80px</data>
        <data key="divWidth">100%</data>
    </entity>
</entities>
```

### Add a data entry

__Use case__: Create an entity named `DivPanelGreen`, which is similar to the `DivPanel` entity, except that it has a specific panel color.

> Entities with "extends":

```xml
<entities >
    <entity name="DivPanel">
        <data key="divColor">Red</data>
        <data key="divSize">80px</data>
        <data key="divWidth">100%</data>
    </entity>
    <entity name="DivPanelGreen" extends="DivPanel">
        <data key="divColor">#000000</data>
        <data key="AttributeHidden">True</data>
    </entity>
</entities>
```

> Entities without "extends":

```xml
<entities >
    <entity name="DivPanel">
        <data key="divColor">Red</data>
        <data key="divSize">80px</data>
        <data key="divWidth">100%</data>
    </entity>
    <entity name="DivPanelGreen" extends="DivPanel">
        <data key="divColor">#000000</data>
        <data key="divSize">80px</data>
        <data key="divWidth">100%</data>
        <data key="AttributeHidden">True</data>
    </entity>
</entities>
```

<!-- Link definitions -->
[test]: ./test.html
[data]: ./data.html
[action group]: ./test/action-groups.html
[actions]: ./test/actions.html
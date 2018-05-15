---
layout: default
group: mftf
title: Extending
version: 2.2
github_link: magento-functional-testing-framework/release-2/extending.md
functional_areas:
 - Testing
mftf-release: 2.3.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The MFTF allows you to extend test components defined in XML files such as [tests](./test.html) and [action groups](./test/action-groups.html). You can create or update the actions and hooks included. It is useful for supporting rapid test creation for extensions and customizations.

You can specify needed variations for an existing test or action group to produce a copy of the original that incorporates the specified changes (the "delta").

**Unlike merging the original test or action group will still exist when tests are generated.**

Extending operates at the XML attribute level, triggered by our parser when an entity contains the `extends` attribute.

For example:
* A test with `<test name="SampleTest" extends"ParentTest">` will create a second test with the changes listed in `SampleTest`.
* An action group with `<actionGroup name="SampleActionGroup" extends"ParentActionGroup">` will create a second Action Group with the changes listed in `SampleActionGroup`.


### Update a test step

**Example**

Create another test in which the url is changed for a stepKey

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

The result corresponds to both tests as listed below:

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

**Use case**: Add `checkOption` before `click` (`stepKey="clickLogin"`) and add `seeInCurrentUrl` after the `click` in the `LogInAsAdminTest` test (in the `.../Backend/Test/LogInAsAdminTest.xml` file):

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

The result corresponds to both tests as listed below:

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

### Update a test hook

**Use case**: In the `Before` hook add `checkOption` before `click` (`stepKey="clickLogin"`) and add `seeInCurrentUrl` after the `click` in the `LogInAsAdminTest` test (in the `.../Backend/Test/LogInAsAdminTest.xml` file):

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

The result corresponds to both tests as listed below:

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



## Extend action groups

Use [action group](./test/action-groups.html) extensions to add or update [actions](./test/actions.html) in your module.

### Update an action

**Use case**: The `CountProductA` test is only able to be used to count that product currently.
Modify the action group to use another product's selector:

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

The new action groups correspond to:

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

**Use case**: The `grabProducts` action group needs count the products grabbed after
Modify the action group to add steps for counting the object:

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

The new action groups correspond to:

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
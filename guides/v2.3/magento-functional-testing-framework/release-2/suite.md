---
layout: default
group: mftf
title: Suites
version: 2.2
github_link: magento-functional-testing-framework/release-2/suite.md
functional_areas:
 - Testing
mftf-release: 2.2.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

In the MFTF, you can group tests together into a `suite` in order to consolidate preconditions shared by multiple tests.

## Format

The format of a `<suite>` is:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
    <suite name="">
        <before>
        </before>
        <after>
        </after>
        <include>
            <test name=""/>
            <group name=""/>
            <module name="" file=""/>
        </include>
        <exclude>
            <test name=""/>
            <group name=""/>
            <module name="" file=""/>
        </exclude>
    </suite>
</suites>
```

## Principles

* `<suite>` name cannot match any existing `<group value="example"/>` tags.
* `<suite>` name cannot be `default` or `skip`.
** Tests that are not in any suite are generated under the reserved `default` suite
** Suite name `skip` is synonymous to including a test in the `<group value="skip"/>`.
* `<suite>` name must only contain letters, numbers, and underscores. 
* You must include one `<include>`, one `<exclude>` tag, or both.
* Inclusion of a `<before>` also requires a matching `<after>` tag, and vice-versa.

## Examples

## Perform test actions before Suite.

```xml
<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
    <suite name="WYSIWYG">
        <before>
            <actionGroup ref="LoginAsAdmin" stepKey="login"/>
            <amOnPage url="admin/admin/system_config/edit/section/cms/" stepKey="navigateToConfigurationPage" />
            <waitForPageLoad stepKey="wait1"/>
            <conditionalClick stepKey="expandWYSIWYGOptions" selector="{{ContentManagementSection.WYSIWYGOptions}}" dependentSelector="{{ContentManagementSection.CheckIfTabExpand}}" visible="true" />
            <waitForElementVisible selector="{{ContentManagementSection.EnableWYSIWYG}}" stepKey="waitForEnableWYSIWYGDropdown1" />
            <waitForElementVisible  selector="{{ContentManagementSection.EnableSystemValue}}" stepKey="waitForUseSystemValueVisible"/>
            <uncheckOption selector="{{ContentManagementSection.EnableSystemValue}}" stepKey="uncheckUseSystemValue"/>
            <selectOption selector="{{ContentManagementSection.EnableWYSIWYG}}" userInput="Enabled by Default" stepKey="selectOption1"/>
            <click selector="{{ContentManagementSection.WYSIWYGOptions}}" stepKey="collapseWYSIWYGOptions" />
            <click selector="{{ContentManagementSection.Save}}" stepKey="saveConfig" />
            <actionGroup ref="LogoutOfAdmin" stepKey="logout"/>
        </before>
        <after>
            <actionGroup ref="DisabledWYSIWYG" stepKey="disable"/>
        </after>
        <include>
            <group name="WYSIWYG"/>
        </include>
    </suite>
</suites>
```
In this example, a suite is declared with a name of `WYSIWYG`:
* This suite requires that the WYSIWYG before all tests run, so it performs webdriver actions to achieve this:
** It uses `actionGroup ref="LoginAsAdmin` which logs into the backend
** Then it navigates to the configurationPage, and goes through the necessary steps to enable WYSIWYG in the Magento instance.
** Lastly, it logs out of the admin backend, so that the first test can begin.
* In the `after`, it utilizes an actionGroup to disable WYSIWYG so that the Magento instance returns to its normal state.
* This suite includes all tests that contain the `annotation` `<group value="WYSIWYG"/>`.

## Execute bin/Magento commands before Suite

```xml
<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
    <suite name="Cache">
        <before>
            <magentoCLI stepKey="disableCache" command="cache:disable"/>
        </before>
        <after>
            <magentoCLI stepKey="enableCache" command="cache:enable"/>
        </after>
        <include>
            <test name="SomeCacheRelatedTest"/>
            <group name="CacheRelated"/>
        </include>
    </suite>
</suites>
```
In this example, a suite is declared with a name of `Cache`:
* This suite disables the Magento instance's cache entirely before running the tests it includes. It reenables it once all tests are finished running.
* This suite includes a specific test `SomeCacheRelatedTest`, as well as every `<test>` that includes the `annotation` `<group value="CacheRelated"/>`.

## Change Magento Configurations Before Suite

```xml
<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
    <suite name="PaypalConfiguration">
        <before>
            <createData entity="SamplePaypalConfig" stepKey="createSamplePaypalConfig"/>
        </before>
        <after>
            <createData entity="DefaultPayPalConfig" stepKey="restoreDefaultPaypalConfig"/>
        </after>
        <include>
            <module name="Catalog"/>
        </include>
        <exclude>
            <test name="PaypalIncompatibleTest"/>
        </exclude>
    </suite>
</suites>
```

In the above example, a suite is declared with a name of `PaypalConfiguration`:
* There is a `<before>` block that will persist a Paypal Configuration, allowing all tests in this suite to run in the now reconfigured Magento instance.
* There is also a corresponding `<after>` block that will delete the persisted configuration, returning Magento to its state prior to the suite.
* The suite then includes all tests in the Magento module `Catalog`.
* It also, however, excludes a specific test `PaypalIncompatibleTest`.


## Elements reference

### suite
`suite` contains before/after hooks, and a list of tests to `<include>` or `<exclude>`.
Can contain:
* A `<before>` and an `<after>`, that contain any test actions that can normally be called in `<test>` tags.
* An `<include>` or an `<exclude>`, that contain a list of tests to include or exclude.

Attributes|Type|Use|Description
---|---|---|---
`name`|string|required|Unique suite name identifier.

### before/after
`before/after` suite hooks, that execute once before and once after the entire suite executes.
* May contain any test actions that can normally be called in `<test>` tags.

### include/exclude
Tags used to specify what tests should or shouldn't belong in the declared suite.
May contain:
* `<test name="">` which names a specific `<test>`.
* `<group name="">` which refers to a declared `group` annotation.
* `<module name="">` which refers to all `test` files under a specific Magento Module.





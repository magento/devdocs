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

Suites are essentially groups of tests defined in the _\<magento 2 root\>/dev/tests/acceptance/tests/_suite/suite.xml_ file.
They enable you including, excluding, and grouping tests for a customized test run when you need it.
You can form suites using using separate tests, groups, and modules.

## Format

The format of a suite:

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

- A suite name:
  - must not match any existing group value. For example, the suite `<suite name="ExampleTest">` will fail during test run if any test contains in annotations `<group value="ExampleTest">`.
  - must not be `default` or `skip`. Tests that are not in any suite are generated under the `default` suite.
  The suite name `skip` is synonymous to including a test in the `<group value="skip"/>`.
  - can contain letters, numbers, and underscores.
  - should be upper case.
- A suite must contain at least one `<include>`, or one `<exclude>`, or both.
- Using `<before>` in a suite, you must add the corresponding `<after>` to restore the initial state of your testing instance.

## Preconditions

Using suites enables test writers to consolidate preconditions that are shared between tests.
The code lives in one place and executes once per suite.

* Use any action in [`<before>`] and [`<after>`] similar to using it in a [test].
* Clean up after suites just like after tests. The MFTF enforces the presence of both `<before>` and `<after>` if either is present.
* Do not reference in the subsequent tests to data that was persisted in the preconditions. Referencing to `$stepKey.field$` of these actions is not valid.

## Test writing

Since suites enable precondition consolidation, a common workflow for test writing is adding a new test to an existing suite.
Such test is generated in context of the suite that contains it.
You cannot isolate this test from preconditions of the suite; it cannot be used outside of the suite at the same time.

There are several ways to generate and execute your new test in the context of a suite:
- Edit the appropriate `suite.xml` to include your test only and run:
  ```bash
  vendor/bin/robo group <suiteName>
  ```
- Temporarily add a group to your test like `<group value="foo">` and run:
  ```bash
  vendor/bin/robo group foo
  ```
- To limit generation to your suite/test combination, run in conjunction with the above:
  ```bash
  vendor/bin/robo generate:suite <suite>
  ```
- To generate any combination of suites and tests, use [`generate:tests`] with the `--tests` flag.

## Examples

### Browser actions in preconditions

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
        </before>
        <after>
            <actionGroup ref="LoginAsAdmin" stepKey="login"/>
            <actionGroup ref="DisabledWYSIWYG" stepKey="disable"/>
        </after>
        <include>
            <group name="WYSIWYG"/>
        </include>
    </suite>
</suites>
```

This example declares a suite with the name `WYSIWYG`.
The suite requires enabling WYSIWYG before running tests:
1. Log in to the backend.
2. Navigate to the **Configuration** page.
3. Enable **WYSIWYG** in the Magento instance.

After the testing, the Magento instance returns to its state prior to the test:
1. Log back in.
2. Disable **WYSIWYG** so that 

This suite includes all tests that contain the `<group value="WYSIWYG"/>` annotation.

### Execute Magento CLI commands in preconditions

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

This example declares a suite with the name `Cache`.

Preconditions:
1. It disables the Magento instance cache entirely before running the included tests.
2. After the testing, it re-enables the cache.

The suite includes a specific test `SomeCacheRelatedTest` and every `<test>` that includes the `<group value="CacheRelated"/>` annotation.

### Change Magento configurations in preconditions

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

This example declares a suite with the name `PaypalConfiguration`:
* `<before>` block persists a Paypal Configuration enabling all tests in this suite to run under the newly reconfigured Magento instance.
* `<after>` block deletes the persisted configuration, returning Magento to its initial state.
* The suite includes all tests from the `Catalog` module, except the `PaypalIncompatibleTest` test.

## Elements reference

### suite {#suite-tag}

`suite` contains before/after hooks, and a list of tests to `<include>` or `<exclude>`.
Can contain:
* A `<before>` and an `<after>`, that contain any test actions that can normally be called in `<test>` tags.
* An `<include>` or an `<exclude>`, that contain a list of tests to include or exclude.

### before {#before}

`before/after` suite hooks, that execute once before and once after the entire suite executes.
* May contain any test actions that can normally be called in `<test>` tags.
* If there is a failure in the before hook of a suite, *none of the tests in the suite are run*. 
    * Additionally, screenshots are not saved if a failure is encountered in the suite's hook. To troubleshoot these failures, you must run the suite locally.

### after (#after)

### include {#include}

Tags used to specify what tests should or shouldn't belong in the declared suite.
May contain:
* `<test name="">` which names a specific `<test>`.
* `<group name="">` which refers to a declared `group` annotation.
* `<module name="">` which refers to all `test` files under a specific Magento Module.

Attributes|Type|Use|Description
---|---|---|---
`name`|string|required|Unique suite name identifier.

### exclude {#exclude}


<!-- Link definitions -->
[`generate:tests`]: commands/robo.html#generate
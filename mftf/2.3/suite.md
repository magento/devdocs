---
mftf-release: 2.3.9
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/suite.html
---

# Suites

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Suites are essentially groups of tests that run in the specific conditions (preconditions and postconditions).
They enable you including, excluding, and grouping tests for a customized test run when you need it.
You can form suites using separate tests, groups, and modules.

Each suite must be defined in the `<magento 2 root>/dev/tests/acceptance/tests/_suite/suite.xml` file.
The generated tests for each suite go into a separate directory under `<magento 2 root>/dev/tests/acceptance/tests/functional/Magento/FunctionalTest/_generated/`.
By default, all generated tests are stored in the _default_ suite under `.../Magento/FunctionalTest/_generated/default/`

{%
include note.html
type="info"
content="If a test is generated into at least one custom suite, it will not appear in the _default_ suite."
%}

## Format

The format of a suite:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
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
  - must not match any existing group value.
  For example, the suite `<suite name="ExampleTest">` will fail during test run if any test contains in annotations `<group value="ExampleTest">`.
  - must not be `default` or `skip`. Tests that are not in any suite are generated under the `default` suite.
  The suite name `skip` is synonymous to including a test in the `<group value="skip"/>`, which will be deprecated in MFTF 3.0.0.
  - can contain letters, numbers, and underscores.
  - should be upper camel case.
- A suite must contain at least one `<include>`, or one `<exclude>`, or both.
- Using `<before>` in a suite, you must add the corresponding `<after>` to restore the initial state of your testing instance.

## Conditions

Using suites enables test writers to consolidate conditions that are shared between tests.
The code lives in one place and executes once per suite.

- Set up preconditions and postconditions using [actions] in [`<before>`] and [`<after>`] correspondingly, just similar to use in a [test].
- Clean up after suites just like after tests.
  The MFTF enforces the presence of both `<before>` and `<after>` if either is present.
- Do not reference in the subsequent tests to data that was persisted in the preconditions.
  Referencing to `$stepKey.field$` of these actions is not valid.

## Test writing

Since suites enable precondition consolidation, a common workflow for test writing is adding a new test to an existing suite.
Such test is generated in context of the suite that contains it.
You cannot isolate this test from preconditions of the suite; it cannot be used outside of the suite at the same time.

There are several ways to generate and execute your new test in the context of a suite:

- Edit the appropriate `suite.xml` to include your test only and run:

  ```bash
  vendor/bin/mftf run:group <suiteName>
  ```

- Temporarily add a group to your test like `<group value="foo">` and run:

  ```bash
  vendor/bin/mftf run:group foo
  ```

- To limit generation to your suite/test combination, run in conjunction with the above:

  ```bash
  vendor/bin/mftf generate:suite <suite>
  ```

- To generate any combination of suites and tests, use [`generate:tests`] with the `--tests` flag.

## Examples

### Enabling/disabling WYSIWYG in suite conditions

<!-- {{raw}} -->

```xml
<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
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

<!-- {{endraw}} -->
This example declares a suite with the name `WYSIWYG`.
The suite enables WYSIWYG *before* running tests.
It performs the following steps:

1. Log in to the backend.
2. Navigate to the **Configuration** page.
3. Enable **WYSIWYG** in the Magento instance.

*After* the testing, the suite returns the Magento instance to the initial state disabling WYSIWYG:

1. Log back in.
2. Disable **WYSIWYG** so that

This suite includes all tests that contain the `<group value="WYSIWYG"/>` annotation.

### Execute Magento CLI commands in suite conditions

```xml
<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
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

### Change Magento configurations in suite conditions

```xml
<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Suite/etc/suiteSchema.xsd">
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

- `<before>` block persists a Paypal Configuration enabling all tests in this suite to run under the newly reconfigured Magento instance.
- `<after>` block deletes the persisted configuration, returning Magento to its initial state.
- The suite includes all tests from the `Catalog` module, except the `PaypalIncompatibleTest` test.

## Elements reference

### suites {#suites-tag}

The root element for suites.

### suite {#suite-tag}

A set of "before" and "after" preconditions, and test filters to include and exclude tests in the scope of suite.

Attributes|Type|Use|Description
---|---|---|---
`name`|string|required|Unique suite name identifier.
`remove`|boolean|optional|Removing the suite during merging.

It can contain `<before>`, `<after>`, `<include>`, and `<exclude>`.

### before {#before-tag}

A suite hook with preconditions that executes once before the suite tests.

It may contain test steps with any [actions] and [action groups].

{% include note.html
type="warning"
content="Tests in the suite are not run and screenshots are not saved in case of a failure in the before hook.
To troubleshoot the failure, run the suite locally."
%}

### after {#after-tag}

A suite hook with postconditions executed once after the suite tests.

It may contain test steps with any [actions] and [action groups].

### include {#include-tag}

A set of filters that you can use to specify which tests to include in the test suite.

It may contain filters by:

- test which names a specific `<test>`.
- group which refers to a declared `group` annotation.
- module which refers to `test` files under a specific Magento Module.

The element can contain [`<test>`], [`<group>`], and [`<module>`].

### exclude {#exclude-tag}

A set of filters that you can use to specify which tests to exclude in the test suite.

There two types of behavior:

1. Applying filters to the included tests when the suite contains [`<include>`] filters.
   The MFTF will exclude tests from the previously included set and generate the remaining tests in the suite.
2. Applying filter to all tests when the suite does not contain [`<include>`] filters.
   The MFTF will generate all existing tests except the excluded.
   In this case, the custom suite will contain all generated tests except excluded, and the _default_ suite will contain the excluded tests only.

It may contain filters by:

- test which names a specific `<test>`.
- group which refers to a declared `group` annotation.
- module which refers to `test` files under a specific Magento Module.

The element may contain [`<test>`], [`<group>`], and [`<module>`].

### test {#test-tag}

Attributes|Type|Use|Description
---|---|---|---
`name`|string|required|Filtering a test by its name.
`remove`|boolean|optional|Removing the filter during merging.

### group {#group-tag}

Attributes|Type|Use|Description
---|---|---|---
`name`|string|required|Filtering tests by the `<group>` annotation.
`remove`|boolean|optional|Removing the filter during merging.

### module {#module-tag}

Attributes|Type|Use|Description
---|---|---|---
`name`|string|required|Filtering tests by their location in the corresponding module.
`file`|string|optional|Filtering a specific test file in the module.
`remove`|boolean|optional|Removing the filter during merging.

<!-- Link definitions -->
[actions]: test/actions.html
[action groups]: test/action-groups.html
[`<after>`]: #after-tag
[`<before>`]: #before-tag
[`generate:tests`]: commands/mftf.html#generatetests
[test]: test.html
[`<test>`]: #test-tag
[`<group>`]: #group-tag
[`<module>`]: #module-tag
[`<include>`]: #include-tag
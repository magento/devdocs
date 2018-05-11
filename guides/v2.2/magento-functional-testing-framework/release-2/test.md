---
group: mftf
title: Test
version: 2.2
github_link: magento-functional-testing-framework/release-2/test.md
functional_areas:
 - Testing
mftf-release: 2.2.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Test cases in the Magento Functional Testing Framework (MFTF) are defined in XML as [`<tests>`](#test-tag).
`<tests>` is a [Codeception test container](https://codeception.com/docs/07-AdvancedUsage) that contains multiple individual tests with test metadata and before and after actions.

MFTF `<tests>` is considered a sequence of actions with associated parameters.
Any failed [assertion](./test/assertions.html) within a test constitutes a failed test.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
`<before>` and `<after>` hooks are not global within `<tests>` like in MFTF 1.0.
They only apply to the `<test>` in which they are declared.

The steps in `<after>` are run in both successful **and** failed test runs.
</div>

The following diagram shows the structure of an MFTF test case:

{% include_relative img/test-dia.svg %}

## Format

The format of `<tests>` is:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<tests xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/magento2-functional-testing-framework/src/Magento/FunctionalTestingFramework/Test/etc/testSchema.xsd">
        <test name="">
            <annotations>
                <!-- TEST ANNOTATIONS -->
            </annotations>
            <before>
                <!-- ACTIONS AND ACTION GROUPS PERFORMED BEFORE THE TEST -->
            </before>
            <after>
                <!-- ACTIONS AND ACTION GROUPS PERFORMED AFTER THE TEST -->
            </after>
            <!-- TEST ACTIONS, ACTION GROUPS, AND ASSERTIONS-->
        </test>
    </tests>
</config>
```

## Principles

The following conventions apply to MFTF tests:

* All names within the framework are in the CamelCase format.
* `<test>` name must be alphanumeric.
* Each action and action group has its own identifier `<stepKey>` for reference purposes.
* A test may have any number of [assertions](./test/assertions.html), at any point within the `<test>`.
* The file name and `<test>` name are equal.
* If `<test>` is included in `<suite>`, it **cannot be generated in isolation** to the rest of the contents of the suite (see [suites](./suite.html) for details).

Multiple <test> tags per XML file can make it hard to find and organize tags. To simplify, we generate one `test.php` file per <test> tag provided, though we support both single and multiple <test> tags per XML file.

## Elements reference

There are several XML elements that are used in `<tests>` in the MFTF.

### tests {#tests-tag}

`<tests>` is a container for multiple tests. It is a group of test methods that define test flows within a test case.

`<tests>` must contain at least one [`<test>`](#test-tag).


### test {#test-tag}

`<test>` is a set of steps, including [actions](./test/actions.html) and [assertions](./test/assertions.html). It is a sequence of test steps that define test flow within a test method.


Attribute|Type|Use|Description
---|---|---|---
`name`|string|optional| A test identifier used while merging.
`remove`|boolean|optional|Set `true` to remove the test when merging.

`<test>` may also contain [`<annotations>`](#annotations-tag), [`<before>`](#before-tag), [`<after>`](#after-tag), any [action](./test/actions.html), or [`<actionGroup>`](#actiongroup-tag).

### annotations {#annotations-tag}

Annotations are supported by both [Codeception](http://codeception.com/docs/07-AdvancedUsage) and [Allure](https://github.com/allure-framework/).

Codeception annotations typically provide metadata and are able to influence test selection.
Allure annotations provide metadata for reporting.

See more about [Annotations](./test/annotations.html).

### before {#before-tag}

`<before>` wraps the steps to perform before the [`<test>`](#test-tag).

`<before>` may contain these child elements:

 * Any [`<action>`](./test/actions.html)
 * [`<actionGroup>`](#actiongroup-tag)

### after {#after-tag}

`<after>` wraps the steps to perform after the [`<test>`](#test-tag).
The steps are run in both successful **and** failed test runs.

`<after>` may contain:

 * Any [`<action>`](./test/actions.html)
 * [`<actionGroup>`](#actiongroup-tag)

### actionGroup {#actiongroup-tag}

`<actionGroup>` calls a corresponding [action group](./test/action-groups.html).

Attribute|Type|Use|Description
---|---|---|---
`ref`|string|required|References the required action group by its `name`.
`stepKey`|string|required| Identifies the element within `<test>`.
`before`|string|optional| `<stepKey>` of an action or action group that must be executed next while merging.
`after`|string|optional| `<stepKey>` of an action or action group that must be executed one step before the current one while merging.

`<actionGroup>` may contain [`<argument>`](#argument-tag).

### argument {#argument-tag}

`<argument>` sets an argument that is used in the parent [`<actionGroup>`](#actiongroup-tag).

Attribute|Type|Use
---|---|---
`name`|string|optional| Name of the argument.
`value`|string|optional| Value of the argument.

See more about [Action groups](./test/action-groups.html).

---
group: php-developer-guide
title: MFTF test versioning and backward compatibility policy
---

## Goals and requirements

1. Release MFTF tests as a separate Magento package on repo.magento.com.
1. Define the versioning strategy for MFTF test packages.
1. Outline what is considered a backward incompatible change to MFTF tests.
1. List of what should be implemented.

## Backwards compatibility definition for MFTF tests

When a test undergoes changes, but achieves the same testing results as before and remains compatible with potential test customizations, this is defined as a 'backwards compatible' change.

Types of changes:

-  **Test Flow change (Test/ActionGroup)** - A backwards compatible modification of a test flow would not diminish the original set of actions in the test. Some changes may change an action's sequence (behavior), but they allow any extension to achieve the same test results without changing the test extension (e.g a 'merge file').
-  **Test Entity change (Data/Section/Page/Metadata)** - Compatible modifications of entities are 1) adding new entities or 2) updating a `value` of an existing entity in a way where the test will **NOT** require updates.
-  **Test Annotation change** - Annotations can be changed without limitation and will always be considered a backward compatible change, but removing or changing a `<group />` annotation will be considered a backward incompatible change.
-  Changes which delete and/or rename a (Test/Action Group/Data/Metadata/Page/Section/Action)'s `id` attribute will be considered a backward incompatible change. Changing a reference to a data entity will also be considered a backward incompatible change.

## Versioning policy

The approach of defining what each release should include was taken from [Semantic Versioning](https://semver.org/).

   3-component version numbers
   ---------------------------
   ```text
    X.Y.Z
    | | |
    | | +-- Backward Compatible changes (bug fixes)
    | +---- Backward Compatible changes (new features)
    +------ Backward Incompatible changes
   ```

### Z release

Patch version **Z** MUST be incremented if only backward compatible changes to tests are introduced.
For instance: a fix which aims to resolve test flakiness. This can be done by updating an unreliable selector, adding a `wait` to an element, or updating a data entity value.

### Y release

Minor version **Y** MUST be incremented if a new, backwards compatible test or test entity is introduced.
It MUST be incremented if any test or test entity is marked as `deprecated`.
It MAY include patch level changes. Patch version MUST be reset to 0 when the minor version is incremented.

### X release

Major version **X** MUST be incremented if any backwards incompatible changes are introduced to a test or test entity.
It MAY include minor and patch level changes. Patch and minor version MUST be reset to 0 when the major version is incremented.

## Implementation tasks

1. Add Semantic Version analyzer to be able automatically define the release type of the MFTF tests package.
1. Update publication infrastructure to exclude tests from `magento2-module` package type.
1. Introduce publication functionality for publishing `magento2-test-module` package type.
1. Create a metapackage with test packages specifically for each Magento edition.

## Version increase matrix

|Entity Type|Change|Version Increase|
|---|---|---|
|ActionGroup|`<actionGroup>` added|MINOR
| |`<actionGroup>` removed|MAJOR
| |`<actionGroup>` `<action>` added|MINOR
| |`<actionGroup>` `<action>` removed|MAJOR
| |`<actionGroup>` `<action>` type changed|PATCH
| |`<actionGroup>` `<action>` attribute changed|PATCH
| |`<actionGroup>` `<argument>` with `defaultValue`added|MINOR
| |`<actionGroup>` `<argument>` without `defaultValue` added|MAJOR
| |`<actionGroup>` `<argument>` removed|MAJOR
| |`<actionGroup>` `<argument>` changed|MAJOR
| |`<actionGroup>` `<remove>` `<action>` added|MAJOR
| |`<actionGroup>` `<remove>` `<action>` removed|MAJOR
|Data|`<entity>` added|MINOR
| |`<entity>` removed|MAJOR
| |`<entity>` `<array>` added|MINOR
| |`<entity>` `<array>` removed|MAJOR
| |`<entity>` `<array>` `<item>` removed|PATCH
| |`<entity>` `<data>` added|MINOR
| |`<entity>` `<data>` removed|MAJOR
| |`<entity>` `<required-entity>` added|MAJOR
| |`<entity>` `<required-entity>` removed|MAJOR
| |`<entity>` `<var>` added|MAJOR
| |`<entity>` `<var>` removed|MAJOR
| |`<entity>` type added|MINOR
| |`<entity>` type removed|MAJOR
| |`<entity>` type changed|MAJOR
|Metadata|`<operation>` added|MINOR
| |`<operation>` removed|MAJOR
| |`<operation>` changed|MINOR
| |`<operation>` child element added|MINOR
| |`<operation>` child element removed|MAJOR
|Page|`<page>` added|MINOR
| |`<page>` removed|MAJOR
| |`<page>` `<section>` added|MINOR
| |`<page>` `<section>` removed|MAJOR
|Section|`<section>` added|MINOR
| |`<section>` removed|MAJOR
| |`<section>` `<element>` added|MINOR
| |`<section>` `<element>` removed|MAJOR
| |`<section>` `<element>` `selector` changed|PATCH
| |`<section>` `<element>` `type` changed|PATCH
| |`<section>` `<element>` `parameterized` changed|MAJOR
|Test|`<test>` added|MINOR
| |`<test>` removed|MAJOR
| |`<test>` `<action>` added|MINOR
| |`<test>` `<action>` removed|MAJOR
| |`<test>` `<action>` changed|PATCH
| |`<test>` `<action>` sequence changed|MAJOR
| |`<test>` `<action>` type (`click`, `fillField`, etc) changed|PATCH
| |`<test>` `<actionGroup>` `ref` changed|MINOR
| |`<test>` `<before/after>` `<action>` added|MINOR
| |`<test>` `<before/after>` `<action>` removed|MAJOR
| |`<test>` `<before/after>` `<action>` changed|PATCH
| |`<test>` `<before/after>` `<action>` sequence changed|MAJOR
| |`<test>` `<before/after>` `<action>` type (`click`, `fillField`, etc) changed|PATCH
| |`<test>` `<before/after>` `<actionGroup>` `ref` changed|MINOR
| |`<test>` `<annotations>` `<annotation>` added|PATCH
| |`<test>` `<annotations>` `<annotation>` changed|PATCH
| |`<test>` `<annotations>` `<annotation>` GROUP removed|MAJOR
| |`<test>` `<remove>` `<action>` added|MAJOR
| |`<test>` `<remove>` `<action>` removed|MAJOR
|Suite|`<suite>` added|MINOR
| |`<suite>` removed|MAJOR
| |`<suite>` `<include/exclude>` `<group/test/module>` added|PATCH
| |`<suite>` `<include/exclude>` `<group/test/module>` removed|PATCH
| |`<suite>` `<before/after>` `<action>` added|MINOR
| |`<suite>` `<before/after>` `<action>` removed|MAJOR
| |`<suite>` `<before/after>` `<remove>` `<action>` added|MAJOR
| |`<suite>` `<before/after>` `<remove>` `<action>` removed|MAJOR
| |`<suite>` `<before/after>` `<action>` changed|PATCH
| |`<suite>` `<before/after>` `<action>` sequence changed|MAJOR
| |`<suite>` `<before/after>` `<action>` type (`click`, `fillField`, etc) changed|PATCH
| |`<suite>` `<before/after>` `<actionGroup>` `ref` changed|MINOR

---------------------------

 ⃰ - `<action>` refers to any of the available [MFTF Actions](https://github.com/magento/magento2-functional-testing-framework/blob/develop/docs/test/actions.md).

---
layout: default
group: mftf
title: Annotations
version: 2.2
github_link: magento-functional-testing-framework/release-2/test/annotations.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Annotations are essentially comments in the code. In PHP, they all are marked by a preceding `@` symbol.

Within [test methods](../test.html#test-tag), annotations are contained within their own node.

## Principles

The following conventions apply to MFTF annotations:

* All annotations are within an `<annotations>` element.
* Each element within corresponds to a supported annotation type.
* There is no distinction made in XML between Codeception annotations and Allure annotations.
* Each annotation contains only one value.
If multiple annotation values are supported and required each value requires a separate annotation.

## Example

```xml
<annotations>

       <features value="Category Creation"/>

       <title value="Create a Category via Admin"/>

       <group value="category"/>

</annotations>
```

## Elements reference

### description

The `<description>` element is an implementation of a [`@Description`](https://devhub.io/zh/repos/allure-framework-allure-phpunit#extended-test-class-or-test-method-description) Allure tag; Metadata for report.

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<description value="Add Catalog via Admin"/>
```

Generated PHP code:

``` php?start_inline=1
@Description("Add Catalog via Admin")
```

### features

The `<features>` element is an implementation of a [`@Features`](https://devhub.io/zh/repos/allure-framework-allure-phpunit#map-test-classes-and-test-methods-to-features-and-stories) Allure tag.

`<features>` sets a string that will be displayed as a feature within the Allure report. Tests under the same feature are grouped together in the report.

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<features value="Catalog"/>
<features value="Add/Edit"/>
```

Generated PHP code:

``` php?start_inline=1
@Features({"Catalog", "Add/Edit"})
```

### group

The `<group>` element is an implementation of a [`@group`](http://codeception.com/docs/07-AdvancedUsage#Groups) Codeception tag.

`<group>` specifies a string to identify and collect tests together. Any test can be a part of multiple groups. The purpose of grouping is to create a set of test for a purpose, such as all cart tests or all slow tests) and run them together.

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<group value="catalog"/>
```

Generated PHP code:

``` php?start_inline=1
@group catalog
```

### return

The `<return>` element is an implementation of a [`@return`](http://codeception.com/docs/07-AdvancedUsage#Examples) Codeception tag. It specifies what is returned from a test execution.

Attribute|Type|Use
---|---|--
`value`|string|required


#### Example

```xml
<return value="void"/>
```

Generated PHP code:

``` php?start_inline=1
@return void
```

### severity

The `<return>` element is an implementation of a [`@Severity`](https://devhub.io/zh/repos/allure-framework-allure-phpunit#set-test-severity) Allure tag; Metadata for report.

Attribute|Type|Use|Acceptable values
---|---|---|---
`value`|string|required|`"BLOCKER"`, `"CRITICAL"`, `"NORMAL"`, `"MINOR"`, `"TRIVIAL"`

#### Example

```xml
<severity value="CRITICAL"/>
```

Generated PHP code:

``` php?start_inline=1
@Severity(level = SeverityLevel::CRITICAL)
```

### stories

The `<stories>` element is an implementation of a [`@Stories`](https://devhub.io/zh/repos/allure-framework-allure-phpunit#map-test-classes-and-test-methods-to-features-and-stories) Allure tag. It has the same functionality as [`features`](#features), within the Story report group.

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<stories value="Add Catalog"/>
<stories value="Edit Catalog"/>
```

Generated PHP code:

``` php?start_inline=1
@Stories({"Add Catalog", "Edit Catalog"})
```

### testCaseId

The `<testCaseId>` element is an implementation of a [`@TestCaseId`](https://github.com/allure-framework/allure1/wiki/Test-Case-ID) Allure tag. It specifies a ZephyrId for a test.

If the linkage is set up correctly in the Allure config, the test will have a hyperlink to the Zephyr test case in the report.

Learn more about [setup instructions in Allure](https://github.com/allure-framework/allure1/wiki/Test-Case-ID).

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<testCaseId value="#"/>
```

Generated PHP code:

``` php?start_inline=1
@TestCaseId("#")
```

### useCaseId

The `<useCaseId>` element is an implementation of a `@UseCaseId` custom tag. It specifies the use case ID for a test and is ignored by Allure configuration at the moment, as Allure implementation is not complete.

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<useCaseId value="USECASE-1"/>
```
Generated PHP code:

``` php?start_inline=1
@UseCaseId("USECASE-1")
```

### title

The `<title>` element is an implementation of [`@Title`](https://devhub.io/zh/repos/allure-framework-allure-phpunit#human-readable-test-class-or-test-method-title) Allure tag; Metadata for report.

Attribute|Type|Use
---|---|--
`value`|string|required

#### Example

```xml
<title value="Add Catalog"/>
```

Generated PHP code:

``` php?start_inline=1
@Title("Add Catalog")
```

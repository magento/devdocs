---
group: mftf
title: Annotations in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/cest/annotations.md
functional_areas:
 - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/cest/annotations.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

This topic contains a reference list of available annotations in the MFTF cests.

## Overview

Annotations are essentially comments in the code.
(In PHP, they all are marked by a preceding `@` symbol.)
Within an XML test file, annotations are contained within their own node.

## Principles

* All annotations are within an `<annotations>` tag
* Each tag within corresponds to a supported annotation type
* There is no distinction made in XML between Codeception annotations and Allure annotations
* Each annotation tag contains only one value.
If multiple annotation values are supported and required each value requires a separate tag.

## Example

```xml
<annotations>
 
       <features value="Category Creation"/>

       <title value="Create a Category via Admin"/>

       <group value="category"/>

       <env value="chrome"/>

       <env value="firefox"/>

       <env value="phantomjs"/>
 
</annotations>
```

## Reference

### description

_Implementation of an Allure tag [`@Description`]_

Metadata for report.

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<description value="Add Catalog via Admin"/>
```

Generated PHP code:

``` php?start_inline=1
@Description("Add Catalog via Admin")
```

***
***

### env

_Implementation of a Codeception tag [`@env`]_

Specifies the web driver under which the test can run.
There can be multiple `env` annotations to show that the test is compatible with multiple web drivers (e.g Chrome, Firefox, PhantomJS).

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<env value="chrome"/>
```

Generated PHP code:

```php?start_inline=1
@env chrome
```

***
***

### features

_Implementation of an Allure tag [`@Features`]_

Sets a string that will be displayed as a **Feature** within the Allure report.
Tests under the same feature are grouped together in the report.

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<features value="Catalog"/>
<features value="Add/Edit"/>
```

Generated PHP code:

``` php?start_inline=1
@Features({"Catalog", "Add/Edit"})
```

***
***

### group

_Implementation of a Codeception tag [`@group`]_

Specifies a string to identify and collect tests together.
Any test can be a part of multiple groups.
The purpose of grouping is to create a set of test for a purpose (e.g. all Cart tests, all Slow tests) and run them together.

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<group value="catalog"/>
```

Generated PHP code:

``` php?start_inline=1
@group catalog
```

***
***

### return

_Implementation of a Codeception tag [`@return`]_

Specifies what is returned from a test execution.

Attribute|Type|Use
---|---|--
value|string|required


#### Example 

```xml
<return value="void"/>
```

Generated PHP code:

``` php?start_inline=1
@return void
```

***
***

### severity

_Implementation of an Allure tag [`@Severity`]_

Metadata for report.

Attribute|Type|Use|Acceptable values
---|---|---|---
value|string|required|`"BLOCKER"`, `"CRITICAL"`, `"NORMAL"`, `"MINOR"`, `"TRIVIAL"`

#### Example 

```xml
<severity value="CRITICAL"/>
```

Generated PHP code:

``` php?start_inline=1
@Severity(level = SeverityLevel::CRITICAL)
```

***
***

### stories

_Implementation of an Allure tag [`@Stories`]_

Same functionality as [`features`](#features), within the **Story** report group.

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<stories value="Add Catalog"/>
<stories value="Edit Catalog"/>
```

Generated PHP code:

``` php?start_inline=1
@Stories({"Add Catalog", "Edit Catalog"})
```

***
***

### testCaseId

_Implementation of an Allure tag [`@TestCaseId`]_

Specifies a ZephyrId for a test.
If the linkage is set up correctly in Allure config, the test will have a hyperlink to the Zephyr test case in the report.

[Lean more about setup instructions in Allure](https://github.com/allure-framework/allure1/wiki/Test-Case-ID)

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<testCaseId value="#"/>
```

Generated PHP code:

``` php?start_inline=1
@TestCaseId("#")
```

***
***

### useCaseId

_Implementation of a custom tag `@UseCaseId`_

Specifies Use Case Id for a test.

Ignored by Allure configuration at the moment, as Allure implementation is not complete.

Attribute|Type|Use
---|---|--
value|string|required

#### Example

```xml
<useCaseId value="USECASE-1"/>
```
Generated PHP code:

``` php?start_inline=1
@UseCaseId("USECASE-1")
```

***
***

### title

_Implementation of an Allure tag [`@Title`]_

Metadata for report.

Attribute|Type|Use
---|---|--
value|string|required

#### Example 

```xml
<title value="Add Catalog"/>
```

Generated PHP code:

``` php?start_inline=1
@Title("Add Catalog")
```

<!-- LINKS DEFINITIONS-->

[`@Description`]: https://devhub.io/zh/repos/allure-framework-allure-phpunit#extended-test-class-or-test-method-description
[`@env`]: http://codeception.com/docs/07-AdvancedUsage#Environments
[`@Features`]: https://devhub.io/zh/repos/allure-framework-allure-phpunit#map-test-classes-and-test-methods-to-features-and-stories
[`@group`]: http://codeception.com/docs/07-AdvancedUsage#Groups
[`@return`]: http://codeception.com/docs/07-AdvancedUsage#Examples
[`@Severity`]: https://devhub.io/zh/repos/allure-framework-allure-phpunit#set-test-severity
[`@Stories`]: https://devhub.io/zh/repos/allure-framework-allure-phpunit#map-test-classes-and-test-methods-to-features-and-stories
[`@TestCaseId`]: https://github.com/allure-framework/allure1/wiki/Test-Case-ID
[`@Title`]: https://devhub.io/zh/repos/allure-framework-allure-phpunit#human-readable-test-class-or-test-method-title

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
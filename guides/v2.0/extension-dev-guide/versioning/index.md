---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Versioning and compatibility
menu_title: Versioning and compatibility
menu_order: 1000
version: 2.0
github_link: extension-dev-guide/versioning/index.md
---

The Magento Platform and Magento {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}Module{% endglossarytooltip %} releases have their own unique version number.

A change in the version for the Magento Platform indicates a patch or feature release.
This version change does not reflect the nature of the changes in the code base.

Magento Modules follow Magento's Module Versioning Policy.
The policy itself follows [Semantic Versioning][0]{:target="_blank"} standards.

The `version` field in the module's [composer.json][1] file specifies the module version and consists of three numbers in the following format:

    MAJOR.MINOR.PATCH

## Public vs private code changes

A Magento Module's codebase consists of public and private code.

Changes in public code always trigger MINOR or MAJOR version bumps.

In most cases, modifications to private code will trigger PATCH version bumps.
On rare occasions, if the Magento development team made significant modifications to private code, they will bump the MINOR or MAJOR version.

Third-party modules should not use or modify private code.
If this is unavoidable, you must depend on the patch version of the core modules used.

## API and customization points

Public code includes Public {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} (Application Programming Interface) and Public Customization Points.

Modules call APIs to create new application scenarios.
Modifications that break the API will trigger a bump in a module's MAJOR version.

Modules customize or replace Customization Points to customize existing application scenarios.
Modifications that break Customization Points will trigger a bump in a module's MINOR version.

An interface or a {% glossarytooltip 058b2be4-3247-4cb0-860d-6292ce75d1f0 %}virtual type{% endglossarytooltip %} can represent both API and Customization Point.

This policy allows third-party module developers to declare more granular dependencies depending on their module's interaction with Magento modules.

### Version dependencies 

The following table lists common use cases for API/customization points and the version dependency for each use case.
Use this table to set the appropriate version dependency on a module based on how you use its API/customization points.

| API/Customization Point                                     | Third-party Use Case                                                | Version Dependency |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **PHP Interface** (marked with `@api`)                      | Inject in a constructor and/or call methods                         | MAJOR              |
|                                                             | Implement the interface                                             | MINOR              |
|                                                             | Re-define the interface preference in `di.xml`                      | MINOR              |
|                                                             | Add a plugin to the interface                                       | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **PHP Class** (marked with `@api`)                          | Inject in a constructor                                             | MAJOR              |
|                                                             | Extend from an abstract class                                       | MAJOR              |
|                                                             | Add a plugin to the class                                           | MAJOR              |
|                                                             | Configure class preference in `di.xml`                              | MAJOR              |
|                                                             | Configure constructor argument in `di.xml`                          | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **JavaScript Interface** (marked with `@api`)               | Inject in a constructor and/or call methods                         | MAJOR              |
|                                                             | Implement the interface                                             | MINOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Javascript class** (marked with `@api`)                   | Inject in a constructor                                             | MAJOR              |
|                                                             | Extend from a class                                                 | MINOR              |
|                                                             | Override a method                                                   | MINOR              |
|                                                             | Subscribe to an {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %}                                               | MINOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Virtual Type**                                            | Configure a virtual type in the `di.xml` file as a class dependency | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **URL Paths**                                               | Link to from custom pages                                           | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Console commands and their arguments**                    | Called in custom shell scripts                                      | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Less variables and mixins**                               | Use in LESS declarations                                            | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Message queue topics and data types**                     | Consume a topic/message                                             | MINOR              |
|                                                             | Publish an existing topic                                           | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Layout handles declared by modules**                      | Instance blocks added                                               | MAJOR              |
|                                                             | Blocks and containers moved/removed                                 | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Static and dynamic events triggered by a component**      | Subscribing to event                                                | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **XML configuration type**                                  | Provide additional configuration to the configuration type          | MAJOR              |
|                                                             | Extend existing XSD                                                 | MINOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Structure of System Configuration fields used by module** | Configure module through System Configuration values                | MAJOR              |
|                                                             | Read system configuration using config path                         | MAJOR              |
| ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| **Database structure**                                      | Read/write to a table                                               | MAJOR              |
|                                                             | Add a column to a table                                             | MINOR              |
|                                                             | Declare a foreign key on a module table                             | MAJOR              |
|                                                             | Declare a trigger on a module table                                 | MAJOR              |
|                                                             | Read from table or write to table from a temporary table            | PATCH              |

### Version bump scenarios

This table lists code change scenarios and which version number it affects.
Use this table to understand what changes Magento can make and what version number gets bumped for that change.

| API/Customization Point                                     | Code Change                                                                                          | Version Change |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **PHP Interface** (marked with `@api`)                      | New interface                                                                                        | MINOR          |
|                                                             | New method added                                                                                     | MINOR          |
|                                                             | Interface removed                                                                                    | MAJOR          |
|                                                             | Method removed                                                                                       | MAJOR          |
|                                                             | New required method argument                                                                         | MAJOR          |
|                                                             | Removed the last argument for a method                                                               | MINOR          |
|                                                             | Changed a method signature (excluding last argument removal)                                         | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **PHP Class** (marked with `@api`)                          | New Class                                                                                            | MINOR          |
|                                                             | New method added                                                                                     | MINOR          |
|                                                             | Class removed                                                                                        | MAJOR          |
|                                                             | Method removed                                                                                       | MAJOR          |
|                                                             | New required method argument                                                                         | MAJOR          |
|                                                             | Removed a non-last argument                                                                          | MAJOR          |
|                                                             | New required constructor object argument                                                             | MINOR          |
|                                                             | New required constructor scalar argument (without pre-configured value)                              | MAJOR          |
|                                                             | Removed a non-last constructor argument                                                              | MAJOR          |
|                                                             | Removed a last constructor argument                                                                  | PATCH          |
|                                                             | Changed format of the returned method result                                                         | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **JavaScript Interface** (marked with `@api`)               | New interface                                                                                        | MINOR          |
|                                                             | New method added                                                                                     | MINOR          |
|                                                             | Interface removed                                                                                    | MAJOR          |
|                                                             | Method removed                                                                                       | MAJOR          |
|                                                             | New required method argument                                                                         | MAJOR          |
|                                                             | Changed method signature                                                                             | MAJOR          |
|                                                             | Last argument added                                                                                  | MINOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Javascript class** (marked with `@api`                    | New class                                                                                            | MINOR          |
|                                                             | New method added                                                                                     | MINOR          |
|                                                             | Class removed                                                                                        | MAJOR          |
|                                                             | Method removed                                                                                       | MAJOR          |
|                                                             | New required method argument                                                                         | MAJOR          |
|                                                             | New last method argument                                                                             | MINOR          |
|                                                             | New event                                                                                            | MINOR          |
|                                                             | Renamed event                                                                                        | MAJOR          |
|                                                             | Removed event                                                                                        | MAJOR          |
|                                                             | New event property                                                                                   | MINOR          |
|                                                             | Changed event property                                                                               | MAJOR          |
|                                                             | Removed event property                                                                               | MAJOR          |
|                                                             | Changed event ordering                                                                               | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Virtual Type**                                            | Virtual type removed                                                                                 | MAJOR          |
|                                                             | Virtual type added                                                                                   | MINOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **URL Paths**                                               | Path removed                                                                                         | MAJOR          |
|                                                             | Removed/renamed a request parameter                                                                  | MAJOR          |
|                                                             | New required request parameter                                                                       | MAJOR          |
|                                                             | New optional request parameter                                                                       | MINOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Console commands and their arguments**                    | Command removed                                                                                      | MAJOR          |
|                                                             | New required argument                                                                                | MAJOR          |
|                                                             | Removed/renamed argument                                                                             | MAJOR          |
|                                                             | New command exit code                                                                                | MINOR          |
|                                                             | New command                                                                                          | MINOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Less variables and mixins**                               | Removed variable                                                                                     | MAJOR          |
|                                                             | Removed {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixin{% endglossarytooltip %}                                                                                        | MAJOR          |
|                                                             | New required mixin argument                                                                          | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Message queue topics and data types**                     | Topic removed                                                                                        | MAJOR          |
|                                                             | Topic arguments modified                                                                             | MAJOR          |
|                                                             | Consumer removed                                                                                     | MINOR          |
|                                                             | New topic published                                                                                  | MINOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Layout handles declared by modules**                      | New {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} page handle                                                                               | MINOR          |
|                                                             | New container/block added to handle                                                                  | MINOR          |
|                                                             | Removed/renamed container/block                                                                      | MAJOR          |
|                                                             | Removed layout handle                                                                                | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Static and dynamic events triggered by a component**      | Event argument removed                                                                               | MAJOR          |
|                                                             | Event removed                                                                                        | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Schema of configuration types introduced by module**      | Schema file or configuration type renamed/removed                                                    | MAJOR          |
|                                                             | Obligatory node/attribute added                                                                      | MAJOR          |
|                                                             | Node/attribute removed                                                                               | MAJOR          |
|                                                             | New optional node/attribute added                                                                    | MINOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Structure of System Configuration fields used by module** | Config path removed/renamed                                                                          | MAJOR          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| **Database structure**                                      | Table removed                                                                                        | MAJOR          |
|                                                             | Table added                                                                                          | MINOR          |
|                                                             | Column removed                                                                                       | MAJOR          |
|                                                             | Column added                                                                                         | MINOR          |
|                                                             | Compatible changes in column configuration (soften column constraints: increase size, make optional) | PATCH          |
|                                                             | Incompatible changes in column configuration                                                         | MAJOR          |
|                                                             | Primary key column added/removed                                                                     | MAJOR          |
|                                                             | Added column to unique key                                                                           | MAJOR          |
|                                                             | Removed column from unique key                                                                       | MAJOR          |
|                                                             | Unique key added/removed                                                                             | MAJOR          |
|                                                             | Index added/changed                                                                                  | PATCH          |
|                                                             | Foreign key added                                                                                    | MAJOR          |
|                                                             | Temporary tables added/removed/changed                                                               | PATCH          |

## Core module dependency rules

Magento platform clients need notifications about breaking changes for their installed extensions and customizations when they upgrade their Magento installation.

To achieve this, all third-party modules must obey the following rules:

1. You must specify the dependency on all modules listed in the 'require' section of your module's `composer.json` file.
2. Do not specify a dependency on meta packages (e.g. 'product-community-edition').
3. Specify a module's MAJOR and/or MINOR version number if you use any of that module's customization points.
4. Specify a module's MAJOR, MINOR, and PATCH versions if you call or customize a module's private code.

## Deprecation

Marking public code with `@deprecated` on a MINOR release indicates that Magento plans to remove that code in a future MINOR release.

When Magento deprecates the API or customization point in favor of a new implementation, the `@see` annotation points to the new implementation.

**Deprecated Code Example**

{% highlight php startinline %}
/**
 * @deprecated since 2.1.0
 * @see \Magento\Framework\Model\ResourceModel\Db\AbstractDb::save()
 */
public function save()
{
    // ...
}
{% endhighlight %}

[0]: http://semver.org/
[1]: {{page.baseurl}}extension-dev-guide/build/composer-integration.html

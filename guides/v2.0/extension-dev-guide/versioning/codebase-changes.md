---
group: extension-dev-guide
subgroup: Versioning
title: Codebase changes
menu_title: Codebase changes
menu_order: 1300
version: 2.0
github_link: extension-dev-guide/versioning/codebase-changes.md
redirect_from:
  - /guides/v2.0/architecture/back-compatibility.html
  - /guides/v2.1/architecture/back-compatibility.html
  - /guides/v2.2/architecture/back-compatibility.html
  - /guides/v2.0/extension-dev-guide/backward-compatibility.html
  - /guides/v2.1/extension-dev-guide/backward-compatibility.html
  - /guides/v2.2/extension-dev-guide/backward-compatibility.html
---

Every Magento version release include a change in the codebase.
The scope of the change determines whether the MAJOR, MINOR, or PATCH number increases in the version.

## Public vs private code changes

A Magento module's codebase consists of public and private code.

Changes in public code always trigger MINOR or MAJOR version increases.

In most cases, modifications to private code will trigger PATCH version increases.
On rare occasions, if the Magento development team made significant modifications to private code, they will increase the MINOR or MAJOR version.

Third-party modules should not use or change private code.
If this is unavoidable, you must depend on the patch version of the core modules used.

## API and customization points

Public code includes Public {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}(indicated by the `@api` docblock tag) and Public Customization Points.

Modules call APIs to create new application scenarios.
Modifications that break the API will trigger an increase in a module's MAJOR version.

Modules customize or replace Customization Points to customize existing application scenarios.
Modifications that break Customization Points will trigger an increase in a module's MINOR version.

An interface or a {% glossarytooltip 058b2be4-3247-4cb0-860d-6292ce75d1f0 %}virtual type{% endglossarytooltip %} represent either an API or Customization Point.

This policy allows third-party module developers to declare more granular dependencies depending on their module's interaction with Magento modules.

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

## Version increase scenarios

This table lists code change scenarios and which version number it affects.
Use this table to understand what changes Magento can make and which version number gets increased for that change.

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

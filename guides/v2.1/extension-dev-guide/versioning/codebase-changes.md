---
group: php-developer-guide
subgroup: Versioning
title: Codebase changes
menu_title: Codebase changes
menu_order: 1300
redirect_from:
  - /guides/v2.0/architecture/back-compatibility.html
  - /guides/v2.1/architecture/back-compatibility.html	
  - /guides/v2.0/extension-dev-guide/backward-compatibility.html
  - /guides/v2.1/extension-dev-guide/backward-compatibility.html	

---

Every Magento version release include a change in the codebase.
The scope of the change determines whether the MAJOR, MINOR, or PATCH number increases in the version.

## Public vs private code changes

A Magento module's codebase consists of public and private code.
Public code includes Public {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}(indicated by the `@api` docblock tag) and Public Customization Points.
Private code is not accessible via the API: classes and constants marked as [private][].

Changes in public code always trigger MINOR or MAJOR version increases.

In most cases, modifications to private code will trigger PATCH version increases.
On rare occasions, if the Magento development team made significant modifications to private code, they will increase the MINOR or MAJOR version.

Third-party modules should not use or change private code.
If this is unavoidable, you must depend on the patch version of the core modules used.

## API and customization points

Modules call APIs to create new application scenarios.
Modifications that break the API will trigger an increase in a module's MAJOR version.

Modules customize or replace Customization Points to customize existing application scenarios.
Modifications that break Customization Points will trigger an increase in a module's MINOR version.

An interface or a {% glossarytooltip 058b2be4-3247-4cb0-860d-6292ce75d1f0 %}virtual type{% endglossarytooltip %} represent either an API or Customization Point.

This policy allows third-party module developers to declare more granular dependencies depending on their module's interaction with Magento modules.

## Deprecation

Marking public code with `@deprecated` on a MINOR release indicates that Magento plans to remove that code in a future MINOR release.

When Magento deprecates the API or customization point in favor of a new implementation, the `@see` annotation points to the new implementation.

```php
/**
- @deprecated since 2.1.0
- @see \Magento\Framework\Model\ResourceModel\Db\AbstractDb::save()
 */
public function save()
{
    // ...
}
```

## Version increase scenarios

This table lists code change scenarios and which version number it affects.
Use this table to understand what changes Magento can make and which version number gets increased for that change.

| API/Customization Point | Code Change| Version Change |
| -------------- | ------------------- | -------------- |
| **PHP Interface** (marked with `@api`)| Changed a method signature (excluding last argument removal) | MAJOR|
| | Interface added| MINOR|
| | Interface removed| MAJOR|
| | Method added | MINOR|
| | Method removed | MAJOR|
| | New method exception (excluding subtypes of existing exceptions) | MAJOR|
| | New method exception (subtypes of an existing one) | PATCH|
| | Removed an @api annotation| MAJOR|
| | Removed the last argument for a method | MINOR|
| | Required method argument added| MAJOR|
| **PHP Class** (marked with `@api`)| Changed format of the returned method result | MAJOR|
| | Class Added| MINOR|
| | Class removed| MAJOR|
| | Method added | MINOR|
| | Method removed | MAJOR|
| | New method exception (excluding subtypes of existing exceptions) | MAJOR|
| | New method exception (subtypes of an existing one) | PATCH|
| | New required [constructor object argument][] | MINOR|
| | New required constructor scalar argument (without pre-configured value)| MAJOR|
| | New required [method argument][] | MAJOR|
| | Removed a non-last argument| MAJOR|
| | Removed an @api annotation| MAJOR|
| | Removed a non-last constructor argument| MAJOR|
| | Removed a last constructor argument| PATCH|
| **JavaScript Interface** (marked with `@api`) | Changed method signature | MAJOR|
| | Interface added| MINOR|
| | Interface removed| MAJOR|
| | Last argument added| MINOR|
| | Method added | MINOR|
| | Method removed | MAJOR|
| | XXXX Method renamed | MAJOR|
| | New required method argument | MAJOR|
| | Removed an @api annotation| MAJOR|
| | Static function removed| MINOR|
| | Static function renamed| MINOR|
| **JavaScript class** (marked with `@api`)| Changed event ordering | MAJOR|
| | Changed event property | MAJOR|
| | Class added| MINOR|
| | Class removed| MAJOR|
| | Constant removed| MAJOR|
| | Constant renamed| MAJOR|
| | Event added| MINOR|
| | Event removed| MAJOR|
| | Event renamed| MAJOR|
| | Event property added | MINOR|
| | Event property removed | MAJOR|
| | Method added | MINOR|
| | Method removed | MAJOR|
| | Modify default value for optional arguments in public and protected methods | MAJOR|
| | XXXX New abstract method added to class| MINOR|
| | New last method argument | MINOR|
| | New required method argument | MAJOR|
| | Rename public or protected properties| MAJOR|
| | Removed an @api annotation| MAJOR|
| | Removed public or protected properties| MAJOR|
| **Virtual Type** | Virtual type added | MAJOR|
| | Virtual type removed | MINOR|
| **URL Paths** | New optional request parameter | MINOR|
| | New required request parameter | MAJOR|
| | Path removed | MAJOR|
| | Request parameter removed| MAJOR|
| | Request parameter renamed| MAJOR|
| **Directories** | Modified the directory structure| MAJOR|
| **Console commands and their arguments** | Argument removed | MAJOR|
| | Argument renamed| MAJOR|
| | Command added| MINOR|
| | Command exit code added| MINOR|
| | Command removed| MAJOR|
| | Command modified| MINOR|
| | Required argument added| MAJOR|
| **Less variables and mixins** |Class removed | MAJOR|
| | Class renamed| MAJOR|
| | Mixin removed | MAJOR|
| | Mixin renamed | MAJOR|
| | Required mixin argument added| MAJOR|
| | Variable removed| MAJOR|
| | Variable renamed | MAJOR|
| **Message queue topics and data types** | Consumer removed | MINOR|
| | Topic added| MINOR|
| | Topic arguments modified | MAJOR|
| | Topic name autogenerated (private implementation) | PATCH|
| | Topic name modified, except autogenerated names| MAJOR|
| | Topic removed| MAJOR|
| **Layout handles declared by modules** | Container/block added to handle| MINOR|
| | Container/block removed| MAJOR|
| | Container/block renamed| MAJOR|
| | Layout handle added| MINOR|
| | Layout handle removed| MAJOR|
| | Layout handle renamed| MAJOR|
| **Static and dynamic events triggered by a component** | Event argument removed | MAJOR|
| | Event removed| MAJOR|
| | Event renamed| MAJOR|
| **XML Schema of configuration types introduced by module** |  Node/attribute removed | MAJOR|
| | Node/attribute renamed | MAJOR|
| | Obligatory node/attribute added| MAJOR|
| | Optional node/attribute added| MINOR|
| | Schema file or configuration type removed| MAJOR|
| | Schema file or configuration type renamed| MAJOR|
| **Structure of System Configuration fields used by module** | Config path removed/renamed| MAJOR|
| **Database structure** | Column to unique key added| MAJOR|
| | Column from unique key removed | MAJOR|
| | Column added | MINOR|
| | Column removed | MAJOR|
| | Compatible changes in column configuration (soften column constraints: increase size, make optional) | PATCH|
| | Default value modified| MAJOR|
| | Field type modified| MAJOR|
| | Foreign key added| MAJOR|
| | Incompatible changes in column configuration | MAJOR|
| | Index added| PATCH|
| | Index changed| PATCH|
| | Primary key column added | MAJOR|
| | Primary key column removed | MAJOR|
| | Table added| MINOR|
| | Table removed| MAJOR|
| | Table renamed| MAJOR|
| | Temporary tables added/removed/changed | PATCH|
| | Unique key added | MAJOR|
| | Unique key removed | MAJOR|

<!-- Link Definitions -->
[private]: http://php.net/manual/en/language.oop5.visibility.php
[constructor object argument]: https://devdocs.magento.com/guides/v2.3/contributor-guide/backward-compatible-development/#adding-a-constructor-parameter
[method argument]: https://devdocs.magento.com/guides/v2.3/contributor-guide/backward-compatible-development/#adding-parameters-in-protected-methods
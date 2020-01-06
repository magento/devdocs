---
group: php-developer-guide
subgroup: Versioning
title: Module version dependencies
menu_title: Module version dependencies
menu_order: 1200
redirect_from:
  - /guides/v2.3/extension-dev-guide/backward-compatibility.html
---

Magento platform clients need notifications about breaking changes for their installed extensions and customizations when they upgrade their Magento installation.

To achieve this, all third-party modules must obey the following rules:

1. You must specify the dependency on all modules listed in the `require` section of your module's `composer.json` file.
1. Do not specify a dependency on meta packages (e.g. `product-community-edition`).
1. Specify a module's MAJOR and/or MINOR version number if you use any of that module's customization points.
1. Specify a module's MAJOR, MINOR, and PATCH versions if you call or customize a module's private code.

## Service Provider Interfaces

A PHP Interface in Magento can be used several ways by the core product and extension developers.

*  **As an API**. An interface is called by PHP code.
*  **As a Service Provider Interface (SPI)**. An interface can be implemented, allowing code to provide functionality to the platform.
*  **As both**. For example, in a service contract, we expect all calls to a [module](https://glossary.magento.com/module) to be done through the Interface (API), but we also have support for third parties to provide alternate implementations (SPI). APIs and SPIs are not mutually exclusive. Therefore, we do not distinguish them separately. SPIs are annotated the same as APIs.

However, the dependency rules are different:

*  If a module uses (calls) an API, it should be dependent on the MAJOR version and the system provides backward compatibility in scope of current major version.

   **API dependency example**

   ```json
   {
     "require": {
     "magento/customer": "~2.0",
     },
   }
   ```

*  If a module implements an API/SPI, it should be dependent on the MAJOR+MINOR version, and the system provides backward compatibility in scope of the current minor version.

   **SPI dependency example**

   ```json
   {
     ...
     "require": {
     "magento/customer": "~2.0.0",
     },
     ...
   }
   ```

## Determine module dependency

The following table lists common use cases for API/customization points and the version dependency for each use case.
Use this table to set the appropriate version dependency on a module based on how you use its API/customization points.

| API/Customization Point        | Third-party Use Case      | Version Dependency |
| ---- | --- | --- |
| **PHP Interface** (marked with `@api`)          | Inject in a constructor and/or call methods   | MAJOR  |
|   | Implement the interface   | MINOR  |
|   | Re-define the interface preference in `di.xml`| MINOR  |
|   | Add a plugin to the interface     | MAJOR  |
| ---- | --- | --- |
| **PHP Class** (marked with `@api`)  | Inject in a constructor   | MAJOR  |
|   | Extend from an abstract class     | MAJOR  |
|   | Add a plugin to the class | MAJOR  |
|   | Configure class preference in `di.xml`        | MAJOR  |
|   | Configure constructor argument in `di.xml`    | MAJOR  |
|   | Use class constant        | MAJOR  |
| ---- | --- | --- |
| **PHP Class** (NOT marked with `@api`)          | Inject in a constructor   | PATCH  |
|   | Extend from an abstract class     | PATCH  |
|   | Configure class preference in `di.xml`        | PATCH  |
|   | Configure constructor argument in `di.xml`    | PATCH  |
|   | Use class constant        | PATCH  |
| ---- | --- | --- |
| **JavaScript Interface** (marked with `@api`)   | Inject in a constructor and/or call methods   | MAJOR  |
|   | Implement the interface   | MINOR  |
| ---- | --- | --- |
| **JavaScript class** (marked with `@api`)       | Inject in a constructor   | MAJOR  |
|   | Extend from a class       | MINOR  |
|   | Override a method         | MINOR  |
|   | Subscribe to an event  | MINOR  |
| ---- | --- | --- |
| **Virtual Type**   | Configure a virtual type in the `di.xml` file as a class dependency        | MAJOR  |
| ---- | --- | --- |
| **URL Paths**      | Link to from custom pages | MAJOR  |
| ---- | --- | --- |
| **Console commands and their arguments**        | Called in custom shell scripts    | MAJOR  |
| ---- | --- | --- |
| **Less variables and mixins**  | Use in LESS declarations  | MAJOR  |
| ---- | --- | --- |
| **Message queue topics and data types**         | Consume a topic/message   | MINOR  |
|   | Publish an existing topic | MAJOR  |
| ---- | --- | --- |
| **Layout handles declared by modules**          | Instance blocks added     | MAJOR  |
|   | Blocks and containers moved/removed           | MAJOR  |
| ---- | --- | --- |
| **Static and dynamic events triggered by a component**      | Subscribing to event      | MAJOR  |
| ---- | --- | --- |
| **XML configuration type**     | Provide another configuration to the configuration type        | MAJOR  |
|   | Extend existing XSD       | MINOR  |
| ---- | --- | --- |
| **Structure of System Configuration fields used by module** | Configure module through System Configuration values           | MAJOR  |
|   | Read system configuration using config path   | MAJOR  |
| ---- | --- | --- |
| **Database structure**         | Read/write to a table     | MAJOR  |
|   | Add a column to a table   | MINOR  |
|   | Declare a foreign key on a module table       | MAJOR  |
|   | Declare a trigger on a module table           | MAJOR  |
|   | Read from table or write to table from a temporary table       | PATCH  |

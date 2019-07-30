---
group: php-developer-guide
title: Module version dependencies
redirect_from:
  - /guides/v2.2/extension-dev-guide/backward-compatibility.html
---

Magento platform clients need notifications about breaking changes for their installed extensions and customizations when they upgrade their Magento installation.

To achieve this, all third-party modules must obey the following rules:

1. You must specify the dependency on all modules listed in the 'require' section of your module's `composer.json` file.
2. Do not specify a dependency on meta packages (e.g. 'product-community-edition').
3. Specify a module's MAJOR and/or MINOR version number if you use any of that module's customization points.
4. Specify a module's MAJOR, MINOR, and PATCH versions if you call or customize a module's private code.

## Public Code Interfaces

A PHP code in Magento can be used several ways by the core product and extension developers.

* **As an API**. A method is called by PHP code.
* **As a Service Provider Interface (SPI)**. An interface can be implemented or a class can be extended, allowing extensions to extend system's existing behavior.
* **As both**. For example, in a service contract, we expect all calls to a [module](https://glossary.magento.com/module) to be done through the Interface (API), but we also have support for third parties to provide alternate implementations (SPI).

In the code:
* API marked with `@api`
* SPI marked with `@spi`

Some code can have both `@api` and `@spi` annotations.
Private code has no annotations.

The dependency rules are different for API and SPI:

* If a module uses (calls) an API, it should be dependent on the MAJOR version and the system provides backward compatibility in scope of current major version.

  **API dependency example**

    ```json
    {
        ...
        "require": {
            "magento/customer": "~2.0",
        },
        ...
    }
    ```

* If a module implements an SPI, it should be dependent on the MAJOR+MINOR version, and the system provides backward compatibility in scope of the current minor version.

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
* If a module depends (uses or implements SPI) on private code, it should be dependent on MAJOR+MINOR+PATCH version.

## Determine module dependency

The following table lists common use cases for API/customization points and the version dependency for each use case.
Use this table to set the appropriate version dependency on a module based on how you use its API/customization points.

| API/Customization Point | Third-party Use Case| Version Dependency |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------ |
| **API PHP classes/interfaces** | Call the method | MAJOR |
| | Catching method exception | MAJOR |
| | Inject in a constructor | MAJOR |
| | Use class constant| MAJOR |
| **SPI PHP classes/interfaces** | Implement the interface | MINOR |
| | Extend the class | MINOR|
| **`di.xml`** | Any declarations except the bellow ones | MINOR |
| | Configuration for PRIVATE classes/interfaces | PATCH | 
| | Use/configure virtual type NOT marked with `@api/@spi` | PATCH |
| | Configure a virtual type in the `di.xml` file as a class dependency | MAJOR|
| **JavaScript Interface** (marked with `@api`) | Inject in a constructor and/or call methods | MAJOR|
| | Implement the interface | MINOR|
| **JavaScript class** (marked with `@api`) | Inject in a constructor | MAJOR|
| | Extend from a class | MINOR|
| | Override a method | MINOR|
| | Subscribe to an event| MINOR|
| **URL Paths** | Link to from custom pages | MAJOR |
| **Console commands and their arguments**| Called in custom shell scripts | MAJOR |
| **Less variables and mixins** | Use in Less declarations| MAJOR|
| **Message queue topics and data types** | Consume a topic/message | MINOR|
| | Publish an existing topic | MAJOR|
| **Layout handles declared by modules**| Instance blocks added | MAJOR|
| | Blocks and containers moved/removed | MAJOR|
| **Static and dynamic events triggered by a component**| Subscribing to event| MAJOR|
| **XML configuration type**| Provide another configuration to the configuration type | MAJOR |
| | Extend existing XSD | MINOR |
| **Structure of System Configuration fields used by module** | Configure module through System Configuration values| MAJOR|
| | Read system configuration using config path | MAJOR|
| **Database structure** | Read/write to a table | MAJOR|
| | Add a column to a table | MINOR|
| | Declare a foreign key on a module table | MAJOR|
| | Declare a trigger on a module table | MAJOR|
| | Read from table or write to table from a temporary table| PATCH|

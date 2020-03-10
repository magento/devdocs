---
group: php-developer-guide
subgroup: 99_Module Development
title: Public interfaces & APIs
menu_title: Public interfaces & APIs
menu_order: 3
---

## What is a public interface? {#public-interface}

A _public interface_ is a set of code that third-party developers can call, implement, or build as a [plug-in](https://glossary.magento.com/plug-in). Magento guarantees that this code will not change in subsequent releases without a major version change.

Public interfaces for a [module](https://glossary.magento.com/module) are marked with `@api` annotation.

 {:.bs-callout-info}
Third-party developers should use only these interfaces, that is, interfaces with the `@api` annotation. You can use other interfaces but those may be modified or removed in subsequent Magento releases. For more information, see [Backward compatibility]({{ page.baseurl }}/contributor-guide/backward-compatible-development/).

### Example of public interface annotation

```php
namespace Magento\CatalogRule\Api;

/**
 * Interface CatalogRuleRepositoryInterface
 * @api
 * @since 100.1.0
 */
interface CatalogRuleRepositoryInterface
{
...
```

## What is an API? {#api-definition}

An application programming interface (API) is a set of interfaces and their implementations that a module provides to other modules.

### Example of implementation a set of API interfaces

The ``Magento_CatalogRule`` module.

The ``Magento\CatalogRule\Api\Data\RuleInterface`` interface

```php
namespace Magento\CatalogRule\Api\Data;

/**
 * @api
 * @since 100.1.0
 */
interface RuleInterface extends \Magento\Framework\Api\CustomAttributesDataInterface
{
...
```

The ``Magento\CatalogRule\Api\Data\ConditionInterface`` interface

```php
namespace Magento\CatalogRule\Api\Data;

/**
 * @api
 * @since 100.1.0
 */
interface ConditionInterface extends \Magento\Framework\Api\CustomAttributesDataInterface
{
...
```

The ``Magento\CatalogRule\Api\CatalogRuleRepositoryInterface`` interface

```php
namespace Magento\CatalogRule\Api;

/**
 * Interface CatalogRuleRepositoryInterface
 * @api
 * @since 100.1.0
 */
interface CatalogRuleRepositoryInterface
{
...
```

The implementations of the interfaces in the ``di.xml``

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
...
    <preference for="Magento\CatalogRule\Api\Data\RuleInterface" type="Magento\CatalogRule\Model\Rule" />
    <preference for="Magento\CatalogRule\Api\CatalogRuleRepositoryInterface" type="Magento\CatalogRule\Model\CatalogRuleRepository" />
    <preference for="Magento\CatalogRule\Api\Data\ConditionInterface" type="Magento\CatalogRule\Model\Data\Condition" />
...
</config>
```

### API types {#api-types}

The following items are considered types of APIs:

-  Directory structure
-  Configuration files structure
-  Events
-  Client API
-  Provider [API](https://glossary.magento.com/api) (SPI)

Directory structure and configuration file structure are types of APIs because [extension](https://glossary.magento.com/extension) developers use them. Developers write configurations, and place their [static files](https://glossary.magento.com/static-files) in specified folders; so if the configuration file structure or directory structure changes in subsequent releases, modules and extensions may break.

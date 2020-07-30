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
Third-party developers should use only these interfaces, that is, interfaces with the `@api` annotation. You can use other interfaces but those may be modified or removed in subsequent Magento releases. For more information, see [Backward compatibility]({{ site.baseurl }}/contributor-guide/backward-compatible-development/).

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

### Example of an API interface implementation

The ``Magento_CatalogRule`` module.

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
    /**
     * @param \Magento\CatalogRule\Api\Data\RuleInterface $rule
     * @return \Magento\CatalogRule\Api\Data\RuleInterface
     * @throws \Magento\Framework\Exception\CouldNotSaveException
     * @since 100.1.0
     */
    public function save(\Magento\CatalogRule\Api\Data\RuleInterface $rule);

    /**
     * @param int $ruleId
     * @return \Magento\CatalogRule\Api\Data\RuleInterface
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     * @since 100.1.0
     */
    public function get($ruleId);

    /**
     * @param \Magento\CatalogRule\Api\Data\RuleInterface $rule
     * @return bool
     * @throws \Magento\Framework\Exception\CouldNotDeleteException
     * @since 100.1.0
     */
    public function delete(\Magento\CatalogRule\Api\Data\RuleInterface $rule);

    /**
     * @param int $ruleId
     * @return bool
     * @throws \Magento\Framework\Exception\CouldNotDeleteException
     * @since 100.1.0
     */
    public function deleteById($ruleId);
}
```

An interface implementation is declared in the `di.xml` as `<preference />`

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
...
    <preference for="Magento\CatalogRule\Api\CatalogRuleRepositoryInterface" type="Magento\CatalogRule\Model\CatalogRuleRepository"/>
...
</config>
```

The ``Magento\CatalogRule\Model\CatalogRuleRepository`` implements the default methods of the``CatalogRuleRepositoryInterface``:  ``save``, ``get``, ``delete``, ``deleteById``.

```php
namespace Magento\CatalogRule\Model;

use Magento\CatalogRule\Api\Data;
use Magento\Framework\Exception\CouldNotDeleteException;
use Magento\Framework\Exception\CouldNotSaveException;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\Exception\ValidatorException;

class CatalogRuleRepository implements \Magento\CatalogRule\Api\CatalogRuleRepositoryInterface
{
    ...

    /**
     * {@inheritdoc}
     */
    public function save(Data\RuleInterface $rule)
    {
        ...
    }

    /**
     * {@inheritdoc}
     */
    public function get($ruleId)
    {
        ...
    }

    /**
     * {@inheritdoc}
     */
    public function delete(Data\RuleInterface $rule)
    {
        ...
    }

    /**
     * {@inheritdoc}
     */
    public function deleteById($ruleId)
    {
        ...
    }
}
```

### API types {#api-types}

The following items are considered types of APIs:

-  Directory structure
-  Configuration files structure
-  Events
-  Client API
-  Provider [API](https://glossary.magento.com/api) (SPI)

Directory structure and configuration file structure are types of APIs because [extension](https://glossary.magento.com/extension) developers use them. Developers write configurations, and place their [static files](https://glossary.magento.com/static-files) in specified folders; so if the configuration file structure or directory structure changes in subsequent releases, modules and extensions may break.

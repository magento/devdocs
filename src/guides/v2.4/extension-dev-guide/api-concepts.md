---
group: php-developer-guide
subgroup: 99_Module Development
title: Public interfaces & APIs
menu_title: Public interfaces & APIs
menu_order: 3
redirect_to: https://developer.adobe.com/commerce/php/development/components/api-concepts/
layout: migrated
---

## What is a public interface? {#public-interface}

A _public interface_ is a set of code that third-party developers can call, implement, or build as a [plug-in](https://glossary.magento.com/plug-in). Magento guarantees that this code will not change in subsequent releases without a major version change.

Public interfaces for a [module](https://glossary.magento.com/module) are marked with `@api` annotation.

 {:.bs-callout-info}
Third-party developers should use only these interfaces, that is, interfaces with the `@api` annotation. You can use other interfaces but those may be modified or removed in subsequent Magento releases. For more information, see [Backward compatibility]({{ site.baseurl }}/contributor-guide/backward-compatible-development/).

### Example of public interface annotation

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

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
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\CatalogRule\Api;

use Magento\CatalogRule\Api\Data\RuleInterface;
use Magento\Framework\Exception\CouldNotDeleteException;
use Magento\Framework\Exception\CouldNotSaveException;
use Magento\Framework\Exception\NoSuchEntityException;

/**
 * Interface CatalogRuleRepositoryInterface
 * @api
 * @since 100.1.0
 */
interface CatalogRuleRepositoryInterface
{
    /**
     * @param RuleInterface $rule
     * @return RuleInterface
     * @throws CouldNotSaveException
     * @since 100.1.0
     */
    public function save(RuleInterface $rule): RuleInterface;

    /**
     * @param int $ruleId
     * @return RuleInterface
     * @throws NoSuchEntityException
     * @since 100.1.0
     */
    public function get(int $ruleId): RuleInterface;

    /**
     * @param RuleInterface $rule
     * @return bool
     * @throws CouldNotDeleteException
     * @since 100.1.0
     */
    public function delete(RuleInterface $rule): bool;

    /**
     * @param int $ruleId
     * @return bool
     * @throws CouldNotDeleteException
     * @since 100.1.0
     */
    public function deleteById(int $ruleId): bool;
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
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\CatalogRule\Model;

use Magento\CatalogRule\Api\Data;
use Magento\Framework\Exception\CouldNotDeleteException;
use Magento\Framework\Exception\CouldNotSaveException;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\Exception\ValidatorException;
use Magento\CatalogRule\Api\CatalogRuleRepositoryInterface;

class CatalogRuleRepository implements CatalogRuleRepositoryInterface
{
    ...

    /**
     * @inheritdoc
     */
    public function save(Data\RuleInterface $rule): Data\RuleInterface
    {
        ...
    }

    /**
     * @inheritdoc
     */
    public function get(int $ruleId): Data\RuleInterface
    {
        ...
    }

    /**
     * @inheritdoc
     */
    public function delete(Data\RuleInterface $rule): bool
    {
        ...
    }

    /**
     * @inheritdoc
     */
    public function deleteById(int $ruleId): bool
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

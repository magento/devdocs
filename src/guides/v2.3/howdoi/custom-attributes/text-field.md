---
layout: tutorial
group: how-do-i
subgroup:
title: Add a custom text field attribute
menu_node:
level3_subgroup: custom-attributes
menu_order: 2
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

## Overview

This tutorial describes how a developer can create a custom text field attribute for the Customer entity using code. This will reflect in both the [Customer Grid](https://docs.magento.com/user-guide/customers/customer-account-manage.html) and the [Customer Form](https://docs.magento.com/user-guide/customers/customer-account-update.html) in the Admin.

This Customer attribute will be used to save and view the customer's ID in an external system, as an example. It will be created as an EAV attribute in a data patch. The EAV model allows a developer to add custom functionality to the Magento entities without modifying the core databases and schemas. Data patches are run just once, so this code will create the custom attribute and will never run again, which could cause issues.

## Code

### Create the data patch class

Create a data patch class called `ExternalId` under the `\ExampleCorp\Customer\Setup\Patch\Data` namespace. This makes Magento execute the data patch automatically when `bin/magento setup:upgrade` is run. All data patches must implement the `\Magento\Framework\Setup\Patch\DataPatchInterface` interface.

```php
<?php

namespace ExampleCorp\Customer\Setup\Patch\Data;

use \Magento\Framework\Setup\Patch\DataPatchInterface;

class ExternalId implements DataPatchInterface
{
    public function apply()
    {
        // will be implemented in the next steps.
    }

    public function getAliases()
    {
        // will be implemented in the next steps.
    }

    public function getDependencies()
    {
        // will be implemented in the next steps.
    }
}
```

### Inject the dependencies

The dependencies to the data patch are injected using constructor DI and are listed below:

-  `\Magento\Framework\Setup\ModuleDataSetupInterface` for initializing and ending the setup.
-  `\Magento\Customer\Setup\CustomerSetupFactory` for creating a model of `\Magento\Customer\Setup\CustomerSetup` which is required to add the custom attribute to Magento.
-  `\Magento\Customer\Model\ResourceModel\Attribute` aliased as `AttributeResource` for saving the attribute after adding custom data to it.
-  `\Psr\Log\LoggerInterface` for logging exceptions thrown during the execution.

    ```php
    /**
     * Constructor
     *
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param CustomerSetupFactory $customerSetupFactory
     * @param AttributeResource $attributeResource
     * @param LoggerInterface $logger
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        CustomerSetupFactory $customerSetupFactory,
        AttributeResource $attributeResource,
        LoggerInterface $logger
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->customerSetup = $customerSetupFactory->create(['setup' => $moduleDataSetup]);
        $this->attributeResource = $attributeResource;
        $this->logger = $logger;
    }
    ```

### Implement the apply method

There are five steps in developing a data patch. All the steps below are written inside the `apply` method.

1. Starting and ending the setup execution. This turns off foreign key checks and sets the SQL mode.

    ```php
    $this->moduleDataSetup->getConnection()->startSetup();

    /*
      Attribute creation code must be run between these two lines
      to ensure that the attribute is created smoothly.
     */

    $this->moduleDataSetup->getConnection()->endSetup();
    ```

1. Add the text field customer attribute with the required settings.

    The third parameter for `addAttribute` is an array of settings required to configure the attribute. Passing an empty array uses all the default values for each possible setting. To keep the code to a minimum, just declare the settings needing to be overridden and the rest of the settings will be used from the Magento defaults. The settings overrides can be done as described below.

    {:.bs-callout-info}
    For creating a simple text field, it is not necessary to override the settings for `backend` (database field type) and `input` (frontend HTML input type), as they default to `varchar` and `text` respectively.

    {:.bs-callout-info}
    The `\Magento\Customer\Api\CustomerMetadataInterface` interface contains constants like the customer entity's code and the default attribute set code, which can be referenced.

    ```php
    $this->customerSetup->addAttribute(
        CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER, // entity type code
        'externalcorp_external_id', // unique attribute code
        [
            'label' => 'External ID',
            'required' => 0,
            'position' => 200,
            'system' => 0,
            'user_defined' => 1,
            'is_used_in_grid' => 1,
            'is_visible_in_grid' => 1,
            'is_filterable_in_grid' => 1,
            'is_searchable_in_grid' => 1,
        ]
    );
    ```

    | Setting Key | Description |
    | --- | --- |
    | `label` | `External ID` - Label for displaying the attribute value |
    | `required` | `0` - Attribute will be an optional field in the customer form |
    | `position` | `200` - Sort order in the customer form |
    | `system` | `0` - Not a system-defined attribute |
    | `user_defined` | `1` - A user-defined attribute |
    | `is_used_in_grid` | `1` - Ready for use in the customer grid |
    | `is_visible_in_grid` | `1` - Visible in the customer grid |
    | `is_filterable_in_grid` | `1` - Filterable in the customer grid |
    | `is_searchable_in_grid` | `1` - Searchable in the customer grid |

1. Add attribute to an attribute set and group.

    {:.bs-callout-info}
    There is only one attribute set and group for the customer entity. The default attribute set ID is a constant defined the `CustomerMetadataInterface` interface and setting the attribute group ID to null makes Magento use the default attribute group ID for the customer entity.

    ```php
    $this->customerSetup->addAttributeToSet(
        CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER, // entity type code
        CustomerMetadataInterface::ATTRIBUTE_SET_ID_CUSTOMER, // attribute set ID
        null, // attribute group ID
        'externalcorp_external_id' // unique attribute code
    );
    ```

1. Make the attribute visible in the customer form.

    ```php
    // Get the newly created attribute's model
    $attribute = $this->customerSetup->getEavConfig()
        ->getAttribute(CustomerMetadataInterface::ENTITY, 'externalcorp_external_id');

    // Make attribute visible in Admin customer form
    $attribute->setData('used_in_forms', [
        'adminhtml_customer'
    ]);

    // Save modified attribute model using its resource model
    $this->attributeResource->save($attribute);
    ```

1. Gracefully handle exceptions.

    ```php
    try {
        // All the code inside the apply method goes into the try block.
    } catch (Exception $exception) {
        $this->logger->err($exception->getMessage());
    }
    ```

### Implement rest of the interface

This data patch does not have any other patch as a dependency, and this data patch was not renamed earlier, so both `getDependencies` and `getAliases` can return an empty array.

```php
public static function getDependencies(): array
{
    return [];
}

public function getAliases(): array
{
    return [];
}
```

### Execute the data patch

Run `bin/magento setup:upgrade` from the Magento root to execute the newly added data patch.

-  The attribute is created in the customer form under the _Account Information_ section.

![Custom attribute in the customer form]({{ site.baseurl }}/common/images/custom-attributes/customer-text-form.png){:width="600px"}

-  The attribute is displayed in the customer grid.

![Custom attribute in the customer grid]({{ site.baseurl }}/common/images/custom-attributes/customer-text-grid.png){:width="600px"}

### Code reference

```php
<?php declare(strict_types=1);

namespace ExampleCorp\Customer\Setup\Patch\Data;

use Exception;
use Psr\Log\LoggerInterface;
use Magento\Customer\Api\CustomerMetadataInterface;
use Magento\Customer\Model\Customer;
use Magento\Customer\Model\ResourceModel\Attribute as AttributeResource;
use Magento\Customer\Setup\CustomerSetup;
use Magento\Customer\Setup\CustomerSetupFactory;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;

/**
 * Creates a customer attribute for managing a customer's external system ID
 */
class ExternalId implements DataPatchInterface
{
    /**
     * @var ModuleDataSetupInterface
     */
    private $moduleDataSetup;

    /**
     * @var CustomerSetup
     */
    private $customerSetup;

    /**
     * @var AttributeResource
     */
    private $attributeResource;

    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * Constructor
     *
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param CustomerSetupFactory $customerSetupFactory
     * @param AttributeResource $attributeResource
     * @param LoggerInterface $logger
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        CustomerSetupFactory $customerSetupFactory,
        AttributeResource $attributeResource,
        LoggerInterface $logger
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->customerSetup = $customerSetupFactory->create(['setup' => $moduleDataSetup]);
        $this->attributeResource = $attributeResource;
        $this->logger = $logger;
    }

    /**
     * Get array of patches that have to be executed prior to this.
     *
     * Example of implementation:
     *
     * [
     *      \Vendor_Name\Module_Name\Setup\Patch\Patch1::class,
     *      \Vendor_Name\Module_Name\Setup\Patch\Patch2::class
     * ]
     *
     * @return string[]
     */
    public static function getDependencies(): array
    {
        return [];
    }

    /**
     * Get aliases (previous names) for the patch.
     *
     * @return string[]
     */
    public function getAliases(): array
    {
        return [];
    }

    /**
     * Run code inside patch
     */
    public function apply()
    {
        // Start setup
        $this->moduleDataSetup->getConnection()->startSetup();

        try {
            // Add customer attribute with settings
            $this->customerSetup->addAttribute(
                CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER,
                'externalcorp_external_id',
                [
                    'label' => 'External ID',
                    'required' => 0,
                    'position' => 100,
                    'system' => 0,
                    'user_defined' => 1,
                    'is_used_in_grid' => 1,
                    'is_visible_in_grid' => 1,
                    'is_filterable_in_grid' => 1,
                    'is_searchable_in_grid' => 1,
                ]
            );

            // Add attribute to default attribute set and group
            $this->customerSetup->addAttributeToSet(
                CustomerMetadataInterface::ENTITY_TYPE_CUSTOMER,
                CustomerMetadataInterface::ATTRIBUTE_SET_ID_CUSTOMER,
                null,
                'externalcorp_external_id'
            );

            // Get the newly created attribute's model
            $attribute = $this->customerSetup->getEavConfig()
                ->getAttribute(Customer::ENTITY, 'externalcorp_external_id');

            // Make attribute visible in Admin customer form
            $attribute->setData('used_in_forms', [
                'adminhtml_customer'
            ]);

            // Save attribute using its resource model
            $this->attributeResource->save($attribute);
        } catch (Exception $e) {
            $this->logger->err($e->getMessage());
        }

        // End setup
        $this->moduleDataSetup->getConnection()->endSetup();
    }
}
```

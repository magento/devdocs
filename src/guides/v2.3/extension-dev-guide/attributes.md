---
group: php-developer-guide
title: EAV and extension attributes
---

There are two types of attributes you can use to extend Magento functionality:

*  Custom and Entity-Attribute-Value (EAV) attributes—Custom attributes are those added on behalf of a merchant. For example, a merchant might need to add attributes to describe products, such as shape or volume. A merchant can add these attributes in the [Magento Admin](https://glossary.magento.com/magento-admin) panel. See the [merchant documentation](http://docs.magento.com/m2/ce/user_guide/stores/attributes.html) for information about managing custom attributes.

   Custom attributes are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The `Customer` and `Catalog` modules are the primary models that use EAV attributes. Other modules, such as `ConfigurableProduct`, `GiftMessage`, and `Tax`, use the EAV functionality for `Catalog`.

*  [Extension attributes](https://glossary.magento.com/extension-attribute). Extension attributes are new in Magento 2. They are used to extend functionality and often use more [complex data](https://glossary.magento.com/complex-data) types than custom attributes. These attributes do not appear in the Magento Admin.

## EAV and custom attributes {#custom}

`CustomAttributesDataInterface` defines the methods that are called to get and set custom attributes, including `getCustomAttributes()`.

A [module](https://glossary.magento.com/module) has a set of built-in attributes that are always available. The `Catalog` module has several attributes that are defined as EAV attributes, but are treated as built-in attributes. These attributes include:

*  attribute_set_id
*  created_at
*  group_price
*  media_gallery
*  name
*  price
*  [sku](https://glossary.magento.com/sku)
*  status
*  store_id
*  tier_price
*  type_id
*  updated_at
*  visibility
*  weight

In this case, when `getCustomAttributes()` is called, the system returns only custom attributes that are not in this list.

The `Customer` module provides a `system` option for its attributes. As a result, the `getCustomAttributes()` method only returns those EAV attributes that are not defined as `system` attributes. If you create custom attributes programmatically, set the `system` option to 'false' if you want to include the attribute in the `custom_attributes` array.

{:.bs-callout .bs-callout-info}
As of version 2.3.4, Magento caches all system EAV attributes as they are retrieved. This behavior is defined in each affected module's `di.xml` file as the `attributesForPreload` argument for `<type name="Magento\Eav\Model\Config">`. Developers can cache custom EAV attributes by running the `bin/magento config:set dev/caching/cache_user_defined_attributes 1` command. This can also be done from the Admin while in Develop mode by setting **Stores** > Settings **Configuration** > **Advanced** > **Developer** > **Caching Settings** > **Cache User Defined Attributes** to **Yes**. Caching EAV attributes while retrieving improves performance as it decreases the amount of insert/select requests to the DB, but it increases the cache network size.

### Adding Customer EAV attribute for backend only {#customer-eav-attribute}

Customer EAV attributes are created using a [data patches]({{ page.baseurl }}/extension-dev-guide/declarative-schema/data-patches.html).

{:.bs-callout-warning}
Both the `save()` and `getResource()` methods for `Magento\Framework\Model\AbstractModel` have been marked as `@deprecated` since 2.1 and should no longer be used.

```php
<?php

namespace Magento\Customer\Setup\Patch\Data;

use Magento\Customer\Model\Customer;
use Magento\Customer\Setup\CustomerSetupFactory;
use Magento\Framework\App\ResourceConnection;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Framework\Setup\Patch\PatchVersionInterface;

/**
 * Class add customer example attribute to customer
 */
class AddCustomerExampleAttribute implements DataPatchInterface
{
    /**
     * @var ModuleDataSetupInterface
     */
    private $moduleDataSetup;

    /**
     * @var CustomerSetupFactory
     */
    private $customerSetupFactory;

    /**
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param CustomerSetupFactory $customerSetupFactory
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        CustomerSetupFactory $customerSetupFactory
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->customerSetupFactory = $customerSetupFactory;
    }

    /**
     * @inheritdoc
     */
    public function apply()
    {
        $customerSetup = $this->customerSetupFactory->create(['setup' => $this->moduleDataSetup]);
        $customerSetup->addAttribute(Customer::ENTITY, 'attribute_code', [
            // Attribute options (list of options can be found below)
        ]);
    }

    /**
     * @inheritdoc
     */
    public static function getDependencies()
    {
        return [
            UpdateIdentifierCustomerAttributesVisibility::class,
        ];
    }

    /**
     * @inheritdoc
     */
    public function getAliases()
    {
        return [];
    }
}
```

{:.bs-callout-tip}
The scope of the Customer custom attribute is Global only, while other entities support the Global, Website, and StoreView scopes.

## Extension attributes {#extension}

Use `ExtensibleDataInterface` to implement extension attributes. In your code, you must define `getExtensionAttributes()` and `setExtensionAttributes(*ExtensionInterface param)`.

`public function getExtensionAttributes();`

Most likely, you will want to extend interfaces defined in the `Api/Data` directory of a Magento module.

### Declare extension attributes {#declare}

You must create a `<Module>/etc/extension_attributes.xml` file to define a module's extension attributes:

```xml
<config>
    <extension_attributes for="Path\To\Interface">
        <attribute code="name_of_attribute" type="datatype">
           <resources>
              <resource ref="permission"/>
           </resources>
           <join reference_table="" reference_field="" join_on_field="">
              <field>fieldname</field>
           </join>
        </attribute>
    </extension_attributes>
</config>
```

where:

|Keyword|Description|Example|
|--- |--- |--- |
| for | The fully-qualified type name with the namespace that processes the extensions. The value must be a type that implements `ExtensibleDataInterface`. The interface can be in a different module. | `Magento\Quote\Api\Data\TotalsInterface` |
| code | The name of the attribute. The attribute name should be in snake case (the first letter in each word should be in lowercase, with each word separated by an underscore). | `gift_cards_amount_used` |
| type | The data type. This can be a simple data type, such as string or integer, or complex type, such as an interface. | `float`<br />`Magento\CatalogInventory\Api\Data\StockItemInterface` |
| ref | Optional. Restricts access to the extension attribute to users with the specified permission. | `Magento_CatalogInventory::cataloginventory` |
| reference_table | The table involved in a join operation. See [Searching extension attributes](#search) for details. | `admin_user` |
| reference_field | Column in the `reference_table`. | `user_id` |
| join_on_field | The column of the table associated with the interface specified in the `for` keyword that will be used in the join operation. | `store_id` |
| field | One or more fields present in the interface specified in the `type` keyword.<br />You can specify the `column=""` keyword to define the column in the reference_table to use. The field value specifies the property on the `interface` which should be set. | `<field>firstname</field>`<br />`<field>lastname</field>`<br />`<field>email</field>`<br /><br />`<field column="customer_group_code">code</field>` |

### Searching extension attributes {#search}

The system uses a join directive to add external attributes to a collection and to make the collection filterable. The `join` element in the `extension_attributes.xml` file defines which object fields and the database table/column to use as the source of a search.

In the following example, an attribute named `stock_item` of type `Magento\CatalogInventory\Api\Data\StockItemInterface` is being added to the `Magento\Catalog\Api\Data\ProductInterface`.

```xml
<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
    <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
        <join reference_table="cataloginventory_stock_item" reference_field="product_id" join_on_field="entity_id">
            <field>qty</field>
        </join>
    </attribute>
</extension_attributes>
```

When `getList()` is called, it returns a list of `ProductInterface`s. When it does this, the code populates the `stock_item` with a joined operation in which the `StockItemInterface`’s `qty` property comes from the `cataloginventory_stock_item` table where the `Product`'s `entity_Id` is joined with the `cataloginventory_stock_item.product_id` column.

### Extension attribute authentication {#ext-aut}

Individual fields that are defined as extension attributes can be restricted, based on existing permissions. This feature allows extension developers to restrict access to data. See [Web API authentication overview]({{ page.baseurl }}/get-started/authentication/gs-authentication.html) for general information about authentication in Magento.

The following [code sample]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/etc/extension_attributes.xml) defines `stock_item` as an extension attribute of the `CatalogInventory` module. `CatalogInventory` is treated as a "third-party extension". Access to the inventory data is restricted because the quantity of in-stock item may be competitive information.

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
            <resources>
                <resource ref="Magento_CatalogInventory::cataloginventory"/>
            </resources>
        </attribute>
    </extension_attributes>
</config>
```

In this example, the `stock_item` attribute is restricted to only the users who have the `Magento_CatalogInventory::cataloginventory` permission. As a result, an anonymous or unauthenticated user issuing a `GET <host>/rest/<store_code>/V1/products/<sku>` request will receive product information similar to the following:

```json
    {
      "sku": "tshirt1",
      "price": "20.00",
      "description": "New JSmith design",
      "extension_attributes": {
        "logo size": "small"
      },
      "custom_attributes": {
        "artist": "James Smith"
      }
    }
```

However, an authenticated user with the permission `Magento_CatalogInventory::cataloginventory` receives the additional `stock_item` field:

```json
    {
      "sku": "tshirt1",
      "price": "20.00",
      "description": "New JSmith design",
      "extension_attributes": {
        "logo size": "small",
        "stock_item" : {
          "status" : "in_stock"
          "quantity": 70
        }
      },
      "custom_attributes": {
        "artist": "James Smith"
      }
    }
```

This only works for extension attributes (those attributes defined in an `extension_attributes.xml` file). There are no permission restrictions on the rest of the returned data. For example, there is no way to restrict `custom_attributes`.

### Extension interfaces

An `ExtensionInterface` will be empty if no extension attributes have been added. In the following example—in an unmodified installation—`CustomerExtensionInterface` will be generated, but will be empty:

`interface CustomerExtensionInterface extends \Magento\Framework\Api\ExtensionAttributesInterface
{
}`

However, if an extension similar to the following has been defined, the interface will not be empty:

```xml
<extension_attributes for="Magento\Customer\Api\Data\CustomerInterface">
    <attribute code="attributeName" type="Magento\Some\Type[]" />
</extension_attributes>
```

### Troubleshoot EAV attributes {#troubleshooting}

If you have issues when using `setup:upgrade`, verify `__construct` uses the method `EavSetupFactory` not `EavSetup`. You should not directly inject `EavSetup` in extension code. Check your custom code and purchased modules and extensions to verify. After changing the methods, you should be able to properly deploy.

## Add product EAV attribute options reference

The following table is a reference for the `Magento\Eav\Setup\EavSetup::addAttribute` method. It contains the available options when creating a product attribute, listing each option's key, description, and the default value (where applicable).

{:.fixed}
|Key|Description|Default Value|
|--- |--- |--- |
|apply_to|Catalog EAV Attribute - defines which product types the attribute can be applied to||
|attribute_model|EAV Attribute attribute_model||
|attribute_set|Name of the attribute set the new attribute will be assigned to. Works in combination with **group** or empty **user_defined**||
|backend|EAV Attribute backend_model||
|comparable|Catalog EAV Attribute - defines if attribute can be used when comparing products|0|
|default|EAV Attribute default_value||
|filterable_in_search|Catalog EAV Attribute is_filterable_in_search - defines if attribute can be used to filter search results|0|
|filterable|Catalog EAV Attribute is_filterable - defines if attribute can be used to filter on navigation|0|
|frontend_class|EAV Attribute frontend_class||
|frontend|EAV Attribute frontend_model||
|global|Catalog EAV Attribute is_global field|1|
|group|Attribute group name or ID||
|input_renderer|Catalog EAV Attribute frontend_input_renderer||
|input|EAV Attribute frontend_input|text|
|is_filterable_in_grid|Catalog EAV Attribute - defines if attribute can be used to filter on product grid in Admin|0|
|is_html_allowed_on_front|Catalog EAV Attribute - defines if HTML needs to be escaped on the frontend|0|
|is_used_in_grid|Catalog EAV Attribute - defines if attribute can be used on the product grid in Admin|0|
|is_visible_in_grid|Catalog EAV Attribute is_visible_in_grid - defines if attribute will be visible on the product grid in Admin|0|
|label|EAV Attribute frontend_label||
|note|EAV Attribute note||
|option|EAV Attribute Option values||
|position|Catalog EAV Attribute position|0|
|required|EAV Attribute is_required|1|
|searchable|Catalog EAV Attribute is_searchable|0|
|sort_order|EAV Entity Attribute sort_order||
|source|EAV Attribute source_model||
|system|Declares the attribute as a system attribute.|1|
|table|EAV Attribute backend_table||
|type|EAV Attribute backend_type|varchar|
|unique|EAV Attribute is_unique|0|
|used_for_promo_rules|Catalog EAV Attribute is_used_for_promo_rules|0|
|used_for_sort_by|Catalog EAV Attribute used_for_sort_by|0|
|used_in_product_listing|Catalog EAV Attribute used_in_product_listing|0|
|user_defined|EAV Attribute is_user_defined|0|
|visible_in_advanced_search|Catalog EAV Attribute is_visible_in_advanced_search - defines if attribute will appear on the Advanced Search form|0|
|visible_on_front|Catalog EAV Attribute is_visible_on_front - defines attribute visibility on frontend|0|
|visible|Catalog EAV Attribute is_visible - defines visibility in Admin, won't be available for changing a value in the admin interface if set to 0|1|
|wysiwyg_enabled|Catalog EAV Attribute is_wysiwyg_enabled - used for enabling wysiwyg editor for an attribute. Works for textarea only|0|

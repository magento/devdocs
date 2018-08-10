---
group: extension-dev-guide
title: EAV and extension attributes
version: 2.1
---

There are two types of attributes you can use to extend Magento functionality:

* Custom and Entity-Attribute-Value (EAV) attributes—Custom attributes are those added on behalf of a merchant. For example, a merchant might need to add attributes to describe products, such as shape or volume. A merchant can add these attributes on the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %} panel. See the [merchant documentation](http://docs.magento.com/m2/ce/user_guide/stores/attributes.html) for information about managing custom attributes.

	Custom attributes are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The `Customer` and `Catalog` modules are the primary models that use EAV attributes. Other modules, such as `ConfigurableProduct`, `GiftMessage`, and `Tax`, use the EAV functionality for `Catalog`.

* {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} attributes. Extension attributes are new in Magento 2. They are used to extend functionality and often use more {% glossarytooltip fd9ae55f-ccf5-480b-a7f3-bd2c80f0b2a4 %}complex data{% endglossarytooltip %} types than custom attributes. These attributes do not appear in the Magento Admin.

## EAV and custom attributes {#custom}

`CustomAttributesDataInterface` defines the methods that are called to get and set custom attributes, including `getCustomAttributes()`.

A {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} has a set of built-in attributes that are always available. The `Catalog` module has several attributes that are defined as EAV attributes, but are treated as built-in attributes. These attributes include:

* attribute_set_id
* created_at
* group_price
* media_gallery
* name
* price
* {% glossarytooltip fd4bed67-7130-4415-8a6f-ad8d8ef8f25e %}sku{% endglossarytooltip %}
* status
* store_id
* tier_price
* type_id
* updated_at
* visibility
* weight

In this case, when `getCustomAttributes()` is called, the system returns only custom attributes that are not in this list.

The `Customer` module does not treat its EAV attributes in a special manner. As a result, the `getCustomAttributes()` method returns all EAV attributes.

### Adding Customer EAV attribute for backend only {#customer-eav-attribute}

Customer attributes are created inside of `InstallData` and `UpgradeData` scripts. To add new attributes to the database, you must use the `\Magento\Eav\Setup\EavSetupFactory` class as a dependency injection.

<div class="bs-callout bs-callout-warning" markdown="1">
Both the `save()` and `getResource()` methods for `Magento\Framework\Model\AbstractModel` have been marked as `@deprecated` since 2.1 and should no longer be used.
</div>

{% highlight PHP inline=true %}
namespace My\Module\Setup;

use Magento\Customer\Model\Customer;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

class InstallData implements \Magento\Framework\Setup\InstallDataInterface
{
    private $eavSetupFactory;
    
    private $eavConfig;
    
    private $attributeResource;
    
    public function __construct(
        \Magento\Eav\Setup\EavSetupFactory $eavSetupFactory,
        \Magento\Eav\Model\Config $eavConfig,
        \Magento\Customer\Model\ResourceModel\Attribute $attributeResource
    ) {
        $this->eavSetupFactory = $eavSetupFactory;
        $this->eavConfig = $eavConfig;
        $this->attributeResource = $attributeResource;
    }
    
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $eavSetup = $this->eavSetupFactory->create(['setup' => $setup]);

        $eavSetup->addAttribute(Customer::ENTITY, 'attribute_code', [
            // Attribute parameters
        ]);
        
        $attribute = $this->eavConfig->getAttribute(Customer::ENTITY, 'attribute_code');
        $attribute->setData('used_in_forms', ['adminhtml_customer']);
        $this->attributeResource->save($attribute);
    }
}
{% endhighlight %}

## Extension attributes {#extension}

Use `ExtensibleDataInterface` to implement extension attributes. In your code, you must define `getExtensionAttributes()` and `setExtensionAttributes(*ExtensionInterface param)`.

`public function getExtensionAttributes();`

Most likely, you will want to extend interfaces defined in the `Api/Data` directory of a Magento module.

### Declare extension attributes {#declare}

You must create a `<Module>/etc/extension_attributes.xml` file to define a module's extension attributes:

{% highlight XML %}
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
{% endhighlight %}

where:

<table>
<thead>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</thead>
<tbody>
<tr>
<td><p>for</p></td>
<td><p>The fully-qualified type name with the {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %} that processes the extensions. The value must be a type that implements `ExtensibleDataInterface`. The interface can be in a different module.</p> </td>
<td><code>Magento\Quote\Api\Data\TotalsInterface</code></td>
</tr>
<tr>
<td><p>code</p></td>
<td><p>The name of the attribute. The attribute name should be in snake case (the first letter in each word should be in lowercase, with each word separated by an underscore). </p></td>
<td><code>gift_cards_amount_used</code></td>
</tr>
<tr>
<td><p>type</p></td>
<td><p>The data type. This can be a simple data type, such as string or integer, or complex type, such as an interface.</p></td>
<td><code>float <br>Magento\CatalogInventory\Api\Data\StockItemInterface</code></td>
</tr>
<tr>
<td><p>ref</p></td>
<td><p>Optional. Restricts access to the {% glossarytooltip 45013f4a-21a9-4010-8166-e3bd52d56df3 %}extension attribute{% endglossarytooltip %} to users with the specified permission.</p></td>
<td><code>Magento_CatalogInventory::cataloginventory</code></td>
</tr>
<tr>
<td><p>reference_table</p></td>
<td>
<p>The table involved in a join operation. See <a href="#search">Searching extension attributes</a> for details.</p>
</td>
<td><code>admin_user</code></td>
</tr>
<tr>
<td><p>reference_field</p></td>
<td><p>Column in the reference_table</p></td>
<td><code>user_id</code></td>
</tr>
<tr>
<td><p>join_on_field</p></td>
<td><p>The column of the table associated with the interface specified in the <code>for</code> {% glossarytooltip caa46cea-25d7-4e4f-bce1-11430ada59dc %}keyword{% endglossarytooltip %} that will be used in the join operation.</p></td>
<td><code>store_id</code></td>
</tr>
<tr>
<td><p>field</p></td>
<td><p>One or more fields present in the interface specified in the <code>type</code> keyword.</p>
<p>You can specify the <code>column=""</code> keyword to define the column in the reference_table to use. The field value specifies the property on the <code>interface</code> which should be set.</p></td>
<td><code>&lt;field>firstname&lt;/field><br>&lt;field>lastname&lt;/field><br>&lt;field>email&lt;/field><br><br>
&lt;field column="customer_group_code">code&lt;/field></code></td>
</tr>
</tbody>

</table>

### Searching extension attributes {#search}

The system uses a join directive to add external attributes to a collection and to make the collection filterable. The `join` element in the `extension_attributes.xml` file defines which object fields and the database table/column to use as the source of a search.

In the following example, an attribute named `stock_item` of type `Magento\CatalogInventory\Api\Data\StockItemInterface` is being added to the `Magento\Catalog\Api\Data\ProductInterface`.

{% highlight XML %}
<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
    <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
        <join reference_table="cataloginventory_stock_item" reference_field="product_id" join_on_field="entity_id">
            <field>qty</field>
        </join>
    </attribute>
</extension_attributes>
{% endhighlight %}

When `getList()` is called, it returns a list of `ProductInterface`s. When it does this, the code populates the `stock_item` with a joined operation in which the `StockItemInterface`’s `qty` property comes from the `cataloginventory_stock_item` table where the `Product`'s `entity_Id` is joined with the `cataloginventory_stock_item.product_id` column.

### Extension attribute authentication {#ext-aut}

Individual fields that are defined as extension attributes can be restricted, based on existing permissions. This feature allows extension developers to restrict access to data. See [Web API authentication overview]({{ page.baseurl }}/get-started/authentication/gs-authentication.html) for general information about authentication in Magento.

The following [code sample]({{ site.mage2000url }}app/code/Magento/CatalogInventory/etc/extension_attributes.xml) defines `stock_item` as an extension attribute of the `CatalogInventory` module. `CatalogInventory` is treated as a "third-party extension". Access to the inventory data is restricted because the quantity of in-stock item may be competitive information.

{% highlight XML %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
            <resources>
                <resource ref="Magento_CatalogInventory::cataloginventory"/>
            </resources>
        </attribute>
    </extension_attributes>
</config>
{% endhighlight %}

In this example, the `stock_item` attribute is restricted to only the users who have the `Magento_CatalogInventory::cataloginventory` permission. As a result, an anonymous or unauthenticated user issuing a `GET http://<magento_base_url>/rest/V1/products/<sku>` request will receive product information similar to the following:

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

However, an authenticated user with the permission `Magento_CatalogInventory::cataloginventory` receives the additional `stock_item` field:

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

This only works for extension attributes (those attributes defined in an `extension_attributes.xml` file). There are no permission restrictions on the rest of the returned data. For example, there is no way to restrict `custom_attributes`.

### Extension interfaces

An `ExtensionInterface` will be empty if no extension attributes have been added. In the following example—in an unmodified installation—`CustomerExtensionInterface` will be generated, but will be empty:


`interface CustomerExtensionInterface extends \Magento\Framework\Api\ExtensionAttributesInterface
{
}`

However, if an extension similar to the following has been defined, the interface will not be empty:

{% highlight XML %}
<extension_attributes for="Magento\Customer\Api\Data\CustomerInterface">
    <attribute code="attributeName" type="Magento\Some\Type[]" />
</extension_attributes>
{% endhighlight %}

### Troubleshoot EAV attributes {#troubleshooting}

If you have issues when using `setup:upgrade`, verify `__construct` uses the method `EavSetupFactory` not `EavSetup`. You should not directly inject `EavSetup` in extension code. Check your custom code and purchased modules and extensions to verify. After changing the methods, you should be able to properly deploy.

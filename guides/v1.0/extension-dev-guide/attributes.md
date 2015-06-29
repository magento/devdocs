---
layout: default
group: extension-dev-guide
subgroup: Fundamentals
title: EAV and extension attributes
menu_title: Attributes
menu_order: 4
github_link: extension-dev-guide/attributes.md

---

Magento provides two types of attributes that integrators can use to extend the functionality provided out-of-the-box:

* Custom and EAV (Entity-Attribute-Value) attributes. Custom attributes are those added on behalf of a merchant. For example, merchant might need to add attributes to describe products, such as shape or volume. A merchant can add these attributes on the admin panel, and these attributes can be displayed on the GUI. See the merchant documentation for information about information about managing custom attributes.

	Custom attributes are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The `Customer` and `Catalog` modules have the primary models that use EAV attributes. Other modules, such as `ConfigurableProduct`, `GiftMessage`, and `Tax`, use the EAV functionality for `Catalog`.

* Extension attributes. Extension attributes are new in Magento 2. They are used to extend functionality and often use more complex data types than custom attributes. These attributes do not appear on the GUI.



<h2 id="custom">EAV and custom attributes</h2>

`CustomAttributesDataInterface` defines the methods that are called to get and set custom attributes, including `getCustomAttributes()`.

A module has a set of built-in attributes that are always available. The `Catalog` module has several attributes that are defined as EAV attributes, but are treated as built-in attributes. These attributes include:

* attribute_set_id* created_at
* group_price
* media_gallery* name* price* sku* status* store_id* tier_price* type_id* updated_at* visibility* weight

In this case, when `getCustomAttributes()` is called, the system returns only custom attributes that are not in this list.

The `Customer` module does not have treat its EAV attributes in a special manner. As a result, the `getCustomAttributes()` method returns all EAV attributes.

<h2 id="extension">Extension attributes</h2>

Use `ExtensibleDataInterface` to implement extension attributes. In your code, you must define `getExtensionAttributes()` and `setExtensionAttributes(*ExtensionInterface param)`.

<code>public function getExtensionAttributes();</code>

Most likely, you'll want to extend interfaces defined in the `Api/Data` directory of an Magento module. 



<h3 id="declare">Declare extension attributes</h3>


You must create an `<Module>/etc/extension_attributes.xml` file to define the extension attributes for a module:

{% highlight XML %}
<config>
    <extension_attributes for="Path\To\Interface">
        <attribute code="name_of_attribute" type="datatype">
           <resources>
              <resource  ref="permission"/>
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
<td>for</td>
<td>The fully-qualified type name with the namespace that processes the extensions. The value much be a type that implements `ExtensibleDataInterface`. The interface can be in a different module. </td>
<td>Magento\Quote\Api\Data\TotalsInterface</td>
</tr>
<tr>
<td>code </td>
<td>The name of the attribute. The attribute name should be in snake case (the first letter in each word should be in lowercase, with each word separated by an underscore). </td>
<td>gift_cards_amount_used</td>
</tr>
<tr>
<td>type </td>
<td>The data type. This can be a simple data type, such as string or integer, or complex type, such as an interface.</td>
<td>float <br>Magento\CatalogInventory\Api\Data\StockItemInterface</td>
</tr>
<tr>
<td>ref</td>
<td>Optional. Restricts access to the extension attribute to users with the specified permission.</td>
<td>Magento_CatalogInventory::cataloginventory</td>
</tr>
<tr>
<td>reference_table</td>
<td>
The table involved in a join operation. See <a href="#search">Searching extension attributes</a> for details.
</td>
<td>admin_user</td>
</tr>
<tr>
<td>reference_field</td>
<td>Column in the reference_table</td>
<td>user_id</td>
</tr>
<tr>
<td>join_on_field</td>
<td>The column of the table associated with the interface specified in the <code>for</code> keyword that will be used in the join operation.</td>
<td>store_id</td>
</tr>
<tr>
<td>field</td>
<td><p>One or more fields present in the interface specified in the <code>type</code> keyword.</p>
<p>You can specify the <code>column=""</code> keyword to define the column in the reference_table to use. The field value specifies the property on the <code>interface</code> which should be set.</p></td>
<td>&lt;field>firstname&lt;/field><br>&lt;field>lastname&lt;/field><br>&lt;field>email&lt;/field><br><br>
&lt;field column="customer_group_code">code&lt;/field></td>
</tr>
</tbody>

</table>



<h3 id="search">Searching extension attributes</h3>

The system uses a join directive to add external attributes to a collection and to make the collection filterable. The `join` element in the `extension_attributes.xml` file defines which object fields and the database table/column to use as the source of a search. 

In the following example, an attribute named `quoteApiTestAttribute` of type `UserInterface` added to the `CartInterface`. 

{% highlight XML %}
<extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
    <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
         <join reference_table="cataloginventory_stock_item" reference_field="product_id" join_on_field="entity_id">
                <field>qty</field>
            </join>
        </attribute>
   </extension_attributes>
{% endhighlight %}

When `getList()` is called, it returns a list of `ProductInterface`s. When it does this, the code populates the `stock_item` with a joined operation in which the `StockItemInterface`’s `qty` property come from the `cataloginventory_stock_item` table where the `Product`'s `entity_Id` is joined with the `cataloginventory_stock_item.product_id` column. 

<h3 id="ext-auth">Extension attribute authentication</h3>

Individual fields that are defined as extension attributes can be restricted, based on existing permissions. This feature allows extension developers to restrict access to data. 


The following [code sample](https://github.com/magento/magento2/blob/develop/app/code/Magento/CatalogInventory/etc/extension_attributes.xml) defines `stock_item` as an extension attribute of the `CatalogInventory` module. `CatalogInventory` is treated as a “3rd-party extension”. Access to the inventory data is restricted because the quantity of in-stock item may be competitive information.

{% highlight XML %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="stock_item" type="Magento\CatalogInventory\Api\Data\StockItemInterface">
            <resources>
                <resource ref="Magento_CatalogInventory::cataloginventory"/>
            </resources>
        </attribute>
    </extension_attributes>
</config>
{% endhighlight %}

In this example, the `stock_item` attribute is restricted to only the users who have the `Magento_CatalogInventory::cataloginventory` permission. As a result, an anonymous or unauthenticated user issuing a `GET http://<MAGENTO_BASE_URL>/rest/V1/products/<sku>` request will receive product information similar to the following:

<pre>
{
    "sku": “tshirt1”,
    “price”: “20.00”,
    “description”: “New JSmith design”,
    “extension_attributes”: {
        “logo size”: “small”
    },
    “custom_attributes”: {
        “artist”: “James Smith”
    }
}
</pre>

However, an authenticated user with the permission `Magento_CatalogInventory::cataloginventory` receives the additional `stock_item` field:

<pre>
{
   "sku": “tshirt1”,
   “price”: “20.00”,
   “description”: “New JSmith design”,
    “extension_attributes”: {
        “logo size”: “small”,
        “stock_item” : {
            “status” : “in_stock”
            “quantity”: 70
             }
         },
        “custom_attributes”: {
          “artist”: “James Smith”
        }
}
</pre>

This only works for extension attributes (those attributes defined in an `extension_attributes.xml` file). There are no permission restrictions on the rest of the returned data. For example, there is no way to restrict `custom_attributes`.


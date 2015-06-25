---
layout: default
group: extension-dev-guide
subgroup: How to
title: Attributes
menu_title: Work with attributes
menu_order: 5
github_link: extension-dev-guide/attributes.md
---
This topic describes the two types of attributes that provide additional functionality beyond the attributes that Magento provides. 

* Custom attributes are those the merchant creates. They 



Built-in attributes are 

<h2 id="custom">Custom and EAV attributes</h2>



<h2 id="extension">Extension attributes</h2>



As far as the important interfaces/methods/objects, I would say everything in lib/internal/Magento/Framework is the “basics” (and there are certainly more important ones there than others like the Magento\Framework\Object class but that’s important. If you’re talking more specifically for types that would be in the extension_attributes in the extension_attributes “for” attribute, I would say that everything under a Magento\<ModuleName>\Api directory.

https://github.com/magento/magento2/tree/develop/app/code/Magento/Catalog/Api

https://github.com/magento/magento2/tree/develop/app/code/Magento/Customer/Api

etc.

There are many Api directories but these are the primary types that extension developers should be concerned with beyond the basics. And specifically for those that are inside the Api\Data directory are the ones that you could have extension_attributes for (well technically they also need to extend/implement ExtensibleDataInterface https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/Api/ExtensibleDataInterface.php   so they need a getExtensionAttributes() method like https://github.com/magento/magento2/blob/develop/app/code/Magento/Customer/Api/Data/AddressInterface.php but most Api\Data types do)



<h3 id="declare">Declare extension attributes</h3>

Create an `<Module>/etc/extension_attributes.xml` file to define the extension attributes for a module:

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
<th>Examples</th>
</thead>
<tbody>
<tr>
<td>for</td>
<td>The path to the interface that processes the extensions. The interface can be in a different module. The path can be anything under a <code>Magento/&lt;Module&gt;/Api</code> directory.</td>
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
<td>The interface field that will be used in the join operation.</td>
<td>store_id</td>
</tr>
<tr>
<td>field</td>
<td>A column defined the specified <code>reference_table</code> that will be joined. </td>
<td>firstname<br>lastname<br>email</td>
</tr>
</tbody>

</table>


<h3 id="what">What to extend</h3>

As a module developer, you'll be most interested in extending the interfaces defined in the `Magent/<Module>/Api/Data` directory. 

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

In this example, the `stock_item` attribute is restricted to only the users who have the `Magento_CatalogInventory::cataloginventory` permission. As a result, an anonymous or unauthenticated user issuing a `GET http://store/rest/V1/products/<sku>` request will receive product information similar to the following:

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

<h3 id="search">Searching extension attributes</h3>

The system uses a join directive to add external attributes to a collection and to make the collection filterable. 

In the following example, an attribute named `test_attribute` of type UserInterface added to the LinkInterface. A join is performed 

{% highlight XML %}
 <extension_attributes for="Magento\Downloadable\Api\Data\LinkInterface">
        <attribute code="test_attribute" type="Magento\User\Api\Data\UserInterface">
            <join reference_table="admin_user"
                  join_on_field="product_id"
                  reference_field="user_id"
                    >
                <field>firstname</field>
                <field>lastname</field>
                <field>email</field>
            </join>
        </attribute>
    </extension_attributes>
{% endhighlight %}

When `getList()` is called, it returns a list of `LinkInterface`s. When it does this, the code will populate the `test_attribute` with a joined operation where the UserInterface’s firstName, lastName, and email properties will come from the `admin_user` table where the `Link`'s `productId` is joined with the `admin_user.user_id` column. 
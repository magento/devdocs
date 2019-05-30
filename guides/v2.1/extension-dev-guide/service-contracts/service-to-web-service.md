---
group: php-developer-guide
subgroup: 99_Module Development
title: Configure services as web APIs
menu_title: Configure services as web APIs
menu_order: 20
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
functional_areas:
  - Services
---

You can configure a Magento or third-party service as a web [API](https://glossary.magento.com/api).

To [configure a web API](#configure-webapi), you define [XML](https://glossary.magento.com/xml) elements and attributes in the `webapi.xml` XML configuration file for the [module](https://glossary.magento.com/module) for the service. The `webapi.xml` file for your module specifies an XML schema file for validation. By default, this file is `app/code/<VENDOR>/Webapi/etc/webapi.xsd`.

Your module can use the default `webapi.xsd` file or you can create a customized XML schema file for validation.

Users can make REST or SOAP calls to access the [web API](https://glossary.magento.com/web-api).

To configure a web API, read these topics:

- [Configure a web API](#configure-webapi)

- [webapi.xml configuration options](#configuration-options)

- [Sample webapi.xml file](#sample-webapi)

- [webapi.xsd XML schema file](#validate-webapi)

- [Forcing Request Parameters](#forced-parameters)

## Configure a web API {#configure-webapi}

To configure a web API for a service, you define XML elements and attributes in the
   `app/code/Magento/&lt;MODULE&gt;/etc/webapi.xml` file, where `&lt;MODULE&gt;` is the module name.
   For example, the web API for the Customer service is defined in the `app/code/Magento/Customer/etc/webapi.xml` configuration file.

## Service Interface Requirements {#service-interface-requirements}

After a service class is configured using the `webapi.xml` file, Magento dynamically makes the service method available using the web API. Because this is automatically generated, it is important that the service class be formatted a very specific way.

This makes sense when you consider that while a service class possibly expects objects of a specific class type (such a save method) and possibly returns a result that is a class or array of classes, neither SOAP nor REST are guaranteed to have that class defined on the client end or even to have a concept similar to a [PHP](https://glossary.magento.com/php) class. Because of this, Magento uses reflection to automatically create these classes and sets data that you have submitted in JSON or HTTP array syntax onto an instance of the expected PHP class when calling the service method.  

Conversely, if an object is returned from one of these methods, Magento automatically converts that PHP object into a JSON or SOAP object before sending it over the web API.

To do this conversion, the Magento application must know information about both the parameters the service method is expecting and the return type of the result the service method delivers. PHP 5.x does not allow for type-hinting for scalar parameters or for return types so in order to convert the array or JSON object to or from the appropriate class type, PHP relies on the PHP doc block. Specifically, the lines containing `@param` and `@return` must follow certain rules for Magento to be able to correctly convert between types.

For SOAP and REST to work correctly, the following rules must be followed by the service interface's doc block:

- All methods exposed by the web API must follow these rules
- All methods on objects expected as parameters or returned must follow these rules
- Parameters must be defined in the doc block as

  - @param type $paramName

- Return type must be defined in the doc block as

  - @return type

- Valid scalar types include: `mixed` (or `anyType`), `bool` (or `boolean`), `str` (or `string`), `integer` (or `int`), `float`, and `double`.
- Valid object types include a fully qualified class name or a fully qualified interface name.
- Any parameters or return values of type array can be denoted by following any of the previous types by an empty set of square brackets `[]`

Following are some examples of various types and what they would look like in the doc block:

- A parameter $types which can be an array of strings:

  - @param string[] $types
- A parameter $id which can be an integer:

  - @param int $id

- A parameter $customer which is an object of class `\Magento\Customer\Api\Data\CustomerInterface`:

  - @param \Magento\Customer\Api\Data\CustomerInterface $customer

    Note that even if the class `\Magento\Customer\Api\Data\CustomerInterface` is in the same namespace (or a sub-namespace) of the current class or a use statement has exists at the top of the class, the fully qualified namespace must be used or the web API throws an exception.

- A return which is an array of objects of type `\Magento\Customer\Api\Data\CustomerInterface`:

  - @return \Magento\Customer\Api\Data\CustomerInterface[]

{: .bs-callout .bs-callout-info }
If a service method argument is called `item`, there will be a problem during SOAP processing. All item nodes are removed during SOAP request processing. This is done to unwrap array items that are wrapped by the SOAP server into an `item` element.

## webapi.xml configuration options {#configuration-options}

To define web API components, set these attributes on these XML elements in the
   `webapi.xml` configuration file, as follows:

<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>XML element</th>
      <th>Description</th>
      <th>Attributes</th>
   </tr>
   <tr>
      <td>
         <p>`&lt;routes&gt;`</p>
      </td>
      <td>
         <p>Required. Root element that defines the namespace and location of the XML schema file.</p>
      </td>
      <td>
         <ul>
            <li>
               <p>`xmlns:xsi`. Required. Defines the namespace for the XML schema instance.</p>
            </li>
            <li>
               <p>`xsi:noNamespaceSchemaLocation`. Required. Defines the path and file name of the XML schema file to use to validate the web API.</p>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p>`&lt;route&gt;`</p>
      </td>
      <td>
         <p>Required. Child element of `&lt;routes&gt;`. Defines the HTTP route for the web API method.</p>
      </td>
      <td>
         <ul>
            <li>
               <p>`method`. Required. String. HTTP method. Valid values are GET, POST, PUT, and DELETE.</p>
            </li>
            <li>
               <p>`url`. Required. String.
                  Magento resource. Optionally, one or more template parameters.
               </p>
            </li>
            <li>
               <p>`secure`. Optional. Boolean. Indicates that the route is accessible over only HTTPS. Any attempts to access this route over non-secure causes an exception.</p>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p>`&lt;service&gt;`</p>
      </td>
      <td>
         <p>Required. Child element of `&lt;route&gt;`. Defines the implemented interface and the web API method name.</p>
      </td>
      <td>
         <ul>
            <li>
               <p>`class`. Required. String. Location and name of implemented interface.</p>
            </li>
            <li>
               <p>`method`. Required. String. Web API method name.</p>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p>`&lt;resources&gt;`</p>
      </td>
      <td>
         <p>Required. Child element of `&lt;route&gt;`. Container for one or more resource definitions.</p>
      </td>
      <td>
         <p>None.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>`&lt;resource&gt;`</p>
      </td>
      <td>
         <p>Required. Child element of `&lt;resources&gt;`. Defines a resource to which the caller must have access.</p>
      </td>
      <td>
         <ul>
            <li>
               <p>`ref`.
                  Required. Referenced resource. Valid values are `self`, `anonymous`, or a Magento resource, such as `Magento_Customer::group`.
               </p>
               <p><strong>Note</strong>:The Magento web API framework enables guest users to access resources that are configured with `anonymous` permission.</p>
                  <p>Any user that the framework cannot authenticate through existing <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication.html">authentication
                     mechanisms</a> is considered a guest user.</p>

            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p>`&lt;data&gt;`</p>
      </td>
      <td>
         <p>Optional. Child element of `&lt;route&gt;`. Container for one or more parameter definitions.</p>
      </td>
      <td>
         <p>None.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>`&lt;parameter&gt;`</p>
      </td>
      <td>
         <p>Required if `&lt;data&gt;` is specified. Child element of `&lt;data&gt;`. Defines a parameter.</p>
      </td>
      <td>
         <ul>
            <li>
               <p>`name`. String. Parameter name.</p>
            </li>
            <li>
               <p>`force`. Boolean. <a href="#forced-parameters">Forcing Request Parameters</a></p>
            </li>
         </ul>
      </td>
   </tr>
</table>

## Sample webapi.xml file {#sample-webapi}

This excerpt is from the `webapi.xml` file that defines the Customer service web API:

```xml
<?xml version="1.0"?>
    <routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <!-- Customer Group Service-->
    <route url="/V1/customerGroups/:id" method="GET">
        <service class="Magento\Customer\Api\GroupRepositoryInterface" method="getById"/>
        <resources>
            <resource ref="Magento_Customer::group"/>
        </resources>
    </route>
...
    <route url="/V1/customers/me/billingAddress" method="GET">
        <service class="Magento\Customer\Api\AccountManagementInterface" method="getDefaultBillingAddress"/>
        <resources>
            <resource ref="self"/>
        </resources>
        <data>
            <parameter name="customerId" force="true">%customer_id%</parameter>
        </data>
    </route>
</routes>
```

In this `webapi.xml` example:
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Line</th>
      <th>Defines</th>
   </tr>
   <tr>
      <td>
         <p>3</p>
      </td>
      <td>
         <p>The XML schema file that is used to validate the XML.</p>
         <p>The XML schema file is `xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd`.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>5</p>
      </td>
      <td>
         <p>The HTTP method and web resource through which to access the route.</p>
         <p>The HTTP method is GET.</p>
         <p>The resource is `/V1/customerGroups/:id`. Users must substitute a customer ID for the `id` template parameter.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>6</p>
      </td>
      <td>
         <p>The interface that the route implements and the name of the web API method.</p>
         <p>The route implements the `Magento\Customer\Api\GroupRepositoryInterface` interface.</p>
         <p>The web API method name is `getById`.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>8</p>
      </td>
      <td>
         <p>The resource to which the caller must have access.</p>
         <p>The caller must have access to `Magento_Customer::group` resource.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>18</p>
      </td>
      <td>
         <p>A required parameter.</p>
         <p>The `id` parameter is required on GET calls to `/V1/customers/me/billingAddress`.</p>
      </td>
   </tr>
</table>

## webapi.xsd XML schema file {#validate-webapi}

The `webapi.xml` file for your module must specify an XML schema file for validation. Your `webapi.xml` file can specify the default or a customized XML schema file.
The default `webapi.xsd` XML schema file can be found in the `app/code/Magento/Webapi/etc` directory.

The following table defines the `service` node attributes:

Attribute name | Required | Description
--- | --- | ---
`class` | Yes | The interface responsible for handling the API request.
`method` | Yes | The interface's method which handles the execution of the web API.

## Forcing Request Parameters {#forced-parameters}

Parameters in the `webapi.xml` can be forced. This ensures that on specific routes, a specific value is always used. For instance, in the example "/V1/customers/me/billingAddress" route above, the `customerId` parameter is forced to match the ID of the currently logged in user.
Additional parameter overrides can be registered via `di.xml` by adding new items to the
`paramOverriders` argument for `\Magento\Webapi\Controller\Rest\ParamsOverrider`. Parameter
overriders must implement `\Magento\Framework\Webapi\Rest\Request\ParamOverriderInterface`. An
example excerpt from `di.xml`

```xml
<type name="Magento\Webapi\Controller\Rest\ParamsOverrider">
    <arguments>
        <argument name="paramOverriders" xsi:type="array">
            <item name="%my_value%" xsi:type="object">VENDOR\MODULE\Controller\Rest\ParamOverriderMyValue</item>
        </argument>
    </arguments>
</type>
```

The above example create a new parameter override available for use in `webapi.xml`. The value passed for
   `%my_value%` will be the return value of
   `\VENDOR\MODULE\Controller\Rest\ParamOverriderMyValue::getOverriddenValue`. Example:

```xml
<route url="/V1/example/me/service" method="GET">
    ...
    <data>
        <parameter name="myValue" force="true">%my_value%</parameter>
    </data>
    ...
</route>
```

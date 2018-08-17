---
group: extension-dev-guide
subgroup: 99_Module Development
title: Configure services as web APIs
menu_title: Configure services as web APIs
menu_order: 20
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
version: 2.0
redirect_from: /guides/v1.0/extension-dev-guide/service-contracts/service-to-web-service.html
functional_areas:
  - Services
---

## Overview   {#overview-web-service}

<p>You can configure a Magento or third-party service as a web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}.</p>
<p>To <a href="#configure-webapi">configure a web API</a>, you define {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} elements and attributes in the <code>webapi.xml</code> XML configuration file for the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} for the service.
   The <code>webapi.xml</code> file for your module specifies an XML schema file for validation.
   By default, this file is <code>app/code/&lt;VENDOR>/Webapi/etc/webapi.xsd</code>.
</p>
<p>Your module can use the default <code>webapi.xsd</code> file or you can create a customized XML schema file for validation.</p>
<p>Users can make REST or SOAP calls to access the {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %}.</p>
<p>To configure a web API, read these topics:</p>
<ul>
   <li>
      <p><a href="#configure-webapi">Configure a web API</a></p>
   </li>
   <li>
      <p><a href="#configuration-options">webapi.xml configuration options</a></p>
   </li>
   <li>
      <p><a href="#sample-webapi">Sample webapi.xml file</a></p>
   </li>
   <li>
      <p><a href="#validate-webapi">webapi.xsd XML schema file</a></p>
   </li>
   <li>
      <p><a href="#forced-parameters">Forcing Request Parameters</a></p>
   </li>
</ul>

## Configure a web API   {#configure-webapi}

<p>To configure a web API for a service, you define XML elements and attributes in the
   <code>app/code/Magento/&lt;MODULE&gt;/etc/webapi.xml</code> file, where <code>&lt;MODULE&gt;</code> is the module name.
   For example, the web API for the Customer service is defined in the <code>app/code/Magento/Customer/etc/webapi.xml</code> configuration file.
</p>

## Service Interface Requirements   {#service-interface-requirements}

After a service class is configured using the `webapi.xml` file, Magento dynamically makes the service method available using the web API. Because this is automatically generated, it is important that the service class be formatted a very specific way.

This makes sense when you consider that while a service class possibly expects objects of a specific class type (such a save method) and possibly returns a result that is a class or array of classes, neither SOAP nor REST are guaranteed to have that class defined on the client end or even to have a concept similar to a {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class. Because of this, Magento uses reflection to automatically create these classes and sets data that you have submitted in JSON or HTTP array syntax onto an instance of the expected PHP class when calling the service method.  

Conversely, if an object is returned from one of these methods, Magento automatically converts that PHP object into a JSON or SOAP object before sending it over the web API.

To do this conversion, the Magento application must know information about both the parameters the service method is expecting and the return type of the result the service method delivers. PHP 5.x does not allow for type-hinting for scalar parameters or for return types so in order to convert the array or JSON object to or from the appropriate class type, PHP relies on the PHP doc block. Specifically, the lines containing `@param` and `@return` must follow certain rules for Magento to be able to correctly convert between types.

For SOAP and REST to work correctly, the following rules must be followed by the service interface's doc block:

*   All methods exposed by the web API must follow these rules
*   All methods on objects expected as parameters or returned must follow these rules
*   Parameters must be defined in the doc block as

        * @param type $paramName
*   Return type must be defined in the doc block as

        * @return type
*   Valid scalar types include: `mixed` (or `anyType`), `bool` (or `boolean`), `str` (or `string`), `integer` (or `int`), `float`, and `double`.
*   Valid object types include a fully qualified class name or a fully qualified interface name.
*   Any parameters or return values of type array can be denoted by following any of the previous types by an empty set of square brackets `[]`

Following are some examples of various types and what they would look like in the doc block:

*   A parameter $types which can be an array of strings:

        * @param string[] $types
*   A parameter $id which can be an integer:

        * @param int $id
*   A parameter $customer which is an object of class `\Magento\Customer\Api\Data\CustomerInterface`:

        * @param \Magento\Customer\Api\Data\CustomerInterface $customer

    Note that even if the class `\Magento\Customer\Api\Data\CustomerInterface` is in the same namespace (or a sub-namespace) of the current class or a use statement has exists at the top of the class, the fully qualified namespace must be used or the web API throws an exception.

*   A return which is an array of objects of type `\Magento\Customer\Api\Data\CustomerInterface`:

        * @return \Magento\Customer\Api\Data\CustomerInterface[]


<div class="bs-callout bs-callout-info" id="info">
  <p>If a service method argument is called <code>item</code>, there will be a problem during SOAP processing. All item nodes are removed during SOAP request processing. This is done to unwrap array items that are wrapped by the SOAP server into an <code>item</code> element. </p>
</div>

## webapi.xml configuration options   {#configuration-options}

<p>To define web API components, set these attributes on these XML elements in the
   <code>webapi.xml</code> configuration file, as follows:
</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>XML&nbsp;element</th>
      <th>Description</th>
      <th>Attributes</th>
   </tr>
   <tr>
      <td>
         <p><code>&lt;routes&gt;</code></p>
      </td>
      <td>
         <p>Required. Root element that defines the namespace and location of the XML schema file.</p>
      </td>
      <td>
         <ul>
            <li>
               <p><code>xmlns:xsi</code>. Required. Defines the namespace for the XML schema instance.</p>
            </li>
            <li>
               <p><code>xsi:noNamespaceSchemaLocation</code>. Required. Defines the path and file name of the XML schema file to use to validate the web API.</p>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;route&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;routes&gt;</code>. Defines the HTTP route for the web API method.</p>
      </td>
      <td>
         <ul>
            <li>
               <p><code>method</code>. Required. String. HTTP method. Valid values are GET, POST, PUT, and DELETE.</p>
            </li>
            <li>
               <p><code>url</code>. Required. String.
                  Magento resource. Optionally, one or more template parameters.
               </p>
            </li>
            <li>
               <p><code>secure</code>. Optional. Boolean. Indicates that the route is accessible over only HTTPS. Any attempts to access this route over non-secure causes an exception.</p>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;service&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;route&gt;</code>. Defines the implemented interface and the web API method name.</p>
      </td>
      <td>
         <ul>
            <li>
               <p><code>class</code>. Required. String. Location and name of implemented interface.</p>
            </li>
            <li>
               <p><code>method</code>. Required. String. Web API method name.</p>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;resources&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;route&gt;</code>. Container for one or more resource definitions.</p>
      </td>
      <td>
         <p>None.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;resource&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;resources&gt;</code>. Defines a resource to which the caller must have access.</p>
      </td>
      <td>
         <ul>
            <li>
               <p><code>ref</code>.
                  Required. Referenced resource. Valid values are <code>self</code>, <code>anonymous</code>, or a Magento resource, such as <code>Magento_Customer::group</code>.
               </p>
               <p><strong>Note</strong>:The Magento web API framework enables guest users to access resources that are configured with <code>anonymous</code> permission.</p>
                  <p>Any user that the framework cannot authenticate through existing <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication.html">authentication
                     mechanisms</a> is considered a guest user.</p>

            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;data&gt;</code></p>
      </td>
      <td>
         <p>Optional. Child element of <code>&lt;route&gt;</code>. Container for one or more parameter definitions.</p>
      </td>
      <td>
         <p>None.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;parameter&gt;</code></p>
      </td>
      <td>
         <p>Required if <code>&lt;data&gt;</code> is specified. Child element of <code>&lt;data&gt;</code>. Defines a parameter.</p>
      </td>
      <td>
         <ul>
            <li>
               <p><code>name</code>. String. Parameter name.</p>
            </li>
            <li>
               <p><code>force</code>. Boolean. <a href="#forced-parameters">Forcing Request Parameters</a></p>
            </li>
         </ul>
      </td>
   </tr>
</table>

## Sample webapi.xml file   {#sample-webapi}

<p>This excerpt is from the <code>webapi.xml</code> file that defines the Customer service web API:</p>
``` xml
<?xml version="1.0"?>
    <routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../app/code/Magento/Webapi/etc/webapi.xsd">
    <!-- Customer Group Service-->
    <route url="/V1/customerGroups/:id" method="GET">
        <service class="Magento\Customer\Api\GroupRepositoryInterface" method="get"/>
        <resources>
            <resource ref="Magento_Customer::group"/>
        </resources>
    </route>
...
    <route url="/V1/customers/me/billingAddress" method="GET">
        <service class="Magento\Customer\Service\V1\CustomerAddressServiceInterface" method="getDefaultBillingAddress"/>
        <resources>
            <resource ref="self"/>
        </resources>
        <data>
            <parameter name="customerId" force="true">%customer_id%</parameter>
        </data>
    </route>
</routes>
```
<p>In this <code>webapi.xml</code> example:</p>
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
         <p>The XML schema file is <code>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd</code>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>5</p>
      </td>
      <td>
         <p>The HTTP method and web resource through which to access the route.</p>
         <p>The HTTP method is GET.</p>
         <p>The resource is <code>/V1/customerGroups/:id</code>. Users must substitute a customer ID for the <code>id</code> template parameter.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>6</p>
      </td>
      <td>
         <p>The interface that the route implements and the name of the web API method.</p>
         <p>The route implements the <code>Magento\Customer\Api\GroupRepositoryInterface</code> interface.</p>
         <p>The web API method name is <code>get</code>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>8</p>
      </td>
      <td>
         <p>The resource to which the caller must have access.</p>
         <p>The caller must have access to <code>Magento_Customer::group</code> resource.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>18</p>
      </td>
      <td>
         <p>A required parameter.</p>
         <p>The <code>id</code> parameter is required on GET calls to <code>/V1/customers/me/billingAddress</code>.</p>
      </td>
   </tr>
</table>

## webapi.xsd XML schema file   {#validate-webapi}

<p>The <code>webapi.xml</code> file for your module must specify an XML schema file for validation. Your <code>webapi.xml</code> file can specify the default or a customized XML schema file.</p>
<p>The default <code>webapi.xsd</code> XML schema file can be found in the <code>app/code/Magento/Webapi/etc</code> directory.</p>

## Forcing Request Paramters   {#forced-parameters}

<p>Parameters in the <code>webapi.xml</code> can be forced. This ensures that on specific routes, a specific value is
   always used. For instance, in the example "/V1/customers/me/billingAddress" route above, the <code>customerId</code>
   parameter is forced to match the ID of the currently logged in user.</p>
<p>Additional parameter overrides can be registered via <code>di.xml</code> by adding new items to the
   <code>paramOverriders</code> argument for <code>\Magento\Webapi\Controller\Rest\ParamsOverrider</code>. Parameter
   overriders must implement <code>\Magento\Framework\Webapi\Rest\Request\ParamOverriderInterface</code>. An
   example excerpt from <code>di.xml</code></p>
``` xml
<type name="Magento\Webapi\Controller\Rest\ParamsOverrider">
    <arguments>
        <argument name="paramOverriders" xsi:type="array">
            <item name="%my_value%" xsi:type="object">VENDOR\MODULE\Controller\Rest\ParamOverriderMyValue</item>
        </argument>
    </arguments>
</type>
```
<p>The above example create a new parameter override available for use in <code>webapi.xml</code>. The value passed for
   <code>%my_value%</code> will be the return value of
   <code>\VENDOR\MODULE\Controller\Rest\ParamOverriderMyValue::getOverriddenValue</code>. Example:</p>
``` xml
<route url="/V1/example/me/service" method="GET">
    ...
    <data>
        <parameter name="myValue" force="true">%my_value%</parameter>
    </data>
    ...
</route>
```

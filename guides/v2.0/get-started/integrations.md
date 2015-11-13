---
layout: default
group: get-started
subgroup: A_Concepts
title: Integrations
menu_title: Integrations
menu_order: 8

github_link: get-started/bk-get-started-api.md
redirect_from: /guides/v1.0/get-started/integrations.html
---

**Integration** enables third-party services to call the Web API by using access tokens.
Extensions can also provide a configuration file so that an integration can be automatically pre-configured. The module also contains the data
model for request and access token management.


<h2>Something</h2>

System integrators may want to c

Integration - Provides integration entity management, authorization with OAuth and user data, storage for security tokens, framework, which is extended by API, Webhooks and possibly other 3rd party extensions.

API. Extends Integration module by providing "API" tab in UI and API configuration in xml (+xsd schema for that file).

Integration is a completely independent module (but requires OAuth library), while API and Webhook modules depend on Integration and extend it. It is not planned, that the API module can be removed from the system, while Webhook has better chances for the removal. Anyway, the structure of the integration functionality is modular and is fairly divided between the aforementioned modules.

<h3>config.xml</h3>

<integrations>
   <integration name="TestIntegration1">
       <resources>
           <resource name="Magento_Customer::manage" />
           <resource name="Magento_Customer::online" />
       </resources>
   </integration>
</integrations>

<table>
<tr>
<th>Element</th>
<th>Description</th>
</tr>
<tr>
<td><code>integrations</code></td>
<td>Contains one or more integration definitions.</td>
</tr>
<tr>
<td><code>integration name=""</code></td>
<td>Defines an integration. </td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>

<h3>api.xml</h3>

<integrations>
    <integration name="Test Integration1">
        <!-- List of API resources required by the integration. These are resource ids defined
         in etc/acl.xml of modules and subsequently mapped to web APIs in webapi.xml. -->
        <resources>
            <!-- To grant permission to Magento_Log::online, its parent Magento_Customer::customer needs to be declared as well-->
            <resource name="Magento_Customer::customer" />
            <resource name="Magento_Log::online" />
            <!-- To grant permission to Magento_Sales::reorder, all its parent resources need to be declared-->
            <resource name="Magento_Sales::sales" />
            <resource name="Magento_Sales::sales_operation" />
            <resource name="Magento_Sales::sales_order" />
            <resource name="Magento_Sales::actions" />
            <resource name="Magento_Sales::reorder" />
        </resources>
    </integration>
    <integration name="Test Integration2">
        <resources>
            <resource name="Magento_Sales::sales" />
            <resource name="Magento_Sales::sales_operation" />
            <resource name="Magento_Sales::transactions" />
        </resources>
    </integration>
</integrations>
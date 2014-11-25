---
layout: default
title: SOAP web API calls
---

<h1 id="m2devgde-soap-eb-api-calls.md">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}architecture/view/view-lib.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="formats">How to get a WSDL</h2>

A WSDL file is generated only for services you request. This means that different clients may use different services and therefore use different WSDLs.

The Magento 2 Web API uses WSDL 1.2, which complies with WS-I 2.0 Basic Profile.

Each Magento service is represented as a separate service in the WSDL.

To consume several services, you must specify them in the WSDL endpoint URL.

Currently, only the following service is available:

<table style="width:100%">
   <colgroup>
      <col width="20%">
      <col width="40%">
      <col width="40%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>Service</th>
         <th>WSDL endpoint URL</th>
         <th>Available services</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>customer</td>
         <td>http://magentohost/soap?wsdl&services=customerV1</td>
         <td>Magento\Customer\Service\V1\CustomerService</td>
      </tr>
   </tbody>
</table>

You must specify each service version in the endpoint URL.

This way, you can have a strict contract between your application and the service provider.
<h3>Service class-to-service name conversion rules</h3>

Service names use the following conventions:

* CamelCase is used for service naming.
* Service is omitted.
* Magento is omitted.
* If the service name contains the module name, the module name is omitted.

<p><b>Example:</b></p>

<pre>Magento\Customer\Service\V1\CustomerService maps to customerCustomerService</pre>

<h2>Authentication</h2>

You should access all protected SOAP resources over SSL; otherwise, your credentials are sent in the clear and can be easily compromised. Access tokens are strings representing access authorizations issued to the client.

<h2>Faults</h2>

Web API returns SOAP faults to the client. SOAP faults follow the structure defined in W3C SOAP 1.2 fault code specification.

If service throws `Magento_Service_Exception` or any of its derivatives:

* Code is "Sender" in fault message
* The error code returned as part of an exception by a service is Code in {{Detail }}node of fault message.
* The error message returned as part of an exception by a service is Reason in fault message.
* The list of parameters returned as part of exception including Detail in fault message.
* For all system errors, set Code as 'Receiver' in fault message.

<p><b>Sample SOAP error message:</b></p>

<blockquote>
<pre>
&lt;env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"
xmlns:xml="http://www.w3.org/XML/1998/namespace"
xmlns:m="http://magento.com">
&lt;env:Body>
&lt;env:Fault>
&lt;env:Code>
&lt;env:Value>env:Sender&lt;/env:Value>
&lt;/env:Code>
&lt;env:Reason>
&lt;env:Text xml:lang="en">Invalid Quantity&lt;/env:Text>
&lt;/env:Reason>
&lt;env:Detail>
&lt;m:ErrorDetails>
&lt;m:Parameters>
&lt;m:parameterA>product&lt;/m:parameterA>
&lt;m:parameterB>email&lt;/m:parameterB>
&lt;/m:Parameters>
&lt;m:Code>3100&lt;/m:Code>
&lt;/m:ErrorDetails>
&lt;/env:Detail>
&lt;/env:Fault>
&lt;/env:Body>
&lt;/env:Envelope>
</pre>
</blockquote>


<p><b>Sample JSON error message:</b></p>

<blockquote>
<pre>
error: {
code: 3100,
message: Invalid Quantity,
parameters: [product, email]
}
</pre>
</blockquote>

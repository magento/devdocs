---
layout: default
title: What is the web API framework?
---

The web API framework gives third-party developers access to the service framework using REST or SOAP calls. Currently, Web API access is limited to Customer objects but we plan to expand access in time to include any Magento object.

Although REST and SOAP use different payloads and routing, they use the same authorization mechanisms to provide access to Magento services.

## Exposing a Service Using REST or SOAP

A Magento service can be exposed using REST only or using both SOAP and REST. In other words, you cannot expose a service using SOAP without also exposing it using REST.

### Configuring webapi.xml

To start, you must configure your service using `app/code/[Vendor]/<ModuleName>/etc/webapi.xml`. Each REST API call must have a corresponding `<rest route>` in `webapi.xml`. In other words, to access a method using REST, the method must have a `<rest route>` in `webapi.xml`; otherwise, the method cannot be accessed.

If a REST route is sensitive and is expected to be executed over HTTPS only, the method must use the `secure = true` attribute. Attempting to access a `secure` route using non-secure means results in an exception.

### Sample webapi.xml

A sample `webapi.xml` follows:

<script src="https://gist.github.com/xcomSteveJohnson/3d01cdea721b623b5264.js"></script>

In this `webapi.xml`:

*   The first route is accessible only by secure HTTP POST calls to `/V1/customers/me`

*   The first route calls the `getCustomer` method of <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>

* 	`<resource ref>` means that the caller must be authorized to call `Magento_Customer::customer_self`

*	The second route is accessible only using HTTP GET calls to `/V1/customer/:id`, where `:id` is the ID of the customer you wish to retrieve

*	The parameter `id` is required

*	This second route also calls the 'getCustomer' method of <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>

*	The caller must be authorized to call `Magento_Customer::read`

For comparison, refer to Customer's <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a>.

### Sample webapi.xsd

Your `webapi.xml` must be validated by an `app/code/_Vendor_/Webapi/etc/webapi.xsd`. For comparision see Customer's, <a href="{{ site.mage2000url }}app/code/Magento/Webapi/etc/webapi.xsd" target="_blank">webapi.xsd</a>.

Your module can use `webapi.xsd` or you can create a customized validation.

#### Related Topics:

*	<a href="{{page.baseurl}}config-guide/integration/cg-authorization.html">Authorizing Web API Requests</a>
*	<a href="{{page.baseurl}}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a>
*	<a href="{{page.baseurl}}get-started/gs-web-api-request.html">Step 2. Construct a request</a>


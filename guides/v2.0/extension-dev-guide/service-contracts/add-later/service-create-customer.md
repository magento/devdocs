---
layout: default
title: Services Use Case&mdash;Creating a Customer
---

This topic discusses a simplified way to create customer records using a conceptualized client. We discuss how to get started by helping you examine service layer models and interfaces to get the mechanism you need; and how to use the data object builder and service data objects to send the data. After you read this topic, you should have a general idea of how to work with services.

This topic does not discuss the details of creating customers (for example, registering using Facebook credentials or copying customers from an external database).

## Getting Started

Before you think about writing your own service, you should look at an existing Magento service to see what it offers you. For example, the Customer service provides the following resources:

*	Models

	Models interact with resources to do things like get objects, set passwords, and perform authentication. Customer service models have more than 70 public methods, including `public function loadByEmail($customerEmail)` in <a href="{{ site.mage2000url }}app/code/Magento/Customer/Model/Customer.php" target="_blank">Customer</a>, which gets a customer record using their e-mail address.

	One advantage of using a service is your client code doesn't interact directly with the model at all; the service does that for you.

*	Interfaces

	Clients interact with services using methods on their interfaces, as discussed in [Service contracts]({{page.baseurl}}service-contracts.html). Customer service interfaces have more than 20 public methods, including public function `createCustomer()` in <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>, which creates a customer record.

*	Service data objects

	Service data objects send data to and from interfaces. Service data objects are "read-only", meaning they have getters but not setters. The Customer service has several service data objects, including <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">Customer</a>, which returns customer data.

*	Service data object builders

	Builders have the setters you can use to set data values in the service data object before sending them to the service to be consumed. For example, <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/CustomerBuilder.php" target="_blank">CustomerBuilder</a> has a `setFirstname` method you can use to set a customer's first name. You can get the first name using the `getFirstname` method in <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">Customer data object</a>.

## Creating the Customer Record

Create a customer record as follows:

<div id="accordion">
  <h3>Step 1: Locate the createCustomer method</h3>
  <div><p>Locate the <tt>createCustomer</tt> method on the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>.</p>

	<p>Notice the code comments also:</p>

	<script src="https://gist.github.com/xcomSteveJohnson/398aa808d3986351b972.js"></script>

	<p>This is the interface your client code interacts with. </p></div>

	<h3>Step 2: Declare a constructor dependency</h3>

<div><p>In your client code, declare a constructor dependency:</p>

	<script src="https://gist.github.com/xcomSteveJohnson/4b9a08174a6aaa83a4e8.js"></script>

	<p>Dependency injection passes (injects) dependencies to an object instead of the object pulling the dependencies from the environment. In other words, instead of objects configuring themselves, the objects are configured by an external entity. For more information, see <a href="https://wiki.magento.com/display/MAGE2DOC/Using+Dependency+Injection" target="_blank">Using Dependency Injection</a>.</p>

<p>Constructor dependency injection uses a constructor to declare the dependencies. In dependencies in the preceding example are named:</p>

<ul><li><tt>$customerAccountService</tt>, a dependency on <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>.</li>
	<li><tt>$customerBuilder</tt>, a dependency on the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/customerBuilder.php" target="_blank">customerBuilder</a> service data object builder.</li>
	<li><tt>$customerBuilder</tt>, a dependency on the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/CustomerBuilder.php" target="_blank">CustomerBuilder</a> service data object builder.</li></ul>
</div>
<h3>Step 3: Create the customer record</h3>
<div><p>In your client code, create the customer record.</p>

	<script src="https://gist.github.com/xcomSteveJohnson/d9c51387caa8f7f8d15f.js"></script>

<p>This code uses the dependencies declared in step 2 to create a customer record.</p>
</div></div>

## Summary

The preceding section showed how to:

*	Create a customer record. The `createCustomer` call also sets a default password for the customer.
*	Create an address for the customer.
*	Specified the address as the default shipping and billing address.

#### Related topics

*	<a href="{{page.baseurl}}get-started/gs-web-api-request.html">Step 2. Construct a request</a>

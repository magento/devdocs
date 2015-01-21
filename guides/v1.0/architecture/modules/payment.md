---
layout: default
group: 
subgroup: 
title: Payment modules
menu_title: Payment modules
menu_order: 7
github_link: architecture/modules/payment.md
---

<h2 id="m2devgde-cache-intro">Overview</h2>

This article describes in general the functionality, and responsibilities of payment modules in the Magento system, and gives recommendations on disabling particular payment modules. This information is primarily intended for developers and administrators performing the initial Magento configuration.

Please note that this article provides only payment module-specific recommendations.

<h2 id="m2devgde-cache-implementation">Payments implementation</h2>

In the Magento system, payment methods are structured as follows: all abstract logic common for all payment methods is located in a separate module, the implementations of particular methods are located in corresponding modules, grouped by payment gateway or by type. This enables you to easily configure the set of payment methods your store provides by disabling the modules for the solutions you are not interested in.

The next section gives an overview of all payment modules and recommendations on payment module disabling and enabling.

<h2 id="m2devgde-cache-cautions">Payment module disable and enable cautions</h2>

If the business logic of your Magento store provides that you do not need some payment solutions, you can disable the corresponding modules. If required, you can later enable the modules (unless you deleted it from the code base).

Please note that most payment modules implement not a separate payment method, but several methods of one provider or one type, for example <a href="{{ site.mage2000url }}app/code/Magento/Paypal" target="_blank">Paypal</a> module contains all PayPal solutions.

The following table gives details about payment modules, their functionality and disabling/enabling specifics.

<table>
	<tbody>
		<tr>
			<th>Module</th>
			<th>Functionality</th>
			<th>Disabling/Enabling Comments</th>
		</tr>
	<tr>
		<td>Magento_Paypal</td>
		<td>Implementation of all PayPal payment methods:
	<ul>
<li>Payments Advanced</li>
<li>Payments Pro</li>
<li>Website Payments Standard (aka PayPal Standard)</li>
<li>Payflow Pro</li>
<li>Payflow Link</li>
<li>Express Checkout (aka PayPal Express)</li></ul></td>
	<td>Can be disabled/enabled. When disabling <code>Magento_Paypal</code>, its dependencies require you to disable the <code>Magento_RecurringPayment</code> module as well.</td>
	</tr>
	<tr>
		<td>Magento_Payment</td>
		<td><ul><li>Abstract logic common for all payment methods, including CC (credit card) methods</li>
<li>Implementation of the Zero Subtotal Checkout payment method.</li></ul></td>
		<td> Not supposed to be disabled.

		If you decide to disable make sure to disable all modules which depend on <code>Magento_Payment</code>. You can check these dependencies in the <code>app/code/Magento/&lt;module>/etc/module.xml</code> under the <code>&lt;depends/></code> node.</td>
	</tr>
	<tr>
		<td>Magento_Ogone</td>
		<td>Implementation of the Ogone payment method.</td>
		<td>Can be disabled/enabled.</td>
	</tr>
	<tr>
		<td>Magento_OfflinePayments</td>
		<td>Implementation of the payment methods, which work without third-party gateways:
<ul>
<li>Bank Transfer Payment</li>
<li>Cash on Delivery</li>
<li>Check/Money Order</li>
<li>Credit Card (saved)</li>
<li>Purchase Order</li>
<li>Configuration of the Zero Subtotal Checkout payment method.</li></ul></td>
		<td>Can be disabled/enabled.</td>
	</tr>
		<tr>
		<td>Magento_Authorizenet</td>
		<td>Implementation of the Authorize.Net Direct Post and Authorize.Net payment methods.</td>
		<td>Can be disabled/enabled.</td>
	</tr>
</table>

<div class="bs-callout bs-callout-danger" id="danger">
<p>If you plan to disable a payment method by disabling the corresponding module, Magento recommends to avoid using it for payment processing. We cannot guarantee that payments are processed and stored correctly after you disable the module.</p>
</div>



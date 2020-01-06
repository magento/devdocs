---
group: payments-integrations
subgroup: A_gateway
title: Magento payment provider gateway
menu_title: Magento payment provider gateway
menu_node: parent
menu_order: 1
---

### What is Magento payment provider gateway

The Magento payment provider gateway is a mechanism that allows you to integrate your stores with payment service providers. As a result, you can create and handle transactions based on order details.

The following diagram shows a simplified interaction flow between Magento sales management and external payment service provider using Magento payment provider gateway:

![Payment Gateway Interaction]({{ site.baseurl }}/common/images/payments-integrations/pg_interaction_flow.png)

Magento payment provider supports the following payment operations:

*  authorize: process [authorization](https://glossary.magento.com/authorization) transaction; funds are blocked on customer account, but not withdrawn
*  sale: process authorization transaction and capture automatically, funds are withdrawn
*  capture: withdraw previously authorized amount
*  refund: return previously withdrawn customer funds
*  void: cancel transfer of funds from customer account

### What's in this chapter

The topics of this chapter are conceptual and describe the components of the Magento payment provider gateway:

*  [Payment provider gateway structure]({{ page.baseurl }}/payments-integrations/payment-gateway/payment-gateway-structure.html)
*  [Gateway Command]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-command.html)
*  [Gateway Command Pool]({{ page.baseurl }}/payments-integrations/payment-gateway/command-pool.html)
*  [Request Builder]({{ page.baseurl }}/payments-integrations/payment-gateway/request-builder.html)
*  [Gateway Client]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-client.html)
*  [Response Validator]({{ page.baseurl }}/payments-integrations/payment-gateway/response-validator.html)
*  [Response Handler]({{ page.baseurl }}/payments-integrations/payment-gateway/response-handler.html)

#### Terms used {#terms}

<table>
<tr>
<th>
Term
</th>
<th>
Description
</th>
</tr>
<tr>
<td>
<i>Magento sales management</i>
</td>
<td>
Magento interfaces that provide the ability to create orders, invoices, and shipments.
</td>
</tr>
<tr>
<td>
<i>Payment service provider, payment provider, payment processor</i>
</td>
<td>
 Online service for accepting electronic payments, like PayPal, Authorize.Net and so on.
</td>
</tr>
<tr>
<td>
<i>Payload</i>
</td>
<td>
Data used for a transaction. Might include the following:

<ul>
<li> payment details </li>
<li> order items </li>
<li> shipping, billing addresses </li>
<li> customer details </li>
<li> taxes </li>
<li> merchant's payment provider <a href="https://glossary.magento.com/api" target="_blank">API</a> credentials </li>
</ul>
</td>
</tr>
</table>

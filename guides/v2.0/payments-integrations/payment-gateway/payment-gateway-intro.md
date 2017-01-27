---
layout: default
group: payments-integrations
subgroup: A_gateway
title: Magento payment provider gateway
menu_title: Magento payment provider gateway 
menu_node: parent
menu_order: 1
version: 2.0
github_link: payments-integrations/payment-gateway/payment-gateway-intro.md

---

### What is Magento payment provider gateway
The Magento payment provider gateway is a mechanism that allows you to integrate your stores with payment service providers. As a result, you can create and handle transactions based on order details.

The following diagram shows a simplified interaction flow between Magento sales management and external payment service provider using Magento payment provider gateway: 

![Payment Gateway Interaction]({{site.baseurl}}common/images/payments-integrations/pg_interaction_flow.png)

Magento payment provider supports following list of payment operations:

 * authorize - processes authorization transaction, funds will be blocked on customer account, but didn't charged
 * sale - processess authorization transaction and capture it automatically, funds will be charged
 * capture - payment action to charge previously authorized amount
 * refund - type of operation to back charged customer funds
 * void - an operation to cancel transfer of funds from customer account

### What's in this chapter

The topics of this chapter are conceptual and describe the components of the Magento payment provider gateway:
 
* [Payment provider gateway structure]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-structure.html)
* [Gateway Command]({{page.baseurl}}payments-integrations/payment-gateway/gateway-command.html)
* [Gateway Command Pool]({{page.baseurl}}payments-integrations/payment-gateway/command-pool.html)
* [Request Builder]({{page.baseurl}}payments-integrations/payment-gateway/request-builder.html)
* [Gateway Client]({{page.baseurl}}payments-integrations/payment-gateway/gateway-client.html)
* [Response Validator]({{page.baseurl}}payments-integrations/payment-gateway/response-validator.html)
* [Response Handler]({{page.baseurl}}payments-integrations/payment-gateway/response-handler.html)

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
<li> merchant's payment provider API credentials </li>
</ul>
</td>
</tr>
</table>



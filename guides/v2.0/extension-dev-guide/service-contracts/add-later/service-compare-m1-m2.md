---
layout: default
title: Service implementation comparison
---

As an example of the power and simplicity of the Magento 2 service framework, let's take a look at two side-by-side implementations:

*	An address book in Magento 1 and in Magento 2.
*	Customer registration during checkout in Magento 1 and Magento 2.

The implementations are presented at a high level without all the details; however, you'll see that the services framework provides significant improvements compared to Magento 1.

Both implementations are taken from Magento code; they are not hypothetical.

## Address Book Example

This example gets an address from an address book module and sends it back as HTML.

### Address Book Implementations Side by Side

Magento 1 implementation:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_addr-book_mage1.png"/></p>

Magento 2 implementation:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_addr-book_mage2.png"/></p>

### Discussion of Address Book Example

Both implementations:

*	Use a template and two blocks
*	Return the address object as HTML

However, the similarities end there. The following table shows the key differences between the implementations:

<table>
	<tbody>
		<tr>
			<th>Magento 1</th>
			<th>Magento 2</th>
		</tr>
	<tr class="even">
		<td>The Address model contains both display and business logic.</td>
		<td>The Address service has business logic only so interacting with it is simpler.</td>
	</tr>
	<tr class="odd">
		<td>Sends a model back to the template. Because the model contains business logic, it's tempting process that logic in your templates. This can lead to confusing code that's hard to maintain.</td>
		<td>Sends only data back to the template. </td>
	</tr>
	<tr class="even">
		<td>The model knows how to render itself so it has to send a <tt>render('html')</tt> call to the block to do that, which makes the coding more complex. </td>
		<td>The data object is rendered by the renderer block. The roles of the renderer block and the model are separate from each other, easier to understand, and easier to implement.</td>
	</tr>
	</tbody>
	</table>

## Register During Checkout Example

This example sends a welcome e-mail to a customer after the customer registers during checkout.

### Register During Checkout Implementations Side by Side

Magento 1 implementation:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_checkout-reg_mage1.png"/></p>

Magento 2 implementation:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_checkout-reg_mage2.png"/></p>

### Discussion of Register During Checkout Example

These two implementations both start with the controller calling the <tt>saveOrder</tt> method on the Onepage class, then Onepage calling <tt>submitOrder</tt> on the Quote class.

From that point they are different, as the following table shows:

<table>
	<tbody>
		<tr>
			<th>Magento 1</th>
			<th>Magento 2</th>
		</tr>
	<tr class="even">
		<td>The Customer model has the business logic necessary to save the customer after registration and to commit the customer's information to the database.</td>
		<td>The Customer service has the business logic necessary to create the new customer record and it delegates committing the customer's information to the database to the Customer model.</td>
	</tr>
	<tr class="odd">
		<td>The Onepage class sends the welcome e-mail request to the Customer model. Notice that Onepage sends two requests&mdash;one to create the customer record and one to send the welcome e-mail.</td>
		<td>The Customer service sends both requests to the Customer model. One method call to <tt>createCustomer</tt> causes both tasks to execute and, as before, the Customer service delegates the actions to the Customer model.</td>
	</tr>
	</tbody>
	</table>

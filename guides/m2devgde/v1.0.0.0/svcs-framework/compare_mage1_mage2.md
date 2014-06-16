---
layout: howtom2devgde_chapters
title: Services Use Case&mdash;Magento 1 and Magento 2 Side-By-Side 
---

# Services Use Case&mdash;Magento 1 and Magento 2 Side-By-Side

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/compare_mage1_mage2.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

As an example of the power and simplicity of the Magento 2 service framework, let's take a look at two side-by-side implementations:

*	An address book in Magento 1 and in Magento 2.
*	Customer registration during checkout in Magento 1 and Magento 2.

The implementations are presented at a high level without all the details; however, you'll see that the services framework provides significant improvements compared to Magento 1.

## Implementing an Address Book

This example gets an address from an address book application and sends it back as HTML.

### Address Book Implementations Side by Side

Magento 1 implementation:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_addr-book_mage1.png"/></p>

Magento 2 implementation:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_addr-book_mage2.png"/></p>

### Discussion of Address Book Implementations

Both implementations:

*	Use a template and two blocks
*	Return the address object as HTML

However, the similarities end there. The following table shows the key differences between the implementations:

<table>
	<tbody>
		<tr class="table-headings">
			<th>Magento 1</th>
			<th>Magento 2</th>
		</tr>
	<tr class="even">
		<td>The Address model contains both display and business logic.</td>
		<td>The Address service has no business logic so interacting with it is simpler.</td>
	</tr>
	<tr class="odd">
		<td>Sends a model back to the template.</td>
		<td>Sends only data back to the template. Because the template doesn't have to process business logic, it's leaner and simpler.</td>
	</tr>
	<tr class="even">
		<td><tt>format('html')</tt> requires an extra round trip between the model to the TBD to convert the model to HTML.</td>
		<td>The data object is rendered to HTML by the renderer block. There is no trip to the service and no extra processing.</td>
	</tr>
	</tbody>
	</table>

#### Related Topics

*	
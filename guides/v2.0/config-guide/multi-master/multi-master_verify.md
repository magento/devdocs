---
layout: default
group: config-guide
subgroup: Z_cqrs
title: Verify split databases
menu_title: Verify split databases
menu_order: 5
menu_node: 
github_link: config-guide/mult-master/multi-verify.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

After configuration, the master databases are configured as follows:

*	Main magento database: 250 tables
*	Magento checkout database: 10 tables
*	Magento OMS database: 54 tables

To verify your split databases are working properly, perform the following tasks and verify that data is added to the database tables:

<table>
<tbody>
	<tr>
		<th>What to verify</th>
		<th>How to verify</th>
	</tr>
<tr>
	<td>Checkout database is working</td>
	<td>Add items to a cart and verify that rows have been added to your checkout database's <code>quote</code>, <code>quote_address</code>, and <code>quote_item</code> tables.</td>
</tr>
<tr>
	<td>OMS tables are working</td>
	<td>TBD</td>
</tr>
</tbody>
</table>


#### Next step
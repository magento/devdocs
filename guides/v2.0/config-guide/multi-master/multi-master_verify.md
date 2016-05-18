---
layout: default
group: config-guide
subgroup: 20_cqrs
title: Verify split databases
menu_title: Verify split databases
menu_order: 5
menu_node: 
github_link: config-guide/multi-master/multi-master_verify.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

After configuration, the master databases are configured as follows:

*	Main magento database: 250 tables
*	Magento quote database: 10 tables
*	Magento sales database: 54 tables

To verify your split databases are working properly, perform the following tasks and verify that data is added to the database tables using a database tool like <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpmyadmin" target="_blank">phpmyadmin</a>:

<table>
<tbody>
	<col width="25%">
	<col width="75%">
	<tr>
		<th>What to verify</th>
		<th>How to verify</th>
	</tr>
<tr>
	<td>quote database is working</td>
	<td>Add items to a cart. Verify that rows have been added to your quote database's <code>quote</code>, <code>quote_address</code>, and <code>quote_item</code> tables.</td>
</tr>
<tr>
	<td>sales database is working</td>
	<td>Complete an order (any payment method, including check/money order). Verify that rows have been added to your sales database's <code>sales_order_address</code>, <code>sales_order_item</code>, and <code>sales_order_payment</code> tables.</td>
</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-warning">
    <p>You must back up the two additional database instances manually. Magento backs up only the main database instance. The <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html"><code>'magento setup:backup --db</code></a> command and Magento Admin options do not back up the additional tables.</p>
</div>


#### Next step (optional)
<a href="{{ site.gdeurl }}config-guide/multi-master/multi-master_slavedb.html">Set up optional database replication</a>
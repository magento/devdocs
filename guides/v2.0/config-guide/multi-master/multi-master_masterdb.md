---
layout: default
group: config-guide
subgroup: Z_cqrs
title: Set up master databases
menu_title: Set up master databases
menu_order: 2
menu_node: 
github_link: config-guide/mult-master/multi-masterdb.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

#### Contents
*	TBD
*	TBD

<h2 id="config-ee-multidb-master-over">Overview of master databases</h2>
This topic discusses how to get started with the split database solution by:

1.	Installing Magento 2 EE with a single master database (named `magento`)
2.	Creating two additional master databases for checkout and OMS (named `magento_checkout` and `magento_oms`)
2.	Configuring EE to use the checkout and OMS databases 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This guide assumes all three databases are on the same host as the Magento application and that they're named <code>magento</code>, <code>magento_checkout</code>, and <code>magento_oms</code>. However, the choice of where to locate the databases and what they're named is up to you. We're providing examples to make the instructions easier to follow.</p></span>
</div>

<h2 id="config-ee-multidb-master-install">Install the Magento EE software</h2>
Use the instructions in the Magento 2 EE README or the <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">installation guide</a> to install the Magento 2 EE software using a single master database.

<h2 id="config-ee-multidb-master-masters">Set up additional master databases</h2>
Create checkout and OMS master databases as follows:

To configure a MySQL database instance:

1.	Log in to your database server as any user.
2.	Enter the following command to get to a MySQL command prompt:

		mysql -u root -p

3.	Enter the MySQL `root` user's password when prompted.
4.	Enter the following commands in the order shown to create database instances named `magento_checkout` and `magento_oms` with user names `magento_checkout` and `magento_oms`, respectively:

		create database magento_checkout;
		GRANT ALL ON magento_checkout.* TO magento_checkout@localhost IDENTIFIED BY 'magento_checkout';

		create database magento_oms;
		GRANT ALL ON magento_oms.* TO magento_oms@localhost IDENTIFIED BY 'magento_oms';

5.	Enter `exit` to quit the command prompt.

6.	Verify the databases:

		mysql -u magento_checkout -p

		mysql -u magento_oms -p

	If the MySQL monitor displays, you created the database properly. If an error displays, repeat the preceding commands.

<h2 id="config-ee-multidb-master-cli">Configure Magento EE to use the master databases</h2>
After setting up a total of three master databases, use the Magento command line to configure Magento to use them. (The command sets up database connections and distributes tables among the master databases.)

{% include install/first-steps-cli.html %}

<h3 id="config-ee-multidb-master-cli-check">Configure the checkout database</h3>
Command syntax:

	magento setup:db-schema:split-quote --host="<checkout db host or ip>" --dbname="<name>" --username="<checkout db username>" --password="<password>"

For example,

	magento setup:db-schema:split-quote --host="localhost" --dbname="magento_checkout" --username="magento_checkout" --password="magento_checkout"

The following message displays to confirm a successful setup:

	Migration has been finished successfully!

<h3 id="config-ee-multidb-master-cli-oms">Configure the OMS database</h3>
Command syntax:

	magento setup:db-schema:split-sales --host="<checkout db host or ip>" --dbname="<name>" --username="<checkout db username>" --password="<password>"

For example,

	magento setup:db-schema:split-sales --host="localhost" --dbname="magento_oms" --username="magento_oms" --password="magento_oms"

The following message displays to confirm a successful setup:

	Migration has been finished successfully!

#### Next step
TBD
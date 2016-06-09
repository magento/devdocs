---
layout: default
group: install_hosted
subgroup: 02_config-hosted
title: Configure a database and a database user
menu_title: Configure a database and a database user
menu_order: 2
menu_node: 
version: 2.1
github_link21: install-gde/install/hosted/hosted_start_db.md
---

<h2 id="newbie-db">Configure a database and a database user</h2>
To configure a MySQL database and database user:

1.	In the Databases section, click **MySQL Databases** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/install-merch_conf-db.png" width="550px" alt="Start out creating a database">
2.	In the **New Database** field, enter a unique name for your database and click **Create Database**.

	<img src="{{ site.baseurl }}common/images/install-merch_create-db.png" width="550px" alt="Create a database">

3.	In the MySQL Users section, enter information in the provided fields and click **Create User**.

	<div class="bs-callout bs-callout-info" id="info">
  		<p>Give the database user a strong password and <em>write down</em> the user name and password you choose.</p>
  		<p>You can optionally click <strong>Password Generator</strong> to create a strong password for you.</p>
	</div>

	<img src="{{ site.baseurl }}common/images/install-merch_create-db-user.png" width="550px" alt="Create a database user">

4.	In the Add User to Database section, click the name of your Magento database and database user from the respective fields and click **Add**.

	<img src="{{ site.baseurl }}common/images/install-merch_add-user-to-db.png" width="350px" alt="Add the user to the database">

	The Manage User Privileges page displays.

5.	Select the **ALL PRIVILEGES** check box at the top of the page and click **Make Changes**.

	<img src="{{ site.baseurl }}common/images/install-merch_db-user-privs.png" width="750px" alt="Give the database user all privileges to the database">

#### Next step
<a href="{{ site.gdeurl21 }}install-gde/install/hosted/hosted_start_php.html">Configure PHP</a>

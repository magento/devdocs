<div markdown="1">

## Set up additional master databases {#config-ee-multidb-master-masters}
Create checkout and OMS master databases as follows:

1.	Log in to your database server as any user.
2.	Enter the following command to get to a MySQL command prompt:

		mysql -u root -p

3.	Enter the MySQL `root` user's password when prompted.
4.	Enter the following commands in the order shown to create database instances named `magento_checkout` and `magento_oms` with the same user names and passwords:

		create database magento_checkout;
		GRANT ALL ON magento_checkout.* TO magento_checkout@localhost IDENTIFIED BY 'magento_checkout';

		create database magento_oms;
		GRANT ALL ON magento_oms.* TO magento_oms@localhost IDENTIFIED BY 'magento_oms';

5.	Enter `exit` to quit the command prompt.

6.	Verify the databases, one at a time:

	Checkout database:

		mysql -u magento_checkout -p
		exit

	Order management database:

		mysql -u magento_oms -p
		exit

	If the MySQL monitor displays, you created the database properly. If an error displays, repeat the preceding commands.

## Configure Magento EE to use the master databases {#config-ee-multidb-master-cli}
After setting up a total of three master databases, use the Magento command line to configure Magento to use them. (The command sets up database connections and distributes tables among the master databases.)

### First steps

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
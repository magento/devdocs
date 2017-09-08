<div markdown="1">

## Set up additional master databases {#config-ee-multidb-master-masters}
Create checkout and OMS master databases as follows:

1.	Log in to your database server as any user.
2.	Enter the following command to get to a MySQL command prompt:

		mysql -u root -p

3.	Enter the MySQL `root` user's password when prompted.
4.	Enter the following commands in the order shown to create database instances named `magento_quote` and `magento_sales` with the same user names and passwords:

		create database magento_quote;
		GRANT ALL ON magento_quote.* TO magento_quote@localhost IDENTIFIED BY 'magento_quote';

		create database magento_sales;
		GRANT ALL ON magento_sales.* TO magento_sales@localhost IDENTIFIED BY 'magento_sales';

5.	Enter `exit` to quit the command prompt.

6.	Verify the databases, one at a time:

	Checkout database:

		mysql -u magento_quote -p
		exit

	Order management database:

		mysql -u magento_sales -p
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

	magento setup:db-schema:split-quote --host="localhost" --dbname="magento_quote" --username="magento_quote" --password="magento_quote"

The following message displays to confirm a successful setup:

	Migration has been finished successfully!

<h3 id="config-ee-multidb-master-cli-oms">Configure the OMS database</h3>
Command syntax:

	magento setup:db-schema:split-sales --host="<checkout db host or ip>" --dbname="<name>" --username="<checkout db username>" --password="<password>"

For example,

	magento setup:db-schema:split-sales --host="localhost" --dbname="magento_sales" --username="magento_sales" --password="magento_sales"

The following message displays to confirm a successful setup:

	Migration has been finished successfully!

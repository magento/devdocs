## Set up additional master databases {#config-ee-multidb-master-masters}

Create checkout and OMS master databases as follows:

1. Log in to your database server as any user.
1. Enter the following command to get to a MySQL command prompt:

   ```bash
   mysql -u root -p
   ```

1. Enter the MySQL `root` user's password when prompted.
1. Enter the following commands in the order shown to create database instances named `magento_quote` and `magento_sales` with the same usernames and passwords:

   ```shell
   create database magento_quote;
    ```

   ```shell
   GRANT ALL ON magento_quote.* TO magento_quote@localhost IDENTIFIED BY 'magento_quote';
   ```

   ```shell
   create database magento_sales;
   ```

   ```shell
   GRANT ALL ON magento_sales.* TO magento_sales@localhost IDENTIFIED BY 'magento_sales';
   ```

1. Enter `exit` to quit the command prompt.

1. Verify the databases, one at a time:

   Checkout database:

   ```bash
   mysql -u magento_quote -p
   ```

   ```shell
   exit
   ```

   Order management database:

   ```bash
   mysql -u magento_sales -p
   ```

   ```shell
   exit
   ```

   If the MySQL monitor displays, you created the database properly. If an error displays, repeat the preceding commands.

## Configure {{site.data.var.ee}} to use the master databases {#config-ee-multidb-master-cli}

After setting up a total of three master databases, use the Magento command line to configure Magento to use them. (The command sets up database connections and distributes tables among the master databases.)

### First steps

{% include install/first-steps-cli.md %}

### Configure the checkout database   {#config-ee-multidb-master-cli-check}

Command syntax:

```bash
bin/magento setup:db-schema:split-quote --host="<checkout db host or ip>" --dbname="<name>" --username="<checkout db username>" --password="<password>"
```

For example,

```bash
bin/magento setup:db-schema:split-quote --host="localhost" --dbname="magento_quote" --username="magento_quote" --password="magento_quote"
```

The following message displays to confirm a successful setup:

```terminal
Migration has been finished successfully!
```

### Configure the OMS database   {#config-ee-multidb-master-cli-oms}

Command syntax:

```bash
bin/magento setup:db-schema:split-sales --host="<checkout db host or ip>" --dbname="<name>" --username="<checkout db username>" --password="<password>"
```

For example,

```bash
bin/magento setup:db-schema:split-sales --host="localhost" --dbname="magento_sales" --username="magento_sales" --password="magento_sales"
```

The following message displays to confirm a successful setup:

```terminal
Migration has been finished successfully!
```

---
youtube_id: GMOtt5mai5A
duration: "6:11"
group: "Fundamentals of Magento 2 Development"
title: "How to Add a New Table to a Database"
thumbnail: "fundamentals/thumbs/add-table.png"
menu_order: 0
---

Magento 2 has a special mechanism that enables you to create database tables, modify existing ones, and even add some data into them (like setup data, which has to be added when a module is installed).
This mechanism allows those changes to be transferable between different installations.

The key concept is that, instead of doing manual SQL operations that you have to do again and again when reinstalling the system, developers create an install (or upgrade) script that contains the data.
The script runs every time a module is installed.

Magento 2 has four types of such scripts: InstallSchema, InstallData, UpgradeSchema, and UpgradeData.
The install scripts run only once, while the upgrade scripts are executed every time the module's version get changed.

To look at all four script types, we’ll complete the following greeting page tasks:

*  Create a `greeting_message` table with the columns greeting_id and message.
*  Add two records: “Happy New Year” and “Happy Holidays”.
*  Modify the table by adding another field, “season”, to which we add the records “Happy Thanksgiving” and “Fall'”.
*  Update the types for the first and second records.

The steps we need to take to accomplish these tasks are:

1. Create a new module.
1. Create an InstallSchema script.
1. Create an InstallData script.
1. Add a new module and verify that a table with the data was created.
1. Create an UpgradeSchema script.
1. Create an UpgradeData script.
1. Run the upgrade scripts and verify that the table has changed.

## Step 1: Create a new module

Create a new module called `Learning_GreetingMessage`.

Navigate to the `app/code` folder and create the folders `Learning` and `Learning/GreetingMessage`:

```bash
cd <magento2_root>/app/code
```

```bash
mkdir Learning
```

```bash
mkdir Learning/GreetingMessage
```

Now create two files:

`Learning/GreetingMessage/registration.php`

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
* Copyright © 2016 Magento. All rights reserved.
* See COPYING.txt for license details.
*/

\Magento\Framework\Component\ComponentRegistrar::register(
  \Magento\Framework\Component\ComponentRegistrar::MODULE,
  'Learning_GreetingMessage',
  __DIR__
);
```

{% endcollapsible %}

`Learning/GreetingMessage/etc/module.xml`

{% collapsible Show code %}

```xml
<?xml version="1.0"?>
<!--
/**
* Copyright © 2016 Magento. All rights reserved.
* * See COPYING.txt for license details.
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
  <module name="Learning_GreetingMessage" setup_version="0.0.1">
  </module>
</config>
```

{% endcollapsible %}

## Step 2: Create an InstallSchema script

To create an InstallSchema script, navigate to the `app/code/Learning/GreetingMessage` folder and create a `Setup` folder.

```bash
cd <magento2_root>/app/code/Learning/GreetingMessage
```

```bash
mkdir Setup
```

Create the file `Setup/InstallSchema.php`.

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
* Copyright © 2016 Magento. All rights reserved.
* See COPYING.txt for license details.
*/

namespace Learning\GreetingMessage\Setup;
use Magento\Framework\Setup\InstallSchemaInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;

/**
 * @codeCoverageIgnore
 */
class InstallSchema implements InstallSchemaInterface
{
    /**
    * {@inheritdoc}
    * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
    */
    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
          /**
          * Create table 'greeting_message'
          */
          $table = $setup->getConnection()
              ->newTable($setup->getTable('greeting_message'))
              ->addColumn(
                  'greeting_id',
                  \Magento\Framework\DB\Ddl\Table::TYPE_INTEGER,
                  null,
                  ['identity' => true, 'unsigned' => true, 'nullable' => false, 'primary' => true],
                  'Greeting ID'
              )
              ->addColumn(
                  'message',
                  \Magento\Framework\DB\Ddl\Table::TYPE_TEXT,
                  255,
                  ['nullable' => false, 'default' => ''],
                    'Message'
              )->setComment("Greeting Message table");
          $setup->getConnection()->createTable($table);
      }
}
```

{% endcollapsible %}

Let’s take a minute to look at the code.

The InstallSchema files are all very typical.
The main code is located in the `install()` method, which has a `$setup` parameter.
This is a key parameter, because it gives access to the `Connection()` object that allows database manipulations.

The connection is an instance of the `Magento\Framework\DB\Adapter\Pdo\Mysql` class.

Magento uses DDL (Data Definition Language) to manipulate the database.
You can find various examples of DDL in the Magento 2 core code.

## Step 3: Create an InstallData script

Let’s create the `Setup/InstallData.php` file:

{% collapsible Show code %}

```php
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Learning\GreetingMessage\Setup;

use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

/**
 * @codeCoverageIgnore
 */
class InstallData implements InstallDataInterface
{

    /**
     * {@inheritdoc}
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
     * @SuppressWarnings(PHPMD.NPathComplexity)
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
          /**
           * Install messages
           */
          $data = [
              ['message' => 'Happy New Year'],
              ['message' => 'Merry Christmas']
          ];
          foreach ($data as $bind) {
              $setup->getConnection()
                ->insertForce($setup->getTable('greeting_message'), $bind);
          }
    }
}
```

{% endcollapsible %}

## Step 4: Add a new module and verify that a table with data was created

Run the `setup:upgrade` script to verify that a table with the initial data is there:

```bash
cd <magento2_root>
```

```bash
php bin/magento setup:upgrade
```

You should see a long list of modules that contain `Learning_GreetingMessage`.

Connect to the database: `mysql -u<user> -p<password> <database>`.

```terminal
SHOW TABLES LIKE “%greeting%”

+------------------------------------+
| Tables_in_magento_210 (%greeting%) |
+------------------------------------+
| greeting_message                   |
+------------------------------------+

SELECT * FROM greeting_message;

+-------------+-----------------+
| greeting_id | message         |
+-------------+-----------------+
| 1           | Happy New Year  |
| 2           | Happy Holidays  |
+-------------+-----------------+
```

### Check that the table and data are there

When you create a new module and run the `bin/magento setup:upgrade` script, Magento checks the codebase to see if there are modules that were not installed.
If it finds any, it checks whether there are any install scripts and if so, runs them.
Magento then updates the table `setup_module` and puts information about the module and its version there:

```terminal
SELECT * FROM setup_module WHERE module='Learning_GreetingMessage';

+--------------------------+----------------+--------------+
| module                   | schema_version | data_version |
+--------------------------+----------------+--------------+
| Learning_GreetingMessage | 0.0.1          | 0.0.1        |
+--------------------------+----------------+--------------+
```

The next time you run the `bin/magento setup:upgrade` script, it will find a record in the database and will compare the current version against the one in database.
If the versions match, it will do nothing.
If the current version is higher, it will run the upgrade scripts (discussed next).

## Step 5:  Create an UpgradeSchema script

To see how the upgrade scripts work, we’ll add some data to the database.

First, change the version in the `etc/module.xml` file to 0.0.2:

```xml
<module name="Learning_GreetingMessage" setup_version="0.0.2">
```

Then create the file `Setup/UpgradeSchema.php`:

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Learning\GreetingMessage\Setup;

use Magento\Framework\Setup\UpgradeSchemaInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;

/**
 * Upgrade the Catalog module DB scheme
 */
class UpgradeSchema implements UpgradeSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        $setup->startSetup();
        if (version_compare($context->getVersion(), '0.0.2', '<')) {
            $setup->getConnection()->addColumn(
                $setup->getTable('greeting_message'),
                'season',
                [
                    'type' => \Magento\Framework\DB\Ddl\Table::TYPE_TEXT,
                    'length' => 16,
                    'nullable' => false,
                    'default' => '',
                    'comment' => 'Season'
                ]
            );
        }
        $setup->endSetup();
    }
}
```

{% endcollapsible %}

Review the “version_compare” line.
As described earlier, the UpgradeScript will be executed every time the version in `module.xml` has changed.
So we only want the current version upgrade script to execute, and not previous upgrades.
That’s why we put upgrades into “if” clauses.

## Step 6: Create the UpgradeData script

To create the `Setup/UpgradeData.php` file:

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Learning\GreetingMessage\Setup;

use Magento\Framework\Setup\UpgradeDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

/**
 * Upgrade Data script
 */

class UpgradeData implements UpgradeDataInterface
{
    /**
     * {@inheritdoc}
     * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
     */
    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $setup->startSetup();
        if ($context->getVersion()
            && version_compare($context->getVersion(), '0.0.2') < 0
        ) {
            $table = $setup->getTable('greeting_message');
            $setup->getConnection()
                ->insertForce($table, ['message' => 'Happy Thanksgiving', 'season' => 'fall']);

            $setup->getConnection()
                ->update($table, ['season' => 'winter'], 'greeting_id IN (1,2)');
        }
        $setup->endSetup();
    }
}
```

{% endcollapsible %}

## Step 7: Run the upgrade scripts and verify that the table has changed

Run the SetupUpgrade script again:

```bash
cd <magento2_root>
```

```bash
php bin/magento setup:upgrade
```

We can now connect to the database and verify that our changes are there:

```terminal
select * from greeting_message;

+-------------+--------------------+--------+
| greeting_id | message            | season |
+-------------+--------------------+--------+
| 1           | Happy New Year     | winter |
| 2           | Happy Holidays     | winter |
| 3           | Happy Thanksgiving | fall   |
+-------------+--------------------+--------+
```

We see the change in the schema and data version, and we see the changes in the greeting message table.

In this how-to video we practiced how to create a new table, add setup data, and modify the table and corresponding data during the module lifecycle.

It is very important to understand that the data is added only once, and should be installed when the module is created.

Magento 2 uses multiple tools to manipulate the database from the code – Model/Resource models and collections, which are beyond the scope of this video.
So if you need an interface which saves or fetches data from the database, you will use a `Model/Resource/Collection` for that, not an UpgradeData script.

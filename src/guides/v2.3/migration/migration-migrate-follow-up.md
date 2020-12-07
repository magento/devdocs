---
group: migration-guide
subgroup: D_Migrate using the data migration tool
title: Follow-up (info and steps)
menu_title: Follow-up (info and steps)
menu_node:
menu_order: 4
functional_areas:
  - Tools
---

## Overview

Some behavior and logic of Magento 1 has been implemented differently in Magento 2. The Data Migration Tool takes care of it. Although, there are some migration aspects you should know about, and sometimes you must take minor steps for some functionalities to work smoothly after migration.

## Information

### Split database not supported

The Data Migration Tool doesn't support split databases.

### Group Prices converted to Tier Prices

All Group Prices are automatically converted to Tier Prices during migration.

### New numbering for sales entities

Reference numbers for Orders, Invoices, Shipments, Credit Memos, and RMA migrate as is. But after migration, the new Magento 2 number assignment rules will apply. Thus, the numeration for the new sales entities will be different.

## Steps

### Resave Customer Segments [{{site.data.var.ee}} only]

After migration, Customer Segments must be resaved from the [Admin](https://glossary.magento.com/admin) Panel to get them up and running.

### Configure time zone

The tool does not migrate Timezone settings and administrator should manually configure them after the migration at Magento 2 Admin panel > Stores > Configuration > Locale Options > Timezone.
By default, Magento stores time data in UTC-0 zone in the database and displays it according to current Timezone settings.
If time data already saved in the database in the zone different from UTC-0, developer or administrator need to convert the existing time to UTC-0 using the Data Migration Tool’s \Migration\Handler\Timezone handler.

In the following example, the Magento 1 has been wrongly saving time in UTC-7 to the database, for example, due to faulty 3rd party extension. To convert the customer account creation time to UTC-0 upon migration properly, add the following rule to map-customer.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<map xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" xs:noNamespaceSchemaLocation="../map.xsd">
  <!--...-->
  <destination>
      <field_rules>
          <!--...-->
          <transform>
              <field>customer_entity.created_at</field>
              <handler class="\Migration\Handler\Timezone">
                  <param name="offset" value="-7" />
              </handler>
          </transform>
      </field_rules>
  </destination>
</map>
```

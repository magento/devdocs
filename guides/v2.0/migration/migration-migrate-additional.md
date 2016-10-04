---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Additional info
menu_title: Additional info
menu_node:
menu_order: 4
version: 2.0
github_link: migration/migration-migrate-additional.md

---

## Additional Info

Some existing behaviour and logic from Magento 1 was implemented in a different way in Magento 2. The Data Migration Tool takes care of it.

1. All Group Prices were converted to Tier Prices.

2. The numbers of Orders, Invoices, Shipments, Credit Memos and RMA migrate as is. But after migration and switching to Magento 2 the numeration for newly created sales entities will be different.

3. If the Magento 1 server has the time zone set to anything other than UTC, you must configure the offset to migrate timestamp fields. The Data Migration Tool has special handler `\Migration\Handler\Timezone` for transforming time to a different time zone. In the following example, the Magento 1 server timezone is UTC-7. To convert the customer account creation date properly, add the following rule to `map-customer.xml`:

  {% highlight xml %}
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
  {% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
  <p>The Data Migration Tool doesn't support split database.</p>
</div>

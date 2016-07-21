---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Additional info
menu_title: Additional info
menu_node:
menu_order: 4
github_link: migration/migration-migrate-additional.md

---

## Additional Info

Some existing behaviour and logic from Magento 1 was implemented in a different way in Magento 2. The Data Migration Tool takes care of it.

1. All Group Prices were converted to Tier Prices.

2. The numbers of Orders, Invoices, Shipments, Credit Memos and RMA migrate as is. But after migration and switching to Magento 2 the numeration for newly created sales entities will be different.

3. The Data Migration Tool has special handler `\Migration\Handler\Timezone` for transforming time to a different time zone. Using it you can change time for some fields of database. These fields can be specified in your `map.xml` file with offset parameter.

<div class="bs-callout bs-callout-info" id="info">
  <p>The Data Migration Tool doesn't support split database.</p>
</div>

---
layout: default
group: graphql
title: Stock attributes
version: 2.3
github_link: graphql/stock.md
---


"stock_item": { - yes

"item_id": 1, - yes
"product_id": 1, - yes
"stock_id": 1, - yes
"qty": 100, - yes
"is_in_stock": true, - yes
"is_qty_decimal": false, - yes
"show_default_notification_message": false, - yes
"use_config_min_qty": true, - no
"min_qty": 0, - no
"use_config_min_sale_qty": 1, - no
"min_sale_qty": 1, - yes
"use_config_max_sale_qty": true, - no
"max_sale_qty": 10000, - yes
"use_config_backorders": true, - no
"backorders": 0, - yes
"use_config_notify_stock_qty": true, - no
"notify_stock_qty": 1, - no (if admin-facing; if customer-facing, then yes)
"use_config_qty_increments": true, - no
"qty_increments": 0, - no
"use_config_enable_qty_inc": true, - no
"enable_qty_increments": false, - no
"use_config_manage_stock": false, - no
"manage_stock": true, - yes
"low_stock_date": null, - no
"is_decimal_divided": false, - yes
"stock_status_changed_auto": 0 - no
}

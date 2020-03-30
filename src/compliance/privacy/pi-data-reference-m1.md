---
group: compliance
title: Personal Information Reference (Magento 1.x)
---

{: .bs-callout-info}
This is one in a series of topics to help Magento merchants and developers prepare for compliance with privacy regulations. Consult with your legal counsel to determine whether and how your business should comply with any legal obligations.

Use the following data flow diagrams and database entity mappings for reference when developing compliance programs for privacy regulations such as:

-  [GDPR]({{ site.baseurl }}/compliance/privacy/gdpr.html)
-  [CCPA]({{ site.baseurl }}/compliance/privacy/ccpa.html)

## Dataflow diagrams

The data flow diagrams show the types of data that customers and administrators can enter and retrieve on the storefront and Admin.

### Frontend data entry points

A user can enter customer, address, and payment information when registering for an account, during checkout, and similar events.

![Frontend data entry points](frontend-data-entry-points.svg)

### Frontend data access points

Magento loads customer information when the customer logs in and views several different pages or checks out.

![Frontend data access points](frontend-data-access-points.svg)

### Backend data entry points

A merchant can enter customer, address, and payment information from the Admin to create a customer or order.

![Backend data entry points](backend-data-entry-points.svg)

### Backend data access points

Magento loads customer information when a merchant views several types of grids, clicks on a grid to see detailed information, and performs various other tasks.

![Backend data access points](backend-data-access-points.svg)

## Database entities

Magento 1 stores customer information in customer, sales, and other database tables.

### Customer data {#customer-data}

Magento 1 stores customer information in the `customer_entity` and `customer_address_entity` tables. Both of these tables have several reference tables that can contain custom customer attributes.

#### `customer_entity` and reference tables

The following columns in the `customer_entity`table contain customer information:

Column | Data type
--- | ---
`email` | varchar(255)

These tables reference `customer_entity` and can contain custom customer attributes:

Table | Column | Data type
--- | --- | ---
`customer_entity_datetime` | `value` | datetime
`customer_entity_decimal` | `value` | decimal(12,4)
`customer_entity_int` | `value` | int(11)
`customer_entity_text` | `value` | text
`customer_entity_varchar` | `value` | varchar(255)

#### `customer_address_entity` and reference tables

The following tables reference `customer_address_entity` and can contain custom customer attributes:

Table | Column | Data type
--- | --- | ---
`customer_address_entity_datetime` | `value` | datetime
`customer_address_entity_decimal` | `value` | decimal(12,4)
`customer_address_entity_int` | `value` | int(11)
`customer_address_entity_text` | `value` | text
`customer_address_entity_varchar` | `value` | varchar(255)

### Order data

The `sales_flat_order` and related tables contain the customer's name, billing and shipping addresses, and related information.

#### `sales_flat_order` table

The following columns in the `sales_order` table contain customer information:

Column | Data type
--- | ---
`customer_id` | int(10)
`customer_email` | varchar(128)
`customer_firstname` | varchar(128)
`customer_gender` | int(11)
`customer_lastname` | varchar(128)
`customer_middlename` | varchar(128)
`customer_prefix` | varchar(32)
`customer_suffix` | varchar(32)
`customer_taxvat` | varchar(32)
`remote_ip` | varchar(32)

#### `sales_flat_order_address` table

The `sales_flat_order_address` table contains the customer's address.

Column | Data type
--- | ---
`customer_id` | int(10)
`fax` | varchar(255)
`region` | varchar(255)
`postcode` | varchar(255)
`lastname` | varchar(255)
`street` | varchar(255)
`city` | varchar(255)
`email` | varchar(255)
`telephone` | varchar(255)
`firstname` | varchar(255)
`prefix` | varchar(255)
`suffix` | varchar(255)
`middlename` | varchar(255)
`company` | varchar(255)
`vat_id`| text

#### `sales_flat_order_grid` table

The following columns in the `sales_flat_order_grid` table contain customer information:

Column | Data type
--- | ---
`customer_id` | int(10)
`shipping_name` | varchar(255)
`billing_name` | varchar(255)

#### `sales_flat_order_payment` table

The following columns in the `sales_flat_order_payment` table contain customer information:

Column | Data type
--- | ---
`cc_exp_month` | varchar(255)
`cc_ss_start_year` | varchar(255)
`echeck_bank_name` | varchar(128)
`echeck_type` | varchar(255)
`cc_ss_start_month` | varchar(255)
`cc_owner` | varchar(255)
`cc_exp_year` | varchar(255)
`echeck_routing_number` | varchar(255)
`echeck_account_name` | varchar(255)

### Quote data

Quotes contain a customer's name, email, address, and related information.

#### `sales_flat_quote` table

The following columns in the `sales_flat_quote` table contain customer information:

Column | Data type
--- | ---
`customer_id` | int(10)
`customer_tax_class_id` | int(10)
`customer_group_id` | int(10)
`customer_email` | varchar(255)
`customer_prefix` | varchar(40)
`customer_firstname` | varchar(255)
`customer_middlename` | varchar(40)
`customer_lastname` | varchar(255)
`customer_suffix` | varchar(40)
`customer_dob` | datetime
`customer_note` | varchar(255)
`remote_ip` | varchar(255)
`customer_gender` | varchar(255)

#### `sales_flat_quote_address` table

The following columns in the `sales_flat_quote_address` table contain customer information:

Column | Data type
--- | ---
`email` | varchar(255)
`prefix` | varchar(40)
`firstname` | varchar(255)
`middlename` | varchar(40)
`lastname` | varchar(255)
`suffix` | varchar(40)
`company` | varchar(255)
`street` | varchar(255)
`city` | varchar(255)
`region` | varchar(255)
`postcode` | varchar(255)
`fax` | varchar(255)

#### `sales_flat_quote_payment` table

The `sales_flat_quote_payment` table includes credit card information and other transactional information.

Column | Data type
--- | ---
`cc_last_4` | varchar(255)
`cc_owner` | varchar(255)
`cc_exp_month` | smallint(5)
`cc_exp_year` | smallint(5)
`cc_ss_owner` | varchar(255)
`cc_ss_start_month` | smallint(5)
`cc_ss_start_year` | smallint(5)

### Archive data

The following tables and columns contain customer information:

Table | Column | Data type
--- | --- | ---
`enterprise_sales_creditmemo_grid_archive` | `billing_name` | varchar(255)
`enterprise_sales_invoice_grid_archive` | `billing_name` | varchar(255)
`enterprise_sales_order_grid_archive` | `billing_name` | varchar(255)
`enterprise_sales_order_grid_archive` | `customer_id` | int(10)
`enterprise_sales_order_grid_archive` | `shipping_name` | varchar(255)
`enterprise_sales_shipment_grid_archive` | `shipping_name` | varchar(255)

### Sales data

The following tables and columns contain customer information:

Table | Column | Data type
--- | --- | ---
`sales_flat_creditmemo_grid` | `billing_name` | varchar(255)
`sales_flat_invoice_grid` | `billing_name` | varchar(255)

### RMA data

The following RMA tables and columns contain customer information:

Table | Column | Data type
--- | --- | ---
`enterprise_rma` | `customer_custom_email` | varchar(255)
`enterprise_rma_grid` | `customer_id` | int(10)
`enterprise_rma_grid` | `customer_name` | varchar(255)

### Miscellaneous data

The following tables and columns contain customer information:

Table | Column | Data type
--- | --- | ---
`core_email_queue_recipients` | `recipient_email` | varchar(128)
`core_email_queue_recipients` | `recipient_name` | varchar(255)
`customer_flowpassword` | `email` | varchar(255)
`customer_flowpassword` | `ip` | varchar(50)
`enterprise_giftregistry_person` | `email` | varchar(150)
`enterprise_giftregistry_person` | `firstname` | varchar(100)
`enterprise_giftregistry_person` | `lastname` | varchar(100)
`enterprise_giftregistry_person` | `middlename` | text
`enterprise_invitation` | `customer_id` | int(10)
`enterprise_invitation` | `email` | varchar(255)
`enterprise_invitation` | `referral_id` | int(10)
`enterprise_reminder_rule_coupon` | `customer_id` | int(10)
`enterprise_reminder_rule_coupon` | `emails_failed` | smallint(5)
`enterprise_scheduled_operations` | `email_receiver` | varchar(150)
`enterprise_scheduled_operations` | `email_sender` | varchar(150)
`gift_message` | `customer_id` | int(10)
`gift_message` | `recipient` | varchar(255)
`gift_message` | `sender` | varchar(255)
`newsletter_subscriber` | `customer_id` | int(10)
`newsletter_subscriber` | `subscriber_email` | varchar(150)
`persistent_session` | `customer_id` | int(10)
`persistent_session` | `info` | text
`poll_vote` | `customer_id` | int(10)
`poll_vote` | `ip_address` | varbinary(16)
`rating_option_vote` | `customer_id` | int(10)
`rating_option_vote` | `remote_ip` | varchar(50)
`rating_option_vote` | `remote_ip_long` | varbinary(516)
`send_friend_log` | `ip` | varbinary(16)

Other tables that reference Customer:

-  `catalog_compare_item`
-  `downloadable_link_purchased`
-  `enterprise_customerbalance`
-  `enterprise_customersegment_customer`
-  `enterprise_giftregistry_entity`
-  `enterprise_reminder_rule_log`
-  `enterprise_reward`
-  `log_customer`
-  `log_visitor_online`
-  `oauth_token`
-  `product_alert_price`
-  `product_alert_stock`
-  `report_compared_product_index`
-  `report_viewed_product_index`
-  `review_detail`
-  `sales_billing_agreement`
-  `sales_flat_shipment`
-  `sales_recurring_profile`
-  `salesrule_coupon_usage`
-  `salesrule_customer`
-  `tag`
-  `tag_relation`
-  `wishlist`

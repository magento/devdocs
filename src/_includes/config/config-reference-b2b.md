This reference contains unique configuration paths for the Magento Enterprise B2B Extension. The Magento Enterprise B2B Extension supports all configuration paths for {{site.data.var.ce}} (formerly Community Edition (CE) and {{site.data.var.ee}} (formerly Enterprise Edition (EE) as well.

## General category

This section lists variable names and configuration paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### B2B Features paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **B2B Features**.

| Name | Config path | Encrypted? | System-specific? | Sensitive? |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Enable Company | `btob/website_configuration/company_active` | | | |
| Enable Shared Catalog | `btob/website_configuration/sharedcatalog_active` | | | |
| Enable B2B Quote | `btob/website_configuration/negotiablequote_active` | | | |
| Enable Quick Order | `btob/website_configuration/quickorder_active` | | | |
| Enable Requisition List | `btob/website_configuration/requisition_list_active` | | | |
| Applicable Payment Methods | `btob/default_b2b_payment_methods/applicable_payment_methods` | | | |
| Payment Methods | `btob/default_b2b_payment_methods/available_payment_methods` | | | |

## Customers category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Customers**.

### Company configuration paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Company Configuration**.

| Name | Config path | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|
| Allow Company Registration from the Storefront | `company/general/allow_company_registration` | | | |
| Company Registration Email Recipient | `company/email/company_registration` | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png)
| Send Company Registration Email Copy To | `company/email/company_registration_copy` | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png)
| Send Email Copy Method | `company/email/company_copy_method` | | | |
| Default Company Registration Email | `company/email/company_notify_admin_template` | | | |
| Customer-Related Emails | `company/email/heading_customer` | | | |
| Default Sales Rep Assigned Email | `company/email/customer_sales_representative_template` | | | |
| Default Assign Company to Customer Email | `company/email/customer_company_customer_assign_template` | | | |
| Default Assign Company Admin Email | `company/email/customer_assign_super_user_template` | | | |
| Default Company Admin Inactive Email | `company/email/customer_inactivate_super_user_template` | | | |
| Default Company Admin Changed To Member Email | `company/email/customer_remove_super_user_template` | | | |
| Default Customer Status Active Email | `company/email/customer_account_activated_template` | | | |
| Default Customer Status Inactive Email | `company/email/customer_account_locked_template` | | | |
| Company Status Change | `company/email/heading_company_status` | | | |
| Company Status Change Email Recipient | `company/email/company_status_change` | | | |
| Send Company Status Change Email Copy To | `company/email/company_status_change_copy` | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png)
| Send Email Copy Method | `company/email/company_status_copy_method` | | | |
| Default Company Status Change To Active 1 Email | `company/email/company_status_pending_approval_to_active_template` | | | |
| Default Company Status Change To Active 2 Email | `company/email/company_status_rejected_blocked_to_active_template` | | | |
| Default Company Status Change To Rejected Email | `company/email/company_status_rejected_template` | | | |
| Default Company Status Change To Blocked Email | `company/email/company_status_blocked_template` | | | |
| Default Company Status Change To Pending Approval Email | `company/email/company_status_pending_approval_template` | | | |
| Company Credit | `company/email/heading_company_credit` | | | |
| Company Credit Change Email Sender | `company/email/company_credit_change` |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png)
| Send Company Credit Change Email Copy To | `company/email/company_credit_change_copy` | | | |
| Send Email Copy Method | `company/email/company_credit_copy_method` | | | |
| Allocated Email Template | `company/email/credit_allocated_email_template` | | | |
| Updated Email Template | `company/email/credit_updated_email_template` | | | |
| Reimbursed Email Template | `company/email/credit_reimbursed_email_template` | | | |
| Refunded Email Template | `company/email/credit_refunded_email_template` | | | |
| Reverted Email Template | `company/email/credit_reverted_email_template` | | | |

### Requisition lists paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Requisition Lists**.

| Name | Config path | Encrypted? | System-specific? | Sensitive? |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Number of Requisition Lists | `requisitionlist/general/number_requisition_lists` | | | |

## Sales category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Sales Emails paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

| Name | Config path | Encrypted? | System-specific? | Sensitive? |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Enabled | `sales_email/quote/enabled` | | | |
| Updated Quote Template (to Buyer) | `sales_email/quote/updated_buyer_template` | | | |
| Declined Quote Template (to Buyer) | `sales_email/quote/declined_buyer_template` | | | |
| New Quote Template (to Seller) | `sales_email/quote/new_seller_template` | | | |
| Updated Quote Template (to Seller) | `sales_email/quote/updated_seller_template` | | | |
| Quote Expiration (in 48 hrs) | `sales_email/quote/expire_two_days_template` | | | |
| Quote Expiration (in 24 hrs) | `sales_email/quote/expire_one_day_template` | | | |
| Expiration Date Reset | `sales_email/quote/expire_reset_template` | | | |
| Send Quote Email Copy To | `sales_email/quote/copy_to` | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png)
| Send Quote Email Copy Method | `sales_email/quote/copy_method` | | | |

### Quotes paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Quotes**.

| Name | Config path | Encrypted? | System-specific? | Sensitive? |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Minimum Amount | `quote/general/minimum_amount` | | | |
| Minimum Amount Message | `quote/general/minimum_amount_message` | | | |
| Default Expiration Period | `quote/general/default_expiration_period` | | | |
| File formats for upload | `quote/attached_files/file_formats` | | | |
| Maximum file size | `quote/attached_files/maximum_file_size` | | | |
| Minimum Amount | `quote/general/minimum_amount` | | | |
| Minimum Amount Message | `quote/general/minimum_amount_message` | | | |
| Default Expiration Period | `quote/general/default_expiration_period` | | | |
| File formats for upload | `quote/attached_files/file_formats` | | | |
| Maximum file size | `quote/attached_files/maximum_file_size` | | | |

## Payment method paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Payment Methods**.

{:.bs-callout-info}
The available paths are determined by your choice of Merchant country.

| Name | Config path | Encrypted? | System-specific? | Sensitive? |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Enabled | `payment/au/companycredit/active` | | | |
| Title | `payment/au/companycredit/title` | | | |
| New Order Status | `payment/au/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/au/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/au/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/au/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/au/companycredit/max_order_total` | | | |
| Sort Order | `payment/au/companycredit/sort_order` | | | |
| Enabled | `payment/es/companycredit/active` | | | |
| Title | `payment/es/companycredit/title` | | | |
| New Order Status | `payment/es/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/es/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/es/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/es/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/es/companycredit/max_order_total` | | | |
| Sort Order | `payment/es/companycredit/sort_order` | | | |
| Enabled | `payment/companycredit/active` | | | |
| Title | `payment/companycredit/title` | | | |
| New Order Status | `payment/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/companycredit/max_order_total` | | | |
| Sort Order | `payment/companycredit/sort_order` | | | |
| Enabled | `payment/nz/companycredit/active` | | | |
| Title | `payment/nz/companycredit/title` | | | |
| New Order Status | `payment/nz/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/nz/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/nz/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/nz/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/nz/companycredit/max_order_total` | | | |
| Sort Order | `payment/nz/companycredit/sort_order` | | | |
| Enabled | `payment/us/companycredit/active` | | | |
| Title | `payment/us/companycredit/title` | | | |
| New Order Status | `payment/us/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/us/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/us/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/us/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/us/companycredit/max_order_total` | | | |
| Sort Order | `payment/us/companycredit/sort_order` | | | |
| Enabled | `payment/gb/companycredit/active` | | | |
| Title | `payment/gb/companycredit/title` | | | |
| New Order Status | `payment/gb/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/gb/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/gb/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/gb/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/gb/companycredit/max_order_total` | | | |
| Sort Order | `payment/gb/companycredit/sort_order` | | | |
| Enabled | `payment/de/companycredit/active` | | | |
| Title | `payment/de/companycredit/title` | | | |
| New Order Status | `payment/de/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/de/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/de/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/de/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/de/companycredit/max_order_total` | | | |
| Sort Order | `payment/de/companycredit/sort_order` | | | |
| Enabled | `payment/other/companycredit/active` | | | |
| Title | `payment/other/companycredit/title` | | | |
| New Order Status | `payment/other/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/other/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/other/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/other/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/other/companycredit/max_order_total` | | | |
| Sort Order | `payment/other/companycredit/sort_order` | | | |
| Enabled | `payment/ca/companycredit/active` | | | |
| Title | `payment/ca/companycredit/title` | | | |
| New Order Status | `payment/ca/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/ca/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/ca/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/ca/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/ca/companycredit/max_order_total` | | | |
| Sort Order | `payment/ca/companycredit/sort_order` | | | |
| Enabled | `payment/hk/companycredit/active` | | | |
| Title | `payment/hk/companycredit/title` | | | |
| New Order Status | `payment/hk/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/hk/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/hk/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/hk/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/hk/companycredit/max_order_total` | | | |
| Sort Order | `payment/hk/companycredit/sort_order` | | | |
| Enabled | `payment/jp/companycredit/active` | | | |
| Title | `payment/jp/companycredit/title` | | | |
| New Order Status | `payment/jp/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/jp/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/jp/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/jp/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/jp/companycredit/max_order_total` | | | |
| Sort Order | `payment/jp/companycredit/sort_order` | | | |
| Enabled | `payment/fr/companycredit/active` | | | |
| Title | `payment/fr/companycredit/title` | | | |
| New Order Status | `payment/fr/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/fr/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/fr/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/fr/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/fr/companycredit/max_order_total` | | | |
| Sort Order | `payment/fr/companycredit/sort_order` | | | |
| Enabled | `payment/it/companycredit/active` | | | |
| Title | `payment/it/companycredit/title` | | | |
| New Order Status | `payment/it/companycredit/order_status` | | | |
| Payment from Applicable Countries | `payment/it/companycredit/allowspecific` | | | |
| Payment from Specific Countries | `payment/it/companycredit/specificcountry` | | | |
| Minimum Order Total | `payment/it/companycredit/min_order_total` | | | |
| Maximum Order Total | `payment/it/companycredit/max_order_total` | | | |
| Sort Order | `payment/it/companycredit/sort_order` | | | |

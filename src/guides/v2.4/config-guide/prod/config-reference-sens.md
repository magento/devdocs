---
group: configuration-guide
title: Sensitive and system-specific
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic lists configuration paths for system-specific and sensitive settings:

*  The [`magento app:config:dump` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html) writes system-specific settings to the system-specific configuration file, `app/etc/env.php`, which should _not_ be in source control. It also writes shared configuration for all Magento instances to `app/etc/config.php`, this file _should_ be in source control.
*  The [`magento config:sensitive:set` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html) writes sensitive settings to `app/etc/env.php`.

   You can also set sensitive values using configuration variables as discussed in [Use environment variables to override configuration settings]({{ page.baseurl }}/config-guide/prod/config-reference-var-name.html).

For a list of other configuration paths, see:

*  [All configuration paths except payments]({{ page.baseurl }}/config-guide/prod/config-reference-most.html)
*  [Payment configuration paths]({{ page.baseurl }}/config-guide/prod/config-reference-payment.html).

{:.bs-callout-info}
All configuration paths listed in this topic are sensitive. The `System-specific?` column shows which values are also system-specific.

## General category sensitive and system-specific paths

This section lists variable names and configuration paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### Web paths sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Web**.

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Base URL | `web/unsecure/base_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Base Link URL | `web/unsecure/base_link_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Base URL for Static View Files | `web/unsecure/base_static_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Base URL for User Media Files | `web/unsecure/base_media_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Secure Base URL | `web/secure/base_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Secure Base Link URL | `web/secure/base_link_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Secure Base URL for Static View Files | `web/secure/base_static_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Secure Base URL for User Media Files | `web/secure/base_media_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Default Web URL | `web/default/front` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Default No-route URL | `web/default/no_route` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Cookie Path | `web/cookie/cookie_path` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Cookie Domain | `web/cookie/cookie_domain` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Cookie Lifetime | `web/cookie/cookie_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Use HTTP Only | `web/cookie/cookie_httponly` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Cookie Restriction Mode | `web/cookie/cookie_restriction` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |

### Currency setup sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Error Email Recipient | `currency/import/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Store email address sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Email Configuration** > **General** > **Store Email Addresses**.

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Sender Name | `trans_email/ident_general/name` | | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Email | `trans_email/ident_general/email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Name | `trans_email/ident_sales/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Email | `trans_email/ident_sales/email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Name | `trans_email/ident_support/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Email | `trans_email/ident_support/email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Name | `trans_email/ident_custom1/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Email | `trans_email/ident_custom1/email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Name | `trans_email/ident_custom2/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sender Email | `trans_email/ident_custom2/email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Contacts sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Send Emails To | `contact/email/recipient_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Sender | `contact/email/sender_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Template | `contact/email/email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### New Relic reporting sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| New Relic Account ID | `newrelicreporting/general/account_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Relic Application ID | `newrelicreporting/general/app_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Relic API Key | `newrelicreporting/general/api` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Insights API Key | `newrelicreporting/general/insights_insert_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Relic API URL | `newrelicreporting/general/api_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Insights API URL | `newrelicreporting/general/insights_api_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

## Customers category sensitive and system-specific paths

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Customers**.

### Customer configuration sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Customer Configuration**.

Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
Default Email Domain | `customer/create_account/email_domain` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |

## Catalog category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Catalog**.

### Catalog sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Error Email Recipient | `catalog/productalert_cron/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| YouTube API Key | `catalog/product_video/youtube_api_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Solr Server Hostname | `catalog/search/solr_server_hostname` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Solr Server Port | `catalog/search/solr_server_port` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Solr Server Username | `catalog/search/solr_server_username` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Solr Server Password | `catalog/search/solr_server_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Solr Server Path | `catalog/search/solr_server_path` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Elasticsearch Server Hostname | `catalog/search/elasticsearch_server_hostname` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Elasticsearch Server Port | `catalog/search/elasticsearch_server_port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Elasticsearch Index Prefix | `catalog/search/elasticsearch_index_prefix` | !<!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Enable Elasticsearch HTTP Auth | `catalog/search/elasticsearch_enable_auth` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Elasticsearch HTTP Username | `catalog/search/elasticsearch_username` | !<!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Elasticsearch HTTP Password | `catalog/search/elasticsearch_password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Elasticsearch Server Timeout | `catalog/search/elasticsearch_server_timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |

### Inventory sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Inventory**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Google API key | `cataloginventory/source_selection_distance_based_google/api_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### XML sitemap sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Error Email Recipient | `sitemap/generate/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

## Sales category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Shipping settings sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Country | `shipping/origin/country_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Region/State | `shipping/origin/region_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| ZIP/Postal Code | `shipping/origin/postcode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| City | `shipping/origin/city` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Street Address | `shipping/origin/street_line1` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Street Address Line 2 | `shipping/origin/street_line2` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Account | `carriers/ups/is_account_live` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |

### Sales emails sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Send Order Email Copy To | `sales_email/order/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Order Comment Email Copy To | `sales_email/order_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Invoice Email Copy To | `sales_email/invoice/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Invoice Comment Email Copy To | `sales_email/invoice_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Shipment Email Copy To | `sales_email/shipment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Shipment Comment Email Copy To | `sales_email/shipment_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Credit Memo Email Copy To | `sales_email/creditmemo/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Credit Memo Comment Email Copy To | `sales_email/creditmemo_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Pickup Ready Email Copy To | `sales_email/temando_pickup/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Checkout sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Send Payment Failed Email Copy To | `checkout/payment_failed/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Google API sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Container Id | `google/analytics/container_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Delivery methods sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Delivery Methods**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Gateway URL | `carriers/usps/gateway_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secure Gateway URL | `carriers/usps/gateway_secure_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Title | `carriers/usps/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
| User ID | `carriers/usps/userid` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `carriers/usps/password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| User ID | `carriers/ups/username` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `carriers/ups/password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access License Number | `carriers/ups/access_license_number` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Tracking XML URL | `carriers/ups/tracking_xml_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Gateway XML URL | `carriers/ups/gateway_xml_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Shipper Number | `carriers/ups/shipper_number` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Debug | `carriers/ups/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Account ID | `carriers/fedex/account` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Key | `carriers/fedex/key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Meter Number | `carriers/fedex/meter_number` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `carriers/fedex/password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access ID | `carriers/dhl/id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `carriers/dhl/password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Debug | `carriers/dhl/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
| Account Number | `carriers/dhl/account` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Gateway URL | `carriers/dhl/gateway_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Mode | `carriers/fedex/sandbox_mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Sales sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Contact Name | `sales/magento_rma/store_name` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Street Address | `sales/magento_rma/address` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Street Address | `sales/magento_rma/address1` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| City | `sales/magento_rma/city` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| State/Province | `sales/magento_rma/region_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| ZIP/Postal Code | `sales/magento_rma/zip` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Country | `sales/magento_rma/country_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send RMA Email Copy To | `sales_email/magento_rma/copy_to` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send RMA Authorization Email Copy To | `sales_email/magento_rma_auth/copy_to` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send RMA Comment Email Copy To | `sales_email/magento_rma_comment/copy_to` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send RMA Comment Email Copy To | `sales_email/magento_rma_customer_comment/copy_to` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Google API paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Account Number | `google/analytics/account` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

## Advanced category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### Admin sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Custom Admin URL | `admin/url/custom` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Custom Admin Path | `admin/url/custom_path` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### System sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Error Email Recipient | `system/magento_scheduled_import_export_log/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access list | `system/full_page_cache/varnish/access_list` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Error Email Sender | `system/magento_scheduled_import_export_log/error_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Developer sensitive and system-specific paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Allowed IPs (comma separated) | `dev/restrict/allow_ips` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png)

## Advanced category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### System paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Host | `system/smtp/host` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Port (25) | `system/smtp/port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Backend host | `system/full_page_cache/varnish/backend_host` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Backend port | `system/full_page_cache/varnish/backend_port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Developer paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
Log JS Errors to Session Storage Key | `dev/js/session_storage_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |

## Payment sensitive and system-specific paths

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales** > **Payment**.

### General variable {#vars-merch-country}

| Name | Config path | EE only? | Encrypted? |
|--------------|--------------|--------------|--------------|
| Merchant Country | `paypal/general/merchant_country` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

{:.bs-callout-info}
Your choice for this variable determines which [International paths](#vars-intl-list) you can use.

### PayPal sensitive and system-specific paths

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Email Associated with PayPal Merchant Account (Optional) | `paypal/general/business_account` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant Account ID | `payment/paypal_express/merchant_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Publisher ID | `payment/paypal_express_bml/publisher_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `paypal/fetch_reports/ftp_password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Login | `paypal/fetch_reports/ftp_login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Custom Endpoint Hostname or IP-Address | `paypal/fetch_reports/ftp_ip` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Mode | `paypal/fetch_reports/ftp_sandbox` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Debug Mode | `payment/paypal_express/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Debug Mode | `payment/paypal_billing_agreement/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| SFTP Credentials | `payment_all_paypal/express_checkout/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### PayPal Payflow Pro sensitive and system-specific paths

| Name  | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| User | `payment/payflow_advanced/user` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `payment/payflow_advanced/pwd` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Custom Path | `paypal/fetch_reports/ftp_path` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |  ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| User | `payment/payflowpro/user` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `payment/payflowpro/pwd` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment/payflowpro/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Partner | `payment/payflowpro/partner` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Proxy Host | `payment/payflowpro/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Proxy Port | `payment/payflowpro/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Debug Mode | `payment/payflowpro/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| SFTP Credentials | `payment_all_paypal/paypal_payflowpro/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Credit Card Settings | `payment_all_paypal/paypal_payflowpro/settings_paypal_payflow/heading_cc` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### PayPal Payflow Link sensitive and system-specific paths

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| User | `payment/payflow_link/user` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Password | `payment/payflow_link/pwd` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment/payflow_link/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Use Proxy | `payment/payflow_link/use_proxy` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Proxy Host | `payment/payflow_link/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Proxy Port | `payment/payflow_link/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Debug Mode | `payment/payflow_link/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| URL method for Cancel URL and Return URL | `payment/payflow_link/url_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Debug Mode | `payment/payflow_express/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| SFTP Credentials | `payment_all_paypal/payflow_link/settings_payflow_link/settings_payflow_link_advanced/payflow_link_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### PayPal Payments Pro sensitive and system-specific paths

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| API Username | `paypal/wpp/api_username` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Password | `paypal/wpp/api_password` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Signature | `paypal/wpp/api_signature` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Certificate | `paypal/wpp/api_cert` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Proxy Host | `paypal/wpp/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Proxy Port | `paypal/wpp/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Mode | `paypal/wpp/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| SFTP Credentials | `payment_all_paypal/payments_pro_hosted_solution_without_bml/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### PayPal Payments Pro Hosted sensitive and system-specific paths

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Debug Mode | `payment/hosted_pro/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| SFTP Credentials | `payment_all_paypal/payments_pro_hosted_solution/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_au/paypal_group_all_in_one/payments_pro_hosted_solution_au/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### Braintree sensitive and system-specific paths

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Merchant ID | `payment/braintree/merchant_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Public Key | `payment/braintree/public_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Private Key | `payment/braintree/private_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant Account ID | `payment/braintree/merchant_account_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Kount Merchant ID | `payment/braintree/kount_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Override Merchant Name | `payment/braintree_paypal/merchant_name_override` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Phone | `payment/braintree/descriptor_phone` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| URL | `payment/braintree/descriptor_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |

### Check / Money Order paths

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Send Check to | `payment/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_us/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

### International paths {#vars-intl-list}

| Name | Config path | EE only? | Encrypted? | System-specific? | Sensitive? |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Transaction Key | `payment_au/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_au/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_au/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_au/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_au/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_au/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_au/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_au/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_au/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_au/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Mode | `payment_au/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_au/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_au/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_au/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_au/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_au/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_au/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_es/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_es/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_es/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_es/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_es/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_es/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_es/cybersource/secret_key` |![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_es/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_es/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_es/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_es/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Debug | `payment_es/worldpay/debug` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_es/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_es/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_es/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_es/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_es/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_es/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_es/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_nz/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_nz/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_nz/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_nz/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_nz/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_nz/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_nz/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_nz/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_nz/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_nz/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_nz/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_nz/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_nz/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment/payflow_advanced/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Proxy Host | `payment/payflow_advanced/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Proxy Port | `payment/payflow_advanced/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Debug Mode | `payment/payflow_advanced/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| URL method for Cancel URL and Return URL | `payment/payflow_advanced/url_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_us/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_us/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_us/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_us/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_us/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_us/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_us/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_us/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_us/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_us/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_us/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_us/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_us/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_us/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_gb/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_gb/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_gb/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_gb/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_gb/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_gb/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_gb/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_gb/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_gb/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_gb/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_gb/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_gb/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_de/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_de/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_de/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_de/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Transaction Key | `payment_de/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_de/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_de/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_de/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Payment Response Password | `payment_de/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_de/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Debug | `payment_de/worldpay/debug` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_de/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_de/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_de/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_de/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_de/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_de/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_de/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_other/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_other/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Gateway URL | `payment_other/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_other/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Transaction Key | `payment_other/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_other/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_other/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Order Status | `payment_other/cybersource/order_status` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_other/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_other/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_other/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_other/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_other/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_other/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_other/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_other/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_other/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_other/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_other/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_ca/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_ca/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_ca/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_ca/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_ca/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) |  ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_ca/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_ca/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Order Status | `payment_ca/cybersource/order_status` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
| Test Mode | `payment_ca/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_ca/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Remote Admin Authorization Password | `payment_ca/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_ca/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_ca/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_ca/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_ca/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_ca/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_ca/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | |  ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_ca/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_ca/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_hk/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_hk/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_hk/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_hk/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_hk/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_hk/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_hk/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_hk/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Payment Response Password | `payment_hk/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_hk/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_hk/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Key | `payment_hk/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_hk/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_hk/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_hk/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_hk/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_hk/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_jp/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_jp/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_jp/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_jp/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_jp/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_jp/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_jp/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Order Status | `payment_jp/cybersource/order_status` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Test Mode | `payment_jp/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_jp/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_jp/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_jp/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_jp/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_jp/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_jp/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_jp/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_jp/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_jp/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_jp/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_fr/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_fr/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_fr/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_fr/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_fr/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_fr/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_fr/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_fr/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_fr/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png)  | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_fr/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_fr/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |  | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_fr/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_fr/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_fr/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_fr/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_fr/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_fr/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_fr/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_it/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_it/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Gateway URL | `payment_it/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Details URL | `payment_it/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_it/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_it/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_it/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_it/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Payment Response Password | `payment_it/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_it/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Test Mode | `payment_it/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Sandbox Mode | `payment_it/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) |
| Live API Key | `payment_it/eway/live_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live API Password | `payment_it/eway/live_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Live Client-side Encryption Key | `payment_it/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Key | `payment_it/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox API Password | `payment_it/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Sandbox Client-side Encryption Key | `payment_it/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Key | `fraud_protection/signifyd/api_key`   | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) |  ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API URL  |  `fraud_protection/signifyd/api_url`  |  ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |  | ![Sys-specific]({{ site.baseurl }}/common/images/cloud_env.png) | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_au/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_au/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_au/paypal_payment_gateways/paypal_payflowpro_au/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_au/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_au/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_au/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_au/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_au/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_au/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_es/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_es/paypal_group_all_in_one/payments_pro_hosted_solution_es/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_es/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_es/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_es/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_es/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_es/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_es/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_es/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_es/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_es/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_nz/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials |
| SFTP Credentials | `payment_nz/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_nz/paypal_payment_gateways/paypal_payflowpro_nz/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_nz/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![EE-only]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_nz/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_nz/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_nz/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_nz/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_nz/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_nz/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_nz/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_nz/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_nz/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Payment Response Password | `payment_nz/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_nz/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_nz/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_nz/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_us/paypal_alternative_payment_methods/express_checkout_us/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_us/paypal_group_all_in_one/payflow_advanced/settings_payments_advanced/settings_payments_advanced_advanced/settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_us/paypal_group_all_in_one/wpp_usuk/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_us/paypal_group_all_in_one/wps_express/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_us/paypal_payment_gateways/paypal_payflowpro_with_express_checkout/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_us/paypal_payment_gateways/payflow_link_us/settings_payflow_link/settings_payflow_link_advanced/payflow_link_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_us/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_us/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_us/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_us/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_us/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_us/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_us/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_us/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_us/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Payment Response Password | `payment_us/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_us/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_us/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_us/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_gb/paypal_alternative_payment_methods/express_checkout_gb/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_gb/paypal_group_all_in_one/payments_pro_hosted_solution_with_express_checkout/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_gb/paypal_group_all_in_one/wps_express/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_gb/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_gb/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_gb/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_gb/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Access Key | `payment_gb/cybersource/access_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Secret Key | `payment_gb/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_gb/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Transaction Key | `payment_gb/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_gb/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_gb/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_gb/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_gb/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Payment Response Password | `payment_gb/worldpay/response_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_gb/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Authorization Password | `payment_gb/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_de/paypal_payment_solutions/express_checkout_de/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_de/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_de/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_de/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_de/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_de/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_de/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_de/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_de/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_de/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
| Remote Admin Installation ID | `payment_de/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_de/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_other/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_other/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_other/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_other/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_other/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_other/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Order Status | `payment_other/authorizenet_directpost/order_status` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_other/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_other/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_other/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_other/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_other/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_other/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_ca/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_ca/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_ca/paypal_payment_gateways/wpp_ca/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_ca/paypal_payment_gateways/paypal_payflowpro_ca/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_ca/paypal_payment_gateways/payflow_link_ca/settings_payflow_link/settings_payflow_link_advanced/payflow_link_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_ca/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_ca/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_ca/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_ca/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| New Order Status | `payment_ca/authorizenet_directpost/order_status` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_ca/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_ca/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_ca/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_ca/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_ca/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_ca/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_ca/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_hk/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_hk/paypal_group_all_in_one/payments_pro_hosted_solution_hk/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |  | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_hk/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_hk/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_hk/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_hk/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_hk/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_hk/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_hk/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_hk/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_hk/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_hk/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_hk/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_hk/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Signature Fields | `payment_hk/worldpay/signature_fields` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_jp/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_jp/paypal_group_all_in_one/payments_pro_hosted_solution_jp/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_jp/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_jp/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_jp/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_jp/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_jp/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_jp/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_jp/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_jp/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_jp/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_jp/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
| Remote Admin Installation ID | `payment_jp/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_jp/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Signature Fields | `payment_jp/worldpay/signature_fields` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_fr/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_fr/paypal_group_all_in_one/payments_pro_hosted_solution_fr/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_fr/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_fr/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_fr/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_fr/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_fr/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_fr/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_fr/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_fr/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_fr/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_fr/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_fr/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_fr/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Signature Fields | `payment_fr/worldpay/signature_fields` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_it/express_checkout_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_it/paypal_group_all_in_one/payments_pro_hosted_solution_it/pphs_settings/pphs_settings_advanced/pphs_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| SFTP Credentials | `payment_it/paypal_group_all_in_one/wps_other/settings_ec/settings_ec_advanced/express_checkout_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Make Check Payable to | `payment_it/checkmo/payable_to` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Send Check to | `payment_it/checkmo/mailing_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| API Login ID | `payment_it/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant MD5 | `payment_it/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Email Customer | `payment_it/authorizenet_directpost/email_customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant's Email | `payment_it/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Merchant ID | `payment_it/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Profile ID | `payment_it/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}/common/images/cloud_enc.png) | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Installation ID | `payment_it/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| Remote Admin Installation ID | `payment_it/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
| MD5 Secret for Transactions | `payment_it/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | | | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |

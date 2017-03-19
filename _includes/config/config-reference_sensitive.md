<div markdown="1">

<div class="bs-callout bs-callout-info" id="info" markdown="1">
All configuration paths listed in this topic are sensitive. The `System-specific?` column shows which values are also system-specific.
</div>

## General category sensitive and system-specific paths
This section lists variable names and configuration paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### Web paths sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Web**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Base URL | `web/unsecure/base_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Base Link URL | `web/unsecure/base_link_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Base URL for Static View Files | `web/unsecure/base_static_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Base URL for User Media Files | `web/unsecure/base_media_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Secure Base URL | `web/secure/base_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Secure Base Link URL | `web/secure/base_link_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Secure Base URL for Static View Files | `web/secure/base_static_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Secure Base URL for User Media Files | `web/secure/base_media_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Default Web URL | `web/default/front` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Default No-route URL | `web/default/no_route` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Cookie Path | `web/cookie/cookie_path` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Cookie Domain | `web/cookie/cookie_domain` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### Currency setup sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Error Email Recipient | `currency/import/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### Store email address sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Email Configuration** > **General** > **Store Email Addresses**. 

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Sender Name | `trans_email/ident_general/name` 
Sender Email | `trans_email/ident_general/email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Name | `trans_email/ident_sales/name` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Email | `trans_email/ident_sales/email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Name | `trans_email/ident_support/name` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Email | `trans_email/ident_support/email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Name | `trans_email/ident_custom1/name` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Email | `trans_email/ident_custom1/email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Name | `trans_email/ident_custom2/name` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Sender Email | `trans_email/ident_custom2/email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### Contacts sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Send Emails To | `contact/email/recipient_email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### New Relic reporting sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
New Relic Account ID | `newrelicreporting/general/account_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
New Relic Application ID | `newrelicreporting/general/app_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
New Relic API Key | `newrelicreporting/general/api` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Insights API Key | `newrelicreporting/general/insights_insert_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 

## Customers category sensitive and system-specific paths
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Customers**.

### Customer configuration sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Customer Configuration**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|--------------|
Default Email Domain | `customer/create_account/email_domain` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |



## Catalog category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Catalog**.

### Catalog sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Error Email Recipient | `catalog/productalert_cron/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
YouTube API Key | `catalog/product_video/youtube_api_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Solr Server Hostname | `catalog/search/solr_server_hostname` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Solr Server Port | `catalog/search/solr_server_port` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Solr Server Username | `catalog/search/solr_server_username` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Solr Server Password | `catalog/search/solr_server_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Solr Server Path | `catalog/search/solr_server_path` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Elasticsearch Server Hostname | `catalog/search/elasticsearch_server_hostname` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Elasticsearch Server Port | `catalog/search/elasticsearch_server_port` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Elasticsearch Index Prefix | `catalog/search/elasticsearch_index_prefix` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Enable Elasticsearch HTTP Auth | `catalog/search/elasticsearch_enable_auth` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Elasticsearch HTTP Username | `catalog/search/elasticsearch_username` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Elasticsearch HTTP Password | `catalog/search/elasticsearch_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Elasticsearch Server Timeout | `catalog/search/elasticsearch_server_timeout` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### XML sitemap sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Error Email Recipient | `sitemap/generate/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

## Sales category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Shipping settings sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Country | `shipping/origin/country_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Region/State | `shipping/origin/region_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
ZIP/Postal Code | `shipping/origin/postcode` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
City | `shipping/origin/city` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Street Address | `shipping/origin/street_line1` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Street Address Line 2 | `shipping/origin/street_line2` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Live Account | `carriers/ups/is_account_live` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### Sales emails sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Send Order Email Copy To | `sales_email/order/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Order Comment Email Copy To | `sales_email/order_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Invoice Email Copy To | `sales_email/invoice/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Invoice Comment Email Copy To | `sales_email/invoice_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Shipment Email Copy To | `sales_email/shipment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Shipment Comment Email Copy To | `sales_email/shipment_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Credit Memo Email Copy To | `sales_email/creditmemo/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Send Credit Memo Comment Email Copy To | `sales_email/creditmemo_comment/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### Checkout sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Send Payment Failed Email Copy To | `checkout/payment_failed/copy_to` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### Google API sensitive and system-specific paths 
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Container Id | `google/analytics/container_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 

### Shipping methods sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Methods**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Gateway URL | `carriers/usps/gateway_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Secure Gateway URL | `carriers/usps/gateway_secure_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Title | `carriers/usps/title` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
User ID | `carriers/usps/userid` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Password | `carriers/usps/password` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
User ID | `carriers/ups/username` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Password | `carriers/ups/password` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Access License Number | `carriers/ups/access_license_number` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Tracking XML URL | `carriers/ups/tracking_xml_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Gateway XML URL | `carriers/ups/gateway_xml_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Shipper Number | `carriers/ups/shipper_number` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Debug | `carriers/ups/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Account ID | `carriers/fedex/account` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Key | `carriers/fedex/key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Meter Number | `carriers/fedex/meter_number` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Password | `carriers/fedex/password` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Access ID | `carriers/dhl/id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Password | `carriers/dhl/password` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Debug | `carriers/dhl/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Account Number | `carriers/dhl/account` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Gateway URL | `carriers/dhl/gateway_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Mode | `carriers/fedex/sandbox_mode` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### Sales sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Contact Name | `sales/magento_rma/store_name` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Street Address | `sales/magento_rma/address` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Street Address | `sales/magento_rma/address1` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
City | `sales/magento_rma/city` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
State/Province | `sales/magento_rma/region_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
ZIP/Postal Code | `sales/magento_rma/zip` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Country | `sales/magento_rma/country_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Send RMA Email Copy To | `sales_email/magento_rma/copy_to` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Send RMA Authorization Email Copy To | `sales_email/magento_rma_auth/copy_to` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Send RMA Comment Email Copy To | `sales_email/magento_rma_comment/copy_to` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Send RMA Comment Email Copy To | `sales_email/magento_rma_customer_comment/copy_to` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 

## Advanced category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### Admin sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Custom Admin URL | `admin/url/custom` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Custom Admin Path | `admin/url/custom_path` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### System sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Error Email Recipient | `system/magento_scheduled_import_export_log/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

### Developer sensitive and system-specific paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Allowed IPs (comma separated) | `dev/restrict/allow_ips` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 

## Payment sensitive and system-specific paths
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales** > **Payment**.

### PayPal sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Email Associated with PayPal Merchant Account (Optional) | `paypal/general/business_account` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Merchant Account ID | `payment/paypal_express/merchant_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Publisher ID | `payment/paypal_express_bml/publisher_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Password | `paypal/fetch_reports/ftp_password` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Login | `paypal/fetch_reports/ftp_login` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Custom Endpoint Hostname or IP-Address | `paypal/fetch_reports/ftp_ip` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Custom Path | `paypal/fetch_reports/ftp_path` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Mode | `paypal/fetch_reports/ftp_sandbox` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug Mode | `payment/paypal_express/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug Mode | `payment/paypal_billing_agreement/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### PayPal Payflow Pro sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
User | `payment/payflow_advanced/user` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Password | `payment/payflow_advanced/pwd` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
User | `payment/payflowpro/user` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Password | `payment/payflowpro/pwd` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment/payflowpro/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Partner | `payment/payflowpro/partner` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Proxy Host | `payment/payflowpro/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Proxy Port | `payment/payflowpro/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug Mode | `payment/payflowpro/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
SFTP Credentials | `payment_all_paypal/paypal_payflowpro/settings_paypal_payflow/settings_paypal_payflow_advanced/paypal_payflow_settlement_report/heading_sftp` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### PayPal Payflow Link sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
User | `payment/payflow_link/user` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Password | `payment/payflow_link/pwd` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Test Mode | `payment/payflow_link/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Use Proxy | `payment/payflow_link/use_proxy` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Proxy Host | `payment/payflow_link/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Proxy Port | `payment/payflow_link/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> |  | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug Mode | `payment/payflow_link/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
URL method for Cancel URL and Return URL | `payment/payflow_link/url_method` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug Mode | `payment/payflow_express/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### PayPal Payments Pro sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
API Username | `paypal/wpp/api_username` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
API Password | `paypal/wpp/api_password` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
API Signature | `paypal/wpp/api_signature` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
API Certificate | `paypal/wpp/api_cert` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Proxy Host | `paypal/wpp/proxy_host` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Proxy Port | `paypal/wpp/proxy_port` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Mode | `paypal/wpp/sandbox_flag` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### PayPal Payments Pro Hosted sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Debug Mode | `payment/hosted_pro/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### Braintree sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Merchant ID | `payment/braintree/merchant_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Public Key | `payment/braintree/public_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Private Key | `payment/braintree/private_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Merchant Account ID | `payment/braintree/merchant_account_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Kount Merchant ID | `payment/braintree/kount_id` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Override Merchant Name | `payment/braintree_paypal/merchant_name_override` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
Merchant's Email | `payment/authorizenet_directpost/merchant_email` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | 
URL | `payment/braintree/descriptor_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### Worldpay sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Installation ID | `payment/worldpay/installation_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Payment Response Password | `payment/worldpay/response_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Remote Admin Installation ID | `payment/worldpay/admin_installation_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Remote Admin Authorisation Password | `payment/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
MD5 Secret for Transactions | `payment/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Signature Fields | `payment/worldpay/signature_fields` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | 
Test Mode | `payment/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### Authorize.net Direct Post sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
API Login ID | `payment/authorizenet_directpost/login` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Transaction Key | `payment/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![EE-only]({{ site.baseurl }}common/images/cloud_enc.png) | 
Merchant MD5 | `payment/authorizenet_directpost/trans_md5` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![EE-only]({{ site.baseurl }}common/images/cloud_enc.png) | 
Test Mode | `payment/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Gateway URL | `payment/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Details URL | `payment/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug | `payment/authorizenet_directpost/debug` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### eWAY sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Live API Key | `payment/eway/live_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Live API Password | `payment/eway/live_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Live Client-side Encryption Key | `payment/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Sandbox API Key | `payment/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Sandbox API Password | `payment/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Sandbox Client-side Encryption Key | `payment/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Sandbox Mode | `payment/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |

### Cybersource sensitive and system-specific paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|
Merchant ID | `payment/cybersource/merchant_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Transaction Key | `payment/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Profile ID | `payment/cybersource/profile_id` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Access Key | `payment/cybersource/access_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Secret Key | `payment/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Test Mode | `payment/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


### International paths

Name  | Config path | EE only? | Encrypted? | System-specific? |
|--------------|--------------|--------------|--------------|--------------|
Transaction Key | `payment_au/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_au/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Gateway URL | `payment_au/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Details URL | `payment_au/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Key | `payment_au/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Access Key | `payment_au/cybersource/access_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Secret Key | `payment_au/cybersource/secret_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_au/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Payment Response Password | `payment_au/worldpay/response_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Remote Admin Authorisation Password | `payment_au/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Mode | `payment_au/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live API Key | `payment_au/eway/live_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live API Password | `payment_au/eway/live_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live Client-side Encryption Key | `payment_au/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox API Key | `payment_au/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox API Password | `payment_au/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Client-side Encryption Key | `payment_au/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Key | `payment_es/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_es/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Gateway URL | `payment_es/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Details URL | `payment_es/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Key | `payment_es/cybersource/transaction_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Access Key | `payment_es/cybersource/access_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Secret Key | `payment_es/cybersource/secret_key` |![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_es/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Payment Response Password | `payment_es/worldpay/response_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Remote Admin Authorisation Password | `payment_es/worldpay/auth_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
MD5 Secret for Transactions | `payment_es/worldpay/md5_secret` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Debug | `payment_es/worldpay/debug` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Mode | `payment_es/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live API Key | `payment_es/eway/live_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live API Password | `payment_es/eway/live_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live Client-side Encryption Key | `payment_es/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox API Key | `payment_es/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox API Password | `payment_es/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Client-side Encryption Key | `payment_es/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Key | `payment_nz/authorizenet_directpost/trans_key` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_nz/authorizenet_directpost/test` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Gateway URL | `payment_nz/authorizenet_directpost/cgi_url` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Transaction Details URL | `payment_nz/authorizenet_directpost/cgi_url_td` | <!-- ![Not EE-only]({{ site.baseurl }}common/images/red-x.png) --> | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_nz/cybersource/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Test Mode | `payment_nz/worldpay/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Mode | `payment_nz/eway/sandbox_flag` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live API Key | `payment_nz/eway/live_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live API Password | `payment_nz/eway/live_api_password` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Live Client-side Encryption Key | `payment_nz/eway/live_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox API Key | `payment_nz/eway/sandbox_api_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | 
Sandbox API Password | `payment_nz/eway/sandbox_api_password` | ![EE-only]({{ site.baseurl ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |}}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |
Sandbox Client-side Encryption Key | `payment_nz/eway/sandbox_encryption_key` | ![EE-only]({{ site.baseurl }}common/images/cloud_ee.png) | ![Encrypted]({{ site.baseurl }}common/images/cloud_enc.png) | ![Sys-specific]({{ site.baseurl }}common/images/cloud_env.png) |


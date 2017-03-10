<div markdown="1">

## General category sensitive paths
This section lists variable names and configuration paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### Currency setup sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Error Email Recipient | `currency/import/error_email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Store email address sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Email Configuration** > **General** > **Store Email Addresses**. 

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Sender Name | `trans_email/ident_general/name` 
Sender Email | `trans_email/ident_general/email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Name | `trans_email/ident_sales/name` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Email | `trans_email/ident_sales/email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Name | `trans_email/ident_support/name` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Email | `trans_email/ident_support/email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Name | `trans_email/ident_custom1/name` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Email | `trans_email/ident_custom1/email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Name | `trans_email/ident_custom2/name` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sender Email | `trans_email/ident_custom2/email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Contacts sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Send Emails To | `contact/email/recipient_email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### New Relic reporting sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
New Relic Account ID | `newrelicreporting/general/account_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
New Relic Application ID | `newrelicreporting/general/app_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
New Relic API Key | `newrelicreporting/general/api` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Insights API Key | `newrelicreporting/general/insights_insert_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

## Catalog category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Catalog**.

### Catalog sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Error Email Recipient | `catalog/productalert_cron/error_email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
YouTube API Key | `catalog/product_video/youtube_api_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Solr Server Hostname | `catalog/search/solr_server_hostname` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Solr Server Port | `catalog/search/solr_server_port` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Solr Server Username | `catalog/search/solr_server_username` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Solr Server Password | `catalog/search/solr_server_password` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Solr Server Path | `catalog/search/solr_server_path` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Elasticsearch Server Hostname | `catalog/search/elasticsearch_server_hostname` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Elasticsearch Server Port | `catalog/search/elasticsearch_server_port` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)
Elasticsearch Index Prefix | `catalog/search/elasticsearch_index_prefix` | ![EE-only]({{ site.baseurl }}common/images/green-check.png)

### XML sitemap sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Error Email Recipient | `sitemap/generate/error_email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

## Sales category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Shipping settings sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Country | `shipping/origin/country_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Region/State | `shipping/origin/region_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
ZIP/Postal Code | `shipping/origin/postcode` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
City | `shipping/origin/city` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Street Address | `shipping/origin/street_line1` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Street Address Line 2 | `shipping/origin/street_line2` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Sales emails sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Send Order Email Copy To | `sales_email/order/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Order Comment Email Copy To | `sales_email/order_comment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Invoice Email Copy To | `sales_email/invoice/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Invoice Comment Email Copy To | `sales_email/invoice_comment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Shipment Email Copy To | `sales_email/shipment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Shipment Comment Email Copy To | `sales_email/shipment_comment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Credit Memo Email Copy To | `sales_email/creditmemo/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send Credit Memo Comment Email Copy To | `sales_email/creditmemo_comment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Checkout sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Send Payment Failed Email Copy To | `checkout/payment_failed/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Google API sensitive paths 
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Container Id | `google/analytics/container_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Shipping methods sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Methods**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Gateway URL | `carriers/usps/gateway_url` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Secure Gateway URL | `carriers/usps/gateway_secure_url` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Title | `carriers/usps/title` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
User ID | `carriers/usps/userid` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `carriers/usps/password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
User ID | `carriers/ups/username` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `carriers/ups/password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Access License Number | `carriers/ups/access_license_number` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Tracking XML URL | `carriers/ups/tracking_xml_url` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Gateway XML URL | `carriers/ups/gateway_xml_url` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Shipper Number | `carriers/ups/shipper_number` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Account ID | `carriers/fedex/account` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Key | `carriers/fedex/key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Meter Number | `carriers/fedex/meter_number` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `carriers/fedex/password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Access ID | `carriers/dhl/id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `carriers/dhl/password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Account Number | `carriers/dhl/account` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Sales sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Contact Name | `sales/magento_rma/store_name` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Street Address | `sales/magento_rma/address` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Street Address | `sales/magento_rma/address1` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
City | `sales/magento_rma/city` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
State/Province | `sales/magento_rma/region_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
ZIP/Postal Code | `sales/magento_rma/zip` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Country | `sales/magento_rma/country_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send RMA Email Copy To | `sales_email/magento_rma/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send RMA Authorization Email Copy To | `sales_email/magento_rma_auth/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send RMA Comment Email Copy To | `sales_email/magento_rma_comment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Send RMA Comment Email Copy To | `sales_email/magento_rma_customer_comment/copy_to` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

## Advanced category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### Admin sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Custom Admin URL | `admin/url/custom` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Custom Admin Path | `admin/url/custom_path` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### System sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Error Email Recipient | `system/magento_scheduled_import_export_log/error_email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Developer sensitive paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Allowed IPs (comma separated) | `dev/restrict/allow_ips` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

## Payment sensitive paths
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales** > **Payment**.

### PayPal sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Email Associated with PayPal Merchant Account (Optional) | `paypal/general/business_account` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Merchant Account ID | `payment/paypal_express/merchant_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Publisher ID | `payment/paypal_express_bml/publisher_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `paypal/fetch_reports/ftp_password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Login | `paypal/fetch_reports/ftp_login` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Custom Endpoint Hostname or IP-Address | `paypal/fetch_reports/ftp_ip` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Custom Path | `paypal/fetch_reports/ftp_path` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### PayPal Payflow Pro sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
User | `payment/payflow_advanced/user` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `payment/payflow_advanced/pwd` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
User | `payment/payflowpro/user` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `payment/payflowpro/pwd` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Partner | `payment/payflowpro/partner` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Proxy Host | `payment/payflowpro/proxy_host` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Proxy Port | `payment/payflowpro/proxy_port` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### PayPal Payflow Link sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
User | `payment/payflow_link/user` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Password | `payment/payflow_link/pwd` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### PayPal Payments Pro sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
API Username | `paypal/wpp/api_username` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
API Password | `paypal/wpp/api_password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
API Signature | `paypal/wpp/api_signature` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
API Certificate | `paypal/wpp/api_cert` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Proxy Host | `paypal/wpp/proxy_host` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Proxy Port | `paypal/wpp/proxy_port` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Braintree sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Merchant ID | `payment/braintree/merchant_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Public Key | `payment/braintree/public_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Private Key | `payment/braintree/private_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Merchant Account ID | `payment/braintree/merchant_account_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Kount Merchant ID | `payment/braintree/kount_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Override Merchant Name | `payment/braintree_paypal/merchant_name_override` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Merchant's Email | `payment/authorizenet_directpost/merchant_email` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Worldpay sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Installation ID | `payment/worldpay/installation_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Payment Response Password | `payment/worldpay/response_password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Remote Admin Installation ID | `payment/worldpay/admin_installation_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Remote Admin Authorisation Password | `payment/worldpay/auth_password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
MD5 Secret for Transactions | `payment/worldpay/md5_secret` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Signature Fields | `payment/worldpay/signature_fields` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Authorize.net Direct Post sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
API Login ID | `payment/authorizenet_directpost/login` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Transaction Key | `payment/authorizenet_directpost/trans_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Merchant MD5 | `payment/authorizenet_directpost/trans_md5` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### eWAY sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Live API Key | `payment/eway/live_api_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Live API Password | `payment/eway/live_api_password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Live Client-side Encryption Key | `payment/eway/live_encryption_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sandbox API Key | `payment/eway/sandbox_api_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sandbox API Password | `payment/eway/sandbox_api_password` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Sandbox Client-side Encryption Key | `payment/eway/sandbox_encryption_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

### Cybersource sensitive paths

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Merchant ID | `payment/cybersource/merchant_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Transaction Key | `payment/cybersource/transaction_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Profile ID | `payment/cybersource/profile_id` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Access Key | `payment/cybersource/access_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)
Secret Key | `payment/cybersource/secret_key` | ![Not EE-only]({{ site.baseurl }}common/images/red-x.png)

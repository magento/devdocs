<div markdown="1">

## General category sensitive variables
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### Currency setup sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `currency/import/error_email`

### Store email address sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Email Configuration** > **General** > **Store Email Addresses**. 

Name  | Config path
|--------------|--------------|
Sender Name | `trans_email/ident_general/name`
Sender Email | `trans_email/ident_general/email`
Sender Name | `trans_email/ident_sales/name`
Sender Email | `trans_email/ident_sales/email`
Sender Name | `trans_email/ident_support/name`
Sender Email | `trans_email/ident_support/email`
Sender Name | `trans_email/ident_custom1/name`
Sender Email | `trans_email/ident_custom1/email`
Sender Name | `trans_email/ident_custom2/name`
Sender Email | `trans_email/ident_custom2/email`

### Contacts sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

Name  | Config path
|--------------|--------------|
Send Emails To | `contact/email/recipient_email`

### New Relic reporting sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

Name  | Config path
|--------------|--------------|
New Relic Account ID | `newrelicreporting/general/account_id`
New Relic Application ID | `newrelicreporting/general/app_id`
New Relic API Key | `newrelicreporting/general/api`
Insights API Key | `newrelicreporting/general/insights_insert_key`

## Catalog category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Catalog**.

### Catalog sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `catalog/productalert_cron/error_email`
YouTube API Key | `catalog/product_video/youtube_api_key`
Solr Server Hostname | `catalog/search/solr_server_hostname`
Solr Server Port | `catalog/search/solr_server_port`
Solr Server Username | `catalog/search/solr_server_username`
Solr Server Password | `catalog/search/solr_server_password`
Solr Server Path | `catalog/search/solr_server_path`
Elasticsearch Server Hostname | `catalog/search/elasticsearch_server_hostname`
Elasticsearch Server Port | `catalog/search/elasticsearch_server_port`
Elasticsearch Index Prefix | `catalog/search/elasticsearch_index_prefix`

### XML sitemap sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `sitemap/generate/error_email`

## Sales category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Shipping settings sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

Name  | Config path
|--------------|--------------|
Country | `shipping/origin/country_id`
Region/State | `shipping/origin/region_id`
ZIP/Postal Code | `shipping/origin/postcode`
City | `shipping/origin/city`
Street Address | `shipping/origin/street_line1`
Street Address Line 2 | `shipping/origin/street_line2`

### Sales emails sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

Name  | Config path
|--------------|--------------|
Send Order Email Copy To | `sales_email/order/copy_to`
Send Order Comment Email Copy To | `sales_email/order_comment/copy_to`
Send Invoice Email Copy To | `sales_email/invoice/copy_to`
Send Invoice Comment Email Copy To | `sales_email/invoice_comment/copy_to`
Send Shipment Email Copy To | `sales_email/shipment/copy_to`
Send Shipment Comment Email Copy To | `sales_email/shipment_comment/copy_to`
Send Credit Memo Email Copy To | `sales_email/creditmemo/copy_to`
Send Credit Memo Comment Email Copy To | `sales_email/creditmemo_comment/copy_to`

### Checkout sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

Name  | Config path
|--------------|--------------|
Send Payment Failed Email Copy To | `checkout/payment_failed/copy_to`

### Google API sensitive variables 
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

Name  | Config path
|--------------|--------------|
Container Id | `google/analytics/container_id`

### Shipping methods sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Methods**.

Name  | Config path
|--------------|--------------|
Gateway URL | `carriers/usps/gateway_url`
Secure Gateway URL | `carriers/usps/gateway_secure_url`
Title | `carriers/usps/title`
User ID | `carriers/usps/userid`
Password | `carriers/usps/password`
User ID | `carriers/ups/username`
Password | `carriers/ups/password`
Access License Number | `carriers/ups/access_license_number`
Tracking XML URL | `carriers/ups/tracking_xml_url`
Gateway XML URL | `carriers/ups/gateway_xml_url`
Shipper Number | `carriers/ups/shipper_number`
Account ID | `carriers/fedex/account`
Key | `carriers/fedex/key`
Meter Number | `carriers/fedex/meter_number`
Password | `carriers/fedex/password`
Access ID | `carriers/dhl/id`
Password | `carriers/dhl/password`
Account Number | `carriers/dhl/account`

### Sales sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales**.

Name  | Config path
|--------------|--------------|
Contact Name | `sales/magento_rma/store_name`
Street Address | `sales/magento_rma/address`
Street Address | `sales/magento_rma/address1`
City | `sales/magento_rma/city`
State/Province | `sales/magento_rma/region_id`
ZIP/Postal Code | `sales/magento_rma/zip`
Country | `sales/magento_rma/country_id`
Send RMA Email Copy To | `sales_email/magento_rma/copy_to`
Send RMA Authorization Email Copy To | `sales_email/magento_rma_auth/copy_to`
Send RMA Comment Email Copy To | `sales_email/magento_rma_comment/copy_to`
Send RMA Comment Email Copy To | `sales_email/magento_rma_customer_comment/copy_to`

## Advanced category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### Admin sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

Name  | Config path
|--------------|--------------|
Custom Admin URL | `admin/url/custom`
Custom Admin Path | `admin/url/custom_path`

### System sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `system/magento_scheduled_import_export_log/error_email`

### Developer sensitive variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

Name  | Config path
|--------------|--------------|
Allowed IPs (comma separated) | `dev/restrict/allow_ips`

## Payment sensitive variables
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales** > **Payment**.

### PayPal sensitive variables

Name  | Config path
|--------------|--------------|
Email Associated with PayPal Merchant Account (Optional) | `paypal/general/business_account`
Merchant Account ID | `payment/paypal_express/merchant_id`
Publisher ID | `payment/paypal_express_bml/publisher_id`
Password | `paypal/fetch_reports/ftp_password`
Login | `paypal/fetch_reports/ftp_login`
Custom Endpoint Hostname or IP-Address | `paypal/fetch_reports/ftp_ip`
Custom Path | `paypal/fetch_reports/ftp_path`

### PayPal Payflow Pro sensitive variables

Name  | Config path
|--------------|--------------|
User | `payment/payflow_advanced/user`
Password | `payment/payflow_advanced/pwd`
User | `payment/payflowpro/user`
Password | `payment/payflowpro/pwd`
Partner | `payment/payflowpro/partner`
Proxy Host | `payment/payflowpro/proxy_host`
Proxy Port | `payment/payflowpro/proxy_port`

### PayPal Payflow Link sensitive variables

Name  | Config path
|--------------|--------------|
User | `payment/payflow_link/user`
Password | `payment/payflow_link/pwd`

### PayPal Payments Pro sensitive variables

Name  | Config path
|--------------|--------------|
API Username | `paypal/wpp/api_username`
API Password | `paypal/wpp/api_password`
API Signature | `paypal/wpp/api_signature`
API Certificate | `paypal/wpp/api_cert`
Proxy Host | `paypal/wpp/proxy_host`
Proxy Port | `paypal/wpp/proxy_port`

### Braintree sensitive variables

Name  | Config path
|--------------|--------------|
Merchant ID | `payment/braintree/merchant_id`
Public Key | `payment/braintree/public_key`
Private Key | `payment/braintree/private_key`
Merchant Account ID | `payment/braintree/merchant_account_id`
Kount Merchant ID | `payment/braintree/kount_id`
Override Merchant Name | `payment/braintree_paypal/merchant_name_override`
Merchant's Email | `payment/authorizenet_directpost/merchant_email`

### Worldpay sensitive variables

Name  | Config path
|--------------|--------------|
Installation ID | `payment/worldpay/installation_id`
Payment Response Password | `payment/worldpay/response_password`
Remote Admin Installation ID | `payment/worldpay/admin_installation_id`
Remote Admin Authorisation Password | `payment/worldpay/auth_password`
MD5 Secret for Transactions | `payment/worldpay/md5_secret`
Signature Fields | `payment/worldpay/signature_fields`

### Authorize.net Direct Post sensitive variables

Name  | Config path
|--------------|--------------|
API Login ID | `payment/authorizenet_directpost/login`
Transaction Key | `payment/authorizenet_directpost/trans_key`
Merchant MD5 | `payment/authorizenet_directpost/trans_md5`

### eWAY sensitive variables

Name  | Config path
|--------------|--------------|
Live API Key | `payment/eway/live_api_key`
Live API Password | `payment/eway/live_api_password`
Live Client-side Encryption Key | `payment/eway/live_encryption_key`
Sandbox API Key | `payment/eway/sandbox_api_key`
Sandbox API Password | `payment/eway/sandbox_api_password`
Sandbox Client-side Encryption Key | `payment/eway/sandbox_encryption_key`

### Cybersource sensitive variables

Name  | Config path
|--------------|--------------|
Merchant ID | `payment/cybersource/merchant_id`
Transaction Key | `payment/cybersource/transaction_key`
Profile ID | `payment/cybersource/profile_id`
Access Key | `payment/cybersource/access_key`
Secret Key | `payment/cybersource/secret_key`

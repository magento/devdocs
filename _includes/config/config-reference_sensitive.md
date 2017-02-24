<div markdown="1">

## Sensitive variables


### Store email address variables
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

### Admin variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

Name  | Config path
|--------------|--------------|
Custom Admin URL | `admin/url/custom`
Custom Admin Path | `admin/url/custom_path`


### Shipping settings variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

Name  | Config path
|--------------|--------------|
Country | `shipping/origin/country_id`
Region/State | `shipping/origin/region_id`
ZIP/Postal Code | `shipping/origin/postcode`
City | `shipping/origin/city`
Street Address | `shipping/origin/street_line1`
Street Address Line 2 | `shipping/origin/street_line2`



### Sales emails variables
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


### Currency setup variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `currency/import/error_email`



### Checkout variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

Name  | Config path
|--------------|--------------|
Send Payment Failed Email Copy To | `checkout/payment_failed/copy_to`


### Contacts variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

Name  | Config path
|--------------|--------------|
Send Emails To | `contact/email/recipient_email`


### Catalog variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `catalog/productalert_cron/error_email`
YouTube API Key | `catalog/product_video/youtube_api_key`



### Developer variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

Name  | Config path
|--------------|--------------|
Allowed IPs (comma separated) | `dev/restrict/allow_ips`


### Shipping methods variables
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


### XML sitemap variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

Name  | Config path
|--------------|--------------|
Error Email Recipient | `sitemap/generate/error_email`


### PayPal variables

Name  | Config path
|--------------|--------------|
Email Associated with PayPal Merchant Account (Optional) | `paypal/general/business_account`
Merchant Account ID | `payment/paypal_express/merchant_id`
Publisher ID | `payment/paypal_express_bml/publisher_id`
Password | `paypal/fetch_reports/ftp_password`
Login | `paypal/fetch_reports/ftp_login`
Custom Endpoint Hostname or IP-Address | `paypal/fetch_reports/ftp_ip`
Custom Path | `paypal/fetch_reports/ftp_path`


### PayPal Payflow Pro

Name  | Config path
|--------------|--------------|
User | `payment/payflow_advanced/user`
Password | `payment/payflow_advanced/pwd`
User | `payment/payflowpro/user`
Password | `payment/payflowpro/pwd`
Partner | `payment/payflowpro/partner`
Proxy Host | `payment/payflowpro/proxy_host`
Proxy Port | `payment/payflowpro/proxy_port`


### PayPal Payflow Link

Name  | Config path
|--------------|--------------|
User | `payment/payflow_link/user`
Password | `payment/payflow_link/pwd`


### PayPal Payments Pro

Name  | Config path
|--------------|--------------|
API Username | `paypal/wpp/api_username`
API Password | `paypal/wpp/api_password`
API Signature | `paypal/wpp/api_signature`
API Certificate | `paypal/wpp/api_cert`
Proxy Host | `paypal/wpp/proxy_host`
Proxy Port | `paypal/wpp/proxy_port`


### New Relic reporting variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

Name  | Config path
|--------------|--------------|
New Relic Account ID | `newrelicreporting/general/account_id`
New Relic Application ID | `newrelicreporting/general/app_id`
New Relic API Key | `newrelicreporting/general/api`
Insights API Key | `newrelicreporting/general/insights_insert_key`

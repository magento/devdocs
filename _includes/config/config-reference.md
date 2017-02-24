<div markdown="1">

## General category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### General variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **General**.

Name  | Config path
|--------------|--------------|
Default Country | `general/country/default`
Allow Countries | `general/country/allow`
Zip/Postal Code is Optional for | `general/country/optional_zip_countries`
European Union Countries | `general/country/eu_countries`
Top destinations | `general/country/destinations`
State is Required for | `general/region/state_required`
Allow to Choose State if It is Optional for Country | `general/region/display_all`
Timezone | `general/locale/timezone`
Locale | `general/locale/code`
Weight Unit | `general/locale/weight_unit`
First Day of Week | `general/locale/firstday`
Weekend Days | `general/locale/weekend`
Access Restriction | `general/restriction/is_active`
Restriction Mode | `general/restriction/mode`
Startup Page | `general/restriction/http_redirect`
Landing Page | `general/restriction/cms_page`
HTTP Response | `general/restriction/http_status`
Store Name | `general/store_information/name`
Store Phone Number | `general/store_information/phone`
Store Hours of Operation | `general/store_information/hours`
Country | `general/store_information/country_id`
Region/State | `general/store_information/region_id`
ZIP/Postal Code | `general/store_information/postcode`
City | `general/store_information/city`
Street Address | `general/store_information/street_line1`
Street Address Line 2 | `general/store_information/street_line2`
VAT Number | `general/store_information/merchant_vat_number`
Enable Single-Store Mode | `general/single_store_mode/enabled`

### Web variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Web**.

Name  | Config path
|--------------|--------------|
Add Store Code to Urls | `web/url/use_store`
Auto-redirect to Base URL | `web/url/redirect_to_base`
Use Web Server Rewrites | `web/seo/use_rewrites`
Base URL | `web/unsecure/base_url`
Base Link URL | `web/unsecure/base_link_url`
Base URL for Static View Files | `web/unsecure/base_static_url`
Base URL for User Media Files | `web/unsecure/base_media_url`
Secure Base URL | `web/secure/base_url`
Secure Base Link URL | `web/secure/base_link_url`
Secure Base URL for Static View Files | `web/secure/base_static_url`
Secure Base URL for User Media Files | `web/secure/base_media_url`
Use Secure URLs on Storefront | `web/secure/use_in_frontend`
Use Secure URLs in Admin | `web/secure/use_in_adminhtml`
Enable HTTP Strict Transport Security (HSTS) | `web/secure/enable_hsts`
Upgrade Insecure Requests | `web/secure/enable_upgrade_insecure`
Offloader header | `web/secure/offloader_header`
Default Web URL | `web/default/front`
CMS Home Page | `web/default/cms_home_page`
Default No-route URL | `web/default/no_route`
CMS No Route Page | `web/default/cms_no_route`
CMS No Cookies Page | `web/default/cms_no_cookies`
Show Breadcrumbs for CMS Pages | `web/default/show_cms_breadcrumbs`
Cookie Lifetime | `web/cookie/cookie_lifetime`
Cookie Path | `web/cookie/cookie_path`
Cookie Domain | `web/cookie/cookie_domain`
Use HTTP Only | `web/cookie/cookie_httponly`
Cookie Restriction Mode | `web/cookie/cookie_restriction`
Validate REMOTE_ADDR | `web/session/use_remote_addr`
Validate HTTP_VIA | `web/session/use_http_via`
Validate HTTP_X_FORWARDED_FOR | `web/session/use_http_x_forwarded_for`
Validate HTTP_USER_AGENT | `web/session/use_http_user_agent`
Use SID on Storefront | `web/session/use_frontend_sid`
Redirect to CMS-page if Cookies are Disabled | `web/browser_capabilities/cookies`
Show Notice if JavaScript is Disabled | `web/browser_capabilities/javascript`
Show Notice if Local Storage is Disabled | `web/browser_capabilities/local_storage`
Add Store Code to Urls | `web/url

### Currency setup variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

Name  | Config path
|--------------|--------------|
Base Currency | `currency/options/base`
Default Display Currency | `currency/options/default`
Allowed Currencies | `currency/options/allow`
Connection Timeout in Seconds | `currency/yahoofinance/timeout`
Connection Timeout in Seconds | `currency/fixerio/timeout`
Connection Timeout in Seconds | `currency/webservicex/timeout`
Enabled | `currency/import/enabled`
Service | `currency/import/service`
Start Time | `currency/import/time`
Frequency | `currency/import/frequency`
Error Email Sender | `currency/import/error_email_identity`
Error Email Template | `currency/import/error_email_template`

### Contacts variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

Name  | Config path
|--------------|--------------|
Enable Contact Us | `contact/contact/enabled`
Email Sender | `contact/email/sender_email_identity`
Email Template | `contact/email/email_template`

### Reports variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Reports**.

Name  | Config path
|--------------|--------------|
Year-To-Date Starts | `reports/dashboard/ytd_start`
Current Month Starts | `reports/dashboard/mtd_start`

### Content management variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Content Management**.

Name  | Config path
|--------------|--------------|
Enable WYSIWYG Editor | `cms/wysiwyg/enabled`
Use Static URLs for Media Content in WYSIWYG for Catalog | `cms/wysiwyg/use_static_urls_in_catalog`
Enable Hierarchy Functionality | `cms/hierarchy/enabled`
Enable Hierarchy Metadata | `cms/hierarchy/metadata_enabled`
Default Layout for Hierarchy Menu | `cms/hierarchy/menu_layout`

### New Relic reporting variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

Name  | Config path
|--------------|--------------|
Enable New Relic Integration | `newrelicreporting/general/enable`
New Relic API URL | `newrelicreporting/general/api_url`
Insights API URL | `newrelicreporting/general/insights_api_url`
New Relic Application Name | `newrelicreporting/general/app_name`
Enable Cron | `newrelicreporting/cron/enable_cron`

## Catalog category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Catalog**.

### Catalog variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

Name  | Config path
|--------------|--------------|
Mask for SKU | `catalog/fields_masks/sku`
Mask for Meta Title | `catalog/fields_masks/meta_title`
Mask for Meta Keywords | `catalog/fields_masks/meta_keyword`
Mask for Meta Description | `catalog/fields_masks/meta_description`
List Mode | `catalog/frontend/list_mode`
Products per Page on Grid Allowed Values | `catalog/frontend/grid_per_page_values`
Products per Page on Grid Default Value | `catalog/frontend/grid_per_page`
Products per Page on List Allowed Values | `catalog/frontend/list_per_page_values`
Products per Page on List Default Value | `catalog/frontend/list_per_page`
Product Listing Sort by | `catalog/frontend/default_sort_by`
Allow All Products per Page | `catalog/frontend/list_allow_all`
Use Flat Catalog Category | `catalog/frontend/flat_catalog_category`
Use Flat Catalog Product | `catalog/frontend/flat_catalog_product`
Allow Dynamic Media URLs in Products and Categories | `catalog/frontend/parse_url_directives`
Swatches per Product | `catalog/frontend/swatches_per_product`
Allow Guests to Write Reviews | `catalog/review/allow_guest`
Allow Alert When Product Price Changes | `catalog/productalert/allow_price`
Price Alert Email Template | `catalog/productalert/email_price_template`
Allow Alert When Product Comes Back in Stock | `catalog/productalert/allow_stock`
Stock Alert Email Template | `catalog/productalert/email_stock_template`
Alert Email Sender | `catalog/productalert/email_identity`
Frequency | `catalog/productalert_cron/frequency`
Start Time | `catalog/productalert_cron/time`
Error Email Sender | `catalog/productalert_cron/error_email_identity`
Error Email Template | `catalog/productalert_cron/error_email_template`
Show for Current | `catalog/recently_products/scope`
Default Recently Viewed Products Count | `catalog/recently_products/viewed_count`
Default Recently Compared Products Count | `catalog/recently_products/compared_count`
Autostart base video | `catalog/product_video/play_if_base`
Show related video | `catalog/product_video/show_related`
Auto restart video | `catalog/product_video/video_auto_restart`
Catalog Price Scope | `catalog/price/scope`
Default Product Price | `catalog/price/default_product_price`
Display Product Count | `catalog/layered_navigation/display_product_count`
Price Navigation Step Calculation | `catalog/layered_navigation/price_range_calculation`
Default Price Navigation Step | `catalog/layered_navigation/price_range_step`
Display Price Interval as One Price | `catalog/layered_navigation/one_price_interval`
Maximum Number of Price Intervals | `catalog/layered_navigation/price_range_max_intervals`
Interval Division Limit | `catalog/layered_navigation/interval_division_limit`
Maximal Depth | `catalog/navigation/max_depth`
Minimal Query Length | `catalog/search/min_query_length`
Maximum Query Length | `catalog/search/max_query_length`
Search Engine | `catalog/search/engine`
Solr Server Timeout | `catalog/search/solr_server_timeout`
Indexation Mode | `catalog/search/engine_commit_mode`
Enable Elasticsearch HTTP Auth | `catalog/search/elasticsearch_enable_auth`
Elasticsearch HTTP Username | `catalog/search/elasticsearch_username`
Elasticsearch HTTP Password | `catalog/search/elasticsearch_password`
Elasticsearch Server Timeout | `catalog/search/elasticsearch_server_timeout`
Enable Search Suggestions | `catalog/search/search_suggestion_enabled`
Search Suggestions Count | `catalog/search/search_suggestion_count`
Show Results Count for Each Suggestion | `catalog/search/search_suggestion_count_results_enabled`
Enable Search Recommendations | `catalog/search/search_recommendations_enabled`
Search Recommendations Count | `catalog/search/search_recommendations_count`
Show Results Count for Each Recommendation | `catalog/search/search_recommendations_count_results_enabled`
Popular Search Terms | `catalog/seo/search_terms`
Product URL Suffix | `catalog/seo/product_url_suffix`
Category URL Suffix | `catalog/seo/category_url_suffix`
Use Categories Path for Product URLs | `catalog/seo/product_use_categories`
Create Permanent Redirect for URLs if URL Key Changed | `catalog/seo/save_rewrites_history`
Page Title Separator | `catalog/seo/title_separator`
Use Canonical Link Meta Tag For Categories | `catalog/seo/category_canonical_tag`
Use Canonical Link Meta Tag For Products | `catalog/seo/product_canonical_tag`
Enable | `catalog/magento_catalogpermissions/enabled`
Allow Browsing Category | `catalog/magento_catalogpermissions/grant_catalog_category_view`
Customer Groups | `catalog/magento_catalogpermissions/grant_catalog_category_view_groups`
Landing Page | `catalog/magento_catalogpermissions/restricted_landing_page`
Display Product Prices | `catalog/magento_catalogpermissions/grant_catalog_product_price`
Customer Groups | `catalog/magento_catalogpermissions/grant_catalog_product_price_groups`
Allow Adding to Cart | `catalog/magento_catalogpermissions/grant_checkout_items`
Customer Groups | `catalog/magento_catalogpermissions/grant_checkout_items_groups`
Disallow Catalog Search By | `catalog/magento_catalogpermissions/deny_catalog_search`
Order Item Status to Enable Downloads | `catalog/downloadable/order_item_status`
Default Maximum Number of Downloads | `catalog/downloadable/downloads_number`
Shareable | `catalog/downloadable/shareable`
Default Sample Title | `catalog/downloadable/samples_title`
Default Link Title | `catalog/downloadable/links_title`
Open Links in New Window | `catalog/downloadable/links_target_new_window`
Use Content-Disposition | `catalog/downloadable/content_disposition`
Disable Guest Checkout if Cart Contains Downloadable Items | `catalog/downloadable/disable_guest_checkout`
Use JavaScript Calendar | `catalog/custom_options/use_calendar`
Date Fields Order | `catalog/custom_options/date_fields_order`
Time Format | `catalog/custom_options/time_format`
Year Range | `catalog/custom_options/year_range`
Enable Catalog Events Functionality | `catalog/magento_catalogevent/enabled`
Enable Catalog Event Widget on Storefront | `catalog/magento_catalogevent/lister_output`
Number of Events to be Displayed in Event Slider Widget | `catalog/magento_catalogevent/lister_widget_limit`
Events to Scroll per Click in Event Slider Widget | `catalog/magento_catalogevent/lister_widget_scroll`
Maximum Number of Products in Related Products List | `catalog/magento_targetrule/related_position_limit`
Show Related Products | `catalog/magento_targetrule/related_position_behavior`
Rotation Mode for Products in Related Product List | `catalog/magento_targetrule/related_rotation_mode`
Maximum Number of Products in Cross-Sell Product List | `catalog/magento_targetrule/crosssell_position_limit`
Show Cross-Sell Products | `catalog/magento_targetrule/crosssell_position_behavior`
Rotation Mode for Products in Cross-Sell Product List | `catalog/magento_targetrule/crosssell_rotation_mode`
Maximum Number of Products in Upsell Product List | `catalog/magento_targetrule/upsell_position_limit`
Show Upsell Products | `catalog/magento_targetrule/upsell_position_behavior`
Rotation Mode for Products in Upsell Product List | `catalog/magento_targetrule/upsell_rotation_mode`

### Inventory variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Inventory**.

Name  | Config path
|--------------|--------------|
Decrease Stock When Order is Placed | `cataloginventory/options/can_subtract`
Set Items' Status to be In Stock When Order is Cancelled | `cataloginventory/options/can_back_in_stock`
Display Out of Stock Products | `cataloginventory/options/show_out_of_stock`
Only X left Threshold | `cataloginventory/options/stock_threshold_qty`
Display Products Availability in Stock on Storefront | `cataloginventory/options/display_product_stock_status`
Manage Stock | `cataloginventory/item_options/manage_stock`
Backorders | `cataloginventory/item_options/backorders`
Use deferred Stock update | `cataloginventory/item_options/use_deferred_stock_update`
Maximum Qty Allowed in Shopping Cart | `cataloginventory/item_options/max_sale_qty`
Out-of-Stock Threshold | `cataloginventory/item_options/min_qty`
Minimum Qty Allowed in Shopping Cart | `cataloginventory/item_options/min_sale_qty`
Notify for Quantity Below | `cataloginventory/item_options/notify_stock_qty`
Enable Qty Increments | `cataloginventory/item_options/enable_qty_increments`
Qty Increments | `cataloginventory/item_options/qty_increments`
Automatically Return Credit Memo Item to Stock | `cataloginventory/item_options/auto_return`

### Visual Merchadiser variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Visual Merchandiser**.

Name  | Config path
|--------------|--------------|
Visible Attributes for Category Rules | `visualmerchandiser/options/smart_attributes`
Minimum Stock Threshold | `visualmerchandiser/options/minimum_stock_threshold`
Color Attribute Code | `visualmerchandiser/options/color_attribute_code`
Color Order | `visualmerchandiser/options/color_order`

### XML sitemap variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

Name  | Config path
|--------------|--------------|
Frequency | `sitemap/category/changefreq`
Priority | `sitemap/category/priority`
Frequency | `sitemap/product/changefreq`
Priority | `sitemap/product/priority`
Add Images into Sitemap | `sitemap/product/image_include`
Frequency | `sitemap/page/changefreq`
Priority | `sitemap/page/priority`
Enabled | `sitemap/generate/enabled`
Start Time | `sitemap/generate/time`
Frequency | `sitemap/generate/frequency`
Error Email Sender | `sitemap/generate/error_email_identity`
Error Email Template | `sitemap/generate/error_email_template`
Maximum No of URLs Per File | `sitemap/limit/max_lines`
Maximum File Size | `sitemap/limit/max_file_size`
Enable Submission to Robots.txt | `sitemap/search_engines/submission_robots`

### RSS Feeds variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **RSS Feeds**.

Name  | Config path
|--------------|--------------|
Enable RSS | `rss/config/active`
Enable RSS | `rss/wishlist/active`
New Products | `rss/catalog/new`
Special Products | `rss/catalog/special`
Coupons/Discounts | `rss/catalog/discounts`
Top Level Category | `rss/catalog/category`
Customer Order Status Notification | `rss/order/status`

### Email to a friend variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Email to a Friend**.

Name  | Config path
|--------------|--------------|
Enabled | `sendfriend/email/enabled`
Select Email Template | `sendfriend/email/template`
Allow for Guests | `sendfriend/email/allow_guest`
Max Recipients | `sendfriend/email/max_recipients`
Max Products Sent in 1 Hour | `sendfriend/email/max_per_hour`
Limit Sending By | `sendfriend/email/check_by`

## Customers category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Customers**.

### Newsletter variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Newsletter**.

Name  | Config path
|--------------|--------------|
Allow Guest Subscription | `newsletter/subscription/allow_guest_subscribe`
Need to Confirm | `newsletter/subscription/confirm`
Confirmation Email Sender | `newsletter/subscription/confirm_email_identity`
Confirmation Email Template | `newsletter/subscription/confirm_email_template`
Success Email Sender | `newsletter/subscription/success_email_identity`
Success Email Template | `newsletter/subscription/success_email_template`
Unsubscription Email Sender | `newsletter/subscription/un_email_identity`
Unsubscription Email Template | `newsletter/subscription/un_email_template`

### Customer configuration variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Customer Configuration**.

Name  | Config path
|--------------|--------------|
Online Minutes Interval | `customer/online_customers/online_minutes_interval`
Share Customer Accounts | `customer/account_share/scope`
Enable Automatic Assignment to Customer Group | `customer/create_account/auto_group_assign`
Tax Calculation Based On | `customer/create_account/tax_calculation_address_type`
Default Group | `customer/create_account/default_group`
Group for Valid VAT ID - Domestic | `customer/create_account/viv_domestic_group`
Group for Valid VAT ID - Intra-Union | `customer/create_account/viv_intra_union_group`
Group for Invalid VAT ID | `customer/create_account/viv_invalid_group`
Validation Error Group | `customer/create_account/viv_error_group`
Validate on Each Transaction | `customer/create_account/viv_on_each_transaction`
Default Value for Disable Automatic Group Changes Based on VAT ID | `customer/create_account/viv_disable_auto_group_assign_default`
Show VAT Number on Storefront | `customer/create_account/vat_frontend_visibility`
Default Email Domain | `customer/create_account/email_domain`
Default Welcome Email | `customer/create_account/email_template`
Default Welcome Email Without Password | `customer/create_account/email_no_password_template`
Email Sender | `customer/create_account/email_identity`
Require Emails Confirmation | `customer/create_account/confirm`
Confirmation Link Email | `customer/create_account/email_confirmation_template`
Welcome Email | `customer/create_account/email_confirmed_template`
Generate Human-Friendly Customer ID | `customer/create_account/generate_human_friendly_id`
Password Reset Protection Type | `customer/password/password_reset_protection_type`
Max Number of Password Reset Requests | `customer/password/max_number_password_reset_requests`
Min Time Between Password Reset Requests | `customer/password/min_time_between_password_reset_requests`
Forgot Email Template | `customer/password/forgot_email_template`
Remind Email Template | `customer/password/remind_email_template`
Reset Password Template | `customer/password/reset_password_template`
Password Template Email Sender | `customer/password/forgot_email_identity`
Recovery Link Expiration Period (hours) | `customer/password/reset_link_expiration_period`
Enable Autocomplete on login/forgot password forms | `customer/password/autocomplete_on_storefront`
Number of Required Character Classes | `customer/password/required_character_classes_number`
Maximum Login Failures to Lockout Account | `customer/password/lockout_failures`
Minimum Password Length | `customer/password/minimum_password_length`
Lockout Time (minutes) | `customer/password/lockout_threshold`
Number of Lines in a Street Address | `customer/address/street_lines`
Show Prefix | `customer/address/prefix_show`
Prefix Dropdown Options | `customer/address/prefix_options`
Show Middle Name (initial) | `customer/address/middlename_show`
Show Suffix | `customer/address/suffix_show`
Suffix Dropdown Options | `customer/address/suffix_options`
Show Date of Birth | `customer/address/dob_show`
Show Tax/VAT Number | `customer/address/taxvat_show`
Show Gender | `customer/address/gender_show`
Enable Store Credit Functionality | `customer/magento_customerbalance/is_enabled`
Show Store Credit History to Customers | `customer/magento_customerbalance/show_history`
Refund Store Credit Automatically | `customer/magento_customerbalance/refund_automatically`
Store Credit Update Email Sender | `customer/magento_customerbalance/email_identity`
Store Credit Update Email Template | `customer/magento_customerbalance/email_template`
Redirect Customer to Account Dashboard after Logging in | `customer/startup/redirect_dashboard`
Text | `customer/address_templates/text`
Text One Line | `customer/address_templates/oneline`
HTML | `customer/address_templates/html`
PDF | `customer/address_templates/pdf`
Enable Customer Segment Functionality | `customer/magento_customersegment/is_enabled`
Enable CAPTCHA on Storefront | `customer/captcha/enable`
Font | `customer/captcha/font`
Forms | `customer/captcha/forms`
Displaying Mode | `customer/captcha/mode`
Number of Unsuccessful Attempts to Login | `customer/captcha/failed_attempts_login`
CAPTCHA Timeout (minutes) | `customer/captcha/timeout`
Number of Symbols | `customer/captcha/length`
Symbols Used in CAPTCHA | `customer/captcha/symbols`
Case Sensitive | `customer/captcha/case_sensitive`

### Wish list variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Wish List**.

Name  | Config path
|--------------|--------------|
Enabled | `wishlist/general/active`
Enable Multiple Wish Lists | `wishlist/general/multiple_enabled`
Number of Multiple Wish Lists | `wishlist/general/multiple_wishlist_number`
Email Sender | `wishlist/email/email_identity`
Email Template | `wishlist/email/email_template`
Max Emails Allowed to be Sent | `wishlist/email/number_limit`
Email Text Length Limit | `wishlist/email/text_limit`
Display Wish Lists Summary | `wishlist/wishlist_link/use_qty`

### Invitations variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Invitations**.

Name  | Config path
|--------------|--------------|
Enable Invitations Functionality | `magento_invitation/general/enabled`
Enable Invitations on Storefront | `magento_invitation/general/enabled_on_front`
Referred Customer Group | `magento_invitation/general/registration_use_inviter_group`
New Accounts Registration | `magento_invitation/general/registration_required_invitation`
Allow Customers to Add Custom Message to Invitation Email | `magento_invitation/general/allow_customer_message`
Max Invitations Allowed to be Sent at One Time | `magento_invitation/general/max_invitation_amount_per_send`
Customer Invitation Email Sender | `magento_invitation/email/identity`
Customer Invitation Email Template | `magento_invitation/email/template`

### Reward points variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Reward Points**.

Name  | Config path
|--------------|--------------|
Enable Reward Points Functionality | `magento_reward/general/is_enabled`
Enable Reward Points Functionality on Storefront | `magento_reward/general/is_enabled_on_front`
Customers May See Reward Points History | `magento_reward/general/publish_history`
Rewards Points Balance Redemption Threshold | `magento_reward/general/min_points_balance`
Cap Reward Points Balance At | `magento_reward/general/max_points_balance`
Reward Points Expire in (days) | `magento_reward/general/expiration_days`
Reward Points Expiry Calculation | `magento_reward/general/expiry_calculation`
Refund Reward Points Automatically | `magento_reward/general/refund_automatically`
Deduct Reward Points from Refund Amount Automatically | `magento_reward/general/deduct_automatically`
Landing Page | `magento_reward/general/landing_page`
Purchase | `magento_reward/points/order`
Registration | `magento_reward/points/register`
Newsletter Signup | `magento_reward/points/newsletter`
Converting Invitation to Customer | `magento_reward/points/invitation_customer`
Invitation to Customer Conversions Quantity Limit | `magento_reward/points/invitation_customer_limit`
Converting Invitation to Order | `magento_reward/points/invitation_order`
Invitation to Order Conversions Quantity Limit | `magento_reward/points/invitation_order_limit`
Invitation Conversion to Order Reward | `magento_reward/points/invitation_order_frequency`
Review Submission | `magento_reward/points/review`
Rewarded Reviews Submission Quantity Limit | `magento_reward/points/review_limit`
Email Sender | `magento_reward/notification/email_sender`
Subscribe Customers by Default | `magento_reward/notification/subscribe_by_default`
Balance Update Email | `magento_reward/notification/balance_update_template`
Reward Points Expiry Warning Email | `magento_reward/notification/expiry_warning_template`
Expiry Warning Before (days) | `magento_reward/notification/expiry_day_before`

### Promotions variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Promotions**.

Name  | Config path
|--------------|--------------|
Enable Reminder Emails | `promo/magento_reminder/enabled`
Frequency | `promo/magento_reminder/frequency`
Interval | `promo/magento_reminder/interval`
Minute of the Hour | `promo/magento_reminder/minutes`
Start Time | `promo/magento_reminder/time`
Maximum Emails per One Run | `promo/magento_reminder/limit`
Email Send Failure Threshold | `promo/magento_reminder/threshold`
Reminder Email Sender | `promo/magento_reminder/identity`
Code Length | `promo/auto_generated_coupon_codes/length`
Code Format | `promo/auto_generated_coupon_codes/format`
Code Prefix | `promo/auto_generated_coupon_codes/prefix`
Code Suffix | `promo/auto_generated_coupon_codes/suffix`
Dash Every X Characters | `promo/auto_generated_coupon_codes/dash`

### Gift registry variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Gift Registry**.

Name  | Config path
|--------------|--------------|
Enable Gift Registry | `magento_giftregistry/general/enabled`
Maximum Registrants | `magento_giftregistry/general/max_registrant`
Email Template | `magento_giftregistry/owner_email/template`
Email Sender | `magento_giftregistry/owner_email/identity`
Email Template | `magento_giftregistry/sharing_email/template`
Email Sender | `magento_giftregistry/sharing_email/identity`
Maximum Sent Emails Threshold | `magento_giftregistry/sharing_email/send_limit`
Email Template | `magento_giftregistry/update_email/template`
Email Sender | `magento_giftregistry/update_email/identity`

### Persistent shopping cart variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Persistent Shopping Cart**.

Name  | Config path
|--------------|--------------|
Enable Persistence | `persistent/options/enabled`
Persistence Lifetime (seconds) | `persistent/options/lifetime`
Enable "Remember Me" | `persistent/options/remember_enabled`
"Remember Me" Default Value | `persistent/options/remember_default`
Clear Persistence on Sign Out | `persistent/options/logout_clear`
Persist Shopping Cart | `persistent/options/shopping_cart`
Persist Wish List | `persistent/options/wishlist`
Persist Recently Ordered Items | `persistent/options/recently_ordered`
Persist Currently Compared Products | `persistent/options/compare_current`
Persist Comparison History | `persistent/options/compare_history`
Persist Recently Viewed Products | `persistent/options/recently_viewed`
Persist Customer Group Membership and Segmentation | `persistent/options/customer`

## Sales category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Sales variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales**.

Name  | Config path
|--------------|--------------|
Hide Customer IP | `sales/general/hide_customer_ip`
Subtotal | `sales/totals_sort/subtotal`
Discount | `sales/totals_sort/discount`
Shipping | `sales/totals_sort/shipping`
Tax | `sales/totals_sort/tax`
Fixed Product Tax | `sales/totals_sort/weee`
Grand Total | `sales/totals_sort/grand_total`
Gift Cards | `sales/totals_sort/giftcardaccount`
Store Credit | `sales/totals_sort/customerbalance`
Allow Reorder | `sales/reorder/allow`
Logo for PDF Print-outs (200x50) | `sales/identity/logo`
Logo for HTML Print View | `sales/identity/logo_html`
Address | `sales/identity/address`
Enable | `sales/minimum_order/active`
Minimum Amount | `sales/minimum_order/amount`
Include Tax to Amount | `sales/minimum_order/tax_including`
Description Message | `sales/minimum_order/description`
Error to Show in Shopping Cart | `sales/minimum_order/error_message`
Validate Each Address Separately in Multi-address Checkout | `sales/minimum_order/multi_address`
Multi-address Description Message | `sales/minimum_order/multi_address_description`
Multi-address Error to Show in Shopping Cart | `sales/minimum_order/multi_address_error_message`
Use Aggregated Data | `sales/dashboard/use_aggregated_data`
Pending Payment Order Lifetime (minutes) | `sales/orders/delete_pending_after`
Allow Gift Messages on Order Level | `sales/gift_options/allow_order`
Allow Gift Messages for Order Items | `sales/gift_options/allow_items`
Allow Gift Wrapping on Order Level | `sales/gift_options/wrapping_allow_order`
Allow Gift Wrapping for Order Items | `sales/gift_options/wrapping_allow_items`
Allow Gift Receipt | `sales/gift_options/allow_gift_receipt`
Allow Printed Card | `sales/gift_options/allow_printed_card`
Default Price for Printed Card | `sales/gift_options/printed_card_price`
Enable MAP | `sales/msrp/enabled`
Display Actual Price | `sales/msrp/display_price_type`
Default Popup Text Message | `sales/msrp/explanation_message`
Default "What's This" Text Message | `sales/msrp/explanation_message_whats_this`
Enable Order by SKU on My Account in Storefront | `sales/product_sku/my_account_enable`
Customer Groups | `sales/product_sku/allowed_groups`
Enable Archiving | `sales/magento_salesarchive/active`
Archive Orders Purchased | `sales/magento_salesarchive/age`
Order Statuses to be Archived | `sales/magento_salesarchive/order_statuses`
Enable RMA on Storefront | `sales/magento_rma/enabled`
Enable RMA on Product Level | `sales/magento_rma/enabled_on_product`
Use Store Address | `sales/magento_rma/use_store_address`


### Sales emails variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

Name  | Config path
|--------------|--------------|
Asynchronous sending | `sales_email/general/async_sending`
Enabled | `sales_email/order/enabled`
New Order Confirmation Email Sender | `sales_email/order/identity`
New Order Confirmation Template | `sales_email/order/template`
New Order Confirmation Template for Guest | `sales_email/order/guest_template`
Send Order Email Copy Method | `sales_email/order/copy_method`
Enabled | `sales_email/order_comment/enabled`
Order Comment Email Sender | `sales_email/order_comment/identity`
Order Comment Email Template | `sales_email/order_comment/template`
Order Comment Email Template for Guest | `sales_email/order_comment/guest_template`
Send Order Comments Email Copy Method | `sales_email/order_comment/copy_method`
Enabled | `sales_email/invoice/enabled`
Invoice Email Sender | `sales_email/invoice/identity`
Invoice Email Template | `sales_email/invoice/template`
Invoice Email Template for Guest | `sales_email/invoice/guest_template`
Send Invoice Email Copy Method | `sales_email/invoice/copy_method`
Enabled | `sales_email/invoice_comment/enabled`
Invoice Comment Email Sender | `sales_email/invoice_comment/identity`
Invoice Comment Email Template | `sales_email/invoice_comment/template`
Invoice Comment Email Template for Guest | `sales_email/invoice_comment/guest_template`
Send Invoice Comments Email Copy Method | `sales_email/invoice_comment/copy_method`
Enabled | `sales_email/shipment/enabled`
Shipment Email Sender | `sales_email/shipment/identity`
Shipment Email Template | `sales_email/shipment/template`
Shipment Email Template for Guest | `sales_email/shipment/guest_template`
Send Shipment Email Copy Method | `sales_email/shipment/copy_method`
Enabled | `sales_email/shipment_comment/enabled`
Shipment Comment Email Sender | `sales_email/shipment_comment/identity`
Shipment Comment Email Template | `sales_email/shipment_comment/template`
Shipment Comment Email Template for Guest | `sales_email/shipment_comment/guest_template`
Send Shipment Comments Email Copy Method | `sales_email/shipment_comment/copy_method`
Enabled | `sales_email/creditmemo/enabled`
Credit Memo Email Sender | `sales_email/creditmemo/identity`
Credit Memo Email Template | `sales_email/creditmemo/template`
Credit Memo Email Template for Guest | `sales_email/creditmemo/guest_template`
Send Credit Memo Email Copy Method | `sales_email/creditmemo/copy_method`
Enabled | `sales_email/creditmemo_comment/enabled`
Credit Memo Comment Email Sender | `sales_email/creditmemo_comment/identity`
Credit Memo Comment Email Template | `sales_email/creditmemo_comment/template`
Credit Memo Comment Email Template for Guest | `sales_email/creditmemo_comment/guest_template`
Send Credit Memo Comments Email Copy Method | `sales_email/creditmemo_comment/copy_method`
Enabled | `sales_email/magento_rma/enabled`
RMA Email Sender | `sales_email/magento_rma/identity`
RMA Email Template | `sales_email/magento_rma/template`
RMA Email Template for Guest | `sales_email/magento_rma/guest_template`
Send RMA Email Copy Method | `sales_email/magento_rma/copy_method`
Enabled | `sales_email/magento_rma_auth/enabled`
RMA Authorization Email Sender | `sales_email/magento_rma_auth/identity`
RMA Authorization Email Template | `sales_email/magento_rma_auth/template`
RMA Authorization Email Template for Guest | `sales_email/magento_rma_auth/guest_template`
Send RMA Authorization Email Copy Method | `sales_email/magento_rma_auth/copy_method`
Enabled | `sales_email/magento_rma_comment/enabled`
RMA Comment Email Sender | `sales_email/magento_rma_comment/identity`
RMA Comment Email Template | `sales_email/magento_rma_comment/template`
RMA Comment Email Template for Guest | `sales_email/magento_rma_comment/guest_template`
Send RMA Email Copy Method | `sales_email/magento_rma_comment/copy_method`
Enabled | `sales_email/magento_rma_customer_comment/enabled`
RMA Comment Email Sender | `sales_email/magento_rma_customer_comment/identity`
RMA Comment Email Recipient | `sales_email/magento_rma_customer_comment/recipient`
RMA Comment Email Template | `sales_email/magento_rma_customer_comment/template`
Send RMA Email Copy Method | `sales_email/magento_rma_customer_comment/copy_method`
Display Order ID in Header | `sales_pdf/invoice/put_order_id`
Display Order ID in Header | `sales_pdf/shipment/put_order_id`
Display Order ID in Header | `sales_pdf/creditmemo/put_order_id`

### Tax variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Tax**.

Name  | Config path
|--------------|--------------|
Tax Class for Shipping | `tax/classes/shipping_tax_class`
Tax Class for Gift Options | `tax/classes/wrapping_tax_class`
Default Tax Class for Product | `tax/classes/default_product_tax_class`
Default Tax Class for Customer | `tax/classes/default_customer_tax_class`
Tax Calculation Method Based On | `tax/calculation/algorithm`
Tax Calculation Based On | `tax/calculation/based_on`
Catalog Prices | `tax/calculation/price_includes_tax`
Shipping Prices | `tax/calculation/shipping_includes_tax`
Apply Customer Tax | `tax/calculation/apply_after_discount`
Apply Discount On Prices | `tax/calculation/discount_tax`
Apply Tax On | `tax/calculation/apply_tax_on`
Enable Cross Border Trade | `tax/calculation/cross_border_trade_enabled`
Default Country | `tax/defaults/country`
Default State | `tax/defaults/region`
Default Post Code | `tax/defaults/postcode`
Display Product Prices In Catalog | `tax/display/type`
Display Shipping Prices | `tax/display/shipping`
Display Prices | `tax/cart_display/price`
Display Subtotal | `tax/cart_display/subtotal`
Display Shipping Amount | `tax/cart_display/shipping`
Display Gift Wrapping Prices | `tax/cart_display/gift_wrapping`
Display Printed Card Prices | `tax/cart_display/printed_card`
Include Tax In Order Total | `tax/cart_display/grandtotal`
Display Full Tax Summary | `tax/cart_display/full_summary`
Display Zero Tax Subtotal | `tax/cart_display/zero_tax`
Display Prices | `tax/sales_display/price`
Display Subtotal | `tax/sales_display/subtotal`
Display Shipping Amount | `tax/sales_display/shipping`
Display Gift Wrapping Prices | `tax/sales_display/gift_wrapping`
Display Printed Card Prices | `tax/sales_display/printed_card`
Include Tax In Order Total | `tax/sales_display/grandtotal`
Display Full Tax Summary | `tax/sales_display/full_summary`
Display Zero Tax Subtotal | `tax/sales_display/zero_tax`
Enable FPT | `tax/weee/enable`
Display Prices In Product Lists | `tax/weee/display_list`
Display Prices On Product View Page | `tax/weee/display`
Display Prices In Sales Modules | `tax/weee/display_sales`
Display Prices In Emails | `tax/weee/display_email`
Apply Tax To FPT | `tax/weee/apply_vat`
Include FPT In Subtotal | `tax/weee/include_in_subtotal`

### Checkout variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

Name  | Config path
|--------------|--------------|
Enable Onepage Checkout | `checkout/options/onepage_checkout_enabled`
Allow Guest Checkout | `checkout/options/guest_checkout`
Display Billing Address On | `checkout/options/display_billing_address_on`
Enable Terms and Conditions | `checkout/options/enable_agreements`
Quote Lifetime (days) | `checkout/cart/delete_quote_after`
After Adding a Product Redirect to Shopping Cart | `checkout/cart/redirect_to_cart`
Grouped Product Image | `checkout/cart/grouped_product_image`
Configurable Product Image | `checkout/cart/configurable_product_image`
Preview Quote Lifetime (minutes) | `checkout/cart/preview_quota_lifetime`
Display Cart Summary | `checkout/cart_link/use_qty`
Display Shopping Cart Sidebar | `checkout/sidebar/display`
Maximum Display Recently Added Item(s) | `checkout/sidebar/count`
Payment Failed Email Sender | `checkout/payment_failed/identity`
Payment Failed Email Receiver | `checkout/payment_failed/receiver`
Payment Failed Template | `checkout/payment_failed/template`
Send Payment Failed Email Copy Method | `checkout/payment_failed/copy_method`

### Shipping settings variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

Name  | Config path
|--------------|--------------|
Apply custom Shipping Policy | `shipping/shipping_policy/enable_shipping_policy`
Shipping Policy | `shipping/shipping_policy/shipping_policy_content`

### Multishipping settings variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Multishipping Settings**.

Name  | Config path
|--------------|--------------|
Allow Shipping to Multiple Addresses | `multishipping/options/checkout_multiple`
Maximum Qty Allowed for Shipping to Multiple Addresses | `multishipping/options/checkout_multiple_maximum_qty`

### Shipping methods variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Methods**.

Name  | Config path
|--------------|--------------|
Enabled | `carriers/flatrate/active`
Title | `carriers/flatrate/title`
Method Name | `carriers/flatrate/name`
Type | `carriers/flatrate/type`
Price | `carriers/flatrate/price`
Calculate Handling Fee | `carriers/flatrate/handling_type`
Handling Fee | `carriers/flatrate/handling_fee`
Displayed Error Message | `carriers/flatrate/specificerrmsg`
Ship to Applicable Countries | `carriers/flatrate/sallowspecific`
Ship to Specific Countries | `carriers/flatrate/specificcountry`
Show Method if Not Applicable | `carriers/flatrate/showmethod`
Sort Order | `carriers/flatrate/sort_order`
Enabled | `carriers/freeshipping/active`
Title | `carriers/freeshipping/title`
Method Name | `carriers/freeshipping/name`
Minimum Order Amount | `carriers/freeshipping/free_shipping_subtotal`
Displayed Error Message | `carriers/freeshipping/specificerrmsg`
Ship to Applicable Countries | `carriers/freeshipping/sallowspecific`
Ship to Specific Countries | `carriers/freeshipping/specificcountry`
Show Method if Not Applicable | `carriers/freeshipping/showmethod`
Sort Order | `carriers/freeshipping/sort_order`
Enabled | `carriers/tablerate/active`
Title | `carriers/tablerate/title`
Method Name | `carriers/tablerate/name`
Condition | `carriers/tablerate/condition_name`
Include Virtual Products in Price Calculation | `carriers/tablerate/include_virtual_price`
Export | `carriers/tablerate/export`
Import | `carriers/tablerate/import`
Calculate Handling Fee | `carriers/tablerate/handling_type`
Handling Fee | `carriers/tablerate/handling_fee`
Displayed Error Message | `carriers/tablerate/specificerrmsg`
Ship to Applicable Countries | `carriers/tablerate/sallowspecific`
Ship to Specific Countries | `carriers/tablerate/specificcountry`
Show Method if Not Applicable | `carriers/tablerate/showmethod`
Sort Order | `carriers/tablerate/sort_order`
Enabled for Checkout | `carriers/ups/active`
Enabled for RMA | `carriers/ups/active_rma`
UPS Type | `carriers/ups/type`
Live Account | `carriers/ups/is_account_live`
Mode | `carriers/ups/mode_xml`
Origin of the Shipment | `carriers/ups/origin_shipment`
Gateway URL | `carriers/ups/gateway_url`
Title | `carriers/ups/title`
Enable Negotiated Rates | `carriers/ups/negotiated_active`
Packages Request Type | `carriers/ups/shipment_requesttype`
Container | `carriers/ups/container`
Weight Unit | `carriers/ups/unit_of_measure`
Destination Type | `carriers/ups/dest_type`
Maximum Package Weight (Please consult your shipping carrier for maximum supported shipping weight) | `carriers/ups/max_package_weight`
Pickup Method | `carriers/ups/pickup`
Minimum Package Weight (Please consult your shipping carrier for minimum supported shipping weight) | `carriers/ups/min_package_weight`
Calculate Handling Fee | `carriers/ups/handling_type`
Handling Applied | `carriers/ups/handling_action`
Handling Fee | `carriers/ups/handling_fee`
Allowed Methods | `carriers/ups/allowed_methods`
Free Method | `carriers/ups/free_method`
Enable Free Shipping Threshold | `carriers/ups/free_shipping_enable`
Free Shipping Amount Threshold | `carriers/ups/free_shipping_subtotal`
Displayed Error Message | `carriers/ups/specificerrmsg`
Ship to Applicable Countries | `carriers/ups/sallowspecific`
Ship to Specific Countries | `carriers/ups/specificcountry`
Show Method if Not Applicable | `carriers/ups/showmethod`
Debug | `carriers/ups/debug`
Sort Order | `carriers/ups/sort_order`
Enabled for Checkout | `carriers/usps/active`
Enabled for RMA | `carriers/usps/active_rma`
Mode | `carriers/usps/mode`
Packages Request Type | `carriers/usps/shipment_requesttype`
Container | `carriers/usps/container`
Size | `carriers/usps/size`
Length | `carriers/usps/length`
Width | `carriers/usps/width`
Height | `carriers/usps/height`
Girth | `carriers/usps/girth`
Machinable | `carriers/usps/machinable`
Maximum Package Weight (Please consult your shipping carrier for maximum supported shipping weight) | `carriers/usps/max_package_weight`
Calculate Handling Fee | `carriers/usps/handling_type`
Handling Applied | `carriers/usps/handling_action`
Handling Fee | `carriers/usps/handling_fee`
Allowed Methods | `carriers/usps/allowed_methods`
Free Method | `carriers/usps/free_method`
Enable Free Shipping Threshold | `carriers/usps/free_shipping_enable`
Free Shipping Amount Threshold | `carriers/usps/free_shipping_subtotal`
Displayed Error Message | `carriers/usps/specificerrmsg`
Ship to Applicable Countries | `carriers/usps/sallowspecific`
Ship to Specific Countries | `carriers/usps/specificcountry`
Debug | `carriers/usps/debug`
Show Method if Not Applicable | `carriers/usps/showmethod`
Sort Order | `carriers/usps/sort_order`
Enabled for Checkout | `carriers/fedex/active`
Enabled for RMA | `carriers/fedex/active_rma`
Title | `carriers/fedex/title`
Sandbox Mode | `carriers/fedex/sandbox_mode`
Web-Services URL (Production) | `carriers/fedex/production_webservices_url`
Web-Services URL (Sandbox) | `carriers/fedex/sandbox_webservices_url`
Packages Request Type | `carriers/fedex/shipment_requesttype`
Packaging | `carriers/fedex/packaging`
Dropoff | `carriers/fedex/dropoff`
Weight Unit | `carriers/fedex/unit_of_measure`
Maximum Package Weight (Please consult your shipping carrier for maximum supported shipping weight) | `carriers/fedex/max_package_weight`
Calculate Handling Fee | `carriers/fedex/handling_type`
Handling Applied | `carriers/fedex/handling_action`
Handling Fee | `carriers/fedex/handling_fee`
Residential Delivery | `carriers/fedex/residence_delivery`
Allowed Methods | `carriers/fedex/allowed_methods`
Hub ID | `carriers/fedex/smartpost_hubid`
Free Method | `carriers/fedex/free_method`
Enable Free Shipping Threshold | `carriers/fedex/free_shipping_enable`
Free Shipping Amount Threshold | `carriers/fedex/free_shipping_subtotal`
Displayed Error Message | `carriers/fedex/specificerrmsg`
Ship to Applicable Countries | `carriers/fedex/sallowspecific`
Ship to Specific Countries | `carriers/fedex/specificcountry`
Debug | `carriers/fedex/debug`
Show Method if Not Applicable | `carriers/fedex/showmethod`
Sort Order | `carriers/fedex/sort_order`
Enabled for Checkout | `carriers/dhl/active`
Enabled for RMA | `carriers/dhl/active_rma`
Title | `carriers/dhl/title`
Gateway URL | `carriers/dhl/gateway_url`
Content Type | `carriers/dhl/content_type`
Calculate Handling Fee | `carriers/dhl/handling_type`
Handling Applied | `carriers/dhl/handling_action`
Handling Fee | `carriers/dhl/handling_fee`
Divide Order Weight | `carriers/dhl/divide_order_weight`
Weight Unit | `carriers/dhl/unit_of_measure`
Size | `carriers/dhl/size`
Height | `carriers/dhl/height`
Depth | `carriers/dhl/depth`
Width | `carriers/dhl/width`
Allowed Methods | `carriers/dhl/doc_methods`
Allowed Methods | `carriers/dhl/nondoc_methods`
Ready time | `carriers/dhl/ready_time`
Displayed Error Message | `carriers/dhl/specificerrmsg`
Free Method | `carriers/dhl/free_method_doc`
Free Method | `carriers/dhl/free_method_nondoc`
Enable Free Shipping Threshold | `carriers/dhl/free_shipping_enable`
Free Shipping Amount Threshold | `carriers/dhl/free_shipping_subtotal`
Ship to Applicable Countries | `carriers/dhl/sallowspecific`
Ship to Specific Countries | `carriers/dhl/specificcountry`
Show Method if Not Applicable | `carriers/dhl/showmethod`
Debug | `carriers/dhl/debug`
Sort Order | `carriers/dhl/sort_order`

### Google API variables 
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

Name  | Config path
|--------------|--------------|
Enable | `google/analytics/active`
Account type | `google/analytics/type`
Account Number | `google/analytics/account`
Enable Content Experiments | `google/analytics/experiments`
List property for the catalog page | `google/analytics/catalog_page_list_value`
List property for the cross-sell block | `google/analytics/crosssell_block_list_value`
List property for the up-sell block | `google/analytics/upsell_block_list_value`
List property for the related products block | `google/analytics/related_block_list_value`
List property for the search results page | `google/analytics/search_page_list_value`
’Internal Promotions’ for promotions field “Label”. | `google/analytics/promotions_list_value`
Enable | `google/adwords/active`
Conversion ID | `google/adwords/conversion_id`
Conversion Language | `google/adwords/conversion_language`
Conversion Format | `google/adwords/conversion_format`
Conversion Color | `google/adwords/conversion_color`
Conversion Label | `google/adwords/conversion_label`
Conversion Value Type | `google/adwords/conversion_value_type`
Conversion Value | `google/adwords/conversion_value`

### Gift cards variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Gift Cards**.

Name  | Config path
|--------------|--------------|
Gift Card Notification Email Sender | `giftcard/email/identity`
Gift Card Notification Email Template | `giftcard/email/template`
Redeemable | `giftcard/general/is_redeemable`
Lifetime (days) | `giftcard/general/lifetime`
Allow Gift Message | `giftcard/general/allow_message`
Gift Message Maximum Length | `giftcard/general/message_max_length`
Generate Gift Card Account when Order Item is | `giftcard/general/order_item_status`
Gift Card Email Sender | `giftcard/giftcardaccount_email/identity`
Gift Card Template | `giftcard/giftcardaccount_email/template`
Code Length | `giftcard/giftcardaccount_general/code_length`
Code Format | `giftcard/giftcardaccount_general/code_format`
Code Prefix | `giftcard/giftcardaccount_general/code_prefix`
Code Suffix | `giftcard/giftcardaccount_general/code_suffix`
Dash Every X Characters | `giftcard/giftcardaccount_general/code_split`
New Pool Size | `giftcard/giftcardaccount_general/pool_size`
Low Code Pool Threshold | `giftcard/giftcardaccount_general/pool_threshold`

## Services category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Services**.

### Magento Web API variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Services** > **Web API**.

Name  | Config path
|--------------|--------------|
Default Response Charset | `webapi/soap/charset`
Allow Anonymous Guest Access | `webapi/webapisecurity/allow_insecure`

### OAuth variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Services** > **OAuth**.

Name  | Config path
|--------------|--------------|
Cleanup Probability | `oauth/cleanup/cleanup_probability`
Expiration Period | `oauth/cleanup/expiration_period`
Expiration Period | `oauth/consumer/expiration_period`
OAuth consumer credentials HTTP Post maxredirects | `oauth/consumer/post_maxredirects`
OAuth consumer credentials HTTP Post timeout | `oauth/consumer/post_timeout`

## Advanced category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### Admin variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

Name  | Config path
|--------------|--------------|
Forgot Password Email Template | `admin/emails/forgot_email_template`
Forgot and Reset Email Sender | `admin/emails/forgot_email_identity`
User Notification Template | `admin/emails/user_notification_template`
Startup Page | `admin/startup/menu_item_id`
Use Custom Admin URL | `admin/url/use_custom`
Use Custom Admin Path | `admin/url/use_custom_path`
Admin Account Sharing | `admin/security/admin_account_sharing`
Password Reset Protection Type | `admin/security/password_reset_protection_type`
Recovery Link Expiration Period (hours) | `admin/security/password_reset_link_expiration_period`
Max Number of Password Reset Requests | `admin/security/max_number_password_reset_requests`
Min Time Between Password Reset Requests | `admin/security/min_time_between_password_reset_requests`
Add Secret Key to URLs | `admin/security/use_form_key`
Login is Case Sensitive | `admin/security/use_case_sensitive_login`
Admin Session Lifetime (seconds) | `admin/security/session_lifetime`
Maximum Login Failures to Lockout Account | `admin/security/lockout_failures`
Lockout Time (minutes) | `admin/security/lockout_threshold`
Password Lifetime (days) | `admin/security/password_lifetime`
Password Change | `admin/security/password_is_forced`
Enable Charts | `admin/dashboard/enable_charts`
Enable CAPTCHA in Admin | `admin/captcha/enable`
Font | `admin/captcha/font`
Forms | `admin/captcha/forms`
Displaying Mode | `admin/captcha/mode`
Number of Unsuccessful Attempts to Login | `admin/captcha/failed_attempts_login`
CAPTCHA Timeout (minutes) | `admin/captcha/timeout`
Number of Symbols | `admin/captcha/length`
Symbols Used in CAPTCHA | `admin/captcha/symbols`
Case Sensitive | `admin/captcha/case_sensitive`
Enabled Actions | `admin/magento_logging/actions`

### System variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

Name  | Config path
|--------------|--------------|
Successful Messages Lifetime | `system/mysqlmq/successful_messages_lifetime`
Retry Messages In Progress After | `system/mysqlmq/retry_inprogress_after`
Failed Messages Lifetime | `system/mysqlmq/failed_messages_lifetime`
New Messages Lifetime | `system/mysqlmq/new_messages_lifetime`
Generate Schedules Every | `system/cron/index/schedule_generate_every`
Schedule Ahead for | `system/cron/index/schedule_ahead_for`
Missed if Not Run Within | `system/cron/index/schedule_lifetime`
History Cleanup Every | `system/cron/index/history_cleanup_every`
Success History Lifetime | `system/cron/index/history_success_lifetime`
Failure History Lifetime | `system/cron/index/history_failure_lifetime`
Use Separate Process | `system/cron/index/use_separate_process`
Generate Schedules Every | `system/cron/default/schedule_generate_every`
Schedule Ahead for | `system/cron/default/schedule_ahead_for`
Missed if Not Run Within | `system/cron/default/schedule_lifetime`
History Cleanup Every | `system/cron/default/history_cleanup_every`
Success History Lifetime | `system/cron/default/history_success_lifetime`
Failure History Lifetime | `system/cron/default/history_failure_lifetime`
Use Separate Process | `system/cron/default/use_separate_process`
Disable Email Communications | `system/smtp/disable`
Host | `system/smtp/host`
Port (25) | `system/smtp/port`
Set Return-Path | `system/smtp/set_return_path`
Return-Path Email | `system/smtp/return_path_email`
Installed Currencies | `system/currency/installed`
Use HTTPS to Get Feed | `system/adminnotification/use_https`
Update Frequency | `system/adminnotification/frequency`
Last Update | `system/adminnotification/last_update`
Enable Scheduled Backup | `system/backup/enabled`
Backup Type | `system/backup/type`
Start Time | `system/backup/time`
Frequency | `system/backup/frequency`
Maintenance Mode | `system/backup/maintenance`
Log Entry Lifetime, Days | `system/rotation/lifetime`
Log Archiving Frequency | `system/rotation/frequency`
Caching Application | `system/full_page_cache/caching_application`
TTL for public content | `system/full_page_cache/ttl`
Access list | `system/full_page_cache/varnish/access_list`
Backend host | `system/full_page_cache/varnish/backend_host`
Backend port | `system/full_page_cache/varnish/backend_port`
Grace period | `system/full_page_cache/varnish/grace_period`
Export Configuration | `system/full_page_cache/varnish/export_button_version4`
Days Saved in Log | `system/bulk/lifetime`
Media Storage | `system/media_storage_configuration/media_storage`
Select Media Database | `system/media_storage_configuration/media_database`
Environment Update Time | `system/media_storage_configuration/configuration_update_time`
Save Files, Days | `system/magento_scheduled_import_export_log/save_days`
Enable Scheduled File History Cleaning | `system/magento_scheduled_import_export_log/enabled`
Start Time | `system/magento_scheduled_import_export_log/time`
Frequency | `system/magento_scheduled_import_export_log/frequency`
Error Email Sender | `system/magento_scheduled_import_export_log/error_email_identity`
Error Email Template | `system/magento_scheduled_import_export_log/error_email_template`

### Developer variables
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

Name  | Config path
|--------------|--------------|
Workflow type | `dev/front_end_development_workflow/type`
Allow Symlinks | `dev/template/allow_symlink`
Minify Html | `dev/template/minify_html`
Enabled Template Path Hints for Storefront | `dev/debug/template_hints_storefront`
Enabled Template Path Hints for Admin | `dev/debug/template_hints_admin`
Add Block Names to Hints | `dev/debug/template_hints_blocks`
Log to File | `dev/debug/debug_logging`
Enabled for Storefront | `dev/translate_inline/active`
Enabled for Admin | `dev/translate_inline/active_admin`
Merge JavaScript Files | `dev/js/merge_files`
Enable JavaScript Bundling | `dev/js/enable_js_bundling`
Minify JavaScript Files | `dev/js/minify_files`
Translation Strategy | `dev/js/translate_strategy`
Log JS Errors to Session Storage | `dev/js/session_storage_logging`
Log JS Errors to Session Storage Key | `dev/js/session_storage_key`
Merge CSS Files | `dev/css/merge_css_files`
Minify CSS Files | `dev/css/minify_files`
Image Adapter | `dev/image/default_adapter`
Sign Static Files | `dev/static/sign`
Asynchronous indexing | `dev/grid/async_indexing`


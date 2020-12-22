---
group: configuration-guide
title: Other configuration paths reference
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic lists all configuration paths _except_ payment variables, sensitive values, and system-specific values. The [`magento app:config:dump` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html) writes these values to the shared configuration file, `app/etc/config.php`, which should be in source control.

For those configuration paths, see:

*  [Payment configuration paths]({{ page.baseurl }}/config-guide/prod/config-reference-payment.html)
*  [Sensitive and system-specific configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html)

To optionally override any configuration settings or to set sensitive settings, see [Use environment variables to override configuration settings]({{ page.baseurl }}/config-guide/prod/config-reference-var-name.html).

## General category

This section lists variable names and configuration paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### General paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > General > **General**.

Name  | Config path | EE only? | Sensitive? |
|--------------|--------------|--------------|--------------|
Default Country | `general/country/default` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
Allow Countries | `general/country/allow` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
Zip/Postal Code is optional for | `general/country/optional_zip_countries` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
European Union Countries | `general/country/eu_countries` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | ![Sensitive]({{ site.baseurl }}/common/images/cloud_sens.png) |
Top destinations | `general/country/destinations` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
State is Required for | `general/region/state_required` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow to Choose State if It is Optional for Country | `general/region/display_all` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Timezone | `general/locale/timezone` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Locale | `general/locale/code` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Weight Unit | `general/locale/weight_unit` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
First Day of Week | `general/locale/firstday` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Weekend Days | `general/locale/weekend` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Access Restriction | `general/restriction/is_active` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | |
Restriction Mode | `general/restriction/mode` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | |
Startup Page | `general/restriction/http_redirect` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | |
Landing Page | `general/restriction/cms_page` | ![Not EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | |
HTTP Response | `general/restriction/http_status` | ![Not EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) | |
Store Name | `general/store_information/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Store Phone Number | `general/store_information/phone` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Store Hours of Operation | `general/store_information/hours` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Country | `general/store_information/country_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Region/State | `general/store_information/region_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
ZIP/Postal Code | `general/store_information/postcode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
City | `general/store_information/city` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Street Address | `general/store_information/street_line1` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Street Address Line 2 | `general/store_information/street_line2` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
VAT Number | `general/store_information/merchant_vat_number` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |
Enable Single-Store Mode | `general/single_store_mode/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> | |

### Web paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Web**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Add Store Code to Urls | `web/url/use_store` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Auto-redirect to Base URL | `web/url/redirect_to_base` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Web Server Rewrites | `web/seo/use_rewrites` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Secure URLs on Storefront | `web/secure/use_in_frontend` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Secure URLs in Admin | `web/secure/use_in_adminhtml` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable HTTP Strict Transport Security (HSTS) | `web/secure/enable_hsts` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Upgrade Insecure Requests | `web/secure/enable_upgrade_insecure` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Offloader header | `web/secure/offloader_header` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
CMS Home Page | `web/default/cms_home_page` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
CMS No Route Page | `web/default/cms_no_route` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
CMS No Cookies Page | `web/default/cms_no_cookies` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Breadcrumbs for CMS Pages | `web/default/show_cms_breadcrumbs` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Cookie Lifetime | `web/cookie/cookie_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use HTTP Only | `web/cookie/cookie_httponly` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Cookie Restriction Mode | `web/cookie/cookie_restriction` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validate REMOTE_ADDR | `web/session/use_remote_addr` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validate HTTP_VIA | `web/session/use_http_via` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validate HTTP_X_FORWARDED_FOR | `web/session/use_http_x_forwarded_for` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validate HTTP_USER_AGENT | `web/session/use_http_user_agent` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use SID on Storefront | `web/session/use_frontend_sid` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Redirect to CMS-page if Cookies are Disabled | `web/browser_capabilities/cookies` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Notice if JavaScript is Disabled | `web/browser_capabilities/javascript` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Notice if Local Storage is Disabled | `web/browser_capabilities/local_storage` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Add Store Code to Urls | `web/url

### Currency setup paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Currency setup**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Base Currency | `currency/options/base` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Display Currency | `currency/options/default` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allowed Currencies | `currency/options/allow` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Yahoo Finance Exchange | `TBD`
Fixer.io | `TBD`
Webservicex | `TBD`
Connection Timeout in Seconds | `currency/yahoofinance/timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Connection Timeout in Seconds | `currency/fixerio/timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Connection Timeout in Seconds | `currency/webservicex/timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `currency/import/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Service | `currency/import/service` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Start Time | `currency/import/time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `currency/import/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Recipient | `currency/import/error_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Sender | `currency/import/error_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Template | `currency/import/error_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Contacts paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Contacts**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Contact Us | `contact/contact/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Emails To | `contact/contact/recipient_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Sender | `contact/email/sender_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Template | `contact/email/email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Reports paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Reports**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Year-To-Date Starts | `reports/dashboard/ytd_start` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Current Month Starts | `reports/dashboard/mtd_start` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Content management paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **Content Management**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable WYSIWYG Editor | `cms/wysiwyg/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Static URLs for Media Content in WYSIWYG for Catalog | `cms/wysiwyg/use_static_urls_in_catalog` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Hierarchy Functionality | `cms/hierarchy/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Hierarchy Metadata | `cms/hierarchy/metadata_enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Layout for Hierarchy Menu | `cms/hierarchy/menu_layout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### New Relic reporting paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **New Relic Reporting**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable New Relic Integration | `newrelicreporting/general/enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Relic Application Name | `newrelicreporting/general/app_name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Cron | `newrelicreporting/cron/enable_cron` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

## Catalog category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Catalog**.

### Catalog paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Mask for SKU | `catalog/fields_masks/sku` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Mask for Meta Title | `catalog/fields_masks/meta_title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Mask for Meta Keywords | `catalog/fields_masks/meta_keyword` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Mask for Meta Description | `catalog/fields_masks/meta_description` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
List Mode | `catalog/frontend/list_mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Products per Page on Grid Allowed Values | `catalog/frontend/grid_per_page_values` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Products per Page on Grid Default Value | `catalog/frontend/grid_per_page` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Products per Page on List Allowed Values | `catalog/frontend/list_per_page_values` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Products per Page on List Default Value | `catalog/frontend/list_per_page` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Product Listing Sort by | `catalog/frontend/default_sort_by` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow All Products per Page | `catalog/frontend/list_allow_all` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Flat Catalog Category | `catalog/frontend/flat_catalog_category` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Flat Catalog Product | `catalog/frontend/flat_catalog_product` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Swatches per Product | `catalog/frontend/swatches_per_product` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Guests to Write Reviews | `catalog/review/allow_guest` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Alert When Product Price Changes | `catalog/productalert/allow_price` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Price Alert Email Template | `catalog/productalert/email_price_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Alert When Product Comes Back in Stock | `catalog/productalert/allow_stock` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Stock Alert Email Template | `catalog/productalert/email_stock_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Alert Email Sender | `catalog/productalert/email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `catalog/productalert_cron/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Start Time | `catalog/productalert_cron/time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Sender | `catalog/productalert_cron/error_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Template | `catalog/productalert_cron/error_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show for Current | `catalog/recently_products/scope` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Recently Viewed Products Count | `catalog/recently_products/viewed_count` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Recently Compared Products Count | `catalog/recently_products/compared_count` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Autostart base video | `catalog/product_video/play_if_base` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show related video | `catalog/product_video/show_related` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Auto restart video | `catalog/product_video/video_auto_restart` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Catalog Price Scope | `catalog/price/scope` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Product Price | `catalog/price/default_product_price` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Display Product Count | `catalog/layered_navigation/display_product_count` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Price Navigation Step Calculation | `catalog/layered_navigation/price_range_calculation` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Price Navigation Step | `catalog/layered_navigation/price_range_step` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Price Interval as One Price | `catalog/layered_navigation/one_price_interval` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Number of Price Intervals | `catalog/layered_navigation/price_range_max_intervals` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Interval Division Limit | `catalog/layered_navigation/interval_division_limit` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximal Depth | `catalog/navigation/max_depth` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minimal Query Length | `catalog/search/min_query_length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Query Length | `catalog/search/max_query_length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Search Engine | `catalog/search/engine` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Solr Server Timeout | `catalog/search/solr_server_timeout` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Indexation Mode | `catalog/search/engine_commit_mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Search Suggestions | `catalog/search/search_suggestion_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Search Suggestions Count | `catalog/search/search_suggestion_count` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Show Results Count for Each Suggestion | `catalog/search/search_suggestion_count_results_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable Search Recommendations | `catalog/search/search_recommendations_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Search Recommendations Count | `catalog/search/search_recommendations_count` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Show Results Count for Each Recommendation | `catalog/search/search_recommendations_count_results_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Popular Search Terms | `catalog/seo/search_terms` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Product URL Suffix | `catalog/seo/product_url_suffix` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Category URL Suffix | `catalog/seo/category_url_suffix` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Categories Path for Product URLs | `catalog/seo/product_use_categories` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Create Permanent Redirect for URLs if URL Key Changed | `catalog/seo/save_rewrites_history` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Page Title Separator | `catalog/seo/title_separator` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Canonical Link Meta Tag For Categories | `catalog/seo/category_canonical_tag` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Canonical Link Meta Tag For Products | `catalog/seo/product_canonical_tag` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable | `catalog/magento_catalogpermissions/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Browsing Category | `catalog/magento_catalogpermissions/grant_catalog_category_view` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Customer Groups | `catalog/magento_catalogpermissions/grant_catalog_category_view_groups` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Landing Page | `catalog/magento_catalogpermissions/restricted_landing_page` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Display Product Prices | `catalog/magento_catalogpermissions/grant_catalog_product_price` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Customer Groups | `catalog/magento_catalogpermissions/grant_catalog_product_price_groups` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Adding to Cart | `catalog/magento_catalogpermissions/grant_checkout_items` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Customer Groups | `catalog/magento_catalogpermissions/grant_checkout_items_groups` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Disallow Catalog Search By | `catalog/magento_catalogpermissions/deny_catalog_search` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Order Item Status to Enable Downloads | `catalog/downloadable/order_item_status` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Maximum Number of Downloads | `catalog/downloadable/downloads_number` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shareable | `catalog/downloadable/shareable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Sample Title | `catalog/downloadable/samples_title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Link Title | `catalog/downloadable/links_title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Open Links in New Window | `catalog/downloadable/links_target_new_window` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Content-Disposition | `catalog/downloadable/content_disposition` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Disable Guest Checkout if Cart Contains Downloadable Items | `catalog/downloadable/disable_guest_checkout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use JavaScript Calendar | `catalog/custom_options/use_calendar` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Date Fields Order | `catalog/custom_options/date_fields_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Time Format | `catalog/custom_options/time_format` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Year Range | `catalog/custom_options/year_range` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Catalog Events Functionality | `catalog/magento_catalogevent/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable Catalog Event Widget on Storefront | `catalog/magento_catalogevent/lister_output` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Number of Events to be Displayed in Event Slider Widget | `catalog/magento_catalogevent/lister_widget_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Events to Scroll per Click in Event Slider Widget | `catalog/magento_catalogevent/lister_widget_scroll` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Maximum Number of Products in Related Products List | `catalog/magento_targetrule/related_position_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Show Related Products | `catalog/magento_targetrule/related_position_behavior` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Rotation Mode for Products in Related Product List | `catalog/magento_targetrule/related_rotation_mode` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Maximum Number of Products in Cross-Sell Product List | `catalog/magento_targetrule/crosssell_position_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Show Cross-Sell Products | `catalog/magento_targetrule/crosssell_position_behavior` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Rotation Mode for Products in Cross-Sell Product List | `catalog/magento_targetrule/crosssell_rotation_mode` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Maximum Number of Products in Upsell Product List | `catalog/magento_targetrule/upsell_position_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Show Upsell Products | `catalog/magento_targetrule/upsell_position_behavior` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Rotation Mode for Products in Upsell Product List | `catalog/magento_targetrule/upsell_rotation_mode` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |

### Inventory paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Inventory**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Decrease Stock When Order is Placed | `cataloginventory/options/can_subtract` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Set Items' Status to be In Stock When Order is Cancelled | `cataloginventory/options/can_back_in_stock` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Out of Stock Products | `cataloginventory/options/show_out_of_stock` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Only X left Threshold | `cataloginventory/options/stock_threshold_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Products Availability in Stock on Storefront | `cataloginventory/options/display_product_stock_status` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Synchronize with Catalog | `cataloginventory/options/synchronize_with_catalog` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Manage Stock | `cataloginventory/item_options/manage_stock` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Backorders | `cataloginventory/item_options/backorders` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use deferred Stock update | `cataloginventory/item_options/use_deferred_stock_update` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Maximum Qty Allowed in Shopping Cart | `cataloginventory/item_options/max_sale_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Out-of-Stock Threshold | `cataloginventory/item_options/min_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minimum Qty Allowed in Shopping Cart | `cataloginventory/item_options/min_sale_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Notify for Quantity Below | `cataloginventory/item_options/notify_stock_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Qty Increments | `cataloginventory/item_options/enable_qty_increments` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Qty Increments | `cataloginventory/item_options/qty_increments` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Automatically Return Credit Memo Item to Stock | `cataloginventory/item_options/auto_return` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Run asynchronously | `cataloginventory/bulk_operations/async` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Asynchronous batch size | `cataloginventory/bulk_operations/batch_size` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Provider | `cataloginventory/source_selection_distance_based/provider` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Computation mode | `cataloginventory/source_selection_distance_based_google/mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Value | `cataloginventory/source_selection_distance_based_google/value` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Visual Merchandiser paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Visual Merchandiser**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Visible Attributes for Category Rules | `visualmerchandiser/options/smart_attributes` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Minimum Stock Threshold | `visualmerchandiser/options/minimum_stock_threshold` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Color Attribute Code | `visualmerchandiser/options/color_attribute_code` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Color Order | `visualmerchandiser/options/color_order` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |

### XML sitemap paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **XML Sitemap**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Frequency | `sitemap/category/changefreq` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Priority | `sitemap/category/priority` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `sitemap/product/changefreq` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Priority | `sitemap/product/priority` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Add Images into Sitemap | `sitemap/product/image_include` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `sitemap/page/changefreq` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Priority | `sitemap/page/priority` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sitemap/generate/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Start Time | `sitemap/generate/time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `sitemap/generate/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Sender | `sitemap/generate/error_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Template | `sitemap/generate/error_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum No of URLs Per File | `sitemap/limit/max_lines` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum File Size | `sitemap/limit/max_file_size` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Submission to Robots.txt | `sitemap/search_engines/submission_robots` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### RSS Feeds paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **RSS Feeds**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable RSS | `rss/config/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable RSS | `rss/wishlist/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Products | `rss/catalog/new` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Special Products | `rss/catalog/special` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Coupons/Discounts | `rss/catalog/discounts` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Top Level Category | `rss/catalog/category` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Customer Order Status Notification | `rss/order/status` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Email to a friend paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Catalog** > **Email to a Friend**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enabled | `sendfriend/email/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Select Email Template | `sendfriend/email/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow for Guests | `sendfriend/email/allow_guest` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Max Recipients | `sendfriend/email/max_recipients` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Max Products Sent in 1 Hour | `sendfriend/email/max_per_hour` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Limit Sending By | `sendfriend/email/check_by` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

## Customers category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Customers**.

### Newsletter paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Newsletter**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Allow Guest Subscription | `newsletter/subscription/allow_guest_subscribe` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Need to Confirm | `newsletter/subscription/confirm` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Confirmation Email Sender | `newsletter/subscription/confirm_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Confirmation Email Template | `newsletter/subscription/confirm_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Success Email Sender | `newsletter/subscription/success_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Success Email Template | `newsletter/subscription/success_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Unsubscription Email Sender | `newsletter/subscription/un_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Unsubscription Email Template | `newsletter/subscription/un_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Customer configuration paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Customer Configuration**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Online Minutes Interval | `customer/online_customers/online_minutes_interval` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Share Customer Accounts | `customer/account_share/scope` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Automatic Assignment to Customer Group | `customer/create_account/auto_group_assign` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Tax Calculation Based On | `customer/create_account/tax_calculation_address_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Group | `customer/create_account/default_group` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Group for Valid VAT ID - Domestic | `customer/create_account/viv_domestic_group` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Group for Valid VAT ID - Intra-Union | `customer/create_account/viv_intra_union_group` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Group for Invalid VAT ID | `customer/create_account/viv_invalid_group` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validation Error Group | `customer/create_account/viv_error_group` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validate on Each Transaction | `customer/create_account/viv_on_each_transaction` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Value for Disable Automatic Group Changes Based on VAT ID | `customer/create_account/viv_disable_auto_group_assign_default` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show VAT Number on Storefront | `customer/create_account/vat_frontend_visibility` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Welcome Email | `customer/create_account/email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Welcome Email Without Password | `customer/create_account/email_no_password_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Sender | `customer/create_account/email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Require Emails Confirmation | `customer/create_account/confirm` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Confirmation Link Email | `customer/create_account/email_confirmation_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Welcome Email | `customer/create_account/email_confirmed_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Generate Human-Friendly Customer ID | `customer/create_account/generate_human_friendly_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Password Reset Protection Type | `customer/password/password_reset_protection_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Max Number of Password Reset Requests | `customer/password/max_number_password_reset_requests` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Min Time Between Password Reset Requests | `customer/password/min_time_between_password_reset_requests` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Forgot Email Template | `customer/password/forgot_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Remind Email Template | `customer/password/remind_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Reset Password Template | `customer/password/reset_password_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Password Template Email Sender | `customer/password/forgot_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Recovery Link Expiration Period (hours) | `customer/password/reset_link_expiration_period` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Autocomplete on login/forgot password forms | `customer/password/autocomplete_on_storefront` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Number of Required Character Classes | `customer/password/required_character_classes_number` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Login Failures to Lockout Account | `customer/password/lockout_failures` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minimum Password Length | `customer/password/minimum_password_length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Lockout Time (minutes) | `customer/password/lockout_threshold` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Number of Lines in a Street Address | `customer/address/street_lines` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Prefix | `customer/address/prefix_show` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Prefix Dropdown Options | `customer/address/prefix_options` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Middle Name (initial) | `customer/address/middlename_show` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Suffix | `customer/address/suffix_show` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Suffix Dropdown Options | `customer/address/suffix_options` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Date of Birth | `customer/address/dob_show` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Tax/VAT Number | `customer/address/taxvat_show` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Gender | `customer/address/gender_show` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Store Credit Functionality | `customer/magento_customerbalance/is_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Show Store Credit History to Customers | `customer/magento_customerbalance/show_history` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Refund Store Credit Automatically | `customer/magento_customerbalance/refund_automatically` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Store Credit Update Email Sender | `customer/magento_customerbalance/email_identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Store Credit Update Email Template | `customer/magento_customerbalance/email_template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Redirect Customer to Account Dashboard after Logging in | `customer/startup/redirect_dashboard` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Text | `customer/address_templates/text` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Text One Line | `customer/address_templates/oneline` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
HTML | `customer/address_templates/html` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
PDF | `customer/address_templates/pdf` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Customer Segment Functionality | `customer/magento_customersegment/is_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable CAPTCHA on Storefront | `customer/captcha/enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Font | `customer/captcha/font` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Forms | `customer/captcha/forms` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displaying Mode | `customer/captcha/mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Number of Unsuccessful Attempts to Login | `customer/captcha/failed_attempts_login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
CAPTCHA Timeout (minutes) | `customer/captcha/timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Number of Symbols | `customer/captcha/length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Symbols Used in CAPTCHA | `customer/captcha/symbols` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Case Sensitive | `customer/captcha/case_sensitive` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Wish list paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Wish List**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enabled | `wishlist/general/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Multiple Wish Lists | `wishlist/general/multiple_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Number of Multiple Wish Lists | `wishlist/general/multiple_wishlist_number` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Email Sender | `wishlist/email/email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Template | `wishlist/email/email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Max Emails Allowed to be Sent | `wishlist/email/number_limit` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Text Length Limit | `wishlist/email/text_limit` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Wish Lists Summary | `wishlist/wishlist_link/use_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Invitations paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Invitations**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Invitations Functionality | `magento_invitation/general/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable Invitations on Storefront | `magento_invitation/general/enabled_on_front` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Referred Customer Group | `magento_invitation/general/registration_use_inviter_group` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
New Accounts Registration | `magento_invitation/general/registration_required_invitation` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Customers to Add Custom Message to Invitation Email | `magento_invitation/general/allow_customer_message` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Max Invitations Allowed to be Sent at One Time | `magento_invitation/general/max_invitation_amount_per_send` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Customer Invitation Email Sender | `magento_invitation/email/identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Customer Invitation Email Template | `magento_invitation/email/template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |

### Reward points paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Reward Points**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Reward Points Functionality | `magento_reward/general/is_enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable Reward Points Functionality on Storefront | `magento_reward/general/is_enabled_on_front` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Customers May See Reward Points History | `magento_reward/general/publish_history` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Rewards Points Balance Redemption Threshold | `magento_reward/general/min_points_balance` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Cap Reward Points Balance At | `magento_reward/general/max_points_balance` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Reward Points Expire in (days) | `magento_reward/general/expiration_days` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Reward Points Expiry Calculation | `magento_reward/general/expiry_calculation` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Refund Reward Points Automatically | `magento_reward/general/refund_automatically` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Deduct Reward Points from Refund Amount Automatically | `magento_reward/general/deduct_automatically` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Landing Page | `magento_reward/general/landing_page` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Purchase | `magento_reward/points/order` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Registration | `magento_reward/points/register` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Newsletter Signup | `magento_reward/points/newsletter` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Converting Invitation to Customer | `magento_reward/points/invitation_customer` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Invitation to Customer Conversions Quantity Limit | `magento_reward/points/invitation_customer_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Converting Invitation to Order | `magento_reward/points/invitation_order` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Invitation to Order Conversions Quantity Limit | `magento_reward/points/invitation_order_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Invitation Conversion to Order Reward | `magento_reward/points/invitation_order_frequency` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Review Submission | `magento_reward/points/review` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Rewarded Reviews Submission Quantity Limit | `magento_reward/points/review_limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Email Sender | `magento_reward/notification/email_sender` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Subscribe Customers by Default | `magento_reward/notification/subscribe_by_default` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Balance Update Email | `magento_reward/notification/balance_update_template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Reward Points Expiry Warning Email | `magento_reward/notification/expiry_warning_template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Expiry Warning Before (days) | `magento_reward/notification/expiry_day_before` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |

### Promotions paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Promotions**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Reminder Emails | `promo/magento_reminder/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `promo/magento_reminder/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Interval | `promo/magento_reminder/interval` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minute of the Hour | `promo/magento_reminder/minutes` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Start Time | `promo/magento_reminder/time` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Maximum Emails per One Run | `promo/magento_reminder/limit` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Email Send Failure Threshold | `promo/magento_reminder/threshold` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Reminder Email Sender | `promo/magento_reminder/identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Code Length | `promo/auto_generated_coupon_codes/length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Format | `promo/auto_generated_coupon_codes/format` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Prefix | `promo/auto_generated_coupon_codes/prefix` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Suffix | `promo/auto_generated_coupon_codes/suffix` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Dash Every X Characters | `promo/auto_generated_coupon_codes/dash` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Gift registry paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Gift Registry**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Gift Registry | `magento_giftregistry/general/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Registrants | `magento_giftregistry/general/max_registrant` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Template | `magento_giftregistry/owner_email/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Sender | `magento_giftregistry/owner_email/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Template | `magento_giftregistry/sharing_email/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Sender | `magento_giftregistry/sharing_email/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Sent Emails Threshold | `magento_giftregistry/sharing_email/send_limit` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Template | `magento_giftregistry/update_email/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Email Sender | `magento_giftregistry/update_email/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Persistent shopping cart paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Persistent Shopping Cart**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Persistence | `persistent/options/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persistence Lifetime (seconds) | `persistent/options/lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable "Remember Me" | `persistent/options/remember_enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
"Remember Me" Default Value | `persistent/options/remember_default` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Clear Persistence on Sign Out | `persistent/options/logout_clear` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Shopping Cart | `persistent/options/shopping_cart` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Wish List | `persistent/options/wishlist` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Recently Ordered Items | `persistent/options/recently_ordered` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Currently Compared Products | `persistent/options/compare_current` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Comparison History | `persistent/options/compare_history` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Recently Viewed Products | `persistent/options/recently_viewed` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Persist Customer Group Membership and Segmentation | `persistent/options/customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

## Sales category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Sales paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Hide Customer IP | `sales/general/hide_customer_ip` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Subtotal | `sales/totals_sort/subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Discount | `sales/totals_sort/discount` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipping | `sales/totals_sort/shipping` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Tax | `sales/totals_sort/tax` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Fixed Product Tax | `sales/totals_sort/weee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Grand Total | `sales/totals_sort/grand_total` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Gift Cards | `sales/totals_sort/giftcardaccount` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Store Credit | `sales/totals_sort/customerbalance` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Reorder | `sales/reorder/allow` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Logo for PDF Print-outs (200x50) | `sales/identity/logo` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Logo for HTML Print View | `sales/identity/logo_html` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Address | `sales/identity/address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable | `sales/minimum_order/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minimum Amount | `sales/minimum_order/amount` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Include Tax to Amount | `sales/minimum_order/tax_including` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Description Message | `sales/minimum_order/description` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error to Show in Shopping Cart | `sales/minimum_order/error_message` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Validate Each Address Separately in Multi-address Checkout | `sales/minimum_order/multi_address` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Multi-address Description Message | `sales/minimum_order/multi_address_description` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Multi-address Error to Show in Shopping Cart | `sales/minimum_order/multi_address_error_message` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Aggregated Data | `sales/dashboard/use_aggregated_data` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Pending Payment Order Lifetime (minutes) | `sales/orders/delete_pending_after` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Gift Messages on Order Level | `sales/gift_options/allow_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Gift Messages for Order Items | `sales/gift_options/allow_items` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Gift Wrapping on Order Level | `sales/gift_options/wrapping_allow_order` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Gift Wrapping for Order Items | `sales/gift_options/wrapping_allow_items` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Gift Receipt | `sales/gift_options/allow_gift_receipt` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Allow Printed Card | `sales/gift_options/allow_printed_card` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Default Price for Printed Card | `sales/gift_options/printed_card_price` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable MAP | `sales/msrp/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Actual Price | `sales/msrp/display_price_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Popup Text Message | `sales/msrp/explanation_message` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default "What's This" Text Message | `sales/msrp/explanation_message_whats_this` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Order by SKU on My Account in Storefront | `sales/product_sku/my_account_enable` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enabled | `sales/instant_purchase/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Button Text | `sales/instant_purchase/button_text` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Customer Groups | `sales/product_sku/allowed_groups` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable Archiving | `sales/magento_salesarchive/active` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Archive Orders Purchased | `sales/magento_salesarchive/age` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Order Statuses to be Archived | `sales/magento_salesarchive/order_statuses` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable RMA on Storefront | `sales/magento_rma/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable RMA on Product Level | `sales/magento_rma/enabled_on_product` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Use Store Address | `sales/magento_rma/use_store_address` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |

### Sales emails paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Asynchronous sending | `sales_email/general/async_sending` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/order/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Order Confirmation Email Sender | `sales_email/order/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Order Confirmation Template | `sales_email/order/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Order Confirmation Template for Guest | `sales_email/order/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Order Email Copy Method | `sales_email/order/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/order_comment/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Order Comment Email Sender | `sales_email/order_comment/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Order Comment Email Template | `sales_email/order_comment/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Order Comment Email Template for Guest | `sales_email/order_comment/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Order Comments Email Copy Method | `sales_email/order_comment/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/invoice/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Invoice Email Sender | `sales_email/invoice/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Invoice Email Template | `sales_email/invoice/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Invoice Email Template for Guest | `sales_email/invoice/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Invoice Email Copy Method | `sales_email/invoice/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/invoice_comment/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Invoice Comment Email Sender | `sales_email/invoice_comment/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Invoice Comment Email Template | `sales_email/invoice_comment/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Invoice Comment Email Template for Guest | `sales_email/invoice_comment/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Invoice Comments Email Copy Method | `sales_email/invoice_comment/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/shipment/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipment Email Sender | `sales_email/shipment/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipment Email Template | `sales_email/shipment/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipment Email Template for Guest | `sales_email/shipment/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Shipment Email Copy Method | `sales_email/shipment/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/shipment_comment/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipment Comment Email Sender | `sales_email/shipment_comment/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipment Comment Email Template | `sales_email/shipment_comment/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipment Comment Email Template for Guest | `sales_email/shipment_comment/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Shipment Comments Email Copy Method | `sales_email/shipment_comment/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/creditmemo/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Credit Memo Email Sender | `sales_email/creditmemo/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Credit Memo Email Template | `sales_email/creditmemo/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Credit Memo Email Template for Guest | `sales_email/creditmemo/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Credit Memo Email Copy Method | `sales_email/creditmemo/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/creditmemo_comment/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Credit Memo Comment Email Sender | `sales_email/creditmemo_comment/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Credit Memo Comment Email Template | `sales_email/creditmemo_comment/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Credit Memo Comment Email Template for Guest | `sales_email/creditmemo_comment/guest_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Credit Memo Comments Email Copy Method | `sales_email/creditmemo_comment/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `sales_email/magento_rma/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Email Sender | `sales_email/magento_rma/identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Email Template | `sales_email/magento_rma/template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Email Template for Guest | `sales_email/magento_rma/guest_template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Send RMA Email Copy Method | `sales_email/magento_rma/copy_method` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enabled | `sales_email/magento_rma_auth/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Authorization Email Sender | `sales_email/magento_rma_auth/identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Authorization Email Template | `sales_email/magento_rma_auth/template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Authorization Email Template for Guest | `sales_email/magento_rma_auth/guest_template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Send RMA Authorization Email Copy Method | `sales_email/magento_rma_auth/copy_method` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enabled | `sales_email/magento_rma_comment/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Comment Email Sender | `sales_email/magento_rma_comment/identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Comment Email Template | `sales_email/magento_rma_comment/template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Comment Email Template for Guest | `sales_email/magento_rma_comment/guest_template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Send RMA Email Copy Method | `sales_email/magento_rma_comment/copy_method` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enabled | `sales_email/magento_rma_customer_comment/enabled` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Comment Email Sender | `sales_email/magento_rma_customer_comment/identity` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Comment Email Recipient | `sales_email/magento_rma_customer_comment/recipient` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
RMA Comment Email Template | `sales_email/magento_rma_customer_comment/template` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Send RMA Email Copy Method | `sales_email/magento_rma_customer_comment/copy_method` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Display Order ID in Header | `sales_pdf/invoice/put_order_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Order ID in Header | `sales_pdf/shipment/put_order_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Order ID in Header | `sales_pdf/creditmemo/put_order_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Tax paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Tax**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Tax Class for Shipping | `tax/classes/shipping_tax_class` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Tax Class for Gift Options | `tax/classes/wrapping_tax_class` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Default Tax Class for Product | `tax/classes/default_product_tax_class` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Tax Class for Customer | `tax/classes/default_customer_tax_class` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Tax Calculation Method Based On | `tax/calculation/algorithm` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Tax Calculation Based On | `tax/calculation/based_on` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Catalog Prices | `tax/calculation/price_includes_tax` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipping Prices | `tax/calculation/shipping_includes_tax` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Apply Customer Tax | `tax/calculation/apply_after_discount` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Apply Discount On Prices | `tax/calculation/discount_tax` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Apply Tax On | `tax/calculation/apply_tax_on` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Cross Border Trade | `tax/calculation/cross_border_trade_enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Country | `tax/defaults/country` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default State | `tax/defaults/region` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Default Post Code | `tax/defaults/postcode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Product Prices In Catalog | `tax/display/type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Shipping Prices | `tax/display/shipping` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Prices | `tax/cart_display/price` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Subtotal | `tax/cart_display/subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Shipping Amount | `tax/cart_display/shipping` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Gift Wrapping Prices | `tax/cart_display/gift_wrapping` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Display Printed Card Prices | `tax/cart_display/printed_card` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Include Tax In Order Total | `tax/cart_display/grandtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Full Tax Summary | `tax/cart_display/full_summary` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Zero Tax Subtotal | `tax/cart_display/zero_tax` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Prices | `tax/sales_display/price` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Subtotal | `tax/sales_display/subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Shipping Amount | `tax/sales_display/shipping` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Gift Wrapping Prices | `tax/sales_display/gift_wrapping` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Display Printed Card Prices | `tax/sales_display/printed_card` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Include Tax In Order Total | `tax/sales_display/grandtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Full Tax Summary | `tax/sales_display/full_summary` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Zero Tax Subtotal | `tax/sales_display/zero_tax` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable FPT | `tax/weee/enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Prices In Product Lists | `tax/weee/display_list` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Prices On Product View Page | `tax/weee/display` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Prices In Sales Modules | `tax/weee/display_sales` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Prices In Emails | `tax/weee/display_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Apply Tax To FPT | `tax/weee/apply_vat` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Include FPT In Subtotal | `tax/weee/include_in_subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Checkout paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Checkout**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable Onepage Checkout | `checkout/options/onepage_checkout_enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Guest Checkout | `checkout/options/guest_checkout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Billing Address On | `checkout/options/display_billing_address_on` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Terms and Conditions | `checkout/options/enable_agreements` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Quote Lifetime (days) | `checkout/cart/delete_quote_after` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
After Adding a Product Redirect to Shopping Cart | `checkout/cart/redirect_to_cart` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Grouped Product Image | `checkout/cart/grouped_product_image` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Configurable Product Image | `checkout/cart/configurable_product_image` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Preview Quote Lifetime (minutes) | `checkout/cart/preview_quota_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Display Cart Summary | `checkout/cart_link/use_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Display Shopping Cart Sidebar | `checkout/sidebar/display` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Display Recently Added Item(s) | `checkout/sidebar/count` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Payment Failed Email Sender | `checkout/payment_failed/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Payment Failed Email Receiver | `checkout/payment_failed/receiver` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Payment Failed Template | `checkout/payment_failed/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Send Payment Failed Email Copy Method | `checkout/payment_failed/copy_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Shipping settings paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Settings**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Apply custom Shipping Policy | `shipping/shipping_policy/enable_shipping_policy` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Shipping Policy | `shipping/shipping_policy/shipping_policy_content` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Multishipping settings paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Multishipping Settings**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Allow Shipping to Multiple Addresses | `multishipping/options/checkout_multiple` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Qty Allowed for Shipping to Multiple Addresses | `multishipping/options/checkout_multiple_maximum_qty` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Shipping methods paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Shipping Methods**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enabled | `carriers/flatrate/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Title | `carriers/flatrate/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Method Name | `carriers/flatrate/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Type | `carriers/flatrate/type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Price | `carriers/flatrate/price` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Calculate Handling Fee | `carriers/flatrate/handling_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Fee | `carriers/flatrate/handling_fee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/flatrate/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/flatrate/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/flatrate/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/flatrate/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/flatrate/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `carriers/freeshipping/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Title | `carriers/freeshipping/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Method Name | `carriers/freeshipping/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minimum Order Amount | `carriers/freeshipping/free_shipping_subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/freeshipping/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/freeshipping/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/freeshipping/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/freeshipping/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/freeshipping/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled | `carriers/tablerate/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Title | `carriers/tablerate/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Method Name | `carriers/tablerate/name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Condition | `carriers/tablerate/condition_name` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Include Virtual Products in Price Calculation | `carriers/tablerate/include_virtual_price` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Export | `carriers/tablerate/export` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Import | `carriers/tablerate/import` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Calculate Handling Fee | `carriers/tablerate/handling_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Fee | `carriers/tablerate/handling_fee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/tablerate/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/tablerate/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/tablerate/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/tablerate/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/tablerate/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for Checkout | `carriers/ups/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for RMA | `carriers/ups/active_rma` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
UPS Type | `carriers/ups/type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Mode | `carriers/ups/mode_xml` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Origin of the Shipment | `carriers/ups/origin_shipment` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Gateway URL | `carriers/ups/gateway_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Title | `carriers/ups/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Negotiated Rates | `carriers/ups/negotiated_active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Packages Request Type | `carriers/ups/shipment_requesttype` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Container | `carriers/ups/container` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Weight Unit | `carriers/ups/unit_of_measure` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Destination Type | `carriers/ups/dest_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Package Weight (Please consult your shipping carrier for maximum supported shipping weight) | `carriers/ups/max_package_weight` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Pickup Method | `carriers/ups/pickup` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minimum Package Weight (Please consult your shipping carrier for minimum supported shipping weight) | `carriers/ups/min_package_weight` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Calculate Handling Fee | `carriers/ups/handling_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Applied | `carriers/ups/handling_action` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Fee | `carriers/ups/handling_fee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allowed Methods | `carriers/ups/allowed_methods` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Method | `carriers/ups/free_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Free Shipping Threshold | `carriers/ups/free_shipping_enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Shipping Amount Threshold | `carriers/ups/free_shipping_subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/ups/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/ups/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/ups/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/ups/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/ups/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for Checkout | `carriers/usps/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for RMA | `carriers/usps/active_rma` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Mode | `carriers/usps/mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Packages Request Type | `carriers/usps/shipment_requesttype` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Container | `carriers/usps/container` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Size | `carriers/usps/size` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Length | `carriers/usps/length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Width | `carriers/usps/width` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Height | `carriers/usps/height` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Girth | `carriers/usps/girth` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Machinable | `carriers/usps/machinable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Package Weight (Please consult your shipping carrier for maximum supported shipping weight) | `carriers/usps/max_package_weight` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Calculate Handling Fee | `carriers/usps/handling_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Applied | `carriers/usps/handling_action` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Fee | `carriers/usps/handling_fee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allowed Methods | `carriers/usps/allowed_methods` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Method | `carriers/usps/free_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Free Shipping Threshold | `carriers/usps/free_shipping_enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Shipping Amount Threshold | `carriers/usps/free_shipping_subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/usps/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/usps/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/usps/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Debug | `carriers/usps/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/usps/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/usps/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for Checkout | `carriers/fedex/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for RMA | `carriers/fedex/active_rma` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Title | `carriers/fedex/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Web-Services URL (Production) | `carriers/fedex/production_webservices_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Web-Services URL (Sandbox) | `carriers/fedex/sandbox_webservices_url` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Packages Request Type | `carriers/fedex/shipment_requesttype` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Packaging | `carriers/fedex/packaging` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Dropoff | `carriers/fedex/dropoff` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Weight Unit | `carriers/fedex/unit_of_measure` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Package Weight (Please consult your shipping carrier for maximum supported shipping weight) | `carriers/fedex/max_package_weight` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Calculate Handling Fee | `carriers/fedex/handling_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Applied | `carriers/fedex/handling_action` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Fee | `carriers/fedex/handling_fee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Residential Delivery | `carriers/fedex/residence_delivery` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allowed Methods | `carriers/fedex/allowed_methods` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Hub ID | `carriers/fedex/smartpost_hubid` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Method | `carriers/fedex/free_method` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Free Shipping Threshold | `carriers/fedex/free_shipping_enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Shipping Amount Threshold | `carriers/fedex/free_shipping_subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/fedex/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/fedex/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/fedex/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Debug | `carriers/fedex/debug` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/fedex/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/fedex/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for Checkout | `carriers/dhl/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for RMA | `carriers/dhl/active_rma` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Title | `carriers/dhl/title` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Content Type | `carriers/dhl/content_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Calculate Handling Fee | `carriers/dhl/handling_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Applied | `carriers/dhl/handling_action` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Handling Fee | `carriers/dhl/handling_fee` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Divide Order Weight | `carriers/dhl/divide_order_weight` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Weight Unit | `carriers/dhl/unit_of_measure` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Size | `carriers/dhl/size` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Height | `carriers/dhl/height` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Depth | `carriers/dhl/depth` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Width | `carriers/dhl/width` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allowed Methods | `carriers/dhl/doc_methods` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allowed Methods | `carriers/dhl/nondoc_methods` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ready time | `carriers/dhl/ready_time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displayed Error Message | `carriers/dhl/specificerrmsg` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Method | `carriers/dhl/free_method_doc` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Method | `carriers/dhl/free_method_nondoc` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Free Shipping Threshold | `carriers/dhl/free_shipping_enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Free Shipping Amount Threshold | `carriers/dhl/free_shipping_subtotal` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Applicable Countries | `carriers/dhl/sallowspecific` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Ship to Specific Countries | `carriers/dhl/specificcountry` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Show Method if Not Applicable | `carriers/dhl/showmethod` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sort Order | `carriers/dhl/sort_order` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Google API paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Google API**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Enable | `google/analytics/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Account type | `google/analytics/type` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable Content Experiments | `google/analytics/experiments` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
List property for the catalog page | `google/analytics/catalog_page_list_value` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
List property for the cross-sell block | `google/analytics/crosssell_block_list_value` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
List property for the up-sell block | `google/analytics/upsell_block_list_value` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
List property for the related products block | `google/analytics/related_block_list_value` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
List property for the search results page | `google/analytics/search_page_list_value` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
’Internal Promotions’ for promotions field “Label”. | `google/analytics/promotions_list_value` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
Enable | `google/adwords/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion ID | `google/adwords/conversion_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion Language | `google/adwords/conversion_language` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion Format | `google/adwords/conversion_format` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion Color | `google/adwords/conversion_color` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion Label | `google/adwords/conversion_label` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion Value Type | `google/adwords/conversion_value_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Conversion Value | `google/adwords/conversion_value` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Signifyd paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Fraud Protection**.

| Name  | Config path | EE only? |
|--------------|--------------|--------------|
| Enable this Solution | `fraud_protection/signifyd/active` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |
| Debug | `fraud_protection/signifyd/debug` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png) |

### Gift cards paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Gift Cards**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Gift Card Notification Email Sender | `giftcard/email/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Gift Card Notification Email Template | `giftcard/email/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Redeemable | `giftcard/general/is_redeemable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Lifetime (days) | `giftcard/general/lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Gift Message | `giftcard/general/allow_message` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Gift Message Maximum Length | `giftcard/general/message_max_length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Generate Gift Card Account when Order Item is | `giftcard/general/order_item_status` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Gift Card Email Sender | `giftcard/giftcardaccount_email/identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Gift Card Template | `giftcard/giftcardaccount_email/template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Length | `giftcard/giftcardaccount_general/code_length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Format | `giftcard/giftcardaccount_general/code_format` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Prefix | `giftcard/giftcardaccount_general/code_prefix` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Code Suffix | `giftcard/giftcardaccount_general/code_suffix` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Dash Every X Characters | `giftcard/giftcardaccount_general/code_split` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Pool Size | `giftcard/giftcardaccount_general/pool_size` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Low Code Pool Threshold | `giftcard/giftcardaccount_general/pool_threshold` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

## Services category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Services**.

### Magento Web API paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Services** > **Web API**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Default Response Charset | `webapi/soap/charset` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Anonymous Guest Access | `webapi/webapisecurity/allow_insecure` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### OAuth paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Services** > **OAuth**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Customer Token Lifetime (hours) | `oauth/access_token_lifetime/customer` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Admin Token Lifetime (hours) | `oauth/access_token_lifetime/admin` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Cleanup Probability | `oauth/cleanup/cleanup_probability` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Expiration Period | `oauth/cleanup/expiration_period` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Expiration Period | `oauth/consumer/expiration_period` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
OAuth consumer credentials HTTP Post maxredirects | `oauth/consumer/post_maxredirects` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
OAuth consumer credentials HTTP Post timeout | `oauth/consumer/post_timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

## Advanced category

This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### Admin paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Admin**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Forgot Password Email Template | `admin/emails/forgot_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Forgot and Reset Email Sender | `admin/emails/forgot_email_identity` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
User Notification Template | `admin/emails/user_notification_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Startup Page | `admin/startup/menu_item_id` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Custom Admin URL | `admin/url/use_custom` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Custom Admin Path | `admin/url/use_custom_path` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Admin Account Sharing | `admin/security/admin_account_sharing` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Password Reset Protection Type | `admin/security/password_reset_protection_type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Recovery Link Expiration Period (hours) | `admin/security/password_reset_link_expiration_period` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Max Number of Password Reset Requests | `admin/security/max_number_password_reset_requests` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Min Time Between Password Reset Requests | `admin/security/min_time_between_password_reset_requests` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Add Secret Key to URLs | `admin/security/use_form_key` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Login is Case Sensitive | `admin/security/use_case_sensitive_login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Admin Session Lifetime (seconds) | `admin/security/session_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maximum Login Failures to Lockout Account | `admin/security/lockout_failures` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Lockout Time (minutes) | `admin/security/lockout_threshold` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Password Lifetime (days) | `admin/security/password_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Password Change | `admin/security/password_is_forced` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Charts | `admin/dashboard/enable_charts` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable CAPTCHA in Admin | `admin/captcha/enable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Font | `admin/captcha/font` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Forms | `admin/captcha/forms` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Displaying Mode | `admin/captcha/mode` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Number of Unsuccessful Attempts to Login | `admin/captcha/failed_attempts_login` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
CAPTCHA Timeout (minutes) | `admin/captcha/timeout` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Number of Symbols | `admin/captcha/length` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Symbols Used in CAPTCHA | `admin/captcha/symbols` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Case Sensitive | `admin/captcha/case_sensitive` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled Actions | `admin/magento_logging/actions` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### System paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Successful Messages Lifetime | `system/mysqlmq/successful_messages_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Retry Messages In Progress After | `system/mysqlmq/retry_inprogress_after` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Failed Messages Lifetime | `system/mysqlmq/failed_messages_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
New Messages Lifetime | `system/mysqlmq/new_messages_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Generate Schedules Every | `system/cron/index/schedule_generate_every` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Schedule Ahead for | `system/cron/index/schedule_ahead_for` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Missed if Not Run Within | `system/cron/index/schedule_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
History Cleanup Every | `system/cron/index/history_cleanup_every` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Success History Lifetime | `system/cron/index/history_success_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Failure History Lifetime | `system/cron/index/history_failure_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use Separate Process | `system/cron/index/use_separate_process` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Generate Schedules Every | `system/cron/default/schedule_generate_every` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Schedule Ahead for | `system/cron/default/schedule_ahead_for` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Missed if Not Run Within | `system/cron/default/schedule_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
History Cleanup Every | `system/cron/default/history_cleanup_every` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Success History Lifetime | `system/cron/default/history_success_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Failure History Lifetime | `system/cron/default/history_failure_lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Generate Schedules Every | `system/cron/staging/schedule_generate_every` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Schedule Ahead for | `system/cron/staging/schedule_ahead_for` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Missed if Not Run Within | `system/cron/staging/schedule_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
History Cleanup Every | `system/cron/staging/history_cleanup_every` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Success History Lifetime | `system/cron/staging/history_success_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Failure History Lifetime | `system/cron/staging/history_failure_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Use Separate Process | `system/cron/staging/use_separate_process` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Generate Schedules Every | `system/cron/catalog/event/schedule_generate_every` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Schedule Ahead for | `system/cron/catalog/event/schedule_ahead_for` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Missed if Not Run Within | `system/cron/catalog/event/schedule_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
History Cleanup Every | `system/cron/catalog/event/history_cleanup_every` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Success History Lifetime | `system/cron/catalog/event/history_success_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Failure History Lifetime | `system/cron/catalog/event/history_failure_lifetime` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Use Separate Process | `system/cron/catalog/event/use_separate_process` | ![EE-only]({{ site.baseurl }}/common/images/cloud_ee.png)
Use Separate Process | `system/cron/default/use_separate_process` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Disable Email Communications | `system/smtp/disable` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Set Return-Path | `system/smtp/set_return_path` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Return-Path Email | `system/smtp/return_path_email` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Installed Currencies | `system/currency/installed` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Use HTTPS to Get Feed | `system/adminnotification/use_https` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Update Frequency | `system/adminnotification/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Last Update | `system/adminnotification/last_update` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Scheduled Backup | `system/backup/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Backup Type | `system/backup/type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Start Time | `system/backup/time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `system/backup/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Maintenance Mode | `system/backup/maintenance` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Log Entry Lifetime, Days | `system/rotation/lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Log Archiving Frequency | `system/rotation/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Caching Application | `system/full_page_cache/caching_application` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
TTL for public content | `system/full_page_cache/ttl` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Grace period | `system/full_page_cache/varnish/grace_period` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Export Configuration | `system/full_page_cache/varnish/export_button_version4` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Days Saved in Log | `system/bulk/lifetime` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Media Storage | `system/media_storage_configuration/media_storage` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Select Media Database | `system/media_storage_configuration/media_database` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Environment Update Time | `system/media_storage_configuration/configuration_update_time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Save Files, Days | `system/magento_scheduled_import_export_log/save_days` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Scheduled File History Cleaning | `system/magento_scheduled_import_export_log/enabled` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Start Time | `system/magento_scheduled_import_export_log/time` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Frequency | `system/magento_scheduled_import_export_log/frequency` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Error Email Template | `system/magento_scheduled_import_export_log/error_email_template` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

### Developer paths

These configuration values are available in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.

Name  | Config path | EE only? |
|--------------|--------------|--------------|
Workflow type | `dev/front_end_development_workflow/type` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Allow Symlinks | `dev/template/allow_symlink` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minify Html | `dev/template/minify_html` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Template Path Hints for Storefront | `dev/debug/template_hints_storefront` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable Template Path Hints for Admin | `dev/debug/template_hints_admin` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Add Block Names to Hints | `dev/debug/template_hints_blocks` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Log to File | `dev/debug/debug_logging` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Log to syslog | `dev/syslog/syslog_logging` |  |
Enabled for Storefront | `dev/translate_inline/active` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enabled for Admin | `dev/translate_inline/active_admin` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Merge JavaScript Files | `dev/js/merge_files` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Enable JavaScript Bundling | `dev/js/enable_js_bundling` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minify JavaScript Files | `dev/js/minify_files` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Translation Strategy | `dev/js/translate_strategy` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Log JS Errors to Session Storage | `dev/js/session_storage_logging` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Merge CSS Files | `dev/css/merge_css_files` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Minify CSS Files | `dev/css/minify_files` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Image Adapter | `dev/image/default_adapter` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Sign Static Files | `dev/static/sign` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Asynchronous indexing | `dev/grid/async_indexing` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |
Cache User Defined Attributes | `dev/caching/cache_user_defined_attributes` | <!-- ![Not EE-only]({{ site.baseurl }}/common/images/red-x.png) --> |

The `StoreConfig` object can contain the following attributes.

Attribute | Data Type | Description | Default or example value
--- | --- | --- | ---
`absolute_footer` | String | Contains scripts that must be included in the HTML before the closing `<body>` tag | null
`allow_gift_wrapping_on_order` | String | Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No) | 1
`allow_gift_wrapping_on_order_items` | String | Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No) | 1
`allow_gift_receipt` | String | Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No) | 1
`allow_guests_to_write_product_reviews` | String | Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No) | 1
`allow_items` | String | Allows gift messages for order items. Possible values: 1 (Yes) and 0 (No). <br/>Configuration path: sales/gift_options/allow_items | 0
`allow_order` | String | Allows gift messages at the order level. Possible values: 1 (Yes) and 0 (No). <br/>Configuration path: sales/gift_options/allow_order | 0
`allow_printed_card` | String | Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No) | 1
`autocomplete_on_storefront` | Boolean | Enable autocomplete on login and forgot password forms. <br/>Configuration path: customer/password/autocomplete_on_storefront | true
`base_currency_code` | String | The code representing the currency in which Magento processes all payment transactions | `USD`
`base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url` | `http://magentohost.example.com/`
`base_media_url` | String | The fully-qualified URL that specifies the location of user media files | `http://magentohost.example.com/pub/media/`
`base_static_url` | String | The fully-qualified URL that specifies the location of static view files | `http://magentohost.example.com/pub/static/`
`base_url` | String | The store's fully-qualified base URL | `http://magentohost.example.com/`
`cart_gift_wrapping` | String | Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No) | 1
`cart_printed_card` | String | Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No) | 1
`catalog_default_sort_by` | String | The default sort order of the search results list | `position`
`category_fixed_product_tax_display_setting` | [FixedProductTaxDisplaySettings](#FixedProductTaxDisplaySettings) | Corresponds to the **Display Prices In Product Lists** field. It indicates how Fixed Product Tax information is displayed on category pages | FPT_DISABLED
`category_url_suffix` | String | The suffix applied to category pages, such as `.htm` or `.html` | `.html`
`cms_home_page` | String | Returns the name of the CMS page that identifies the home page for the store | `home`
`cms_no_cookies` | String | Identifies a specific CMS page that appears when cookies are not enabled for the browser | `enable-cookies`
`cms_no_route` | String | Identifies a specific CMS page that you want to appear when a 404 “Page Not Found” error occurs | `no-route`
`code` | String | A unique identifier for the store | `default`
`copyright` | String | The copyright statement that appears at the bottom of each page | Copyright &#169; 2013-present Magento, Inc. All rights reserved.
`default_description` | String | The description that provides a summary of your site for search engine listings and should not be more than 160 characters in length | null
`default_display_currency_code` | String | The code representing the currency displayed on the store | `USD`
`default_keywords` | String | A series of keywords that describe your store, each separated by a comma | `Magento, Varien, E-commerce`
`default_title` | String | The title that appears at the title bar of each page when viewed in a browser | Magento Enterprise Edition
`demonotice` | Int | Controls the display of the demo store notice at the top of the page. Options: `0` (No) or `1` (Yes) | 0
`front` | String | Indicates the landing page that is associated with the base URL | `cms`
`grid_per_page` | Int | The default number of products per page in Grid View | `9`
`grid_per_page_values` | String | A list of numbers that define how many products can be displayed in List View  | `9,15,30`
`head_includes` | String | Contains scripts that must be included in the HTML before the closing `<head>` tag | `<link  rel=\"stylesheet\" type=\"text/css\"  media=\"all\" href=\"{{MEDIA_URL}}styles.css\" />`
`head_shortcut_icon` | String | Uploads the small graphic image that appears in the address bar and tab of the browser | null
`header_logo_src` | String | The path to the logo that appears in the header | null
`id` | Int | The ID number assigned to the store | `1`
`list_mode` | String  | The format of the search results list | `grid-list`
`list_per_page` | Int | The default number of products per page in List View | `10`
`list_per_page_values` | String | A list of numbers that define how many products can be displayed in List View | `5,10,15,20,25`
`locale` | String | The store's locale | `en_US`
`logo_alt` | String | The Alt text that is associated with the logo | null
`logo_height` | Int | The height of your logo image in pixels | null
`logo_width` | Int | The width of your logo image in pixels | null
`magento_reward_general_is_enabled_on_front` | String | Indicates whether reward points functionality is enabled on the storefront | `1` (enabled)
`magento_reward_general_is_enabled` | String | Indicates whether reward points are enabled. | `1` (enabled)
`magento_reward_general_min_points_balance` | String | The minimum point balance customers must have before they can redeem them. A null value indicates no minimum | null
`magento_reward_general_publish_history` | String | When enabled, customers can see a detailed history of their reward points | `1` (enabled)
`magento_reward_points_invitation_customer_limit` | String | The maximum number of registration referrals that qualify for rewards. A null value indicates no limit | null
`magento_reward_points_invitation_customer` | String | The number of points for a referral when the invitee registers on the site | null
`magento_reward_points_invitation_order_limit` | String | The number of order conversions that can earn points for the customer who sends the invitation. A null value indicates no limit | null
`magento_reward_points_invitation_order` | String | The number of points for a referral when the invitee places their first order on the site | null
`magento_reward_points_newsletter` | String | The number of points earned by registered customers who subscribe to a newsletter | null
`magento_reward_points_order` | String | Indicates whether customers earn points for shopping according to the reward point exchange rate. In Luma, this also controls whether to show a message in the shopping cart about the rewards points earned for the purchase, as well as the customer’s current reward point balance | null
`magento_reward_points_register` | String | The number of points a customer gets for registering | null
`magento_reward_points_review_limit` | String | The maximum number of reviews that qualify for  rewards. A null value indicates no limit | null
`magento_reward_points_review` | String | The number of points for writing a review | null
`magento_wishlist_general_is_enabled` | String | Indicates whether wish lists are enabled (1) or disabled (0)
`minimum_password_length` | String | The minimum number of characters required for a valid password. <br/>Configuration path: customer/password/minimum_password_length | 6
`no_route` | String | Contains the URL of the default page that you want to appear when if a 404 “Page not Found” error occurs | `cms/noroute/index`
`payment_payflowpro_cc_vault_active` | String | Payflow Pro vault status | `0` (inactive) or `1` (active)
`printed_card_price` | String | The default price of a printed card that accompanies an order | 10
`product_fixed_product_tax_display_setting` | [FixedProductTaxDisplaySettings](#FixedProductTaxDisplaySettings) | Corresponds to the **Display Prices On Product View Page** field. It indicates how Fixed Product Taxes information is displayed on product pages | FPT_DISABLED
`product_reviews_enabled` | String | Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No) | 1
`product_url_suffix` | String | The suffix applied to product pages, such as `.htm` or `.html` | `.html`
`required_character_classes_number` | String | The number of different character classes required in a password (lowercase, uppercase, digits, special characters). <br/>Configuration path: customer/password/required_character_classes_number | 2
`root_category_id` | Int | The ID of the root category | 2
`sales_fixed_product_tax_display_setting` | [FixedProductTaxDisplaySettings](#FixedProductTaxDisplaySettings) | Corresponds to the **Display Prices In Sales Modules** field. It indicates how Fixed Product Taxes information is displayed on cart, checkout, and order pages | FPT_DISABLED
`sales_gift_wrapping` | String | Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No) | 1
`sales_printed_card` | String | Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No) | 1
`secure_base_link_url` | String | A secure fully-qualified URL that is used to create relative links to the `base_url` | `https://magentohost.example.com/`
`secure_base_media_url` | String | The secure fully-qualified URL that specifies the location of user media files | `https://magentohost.example.com/pub/media/`
`secure_base_static_url` | String | The secure fully-qualified URL that specifies the location of static view files | `https://magentohost.example.com/pub/static/`
`secure_base_url` | String | The store's fully-qualified secure base URL | `https://magentohost.example.com/`
`send_friend` | [SendFriendConfiguration](#SendFriendConfiguration) | Email to a Friend configuration | Not applicable
`show_cms_breadcrumbs` | Int | Determines if a breadcrumb trail appears on all CMS pages in the catalog. Options: `0` (No) or `1` (Yes) | 1
`store_name` | String | The store's name | `My Store`
`timezone` | String | The store's time zone | `America/Chicago`
`title_prefix` | String | A prefix that appears before the title to create a two- or three-part title | null
`title_separator` | String | Identifies the character that separates the category name and subcategory in the browser title bar | `-`
`title_suffix` | String | A suffix that appears after the title to create a two-or three part title | null
`website_id` | Integer | The ID number assigned to the parent website | `1`
`weight_unit` | String | The weight unit for products | `lbs`, `kgs`, or similar
`welcome` | String | Text that appears in the header of the page and includes the name of customers who are logged in | Default welcome msg!

### SendFriendConfiguration attributes {#SendFriendConfiguration}

Attribute |  Data Type | Description
--- | --- | ---
`enabled_for_customers` | Boolean! | Indicates whether the Email to a Friend feature is enabled for customers
`enabled_for_guests` | Boolean! | Indicates whether the Email to a Friend feature is enabled for guests

### FixedProductTaxDisplaySettings attributes {#FixedProductTaxDisplaySettings}

The **Stores** > Settings > **Configuration** > **Sales** > **Tax** > **Fixed Product Taxes** panel contains several fields that determine how to display fixed product tax (FPT) values and descriptions.

The `FixedProductTaxDisplaySettings` data type is an enumeration that describes whether displayed prices include fixed product taxes and whether Magento separately displays detailed information about the FPTs. These attributes are defined in the `WeeeGraphQl` module.

Value | Description
--- | ---
EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS | The displayed price does not include the FPT amount. You must display the values of `ProductPrice.fixed_product_taxes` and the price including the FPT separately. This value corresponds to **Excluding FPT, Including FPT description and final price**
EXCLUDE_FPT_WITHOUT_DETAILS | The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to **Excluding FPT**
FPT_DISABLED | The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query
INCLUDE_FPT_WITH_DETAILS | The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to **Including FPT and FPT description**
INCLUDE_FPT_WITHOUT_DETAILS | The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to **Including FPT only**

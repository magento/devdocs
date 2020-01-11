---
group: graphql
title: storeConfig query
redirect_from:
  - /guides/v2.3/graphql/reference/store-config.html
---

The `storeConfig` query defines information about a store's configuration. You can query a non-default store by [changing the header]({{ page.baseurl }}/graphql/send-request.html) in your GraphQL request.

## Syntax

`storeConfig: StoreConfig`

## Example usage

### Query a store's configuration

The following call returns all details of a store's configuration.

**Request:**

```graphql
{
  storeConfig {
    id
    code
    website_id
    locale
    base_currency_code
    default_display_currency_code
    timezone
    weight_unit
    base_url
    base_link_url
    base_static_url
    base_media_url
    secure_base_url
    secure_base_link_url
    secure_base_static_url
    secure_base_media_url
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "id": 1,
      "code": "default",
      "website_id": 1,
      "locale": "en_US",
      "base_currency_code": "USD",
      "default_display_currency_code": "USD",
      "timezone": "America/Chicago",
      "weight_unit": "lbs",
      "base_url": "http://magento2.vagrant193/",
      "base_link_url": "http://magento2.vagrant193/",
      "base_static_url": "http://magento2.vagrant193/pub/static/version1536249714/",
      "base_media_url": "http://magento2.vagrant193/pub/media/",
      "secure_base_url": "http://magento2.vagrant193/",
      "secure_base_link_url": "http://magento2.vagrant193/",
      "secure_base_static_url": "http://magento2.vagrant193/pub/static/version1536249714/",
      "secure_base_media_url": "http://magento2.vagrant193/pub/media/"
    }
  }
}
```

### Query a store's theme

The following query returns information about the store's default title, keywords, and welcome text.

**Request:**

```graphql
{
  storeConfig {
    default_title
    default_keywords
    welcome
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "default_title": "Magento Enterprise Edition",
      "default_keywords": "Magento, Varien, E-commerce",
      "welcome": "Default welcome msg!"
    }
  }
}
```

### Query a store's CMS configuration

The following query returns information about the store's content pages.

**Request:**

```graphql
{
  storeConfig {
    front
    cms_home_page
    no_route
    cms_no_route
    cms_no_cookies
    show_cms_breadcrumbs
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "front": "cms",
      "cms_home_page": "home",
      "no_route": "cms/noroute/index",
      "cms_no_route": "no-route",
      "cms_no_cookies": "enable-cookies",
      "show_cms_breadcrumbs": 1
    }
  }
}
```

### Query a store's Catalog configuration

The following query returns information about the store's catalog configuration.

**Request:**

```graphql
{
  storeConfig {
    product_url_suffix
    category_url_suffix
    title_separator
    list_mode
    grid_per_page_values
    list_per_page_values
    grid_per_page
    list_per_page
    catalog_default_sort_by
  }
}
```

**Response:**

```json
{
  "data": {
    "storeConfig": {
      "product_url_suffix": ".html",
      "category_url_suffix": ".html",
      "title_separator": "-",
      "list_mode": "grid-list",
      "grid_per_page_values": "9,15,30",
      "list_per_page_values": "5,10,15,20,25",
      "grid_per_page": 9,
      "list_per_page": 10,
      "catalog_default_sort_by": "position"
    }
  }
}
```

## Output attributes

### Supported storeConfig attributes

Use the `storeConfig` attributes to retrieve information about the store's configuration; such as, locale, currency codes, and secure and unsecure URLs.

Attribute |  Data Type | Description | Example
--- | --- | --- | ---
`base_currency_code` | String | The code representing the currency in which Magento processes all payment transactions | `USD`
`base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url` | `http://magentohost.example.com/`
`base_static_url` | String | The fully-qualified URL that specifies the location of static view files | `http://magentohost.example.com/pub/static/`
`base_media_url` | String | The fully-qualified URL that specifies the location of user media files | `http://magentohost.example.com/pub/media/`
`base_url` | String | The store's fully-qualified base URL | `http://magentohost.example.com/`
`code` | String | A unique identifier for the store | `default`
`default_display_currency_code` | String | The code representing the currency displayed on the store | `USD`
`id` | Integer | The ID number assigned to the store | `1`
`locale` | String | The store's locale | `en_US`
`secure_base_link_url` | String | A secure fully-qualified URL that is used to create relative links to the `base_url` | `https://magentohost.example.com/`
`secure_base_media_url` | String | The secure fully-qualified URL that specifies the location of user media files | `https://magentohost.example.com/pub/media/`
`secure_base_static_url` | String | The secure fully-qualified URL that specifies the location of static view files | `https://magentohost.example.com/pub/static/`
`secure_base_url` | String | The store's fully-qualified secure base URL | `https://magentohost.example.com/`
`timezone` | String | The store's time zone | `America/Chicago`
`website_id` | Integer | The ID number assigned to the parent website | `1`
`weight_unit` | String | The weight unit for products | `lbs`, `kgs`, etc

### Supported theme attributes

Use the `theme` attributes to retrieve information about the store's thematic elements; such as, footer and header information, copyright text, and logo information. These attributes are defined in the `ThemeGraphQl` module.

Attribute |  Data Type | Description
--- | --- | ---
`absolute_footer` | String | Contains scripts that must be included in the HTML before the closing `<body>` tag
`copyright` | String | The copyright statement that appears at the bottom of each page
`default_description` | String | The description that provides a summary of your site for search engine listings and should not be more than 160 characters in length
`default_keywords` | String | A series of keywords that describe your store, each separated by a comma
`default_title` | String | The title that appears at the title bar of each page when viewed in a browser
`demonotice` | Int | Controls the display of the demo store notice at the top of the page. Options: `0` (No) or `1` (Yes)
`head_includes` | String | Contains scripts that must be included in the HTML before the closing `<head>` tag
`head_shortcut_icon` | String | Uploads the small graphic image that appears in the address bar and tab of the browser
`header_logo_src` | String | The path to the logo that appears in the header
`logo_alt` | String | The Alt text that is associated with the logo
`logo_height` | Int | The height of your logo image in pixels
`logo_width` | Int | The width of your logo image in pixels
`title_prefix` | String | A prefix that appears before the title to create a two- or three-part title
`title_suffix` | String | A suffix that appears after the title to create a two-or three part title
`welcome` | String | Text that appears in the header of the page and includes the name of customers who are logged in

### Supported CMS attributes

Use the `cms` attributes to retrieve information about the store's default pages. These attributes are defined in the `CmsGraphQl` module.

Attribute |  Data Type | Description
--- | --- | ---
`cms_home_page` | String | Returns the name of the CMS page that identifies the home page for the store
`cms_no_cookies` | String | Identifies a specific CMS page that appears when cookies are not enabled for the browser
`cms_no_route` | String | Identifies a specific CMS page that you want to appear when a 404 “Page Not Found” error occurs
`front` | String | Indicates the landing page that is associated with the base URL
`no_route` | String | Contains the URL of the default page that you want to appear when if a 404 “Page not Found” error occurs
`show_cms_breadcrumbs` | Int | Determines if a breadcrumb trail appears on all CMS pages in the catalog. Options: `0` (No) or `1` (Yes)

### Supported Catalog attributes

Use the `catalog` attributes to retrieve information about the store's catalog. These attributes are defined in the `CatalogGraphQl` module.

Attribute |  Data Type | Description | Example
--- | --- | ---
`catalog_default_sort_by` | String | The default sort order of the search results list | `position`
`category_url_suffix` | String | The suffix applied to category pages, such as `.htm` or `.html` | `.html`
`grid_per_page` | Int | The default number of products per page in Grid View | `9`
`grid_per_page_values` | A list of numbers that define how many products can be displayed in List View  | `9,15,30`
`list_mode` | String  | The format of the search results list | `grid-list`
`list_per_page` | Int | The default number of products per page in List View | `10`
`list_per_page_values` | String | A list of numbers that define how many products can be displayed in List View | `5,10,15,20,25`
`product_url_suffix` | String | The suffix applied to product pages, such as `.htm` or `.html` | `.html`
`title_separator` | String | Identifies the character that separates the category name and subcategory in the browser title bar | `-`

## Extend configuration data

You can add your own configuration to the `storeConfig` query within your own module.

To do this, configure the constructor argument `extendedConfigData` in the `argument` node in your area-specific `etc/graphql/di.xml` file.

The following example adds an array-item to the `extendedConfigData` array within the construct of the `StoreConfigDataProvider`.

```xml
<?xml version="1.0" ?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
  <type name="Magento\StoreGraphQl\Model\Resolver\Store\StoreConfigDataProvider">
    <arguments xsi:type="array">
      <argument name="extendedConfigData">
        <item name="section_group_field" xsi:type="string">section/group/field</item>
      </argument>
    </arguments>
  </type>
</config>
```

You must also extend the type `storeConfig` within in the `etc/schema.graphqls` file, as shown below:

```graphql
type StoreConfig {
    section_group_field : String  @doc(description: "Extended Config Data - section/group/field")
}
```

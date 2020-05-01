---
group: frontend-developer-guide
title: Product layouts
functional_areas:
  - Frontend
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This topic provides information about product layouts files. Magento allows you to customize view pages for all product types in the common layout files. It is also possible to perform the customization for a particular product type or even for a concrete product page by Product Entity ID or SKU.

## Product view page

Layout file | Description
--- | ---
`catalog_product_view.xml` | Common layout. Affects all product types
`catalog_product_view_type_bundle.xml` | Layout from this file is applied to `bundle` product only
`catalog_product_view_type_configurable.xml` | Layout from this file is applied to `configurable` product only
`catalog_product_view_type_downloadable.xml` | Layout from this file is applied to `downloadable` product only
`catalog_product_view_type_grouped.xml` | Layout from this file is applied to `grouped` product only
`catalog_product_view_type_simple.xml` | Layout from this file is applied to `simple` product only
`catalog_product_view_type_virtual.xml` | Layout from this file is applied to `virtual` product only
`catalog_product_view_id_{id}.xml` | Layout from this file is applied to the specific product by `Entity ID` value. E.g. `catalog_product_view_id_45.xml`
`catalog_product_view_sku_{sku}.xml` | Layout from this file is applied to the specific product by `SKU` value. E.g. `catalog_product_view_sku_24-WG080.xml`

## Customize product view pages

Use containers on the product page to structure content in the layout. You can reference the container and add blocks to it.

Containers assign content structure to a page using container tags within a layout XML file. A container has no additional content except the content of included elements. Examples of containers include:

*  `product.info.main`
*  `product.info.price`
*  `product.info.stock.sku`
*  `product.info.form.content`
*  `product.info.extrahint`
*  `product.info.social`
*  `product.info.media`

### Example

```xml
<move element="product.info.social" destination="product.info.main" before="product.info.price"/>
```

## Checkout cart configure page

Layout file | Description
--- | ---
`checkout_cart_configure.xml` | Common layout. Affects all product types
`checkout_cart_configure_type_bundle.xml` | Layout from this file is applied to `bundle` product only
`checkout_cart_configure_type_configurable.xml` | Layout from this file is applied to `configurable` product only
`checkout_cart_configure_type_downloadable.xml` | Layout from this file is applied to `downloadable` product only
`checkout_cart_configure_type_simple.xml` | Layout from this file is applied to `simple` product only
`checkout_cart_item_renderers.xml` | Layout from this file is applied to renderer's cart page items

## Wishlist item configure page

Layout file | Description
--- | ---
`wishlist_index_configure.xml` | Common layout. Affects all product types
`wishlist_index_configure_type_bundle.xml` | Layout from this file is applied to `bundle` product only
`wishlist_index_configure_type_configurable.xml` | Layout from this file is applied to `configurable` product only
`wishlist_index_configure_type_downloadable.xml` | Layout from this file is applied to `downloadable` product only
`wishlist_index_configure_type_grouped.xml` | Layout from this file is applied to `grouped` product only
`wishlist_index_configure_type_simple.xml` | Layout from this file is applied to `simple` product only

For setting a custom layout on specific category, product, and CMS pages, see [Common layout customization tasks]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#create-cms-pageproductcategory-specific-layouts).

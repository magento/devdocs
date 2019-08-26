---
group: frontend-developer-guide
title: Product layouts
functional_areas:
  - Frontend
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This topic provides information about product layouts files. Magento allows you to customize view pages for all product types in the common layout files or particular product types.

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

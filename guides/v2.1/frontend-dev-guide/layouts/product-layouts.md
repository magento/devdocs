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
`catalog_product_view_type_bundle.xml` | Layout from this file is applied to `bundle` product only, provide the list of numerous configuration options.
`catalog_product_view_type_configurable.xml` | Layout from this file is applied to `configurable` product only, display list of options based attributes.
`catalog_product_view_type_downloadable.xml` | Layout from this file is applied to `downloadable` product only, product is a digital file that a customer can be downloaded (eBook, software application, video etc).
`catalog_product_view_type_grouped.xml` | Layout from this file is applied to `grouped` product only, can be order of each product in specific quantity list preferred by customer.
`catalog_product_view_type_simple.xml` | Layout from this file is applied to `simple` product only, It show the primary unit of index.
`catalog_product_view_type_virtual.xml` | Layout from this file is applied to `virtual` product only, display Digital product.

## Checkout cart configure page

Layout file | Description
--- | ---
`checkout_cart_configure.xml` | Common layout. Affects all product types
`checkout_cart_configure_type_bundle.xml` | Layout from this file is applied to `bundle` product only
`checkout_cart_configure_type_configurable.xml` | Layout from this file is applied to `configurable` product only
`checkout_cart_configure_type_downloadable.xml` | Layout from this file is applied to `downloadable` product only
`checkout_cart_configure_type_simple.xml` | Layout from this file is applied to `simple` product only

## Wishlist item configure page

Layout file | Description
--- | ---
`wishlist_index_configure.xml` | Common layout. Affects all product types
`wishlist_index_configure_type_bundle.xml` | Layout from this file is applied to `bundle` product only
`wishlist_index_configure_type_configurable.xml` | Layout from this file is applied to `configurable` product only
`wishlist_index_configure_type_downloadable.xml` | Layout from this file is applied to `downloadable` product only
`wishlist_index_configure_type_grouped.xml` | Layout from this file is applied to `grouped` product only
`wishlist_index_configure_type_simple.xml` | Layout from this file is applied to `simple` product only

---
group: graphql
title: RoutableInterface attributes
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/routable/
status: migrated
---

Some Magento entities are "routable", meaning that they have URLs and can serve as the model for a rendered page. The following implementations of the `RoutableInterface` allow you to return details in the [`route` query]({{page.baseurl}}/graphql/queries/route.html).

*  [BundleProduct]({{page.baseurl}}/graphql/interfaces/bundle-product.html)
*  [CategoryTree]({{page.baseurl}}/graphql/queries/category-list.html#Categories)
*  [CmsPage]({{page.baseurl}}/graphql/queries/cms-page.html)
*  [ConfigurableProduct]({{page.baseurl}}/graphql/interfaces/configurable-product.html)
*  [DownloadableProduct]({{page.baseurl}}/graphql/interfaces/downloadable-product.html)
*  [GiftCardProduct]({{page.baseurl}}/graphql/interfaces/gift-card-product.html)
*  [GroupedProduct]({{page.baseurl}}/graphql/interfaces/grouped-product.html)
*  [SimpleProduct]({{page.baseurl}}/graphql/interfaces/simple-product.html)
*  [VirtualProduct]({{page.baseurl}}/graphql/interfaces/virtual-product.html)

## RoutableInterface attributes

{% include graphql/routable-interface.md %}

## Sample Query

The following query returns information about the specified URL key. The query contains multiple fragments so that it can be used for categories, CMS pages, and multiple product types.

**Request:**

```graphql
{
  route(url: "teton-pullover-hoodie.html") {
    __typename
    relative_url
    redirect_code
    type
    ... on SimpleProduct {
      sku
      url_key
      uid
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
    }
    ... on ConfigurableProduct {
      sku
      image {
        label
      }
      uid
      url_key
      url_suffix
      url_rewrites {
        parameters {
          name
          value
        }
      }
      media_gallery {
        url
      }
    }
    ... on CategoryTree {
      uid
      product_count
      canonical_url
      products {
        total_count
        items {
          sku
          uid
        }
      }
    }
    ... on CmsPage {
      content
      content_heading
      meta_title
      meta_keywords
      meta_description
      page_layout
      identifier
      title
      url_key
    }
    ... on GroupedProduct {
      canonical_url
      sku
      items {
        product {
          uid
          url_key
        }
      }
    }
    ... on BundleProduct {
      items {
        sku
        required
        type
        title
        options {
          uid
          is_default
          can_change_quantity
          price_type
          quantity
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "route": {
      "__typename": "ConfigurableProduct",
      "relative_url": "teton-pullover-hoodie.html",
      "redirect_code": 0,
      "type": "PRODUCT",
      "sku": "MH02",
      "image": {
        "label": "Teton Pullover Hoodie"
      },
      "uid": "ODY=",
      "url_key": "teton-pullover-hoodie",
      "url_suffix": ".html",
      "url_rewrites": [
        {
          "parameters": [
            {
              "name": "id",
              "value": "86"
            }
          ]
        },
        {
          "parameters": [
            {
              "name": "id",
              "value": "86"
            },
            {
              "name": "category",
              "value": "16"
            }
          ]
        },
        {
          "parameters": [
            {
              "name": "id",
              "value": "86"
            },
            {
              "name": "category",
              "value": "13"
            }
          ]
        }
      ],
      "media_gallery": [
        {
          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_main_1.jpg"
        },
        {
          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_alt1_1.jpg"
        },
        {
          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_back_1.jpg"
        }
      ]
    }
  }
}
```

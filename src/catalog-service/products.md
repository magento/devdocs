---
group: catalog-service
title: products query
ee_only: True
---

The Catalog Service for Adobe Commerce `products` query returns details about the SKUs specified as input. Although this query has the same name as  the [`products` query]({{site.baseurl}}/guides/v2.4/graphql/queries/products.html) that is provided with core Adobe Commerce and Magento Open Source, there are some differences.

The Catalog Service query requires one or more SKU values as input. The query is primarily designed to retrieve information to render the following types of content:

*  Product detail pages - You can provide full details about the product identified by the specified SKU.

*  Product compare pages - You can retrieve selected information about multiple products, such as the name, price and image.

<!--
{:.bs-callout-tip}
Use the Live Search [`productSearch` query]({{site.baseurl}}/live-search/product-search.html) to return product listing page content.
-->

The `ProductView` output object is significantly different than the core `products` query `Products` output object. Key differences include:

*  Products are either simple or complex. Simple and virtual products map to `SimpleProductView`. All other product types map to `ComplexProductView`. Simple products have defined prices. Complex products have price ranges. Since complex products are comprised of multiple simple products, they have access to simple product prices.

*  Merchant-defined attributes are exposed in a top-level container and indicate their storefront roles. Roles include Show on PDP, Show on PLP, and Show on Search Results.

*  Images are also accessible as a top-level container and can be filtered by their role. An image can have a base, small, or thumbnail role.

<!-- Cross-reference provides full details about Catalog Service capabilities. -->

## Syntax

```graphql
products (skus [String]) [ProductView]
```

## Required headers

You must specify the following HTTP headers to run this query.

{% include graphql/catalog-service/headers.md %}

## Example usage

### Return details about a simple product

The following query returns details about a simple product.

**Request:**

```graphql
query {
  products(skus: ["24-MB02"]) {
    id
    sku
    name
    url
    description
    shortDescription
    attributes(roles: ["visible in Search"]) {
      name
      label
      value
      roles
    }
    ... on SimpleProductView {
      price {
        regular {
          amount {
            value
            currency
          }
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
    "products": [
      {
        "id": "TWpRdFRVSXdNZwBaR1ZtWVhWc2RBAE16UmxNamMwTUdFdE56UTNNeTAwWXpnNUxUZzNNekF0TlRjME1ETm1ZMlV5TjJGbABiV0ZwYmw5M1pXSnphWFJsWDNOMGIzSmwAWW1GelpRAFRVRkhVMVJITURBMU5UYzVNRE00",
        "sku": "24-MB02",
        "name": "Fusion Backpack 567890",
        "url": "http://example.com/fusion-backpack.html",
        "description": "<p>With the Fusion Backpack strapped on, every trek is an adventure - even a bus ride to work. That's partly because two large zippered compartments store everything you need, while a front zippered pocket and side mesh pouches are perfect for stashing those little extras, in case you change your mind and take the day off.</p>\r\n<ul>\r\n<li>Durable nylon construction.</li>\r\n<li>2 main zippered compartments.</li>\r\n<li>1 exterior zippered pocket.</li>\r\n<li>Mesh side pouches.</li>\r\n<li>Padded, adjustable straps.</li>\r\n<li>Top carry handle.</li>\r\n<li>Dimensions: 18\" x 10\" x 6\".</li>\r\n</ul>",
        "shortDescription": "",
        "attributes": [
          {
            "name": "activity",
            "label": "Activity",
            "value": [
              "Hiking",
              "School",
              "Yoga"
            ],
            "roles": [
              "visible in PDP",
              "visible in compare list",
              "visible in Search"
            ]
          },
          {
            "name": "features_bags",
            "label": "Features",
            "value": [
              "Hydration Pocket",
              "Audio Pocket",
              "Waterproof",
              "Lightweight"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "material",
            "label": "Material",
            "value": [
              "Burlap",
              "Nylon",
              "Polyester"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "strap_bags",
            "label": "Strap/Handle",
            "value": [
              "Adjustable",
              "Double",
              "Padded"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "style_bags",
            "label": "Style Bags",
            "value": [
              "Backpack",
              "Laptop"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          }
        ],
        "price": {
          "regular": {
            "amount": {
              "value": 59,
              "currency": "USD"
            }
          }
        }
      }
    ]
  }
}
```

### Return details about a complex product {#complex-product-example}

The following query returns details about a configurable product.

**Request:**

```graphql
query {
  products(skus: ["MH12"]) {
    __typename
    id
    sku
    name
    url
    description
    shortDescription
    attributes(roles: ["visible in Search"]) {
      name
      label
      value
      roles
    }
    ... on ComplexProductView {
      priceRange {
        maximum {
          regular {
            amount {
              value
              currency
            }
          }
        }
        minimum {
          regular {
            amount {
              value
              currency
            }
          }
        }
      }
      options {
        id
        required
        title
        values {
          id
          title
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
    "products": [
      {
        "__typename": "ComplexProductView",
        "id": "VFVneE1nAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",
        "sku": "MH12",
        "name": "Ajax Full-Zip Sweatshirt 2",
        "url": "http://example.com/ajax-full-zip-sweatshirt.html",
        "description": "<p>The Ajax Full-Zip Sweatshirt makes the optimal layering or outer piece for archers, golfers, hikers and virtually any other sportsmen. Not only does it have top-notch moisture-wicking abilities, but the tight-weave fabric also prevents pilling from repeated wash-and-wear cycles.</p>\r\n<p>&bull; Mint striped full zip hoodie.<br />&bull; 100% bonded polyester fleece.<br />&bull; Pouch pocket.<br />&bull; Rib cuffs and hem. <br />&bull; Machine washable.</p>",
        "shortDescription": "",
        "attributes": [
          {
            "name": "climate",
            "label": "Climate",
            "value": [
              "All-Weather",
              "Cool",
              "Indoor",
              "Spring",
              "Windy"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "customattribute",
            "label": "customAttribute",
            "value": "asd",
            "roles": [
              "visible in PDP",
              "visible in PLP",
              "visible in Search"
            ]
          },
          {
            "name": "material",
            "label": "Material",
            "value": [
              "Fleece",
              "Polyester"
            ],
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "pattern",
            "label": "Pattern",
            "value": "Striped",
            "roles": [
              "visible in PDP",
              "visible in Search"
            ]
          },
          {
            "name": "testtttattribute",
            "label": "testtttAttribute",
            "value": "asd",
            "roles": [
              "visible in PDP",
              "visible in PLP",
              "visible in Search"
            ]
          }
        ],
        "priceRange": {
          "maximum": {
            "regular": {
              "amount": {
                "value": 69,
                "currency": "USD"
              }
            }
          },
          "minimum": {
            "regular": {
              "amount": {
                "value": 69,
                "currency": "USD"
              }
            }
          }
        },
        "options": [
          {
            "id": "color",
            "required": false,
            "title": "Color",
            "values": [
              {
                "id": "Y29uZmlndXJhYmxlLzkzLzU5",
                "title": "Blue"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzkzLzY3",
                "title": "Red"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzkzLzYy",
                "title": "Green"
              }
            ]
          },
          {
            "id": "size",
            "required": false,
            "title": "Size",
            "values": [
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzU=",
                "title": "XS"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzY=",
                "title": "S"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzc=",
                "title": "M"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",
                "title": "L"
              },
              {
                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzk=",
                "title": "XL"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Output fields

{% include graphql/catalog-service/product-view.md %}

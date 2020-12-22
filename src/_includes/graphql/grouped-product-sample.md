```graphql
{
  products(filter:
    {sku: {eq: "24-WG085_Group"}}
  )
  {
    items {
      id
      name
      sku
      __typename
      ... on GroupedProduct {
        items{
          qty
          position
          product{
            sku
            name
            __typename
            url_key
          }
        }
      }
    }
  }
}
```

{% collapsible Response %}

```json
{
  "data": {
    "products": {
      "items": [
        {
          "id": 45,
          "name": "Set of Sprite Yoga Straps",
          "sku": "24-WG085_Group",
          "__typename": "GroupedProduct",
          "items": [
            {
              "qty": 0,
              "position": 0,
              "product": {
                "sku": "24-WG085",
                "name": "Sprite Yoga Strap 6 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-6-foot"
              }
            },
            {
              "qty": 0,
              "position": 1,
              "product": {
                "sku": "24-WG086",
                "name": "Sprite Yoga Strap 8 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-8-foot"
              }
            },
            {
              "qty": 0,
              "position": 2,
              "product": {
                "sku": "24-WG087",
                "name": "Sprite Yoga Strap 10 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-10-foot"
              }
            }
          ]
        }
      ]
    }
  }
}
```

{% endcollapsible %}
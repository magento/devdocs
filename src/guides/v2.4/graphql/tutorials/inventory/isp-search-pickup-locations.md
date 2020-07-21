---
layout: tutorial
group: graphql
title: Step 4. Search for in-store pickup locations
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 40
functional_areas:
  - Integration
---

Assuming all physical products the customer selected are eligible for in-store pickup, Magento displays the "Pick in Store" option on the checkout page. Use the [`pickupLocations` query]({{page.baseurl}}/) to return a list of places the customer can pick up their order.

The example below search for locations that are in a 50 km radius of the US ZIP code 10101. The query returns three stores, listed in proximity to the specified ZIP code.

**Headers:**

Not applicable

**Request:**

```graphql
{
  pickupLocations(
    area:{
      radius: 50
      search_term: "10101:US"
    }
    pageSize: 5
    currentPage: 1
    sort: {distance: ASC}
  ) {
    items {
      pickup_location_code
      name
      description
      country_id
      region_id
      city
      street
      postcode
      phone
    },
    total_count
    page_info {
      page_size
      current_page
      total_pages
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "pickupLocations": {
      "items": [
        {
          "pickup_location_code": "manhattan1",
          "name": "Manhatton (Greenwich Village) Store",
          "description": "Greenwich Village, Manhattan",
          "country_id": "US",
          "region_id": 43,
          "city": "New York",
          "street": "70 W. 10th St",
          "postcode": "10011",
          "phone": "555 838-4500"
        },
        {
          "pickup_location_code": "brooklyn",
          "name": "Brooklyn (Williamsburg) Store",
          "description": "Williamsburg, Brooklyn",
          "country_id": "US",
          "region_id": 43,
          "city": "Brooklyn",
          "street": "263 S 4th St",
          "postcode": "11211",
          "phone": "555 737-8088"
        },
        {
          "pickup_location_code": "huntington1",
          "name": "Long Island (Huntington) Store",
          "description": "Huntington, Long Island",
          "country_id": "US",
          "region_id": 43,
          "city": "Huntington",
          "street": "55 Gerard St,",
          "postcode": "11743",
          "phone": "555 939-4444"
        }
      ],
      "total_count": 3,
      "page_info": {
        "page_size": 5,
        "current_page": 1,
        "total_pages": 1
      }
    }
  }
}
```

## Verify this step {#verify-step}

This step cannot be verified from the Admin.

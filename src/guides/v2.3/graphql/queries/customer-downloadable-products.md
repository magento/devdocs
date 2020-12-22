---
group: graphql
title: customerDownloadableProducts query
---

Use the `customerDownloadableProducts` query to retrieve the list of purchased downloadable products for the logged-in customer.

## Syntax

`{customerDownloadableProducts: {CustomerDownloadableProducts}}`

## Example usage

The following example returns the list of purchased downloadable products for the logged-in customer.

**Request:**

```graphql
{
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customerDownloadableProducts": {
      "items": [
        {
          "date": "2019-03-04 20:48:32",
          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NTcwMTEwMCAxNTUxNzMyNTEyMTExNTE%2C/",
          "order_increment_id": "000000004",
          "remaining_downloads": "Unlimited",
          "status": "pending"
        },
        {
          "date": "2019-03-04 20:48:32",
          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NzM0OTkwMCAxNTUxNzMyNTEyMjEyNTA%2C/",
          "order_increment_id": "000000004",
          "remaining_downloads": "Unlimited",
          "status": "pending"
        }
      ]
    }
  }
}
```

## Output attributes

The `CustomerDownloadableProducts` object contains the following attribute.

Attribute | Type | Description
--- | --- | ---
`items` | [[CustomerDownloadableProduct]](#custDownloadProduct) | List of purchased downloadable items

### CustomerDownloadableProduct object {#custDownloadProduct}

The `CustomerDownloadableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`date` | String | The date and time the purchase was made
`download_url` | String | The fully qualified URL to the download file
`order_increment_id` | String | The purchase order ID
`remaining_downloads` | String | Determines the number of times the customer can download the product
`status` | String | Determines the stage in the order workflow when the download becomes available. Options are `Pending` and `Invoiced`

## Errors

Error | Description
--- | ---
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

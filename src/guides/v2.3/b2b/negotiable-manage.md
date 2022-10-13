---
group: b2b-developer-guide
subgroup: 10_REST
title: Manage negotiable quotes
menu_title: Manage negotiable quotes
menu_order: 32
ee_only: True
level3_menu_node: level3child
level3_subgroup: nq
functional_areas:
  - B2B
  - Integration
---

This topic describes the calls required to initiate a negotiable quote and to prepare it to be converted to an order.

 {:.bs-callout-info}
All negotiable quote calls require an admin authorization token.

**REST Endpoints:**

```json
POST /V1/negotiableQuote/request
POST /V1/negotiableQuote/submitToCustomer
POST /V1/negotiableQuote/decline
POST /V1/negotiableQuote/pricesUpdated
GET /V1/negotiableQuote/:quoteId/comments
GET /V1/negotiableQuote/attachmentContent
PUT /V1/negotiableQuote/:quoteId/shippingMethod
```

**NegotiableQuoteManagementInterface Parameters:**

The following table lists the parameters defined in `CompanyInterface`.

Name | Description | Format | Requirements
--- | --- | --- |---
`quoteId` | Identifies the target quote for the operation. | integer | Required
`quoteName` | The name of the quote to be created. | string | Required
`comment` | The comment to add to the quote. | string | Optional
`files` | An array of files to add to the quote | array | Optional

The buyer or the seller can optionally attach up to 10 files to provide details about the quote. Each file must be converted into base64.

The `files` array contains the following parameters

Name | Description | Format | Requirements
--- | --- | --- |---
`base64_encoded_data` | A string in base 64 that defines the contents of the added file | string | Required
`type` | Defines the type of file, such as `text/plain` or `application/pdf`| string | Optional
`name` | The name of the file to be uploaded, such as `quote.txt` or `quote.pdf`. | string | Required

### Request a negotiable quote

Before negotiable quote can begin, the following conditions must be met:

*  A regular Magento quote has been created (`POST /V1/customers/:customerId/carts` or `POST /V1/customers/carts/mine`)
*  The quote contains items (`POST /V1/carts/:quoteId/items`)

If the negotiable quote requires a shipping address (for negotiation or tax calculations), you can add it to the standard quote before initiating the negotiable quote (`POST /V1/carts/:cartId/shipping-information`)

{:.bs-callout-info}
Requesting a negotiable quote requires an admin authorization token.

**Service Name:**

`negotiableQuoteNegotiableQuoteManagementV1`

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiableQuote/request`

**Payload:**

```json
{
  "quoteId": 3,
  "quoteName": "First quote",
  "comment": "Requesting a 5% discount",
  "files": [
    {
      "base64_encoded_data": "VGhhbmsgeW91IGZvciByZWFkaW5nIHRoZSBNYWdlbnRvIEIyQiBkb2N1bWVudGF0aW9uLg==",
      "name": "quote.txt"
    }
  ]
}
```

**Response:**

`true`, indicating the request was successful

Magento creates a negotiable quote in the `Created` state.

### Submit a negotiable quote to a buyer

When you submit a negotiable quote to the buyer, the status for the buyer changes to "Updated". The buyer can subsequently edit or update the quote.

The seller can send a request to submit the quote to the buyer. The request can be submitted only for quotes in the following system states:

*  Created
*  Processing by admin
*  Submitted by customer

When the quote is submitted to the buyer:

*  Magento checks catalog prices (price per item), cart rules, and discounts then recalculates the prices and taxes. The shipping price and the negotiated price are not affected (if they are entered into the quote).
*  Items that are no longer active or available for this buyer are removed from quote and prices are recalculated.
*  The quote state is changed to Submitted by admin.

**Service Name:**

`negotiableQuoteNegotiableQuoteManagementV1`

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiableQuote/submitToCustomer`

**Payload:**

```json
{
  "quoteId": 3,
  "comment": "It'd be our pleasure. Please proceed with your order."
}
```

**Response:**

`true`, indicating the request was successful

### Update a quote

Use the `PUT /V1/negotiableQuote/:quoteId` call to update a quote. See [Update a negotiable quote]({{ page.baseurl }}/b2b/negotiable-update.html) for use cases.

### Recalculate prices

The process of completing a negotiable quote can take days, or even longer. During that time, the prices for the items in the quote may have changed directly or indirectly.  For example, someone could have changed prices in the shared catalogs or adjusted price rules, and the prices in the negotiable quote are stale. This call refreshes item prices, taxes, discounts, cart rules in the negotiable quote. Quotes that are locked for the seller will not be updated.

The request can be applied to one or more quotes at the same time.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiableQuote/pricesUpdated`

**Payload:**

```json
{
  "quoteIds": [3]
}
```

**Response:**

`true`, indicating the request was successful

### Set the shipping method

To set the shipping method, the quote must be in the `created`, `processing_by_admin` or `submitted_by_customer`. In addition, the quote must have a shipping address but no shipping method or shipping price.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/negotiableQuote/3/shippingMethod`

**Payload:**

```json
{
  "shippingMethod": "fixedrate"
}
```

**Response:**

### Decline a quote

The seller can send a request to decline the quote. The request can be submitted only for quotes in the following system states:

*  Created
*  Processing by admin
*  Submitted by customer

When you decline a quote, all custom pricing will be removed from the quote. The buyer will be able to place an order using their standard catalog prices and discounts.

**Service Name:**

`negotiableQuoteNegotiableQuoteManagementV1`

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiableQuote/decline`

**Payload:**

```json
{
  "quoteId": 80,
  "reason": "Your order is too large. "
}
```

**Response:**

`true`, indicating the request was successful

## Miscellaneous operations

These tasks are not essential for completing a negotiable quote, but might be useful

### List all comments for a quote

Magento returns all the comments associated with the specified quote ID. The comments are listed in chronological order, with the oldest comment listed first. A `creator_type` value of `3` indicates the buyer made the comment. If the value is `2`, the seller commented.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/negotiableQuote/87/comments`

**Payload:**

Not applicable

**Response:**

```json
[
  {
    "entity_id": 6,
    "parent_id": 87,
    "creator_type": 3,
    "is_decline": 0,
    "is_draft": 0,
    "creator_id": 1,
    "comment": "Requesting a 5% discount",
    "created_at": "2017-06-01 21:14:51",
    "attachments": [
    {
      "attachment_id": 1,
      "comment_id": 12,
      "file_name": "hello.txt",
      "file_path": "/h/e/hello.txt",
      "file_type": null
    }
    ]
  },
  {
    "entity_id": 7,
    "parent_id": 87,
    "creator_type": 2,
    "is_decline": 0,
    "is_draft": 0,
    "creator_id": 1,
    "comment": "We cannot discount Configurable Product 1, because the price is already discounted. We can adjust the overall price so the remaining items are discounted 5%. Please let us know whether this is acceptable. ",
    "created_at": "2017-06-01 21:29:15",
    "attachments": []
  },
  {
    "entity_id": 8,
    "parent_id": 87,
    "creator_type": 3,
    "is_decline": 0,
    "is_draft": 0,
    "creator_id": 1,
    "comment": "That is fine. Please apply the discounts to our order.",
    "created_at": "2017-06-01 21:30:30",
    "attachments": []
  },
  {
    "entity_id": 9,
    "parent_id": 87,
    "creator_type": 2,
    "is_decline": 0,
    "is_draft": 0,
    "creator_id": 1,
    "comment": "We&#039;re taking $27.50 off your quote total. That&#039;s 5% of the cost of the other items in your cart.",
    "created_at": "2017-06-01 21:40:19",
    "attachments": []
  },
  {
    "entity_id": 10,
    "parent_id": 87,
    "creator_type": 3,
    "is_decline": 0,
    "is_draft": 0,
    "creator_id": 1,
    "comment": "Added a shipping address",
    "created_at": "2017-06-01 21:43:03",
    "attachments": []
  },
  {
    "entity_id": 11,
    "parent_id": 87,
    "creator_type": 2,
    "is_decline": 0,
    "is_draft": 0,
    "creator_id": 1,
    "comment": "OK",
    "created_at": "2017-06-01 21:44:16",
    "attachments": []
  }
]
```

### Retrieve a negotiable quote attachment

Use the `attachmentContent` call to retrieve the files (in base64 format) attached to a negotiable quote.

`negotiableQuoteAttachmentContentManagementV1`

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/negotiableQuote/attachmentContent`

**Payload:**

Not applicable

**Response:**

```json
{
  "quoteId": 2,
  "quoteName": "First quote",
  "files": [
    {
      "base64_encoded_data": "VGhhbmsgeW91IGZvciByZWFkaW5nIHRoZSBNYWdlbnRvIEIyQiBkb2N1bWVudGF0aW9uLg==",
      "name": "quote.txt"
    }
  ]
}
```

## Related information

*  [Integrate with the NegotiableQuote module]({{ page.baseurl }}/b2b/negotiable-quote.html)
*  [Update a negotiable quote]({{ page.baseurl }}/b2b/negotiable-update.html)
*  [Negotiable quote checkout]({{ page.baseurl }}/b2b/negotiable-checkout.html)
*  [Place a negotiable quote order]({{ page.baseurl }}/b2b/negotiable-order-workflow.html)

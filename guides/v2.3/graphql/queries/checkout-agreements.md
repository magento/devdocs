---
group: graphql
title: checkoutAgreements query
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
---

The `checkoutAgreements` query retrieves checkout agreements. The query will always return an empty array when the
**Enable Terms and Conditions** option is set to **No**.  (The config path is `checkout/options/enable_agreements`.)

## Syntax

`{checkoutAgreements {CheckoutAgreement}}`

## Example usage

The following query returns enabled checkout agreements.

**Request:**

```graphql
{
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "checkoutAgreements": [
      {
        "agreement_id": 1,
        "checkbox_text": "I agree to the terms of sale",
        "content": "<p><strong>Agreement Contents</strong></p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
        "content_height": "22px",
        "is_html": true,
        "mode": "AUTO",
        "name": "My Agreement"
      }
    ]
  }
}
```

## Output attributes

The `CheckoutAgreements` object contains an array of [`CheckoutAgreement`](#checkoutAgreementAttributes) objects.

### CheckoutAgreement attributes {#checkoutAgreementAttributes}

The `CheckoutAgreement` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`agreement_id` | Integer! | Checkout Agreement identifier
`checkbox_text` | String! | Label of the Checkout Agreement checkbox
`content` | String! | The content of the Checkout Agreement. The value can be in  plain text or in HTML
`content_height` | String | CSS height of Checkout Agreement
`is_html` | Boolean! | Is Checkout Agreement content in HTML format
`mode` | String! | Indicates whether terms and conditions are applied manually (`MANUAL`) or automatically (`AUTO`)
`name` | String! | Checkout Agreement name

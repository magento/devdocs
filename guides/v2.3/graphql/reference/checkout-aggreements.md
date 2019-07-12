---
group: graphql
title: Directory endpoint
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
---

To retrieve enabled checkout agreements. The query will always return an empty array when
`checkout/options/enable_agreements` is disabled.

### CheckoutAgreement attributes {#countryAttributes}

The `CheckoutAgreement` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`agreement_id` | Integer | Checkout Agreement identifier
`name` | String | Checkout Agreement name
`content` | String | Checkout Agreement plaintext or HTML content
`content_height` | String | CSS height of Checkout Agreement
`checkbox_text` | String | Checkout Agreement checkbox label
`is_html` | Boolean | Is Checkout Agreement content in HTML format
`mode` | [CheckoutAgreementMode](#checkoutAgreementMode) | An array of regions within a particular country

### CheckoutAgreementMode enumerable {#checkoutAgreementMode}
- AUTO
- MANUAL

#### Syntax

`{checkoutAgreements {CheckoutAgreement}}`

### Example usage

The following query returns enabled checkout agreements.

**Request** 

```text
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

**Response**

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

---
group: graphql
title: recaptchaV3Config query
pwa_only: True
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/recaptcha-v3-config/
layout: migrated
---

The `recaptchaV3Config` query returns information about the reCaptcha V3 configuration.

## Syntax

`{recaptchaV3Config {ReCaptchaConfigurationV3}}`

## Example usage

The following query returns information about the reCaptchaV3 configuration:

**Request:**

```graphql
query {
  recaptchaV3Config {
    minimum_score
    website_key
    badge_position
    failure_message
    forms
  }
}
```

**Response:**

```json
{
  "data": {
    "recaptchaV3Config": {
      "minimum_score": 0.5,
      "website_key": "<key-value>",
      "badge_position": "inline",
      "failure_message": "reCAPTCHA verification failed.",
      "forms": [
        "PLACE_ORDER",
        "CUSTOMER_FORGOT_PASSWORD",
        "CUSTOMER_EDIT",
        "CUSTOMER_LOGIN",
        "CUSTOMER_CREATE",
        "BRAINTREE"
      ]
    }
  }
}
```

## Input attributes

None

## Output attributes

Attribute | Data Type | Description
--- | --- | ---
`badge_position` | String! | The position of the invisible reCAPTCHA badge on each page
`failure_message` | String! | The message that appears to the user if validation fails
`forms` | [ReCaptchaFormEnum!]! | A list of forms on the storefront that have been configured to use reCAPTCHA V3
`language_code` | String | A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging
`minimum_score` | Float! | The minimum score that identifies a user interaction as a potential risk
`website_key` | String! | The website key generated when the Google reCAPTCHA account was registered

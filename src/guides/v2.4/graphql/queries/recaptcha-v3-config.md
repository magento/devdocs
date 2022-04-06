---
group: graphql
title: recaptchaV3Config query
pwa_only: True
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
    language_code
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
      "language_code": "",
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
`BADGE_POSITION` | String! | The position of the invisible reCAPTCHA badge on each page
`FAILURE_MESSAGE` | String! | The message that appears to the user if validation fails
`FORMS` | [ReCaptchaFormEnum!]! | A list of forms on the storefront that have been configured to use reCAPTCHA V3
`LANGUAGE_CODE` | String | A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging
`MINIMUM_SCORE` | Float! | The minimum score that identifies a user interaction as a potential risk
`WEBSITE_KEY` | String! | The website key generated when the Google reCAPTCHA account was registered

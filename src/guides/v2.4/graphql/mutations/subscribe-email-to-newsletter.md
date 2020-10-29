---
group: graphql
title: subscribeEmailToNewsletter mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `subscribeEmailToNewsletter` mutation allows guests and registered customers to sign up to receive newsletters.

## Syntax

`mutation: {subscribeEmailToNewsletter(email: String!): SubscribeEmailToNewsletterOutput}`

## Example usage

The following call subscribes an email to the store's newsletter.

**Request:**

```graphql
mutation {
  subscribeEmailToNewsletter(
    email: "email@example.com"
  ) {
    status
  }
}
```

**Response:**

```json
{
  "data": {
    "subscribeEmailToNewsletter": {
      "status": "SUBSCRIBED"
    }
  }
}
```

## Input arguments

The mutation contains a required `email` parameter that specifies the email address to be added into a newsletter subscription.

## Output attributes

The `SubscribeEmailToNewsletterOutput` object contains the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`status` | SubscriptionStatusesEnum | Contains a subscription status of specified `email` address.

### SubscriptionStatusesEnum

The `SubscriptionStatusesEnum` is a predefined set of possible subscription statuses:

Value | Description
--- | ---
`NOT_ACTIVE` | The subscription requires a confirmation. A confirmation email has been sent to specified email address to confirm the subscription.
`SUBSCRIBED` | The email address is subscribed.
`UNSUBSCRIBED` | The email address is unsubscribed.
`UNCONFIRMED` | The specified email is that of a customer who did not previously confirm a required customer registration.

The `subscribeEmailToNewsletter` mutation for the `status` field may return only the following statuses:

-  `NOT_ACTIVE`
-  `SUBSCRIBED`

## Errors

Error | Description
--- | ---
`Cannot create a newsletter subscription.` | A general error message that appears on some internal system errors. The original error is logged and can be found in the Magento logs.
`Enter a valid email address.` | The value provided in the `email` argument has an invalid format.
`Guests can not subscribe to the newsletter. You must create an account to subscribe.` | Guest subscription is disabled. Go to **Stores** > **Configuration** > **Customers** > **Newsletter** > **Subscription Options** > **Allow Guest Subscription** in the Admin to adjust the setting.
`The account sign-in was incorrect or your account is disabled temporarily.` | The email address provided in the `email` argument is that of a customer account pending confirmation.
`This email address is already subscribed.` | The email address provided in the `email` argument is already subscribed.
`You must specify an email address to subscribe to a newsletter.`| The `email` argument is empty.

---
group: graphql
title: Protected mutations
---

If CAPTCHA is enabled on pages requiring shopper input, then in most cases, the corresponding mutations that send requests to the Magento server must include the shopper's CAPTCHA response. Supply the shopper's response in the HTTP `X-Captcha` header. The exception to this policy is that you do not send the CAPTCHA response if you specify an integration authorization token in the header of the mutation.

The following table lists the forms that can be configured to require CAPTCHA. Go to **Stores** > **Configuration** > **Customers** > **Customer Configuration** > **CAPTCHA** > **Forms** to enable or disable CAPTCHA on these forms.

Form name | Mutation
--- | ---
Add Gift Card Code | `applyGiftCardToCart`
Applying Coupon Code | `applyCouponToCart`
Change password | `changeCustomerPassword`
Checkout/Placing Order | `setPaymentMethodOnCart`, `setPaymentMethodAndPlaceOrder`
Contact Us | Not applicable
Create company | Not applicable
Create user | `createCustomer`
Forgot password | Not applicable
Login | `generateCustomerToken`
Payflow Pro |  `setPaymentMethodOnCart`, `setPaymentMethodAndPlaceOrder`
Send to Friend Form | `sendEmailToFriend`
Share Wishlist Form | Not applicable

{:.ref-header}
Related topics

[Construct a request]({{page.baseurl}}/get-started/gs-web-api-request.html)

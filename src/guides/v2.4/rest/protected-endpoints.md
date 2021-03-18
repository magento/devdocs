---
group: rest-api
title: Protected endpoints
functional_areas:
  - Integration
---

If CAPTCHA is enabled on pages requiring shopper input, then in most cases, the corresponding REST endpoints that send requests to the Magento server must include the shopper's CAPTCHA response. Supply the shopper's response in the HTTP `X-Captcha` header. The exception to this policy is that you do not send the CAPTCHA response if you specify an integration authorization token in the header of the REST endpoint.

The following table lists the forms that can be configured to require CAPTCHA. Go to **Stores** > **Configuration** > **Customers** > **Customer Configuration** > **CAPTCHA** > **Forms** to enable or disable CAPTCHA on these forms.

Form name | REST endpoint
--- | ---
Add Gift Card Code | `POST /V1/carts/mine/giftCards` <br/>`POST /V1/carts/guest-carts/:cartId/giftCards`
Applying Coupon Code | `PUT /V1/carts/:cartId/coupons/:couponCode` <br/>`PUT /V1/guest-carts/:cartId/coupons/:couponCode`
Change password | `PUT /V1/customers/me/password`
Checkout/Placing Order | `POST /V1/carts/mine/payment-information` <br/>`POST /V1/carts/mine/set-payment-information` <br/>`POST /V1/guest-carts/:cartId/payment-information` <br/>`POST /V1/guest-carts/:cartId/set-payment-information`
Contact Us | Not applicable
Create company | `POST /V1/company`
Create user | `POST /V1/customers`
Forgot password | `POST /V1/customers/resetPassword`<br/>`PUT /V1/customers/password`
Login | `POST /V1/integration/customer/token`
Payflow Pro | Not applicable
Send to Friend Form | Not applicable
Share Wishlist Form | Not applicable

{:.ref-header}
Related topics

[Construct a request]({{page.baseurl}}/get-started/gs-web-api-request.html

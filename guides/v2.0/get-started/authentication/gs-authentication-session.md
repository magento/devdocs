---
layout: default
group: get-started
subgroup: 40_Authentication
title: Session-based authentication
menu_title: Session-based authentication
menu_order: 4
version: 2.0
github_link: get-started/authentication/gs-authentication-session.md
redirect_from: /guides/v1.0/get-started/authentication/gs-authentication-session.html
functional_areas:
  - Integration
---

As a customer, you log in to the Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} with your customer credentials. As an admin, you log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} with your {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %} credentials.

The Magento web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} framework uses your logged-in session information to verify your identity and authorize access to the requested resource.

Customers can access resources that are configured with `anonymous` or `self`  permission in the `webapi.xml` configuration file.

Admins can access resources that are assigned to their Magento Admin profile.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The Magento {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %} framework enables guest users to access resources that are configured with `anonymous` permission. Any user that the framework cannot authenticate through existing authentication mechanisms is considered a guest user.
</div>

For example, if a customer is logged in to the Magento storefront and the {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} invokes the `self` API, details for the logged-in customer are fetched:

`GET /rest/V1/customers/me`

Similarly, if an admin is logged in to the Magento Admin
and the JavaScript widget `Magento_Customer::group` API, details for the logged-in admin are fetched.
The web API framework establishes the identity of the admin user based on logged-in session information and authorizes access to the `Magento_Customer::group` resource.

<div class="bs-callout bs-callout-info" id="info">
The session based authentication functionality is restricted to only allow for AJAX calls and not direct browser requests due to security vulnerabilities. A developer can create a custom storefront widget that can issue requests without additional authentication steps.
</div>

## Related topic

[Configure services as web APIs]({{page.baseurl}}/extension-dev-guide/service-contracts/service-to-web-service.html)

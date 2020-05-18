---
group: configuration-guide
title: Two-Factor Authentication
functional_areas:
  - Configuration
---

Magento Two-Factor Authentication (2FA) improves security by requiring two-step authentication to access the Magento Admin for all users and from all devices. The extension supports multiple authenticators including Google Authenticator, Authy, Duo, and U2F keys. 2FA is enabled by default for all Magento Admin users, and cannot be disabled from the Magento Admin or from the command line. 2FA is not available for storefront customer accounts.

Two-Factor Authentication gives you the ability to:

-  Manage and configure authenticator settings globally or per user account.
-  Reset authenticators for users.

{:.bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/index/id/129/) for contributing these features as part of the Magento Community Engineering program.

## Magento Admin Workflows

Magento has new workflows for Admin users, including:

-  The ability to configure the 2FA provider globally or individually.
-  Admin users must set their own personal 2FA at first login.
-  Confirmation email is sent at first login to verify identity.
-  The "Trust this device" option has been removed.

For more information, see [Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) in the _Magento User Guide_.

## Headless Magento

The 2FA provider for Magento Headless can be selected with the `config:set` command.

## Magento Web API

Two-Factor Authentication is implemented for Magento Web APIs with the following changes:

-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception when the Admin user doesn’t have personal 2FA configured, and also indicates that the confirmationh email has been sent.
-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception that indicates which provider is configured for the user and suggests a provider-specific login endpoint.
-  2FA provider-specific endpoints allow each Admin user to configure a personal 2FA.
-  2FA provider-specific endpoints provide tokens for username, password, and 2FA code.


<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#808080&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2020-05-13T14:34:26.218Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36\&quot; etag=\&quot;1_9dYxgYtKkJoeiHUXCv\&quot; version=\&quot;13.1.1\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;3_r6wyLoFRS8J-phUPnO\&quot; name=\&quot;Page-1\&quot;&gt;7Vtbd5s4EP41Oad9SA4gLuYxcUK2e9put9ndNk97sJFtNYC8Mo7t/vodgWQQwsHxYuz2rB9sGEDAN99cNBpfoGGyvmfhfPaBRji+sIxofYFuLyzLMg0ffrhkU0h82ywEU0aiQlQRPJDvWAgNIV2SCC+UEzNK44zMVeGYpikeZ4osZIyu1NMmNFbvOg+nWBM8jMNYl34hUTYTb2EYpfwXTKYzeWdXHklCebIQLGZhRFcVEbq7QENGaVZs0dE3/gKWEYcjADE/r7hSAlVelayHOAagg2IXNsTVylGD1N+V4TSrPlSw44Lr76Hnf178vR58fQqePlI8eUouvWKU5zBeCnA+YbagacivtILrCz6oG8MNbkYMtqZ8C/QyIdMlwzByIIDINhJdNqPJaAkqulnNSIYf5uGYH1kBl0A2yxKOgwmb4taYZXi9853MCj73mCY4Yxs4RVyAPLu4RDDRGqBif1XqFdRXyGZVnUqVhoJL0+3YVlUFAsVXIOpriH7G2ZKlCxBiIC/Lnw4eLue3xFGA7YYJBykdLfjPnNFnsBSWnxphHWm6TCOuhFujF7Sdgaui7Q90tAcNaHvHAtt8Ce0RhjdjuXN5wunZoecO/BOjJ71YBb17nGIWZpjjt1zk6C3wmOEsx6DuCFiJdbjALtii8WYUMk7WtyfH20SWgrfjnJqt8h0qeL+AktmO0oTE8ZDG4FP4tejWvjMDB+RhTKYpyGI8yboB06o52q1TrYCJmhytfywwXbcdTBxB3Be7lGUzOuWR7a6U3qikLM95T+lcgPwNZ9lGJDHhMqNNROU3ehlZeC66ZGO8Bz2ykE1x1ha0dVUxHIcZeVYfpHsSIw33Ik9QolUlsE3ykPcBkqoUwIMLSQjfw/fvTu4hkKuS2tY53bODsPfgdBxDnoxVMCAPnfPjOI0eMnDfum8w8g8/NWMQDitHJhNxpAufa6iINnmJBkDR0QB1GgAtotiEpjwxn4TCJt1/ljxrvxmCmZKcxR/xqhTLkLcNglLw6beHP/IsOfgLsAlImuEpRFBCIeMIwigh/FdkIPX4uVsSkee6aDEP063MuykfjcfpNExw5WGRSNzFvniM8l2G9VRT3gSeVblP072348zDxWJFWVS7cQcjmxaynd9XQMVNZXDvtmUwEDcAB9JRg6wggBTXrAxMIKuZmGI3KU3rRiZEtdjLzYnA1PNaiBMSRXnkaXJvqgPsJGz7tbBt7xe2B0ezSD1j/1FyIBup0cLU88l+UyBLn70r/qOCqbQhzutLAQ33ETk6Lzm5hjG44VxOwoTEm62jKUwe8Ed2XiCQPjTNfah6VL/f/V3VhSaL+aU1gSQhmFI6jfElZF0z0BGYUcZziaBIL1rMu8ERdOXyW9z24bAjESjQbf4bMJrcJSGJbRdZA9fmxY3zc3RjUA2Ad2pXZw9U65QjVK3T6tPTIX12/cN4Ol8tVTi2Xqro19Whpqlzl66u23RwZwrUbp8ved7mVyoMyOjeLe/tkJX09ifyx/9n3tXH1jEWh4vi9C4I8hHdHzWNP5fo5juqR3Zc3SN7vYY3vQ6k1yrS6Jqv13EcY6AsGavKgJdnm68CpXznke9cOXL3dl09eLtRAN2n6NZaSyvKWTruFVydBlilbO+am7jDJ0pyn7etUav1Es++klVqOUhRNhTXlTrThkJO61AFGNpQufq3r/4fGNFUbHklI/bV7KkUZjvOlen65UdNlEzTPEx7MK46kLTvvnS3TzX9/K3ZPyU3nJoxI+kiX0sGx28Z6Nhk2KNGszcZzJORwXZOyYZ6awJC1pXrHUYIq84sx+iVELalEeIj1ShxQLIFc48g/5xfxoWQ6tqRqbeWNNUTZBTsPuHSq32PfJ3+p9aCY3s1LegF7F61YOtJjtbfM+QaAQeZi3j97qKpi6qpCSgm6ZOm0f4bJ9RCt+V7V46Ger8ro3aXIakShR6VIHT82YbRjHw/IcmyVMU6spHz1fGoPpBdG+jI8cjZo7TayoY1yb5WtivpCeyVVOA7r2dCe7PHSZmAahmmbRw463RqC/6O32+q6nThFwQTSu0/Vo40M+H4vqSVQf6ePgedFdMcuxYi9mWa2zbQkZnmdlrvOl0EOukUuR44kHug37Ek+tvF+J7Z0EGt6wzYYJ6UDa5X64hGB+YjrufB3NrYfkx1WK/f7MTSa2l/Fq3UMZ3yOQFfEeIPA1/F8tBPPYUz3drShb5yYTY2BR5rCufubpvZLjC9SyPyTKJl/j+Y1Yz3rc4xm1CW8CcaA+lJRvh/mK5fWp7ap9OPSEHAKOgr5dPAcUxwzu83vz68fWFZj3S58NVEofNoYlP540lXWyWQ7+sEOloLtAxaR+/s6ML66stC0sdWXXwTeEfr22/K2JV+gB0dZ4u8BZ+vLZuD+bq1k+PAUYpe9i+YN2Bcf3oH30FMV7u7NeqmuctUu16mPltrdb2au9cLdqaHGtz96wkHu+VfLYvoXf5hFd39Cw==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer.min.js"></script>

## Install 2FA

The 2FA extension installs when you install or upgrade to Magento Open Source or Commerce 2.4.x. The extension installs like a Core Bundled Extension (CBE).

## Configure and manage 2FA

See the Magento Admin User Guide to [configure](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) 2FA settings and [manage user authenticators](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-manage.html).

Administrators have options to:

-  Review existing authenticators configured per user account
-  Require specific authenticators
-  Reset authenticators to resolve access issues

## Install authenticator

After configuring 2FA for your Magento instance, Magento Admin users must install and configure an authenticator for their personal use. For complete instructions and workflows, see [Using Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html).

### Supported authenticators

| Provider | Authentication Type | `<provider>` |
| : --------- | : --------- | : ------- |
| [Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en)  | Generate and enter code from mobile app Requirements: Enable in Admin  | `google`|
| [Authy](https://authy.com/)  | SMS, call, token, and one touch <br/>Requirements: Enable in Admin and API keys  | `authy` |
| [U2F Keys](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html#u2f-key)   | Physical device to authenticate, like [YubiKey](https://www.yubico.com/). <br/>Requirements: Enable in Admin  | `u2fkey` |
| [Duo Security](https://duo.com/)  | SMS and push notification. <br/>Requirements: Enable in Admin, Integration and Secret keys, API hostname  | `duo` |

## Troubleshooting

The extension supports command line options to revoke and reset authenticators. Use these commands when you cannot access the Magento Admin.

### Reset authenticator per account

If you need to manually reset a single user configuration, enter the following command. It restarts configuration and 2FA subscription for the user account.

```bash
bin/magento msp:security:tfa:reset <username> <provider>
```

### Advanced emergency steps

{:.bs-callout-warning}
These advanced steps require a full understanding of database management and modifications. Exercise caution when making any changes directly to your database.

In your database, you can modify the following tables and values to affect 2FA.

Table: `core_config_data`

-  `msp/twofactorauth/force_providers` - Delete this entry to remove forced providers option.

Table: `msp_tfa_user_config`

-  Delete one user row to reset the user's 2FA preference and configuration.

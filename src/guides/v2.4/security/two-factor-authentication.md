---
group: configuration-guide
title: Two-Factor Authentication
functional_areas:
  - Configuration
---

Magento Two-Factor Authentication (2FA) improves security by requiring two-step authentication to access the Magento _Admin_ UI from all devices. The extension supports multiple authenticators including Google Authenticator, Authy, Duo, and U2F keys. 2FA applies to Magento _Admin_ users only. It is not available for storefront customer accounts.

Two-Factor Authentication gives you the ability to:

-  Specify which authentication providers are supported from the _Admin_.
-  Manage and configure authenticator settings globally or per user account.
-  Reset authenticators for users.

{:.bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/index/id/129/) for contributing these features as part of the Magento Community Engineering program.

## Magento Admin Workflows

Magento has new workflows for _Admin_ users, including:

-  The ability to configure the 2FA provider globally or individually.
-  _Admin_ users set their own personal 2FA at first login, and receive a confirmation email to verify their identity.
-  The "Trust this device" option has been removed.

For more information, see [Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) in the _Magento User Guide_.

## Install 2FA

The 2FA extension installs when you install or upgrade to Magento Open Source or Commerce 2.4.X. The extension installs like a Core Bundled Extension (CBE).

## Configure and manage 2FA

See the _Magento User Guide_ to [configure](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) 2FA settings and [manage user authenticators](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-manage.html).

Administrators have options to:

-  Review existing authenticators configured per user account
-  Require specific authenticators
-  Reset or remove authenticators to resolve access issues
-  Revoke access for devices to resolve access issues

## Install authenticator

After selecting the supported 2FA authenticators for your Magento instance, each Magento _Admin_ user needs to install and configure one of the supported solutions. For complete instructions, see [Using Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html).

### Supported authenticators

| Provider | Authentication Type | `<provider>` |
| : --------- | : --------- | : ------- |
| [Google Authenticator][] | Generate and enter code from mobile app. | `google`|
| [Authy][] | SMS, call, token, and one touch <br/>Requirements: API keys  | `authy` |
| [U2F Keys][] | Physical device to authenticate, like [YubiKey][]. | `u2fkey` |
| [Duo Security][] | SMS and push notification. <br/>Requirements: Integration and Secret keys, API hostname  | `duo` |

## Headless Magento

The 2FA provider for Magento Headless can be selected with the `config:set` command.

## Magento Web API

Two-Factor Authentication is implemented for Magento Web APIs with the following changes:

-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception when the _Admin_ user doesn’t have personal 2FA configured, and also indicates that the confirmationh email has been sent.
-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception that indicates which provider is configured for the user and suggests a provider-specific login endpoint.
-  2FA provider-specific endpoints allow each _Admin_ user to configure a personal 2FA and provides tokens for username, password, and OTP (2FA code).

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#999999&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2020-09-01T14:30:46.249Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36\&quot; etag=\&quot;3sqFrPIuTE47DJa0kay9\&quot; version=\&quot;13.6.6\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;3_r6wyLoFRS8J-phUPnO\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer-static.min.js"></script>

## Magento Functional Testing Framework

MFTF uses Google Authenticator to execute tests with 2FA enabled. The following steps summarize how to configure MFTF with an encoded shared secret. For more information, see [Configuring MFTF for Two-Factor Authentication (2FA)][12].

1. Select Google Authenticator as the 2FA provider:

   ```bash
   bin/magento config:set twofactorauth/general/force_providers google
   ```

1. Increase the lifetime of the window to 60 seconds to prevent tokens from expiring.

   ```bash
   bin/magento config:set twofactorauth/google/otp_window 60
   ```

1. Generate a Base32-encoded string for the shared secret value.  For example, encoding the string `abcd` with the online [Base32 Encode][13] tool returns the value `MFRGGZDF`. Use the following key to add the encoded value to the MFTF `.credentials` file:

   ```bash
   magento/tfa/OTP_SHARED_SECRET=MFRGGZDF
   ```

1. Add the encoded shared secret to Google Authenticator.

   ```bash
   bin/magento security:tfa:google:set-secret admin MFRGGZDF
   ```

## Troubleshooting

The extension supports command line options to revoke and reset authenticators. Use these commands when you cannot access the Magento _Admin_.

### Reset authenticator per account

If you need to manually reset a single user configuration, enter the following command. It restarts configuration and 2FA subscription for the user account.

```bash
bin/magento security:tfa:reset <user> <provider>
```

### Advanced emergency steps

{:.bs-callout-warning}
These advanced steps require a full understanding of database management and modifications. We advise that you exercise caution when making any changes directly to your database.

In your database, you can modify the following tables and values to affect and override 2FA.

Table: `core_config_data`

-  `twofactorauth/general/force_providers` - Delete this entry to remove forced providers option.
-  `msp/twofactorauth/force_providers` - Delete this entry to remove forced providers option.

Table: `tfa_user_config`

-  Delete one user row to reset the user's 2FA preference and configuration.

[Google Authenticator]: https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en
[Authy]: https://authy.com/
[U2F Keys]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html#u2f-key
[YubiKey]: https://www.yubico.com/
[Duo Security]: https://duo.com/

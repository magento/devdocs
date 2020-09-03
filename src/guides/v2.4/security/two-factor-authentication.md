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

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#999999&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2020-09-02T21:21:13.064Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36\&quot; etag=\&quot;8Cj6ZA_LuLncJXUG3rji\&quot; version=\&quot;13.6.6\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;3_r6wyLoFRS8J-phUPnO\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
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

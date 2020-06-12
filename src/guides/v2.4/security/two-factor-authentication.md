---
group: configuration-guide
title: Two-Factor Authentication
functional_areas:
  - Configuration
---

Magento Two-Factor Authentication (2FA) improves security by requiring two-step authentication to access the Magento _Admin_ for all users and from all devices. The extension supports multiple authenticators including Google Authenticator, Authy, Duo, and U2F keys. 2FA is enabled by default for all Magento _Admin_ users, and cannot be disabled from the Magento _Admin_ or from the command line. 2FA is not available for storefront customer accounts.

Two-Factor Authentication gives you the ability to:

-  Manage and configure authenticator settings globally or per user account.
-  Reset authenticators for users.

{:.bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/index/id/129/) for contributing these features as part of the Magento Community Engineering program.

## Magento Admin Workflows

Magento has new workflows for _Admin_ users, including:

-  The ability to configure the 2FA provider globally or individually.
-  _Admin_ users must set their own personal 2FA at first login, and receive a confirmation email to verify their identity.
-  The "Trust this device" option has been removed.

For more information, see [Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) in the _Magento User Guide_.

## Headless Magento

The 2FA provider for Magento Headless can be selected with the `config:set` command.

## Magento Web API

Two-Factor Authentication is implemented for Magento Web APIs with the following changes:

-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception when the _Admin_ user doesn’t have personal 2FA configured, and also indicates that the confirmationh email has been sent.
-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception that indicates which provider is configured for the user and suggests a provider-specific login endpoint.
-  2FA provider-specific endpoints allow each _Admin_ user to configure a personal 2FA and provides tokens for username, password, and 2FA code.

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#999999&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2020-06-12T17:36:49.606Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36\&quot; etag=\&quot;7VO0W_LYOaHoCpBlH2jh\&quot; version=\&quot;13.2.3\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;3_r6wyLoFRS8J-phUPnO\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer.min.js"></script>

## Install 2FA

The 2FA extension installs when you install or upgrade to Magento Open Source or Commerce 2.4.X. The extension installs like a Core Bundled Extension (CBE).

## Configure and manage 2FA

See the _Magento User Guide_ to [configure](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) 2FA settings and [manage user authenticators](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-manage.html).

Administrators have options to:

-  Review existing authenticators configured per user account
-  Require specific authenticators
-  Reset authenticators to resolve access issues

## Install authenticator

After configuring 2FA for your Magento instance, Magento _Admin_ users must install and configure an authenticator for their personal use. For complete instructions and workflows, see [Using Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html).

### Supported authenticators

| Provider                 | Authentication type                                                                                     | `<provider>` |
|--------------------------|---------------------------------------------------------------------------------------------------------|--------------|
| [Google Authenticator][] | Generate and enter code from mobile app.                                                                | `google`     |
| [Authy][]                | SMS, call, token, and one touch<br> Requirements: Enable in Admin and API keys                          | `authy`      |
| [U2F Key][]              | Physical device to authenticate, like [YubiKey][].<br> Requirements: Enable in Admin                    | `u2fkey`     |
| [Duo Security][]         | SMS and push notification.<br> Requirements: Enable in Admin, Integration and Secret keys, API hostname | `duo`        |

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
These advanced steps require a full understanding of database management and modifications. Exercise caution when making any changes directly to your database.

In your database, you can modify the following tables and values to affect 2FA.

Table: `core_config_data`

-  `twofactorauth/general/force_providers` - Delete this entry to remove forced providers option.
-  `msp/twofactorauth/force_providers` - Delete this entry to remove forced providers option.

Table: `tfa_user_config`

-  Delete one user row to reset the user's 2FA preference and configuration.

[Google Authenticator]: https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en
[Authy]: https://authy.com/
[U2F Key]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html#u2f-key
[YubiKey]: https://www.yubico.com/
[Duo Security]: https://duo.com/
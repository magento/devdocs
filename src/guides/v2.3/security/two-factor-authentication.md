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
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta][1] of [MageSpecialist][2] for contributing these features as part of the Magento Community Engineering program.

## Magento Admin Workflows

Magento has new workflows for _Admin_ users, including:

-  The ability to configure the 2FA provider globally or individually.
-  _Admin_ users must set their own personal 2FA at first login, and receive a confirmation email to verify their identity.
-  The `Trust this device` option has been removed.

For more information, see [Two-Factor Authentication][3] in the _Magento User Guide_.

## Headless Magento

The 2FA provider for Magento Headless can be selected with the `config:set` command.

## Magento Web API

Two-Factor Authentication is implemented for Magento Web APIs with the following changes:

-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception when the _Admin_ user doesn’t have personal 2FA configured, and also indicates that the confirmationh email has been sent.
-  `AdminTokenServiceInterface::createAdminAccessToken()` throws an exception that indicates which provider is configured for the user and suggests a provider-specific login endpoint.
-  2FA provider-specific endpoints allow each _Admin_ user to configure a personal 2FA and provides tokens for username, password, and 2Fa code.

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#4D4D4D&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2020-06-09T20:54:57.358Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36\&quot; etag=\&quot;lHIFAjyy7UH30SC7NB4z\&quot; version=\&quot;13.2.0\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;3_r6wyLoFRS8J-phUPnO\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer.min.js"></script>

## Install 2FA

The 2FA extension installs when you install or upgrade to Magento Open Source or Commerce 2.4.x. The extension installs like a Core Bundled Extension (CBE).

## Configure and manage 2FA

See the _Magento User Guide_ to [configure][4] 2FA settings and [manage user authenticators][5].

Administrators have options to:

-  Review existing authenticators configured per user account
-  Require specific authenticators
-  Reset authenticators to resolve access issues

## Install authenticator

After configuring 2FA for your Magento instance, Magento _Admin_ users must install and configure an authenticator for their personal use. For complete instructions and workflows, see [Using Two-Factor Authentication][6].

### Supported authenticators

| Provider | Authentication Type | `<provider>` |
| : --------- | : --------- | : ------- |
| [Google Authenticator][7] | Generate and enter code from mobile app. | `google`|
| [Authy][8] | SMS, call, token, and one touch <br/>Requirements: API keys  | `authy` |
| [U2F Keys][9] | Physical device to authenticate, like [YubiKey][10]. | `u2fkey` |
| [Duo Security][11] | SMS and push notification. <br/>Requirements: Integration and Secret keys, API hostname  | `duo` |

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

1. Use CLI to add the encoded shared secret to Google Authenticator.

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

Table: `tfa_user_config`

-  Delete one user row to reset the user's 2FA preerence and configuration.

[1]: https://twitter.com/rictempesta
[2]: https://partners.magento.com/portal/details/partner/index/id/129/
[3]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html
[4]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html
[5]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-manage.html
[6]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html
[7]: https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en
[8]: https://authy.com/
[9]: https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html#u2f-key
[10]: https://www.yubico.com/
[11]: https://duo.com/
[12]: https://github.com/magento/magento2-functional-testing-framework/blob/develop/docs/configure-2fa.md
[13]: https://emn178.github.io/online-tools/base32_encode.html

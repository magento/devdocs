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

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#999999&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2020-09-02T14:28:15.860Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36\&quot; etag=\&quot;kzREnlGSVgpQnOY-plCX\&quot; version=\&quot;13.6.6\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;3_r6wyLoFRS8J-phUPnO\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer-static.min.js"></script>

## Magento Functional Testing Framework

MFTF uses Google Authenticator to execute tests with 2FA enabled. The following steps summarize how to configure MFTF with an encoded shared secret. For more information, see [Configuring MFTF for Two-Factor Authentication (2FA)](({{ page.baseurl }}/security/two-factor-authentication.html#magento-functional-testing-framework).

1. Select Google Authenticator as the 2FA provider:

   ```bash
   bin/magento config:set twofactorauth/general/force_providers google
   ```

1. Increase the lifetime of the window to 60 seconds to prevent tokens from expiring.

   ```bash
   bin/magento config:set twofactorauth/google/otp_window 60
   ```

1. Generate a Base32-encoded string for the shared secret value.  For example, encoding the string `abcd` with the online [Base32 Encode](https://emn178.github.io/online-tools/base32_encode.html) tool returns the value `MFRGGZDF`. Use the following key to add the encoded value to the MFTF `.credentials` file:

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

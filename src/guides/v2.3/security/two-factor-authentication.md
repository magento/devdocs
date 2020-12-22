---
group: configuration-guide
title: Two-Factor Authentication
functional_areas:
  - Configuration
---

Magento Two-Factor Authentication (2FA) improves security by requiring two-step authentication to access the Magento Admin UI from all devices. The extension supports multiple authenticators including Google Authenticator, Authy, Duo, and U2F keys. It applies to Magento Admin UI users only; it does not apply to storefront customer accounts.

Two-Factor Authentication gives you the ability to:

-  Enable authenticator support for the Admin.
-  Manage and configure authenticator settings globally or per user account.
-  Reset authenticators and manage trusted devices for users.

At this time, Two-Factor Authentication can be installed only from the command line.

## Install 2FA

The 2FA extension installs when you install or upgrade to Magento Open Source or Commerce 2.3.X. This extensions installs like a Core Bundled Extension (CBE).

## Configure and manage 2FA

See the Magento Admin User Guide to [configure](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication.html) 2FA settings and [manage user authenticators](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-manage.html).

Administrators have options to:

-  Review existing authenticators configured per user account
-  Require specific authenticators
-  Reset or remove authenticators to resolve access issues
-  Revoke access for devices to resolve access issues

## Install authenticator

After enabling and configuring 2FA for your Magento instance, Magento Admin users need to install and configure an authenticator. For complete instructions, see [Using Two-Factor Authentication](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html).

### Supported authenticators

| Provider | Authentication Type | `<provider>` |
| : --------- | : --------- | : ------- |
| [Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en)  | Generate and enter code from mobile app Requirements: Enable in Admin  | `google`|
| [Authy](https://authy.com/)  | SMS, call, token, and one touch <br/>Requirements: Enable in Admin and API keys  | `authy` |
| [U2F Keys](https://docs.magento.com/m2/ee/user_guide/stores/security-two-factor-authentication-use.html#u2f-key)   | Physical device to authenticate, like [YubiKey](https://www.yubico.com/). <br/>Requirements: Enable in Admin  | `u2fkey` |
| [Duo Security](https://duo.com/)  | SMS and push notification. <br/>Requirements: Enable in Admin, Integration and Secret keys, API hostname  | `duo` |

## Troubleshooting

The extension supports command line options for disabling, revoking, and resetting authenticators. Use these commands when you cannot access the Magento Admin UI.

### Disable authenticator

If you have issues with 2FA, you can disable 2FA globally for the Magento instance.

```bash
bin/magento msp:security:tfa:disable
```

### Reset authenticator per account

If you need to manually reset a single user configuration, enter the following command. It restarts configuration and 2FA subscription for the user account.

```bash
bin/magento msp:security:tfa:reset <username> <provider>
```

### Advanced emergency steps

{:.bs-callout-warning}
These advanced steps require a full understanding of database management and modifications. We advise caution when making any changes directly to your database.

In your database, you can modify the following tables and values to affect and override 2FA.

Table: `core_config_data`

-  `msp/twofactorauth/enabled` - Set to zero to disable 2FA globally.
-  `msp/twofactorauth/force_providers` - Delete this entry to remove forced providers option.

Table: `msp_tfa_user_config`

-  Delete one user row to reset the user's 2FA preference and configuration.

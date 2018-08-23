---
group: security
title: Two-Factor Authentication
functional_areas:
  - Configuration
---

The Magento Admin provides all access to your store, orders, and customer data. To further increase security to your Magento instance, add Magento Two-Factor Authentication (2FA), v3.0.0. Installing and enabling this module adds two-step authentication for all users attempting to access the Admin for all devices. All features and requirements are restricted to Admin user accounts, not extended to customer accounts.

At this time, Two-Factor Authentication can be installed only from the command line.

Two-Factor Authentication gives you the ability to:

- Enable authenticator support for the Admin.
- Manage and configure authenticator settings globally or per user account.
- Reset authenticators and manage trusted devices for users.

{:.bs-callout .bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/id/129) for contributing these features as part of the Magento Community Engineering program.

## Install 2FA

You will need to install the extension using composer for v2.1 and v2.2. The features will be included in default installations and upgrades of v2.3.

You can install the module using the following composer command:

``` bash
composer require msp/twofactorauth:3.0.0
```

If you already have installed a Magento instance, you need to run the following commands to enable the module:

``` bash
php bin/magento module:enable --all
php bin/magento setup:upgrade
```

## Configure 2FA

To enable and configure 2FA, see the [Magento Admin User Guide](https://docs.magento.com/m2/2.1/ee/user_guide/stores/security-two-factor-authentication.html).

## Install authenticator

After enabling and configuring 2FA, your staff will need to:

1.	Install one of the supported authenticators to a mobile device or obtain a configured device.

    For example, you can install the Google Authenticator app to a mobile device such as a smart phone or tablet. Depending on the OS, you can download and install the authenticator from [Google Play](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en) or [iOS App Store](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DiOS&hl=en&oco=0).

1.	Log into the Magento Admin and configure their authenticator. The first login prompts to configure the authenticator. For complete instructions, see [Using Two-Factor Authentication](https://docs.magento.com/m2/2.1/ee/user_guide/stores/security-two-factor-authentication-use.html).

    For example, Google Authenticators will provide a QR code to configure access at Magento Admin login.

Additional logins to the Admin from new devices will require the entered code or attached device.

### Supported authenticators

| Provider | Authentication Type |
| --------- : | --------- : |
| [Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en)  | Generate and enter code from mobile app Requirements: Enable in Admin  |
| [Authy](https://authy.com/)  | SMS, call, token, and one touch <br/>Requirements: Enable and API keys  |
| [U2F Keys](https://docs.magento.com/m2/2.1/ee/user_guide/stores/security-two-factor-authentication-use.html)   | Physical device to authenticate, [YubiKey](https://www.yubico.com/) and other models supported. <br/>Requirements: Enable in Admin  |
| [Duo Security](https://duo.com/)  | SMS and push notification. <br/>Requirements: Enable, Integration and Secret keys, API hostname  |

## Manage authenticators

Admins have options for resetting authenticators, revoking access for devices, and troubleshooting issues through the [Magento Admin](https://docs.magento.com/m2/2.1/ee/user_guide/stores/security-two-factor-authentication-manage.html).

## Troubleshooting

The extension supports command line options for disabling, revoking, and resetting authenticators.

### Disable authenticator

If you have issues with 2FA, you can disable it from command-line. This will disable 2FA globally.

``` bash
php bin/magento msp:security:tfa:disable
```

### Reset authenticator per account

If you need to manually reset a single user configuration, enter the following from the command-line. The command restarts configuration and 2FA subscription for the user account.

``` bash
php bin/magento msp:security:tfa:reset <username> <provider>
```

Example reset commands:

- Google Authenticator: `php bin/magento msp:security:tfa:reset admin google`
- U2F Device: `php bin/magento msp:security:tfa:reset admin u2fkey`
- Authy: `hp bin/magento msp:security:tfa:reset admin authy`

### Advanced emergency steps

{:.bs-callout .bs-callout-warning}
Do not attempt modifying any database information without full understanding of modifications and database management. This is an advanced procedure.

In your database, you can modify the following tables and values to affect and override 2FA. We advise caution when making any changes directly to your database.

Table: `core_config_data`

- `msp/twofactorauth/enabled` - Set to zero to disable 2FA globally.
- `msp/twofactorauth/force_providers` - Delete this entry to remove forced providers option.

Table: `msp_tfa_user_config`

- Delete one user row to reset the user's 2FA preference and configuration.

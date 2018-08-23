---
group: security
title: Google reCAPTCHA
functional_areas:
  - Configuration
---

This extension adds the Google reCAPTCHA module to your Magento installation. Google reCAPTCHA provides a greater level of security for both the storefront and Admin than what is available with the standard CAPTCHA, and gives you the ability to:

- Verify when customers create accounts, retrieve passwords, log in to their accounts, or contact your company.
- Enhance security when Admin users log in.

Google reCAPTCHA reduces potential user error when entering a series of letters and numbers, and encourages cart conversion without adding hurdles during checkout.

At this time, Google reCAPTCHA can be installed only from the command line.

{:.bs-callout .bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/id/129) for contributing these features as part of the Magento Community Engineering program.

## Install Module

You will need to install the extension using composer for v2.1 and v2.2. The features will be included in default installations and upgrades of v2.3.

You can install the module using the following composer command:

``` bash
composer require msp/recaptcha:2.0.0
```

If you already have installed a Magento instance, you need to run the following commands to enable the module:

``` bash
php bin/magento module:enable --all
php bin/magento setup:upgrade
```

## Configure reCAPTCHA

For full details and walk-throughs for configuring and using Google reCAPTCHA, see the [Magento Admin User Guide](https://docs.magento.com/m2/2.1/ee/user_guide/stores/security-google-recaptcha.html).

## Troubleshooting

If you have issues with reCAPTCHA, you can disable it from the command-line. This will disable the module for backend access.

``` bash
php bin/magento msp:security:recaptcha:disable
```

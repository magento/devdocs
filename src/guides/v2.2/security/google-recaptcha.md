---
group: configuration-guide
title: Google reCAPTCHA
functional_areas:
  - Configuration
---

This extension adds the Google reCAPTCHA module to your Magento installation. Google reCAPTCHA provides a greater level of security for both the storefront and Admin UI than is available with standard CAPTCHA, and gives you the ability to:

-  Verify when customers create accounts, retrieve passwords, log in to their accounts, or contact your company.
-  Enhance security when Admin users log in.

Google reCAPTCHA reduces potential user error when entering a Captcha code and encourages cart conversion without adding hurdles during checkout.

{:.bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/id/129) for contributing these features as part of the Magento Community Engineering program.

## Install Module

{:.bs-callout-info}
The Google reCAPTCHA extension is bundled and installed with {{site.data.var.ce}} and {{site.data.var.ee}} 2.1.18 and 2.2.9 and later.

Install the extension using the following Composer command:

```bash
composer require msp/recaptcha
```

To complete installation in an existing Magento instance, run the following commands to enable the module:

```bash
bin/magento module:enable MSP_ReCaptcha
```

```bash
bin/magento setup:upgrade
```

```bash
bin/magento cache:clean
```

## Configure reCAPTCHA

See the [Magento Admin User Guide](https://docs.magento.com/m2/ce/user_guide/stores/security-google-recaptcha.html) for configuration options to the Magento Admin UI and storefront.

## Troubleshooting

The extension supports a command line option for disabling reCAPTCHA. Use this command when you cannot access the Magento Admin UI.

```bash
bin/magento msp:security:recaptcha:disable
```

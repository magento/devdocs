---
group: configuration-guide
title: Google reCAPTCHA
functional_areas:
  - Configuration
---

Google reCAPTCHA provides a greater level of security for both the storefront and Admin UI than is available with standard CAPTCHA, and gives you the ability to:

-  Verify when customers create accounts, retrieve passwords, log in to their accounts, or contact your company.
-  Enhance security when Admin users log in.

Google reCAPTCHA reduces potential user error when entering a Captcha code and encourages cart conversion without adding hurdles during checkout.

## Install module

The Google reCAPTCHA extension is bundled and installed with {{site.data.var.ce}} and {{site.data.var.ee}} 2.3.x.

## Configure reCAPTCHA

{:.bs-callout-warning}
Before reCAPTCHA can be configured, ensure that your `PHP.ini` file includes this setting: `allow_url_fopen = 1`. See [Required PHP Settings]({{page.baseurl}}/install-gde/prereq/php-settings.html).

See [Google reCAPTCHA](https://docs.magento.com/user-guide/stores/security-google-recaptcha.html) in the _Commerce User Guide_ for configuration options in the Admin and storefront.

## Troubleshooting

The extension supports a command line option for disabling reCAPTCHA. Use this command when you cannot access the Admin UI.

```bash
bin/magento msp:security:recaptcha:disable
```

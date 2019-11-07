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

{:.bs-callout .bs-callout-info}
**Magento Community Contribution** - Magento thanks [Riccardo Tempesta](https://twitter.com/rictempesta) of [MageSpecialist](https://partners.magento.com/portal/details/partner/id/129) for contributing these features as part of the Magento Community Engineering program.

## Install Module

The Google reCAPTCHA extension is bundled and installed with {{site.data.var.ce}} and {{site.data.var.ee}} 2.3.x.

## Configure reCAPTCHA

See the Magento Admin User Guide [Open Source](https://docs.magento.com/m2/ce/user_guide/stores/security-google-recaptcha.html) and [Commerce](https://docs.magento.com/m2/ee/user_guide/stores/security-google-recaptcha.html) for configuration options in the Magento Admin and storefront.

## Troubleshooting

The extension supports a command line option for disabling reCAPTCHA. Use this command when you cannot access the Magento Admin UI.

```bash
bin/magento msp:security:recaptcha:disable
```
